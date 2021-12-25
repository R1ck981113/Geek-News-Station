<template>
  <div class="home-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar">
      <van-button
        class="button1"
        slot="title"
        icon="search"
        type=""
        round
        size="small"
        >搜索
      </van-button>
    </van-nav-bar>
    <!-- 文章频道列表 -->
    <van-tabs v-model="active">
      <van-tab title="实时"
        ><div class="div1">
          <img src="../assets/炎柱.jpg" />
        </div>
        <hr />
        <div class="div1"><img src="../assets/鬼杀队.jpg" /></div>
        <hr />
        <div class="div1"></div>
        <hr />
        <div class="div1"></div>
        <hr />
        <div class="div1"></div>
      </van-tab>
      <van-tab title="同城">
        <van-notice-bar
        
  left-icon="volume-o"
  text="寻找你自己城市的新闻吧，在极客新闻网中，你可以浏览各式各样的实时同城新闻，让消息永远灵通"
/>
      </van-tab>
      <van-tab title="收藏"></van-tab>
      <van-tab title="更多"></van-tab>
    </van-tabs>
    <!-- 文章频道列表 -->
    <articlelist />
    <!-- 文章列表 -->
  </div>
</template>

<script>
import articlelist from "./article-list.vue";

export default {
  components: {
    articlelist,
  },
  data() {
    return {
      active: 0,
      channels: [], //频道列表
    };
  },
  //APP数据已经创建
  created() {
    this.loadChannels();
  },
  methods: {
    async loadChannels() {
      const { data } = await getUserChannerls();
      console.log(data);
      this.channels = data.data.channels;
    },
  },
};
</script>

<style lang="less" scoped>
.body {
  margin: 0;
  padding: 0;
}
.home-container {
  /deep/ .van-nav-bar__title {
    max-width: none;
  }
  .button1 {
    width: 277px;
    height: 32px;
    .van-icon {
      color: white;
      font-size: 20px;
    }
    .van-button__text {
      font-size: 15px;
    }
  }
}
.div1 {
  height: 80px;
  display: flex;
  justify-content: space-between;
  img {
    height: 91px;
    width: 150px;
    border-radius: 10px;
  }
}
</style>