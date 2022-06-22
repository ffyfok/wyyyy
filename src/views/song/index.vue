<!--
 * @Author: zhang
 * @Date: 2022-06-13 17:35:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-15 21:43:24
 * @Descripttion: 
-->
<template>
  <div class="song-box">
    <!-- 背景图 -->
    <div class="bg">
      <img :src="songs.al.picUrl" alt="" />
    </div>
    <!-- 头部 -->
    <div class="top">
      <TopSong></TopSong>
    </div>
    <!-- 针 -->
    <div
      class="zhen-box"
      v-bind:class="{
        zhen1: !store.state.isPlay,
        zhen2: store.state.isPlay,
      }"
    >
      <img
        src="https://s3.music.126.net/mobile-new/img/needle-ab.png?4b81da043356110081e5ccaed2e6f2ad="
        alt=""
      />
    </div>
    <!-- 盘 -->
    <div class="pan-box" v-bind:class="{ pan: store.state.isPlay }">
      <div class="pan-inner">
        <img :src="songs.al.picUrl" alt="" />
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-top">
        <span class="icon iconfont icon-jushoucang"></span>
        <span class="icon iconfont icon-xiazai"></span>
        <span class="icon iconfont icon-yichang"></span>
        <span class="icon iconfont icon-pinglun-"></span>
        <span class="icon iconfont icon-gengduo"></span>
      </div>
      <div class="line-box"></div>
      <div class="bottom-bottom">
        <span class="icon iconfont icon-24gl-repeat2"></span>
        <span
          class="icon iconfont icon-shangyishoushangyige"
          @click="prePlay"
        ></span>
        <span
          class="icon1 iconfont"
          v-bind:class="{
            'icon-kaishi': !store.state.isPlay,
            'icon-zanting': store.state.isPlay,
          }"
          @click="changeIsPlay"
        ></span>
        <span
          class="icon iconfont icon-xiayigexiayishou"
          @click="nexPlay"
        ></span>
        <span class="icon iconfont icon-zhankaicaidan"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import { useStore } from "vuex";
import { watch } from "@vue/runtime-core";
import TopSong from "./songTop";
export default {
  components: { TopSong },
  setup() {
    const store = new useStore();
    let content = reactive({
      songs: {},
    });
    //播放与暂停
    const changeIsPlay = () => {
      store.commit("ChangeIsPlay");
    };
    // 上一首
    const prePlay = () => {
      /* 为了监听到isPlay的改变 */
      store.state.isPlay = false;
      store.dispatch("pre");
    };
    // 下一首
    const nexPlay = () => {
      /* 为了监听到isPlay的改变 */
      store.state.isPlay = false;
      store.dispatch("nex");
    };
    watch(
      () => store.state.content.songs,
      (newValue) => {
        content.songs = newValue;
        // console.log(newValue);
      },
      { immediate: true, deep: true }
    );
    return {
      ...toRefs(content),
      store,
      changeIsPlay,
      prePlay,
      nexPlay,
    };
  },
};
</script>

<style lang="less" scoped>
.song-box {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: -1;
    // background:#000;
    img {
      width: 100%;
      height: 100%;
      filter: blur(0.8rem);
    }
  }
  .top {
    height: 1.1rem;
    width: 100%;
  }
  .zhen-box {
    width: 1.6rem;
    height: 2.8rem;
    position: absolute;
    left: calc(~"50%" - 0.15rem);
    top: 1.3rem;
    z-index: 10;
    transform-origin: 7px 7px;

    //
    img {
      width: 100%;
      height: 100%;
    }
  }
  .zhen1 {
    animation: zhen1 1s ease 0s 1 forwards;
  }
  .zhen2 {
    animation: zhen2 1s linear 0s 1 forwards;
  }
  .pan {
    animation: pan 40s linear 0s infinite forwards;
  }
  @keyframes zhen1 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-30deg);
    }
  }
  @keyframes zhen2 {
    0% {
      transform: rotate(-30deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @keyframes pan {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .pan-box {
    width: 280px;
    height: 280px;
    background: rgb(0, 0, 0);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    inset: 0;
    margin: 3.1rem auto;
    .pan-inner {
      width: 70%;
      height: 70%;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .bottom {
    width: 100%;
    padding: 0px 0.3rem 0.3rem 0.3rem;
    position: absolute;
    bottom: 0px;
    left: 0px;

    .bottom-top {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: #bbb;
      .icon {
        font-size: 0.5rem;
      }
    }
    .line-box {
      // height: 0.4rem;
      // border: 1px solid red;
      padding: 0.6rem 0rem;
    }
    .bottom-bottom {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: #ccc;
      .icon {
        font-size: 0.5rem;
      }
      .icon1 {
        font-size: 1rem;
      }
    }
  }
}
</style>