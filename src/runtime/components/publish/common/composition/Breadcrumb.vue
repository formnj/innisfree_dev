<template>
  <div class="breadcrumb">
    <div class="inner">
      <a href="#none">Home</a>
      <dl v-for="(menu, index) in props.menuList" :key="index" @mouseenter="open(index)" @mouseleave="close(index)">
        <dt>
          <InmButton class="btn_txt">{{ menu.menuText }}</InmButton>
        </dt>
        <dd ref="ddRefs">
          <ul ref="ulRefs">
            <li v-for="(subMenu, subIndex) in menu.subMenuList" :key="subIndex">
              <a :href="subMenu.url">{{ subMenu.menuText }}</a>
            </li>
          </ul>
        </dd>
      </dl>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from '#imports'

interface IBreadcrumb {
  menuText: string
  subMenuList?: Array<IBreadcrumb>
  url?: string
}

interface IBreadcrumbProps {
  menuList: Array<IBreadcrumb>
}

const props = defineProps<IBreadcrumbProps>()

const ddRefs = ref([])
const ulRefs = ref([])

const open = (index) => {
  const ddTagStyle = ddRefs.value[index].style
  ddTagStyle.cssText = 'height:0; border:1px solid #aaa; display:block'
  ddTagStyle.height = `${ulRefs.value[index].clientHeight + 2}px`
}

const close = (index) => {
  ddRefs.value[index].style.cssText = 'height:0; border:0;'
}
</script>
<style lang="scss">
.breadcrumb {
  border-bottom: 1px solid #ddd;
  .inner {
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    > a {
      font-size: 0;
    }
    dl {
      position: relative;
      dt {
        button {
          em {
            padding: 21px 10px !important;
            color: #999 !important;
          }
        }
      }
      dd {
        margin-top: -10px;
        background-color: #fff;
        overflow: hidden;
        position: absolute;
        top: 100%;
        left: -5px;
        z-index: 2;
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
