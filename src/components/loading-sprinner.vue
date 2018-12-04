<template>
  <block wx:if="isLoading">
    <div class="sprinner">
      <span class="bounce1"></span>
      <span class="bounce2"></span>
      <span class="bounce3"></span>
    </div>
  </block>
</template>

<script type="text/ecmascript-6">
// 模拟等待时间加载效果
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="less" scoped rel="stylesheet/less">
.sprinner {
  span {
    width: 7px;
    height: 7px;
    background-color: #c0c0c0;
    border-radius: 50%;
    display: inline-block;
    animation: bounce 1s infinite ease-in-out;
  }
  .bounce2 {
    animation-delay: 0.16s;
  }
  .bounce3 {
    animation-delay: 0.32s;
  }
}

@keyframes bounce {
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(0.8);
  }
}
</style>
