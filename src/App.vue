<!--
 * @Author: zhang
 * @Date: 2022-06-02 16:49:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-22 13:39:46
 * @Descripttion: 
-->
<template>
  <div class="boxs">
    <audio
      ref="audio"
      controls
      autoplay
      :src="`https://music.163.com/song/media/outer/url?id=${
        store.state.songList[store.state.songIndex]
      }.mp3`"
    ></audio>
    <router-view></router-view>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { nextTick, onMounted, watch } from "@vue/runtime-core";
export default {
  setup() {
    let audio = ref(null);
    const store = new useStore();

    nextTick(() => {
      audio.value.addEventListener(
        "ended",
        function () {
          store.dispatch("nex");
          audio.value.play();
        },
        false
      );
    });
    // 
    // store.commit("ChangeIsPlay");
    watch(
      () => store.state.isPlay,
      (newValue) => {
        nextTick(() => {
          if (newValue) {
            audio.value.play();
            // console.log(audio.value.play());
            let player = audio.value.play();
            player.catch(async (err) => {
              store.state.isPlay = false;
              store.dispatch("nex");
            });
          } else {
            audio.value.pause();
          }
        });
      },
      { immediate: false }
    );
    return { audio, store };
  },

  // beforeRouteEnter(to, from, next) {
  //   // ...
  //   console.log(to);
  //   console.log(from);
  // },
};
</script>

<style lang="less" scoped>
.boxs {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100vh;
  position: relative;
  audio {
    display: none;
    position: absolute;
  }
}
</style>

