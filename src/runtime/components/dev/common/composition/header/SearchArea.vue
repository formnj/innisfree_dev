<template>
  <div class="search_wrap" @mouseleave="mouseleave">
    <div class="search">
      <InmSearchInput @focus="focus" />
      <InmButton class="btn_search" />
    </div>
    <!-- search layer -->
    <div v-show="isActive" :class="['search_layer']">
      <div class="search">
        <div>
          <InmInputText ref="inputRef" v-model="textValue" @blur="blur" />
          <InmButton class="btn_search" />
        </div>
      </div>
      <!-- 최근 검색어 -->
      <section v-if="textValue === ''">
        <strong
          >최근 검색어
          <InmButton class="btn_txt" txt="전체삭제"></InmButton>
        </strong>
        <ul class="latest">
          <template v-if="latestSearchWordData.length > 0">
            <li v-for="(item, idx) in latestSearchWordData" :key="idx">
              <div>
                <NuxtLink>{{ item.word }}</NuxtLink>
                <InmButton class="btn_del" />
              </div>
            </li>
          </template>
          <template v-else>
            <li class="no_data">최근 검색어가 없습니다.</li>
          </template>
        </ul>
      </section>
      <!-- //최근 검색어 -->
      <!-- 카테고리 -->
      <section v-if="textValue === ''">
        <!-- <strong>카테고리</strong> -->
        <ul class="category">
          <li v-for="item in categoryForSearchLayerData" :key="item">
            <a href="#none">
              <span class="thumb">
                <em><img :src="item.imageUrl" /></em>
              </span>
              <p>{{ item.text }}</p>
            </a>
          </li>
        </ul>
      </section>
      <!-- //카테고리 -->
      <!-- 최근 검색어 : 검색어 입력시 -->
      <section v-if="textValue !== '' && !isBool">
        <ul class="auto">
          <li v-for="item in auto_list" :key="item">
            <a :href="item.url">
              {{ item.word }}
              <em>12.29</em>
            </a>
          </li>
        </ul>
      </section>
      <!-- //최근 검색어 : 검색어 입력시 -->
      <!-- 관련상품 : 검색어 입력시 -->
      <section v-if="textValue !== '' && !isBool">
        <!-- <section> -->
        <ul class="goods_list">
          <li v-for="(item, idx) in sample_goods" :key="idx">
            <InmGoodsItem :item="item" :link="item.link" class="type_column" />
          </li>
        </ul>
      </section>
      <!-- 관련상품 : 검색어 입력시 -->
      <!-- 관련상품X : 검색어 입력시 -->
      <section v-if="isBool">
        <div class="no_result">일치하는 결과가 없습니다.</div>
      </section>
      <!-- //관련상품X : 검색어 입력시 -->
    </div>
    <!-- //search layer -->
  </div>
</template>
<script setup>
import { ref } from '#imports'

const latestSearchWordData = [
  { word: '그린티 스킨스킨스킨스킨스킨스킨', url: 'https://www.innisfree.com/kr/ko' },
  { word: '그린티 세럼', url: 'https://www.innisfree.com/kr/ko' },
  { word: '스킨', url: 'https://www.innisfree.com/kr/ko' },
  { word: '세럼', url: 'https://www.innisfree.com/kr/ko' },
  { word: '그린티 히알루론산', url: 'https://www.innisfree.com/kr/ko' },
  { word: '콜라겐', url: 'https://www.innisfree.com/kr/ko' },
  { word: '팩트', url: 'https://www.innisfree.com/kr/ko' },
  { word: '노세범', url: 'https://www.innisfree.com/kr/ko' },
  { word: '파우더', url: 'https://www.innisfree.com/kr/ko' },
  { word: '팩', url: 'https://www.innisfree.com/kr/ko' }
]

const categoryForSearchLayerData = [
  { imageUrl: 'https://images.innisfree.co.kr/upload/mainMng/mobile/401.jpg', text: '베스트', url: 'https://www.innisfree.com/kr/ko' },
  {
    imageUrl: 'https://images.innisfree.co.kr/upload/mainMng/mobile/401.jpg',
    text: 'Sale 52%',
    url: 'https://www.innisfree.com/kr/ko',
    type: 'point'
  },
  {
    imageUrl: 'https://images.innisfree.co.kr/upload/mainMng/mobile/401.jpg',
    text: '스킨케어',
    url: 'https://www.innisfree.com/kr/ko',
    type: 'point'
  },
  { imageUrl: 'https://images.innisfree.co.kr/upload/mainMng/mobile/401.jpg', text: '선케어', url: 'https://www.innisfree.com/kr/ko' },
  {
    imageUrl: 'https://images.innisfree.co.kr/upload/mainMng/mobile/401.jpg',
    text: '세럼',
    url: 'https://www.innisfree.com/kr/ko',
    type: 'point'
  },
  { imageUrl: 'https://images.innisfree.co.kr/upload/mainMng/mobile/401.jpg', text: '팩/마스크', url: 'https://www.innisfree.com/kr/ko' },
  { imageUrl: 'https://images.innisfree.co.kr/upload/mainMng/mobile/401.jpg', text: '헤어/바디', url: 'https://www.innisfree.com/kr/ko' },
  { imageUrl: 'https://images.innisfree.co.kr/upload/mainMng/mobile/401.jpg', text: '펫', url: 'https://www.innisfree.com/kr/ko' },
  { imageUrl: 'https://images.innisfree.co.kr/upload/mainMng/mobile/401.jpg', text: '기획세트', url: 'https://www.innisfree.com/kr/ko' },
  { imageUrl: 'https://images.innisfree.co.kr/upload/mainMng/mobile/401.jpg', text: '미용소품', url: 'https://www.innisfree.com/kr/ko' }
]

