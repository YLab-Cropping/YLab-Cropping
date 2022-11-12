import { createStore } from 'vuex'

export default createStore({
  state: {

    token:'',
    phone:''
  },
  getters: {

    getToken(state){
      return  state.token || localStorage.getItem("token") || "";

    }
  },
  mutations: {
    //修改token,并将token存入localStorage
    setToken(state,token){
      state.token = token;
      localStorage.setItem('token',token);
      console.log("store \localstroage 保存token成功")
    },

    delToken(state){
      state.token= '';
      localStorage.removeItem("token");

    },
    //可选

    setUserInfo(state,phone){
      state.phone =phone
    }

  },
  actions: {
  },
  modules: {
  }
})
