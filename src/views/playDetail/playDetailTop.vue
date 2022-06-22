<!--
 * @Author: zhang
 * @Date: 2022-06-09 20:50:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-10 22:34:58
 * @Descripttion: 
-->
<template>
  <div class="top-box">
    <div class="boxs">
      <van-icon name="arrow-left" class="icon" @click="backs" />
      <span>歌单<sup> &reg;</sup></span>
    </div>
    <div class="boxs">
      <van-icon name="search" class="icon" />
      <van-icon name="ellipsis" class="icon" />
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const backs = () => {
      router.go(-1);
    };
    return {
      backs,
    };
  },
};
</script>

<style lang="less" scoped>
.top-box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px 0.3rem;
  justify-content: space-between;
  position: relative;
  z-index: 100;
  color: #fff;
  .boxs {
    display: flex;
    align-items: center;
    .icon {
      font-size: 0.5rem;
      // border: 1px solid red;
      &:first-child {
        margin-right: 0.32rem;
      }
    }
    span {
      font-size: 0.32rem;
    }
  }
}
</style>>
