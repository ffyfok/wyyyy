<!--
 * @Author: zhang
 * @Date: 2022-06-09 08:49:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-14 10:00:24
 * @Descripttion: 
-->
<template>
  <div class="play-detail-box">
    <!-- 头部 -->
    <div class="top-box-box" v-bind:class="{ bg1: !topBox, bg2: topBox }">
      <PlayDetailTop></PlayDetailTop>
      <div class="img6">
        <img :src="data.playlist.coverImgUrl" alt="" />
      </div>
    </div>
    <!-- 详情 -->
    <div class="detail-box">
      <!-- 背景图 -->
      <div class="img1">
        <img :src="data.playlist.coverImgUrl" alt="" />
      </div>
      <div class="content-box">
        <!-- 图片 -->
        <div class="img2">
          <img :src="data.playlist.coverImgUrl" alt="" />
        </div>
        <!-- 文字信息 -->
        <div class="detail-right-box">
          <!-- 标题 -->
          <div class="name">
            {{ data.playlist.name }}
          </div>
          <!-- 关注 -->
          <div class="creator" v-if="data.playlist.creator">
            <div class="img3">
              <!-- {{ data.playlist.creator.avatarUrl }} -->
              <img :src="data.playlist.creator.avatarUrl" alt="" />
            </div>
            <div class="creator-name">
              {{ data.playlist.creator.nickname }}
            </div>
            <span>+</span>
          </div>
          <div class="bottom-detail" v-if="data.playlist.description">
            <div class="font">{{ data.playlist.description }}</div>

            <span><van-icon name="arrow" /></span>
          </div>
        </div>

        <!--  -->
        <div class="bottom-box">
          <div class="innerbox">
            <van-icon name="add-square" class="icon1" />
            <span>{{ data.playlist.subscribedCount }}</span>
          </div>
          <div class="innerbox">
            <van-icon name="column" class="icon1" />
            <span>{{ data.playlist.commentCount }}</span>
          </div>
          <div class="innerbox">
            <van-icon name="share" class="icon1" />
            <span>{{ data.playlist.shareCount }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 歌曲 -->
    <div class="play-bottom">
      <div class="play-bottom-top">
        <div class="boxs">
          <van-icon name="play-circle" class="icon10" />
          <div class="span">
            播放全部
            <span v-if="data.playlist.trackIds"
              >({{ data.playlist.trackIds.length }})</span
            >
          </div>
        </div>
        <div class="boxs">
          <van-icon name="down" class="icon10" />
          <van-icon name="certificate" class="icon10" />
        </div>
      </div>
      <template v-if="data.playlist.trackIds">
        <div
          class="song-box"
          v-for="(item, index) in data.playlist.trackIds"
          :key="index"
        >
          <SongList
            :dataList="item"
            :index="index + 1"
            :idList="idList"
          ></SongList>
        </div>
      </template>
    </div>
    <!-- 底部 -->
    <div class="bottom">
      <BottomBox></BottomBox>
    </div>
  </div>
</template>

<script>
import BottomBox from "../../components/bottomBox";

import { useRoute } from "vue-router";
import { onBeforeMount, reactive, ref } from "@vue/runtime-core";
import { playlistDetail } from "../../utils/playDetail";
import PlayDetailTop from "./playDetailTop";
import SongList from "../../components/songList";
export default {
  components: { PlayDetailTop, SongList, BottomBox },
  setup() {
    let data = reactive({
      playlist: {},
    });
    const idList = reactive([]);
    const topBox = ref(true);
    const route = useRoute();
    onBeforeMount(async () => {
      await playlistDetail({
        id: route.query.id,
      })
        .then((res) => {
          data.playlist = res.data.playlist;
        })
        .catch();
      // console.log(data.playlist);
      data.playlist.trackIds.forEach((item, index) => {
        idList.push(item.id);
      });
      document.querys;
      // console.log(idList);
      window.addEventListener("scroll", (e) => {
        if (window.scrollY > 180) {
          topBox.value = false;
        } else {
          topBox.value = true;
        }
      });
    });

    return {
      data,
      topBox,
      idList,
    };
  },
};
</script>

<style lang="less" scoped>
.play-detail-box {
  // overflow: hidden;
  width: 100%;
  .bg1 {
    background: #fff;
  }
  .bg2 {
    background: rgba(0, 0, 0, 0);
  }
  .top-box-box {
    width: 100%;
    height: 1.1rem;
    position: fixed;
    z-index: 20;
    overflow: hidden;

    // z-index: ;
    .img6 {
      width: 100%;
      height: 3.2rem;
      filter: blur(1rem);
      position: absolute;
      left: 0px;
      top: 0px;
      z-index: -1;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .detail-box {
    position: relative;
    height: 4.5rem;
    padding-top: 1.1rem;
    z-index: 10;
    // overflow: hidden;
    // border: 1px solid red;
    .img1 {
      width: 100%;
      height: 3.4rem;
      position: absolute;
      left: 0px;
      top: 1.1rem;
      z-index: -1;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        filter: blur(1rem);
        margin-top: -1.1rem;
      }
    }
    .content-box {
      padding: 0.3rem 0.3rem 0.8rem;
      display: flex;
      .img2 {
        width: 32%;
        border-radius: 0.3rem;
        overflow: hidden;
        // margin-right: 0.3rem;
        img {
          width: 100%;
        }
      }
      .detail-right-box {
        width: 68%;
        padding-left: 0.3rem;
        display: flex;
        justify-content: space-between;
        flex-flow: column;
        .name {
          font-size: 0.32rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 0.48rem;
          overflow: hidden;
          text-overflow: -o-ellipsis-lastline;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2; //几行
          -webkit-box-orient: vertical;
        }
        .creator {
          display: flex;
          align-items: center;
          .img3 {
            border-radius: 50%;
            overflow: hidden;
            width: 0.5rem;
            img {
              width: 100%;
            }
          }
          .creator-name {
            color: rgba(255, 255, 255, 0.5);
            margin: 0px 0.1rem;
            font-size: 0.28rem;
          }
          span {
            padding: 0.05rem 0.2rem;
            border-radius: 0.2rem;
            color: rgba(255, 255, 255, 0.8);
            background: rgba(255, 255, 255, 0.4);
          }
        }
        .bottom-detail {
          width: 100%;
          display: flex;
          align-items: center;
          color: rgba(255, 255, 255, 0.5);
          .font {
            font-size: 0.28rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          span {
            margin-left: auto;
          }
        }
      }
    }
    .bottom-box {
      padding: 0.25rem;
      border-radius: 0.6rem;
      display: flex;
      position: absolute;
      left: 50%;
      bottom: 0px;
      transform: translate(-50%, 50%);
      box-shadow: 0 0 1px #888;
      background: #fff;
      // border: 1px solid red;
      .innerbox {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2rem;
        color: #555;
        &:nth-child(2) {
          border-left: 1px solid #ccc;
          border-right: 1px solid #ccc;
        }
        .icon1 {
          font-size: 0.4rem;
        }
        span {
          margin-left: 0.06rem;
        }
      }
    }
  }

  .play-bottom {
    width: 100%;
    margin-top: 0.8rem;
    background: #fff;
    position: relative;
    margin-bottom: 1.1rem;

    .play-bottom-top {
      width: 100%;
      display: flex;
      position: sticky;
      top: 1.01rem;
      justify-content: space-between;
      align-items: center;
      background: #fff;
      padding: 0.4rem 0.3rem;
      z-index: 10;

      .boxs {
        display: flex;
        align-items: center;
        &:first-child {
          .icon10 {
            color: rgb(255, 53, 40);
          }
        }
        .icon10 {
          font-size: 0.45rem;
          &:first-child {
            margin-right: 0.32rem;
          }
        }
        .span {
          font-size: 0.32rem;
          span {
            font-size: 0.26rem;
            color: #888;
          }
        }
      }
    }
    .song-box {
      width: 100%;
      height: 1.1rem;
      margin-bottom: 0.2rem;
    }
  }
}
.bottom {
  position: fixed;
  left: 0px;
  bottom: 0px;
  z-index: 200;
  height: 1rem;
  width: 100%;
  background: #fff;
}
</style>