<template>
  <Tabs tabType="type_01" :item="[{ txt: '1&#58;1 문의하기' }, { txt: '1:1 문의내역' }]" :tabidx="1" />
  <div class="inner">
    <dl class="board_type_toggle single">
      <dt>
        <a href="#none">
          <Sticker
            :item="[
              { txt: '추가문의', type: 'type04' },
              { txt: '답변대기중', type: 'type03' }
            ]" />
          <p>뷰티포인트 소멸시기가 궁금합니다.</p>
          <span>2024-04-24 08:22:50</span>
          <em></em>
        </a>
      </dt>
      <dd>
        <p>뷰티포인트 소멸시기가 궁금합니다.</p>
        <Button class="btn_outline btn_sm" txt="문의 취소" @click="modal.open('delete_modal', 'alert')" />
        <div>
          <span>답변</span>
          안녕하세요 고객님. 이니스프리입니다. 먼저, 저희 이니스프리에 관심을 가져주시고 이용해 주시는 고객님께 진심으로 감사의 마음을
          전합니다. 구매적립으로 인하여 적립된 뷰티포인트는 최종구매일로부터 1년이나 새용가능하며, 해당 기간 내 미사용시 소멸됩니다.
          이벤트로 인하여 적립된 뷰티포인트는 각 이벤트별로 정해진 기한 내 사용가능하며, 해당 기간 내 미사용시 소멸됩니다. 고객님의
          뷰티포인트 확인시 현재 보유한 뷰티포인트가 없는 것으로 확인되며, 기존 보유하셨던 뷰티포인트의 소멸기한이 궁금하신 부분이라면
          아모레퍼시픽 뷰티포인트 상담실(080-023-5454/오전 9시 - 6시, 단, 12시 - 1시 점심시간 제외)로 문의부탁드립니다. 소중한 시간 내어
          문의 주신 점 감사 드립니다. 행복한 하루 보내세요.
          <Button class="btn_outline btn_sm" txt="추가 문의하기" @click="$router.push('/publish/IN_MO_MYP_01_46')" />
        </div>
      </dd>
      <dt>
        <a href="#none">
          <Sticker :item="[{ txt: '답변완료', type: 'type05' }]" />
          <p>뷰티포인트 소멸시기가 궁금합니다.</p>
          <span>2024-04-24 08:22:50</span>
          <em></em>
        </a>
      </dt>
      <dd>
        <p>뷰티포인트 소멸시기가 궁금합니다.</p>
        <div class="img_wrap">
          <img src="/images/sam/SWIFE1.png" alt="" />
          <button @click="modal.open('img_modal', 'alert img_modal')">
            <em>2</em>
          </button>
        </div>
        <Button class="btn_outline btn_sm" txt="문의 취소" @click="modal.open('delete_modal', 'alert')" />
        <div>
          <span>답변</span>
          안녕하세요 고객님. 이니스프리입니다. 먼저, 저희 이니스프리에 관심을 가져주시고 이용해 주시는 고객님께 진심으로 감사의 마음을
          전합니다. 구매적립으로 인하여 적립된 뷰티포인트는 최종구매일로부터 1년이나 새용가능하며, 해당 기간 내 미사용시 소멸됩니다.
          이벤트로 인하여 적립된 뷰티포인트는 각 이벤트별로 정해진 기한 내 사용가능하며, 해당 기간 내 미사용시 소멸됩니다. 고객님의
          뷰티포인트 확인시 현재 보유한 뷰티포인트가 없는 것으로 확인되며, 기존 보유하셨던 뷰티포인트의 소멸기한이 궁금하신 부분이라면
          아모레퍼시픽 뷰티포인트 상담실(080-023-5454/오전 9시 - 6시, 단, 12시 - 1시 점심시간 제외)로 문의부탁드립니다. 소중한 시간 내어
          문의 주신 점 감사 드립니다. 행복한 하루 보내세요.
        </div>
      </dd>
    </dl>
    <div>
      <Button txt="더보기" class="btn_outline" />
    </div>
  </div>

  <div class="modal_wrap" id="delete_modal">
    <div class="modal_container">
      <div class="modal_header">
        <h2>알림</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div>해당 상담내역을 삭제 하시겠습니까?</div>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" @click="modal.close(this)" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <div class="modal_wrap img_modal" id="img_modal">
    <div class="modal_container">
      <div class="modal_header">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div class="swiper_wrap">
          <!-- swiper -->
          <swiper class="swiper" v-bind="swiper_options.visual" @swiper="onSwiper">
            <swiper-slide v-for="(item, idx) in qa_imgs" :key="idx">
              <div class="item">
                <img :src="item.img" />
              </div>
            </swiper-slide>
          </swiper>
          <!-- //swiper -->
        </div>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
</template>

<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
import { qa_imgs } from '@inmModule/test/data/publish/dummyData'
import { definePageMeta, ref, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-mo-menu-search-cart'
})
const props = defineProps({
  //default값이 'default'가 아니면 lnb 노출 없음
  link: {
    type: String,
    default: '#none'
  }
})

// import Swiper core and required components
import SwiperCore from 'swiper'
import { Navigation, Pagination, A11y, Autoplay, Scrollbar } from 'swiper/modules'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y, Autoplay, Scrollbar])

