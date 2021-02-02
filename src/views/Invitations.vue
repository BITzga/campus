<template>
    <div>
        <el-row>
            <nav-menu></nav-menu>
        </el-row>
         <el-divider></el-divider>
        <el-row>
  <el-timeline >
            <el-timeline-item
             v-for="(activity, index) in activities"
             :key="index"
             :timestamp="activity.timestamp">
                <el-card>
                    
                    {{activity}}
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

            activities: [{
            content: '活动按期开始',
            timestamp: '2018-04-15'
            }, {
            content: '通过审核',
            timestamp: '2018-04-13'
            }, {
            content: '创建成功',
            timestamp: '2018-04-11'
            }]
        }       

    },
}
</script>