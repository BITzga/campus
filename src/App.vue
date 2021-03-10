<template>
  <el-container direction=vertical>
        <!-- <login></login> -->
       <nav-menu></nav-menu> 
      <router-view></router-view>

    <!-- <img src="http://localhost:8090/images/img/WIN_20181209_11_56_09_Pro.jpg" alt="me"> -->
    <!-- <invitations></invitations>
     -->
     <!-- <invitations></invitations> -->
     <!-- <invitation-edit></invitation-edit> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </el-container>

</template>

<script>
// import Invitations from '../../VueCampus/campus/src/views/Invitations.vue'
import axios from './axios' 
import NavMenu from './components/NavMenu';
// import Login from './views/Login.vue';
// // import HelloWorld from './components/HelloWorld.vue'
//  import InvitationEdit from './views/InvitationEdit.vue'
// import Invitations from './views/Invitations.vue'


export default {
  name: 'App',
  components: {
    NavMenu,
    // Login,
    // // HelloWorld,
    //  InvitationEdit,
    // Invitations,
    // Invitations,

  },
  data(){
    return{
      info:"axios"

    };
  },
  mounted() {
    var _this = this;
    axios.get("invitation/10001").then(
      (res) => {
        console.log(res.data);
        _this.info = res.data.data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