/* swiper option */
const setSwiper = ref(null)
const onSwiper = (swiper) => (setSwiper.value = swiper)
const swiper_options = {
  visual: {
    slidesPerView: '1',
    spaceBetween: 5,
    loop: true,
    loopedSlides: 1,
    // autoplay: {
    //   delay:500,
    //   disableOnInteraction:false,
    // },
    speed: 1000,
    scrollbar: {
      el: '.swiper-scrollbar-wrap',
      draggable: false
    },
    pagination: {
      clickable: true
    }
  }
}
/* swiper option */

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', '1:1 고객상담')

  /* accordion */
  function accordion(_target, evt) {
    // 23.08.18 nextElementSibling 테그가 없는 경우를 위한 수정
    const rotate_icon = document.querySelectorAll('.board_type_toggle dt > a > em')
    accordion = document.querySelectorAll(_target, evt)
    accordion.forEach((el) => {
      el.querySelectorAll('.board_type_toggle > dt > a').forEach((el, i) => {
        el.addEventListener(evt, function () {
          if (el.closest('dl').classList.contains('single')) {
            let j
            for (j = 0; j < el.closest('dl').getElementsByTagName('dt').length; j++) {
              if (i != j && el.closest('dl').getElementsByTagName('dt')[j].nextElementSibling != null) {
                el.closest('dl').getElementsByTagName('dt')[j].nextElementSibling.classList.remove('show')
                rotate_icon[j].classList.remove('active')
              }
            }
          }

          if (el.parentNode.nextElementSibling != null) {
            if (el.parentNode.nextElementSibling.classList.contains('show')) {
              el.parentNode.nextElementSibling.style.height = '0px'

              el.parentNode.nextElementSibling.addEventListener(
                'transitionend',
                () => {
                  el.parentNode.nextElementSibling.classList.remove('show')
                  el.parentNode.firstElementChild.lastElementChild.classList.remove('active')
                },
                { once: true }
              )
            } else {
              el.parentNode.nextElementSibling.classList.add('show')
              el.parentNode.firstElementChild.lastElementChild.classList.add('active')

              el.parentNode.nextElementSibling.style.height = 'auto'
              const height = el.parentNode.nextElementSibling.clientHeight + 'px'
              el.parentNode.nextElementSibling.style.height = '0px'
              setTimeout(() => {
                el.parentNode.nextElementSibling.style.height = height
              })
            }
          }
        })
      })
    })
  }

  accordion('.board_type_toggle', 'click')
})
</script>

<style lang="scss" scoped>
.tab_wrap {
  .type_01 {
    li {
      button {
        > em {
          padding: 0px !important;
        }
      }
    }
  }
}

.img_wrap {
  height: 18.2rem;
  padding-top: 0 !important;
  border-top: none !important;
  position: relative;
  overflow: hidden;
  img {
    object-fit: fill;
  }
  > button {
    padding: 0.8rem;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 2;
    em {
      color: #fff;
      font-size: 1rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      &::before {
        content: '';
        width: 1.2rem;
        height: 1.2rem;
        margin-right: 0.5rem;
        background: url('@inmModule/assets/mo_images/common/icon_split.png') no-repeat -23rem -7.2rem / 25rem auto;
        display: inline-block;
      }
    }
  }
}
.board_type_toggle {
  dt {
    padding: 3rem 3rem;
    border-bottom: #f4f4f4 solid 0.1rem;
    position: relative;
    a {
      :deep(.sticker) {
        gap: 0.3rem;
        li {
          em {
            padding: 0.3rem 0.5rem;
            font-size: 1rem;
          }
        }
      }
      p {
        margin-top: 1rem;
        color: #333;
        font-size: 1.4rem;
        line-height: 1.8rem;
      }
      span {
        color: #999;
        padding-top: 0.6rem;
        font-size: 1.2rem;
        font-weight: 300;
        line-height: 1.6rem;
        display: inline-block;
      }
      > em {
        width: 24px;
        height: 24px;
        background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
        background-repeat: no-repeat;
        background-size: 250px;
        background-position: -5px -215px;
        position: absolute;
        top: 50%;
        right: 2rem;
        display: inline-block;
        transform: translateY(-50%);
        transition: all 0.3s;
        &.active {
          transform: translateY(-50%) rotate(180deg);
        }
      }
    }
  }
  dd {
    padding: 3rem 3rem;
    color: #666;
    font-size: 13px;
    line-height: 20px;
    background: #f5f5f5;
    overflow: hidden;
    display: none;
    transition: height 0.2s ease-out;
    div {
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 0.1rem solid #ddd;
      display: flex;
      flex-direction: column;
      span {
        margin-bottom: 1rem;
        color: #333;
        font-size: 1.3rem;
        font-weight: 600;
        line-height: 1.6rem;
        display: block;
      }
    }
  }
}

:deep(.btn_sm) {
  min-width: 5.3rem;
  margin-top: 1rem;
  margin-left: auto;
  color: #999;
  font-size: 1rem;
  border: 0.1rem solid #999;
  border-radius: 1px;
  display: block;
  em {
    padding: 0 5px;
    color: #999;
  }
}
.show {
  display: block !important;
}
.inner {
  > div {
    width: 100%;
    padding: 0 2.1rem;
    > .btn_outline {
      width: 100%;
      margin: 3rem 0;
      border: 1px solid #eee !important;
      em {
        color: #666;
      }
    }
  }
}

.img_modal {
  .modal_container {
    .modal_header {
      border-bottom: 0;
    }
    .modal_content {
      .swiper_wrap {
        img {
          width: 330px;
          object-fit: cover !important;
        }
      }
    }
  }
}

.swiper_wrap {
  .swiper {
    padding-bottom: 3rem;
  }
}
:deep(.swiper-pagination-bullet-active) {
  background-color: #000 !important;
}
</style>
