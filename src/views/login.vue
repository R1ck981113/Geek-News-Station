<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="极客新闻网" />
    <!-- 导航栏 -->

    <!-- 登录表单 表单会自动触发提交事件-->
    <van-form @submit="onLogin">
      <van-field
        v-model="user.mobile"
        name="手机号"
        left-icon="phone"
        placeholder="请输入手机号"
         :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="user.code"
        type="password"
        name="验证码"
        left-icon="coupon"
        placeholder="请输入验证码"
          :rules="[{ required: true, message: '请填写验证码' }]"
      >
        <template #button>
          <van-button class="button2" size="small" type="primary"
            >发送验证码</van-button
          >
        </template>
      </van-field>

      <div style="margin: 16px">
        <van-button
          class="button1"
          round
          block
          type="info"
          native-type="submit"
          >登录</van-button
        >
      </div> 
      <div class="img1" style="text-align: center">
        <van-image
          round
          width="5rem"
          height="5rem"
          src="https://img1.baidu.com/it/u=2462965771,1215221161&fm=26&fmt=auto"
        />
      </div>
      <div style="text-align: center">
        <p>我已经关闭登录权限</p>
        <p>阁下直接进入即可</p>
      </div>
    </van-form>
    <!-- 登录表单 -->
  </div>
</template>

<script>
import { login } from "@/api/user";
export default {
  name: "LoginPage",
  //组件注册
  components: {},
  //组件传值
  props: {},
  //数据方法 不是对象
  data() {
    return {
      user: {
        mobile: "",
        code: "",
      },
    };
  },
  //计算方法
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {                                                                                                                                                    
    async onLogin() {
      // this.$toast.loading({
      //   message: "登录中...",//登录提示
      //   forbidClick: true,
      //   // duration:0,//禁止背景点击 也就是后面的DIV点击
      // })
      // //1.找到数据接口
      // //2.封装请求方法
      // //3.请求调用登录
      
      // try {
      //   const res = await login(this.user);
      //   console.log(res)
      //   Toast.success('登录成功')
      // } catch (err) {
      //   console.log(err)
      //   Toast.fail('登录失败')
      // }
      // 4.处理响应结果
      this.$router.push("my")
    },
   
  },
};
</script>

<style scoped lang="less">
</style>