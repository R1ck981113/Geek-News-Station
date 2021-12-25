<template>
  <div class="layout-container">
    <!-- 子路由出口 -->
    <router-view />
    <van-tabbar  v-model="active"  active-color="black" route>
      <van-tabbar-item  to ="/" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item  to="/qa" icon="info">问答</van-tabbar-item>
      <van-tabbar-item  to="/video" icon="play-circle">视频</van-tabbar-item>
      <van-tabbar-item  to="/my" icon="manager">我的</van-tabbar-item>
    </van-tabbar>
    <!-- 底部标签导航栏 -->
  </div>
</template>

<script>
export default {
    name:'layoutindex',
    data()
    {
        return{
            active:0
        }
    }
};
</script>

<style>
</style>