<!--
 * @Author: zhang
 * @Date: 2022-06-07 10:51:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-07 16:35:55
 * @Descripttion: 
--> 
<template>
  <h1>test</h1>
  <h2>{{ message }}</h2>
  <button @click="sendMessage">点击我向父亲传值</button>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const props = defineProps({
  message: {
    default: "hhh",
  },
});
const emit = defineEmits(["hh"]);
let num = ref(9);
function sendMessage() {
  emit("hh", num);
}
</script>

<style>
</style>