import Vue from "vue"
import Vuex from "vuex"
import geo from "./modules/geo"
import axios from "../server/interface/utils/axios"

Vue.use(Vuex)

const store = () => new Vuex.Store({
    modules: {
        geo
    },
    actions: {
        async nuxtServerInit({
            commit
        }, { req, app }) {
            const {
                status,
                data
            } = await axios.get('/geo/getPosition')

            console.log(data);

            //提交
            commit('/geo/getPosition', data)
        }
    }
})

export default store