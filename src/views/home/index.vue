<!--
 * @Author: zhang
 * @Date: 2022-06-08 09:45:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-13 21:51:00
 * @Descripttion: 
-->
<template>
  <div class="home">
    <!-- 头部 -->
    <div class="home-top-box">
      <HomeTop></HomeTop>
    </div>
    <!-- 轮播图 -->
    <div class="banner-box">
      <Banner></Banner>
    </div>
    <!-- 推荐歌单 -->

    <div class="paly-list-box">
      <div class="title-box">
        <div class="title-box-left">推荐歌单</div>
        <div class="title-box-right">更多 &gt;</div>
      </div>
      <PlayList></PlayList>
    </div>
    <!-- d底部歌单信息 -->
    <div class="bottom">
      <BottomBox></BottomBox>
    </div>
  </div>
</template>

<script>
import HomeTop from "./homeTop";
import Banner from "./banner";
import PlayList from "./playlist";
import BottomBox from "../../components/bottomBox";

export default {
  name: "Home",
  components: { HomeTop, Banner, PlayList, BottomBox },
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .home-top-box {
    width: 100%;
    height: 1.1rem;
    position: fixed;
    z-index: 2;
    background: #fff;
  }
  .banner-box {
    margin-top: 1.1rem;
    width: 100%;
    padding: 0.2rem;
  }
  .paly-list-box {
    width: 100%;
    // height: 3rem;
    border-top: 2px solid #f9f9f9;
    padding: 0.2rem 0px;
  }
  .title-box {
    display: flex;
    align-items: center;
    width: 100%;
    height: 0.8rem;
    padding: 0px 0.2rem;
    justify-content: space-between;
    .title-box-left {
      font-size: 0.4rem;
    }
    .title-box-right {
      font-size: 0.24rem;
      padding: 0.05rem 0.15rem;
      border-radius: 0.3rem;
      color: #666;
      border: 1px solid #ccc;
    }
  }
  .bottom {
    position: fixed;
    left: 0px;
    bottom: 0px;
    z-index: 20;
    height: 1rem;
    width: 100%;
  }
}
</style>