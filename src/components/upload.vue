<template>
<el-upload
  class="upload-demo"
  action="http://localhost:8090/headImg/upload"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="9"
  :on-exceed="handleExceed"
  :file-list="fileList">
  <el-button size="small" type="primary">点击上传</el-button>
</el-upload>  
</template>

<script>
  export default {
     name:'upload',
    data() {
      return {
        fileList: [{name: '', url:'' }]
        }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        console(fileList)
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
  }
</script>