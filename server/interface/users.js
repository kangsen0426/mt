import Router from "koa-router"
import Redis from "koa-redis"
import nodeMailer from 'nodemailer'
import Passport from "./utils/passport"
import axios from "./utils/axios"
import Email from "../dbs/config"



import User from "../dbs/models/users"



//配置路由前缀

let router = new Router({
    prefix: '/users'
})


//创建 Redis 服务
let Store = new Redis().client


//注册用户
router.post('/signup', async (ctx) => {
    const {
        username,
        password,
        email,
        code
    } = ctx.request.body

    if (code) {
        //读取缓存的验证码
        const saveCode = await Store.hget(`nodemail:${username}`, 'code')
        //读取有效时间
        const saveExpire = await Store.hget(`nodemail:${username}`, 'expire')

        if (code === saveCode) {
            //验证码正确
            if (new Date().getTime() - saveExpire > 0) {
                ctx.body = {
                    code: -1,
                    msg: '验证码已过期，请重新尝试'
                }

                return false
            }
        } else {
            ctx.body = {
                code: -1,
                msg: '验证码错误'
            }
        }
    } else {
        ctx.body = {
            code: -1,
            msg: '请填写验证码'
        }


    }

    //验证用户名是否正确
    let user = await User.find({
        username
    })

    if (user.length) {

        ctx.body = {
            code: -1,
            msg: '用户名已被注册'
        }

        return
    }

    //注册用户
    let newUser = await User.create({
        username,
        password,
        email
    })

    if (newUser) {
        //注册完成自动登入

        let res = await axios.post('/users/signin', {
            username,
            password
        })

        if (res.data && res.data.code === 0) {
            ctx.body = {
                code: 0,
                msg: '注册成功',
                user: res.data.user
            }
        } else {
            ctx.body = {
                code: -1,
                msg: 'error',
            }
        }
    } else {
        //写库失败
        ctx.body = {
            code: 0,
            msg: '注册失败',

        }
    }


})

//用户登入
router.post("/signin", async (ctx, next) => {
    return Passport.authenticate('local', (err, user, info, status) => {
        if (err) {
            ctx.body = {
                code: -1,
                msg: 'err'
            }
        } else {
            if (user) {
                ctx.body = {
                    code: 0,
                    msg: '登入成功',
                    user
                }

                return ctx.login(user)
            } else {

                ctx.body = {
                    code: 1,
                    msg: info,

                }
            }

        }
    })(ctx, next)
})

//发送验证码
router.post('/verify', async (ctx, next) => {
    let username = ctx.request.body.username
    const saveExpire = await Store.hget(`nodemail:${username}`, 'expire')

    if (saveExpire && new Date().getTime() - saveExpire < 0) {
        ctx.body = {
            code: -1,
            msg: '验证请求过于频繁，一分钟内一次'
        }

        return false
    }

    //发送验证码至邮件
    let transporter = nodeMailer.createTransport({
        host: Email.smtp.host,
        port: 587,
        secure: false,
        auth: {
            user: Email.smtp.user,
            pass: Email.smtp.pass
        }
    })

    let ko = {
        code: Email.smtp.code(),
        expire: Email.smtp.expire(),
        email: ctx.request.body.email,
        user: ctx.request.body.username
    }

    let mailOptions = {
        from: `"认证邮件" <${Email.smtp.user}>`,
        to: ko.email,
        subject: "《高仿美团网全栈实战》注册码",
        html: `您的邀请码是${ko.code}，有效期一分钟。`
    }

    await transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return console.log('error');
        } else {
            //保存信息
            Store.hmset(`nodemail:${ko.user}`, 'code', ko.code, 'expire', ko.expire, 'email', ko.email)
        }
    })

    ctx.body = {
        code: 0,
        msg: '验证码已发送，请注意查收'
    }


})

//退出登入
router.get('/exit', async (ctx, next) => {
    await ctx.logout()

    if (!ctx.isAuthenticated()) {
        //查看是否在登入状态
        ctx.body = {
            code: 0,
            msg: '退出成功'
        }
    } else {
        ctx.body = {
            code: -1,
            msg: "退出失败"
        }
    }
})

router.get('/getUser', async (ctx) => {
    //如果在登入状态
    if (ctx.isAuthenticated()) {
        const { username, email } = ctx.session.passport.user

        ctx.body = {
            user: username,
            email
        }
    } else {
        ctx.body = {
            user: '',
            email: ''
        }
    }
})

export default router