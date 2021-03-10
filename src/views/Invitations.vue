<template>
    <el-container>
        <el-header>
            <el-row>  
                <el-col :span="8"></el-col>
                <el-col :span="16">
                    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                        <el-tab-pane label="全部" name="all"></el-tab-pane>
                        <el-tab-pane label="羽毛球" name="羽毛球"></el-tab-pane>
                        <el-tab-pane label="游泳" name="游泳"></el-tab-pane>
                        <el-tab-pane label="篮球" name="篮球"></el-tab-pane>
                        <el-tab-pane label="骑行" name="骑行"></el-tab-pane>
                        <el-tab-pane label="其他" name="其他"></el-tab-pane>
                    </el-tabs>                
                </el-col>  
            </el-row>    

        </el-header>
        <el-main type="flex" justify="center" align="middle">
            <el-divider></el-divider>
            <el-row>
                <el-col :span="4"></el-col>
                <el-col :span="16">
                    <el-timeline>
                        <el-timeline-item
                        v-for="(Invitation, index) in Invitations"
                        :key="index"
                        :timestamp="Invitation.sendDate">
                            <el-card>
                                <el-row>状态：{{new Date()>Invitation.activity.deadline?'已截止':'进行中'}}</el-row>         
                                <el-row><p>     {{Invitation.title}}</p></el-row>
                                <el-row>
                                    <el-col :span="4">
                                        <el-avatar :size="small" :src="Invitation.headImg"></el-avatar>
                                        <el-row>{{Invitation.ownerName}} 邀请你加入  </el-row>                        
                                        <el-row>活动类型：{{Invitation.tag}}</el-row>
                                        <el-row>地点：{{Invitation.position}}</el-row>
                                        <el-row>已有{{getJsonLength(Invitation.activity.followers)}}人加入</el-row>                                   
                                        <el-row>{{Invitation.content}}</el-row>
                                        <el-row>活动时间:{{Invitation.activity.start}}-{{Invitation.activity.end}}</el-row>
                                        <el-row>截止时间:{{Invitation.activity.deadline}}</el-row>
                                    </el-col>
                                   
                                        
                                    
                                    <el-col :span="20">
                                        
                                        <el-tag type="success">点击查看大图</el-tag>
                                        <div v-for="url in Invitation.imgUrl"  :key="url">
                                            <el-image
                                                style="width: 200px; height: 200px"
                                                :src="url"
                                                :preview-src-list="Invitation.imgUrl"
                                                >
                                            </el-image>
                                        </div>

                                    </el-col>

                                </el-row>
                                <el-row>
                                    <el-button type="primary" round>加入</el-button>
                                </el-row>
                                <el-divider></el-divider>
                                <comment-area :Invitation="Invitation" ></comment-area>
                            </el-card>
                        </el-timeline-item>
                    </el-timeline>  
                </el-col>      
                <el-col :span="4"></el-col>   
            </el-row>  
        </el-main>
        <el-footer>
            <el-pagination
                
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>     
        </el-footer>      
    </el-container>
</template>
<script>
import axios from '../axios'
import commentArea from '../components/CommentArea';
export default {
  components: { commentArea },
 
    name:'Invitations',
    computed:{
  
        
    },
    data(){
        return{
            subCommentStatus:{},
            commentStatus:{},
            activeName: '全部',
            Invitations:{},
            pageSize:10,
            page:'',
            status:''
        }       

    },
     methods: {
         showSubComments(index){
            if(this.subCommentStatus[index]===true){
                this.subCommentStatus[index]=false;
                return;
            }
            this.subCommentStatus[index]=true;
         },
         showComments(index){
            if(this.commentStatus[index]===true){
                this.commentStatus[index]=false;
                return;
            }
            this.commentStatus[index]=true;
         },
           getJsonLength(jsonData){
            var jsonLength = 0;
            for(var item in jsonData){
                console.log(item);
                jsonLength++;
            }
            return jsonLength;
        } ,       
      getInvitations(page,tag) {
        var _this = this;
        axios.get("/invitations?tag="+tag+"&page=" + page+"&size=10").then(res => {
            console.log("here");
             console.log(res);
          _this.Invitations =  res.data.data.content;

        })
      },
        handleClick() {
        console.log(this.activeName);
        var _this = this;
        axios.get("/invitations?tag="+this.activeName+"&page=" + 0+"&size=10").then(res => {
            console.log("here");
             console.log(res);
          _this.Invitations =  res.data.data.content;
        })
      }
    },
    created() {
      this.getInvitations(0,"all")
    }
}
</script>