<template>
  <header>
    <div class="inner">
      <h1>
        <a href="/publish/publish"><img src="@inmModule/assets/images/common/logo_innisfree.png" /></a> Guide
      </h1>
      <ul class="gnb">
        <!-- <li><a href="/aaGuide">list</a></li> -->
        <li><a href="/component-test">Components</a></li>
      </ul>
    </div>
  </header>
  <div id="container">
    <div class="guide_wrap">
      <slot />
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
.guide_wrap {
  padding: 30px 0;
  section {
    margin: 0 20px;
    & + section {
      margin-top: 30px;
      padding-top: 30px;
      border-top: 1px dashed #ababab;
    }
    h2 {
      margin-bottom: 20px;
      padding: 10px 10px 10px 20px;
      font-size: 24px;
      font-weight: 700;
      position: relative;
      display: flex;
      &:before {
        height: 15px;
        border-left: 5px solid #ff7200;
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
      ul {
        margin-left: auto;
        display: inline-flex;
        li {
          display: flex;
          align-items: center;
          a {
            color: #222;
            padding: 0 15px;
            font-size: 14px;
            text-decoration: none;
            display: block;
          }
        }
      }
    }
    .explain {
      margin-bottom: 20px;
      li {
        padding-left: 12px;
        position: relative;
        & + li {
          margin-top: 15px;
        }
        &:before {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          content: '-';
          display: block;
        }
        strong {
          margin-bottom: 8px;
          display: block;
        }
      }
    }
    .toolbar {
      background-color: #eee;
      display: flex;
      flex-wrap: wrap;
      li {
        padding: 8px;
        > * {
          padding: 8px;
          border-radius: 4px;
          display: block;
          transition: background 0.25s;
          &:hover {
            background-color: #ddd;
          }
          &.current {
            background-color: #ccc;
          }
        }
      }
    }
    h3 {
      margin-top: 20px;
      margin-bottom: 10px;
    }
  }
}
.design_box {
  padding: 15px;
  border: 1px solid #eee;
}

.code_box {
  padding: 15px;
  color: #fff;
  line-height: 1.8;
  background-color: #000;
  border: 10px solid #f2f2f2;
  overflow: auto;
}
</style>
