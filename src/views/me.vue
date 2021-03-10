<template>
    <div>
        <el-row>
            <el-col :span="8"></el-col>
            <el-col :span="16">
                <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                    <el-tab-pane label="我的邀请" name="我的邀请" @click="this.componentName='myInvitations'"></el-tab-pane>
                    <el-tab-pane label="我的话题" name="我的话题" @click="this.componentName='myTopics'"></el-tab-pane>
                    <el-tab-pane label="我参与的" name="我参与的" @click="this.componentName='myJoined'"></el-tab-pane>
                </el-tabs> 
            </el-col>

        </el-row>
        <el-row>
            <el-col :span="8"></el-col>
            <el-col :span="16">
                <component :is="componentName"></component>
            </el-col>
        </el-row>
    </div>

</template>
<script>
import myInvitations from './myInvitations'
import myTopics from './myTopics'
import myJoined from './myJoined'

export default {
    components: {
        myInvitations,
        myTopics,
        myJoined
    },
    name:'me',
    data() {

        return {
            activeName:'我的邀请',
            componentName:'myInvitations',
        };
    },

    methods: {
        handleClick(){
            switch(this.activeName){
                case '我的邀请':this.componentName ='myInvitations'
                break;
                case '我的话题':this.componentName ='myTopics'
                break;
                case '我参与的':this.componentName ='myJoined'
            }

        }

    }  
}
</script>