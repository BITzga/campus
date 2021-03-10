<template >
    <div>   
        <el-row>
            <el-button type="primary" round icon="el-icon-caret-top"></el-button>
            <el-button type="primary" round>评论</el-button>
            <el-button type="success" round @click="showComments(index)">查看详情</el-button>
        </el-row>
        <el-row  v-if="commentStatus[index]">
        <el-row>
            {{getJsonLength(Invitation.comments)}}条评论
        </el-row>
        <el-col>
            <el-card v-for="(comment,commentIndex) in Invitation.comments"  :key="commentIndex">
                <el-row>
                    <el-col span="2">
                        <el-avatar :size="small" :src="comment.headImg"></el-avatar>
                        {{comment.username}}
                    </el-col> 
                    <el-col span="22">
                        {{comment.sendDate}}
                    </el-col>                                           
                </el-row>
                <el-row>{{comment.context}}</el-row>
                <el-row>                                                
                    <el-button type="primary" round>评论</el-button>
                    <el-button type="primary" round @click="showSubComments(commentIndex)">查看回复</el-button>
                    <el-row v-if="subCommentStatus[commentIndex]">
                        <el-col>
                            <el-card v-for="(subComment,subCommendIndex) in comment.subComments" :key="subCommendIndex">
                                <el-row>
                                    <el-col span="2">
                                        <el-avatar :size="small" :src="subComment.headImg"></el-avatar>
                                        {{subComment.username}}
                                    </el-col> 
                                    <el-col span="22">
                                        {{subComment.sendDate}}
                                    </el-col>                                           
                                </el-row>
                                <el-row>{{subComment.context}}</el-row>
                                <el-button type="primary" round>评论</el-button>                                                            
                            </el-card>
                        </el-col>
                    </el-row>
                </el-row>          
            </el-card>
        </el-col>
        </el-row>
    </div>
    
</template>
<script>
export default {
    name:'CommentArea',

    props:{
        Invitation:Object,
    },
    data(){
        return{
            commentStatus:{},
            subCommentStatus:{},
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
        }
    }  
}
</script>