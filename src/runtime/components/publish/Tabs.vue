<template>
    <div class="tab_wrap">
        <ul :class="tabType">
            <li v-for="(item, idx) in item" :key="idx" :class="{ current: tabidx == idx }" >
                <button type="button" @click="tabidx = idx">
                  {{ item.txt }}
                  <span v-if="item.Cnt">{{ item.Cnt }}</span>
                </button>
            </li>
        </ul>
    </div>
</template>

<script setup>

const props = defineProps({
    item: {},
    tabidx: Number,
    tabType: String,
    isProduct: Boolean,
    reviewCnt: Number,
});
</script>

<style lang="scss" scoped>


.tab_wrap {
  ul {
    display:flex;
    li {
        margin-left:-1px;
        flex:1;
        button {
            width:100%;
            height:51px;
            color:#666;
            font-size:16px;
            background-color:transparent;
            border:1px solid #eee;
            position:relative;
            display:flex;
            align-items:center;
            justify-content:center;
            transition:border 0.25s;
            transition:color 0.25s;
            span {
              margin-left:5px;
              font-size: 10px;
              color: #888;
              vertical-align: top;
            }
        }
        &:hover > button {
            border-color:#00BC70;
            z-index:2;
            :deep(em) {
                color:#00BC70;
            }
        }
        &.current > button {
            border-color:#000;
            z-index:1;
            color:#000;
            font-weight:600;
        }
    }
    &.type_01 {
        li {
        button {
            height:60px;
            font-size:14px;
            border:0;
            transition:initial;
            &:after {
              border-bottom:1px solid #f5f5f5;
              content:'';
              position:absolute;
              right:0;
              bottom:0;
              left:0;
            }
            color:#888;
            transition:initial;
        }
        &.current {
          button {
            color:#000;
            font-weight:700;
            &:after {
              border-bottom:2px solid #000;
            }
          }
        }
      }
    }
    &.type_02 {
      margin-top:-10px;
      margin-left:-10px;
      li {
        padding-top:10px;
        padding-left:10px;
        flex:0 auto;
        button {
          height:auto;
          font-size:14px;
          background-color:#f5f5f5;
          border-color:#f5f5f5;
          border-radius:999px;
          padding:6px 20px;
          color:#999e9c;
          white-space:nowrap;
        }
        &.current {
          button {
            background-color:#fff;
            border-color:#000;
            color:#000;
          }
        }
      }
    }
    &.type_03 {
      li {
        :deep(button) {
          height:62px;
          border-color:#a7a7a7;
          color:#666;
        }
        &.current {
          background:#000;
          :deep(button) {
            color:#fff;
          }
        }
      }
    }
    &.type_txt {
      margin-left:-30px;
      position:relative;
      &:after {
        border-bottom:1px solid #eee;
        content:'';
        position:absolute;
        right:0;
        bottom:0;
        left:30px;
      }
      li {
        flex:0 auto;
        button {
          height:auto;
          padding:0 30px;
          border:0;
          padding:0 0 19px 0;
          color:#999;
          font-size:16px;
          font-weight:400;
          position:relative;
        }
        &.current {
          button {
            color:#000;
            font-weight:600;
            &:after {
              border-bottom:2px solid #000;
              content:'';
              position:absolute;
              right:0;
              bottom:0;
              left:0;
            }
          }
        }
      }

    }
    &.type_03 {
      li {
        margin-left:-1px;
        flex:1;
        button {
            width:100%;
            height:64px;
            font-size:16px;
            background-color:transparent;
            border:1px solid #eee;
            position:relative;
            display:block;
            transition:border 0.25s;
            color:#666;
            transition:color 0.25s;
        }
        &.current > button {
            border-color:#000;
            background: #000 !important;
            z-index:1;
            color:#fff;
            font-weight:600;
        }
      }
    }
    &.type_04 {
      border-bottom: 1px solid #eee;
      gap: 60px;
      li {
        margin-left:-1px;
        flex:0 auto;
        button {
            width:100%;
            height:64px;
            font-size:16px;
            background-color:transparent;
            border:0;
            position:relative;
            display:block;
            transition:border 0.25s;
            color:#666;
            transition:color 0.25s;
        }
        &.current > button {
            z-index:1;
            color:#00BC70;
            font-weight:600;
            position:relative;

            &:after {
              content: "";
              height: 2px;
              background: #009D5E;
              position: absolute;
              bottom: -1px;
              right: 0;
              left: 0;
            }
        }
      }
    }
    &.type_05 {
      li {
        margin-left:-1px;
        flex:1;
        button {
            width:100%;
            height:40px;
            color:#999;
            background:#f5f5f5;
            font-size:14px;
            font-weight:normal;
            border:1px solid #ddd;
            position:relative;
            display:flex;
            align-items:center;
            justify-content:center;
            span {
              margin-left:5px;
              font-size: 10px;
              color: #888;
              vertical-align: top;
            }
        }
        &.current > button {
            border-color:#000;
            z-index:1;
            color:#000;
            background:transparent;
        }
      }
    }
  }
}
</style>
