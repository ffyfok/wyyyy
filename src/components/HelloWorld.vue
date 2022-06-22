<!--
 * @Author: zhang
 * @Date: 2022-06-02 16:49:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-10 17:34:35
 * @Descripttion: 
-->
<template>
  <h1>khd</h1>
  <h2>{{ a.name.h }}</h2>
  <h2>g:{{ g }}</h2>
  <h3>ccc:{{ ccc }}</h3>
  <button @click="add" ref="but">jia</button>
  <div>--------------------------------------------------</div>
  <button @click="test">测试一下父子传值</button>
  <div>{{ store.state.a }}</div>
  <button @click="haha">点点点</button>

  <!-- <h1>姓名：{{ person.name }}</h1>
  <h1>性别：{{ person.sex }}</h1>
  <h1 v-if="hobby.length">爱好：{{ hobby }}</h1>
  <h1 v-if="person.age">年龄：{{ person.age }}</h1>
  <button @click="add">添加年龄</button> -->
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { onMounted, watch } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "HelloWorld",
  props: ["msg"],
  emits: ["hello"],
  setup(props, context) {
    // console.log(props.msg);
    console.log(context);
    let a = ref({
      name: {
        h: 23,
      },
    });
    let ccc = ref(90);

    let g = ref(9);
    const but = ref(null);
    onMounted(() => {
      console.log(but.value);
    });

    function add() {
      a.value.name.h++;
      g.value++;
    }
    function test() {
      context.emit("hello", 677);
    }
    watch(ccc, (newValue, oldValue) => {
      console.log(newValue);
      console.log(oldValue);
    });
    watch(
      g,
      (newValue, oldValue) => {
        console.log(newValue);
        console.log(oldValue);
      },
      { immediate: true }
    );
    function haha() {
      store.dispatch("test123", 6);
    }

    const store = new useStore();

    return {
      a,
      add,
      but,
      test,
      store,
      haha,
      g,
      ccc,
    };
  },

  //#region
  // data() {
  //   return {
  //     person: {
  //       name: "zhangsan",
  //       sex: "女",
  //     },
  //     hobby: ["抽烟", "喝酒"],
  //   };
  // },
  // methods: {
  //   add() {
  //     this.person.age = 16;
  //     this.hobby[0] = "烫头";
  //   },
  // },
  //#endregion
};
</script>


