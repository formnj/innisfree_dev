<template>
  <HeaderGuide />
  <div id="container">
    <div class="guide_wrap">
      <NuxtPage :device="device" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
header {
  padding: 20px;
  border-bottom: 1px solid #ddd;
  .inner {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    h1 {
      display: flex;
      align-items: center;
      gap: 15px;
      a {
        display: block;
        img {
          height: 20px;
        }
      }
    }
  }
  a {
    color: #222;
    text-decoration: none;
  }
  .gnb {
    display: flex;
    li {
      position: relative;
      a {
        padding: 8px 15px;
        display: block;
      }
    }
    ul {
      display: inline-flex;
      align-items: center;
      li {
        display: flex;
        align-items: center;
      }
      li + li:before {
        height: 10px;
        border-left: 1px solid #ccc;
        content: '';
        display: block;
      }
    }
  }
}
</style>
