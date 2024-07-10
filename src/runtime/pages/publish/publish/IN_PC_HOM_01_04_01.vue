<template>
  <!-- title washed -->
  <div class="title_wrap" :data-layout="props.layoutType">
    <div>
      <h2>특가</h2>
    </div>
  </div>
  <!-- //title washed -->

  <div class="inner">
    <div class="tab_wrap">
      <ul class="type_02">
        <li v-for="(name, idx) in sale_menu" :key="idx" class="tab_title">
          <Button :txt="name" @click="tab_click($event)" />
        </li>
        <li class="benefit">
          <label for="skin1" class="setFilter_sample">
            <input id="skin1" type="checkbox" name="typArr" value="FB" alt="주름/탄력" /><span @click="setFilter($event)">혜택</span>
          </label>
        </li>
      </ul>
      <div class="sticky_menu_wrap">
        <ul class="type_02">
          <li v-for="(name, idx) in sale_menu" :key="idx" class="tab_title">
            <Button :txt="name" @click="tab_click($event)" />
          </li>
        </ul>
        <label for="skin1" class="setFilter_sample">
          <input id="skin1" type="checkbox" name="typArr" value="FB" alt="주름/탄력" /><span @click="setFilter($event)">혜택</span>
        </label>
      </div>
    </div>
  </div>

  <template v-for="(item, idx) in sample_data" :key="idx">
    <!-- title washed -->
    <div class="sub_title_wrap">
      <div>
        <h3>
          {{ item.sub_title }}
          <Icons class="tooltip" txt="툴팁" @click="modal.open('sample_01', 'layer tooltip')" />
          <!-- tooltip modal -->
          <div class="modal_wrap" id="sample_01">
            <div class="modal_container">
              <div class="modal_header">
                <h2>프로모션 제품 구매시 유의사항</h2>
                <button class="btn_close" @click="modal.close(this)">닫기</button>
              </div>
              <div class="modal_content">
                <div>
                  <p>동일 제품 및 교차 구매 가능 / 기간 내 최대 10개 구매 가능</p>
                  <p>기간 : 4/14(일) - 5/1(수) 23:59:00까지</p>
                  <p>(행사제외 - 블루베리 클렌징 워터)</p>
                </div>
              </div>
            </div>
            <div class="overlay" @click="modal.close(this)"></div>
          </div>
          <!-- //tooltip modal -->
        </h3>
        <p class="explain">{{ item.desc }}</p>
      </div>
    </div>
    <!-- //title washed -->

    <div class="inner">
      <div class="timer_wrap" v-if="item.date">
        <div class="num">
          <span id="prom_day">{{ item.date.day }}</span>
        </div>
        <span class="unit">일</span>
        <div class="num">
          <span id="prom_hh">{{ item.date.hour }}</span>
        </div>
        <span class="unit">시</span>
        <div class="num">
          <span id="prom_mm">{{ item.date.min }}</span>
        </div>
        <span class="unit">분</span>
        <div class="num">
          <span id="prom_ss">{{ item.date.sec }}</span>
        </div>
        <span class="unit">초</span>
      </div>

      <div class="list_wrap">
        <ul class="goods_list">
          <li v-for="(item, idx) in sample_goods.slice(0, 9)" :key="idx">
            <GoodsItem :item="item" :link="item.link" :useMark="false" :useScore="false" />
          </li>
        </ul>
      </div>
    </div>
  </template>

  <section>
    <div class="sub_title_wrap">
      <div>
        <h3>
          이니스프리 혜택 모음
          <Icons class="tooltip" txt="툴팁" @click="modal.open('sample_01', 'alert sample_01')" />
        </h3>
      </div>
    </div>
    <div class="inner">
      <div class="list_wrap">
        <ul class="goods_list">
          <li v-for="(item, idx) in sample_goods.slice(0, 6)" :key="idx">
            <GoodsItem :item="item" :link="item.link" class="type_cart" modal_type="alert" :useGiveaway="true" :useScore="false" />
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- 증정품 모달 -->
  <div id="modal_gift" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>증정품안내</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div class="giveaway_list">
          <dl>
            <dt>
              <img src="/images/sam/giveaway_01.png" />
            </dt>
            <dd>
              <p>제주 루트 에너지 마스크[당근] 5매 세트</p>
              <em>24.3.25 ~ 24.3.31</em>
              <span>1개 구매시 1개 증정</span>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="/images/sam/giveaway_02.png" />
            </dt>
            <dd>
              <p>비타C 세럼 럭키 박스 (30ml + 랜덤기프트)</p>
              <em>23.4.11</em>
              <span>1개 구매시 n개 증정</span>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="/images/sam/giveaway_03.png" />
            </dt>
            <dd>
              <p>레티놀 시카 앰플 포커싱 패치 1ea / 9patches</p>
              <em>24.2.29 ~ 24.3.31</em>
              <span>1개 구매시 n개 증정</span>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //증정품 모달 -->

  <ProductListCartModal />
  <!-- 장바구니/바로구매 모달 -->
