import { createStore } from 'vuex'

export default createStore({

     state : {
       
        token:'',
        name:'',
        avatar:'',
       
        user:{
            id:112,
            pwd:''
        }
    
    },
    
     mutations:{
    
        SET_TOKEN:(state,token)=>{
    
    
            state.token=token;
            localStorage.setItem("token", token);
        },
        SET_NAME: (state, name) => {
            state.name = name
            sessionStorage.setItem("name", JSON.stringify(name))
          },
        SET_ID: (state, id) => {
            state.user.id = id
          },
          SET_PWD: (state, pwd) => {
            state.user.pwd = pwd
          },
        REMOVE_INFO: (state) => {
            state.token = ''
            state.name = {}
            state.avatar=''
            localStorage.setItem("token", '')
            sessionStorage.setItem("name", JSON.stringify(''))
        } 
    },
    getters: {
        getUser:state=>{
            return state.user
        },
        getId:state=>{
return state.id

        },
        // get
        getName: state => {
          return state.name
        },
        getToken:state=>{

            return state.token
        },
        getAvatar:state=>{

            return state.avatar
        }
    
    }


})

