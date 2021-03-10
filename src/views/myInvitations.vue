<template>
    <el-container>
        <el-row>
            <el-timeline >
                <el-timeline-item
                v-for="(Invitation, index) in Invitations"
                :key="index"
                :timestamp="Invitation.sendDate">
                    <el-card>
                    <el-row>{{Invitation.title}}</el-row>
                    <el-row>活动类型：{{Invitation.tag}}</el-row>
                    <el-row>地点：{{Invitation.position}}   活动时间:{{Invitation.deadline}}</el-row>
                    <el-row>已有{{getJsonLength(Invitation.activity.followers)}}人加入</el-row>
                    <el-avatar :size=small :src="Invitation.headImg">   
                    </el-avatar>
                    <div v-for="url in Invitation.imgUrl"  :key="url">
                        <el-image
                            style="width: 100px; height: 100px"
                            :src="url"
                            >
                        </el-image>
                    </div>
                        {{Invitation.content}}
                    </el-card>
                </el-timeline-item>
            </el-timeline>           
        </el-row>       
    </el-container>
</template>
<script>
import axios from '../axios'
export default {
  components: {  },
 
    name:'myInvitations',
    data(){
        return{

            Invitations:{},
            pageSize:10,
            page:'',
            status:''
        }       

    },
     methods: {
                  getJsonLength(jsonData){
            var jsonLength = 0;
            for(var item in jsonData){
                console.log(item);
                jsonLength++;
            }
            return jsonLength;
        }, 
      getMyInvitations(id,page) {
            var _this = this;
            axios.get("/me/"+id+"/invites?page=" + page+"&size=10").then(res => {
                console.log("getMyInvitations");
                console.log(res);
            //   console.log(res.data.content);
                _this.Invitations =  res.data.data.content;

            })
        }
    },
    created() {

      this.getMyInvitations(10001,0)
    }
}
</script>