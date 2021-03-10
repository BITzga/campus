<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="内容">
          <el-input
            type="textarea"
            :rows="20"
            placeholder="请输入内容"
            v-model="textarea">
          </el-input>
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
        textarea:'',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    name:'TopicEdit',
       methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>


