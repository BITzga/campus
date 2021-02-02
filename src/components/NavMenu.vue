<template>
        <el-menu  :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1" :span="8" >
                广场
            </el-menu-item>
            <el-menu-item index="2" :span="8" >
                校友圈
            </el-menu-item>
            <el-menu-item index="3"  :span="8"  :offset="8">
              我
             <el-avatar shape="square" :size="size" :src="squareUrl" ></el-avatar>
            </el-menu-item>
        </el-menu>

</template>
<script>
export default {
    name:'NavMenu',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        size:"large"
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>