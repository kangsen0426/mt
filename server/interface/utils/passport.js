import passport from 'koa-passport'
import LocalStrategy from "passport-local"
import UserModel from "../../dbs/models/users"

passport.use(new LocalStrategy(async (username, password, done) => {

    //查询
    let where = {
        username
    }

    let result = await UserModel.findOne(where)

    if (result != null) {
        if (result.password === password) {
            return done(null, result)
        } else {
            return done(null, false, '密码错误')
        }
    } else {
        return done(null, false, '用户不存在')
    }
}))

//序列化  session读取免密登入
passport.serializeUser((user, done) => {
    done(null, user)
})

//反序列化
passport.deserializeUser((user, done) => {
    return done(null, user)
})


export default passport