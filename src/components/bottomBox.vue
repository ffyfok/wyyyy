<!--
 * @Author: zhang
 * @Date: 2022-06-11 16:03:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-15 22:36:04
 * @Descripttion: 
-->
<template>
  <div class="bottom-box" @click="changeRoute" v-if="store.state.content.songs">
    <div class="left-box">
      <div class="img-box">
        <img :src="songs.al.picUrl" alt="" />
      </div>
    </div>
    <div class="font-box">
      <span class="span-one">{{ songs.name }}</span>
      <span class="span-two" v-if="songs.name.length < 10"
        >-{{ songs.ar[0].name }}</span
      >
    </div>
    <div>
      <span
        class="icon iconfont"
        v-bind:class="{
          'icon-kaishi': !store.state.isPlay,
          'icon-zanting': store.state.isPlay,
        }"
        @click.stop="changePlay"
      ></span>
      <van-icon name="bars" class="icon" />
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "@vue/reactivity";
import { useStore } from "vuex";
import { nextTick, onMounted, watch } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { playlistDetail } from "../utils/playDetail";
export default {
  name: "BottomBox",
  setup() {
    const store = new useStore();
    let content = reactive({
      songs: {},
    });
    const router = useRouter();
    /* 路由跳转 */
    const changeRoute = () => {
      router.push("/song");
    };
    onMounted(() => {});
    const changePlay = () => {
      store.commit("ChangeIsPlay");
    };

    watch(
      () => store.state.content.songs,
      async (newValue) => {
        if (newValue !== undefined) {
          content.songs = newValue;
        } else {
          await nextTick(async () => {
            let idList = [];
            let idIndex = 3;
            await playlistDetail({ id: 4958935613 })
              .then((res) => {
                res.data.playlist.trackIds.forEach((item) => {
                  idList.push(item.id);
                });
              })
              .catch(() => {});
            await store.commit("SetSongList", { idList, idIndex });
            await store.dispatch("getSongList");
            content.songs = store.state.content.songs;
            store.commit("ChangeIsPlay");
          });
        }
      },
      { immediate: true, deep: true }
    );
    return {
      ...toRefs(content),
      changeRoute,
      store,
      changePlay,
    };
  },
};
</script>

<style lang="less" scoped>
.bottom-box {
  width: 100%;
  // border: 1px solid red;
  border-top: 1px solid #eee;

  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px 0.2rem;
  justify-content: space-between;
  .left-box {
    background: #101012;
    border-radius: 50%;
    width: 0.9rem;
    height: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.2rem;
    .img-box {
      width: 70%;
      border-radius: 50%;
      height: 70%;
      background: red;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .font-box {
    display: flex;
    align-items: center;
    width: 4rem;
    margin-right: auto;
    white-space: nowrap;
    max-width: 4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    .span-one {
      font-size: 0.32rem;
      color: #101012;
      margin: 0px 0.2rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .span-two {
      min-width: 0px;
      color: #555;
      font-size: 0.24rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .icon {
    font-size: 0.5rem;
    &:last-child {
      margin-left: 0.3rem;
    }
  }
}
</style>