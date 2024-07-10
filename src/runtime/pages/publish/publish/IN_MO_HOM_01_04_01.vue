<template>
  <div class="sub_gnb">
    <div class="menu_wrap">
      <button class="btn_menu" @click="modal.open('modal_sub_nav', 'bottom nav')">특가</button>
    </div>
    <div class="icon_wrap">
      <a :href="path + 'IN_MO_SRC_01_01'"><Icons class="btn_search" txt="검색" /></a>
      <a :href="path + 'IN_MO_CAR_01_01'"><Icons class="cart" txt="50" /></a>
    </div>
  </div>

  <div class="inner title_wrap_inner">
    <div class="tab_scroll_wrap">
      <Tabs
        tabType="type_02"
        :item="[
          { txt: '립 ~50%' },
          { txt: '마스크팩~50%' },
          { txt: '마스크팩~50%' },
          { txt: '마스크팩~50%' },
          { txt: '마스크팩~50%' },
          { txt: '마스크팩~50%' }
        ]"
        :tabidx="0" />
      <Inputs _type="checkbox" _text="혜택" class="checkbox02" />
    </div>
  </div>

  <template v-for="(item, idx) in sample_data" :key="idx">
    <section class="inner">
      <!-- title washed -->
      <div class="sub_title_wrap">
        <div>
          <h3>
            {{ item.sub_title }}
            <Icons class="tooltip" txt="툴팁" @click="modal.open('sample_01', 'alert sample_01')" />
          </h3>
          <p class="explain">{{ item.desc }}</p>
        </div>
      </div>
      <!-- //title washed -->

      <div v-if="item.date" class="timer_wrap">
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
        <ul class="goods_list col_3">
          <li v-for="(item, idx) in sample_goods.slice(0, 6)" :key="idx">
            <GoodsItem :item="item" :link="item.link" class="type_cart" modal_type="bottom" :useMark="false" :useScore="false" />
          </li>
        </ul>
      </div>

      <Button class="btn_outline btn_list_btm" txt="전체제품보기" />
    </section>
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
            <GoodsItem :item="item" :link="item.link" class="type_cart" modal_type="bottom" :useGiveaway="true" :useScore="false" />
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- tooltip modal -->
  <div id="sample_01" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>프로모션 제품 구매시 유의사항</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div>
          <p>동일 제품 및 교차 구매 / 기간 내 최대 10개 구매 가능</p>
          <span>기간 : 3/14(목) - 3/31(일) 23:59:00까지</span>
        </div>
      </div>
      <div class="modal_footer">
        <Button txt="확인" class="btn_big confirm" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //tooltip modal -->

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

  <!-- gnb 메뉴 모달 -->
  <div id="modal_sub_nav" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <ul>
          <li class="active">
            <a :href="path + 'IN_MO_HOM_01_04'">특가</a>
          </li>
          <li>
            <a :href="path + 'IN_MO_HOM_01_05'">이벤트</a>
          </li>
          <li>
            <a :href="path + 'IN_MO_HOM_01_07'">랭킹</a>
          </li>
          <li>
            <a :href="path + 'IN_MO_MYP_01_35'">쿠폰존</a>
          </li>
          <li>
            <a :href="path + 'IN_MO_HOM_01_08'">에디터</a>
          </li>
          <li>
            <a :href="path + 'IN_MO_APP_01_06_01'">샘플마켓</a>
          </li>
          <li>
            <a :href="path + ''">AI케어</a>
          </li>
          <li>
            <a :href="path + 'IN_MO_HOM_01_12'">쇼케이스</a>
          </li>
          <li>
            <a :href="path + 'IN_MO_HOM_01_14'">라이브</a>
          </li>
          <li>
            <a :href="path + 'IN_MO_HOM_01_15'">FOR ME</a>
          </li>
          <li>
            <a :href="path + 'IN_MO_HOM_01_16'">임직원샵</a>
          </li>
          <li>
            <a :href="path + 'IN_MO_FOO_01_01'">ABOUT</a>
          </li>
        </ul>
      </div>
    </div>
    <div div class="overlay" @click="modal.close(this)"></div>
  </div>
</template>

<script setup>
import { sample_goods, sample_data } from '@inmModule/test/data/publish/dummyData'
import { modal } from '@inmModule/assets/js/common-ui'
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-mo-default'
})

