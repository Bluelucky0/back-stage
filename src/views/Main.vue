<template>
  <el-container style="height:100%">
    <el-aside width="auto"><com-aside></com-aside></el-aside>
    <el-container>
        <el-header><com-header></com-header></el-header>
        <el-main> <router-view/></el-main>
  </el-container>
</el-container>
</template>

<script>
import ComAside from '../components/ComAside.vue'
import ComHeader from '../components/ComHeader.vue'

export default {
    name:'Main',
    components:{ComAside,ComHeader}
}
</script>

<style lang='scss' scoped>
    .el-header{
        background-color: #333;
        text-align: center;   
    }
    .el-aside {
        color: #333;
        text-align: center;
    } 
    .el-main {
        color: #333;
        text-align: center;
        background-color: rgb(247, 245, 245);
    }
    
</style>