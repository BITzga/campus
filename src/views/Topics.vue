<template>
     <div>
        <el-row>
            <el-col :span="4"></el-col>
            <el-col :span="20">
              <el-timeline >
                  <el-timeline-item
                  v-for="(topic, index) in topics"
                  :key="index"
                  :timestamp="topic.sendDate">
                      <el-card>
                        
                          <el-col>
                            <el-avatar :size="small" :src="topic.headImg"></el-avatar>
                            <el-row>{{topic.username}}</el-row>
                          </el-col>
                        
                          
                        <p>{{topic.sendDate}}</p>
                        <p>{{topic.title}}</p>
                        <p>{{topic.context}}</p>
                        <el-tag type="success">点击查看大图</el-tag>
                        <div v-for="url in topic.imgUrl"  :key="url">
                            <el-image
                                style="width: 200px; height: 200px"
                                :src="url"
                                :preview-src-list="topic.imgUrl"
                                >
                            </el-image>
                        </div>
                        <el-divider></el-divider>         
                        <comment-area :Invitation="topic"></comment-area>                   
                      </el-card>
                  </el-timeline-item>
              </el-timeline>
            </el-col>
            <el-footer>
                <el-pagination
                    layout="prev, pager, next"
                    :total="1000">
                </el-pagination>     
            </el-footer> 
        </el-row>        
    </div>
</template>
<script>
import axios from '../axios'
import commentArea from '../components/CommentArea';
export default {
  components: { commentArea },
    name:'Topics',
    data(){
        return{
            topics:{},
            pageSize:'',
            page:'',
            status:''
        }       
    },
     methods: {
      getTopics(page) {
          var _this = this;
          axios.get("/topics?page=" + page+"&size=10").then(res => {
          console.log("here");
          console.log(res);
        //   console.log(res.data.content);
          _this.topics =  res.data.data.content;
        //   _this.Invitations = res.data.data
        //   _this.pageSize = res.data.pageSize
        //   _this.pageCount = res.data.pageCount
        //   _this.status = res.data.status

        })
      }
    },
    created() {
      this.getTopics(0)
    }
}
</script>