<template>
  <view class="page-test">
    <button @tap="getUserInfo">测试微信登录</button>
    <button @tap="testRequest">测试api接口</button>
    <button @tap="testRequest1">测试api接口1</button>
    <button @tap="testPostRequest">测试post接口</button>
    <button @tap="testPostRequest1">测试post接口async</button>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    getUserInfo() {
      uni.getUserInfo({
        provider: 'weixin',
        success: function(infoRes) {
          console.log(infoRes.userInfo)
          console.log('用户昵称为：' + infoRes.userInfo.nickName)
        }
      })
    },
    testRequest() {
      this.$request
        .get('table')
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(error)
        })
    },
    testRequest1() {
      this.$request
        .get('https://unidemo.dcloud.net.cn/ajax/echo/text?name=uni-app')
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(error)
        })
    },
    testPostRequest() {
      this.$request
        .post('post')
        .then(res => {
          uni.showToast({
            title: '请求成功',
            icon: 'success',
            mask: true,
            duration: 1000
          })
          console.log(res)
        })
        .catch(err => {
          console.log(error)
        })
    },
    async testPostRequest1() {
      let response = await this.$request.post('post')
      console.log(response)
      uni.showToast({
        title: '请求成功',
        icon: 'success',
        mask: true,
        duration: 1000
      })
    }
  }
}
</script>

<style lang="less">
</style>
