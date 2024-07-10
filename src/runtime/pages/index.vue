<template lang="">
  <nav class="menu menu_active">
    <ol>
      <li class="menu-item">
        <div>개발</div>
        <ol class="sub-menu">
          <li class="menu-item"><NuxtLink to="/dev/guide/component">개발 컴포넌트</NuxtLink></li>
          <li class="menu-item"><NuxtLink to="/dev/guide/component#GuideLayout">개발 레이아웃</NuxtLink></li>
        </ol>
      </li>
      <li class="menu-item">
        <div>퍼블</div>
        <ol class="sub-menu">
          <li class="menu-item"><NuxtLink to="/publish/guide">리스트</NuxtLink></li>
          <li class="menu-item"><NuxtLink to="/publish/guide/components">가이드 컴포넌트</NuxtLink></li>
        </ol>
      </li>
    </ol>
  </nav>
</template>
<script setup lang="ts">
import { definePageMeta } from '#imports'

definePageMeta({
  layout: false
})
</script>
<style lang="scss" scoped>
$innsfree: #00bc70;
$grey: #4d4d4c;
$yellow: #efc371;
$purple: #ae94c0;
$green: #b5bc67;
$orange: #dd925f;

a {
  color: inherit;
  text-decoration: none;
}

nav {
  line-height: 1.4;
  font-family: 'Space Mono', monospace;
  background: #1d1f20;
  padding: 25px 35px;
  width: 300px;
  top: calc(50vh - 247px);
  left: calc(50vw - 150px);
  position: fixed;
  border-radius: 16px;
  box-shadow: 0 0 60px -15px black;
  transform: scale(0) rotate(360deg);
  transition: all 0.75s;
  font-size: 18px;
}

nav.menu_active {
  transform: scale(1) rotate(0deg);
}

nav > ol > li {
  margin: 20px 0;
  color: $green;
}

nav > ol > li:first-of-type {
  color: $yellow;
}

nav > ol > li > ol {
  margin: 10px 0 0 20px;
  border-left: 1px solid $grey;
  color: $purple;
}

nav > ol > li > ol > li {
  margin: 7px 0;
  padding-left: 20px;
}
</style>
