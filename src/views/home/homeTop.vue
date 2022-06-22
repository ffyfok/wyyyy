<!--
 * @Author: zhang
 * @Date: 2022-06-08 09:49:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-08 16:22:59
 * @Descripttion: 
-->
<template>
  <div class="home-top">
    <div class="icon">
      <van-icon name="wap-nav" />
    </div>
    <div class="search" @click="search">
      <van-icon name="stop" />
      <span>新人必听</span>
    </div>
    <div class="icon">
      <van-icon name="audio" />
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    function search() {
      router.push({
        path: "/search",
      });
    }
    return {
      search,
    };
  },
};
</script>

<style lang="less" scoped>
.home-top {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  .icon {
    width: 1rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.5rem;
  }
  .search {
    flex: 1;
    height: 0.72rem;
    background-color: #f8f8f8;
    border-radius: 0.36rem;
    color: #a09d9e;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.28rem;
    span {
      margin-left: 0.06rem;
    }
  }
}
</style>