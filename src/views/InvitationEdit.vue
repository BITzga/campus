<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
            <el-input v-model="form.region" placeholder="请输入活动区域"></el-input>
            <!-- <el-select v-model="form.region" placeholder="请选择活动区域">   
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
            </el-select> -->
        </el-form-item>
        <el-form-item label="活动时间">
            <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col>
        </el-form-item>
         <el-form-item label="截止时间">
            <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col>
        </el-form-item>       
        <el-form-item label="活动性质">
            <el-radio-group v-model="form.type">
                <el-radio label="个人邀请"></el-radio>
                <el-radio label="社团"></el-radio>
                <el-radio label="学生组织"></el-radio>
                <el-radio label="志愿组织"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="运动类型">
            <el-radio-group v-model="form.resource">
            <el-radio label="篮球"></el-radio>
            <el-radio label="羽毛球"></el-radio>
            <el-radio label="骑行"></el-radio>
            <el-radio label="跑步"></el-radio>
            <el-radio label="游泳"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="活动介绍">
            <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="限制人数">
            <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="上传图片">
            <upload></upload>
        </el-form-item>      
        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
        </el-form>           
    </div>
    
</template>
<script>
import upload from '../components/upload.vue';
export default {
  components: { upload },
        data() {
      return {
        form: {
          ownerId:0,
          imgUrl:[],
          name: '',
          title:'',
          context:'',
          sendDate:'',
          activity:{
            tag: '',
            deadline: '',
            start: '',
            end: '',
            position: '',
            followCount: ''
          }
          

        }
      }
    },
    name:'InvitationEdit',
       methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>
