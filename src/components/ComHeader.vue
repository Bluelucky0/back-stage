<template>
  <header>
      <div class="l-content">
          <el-button plain icon='el-icon-menu' size='mini' @click="clickMenu"></el-button>
          <h3 style="color:#fff">首页</h3>
      </div>
      <div class="r-content">
          <el-dropdown trigger='click' size='mini'>
              <span class="el-dropdown-link">
                <img src="/img/imgs/111.jpg" alt="">
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
          </el-dropdown>
      </div>
  </header>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        clickMenu(){
            this.$store.commit('changeMenu');
        }
    },

}
</script>

<style lang='scss' scoped>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        // line-height: 60px;
        .l-content{
            display: flex;
            align-items: center;
            button{
                margin-right: 30px;
            }
        }
        .r-content{
            text-align: center;
            img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            
            }    
        }
    }

</style>