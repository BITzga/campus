<template>
  <div>
    <el-container>
 
      <el-main>
        <el-form   label-width="100px">
          <el-form-item label="用户名" >
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="ruleForm.pwd"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click.prevent="submitForm">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>

      </el-main>
    </el-container>

  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        ruleForm: {
          username: 'jack',
          pwd: 'pwd'
        },
        user:{
            id: 0,
            pwd:''

        }
      };
    },
    methods: {
      submitForm() {
           let axios = require('axios').default;
            const _this = this;
            axios.post('/sign',{username:this.ruleForm.username,pwd:this.ruleForm.pwd}).then(res => {

             console.log(res.data)
            const jwt = res.headers['token']
            // const userInfo = res.data.data
            console.log(jwt)
        //   // 把数据共享出去
                 //_this.$store.commit("SET_TOKEN", jwt)
                console.log("k"+"SET_ID"+ res.data.data.id)
               _this.$store.commit("SET_ID", res.data.data.id)
                _this.$store.commit("SET_PWD", res.data.data.pwd)

    
              // 获取
             console.log(_this.$store.getters.getId)
            console.log(_this.$store.getters.getUser)
              _this.$router.push("/Invitations")
            });
                            this.user.id = 200025
                this.user.pwd ="123456789"
            axios.post('/login', this.user).then(res=>{
                
                 console.log("tag")
                console.log(res.data.data)
                 const jwt =res.data.data
                 _this.$store.commit("SET_TOKEN", jwt)
            })
        }
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    /*background-color: #E9EEF3;*/
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .mlogo {
    height: 60%;
    margin-top: 10px;
  }

  .demo-ruleForm {
    max-width: 500px;
    margin: 0 auto;
  }

</style>