</template>

<script setup>
import { setFilter, modal } from '@inmModule/assets/js/common-ui'
import { sample_goods, sale_menu, sample_data } from '@inmModule/test/data/publish/dummyData'
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-pc-category'
})

const props = defineProps({
  //default값이 'default'가 아니면 lnb 노출 없음
  layoutType: {
    type: String,
    default: 'default'
  },
  link: {
    type: String,
    default: '#none'
  }
})

const tab_click = (event) => {
  let tab_title = document.querySelectorAll('.tab_title')
  tab_title.forEach((a) => {
    a.classList.remove('current')
  })
  const target = event.currentTarget
  target.parentNode.classList.add('current')
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    const fixed = document.querySelector('.tab_wrap')
    const target = document.querySelector('.tab_wrap > .type_02')
    const sticky_menu = document.querySelector('.sticky_menu_wrap')
    const offtop = document.querySelector('.title_wrap').getBoundingClientRect().y
    if (offtop <= 1) {
      target.style.display = 'none'
      fixed.classList.add('active')
      sticky_menu.style.display = 'flex'

      /* sticky wrap slide */
      const slider = document.querySelector('.sticky_menu_wrap > ul')

      setTimeout(function () {
        let isDown = false
        let startX
        let scrollLeft
        slider.addEventListener('mousedown', (e) => {
          isDown = true
          slider.classList.add('active')
          startX = e.pageX - slider.offsetLeft
          scrollLeft = slider.scrollLeft
        })

        slider.addEventListener('mouseleave', () => {
          isDown = false
          slider.classList.remove('active')
        })

        slider.addEventListener('mouseup', () => {
          isDown = false
          slider.classList.remove('active')
        })

        slider.addEventListener('mousemove', (e) => {
          if (!isDown) return
          e.preventDefault()
          const x = e.pageX - slider.offsetLeft
          const walk = x - startX
          slider.scrollLeft = scrollLeft - walk
        })
        /* //sticky wrap slide */
      })
    } else {
      fixed.classList.remove('active')
      target.style.display = 'flex'
      sticky_menu.style.display = 'none'
    }
  })

  const header = document.querySelector('header')
  const header_height = header.getBoundingClientRect().height
  const breadcrumb_height = document.querySelector('.breadcrumb').getBoundingClientRect().height
  console.log('header_height', header_height)
  console.log('breadcrumb_height', breadcrumb_height)

  let innerwid = document.querySelector('.sticky_menu_wrap > label').clientWidth
  console.log(innerwid)
})
</script>

<style lang="scss" scoped>
.timer_wrap {
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  .num {
    width: 42px;
    height: 48px;
    background-image: url('@inmModule/assets/images/common/icon_split.png');
    background-repeat: no-repeat;
    background-size: 250px;
    background-position: -117px -142px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &::after {
      content: '';
      width: 40px;
      height: 1px;
      background: #1d1d1d;
      position: absolute;
      left: 1px;
      top: 24px;
      z-index: 2;
      display: block;
      opacity: 0.5;
    }
    span {
      color: #ffffff;
      font-size: 24px;
      line-height: 1px;
      letter-spacing: -0.01em;
      position: relative;
      z-index: 1;
    }
  }
  .unit {
    padding: 0 10px;
    color: #000000;
    font-size: 18px;
    line-height: 1.33em;
    letter-spacing: -0.01em;
    display: block;
  }
}

