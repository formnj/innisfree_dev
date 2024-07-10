<template>
  <div class="breadcrumb">
    <div class="inner">
      <a href="#none">Home</a>
      <dl v-for="(item, idx) in item" :key="idx" @mouseenter="breadcrumb.open" @mouseleave="breadcrumb.close">
        <dt>
          <Button class="btn_txt" :txt="item.menuText" />
        </dt>
        <dd>
          <ul>
            <li v-for="item in item.subMenuList" :key="item">
              <a :href="item.url">{{ item.menuText }}</a>
            </li>
          </ul>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {}
})

const breadcrumb = {
  open: (e) => {
    e.target.closest('dl').querySelector('dd').style.cssText = 'height:0; border:1px solid #aaa; display:block'
    let client_H = e.target.closest('dl').querySelector('ul').clientHeight + 2
    // console.log(e.target.closest('dl').querySelector('ul').clientHeight);
    e.target.closest('dl').querySelector('dd').style.height = client_H + 'px'
  },
  close: (e) => {
    e.target.closest('dl').querySelector('dd').style.cssText = 'height:0; border:0;'
  }
}
</script>
<style lang="scss" scoped>
.breadcrumb {
  border-bottom: 1px solid #ddd;
  .inner {
    width: 1320px;
    padding: 0 20px;
    margin: 0 auto;
    position: relative;
    display: flex;
    > a {
      width: 16px;
      height: 16px;
      font-size: 0;
      background-image: url('@inmModule/assets/images/common/icon_split.png');
      background-size: 250px;
      background-repeat: no-repeat;
      background-position: -41px -143px;
      position: absolute;
      top: 50%;
      left: 20px;
      display: flex;
      align-items: center;
      transform: translateY(-50%);
    }
    dl {
      &:first-of-type {
        margin-left: 24px;
      }
      position: relative;
      dt {
        :deep(button) {
          em {
            padding: 21px 0px !important;
            color: #999 !important;
            display: flex;
            align-items: center;
            &::before {
              content: '';
              width: 12px;
              height: 12px;
              margin: 0 12px;
              background-image: url('@inmModule/assets/images/common/icon_split.png');
              background-size: 250px;
              background-repeat: no-repeat;
              background-position: -84px -145px;
              display: inline-block;
            }
            &::after {
              content: '';
              width: 12px;
              height: 12px;
              margin-left: 5px;
              background-image: url('@inmModule/assets/images/common/icon_split.png');
              background-size: 250px;
              background-repeat: no-repeat;
              background-position: -65px -144px;
              display: inline-block;
            }
            &.active {
              color: #000 !important;
              &::after {
                background-image: url('@inmModule/assets/images/common/icon_split.png');
                background-size: 250px;
                background-repeat: no-repeat;
                background-position: -209px 1px;
                display: inline-block;
                transform: rotate(90deg);
              }
            }
          }
        }
      }
      dd {
        margin-top: -10px;
        background-color: #fff;
        overflow: hidden;
        position: absolute;
        top: 100%;
        left: 17px;
        z-index: 10;
        display: none;
        transition: height 0.25s ease-in;
        ul {
          max-height: 200px;
          overflow-y: auto;
          &::-webkit-scrollbar {
            width: 2px;
          }
          &::-webkit-scrollbar-thumb {
            background-color: #c9c9c9;
            border-radius: 2px;
          }
          &::-webkit-scrollbar-track {
            background-color: transparent;
          }
          a {
            padding: 10px 15px;
            color: #888;
            font-size: 14px;
            white-space: nowrap;
            display: block;
            &:hover {
              color: #00bc70;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
}
</style>
