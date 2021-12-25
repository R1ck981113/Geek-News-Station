<template>
  <div class="my-container">
    <div class="user-info">
      <van-cell-group class="my-info">
        <!-- 头部 -->
        <van-cell class="base-info" value="内容" center>
          <van-image
            class="avatar"
            slot="icon"
            round
            fit="cover"
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202105%2F03%2F20210503073456_15a24.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642991737&t=7400c4cd6ca0b181f57ff03498f4990d"
          />
          <div slot="title" class="name">Rick</div>
          <van-button class="update-btn" size="small" round>
            编辑资料</van-button
          >
        </van-cell>
        <!-- 信息栏 -->
        <van-grid class="data-info" :border="false">
          <van-grid-item class="data-info-item"
            ><div slot="text">
              <div class="span">23</div>
              <div class="text">作品</div>
            </div></van-grid-item
          >
          <van-grid-item class="data-info-item"
            ><div slot="text">
              <div class="span">1223</div>
              <div class="text">关注</div>
            </div></van-grid-item
          ><van-grid-item class="data-info-item"
            ><div slot="text">
              <div class="span">12423</div>
              <div class="text">粉丝</div>
            </div></van-grid-item
          ><van-grid-item class="data-info-item"
            ><div slot="text">
              <div class="span">123</div>
              <div class="text">获赞</div>
            </div></van-grid-item
          >
        </van-grid>
      </van-cell-group>
      <!-- 收藏栏 -->
      <van-grid :column-num="2">
        <van-grid-item icon="star" text="收藏" />
        <van-grid-item icon="todo-list" text="历史" />
      </van-grid>
      <van-cell title="消息通知" is-link to="" />
      <van-cell title="切换账号" is-link to="login" />
      <van-cell class="logout-cell" title="退出登录" @click="onLogout" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Myindex",
  data() {},
  methods: {
    onLogout() {
      //提示用户确认退出
      //确认->处理退出
      this.$dialog.confirm({
        title: "退出提示",
        message: "确认退出吗",
      })
        .then(() => {this.$router.push('login')
          // on confirm
          //清除用户登录状态
          this.$store.commit('setUser',null)
        })
        .catch(() => {
          // on cancel
        });
    },
  },
};
</script>

<style scoped lang="less">
.my-container {
  .my-info {
    background: url("./111.png") no-repeat;
    background-size: cover;
    .base-info {
      box-sizing: border-box;
      height: 115px;
      background-color: unset;
      padding: 38px 11px;
      .avatar {
        width: 66px;
        height: 66px;
        border: 1px solid #fff;
        box-sizing: border-box;
        margin-right: 15px;
      }
      .name {
        font-size: 15px;
      }
      .update-btn {
        height: 25px;
      }
    }
    
    /deep/ .van-grid-item__content {
      background-color: unset;
    }
  }
}
.span {
  text-align: center;
  font-size: 20px;
  margin-bottom: 6px;
}
.text {
  text-align: center;
  font-size: 15px;
}
.logout-cell {
  text-align: center;
  color: red;
  border-radius: 15px;
}
</style>