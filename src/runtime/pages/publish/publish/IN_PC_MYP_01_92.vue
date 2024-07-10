<template>
  <div class="title_wrap" :data-layout="props.layoutType">
    <h2>고객센터</h2>
  </div>

  <div class="inner">
    <Tabs
      class="customer_tab"
      tabType="type_03"
      :item="[{ txt: 'FAQ' }, { txt: '공지사항' }, { txt: '1:1상담' }, { txt: '매장안내' }, { txt: '창업안내' }, { txt: '전자공고' }]"
      :tabidx="1" />

    <section v-if="!isValid">
      <div class="search_wrap">
        <div class="multi_form">
          <Inputs _type="text" _placeholder="검색어를 입력하세요." />
          <Button class="btn_mid confirm" txt="검색" />
        </div>
      </div>

      <!-- 공지사항 슬라이드 탭 -->
      <Tabs tabType="type_04" :item="noti_data.tabs" :tabidx="0" />
      <!-- //공지사항 슬라이드 탭 -->

      <!-- 공지사항 목록 -->
      <div class="noti_wrap">
        <div class="sub_title_wrap">
          <h3>총&nbsp;<em>5</em>개</h3>
          <!-- 검색결과 X -->
          <!-- <p><em>'검색결과없음'</em> 검색 결과 <em>0</em> 개</p> -->
          <!-- //검색결과 X -->
        </div>
        <ul class="noti_list">
          <li v-for="(item, idx) in noti_data.list" :key="idx">
            <span class="tit">{{ idx + 1 }}</span>
            <button class="cate" type="button" @click="noti_cont($event, idx)">
              <Sticker :item="item.cate" />
              <span class="txt">{{ item.tit }}</span>
            </button>
            <span class="date">{{ item.date }}</span>
          </li>
        </ul>

        <!-- 검색결과 X -->
        <!-- <div class="no_data">
          검색 결과가 없습니다.
        </div> -->
        <!-- //검색결과 X -->
      </div>
      <!-- //공지사항 목록 -->
    </section>

    <section v-if="isValid">
      <!-- 공지사항 상세 컨텐츠 -->
      <div class="noti_detail">
        <div class="sub_title_wrap">
          <div>
            <Sticker :item="noti_lists.cate" />
            <h3>{{ noti_lists.tit }}</h3>
          </div>
          <span>{{ noti_lists.date }}</span>
        </div>

        <div class="desc">
          <p>
            보다 나은 서비스 제공을 위해 아래 일정으로 시스템을 점검할 예정입니다.<br /><br />
            점검시간 동안 이니스프리 공식 온라인몰 접속 및 서비스 이용이 어려운 점 양해 부탁드립니다.<br /><br />
            - 일시: 2024. 2. 19(월) AM 01:00 ~ 04:00(3시간 예정)<br />
            - 목적: 시스템 작업<br />
            - 범위: 이니스프리 공식 온라인몰 전체 서비스 이용 불가<br /><br />
            감사합니다.
          </p>
        </div>

        <Button class="btn_mid confirm" txt="목록" @click="noti_cont" />

        <ul class="noti_list">
          <li>
            <span class="tit">이전</span>
            <button class="cate" type="button">
              <Sticker :item="[{ txt: '이벤트 공지', type: 'type02' }]" />
              <span class="txt">[이니 라이브] 당첨자 안내 - 2/2(금) 다영x콜라겐 크림 라이브</span>
            </button>
            <span class="date">2024-02-13</span>
          </li>
          <li>
            <span class="tit">현재</span>
            <button class="cate" type="button">
              <Sticker
                :item="[
                  { txt: '고객 센터', type: 'type02' },
                  { txt: '쇼핑몰 공지', type: 'type02' }
                ]" />
              <span class="txt">[이니 라이브] 당첨자 안내 - 2/2(금) 다영x콜라겐 크림 라이브</span>
            </button>
            <span class="date">2024-02-08</span>
          </li>
          <li>
            <span class="tit">다음</span>
            <button class="cate" type="button">
              <Sticker :item="[{ txt: '이벤트 공지', type: 'type02' }]" />
              <span class="txt">[이니 라이브] 당첨자 안내 - 1/25(목) 블랙티 특집 라이브</span>
            </button>
            <span class="date">2024-01-31</span>
          </li>
        </ul>
      </div>
      <!-- //공지사항 상세 컨텐츠 -->
    </section>
  </div>
</template>
<script setup>
import { noti_data } from '@inmModule/test/data/publish/dummyData'
import { definePageMeta, useRouter, ref, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-pc-category'
})

