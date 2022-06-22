<!--
 * @Author: zhang
 * @Date: 2022-06-10 11:37:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-15 21:50:57
 * @Descripttion: 
-->
<template>
  <div class="top-box" @click="setSongList">
    <div class="boxs">
      <div class="icon1">{{ index }}</div>
      <div class="big-box">
        <div class="top">{{ songs.name }}</div>
        <div class="bottom">
          <div class="tag" v-if="songs.sq">SQ</div>
          <div class="tag" v-if="songs.h">Hi-Res</div>
          <div class="font" v-if="songs.ar">{{ songs.ar[0].name }}</div>
        </div>
      </div>
    </div>
    <div class="boxs">
      <!-- <van-icon name="search" /> -->
      <van-icon name="play-circle-o" class="icon" v-if="songs.mv != 0" />
      <van-icon name="ellipsis" class="icon" />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import { onBeforeMount, onMounted } from "@vue/runtime-core";
import { songDetail } from "../utils/songList";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "SongList",
  props: {
    index: {
      type: Number,
    },
    dataList: {
      type: Object,
    },
    idList: {
      type: Array,
    },
  },
  setup(props) {
    const dataList = reactive(props.dataList);
    const idList = props.idList;
    const idIndex = props.index - 1;
    const store = useStore();
    const router = useRouter();

    // console.log(idIndex);

    let data = reactive({
      songs: {},
    });
    const setSongList = () => {
      // console.log(idList);
      store.commit("SetSongList", { idList, idIndex });
      store.state.isPlay = false; //为了监听isPlay的变化
      store.dispatch("getSongList");
      router.push("/song");
    };

    onBeforeMount(async () => {
      await songDetail({
        ids: dataList.id,
      }).then((res) => {
        data.songs = res.data.songs[0];
      });
    });
    return {
      ...toRefs(data),
      setSongList,
    };
  },
};
</script>

<style lang="less" scoped>
.top-box {
  padding: 0.3rem;

  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .boxs {
    display: flex;
    align-items: center;
    &:first-child {
      flex: 1;
    }
    .icon {
      font-size: 0.4rem;
      color: #999;
      &:last-child {
        margin-left: 0.32rem;
      }
    }
    .icon1 {
      font-size: 0.4rem;
      color: #999;
      width: 0.8rem;
      // text-align: center;
      // margin-left: 0.1rem;
      // margin-right: 0.32rem;
    }
    span {
      font-size: 0.32rem;
    }
    .big-box {
      // flex: 1;
      display: flex;
      width: 4.6rem;
      flex-flow: column;
      .top {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .bottom {
        display: flex;
        margin-top: 0.06rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        .tag {
          font-size: 0.24rem;
          border: 1px solid #dd6000;
          padding: 0px 0.06rem;
          border-radius: 0.08rem;
          color: red;
          margin-right: 0.1rem;
        }
        .font {
          font-size: 0.28rem;
          color: #999;
        }
      }
    }
  }
}
</style>>