const sample_goods = [
  {
    img: 'https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900',
    overflip: 'https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900',
    cate: 'BEST',
    name: '히알루론 수분 선크림 SPF 50+ PA++++',
    price: '11,000',
    sale: '~50%',
    cost: '26,000',
    sticker: [
      { txt: 'type01', type: 'type01' },
      { txt: 'type02', type: 'type02' },
      { txt: 'type03', type: 'type03' },
      { txt: 'type04', type: 'type04' }
    ],
    hash: ['#스킨팩', '#화장솜', '#순면화장솜'],
    reviewScore: {
      rate: 4.5,
      totalPoint: 1254
    },
    giveaway: {
      modal_id: 'modal_gift',
      goods: [
        {
          img: 'https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900',
          name: '제주 루트 에너지 마스크[당근] 5매 세트',
          date: '24.00.00 ~ 24.00.00',
          txt: '1개 구매시 1개 증정'
        }
      ]
    },
    big: true,
    cartTag: '4.1~5, 기간내 10개',
    hasOption: true,
    delete: false
  },

  {
    img: 'https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900',
    overflip: 'https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900',
    name: '블랙티 유스 인핸싱 앰플 50ml',
    price: '11,000',
    sale: '~50%',
    cost: '26,000',
    status: 'sold_out',
    sticker: [
      { txt: '1+1', type: 'type02' },
      { txt: '뷰티포인트전용', type: 'type01' },
      { txt: '첫구매전용', type: 'type01' }
    ],
    hash: ['#스킨팩', '#화장솜', '#순면화장솜'],
    reviewScore: {
      rate: 4.5,
      totalPoint: 1254
    }
  },
  {
    img: 'https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900',
    overflip: 'https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900',
    name: '블랙티 유스 인핸싱 앰플 50ml',
    price: '11,000',
    sale: '~50%',
    cost: '26,000',
    status: 'coming_soon',
    hash: ['#스킨팩', '#화장솜', '#순면화장솜'],
    reviewScore: {
      rate: 4.5,
      totalPoint: 1254
    }
  }
]

const textValue = ref('')

const isActive = ref(false)
const isBool = ref(false)

const inputRef = ref()

const focus = () => {
  isActive.value = true
  setTimeout(() => {
    inputRef.value.focus()
  })
}
const blur = () => {
  //
}
const mouseleave = () => {
  isActive.value = false
}
</script>

<style lang="scss" scoped>
.search_wrap {
  width: 400px;
  margin: 30px;
  position: relative;

  :deep() .search {
    padding-right: 15px;
    border: 1px solid #00bc70;
    border-radius: 40px;
    overflow: hidden;
    display: flex;
    align-items: center;

    .input {
      input {
        height: 38px;
        padding: 0 10px 0 20px;
        border: 0;
      }

      i {
        font-size: 14px;
      }
    }

    .btn_search {
      width: 24px;
      height: 24px;
      font-size: 0;
      background-color: transparent;
      background-image: url('@inmModule/assets/images/common/icon_split.png');
      background-position: 0 -30px;
      background-repeat: no-repeat;
      background-size: 250px auto;
      position: relative;
    }
  }
}

.search_layer {
  background-color: #fff;
  border: 2px solid #00bc70;
  border-radius: 10px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: absolute;
  top: -1px;
  right: 0;
  left: 0;
  z-index: 10;

  &.active {
    display: block;
  }

  strong {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 600;
    position: relative;
    display: flex;
    justify-content: space-between;

    :deep() .btn_txt {
      em {
        color: #999;
        font-size: 12px;
      }
    }
  }

  .search {
    border: 0;
    border-bottom: 1px solid #ddd;
    border-radius: 0;
    display: block;

    & > div {
      display: flex;
      align-items: center;
      flex: 1;
    }
  }

  section {
    padding: 28px;

    & + section:before {
      border-top: 1px solid #eee;
      content: '';
      display: block;
      transform: translateY(-28px);
    }

    ul.goods_list {
      display: flex;
      gap: 10px 0;

      li {
        width: 100%;
      }
    }

    ul {
      display: flex;
      flex-wrap: wrap;

      &.latest {
        margin-top: -10px;
        margin-left: -5px;

        li:not(.no_data) {
          margin-top: 10px;
          margin-left: 5px;
          padding: 0 15px;
          border: 1px solid #ddd;
          border-radius: 100px;

          div {
            display: flex;
            align-items: center;
          }
        }

        li.no_data {
          width: 100%;
          padding: 50px 10px;
          color: #999;
          text-align: center;
        }

        a {
          padding: 7px 0;
          color: #333;
          font-size: 14px;
          font-weight: 400;
          display: block;
        }

        :deep() .btn_del {
          width: 12px;
          height: 12px;
          margin-top: 1px;
          margin-left: 10px;
          background-color: transparent;
          position: relative;

          &:before,
          &:after {
            width: 10px;
            margin-top: 5px;
            margin-left: 1px;
            border-top: 1px solid #999;
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            display: block;
          }

          &:before {
            transform: rotate(45deg);
          }

          &:after {
            transform: rotate(135deg);
          }

          em {
            padding: 0;
            font-size: 0;
          }
        }
      }

      &.category {
        margin-top: -14px;
        margin-left: -14px;

        li {
          width: 20%;
          padding-top: 14px;
          padding-left: 14px;

          p {
            margin-top: 8px;
            color: #888;
            font-size: 12px;
            font-weight: 400;
            text-align: center;
          }
        }
      }

      &.auto {
        flex-direction: column;
        gap: 25px;

        li {
          a {
            color: #333;
            font-size: 14px;
            font-weight: 400;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        }
      }
    }

    .no_result {
      height: 140px;
      color: #333;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
