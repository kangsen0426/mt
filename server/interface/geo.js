import Router from "koa-router";
import Config from '../dbs/config';
import axios from "./utils/axios"

import Menu from "../dbs/models/menu"


let router = new Router({ prefix: '/geo' })

const sign = Config.sign


router.get('/getPosition', async (ctx) => {

    let {
        status,
        data
    } = await axios.get(`https://pv.sohu.com/cityjson?ie=utf-8`)


    if (status === 200) {
        ctx.body = {
            data
        }
    } else {
        ctx.body = {
            data: JSON.parse(JSON.stringify(data))
        }
    }


})

//获取菜单数据
router.get('/menu', async (ctx) => {
    const result = await Menu.findOne()

    if (result) {
        ctx.body = {
            code: 0,
            menu: data.menu
        }
    } else {
        ctx.body = {
            code: -1,
            menu: ['数据获取失败']
        }
    }
})

export default router