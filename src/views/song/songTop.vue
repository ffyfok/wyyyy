<!--
 * @Author: zhang
 * @Date: 2022-06-14 09:47:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-14 11:31:48
 * @Descripttion: 
-->
<template>
  <div class="top-box">
    <van-icon name="arrow-down" class="icon" @click="changeRoute" />
    <div class="center-box">
      <div class="top-inner">{{ songs.name }}</div>
      <div class="bottom-inner">{{ songs.ar[0].name }}</div>
    </div>
    <van-icon name="share-o" class="icon" />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { reactive, toRefs } from "@vue/reactivity";
import { useStore } from "vuex";
import { watch } from "@vue/runtime-core";
export default {
  name: "TopBox",
  setup() {
    const route = useRouter();
    const changeRoute = () => {
      route.go(-1);
    };

    const store = new useStore();
    let content = reactive({
      songs: {},
    });
    watch(
      () => store.state.content.songs,
      (newValue) => {
        content.songs = newValue;
        // console.log(newValue);
      },
      { immediate: true, deep: true }
    );
    return {
      changeRoute,
      ...toRefs(content),
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
  .icon {
    font-size: 0.5rem;
  }
  .center-box {
    width: 4rem;
    height: 100%;

    .top-inner {
      color: #fff;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items:flex-end;
      height: 0.7rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 0.36rem;
    }
    .bottom-inner {
      color: #ccc;
      width: 100%;
      display: flex;
      justify-content: center;
      height: 0.4rem;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 0.28rem;
    }
  }
}
</style>