<template>
    <el-row>
       <el-col :span="8"></el-col>
        <el-col :span="8">
   
          <el-menu :default-active="this.$router.path" router class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="/Invitations" :span="8" >
                广场
              </el-menu-item>        
              <el-menu-item index="/Topics" :span="8" >
                校友圈        
              </el-menu-item>
              <el-menu-item index="/me"  :span="8"  :offset="8">
                我
              <el-avatar shape="square" :size="size" :src="squareUrl" ></el-avatar>
              </el-menu-item>
          </el-menu>
           
        </el-col>
        <el-col :span="8">
          <el-col>
            <el-col :span="8">
              <el-input size="small"></el-input>
            </el-col>
            <el-col :span="8">
              <el-button type="primary" icon="el-icon-search">搜索</el-button>

            </el-col>
          </el-col>
            
            <el-col>
            <el-button type="primary" round @click="routerToInvite">发起活动</el-button>
            <el-button type="success" round @click="routerToTopic">发帖子</el-button>
            </el-col>
        </el-col>
    </el-row>


</template>
<script>
export default {
    name:'NavMenu',
    data() {
      return {
        activeIndex: '/Invitations',
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        size:"large"
      };
    },
    methods: {
      routerToInvite(){
        this.$router.push({ path: '/Invitation/edit'});
      },
      routerToTopic(){
        this.$router.push({ path: '/Topic/edit'});
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>