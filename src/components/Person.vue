<!--
 * @Author: zhang
 * @Date: 2022-06-07 10:51:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-07 13:55:28
 * @Descripttion: 
-->
<template>
  <Test @hh="gg"></Test>
  <br /><br /><br />
  num:{{ num }}
</template>

<script setup>
import { toRef, ref } from "@vue/reactivity";
import Test from "./Test";
let num = ref();
function gg(val) {
  num.value = val;
}
</script>

<style>
</style>