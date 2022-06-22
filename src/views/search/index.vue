<!--
 * @Author: zhang
 * @Date: 2022-06-08 09:49:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-22 14:56:45
 * @Descripttion: 
-->
<template>
  <div class="search-box">
    <!-- 头部导航 -->
    <div class="home-top">
      <div class="icon">
        <van-icon name="arrow-left" @click="backs" />
      </div>
      <div class="search">
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          class="search"
          shape="round"
          :clearable="false"
          @search="onSearch"
          @update:model-value="changeValue"
        />
        <van-icon
          name="cross"
          class="cross"
          v-if="data.show"
          @click="clearValue"
        />
      </div>
      <div class="icon">
        <span @click="onSearch(value)">搜索</span>
      </div>
    </div>
    <!-- 历史记录 -->
    <div class="history-box">
      <div class="lis">历史：</div>
      <div class="lis" v-for="(item, index) in historySearch" :key="index">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { Toast } from "vant";
export default {
  components: {
    [Toast.name]: Toast,
  },
  setup() {
    const router = useRouter();
    const store = new useStore();
    let { historySearch } = store.state;
    function backs() {
      router.go(-1);
    }
    const data = reactive({
      show: false,
    });
    const value = ref("");
    /* 搜索 */
    const onSearch = (val) => {
      if (val.trim().length > 0) {
        store.commit("AddHistorySearch", val);
      } else {
        Toast.fail("请输入文字信息！");
      }
      clearValue();
    };
    /* 值改变 */
    const changeValue = (val) => {
      if (val.trim().length > 0) {
        data.show = true;
      } else {
        data.show = false;
      }
    };
    /* 清空 */
    const clearValue = () => {
      data.show = false;
      value.value = "";
    };
    return {
      backs,
      value,
      onSearch,
      changeValue,
      data,
      clearValue,
      historySearch,
    };
  },
};
</script>

<style lang="less" scoped>
.search-box {
  width: 100%;
  height: 100%;
  .home-top {
    width: 100%;
    height: 1.2rem;
    display: flex;
    align-items: center;
    .icon {
      width: 1rem;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.5rem;
      span {
        font-size: 0.3rem;
      }
    }
    .search {
      padding: 0px;
      margin: 0px;
      flex: 1;
      height: 0.72rem;
      background-color: #f8f8f8;
      border-radius: 0.36rem;
      color: #a09d9e;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.28rem;
      position: relative;
      .cross {
        position: absolute;
        right: 0.2rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .history-box {
    width: 100%;
    padding: 0rem 0.3rem;
    display: flex;
    flex-wrap: wrap;
    .lis {
      padding: 0.1rem 0.2rem;
      margin-bottom: 0.2rem;
      display: flex;
      align-items: center;
      &:not(:first-child) {
        border-radius: 0.4rem;
        background: #eee;
        margin-left: 0.2rem;
      }
    }
  }
}
</style>