import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        count:0
    },
    mutations:{     
        updateMsgMutation(state){
            state.count+=5
        }
    },
    getters:{    

    },
   
    actions:{
        updateMsgAction(context,payload){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    context.commit("updateMsgMutation");
                    console.log(payload);
                    resolve("commit成功了")
                },2000)
            })
        }
    },
    modules:{

    }
})

export default store