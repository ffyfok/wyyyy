<!--
 * @Author: zhang
 * @Date: 2022-06-08 11:32:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-15 21:49:29
 * @Descripttion: 
-->
<template>
  <div class="play-list">
    <van-swipe
      :loop="false"
      :width="120"
      class="play-list-innerbox"
      :show-indicators="false"
      slidesPerView="auto"
    >
      <van-swipe-item
        class="swipe-box"
        v-for="(item, index) in playList"
        :key="index"
      >
        <img :src="item.picUrl" alt="" @click="playDetail(item.id)" />
        <div class="bo">
          <van-icon name="play" />&nbsp;{{ getCount(item.playCount) }}
        </div>
        <div class="title-font" @click="playDetail(item.id)">
          {{ item.name }}
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { personalized } from "../../utils/home/";
import { onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
export default {
  name: "PlayList",
  setup() {
    let playList = reactive([]);
    onMounted(async () => {
      await personalized()
        .then((res) => {
          res.data.result.forEach((item) => {
            playList.push(item);
          });
          // console.log(playList);
        })
        .catch();
    });
    function getCount(val) {
      if (val > 100000000) {
        return (val / 100000000).toFixed(0) + "亿";
      }
      if (val > 10000) {
        return (val / 10000).toFixed(0) + "万";
      }
    }
    const router = useRouter();
    // 跳转歌单详情页
    const playDetail = (id) => {
      router.push({
        path: "/playDetail",
        query: {
          id,
        },
      });
    };
    return {
      playList,
      getCount,
      playDetail,
    };
  },
};
</script>

<style lang="less" scoped>
.play-list {
  width: 100%;
  height: 100%;

  .play-list-innerbox {
    padding-left: 0.2rem;
    width: 100%;
    height: 100%;
    .swipe-box {
      padding-right: 0.2rem;
      display: flex;
      flex-flow: column;
      position: relative;
      //   border: 1px solid red;
      img {
        width: 100%;
        border-radius: 0.2rem;
      }
      .bo {
        position: absolute;
        right: 0.3rem;
        top: 0.1rem;
        padding: 0.05rem 0.18rem;
        background: rgba(0, 0, 0, 0.15);
        border-radius: 0.3rem;
        display: flex;
        align-items: center;
        font-size: 0.24rem;
        color: rgba(255, 255, 255, 0.8);
      }
      .title-font {
        font-size: 0.26rem;
        color: #555;
        overflow: hidden;
        text-overflow: -o-ellipsis-lastline;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; //几行
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>