import Router from "koa-router";
import axios from "./utils/axios"


import Poi from "../dbs/models/poi"


let router = new Router({ prefix: '/search' })

router.get('/top',async (ctx)=>{

})

export default router