<template>
  <div class="text_banner">
    <div class="swiper_wrap">
      <InmSwiper v-bind="swiperOpt.textbanner" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide>
          <a href="#none">현대카드 결제시 20% 할인혜택</a
          ><!-- default : #ccc / 관리자에서 직접 색상값 지정할 수 있음 -->
        </swiper-slide>
        <swiper-slide>
          <a href="#none" style="background: #b7e8cb">네이버페이 10,000원 혜택</a>
        </swiper-slide>
        <swiper-slide>
          <a href="#none" style="color: #fff; background: purple">네이버페이 10,000원 혜택</a>
        </swiper-slide>

        <!-- customer pagination -->
        <div class="custom_pagination">
          <Button class="btn_swiper_cont" data="play" />

          <div class="current">
            <em class="idx_01"></em>
          </div>
          <strong class="total"></strong>
        </div>
        <!-- //customer pagination -->
      </InmSwiper>
    </div>
  </div>
</template>

<script setup>
import { SwiperSlide } from 'swiper/vue'

const swiperOpt = {
  textbanner: {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 40,
    autoplay: {
      delay: 3000
    }
  }
}

const onSwiper = (swiper) => {
  const total = swiper.wrapperEl.children.length,
    current = swiper.realIndex + 1

  swiper.wrapperEl.parentNode.querySelector('.custom_pagination .current .idx_01').textContent = current
  swiper.wrapperEl.parentNode.querySelector('.custom_pagination strong.total').textContent = total

  swiper.wrapperEl.parentNode.querySelector('.custom_pagination button').addEventListener('click', () => {
    if (event.currentTarget.getAttribute('data') == 'play') {
      swiper.autoplay.stop()
      event.currentTarget.setAttribute('data', 'pause')
    } else {
      swiper.autoplay.start()
      event.currentTarget.setAttribute('data', 'play')
    }
  })
}

const onSlideChange = (swiper) => {
  const current = swiper.realIndex + 1

  swiper.wrapperEl.parentNode.querySelector('.custom_pagination .current .idx_01').textContent = current
}
</script>

<style lang="scss" scoped>
.text_banner {
  .swiper {
    padding: 0 2.1rem;
  }
  a {
    height: 40px;
    padding: 0 30px;
    font-size: 12px;
    font-weight: 600;
    line-height: 40px;
    background-color: #ccc;
    border-radius: 100px;
    display: block;
  }
  .custom_pagination {
    height: 2rem;
    padding: 0 0.8rem;
    color: #fff;
    font-size: 10px;
    font-weight: 400;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10rem;
    position: absolute;
    top: 50%;
    right: 3.5rem;
    z-index: 1;
    display: flex;
    align-items: center;
    transform: translateY(-50%);
    .idx_01,
    .total {
      width: 1.2rem;
      line-height: 1.2rem;
      text-align: right;
      position: relative;
      display: block;
    }
    .total {
      margin-left: 0.4rem;
      font-weight: 400;
      opacity: 0.5;
      &:before {
        content: '/';
        position: absolute;
        top: 50%;
        left: -0.2rem;
        display: block;
        transform: translateY(-50%);
      }
    }
    :deep(button) {
      width: 1.2rem;
      height: 1.2rem;
      margin-right: 0.2rem;
      background-color: transparent;
      background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
      background-repeat: no-repeat;
      background-size: 25rem auto;
      em {
        padding: 0;
        font-size: 0;
      }
      &[data='play'] {
        background-position: -4rem -32rem;
      }
      &[data='pause'] {
        background-position: -6rem -32rem;
      }
    }
  }
}
</style>
