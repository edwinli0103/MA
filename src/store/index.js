import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
export default function() {
    const store = new Vuex.Store({
        state: {
            username: '',
            password: ''
        },
        mutations: {
            setinfo (state, n) {
                state.username = n.x;
                state.password = n.y;
            },
            updateinfo (state, n) {
                state.username = n.x;
                state.password = n.y;
            },
        }
    })
    return store;
}