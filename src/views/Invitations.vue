<template>
    <div>
        <el-row>
            <nav-menu></nav-menu>
        </el-row>
         <el-divider></el-divider>
        <el-row>
  <el-timeline >
            <el-timeline-item
             v-for="(Invitation, index) in Invitations"
             :key="index"
             :timestamp="Invitation.timestamp">
                <el-card>
                <p>{{Invitation.title}}</p>
                <p>地点：{{Invitation.position}}   活动时间:{{Invitation.deadline}}</p>
                <p>已有{{Invitation.followCount}}人加入</p>
                <div v-for="url in Invitation.urls"  :key="url">
                    <el-image
                        style="width: 100px; height: 100px"
                        :src="url"
                        :fit="Invitation.fit">
                    </el-image>
                </div>
                    {{Invitation.content}}
                </el-card>
                
            </el-timeline-item>
        </el-timeline>           
        </el-row>     
       
    </div>
</template>
<script>
import NavMenu from '../components/NavMenu.vue'

export default {
  components: { NavMenu },
    name:'Invitations',
    data(){
        return{

            Invitations: [{
                id:'',
                ownerId:'',
                tag:'篮球',
                urls:['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg','https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'],
                comments:[],
                title:'南校区篮球场有人吗',
                content: '活动按期开始',
                views:'5',
                likes:'4',
                sendDate: '2021-04-15',
                deadline:'2021-04-16',
                followCount:'4',
                followers:[],
                position:'南校区',
                fit:'fill'
            }],
            pageSize:'',
            pageCount:'',
            status:''
        }       

    },
     methods: {
      getInvitations(currentPage) {
        const _this = this
        _this.$axios.get("/Invitations?currentPage=" + currentPage).then(res => {
          console.log(res)
          _this.Invitations = res.data.data
          _this.pageSize = res.data.pageSize
          _this.pageCount = res.data.pageCount
          _this.status = res.data.status

        })
      }
    },
    created() {
      this.getInvitations(0)
    }
}
</script>