<template>
  <div class="event_item">
    <a :href="props.link" class="item">
      <span class="thumb">
        <em><img :src="item.img" /></em>
      </span>
      <div class="cont">
        <em v-if="item.sticker" class="sticker">{{ item.cate }}</em>
        <p v-if="item.date" class="date">{{ item.date }}</p>
        <!-- 이벤트 타이틀 강조표시 사용시 <em></em> 태그 사용 -->
        <div><strong v-html="item.title"></strong></div>
      </div>
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {},
  link: {
    type: String,
    default: '#none'
  }
})
</script>

<style lang="scss" scoped>
.event_item {
  position: relative;

  .thumb {
    width: 100%;
    padding-top: 65.859564%;
    overflow: hidden;
    position: relative;
    display: block;
    em {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        transition: transform 0.3s;
      }
    }
  }
  .cont {
    height: 94px;
    margin-top: 20px;
    .date {
      color: #666;
      font-size: 14px;
      letter-spacing: -0.01em;
      transition: all 0.2s;
    }
    div {
      strong {
        margin-top: 10px;
        color: #000;
        font-size: 16px;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        transition: all 0.2s;

        :deep(em) {
          color: #00bc70;
        }
      }
    }
    .sticker {
      padding: 2px 5px;
      font-size: 14px;
      font-weight: 400;
      color: #fff;
      background-color: #000;
      position: absolute;
      top: 0;
      left: 0;
      display: block;
    }
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
    .cont {
      strong {
        color: #00bc70;
      }
      .date {
        color: #00bc70;
        opacity: 0.8;
      }
    }
  }

  &.type_reverse {
    .cont {
      height: auto;
      background-color: #fff;
      display: flex;
      flex-direction: column-reverse;

      strong {
        margin-top: 0;
        margin-bottom: 8px;
      }
    }
  }

  &.type_column {
    .item {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 2rem;
      .thumb {
        width: 16rem;
        height: 10.6rem;
        padding-top: 0;
      }
      .cont {
        height: auto;
        margin-top: 0;
        display: flex;
        flex: 1;
        flex-direction: column-reverse;
        strong {
          margin-top: 0;
          font-size: 1.4rem;
        }
        .date {
          margin-top: 0.8rem;
          font-size: 1.2rem;
          font-weight: 300;
        }
        .sticker {
          padding: 0.2rem 0.5rem;
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.4rem;
        }
      }
    }
  }

  &.type_arr {
    .cont {
      div {
        padding-right: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;

        strong {
          flex: 1;
          display: -webkit-box;
        }
        &:after {
          width: 32px;
          height: 32px;
          background: url('@inmModule/assets/images/common/icon_split.png') -60px -200px no-repeat;
          background-size: 250px auto;
          content: '';
          display: block;
        }
      }
    }
  }

  &.type_box {
    .cont {
      height: auto;
      padding: 20px;
      margin-top: 0;
      background-color: #fff;
    }
  }
}
</style>
