<template>
  <header>
    <div class="inner">
      <h1>
        <a href="/publish"><img src="@inmModule/assets/images/common/logo_innisfree.png" /></a> Guide
      </h1>
      <ul class="gnb">
        <li><a :href="path + 'guide'">Guide</a></li>
        <li><a :href="path + 'layouts'">Layouts</a></li>
        <li><a :href="path">list</a></li>
        <li><a :href="path + 'components'">Components</a></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
let path = '/publish/guide/'
</script>

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
