export default {
    //链接本地数据库
    dbs: 'mongodb://admin:5511@localhost:27017/mt?authSource=admin',
    //配置 redis
    redis: {
        get host() {
            return '127.0.0.1'
        },
        get port() {
            return 6379
        }
    },
    //链接qq邮箱
    smtp: {
        get host() {
            return 'smtp.qq.com'
        },
        get user() {
            return '2983973848@qq.com'
        },
        get pass() {
            return 'avmbclljyjhldfif'
        },
        //获取验证码
        get code() {
            return () => {
                return Math.random().toString(16).slice(2, 6).toUpperCase()
            }
        },
        //设置过期时间
        get expire() {
            return () => {
                return parseInt(new Date().getTime()) + (60*1000);
            }
        }
    }
}