const router = useRouter()

const props = defineProps({
  //default값이 'default'가 아니면 lnb 노출 없음
  layoutType: {
    type: String,
    default: 'default'
  }
})

const isValid = ref(false)
const noti_lists = ref(null)

const noti_cont = (e, i) => {
  isValid.value ? (isValid.value = false) : (isValid.value = true)

  noti_lists.value = noti_data.list.filter((el) => el === noti_data.list[i])[0]
}

onMounted(() => {
  // 메인 탭 이벤트
  document.querySelectorAll('.customer_tab button').forEach((el) => {
    el.addEventListener('click', customer)
  })
})

const customer = () => {
  const links = ['/publish/IN_PC_MYP_01_91', '/publish/IN_PC_MYP_01_92', '#none', '#none', '#none', '#none']
  const list = [...event.currentTarget.closest('ul').children]
  const idx = ref(0)
  list.forEach((el, i) => {
    if (el === event.currentTarget.closest('li')) idx.value = i
  })

  router.push(links[idx.value])
}
</script>
<style lang="scss" scoped>
.title_wrap {
  margin-bottom: 30px;
}

.sub_title_wrap {
  padding-left: 0;
  margin-bottom: 20px;

  h3 {
    color: #000;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;

    em {
      font-weight: 500;
    }
  }

  p {
    em {
      color: #00bc70;
    }
  }
}

:deep(.tab_wrap) {
  ul {
    &.type_03 {
      li {
        button {
          border-color: #a7a7a7;
        }
      }
    }

    &.type_04 {
      margin: 60px 0 50px;

      li {
        button {
          color: #666;
          font-size: 16px;
          font-weight: 600;
        }
      }
    }
  }
}

.search_wrap {
  margin-top: 30px;
  padding: 35px 0;
  border: 1px solid #eee;
  background: #fcfcfd;

  .multi_form {
    gap: 5px;
    align-items: center;
    justify-content: center;

    :deep(.input_wrap) {
      flex: 0 0 400px;
      .input {
        i,
        input {
          font-size: 16px;
          line-height: 20px;
        }
        i {
          top: 50%;
        }
        input {
          height: 50px;
          border-color: #ddd;
        }
      }
    }

    > :deep(button) {
      width: 100px;

      em {
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
}

.noti_list {
  border-top: 2px solid #000;

  > li {
    width: 100%;
    padding: 25px 0;
    color: #000;
    font-size: 16px;
    line-height: 1.5;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;

    .tit {
      min-width: 80px;
      text-align: center;
    }

    .cate {
      font-size: inherit;
      display: flex;
      align-items: center;

      &:hover {
        .txt {
          text-decoration: underline;
        }
      }

      .sticker {
        margin-right: 15px;
      }
    }

    .date {
      min-width: 130px;
      margin-left: auto;
      color: #000;
      text-align: center;
    }
  }
}

.no_data {
  border-top: 2px solid #000;
  margin: 0;
  padding: 140px 0;
  color: #000;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid #eee;
}

.noti_detail {
  .sub_title_wrap {
    padding: 30px;
    border-top: 2px solid #000;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .sticker {
      margin-bottom: 5px;
    }

    h3 {
      font-size: 24px;
      font-weight: 600;
      line-height: 1.33;
    }

    > span {
      color: #888;
      font-size: 16px;
      line-height: 1.5;
    }
  }

  .desc {
    padding: 30px 40px;
    color: #333;
    font-size: 16px;
    line-height: 1.5;
    border-bottom: 1px solid #eee;
  }

  > :deep(button) {
    width: 200px;
    margin: 40px auto 0;

    em {
      font-size: 16px;
      font-weight: 600;
    }
  }

  > ul {
    margin-top: 100px;
    border-top: 1px solid #eee;

    li {
      &:nth-child(2) {
        background: #f8fbfa;

        .tit {
          font-size: 0;

          &:before {
            content: '';
            width: 28px;
            height: 20px;
            margin: 0 auto;
            background: url('@inmModule/assets/images/common/icon_split.png') no-repeat -220px -300px;
            background-size: 250px auto;
            display: block;
          }
        }

        .cate {
          pointer-events: none;

          .txt {
            font-weight: 600;
          }
        }
      }

      .cate {
        &:hover {
          .txt {
            text-decoration: none;
          }
        }
      }

      .date {
        color: #888;
      }
    }
  }
}

.sticker {
  gap: 5px;
}
</style>
