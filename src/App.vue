<template>
  <div>
    <invitations></invitations>
    
    <!-- <invitation-edit></invitation-edit>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import InvitationEdit from './views/InvitationEdit.vue'
import Invitations from './views/Invitations.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld,
    // InvitationEdit,
    Invitations,

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
