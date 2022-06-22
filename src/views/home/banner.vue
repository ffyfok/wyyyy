<!--
 * @Author: zhang
 * @Date: 2022-06-08 11:17:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-08 22:57:46
 * @Descripttion: 
-->
<template>
  <div class="banner">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { banner } from "../../utils/home";
import { onMounted } from "@vue/runtime-core";
import { reactive } from "@vue/reactivity";

export default {
  name: "Banner",
  setup() {
    const images = reactive([]);
    onMounted(async () => {
      await banner({
        type: 1,
      })
        .then((res) => {
          //   console.log(res.data.banners);
          res.data.banners.forEach((item) => {
            images.push(item.pic);
          });
        })
        .catch();
    });

    return { images };
  },
};
</script>
<style lang="less" scope>
.banner {
  border-radius: 0.3rem;
  overflow: hidden;
  width: 100%;
  .van-swipe {
    width: 100%;
  }
  img {
    width: 100%;
  }
}
</style>