const path = '/publish/'

const props = defineProps({
  //default값이 'default'가 아니면 lnb 노출 없음
  link: {
    type: String,
    default: '#none'
  }
})

onMounted(() => {
  /* 특가 페이지 스크롤 헤더 변경 함수 */
  // 로드시 위치에 따른 헤더 변경
  if (window.scrollY >= document.querySelector('.gnb_wrap').offsetTop) document.querySelector('.sub_gnb').style.display = 'flex'
  else document.querySelector('.sub_gnb').style.display = 'none'

  // 스크롤시 헤더 변경
  window.addEventListener('scroll', () => {
    if (window.scrollY >= document.querySelector('.gnb_wrap').offsetTop) document.querySelector('.sub_gnb').style.display = 'flex'
    else document.querySelector('.sub_gnb').style.display = 'none'
  })
})
</script>

<style lang="scss" scoped>
.sub_gnb {
  padding: 0.7rem 2.6rem 0.7rem 2.1rem;
  background-color: #fff;
  display: none;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 12;

  .menu_wrap {
    display: flex;
    align-items: center;
    flex: 1;

    .btn_menu {
      font-size: 1.8rem;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 1rem;

      &:after {
        content: '';
        width: 1.6rem;
        height: 1.6rem;
        background: url('@inmModule/assets/images/common/icon_split.png') no-repeat -11rem -6rem;
        background-size: 25rem auto;
      }
    }
  }

  .icon_wrap {
    display: flex;
    gap: 1rem;
  }
}

section {
  padding: 3rem 2.1rem;

  & + section {
    border-top: 0.5rem solid #f5f5f5;
  }

  .sub_title_wrap {
    margin-top: 0;
  }
}

.inner {
  &.title_wrap_inner {
    height: 100%;
    padding: 1.6rem 2.1rem;
    border-top: 0.1rem solid #eee;
    background: #fff;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
    position: sticky;
    top: 4.6rem;
    z-index: 10;

    .tab_scroll_wrap {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      :deep(.tab_wrap) {
        width: calc(100% - 7rem);
        overflow-x: auto;

        &::-webkit-scrollbar {
          display: none;
        }

        .type_02 {
          margin-left: -9px !important;
        }

        .benefit {
          > * {
            border-color: transparent !important;
            background-color: #fff !important;
          }
        }
      }

      :deep(.input_wrap) {
        width: 6rem;
        position: relative;
        flex: none;

        &:before {
          content: '';
          width: 3rem;
          height: 100%;
          background: linear-gradient(-90deg, #fff, transparent);
          position: absolute;
          left: -3rem;
          top: 0;
          z-index: 2;
        }

        &.checkbox02 {
          input + .label {
            width: auto;
            height: 3rem;
            padding: 0 1.5rem;
            font-size: 1.4rem;
            color: #00bc70;
            line-height: 2.6rem;
            border: 2px solid #00bc70;
          }

          input:checked + .label {
            color: #fff;
          }
        }
      }
    }
  }

  em {
    padding: 10px 0 15px;
    color: #999;
    font-size: 12px;
    display: inline-block;
  }

  .timer_wrap {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

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
        width: 100%;
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
        font-size: 18px;
        line-height: 0.83em;
        letter-spacing: -0.01em;
        position: relative;
        z-index: 1;
      }
    }

    .unit {
      padding: 0 10px;
      color: #000000;
      font-size: 14px;
      line-height: 1.33em;
      letter-spacing: -0.01em;
      display: block;
    }
  }
}

.modal_wrap {
  &.sample_01 {
    .modal_container {
      .modal_header {
        border-bottom: 0;

        h2 {
          font-size: 1.8rem;
        }
      }

      .modal_content {
        padding: 2rem;

        p {
          font-size: 1.3rem;
        }

        span {
          margin-top: 0.8rem;
          color: #666;
          font-size: 1.3rem;
          display: inline-block;
        }
      }
    }
  }
}

.modal_giveaway {
  .modal_container {
    .modal_content {
      padding: 2rem 2.1rem;
    }
  }
}

:deep([class*='btn_'][class*='_outline']).btn_list_btm {
  width: 100%;
  margin-top: 3rem;
  font-size: 14px;
  border-color: #eee;

  em {
    color: #666;
  }
}
</style>