.sub_title_wrap {
  z-index: 2;
}
.inner {
  .tab_wrap {
    margin-bottom: 40px;
    background: #fff;
    ul {
      display: flex;
      &.type_02 {
        padding-bottom: 60px;
        border-bottom: 1px solid #eee;
        flex-wrap: wrap;
        gap: 10px;
        li {
          flex: 0 auto;
          &:deep(> *) {
            height: auto;
            font-size: 14px;
            background-color: #f5f5f5;
            border-color: #f5f5f5;
            border-radius: 999px;
            em {
              padding: 6px 20px;
              color: #999e9c;
              white-space: nowrap;
            }
          }
          &.current {
            &:deep(> *) {
              background-color: #fff;
              border-color: #000;
              em {
                color: #000;
                font-weight: 600;
              }
            }
          }
        }
      }
      li {
        > * {
          border: 1px solid #eee;
        }
        &.benefit {
          > * {
            border-color: transparent !important;
            background-color: #fff !important;
          }
        }
      }
    }
    .sticky_menu_wrap {
      width: 100%;
      height: 100%;
      padding: 20px 0;
      display: none;
      align-items: center;
      justify-content: space-between;
      position: relative;
      overflow: hidden;
      ul {
        max-width: 94%;
        padding-bottom: 0;
        border-bottom: 0;
        overflow-x: auto;
        white-space: nowrap;
        flex-wrap: nowrap;
        &::-webkit-scrollbar {
          display: none;
        }
      }
      label {
        position: relative;
        &::before {
          content: '';
          width: 40px;
          height: 100%;
          background: linear-gradient(-90deg, #fff, transparent);
          position: absolute;
          top: 0;
          left: -53%;
        }
      }
    }
    &.active {
      max-width: 1280px;
      width: 100%;
      margin: 0 auto;
      position: fixed;
      top: 80px;
      z-index: 10;
      &:after {
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.02);
        content: '';
        position: absolute;
        top: 0;
        right: -100%;
        bottom: 0;
        left: -100%;
        z-index: -1;
      }
    }
  }

  .setFilter_sample {
    display: inline-block;
    cursor: pointer;

    input {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }

    span {
      padding: 6px 24px;
      color: #00bc70;
      font-weight: 600;
      font-size: 14px;
      border: 2px solid #00bc70;
      border-radius: 999px;
      line-height: 1.29em;
      letter-spacing: -0.01em;
      display: flex;
      align-items: center;

      &.active {
        color: #ffffff;
        background: #00bc70;
      }
    }
  }

  > section {
    padding: 60px 0;
    border-top: 1px solid #eee;
    p {
      font-size: 24px;
      font-weight: 600;
    }
    em {
      padding: 10px 0 40px;
      color: #999;
      font-size: 14px;
      display: inline-block;
    }
    > .list_wrap {
      margin-top: 40px;
    }
  }
  > .benefits_wrap {
    border-top: 1px solid #eee;
    padding: 60px 0;
    h3 {
      margin-bottom: 40px;
    }
  }
}

.modal_wrap {
  &.layer {
    &.tooltip {
      z-index: 2;
      .modal_container {
        .modal_header {
          margin-top: 20px;
          padding: 20px;
          border-bottom: 0;
          h2 {
            font-size: 18px;
            font-weight: 600;
          }
        }
        .modal_content {
          padding: 20px 20px 30px;
          > div {
            > * + * {
              margin-top: 8px;
            }
            p {
              color: #666;
              font-size: 13px;
              line-height: 20px;
            }
          }
        }
      }
    }
  }
  &[id^='giveaway_'] {
    .modal_container {
      width: 500px;
      .modal_content {
        display: flex;
        flex-direction: column;
        gap: 15px;
        dl {
          border: 1px solid #f5f5f5;
          display: flex;
          gap: 16px;
          dt {
            width: 100px;
            height: 133px;
            background: #eee;
          }
          dd {
            padding: 18px 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            div {
              p {
                margin-bottom: 5px;
                font-size: 14px;
                font-weight: 400;
              }
              em {
                color: #666;
                font-size: 12px;
                font-weight: 300;
              }
            }
            span {
              font-size: 14px;
              font-weight: 400;
            }
          }
        }
      }
    }
  }
}
</style>
