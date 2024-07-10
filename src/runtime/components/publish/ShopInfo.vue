<template>
  <div class="shop_wrap">
    <div class="shop">
      <div class="info">
        <div class="tit">
          <em>{{ item.branch }}</em
          ><span>{{ item.distance }}</span>
        </div>
        <div class="add">{{ item.add }}</div>
        <div class="phone">{{ item.phone }}</div>
      </div>
      <div class="btn_wrap">
        <a href="tel:000-0000-0000" class="btn_call">전화걸기</a>
        <button type="button" class="btn_map" @click="openMap">위치보기</button>
      </div>
    </div>
    <div class="map">
      <p style="text-align: center; padding-top: 2rem">지도영역</p>
      <div class="map_pointer">
        <span class="name">{{ item.branch }}</span>
        <span class="pointer">위치</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {}
})

const openMap = () => {
  const el = event.target
  const map = el.parentElement.parentElement.parentElement
  map.classList.toggle('open')
}
</script>

<style lang="scss" scoped>
.shop_wrap {
  &.selected {
    background-color: #f7fafa;
  }

  &.open {
    .map {
      height: 22.4rem;
    }
  }

  .shop {
    padding: 3rem 2.1rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    .info {
      .tit {
        color: #000;
        vertical-align: middle;

        em {
          font-size: 1.6rem;
          font-weight: 500;
          line-height: 2.4rem;
        }

        span {
          font-size: 1.3rem;
          font-weight: 600;
          margin-left: 1rem;

          &:before {
            content: '';
            width: 0.1rem;
            height: 1.2rem;
            margin-right: 1rem;
            background-color: #eee;
            display: inline-block;
          }
        }
      }

      .add {
        margin-top: 0.5rem;
        font-size: 1.3rem;
        line-height: 2rem;
        color: #999;
      }

      .phone {
        margin-top: 0.3rem;
        font-size: 1.3rem;
        line-height: 2rem;
        color: #666;
      }
    }

    .btn_wrap {
      display: flex;
      gap: 1.5rem;
      flex: 1;

      button,
      a {
        width: 2.4rem;
        height: 2.4rem;
        font-size: 0;
        display: inline-block;

        &.btn_call {
          background: url('@inmModule/assets/mo_images/common/icon_split.png') 0 -28rem / 25rem auto no-repeat;
        }

        &.btn_map {
          background: url('@inmModule/assets/mo_images/common/icon_split.png') -3rem -28rem / 25rem auto no-repeat;
        }
      }
    }
  }

  .map {
    height: 0;
    background-color: #eee;
    overflow: hidden;

    .map_pointer {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      gap: 0.8rem;

      & > span {
        display: inline-block;
      }

      .name {
        height: 3.2rem;
        padding: 0 1.5rem 0 2rem;
        border-radius: 1.6rem;
        color: #fff;
        line-height: 3.2rem;
        background: #00bc70;
        position: relative;

        &:after {
          content: '';
          width: 1.15rem;
          height: 1.4rem;
          margin-left: 0.5rem;
          vertical-align: middle;
          background: url('@inmModule/assets/mo_images/common/icon_split.png') -9rem -28rem / 25rem auto no-repeat;
          display: inline-block;
        }

        &:before {
          content: '';
          position: absolute;
          display: block;
          width: 0.75rem;
          height: 0.9rem;
          background: #00bc70;
          top: calc(100% - 1px);
          left: 50%;
          box-sizing: border-box;
          clip-path: polygon(0 0, 3% 100%, 100% -5%, calc(100% - 15px) 0, 1px calc(100% - 2px), 1px 0);
        }
      }

      .pointer {
        font-size: 0;
        width: 2.7rem;
        height: 3.5rem;
        background: url('@inmModule/assets/mo_images/common/icon_split.png') -6rem -28rem / 25rem auto no-repeat;
      }
    }
  }
}
</style>
