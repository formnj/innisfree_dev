<template>
  <Tabs
    class="membership_tab"
    tabType="type_01"
    :item="[{ txt: '멤버십 혜택안내' }, { txt: '뷰티포인트 안내' }, { txt: '모바일 앱 다운로드' }]"
    :tabidx="1" />
  <section>
    <div class="user_wrap">
      <div class="user_grade">
        <h3>김이니님은<br />웰컴 고객 입니다.</h3>
        <ul class="user_list">
          <li>
            <span>VIP 승급까지</span>
            <span>61,800 원 부족</span>
          </li>
          <li>
            <span>최근 6개월 구매 금액</span>
            <span>38,200 원</span>
          </li>
          <li>
            <span>다음 등급 산정일</span>
            <span>2024.05.01</span>
          </li>
        </ul>
        <!-- 웰컴일 경우 -->
        <div class="grade wc">
          <!-- 등급마다 grade에 클래스 추가, 아래 예시 참고
              1. 웰컴: 추가 클래스 없음
              2. VIP : vip
              3. 그린티클럽 : gtclub -->
          <div class="grade_bar">grade bar</div>
          <div class="txt">
            <span class="t1">웰컴</span>
            <span class="t2">VIP</span>
            <span class="t3">그린티클럽</span>
          </div>
        </div>
        <!-- //웰컴일 경우 -->

        <!-- vip일 경우 -->
        <div class="grade vip">
          <div class="grade_bar">grade bar</div>
          <div class="txt">
            <span class="t1">웰컴</span>
            <span class="t2">VIP</span>
            <span class="t3">그린티클럽</span>
          </div>
        </div>
        <!-- //vip -->

        <!-- gtclub일 경우 -->
        <div class="grade gtclub">
          <div class="grade_bar">grade bar</div>
          <div class="txt">
            <span class="t1">웰컴</span>
            <span class="t2">VIP</span>
            <span class="t3">그린티클럽</span>
          </div>
        </div>
        <!-- //gtclub -->
      </div>
      <ul>
        <li class="point">
          <p>뷰티포인트</p>
          <span class="num"><strong>1,000</strong>P</span>
        </li>
        <li class="coupon">
          <p>보유 쿠폰</p>
          <span class="num"><strong>6</strong>장</span>
        </li>
      </ul>
    </div>

    <!-- 비 로그인시 사용자 정보 -->
    <div class="user_wrap no_info">
      <p>로그인하고 고객님의 등급과 혜택을 확인해 보세요.</p>
      <button type="button">로그인</button>
    </div>
  </section>

  <Tabs class="beauty_tab" :item="[{ txt: '뷰티포인트' }, { txt: 'VIP등급안내' }]" :tabidx="1" tabType="type_01" />

  <section class="beauty_point">
    <div class="inner">
      <div class="header">
        <h4>VIP 등급 안내 <span>by AMOREPACIFIC</span></h4>
        <p>뷰티포인트 회원을 위한 등급별 다양하고<br />특별한 혜택을 만나보세요!</p>
      </div>
      <div class="sub_title_wrap">
        <h4>등급 산정 기준 및 혜택 안내</h4>
      </div>
      <Tabs
        class="point_tab"
        :item="[{ txt: 'PLATINUM\n플래티넘' }, { txt: 'GOLD\n골드' }, { txt: 'SILVER\n실버' }, { txt: 'GREEN\n그린' }]"
        :tabidx="0"
        tabType="type_05" />
      <div class="point_con">
        <div class="table row">
          <table>
            <caption>
              등급 산정 기준 및 혜택 안내
            </caption>
            <colgroup>
              <col style="width: 50.5%" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>기준 구매 금액</th>
                <td>{{ tb_list[tbidx].price }}만원 이상</td>
              </tr>
              <tr>
                <th>승급시 웰컴 포인트<br />VIP선정 전 구매금액</th>
                <td>{{ tb_list[tbidx].point }} P</td>
              </tr>
              <tr>
                <th>리워드 포인트 Ⅰ<br />VIP선정 후 구매 금액<br />200만원 이상</th>
                <td>20,000 P</td>
              </tr>
              <tr>
                <th>리워드 포인트 Ⅱ<br />VIP선정 후 구매금액<br />250만원 이상</th>
                <td>20,000 P</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul class="dot_list mt sm">
          <li>GREEN(그린) 등급은 21년 신설된 VIP 등급입니다.</li>
          <li>
            21년 VIP 선정시 기준 기간은 20년 01월~12월 입니다.<br />
            - 단, 17년 1월 이후 첫 구매 고객은 첫구매월로부터 12개월입니다.<br />
            &#40;예: 17년 3월 첫구매 고객의 21년 VIP 선정 기간: 20년 3월~21년 2월&#41;<br />
            - 단, 휴면 재거래 고객은 재거래 시작월로부터 12개월입니다.
          </li>
          <li>
            구매 금액 집계 기간: 웰컴 포인트 - 21년 VIP 선정 전 12개월<br />
            / 리워드 포인트 I, II – 21년 VIP 선정 후 12개월
          </li>
        </ul>
      </div>
      <div class="sub_title_wrap">
        <h4>혜택 적립, 소멸 안내</h4>
      </div>
      <Tabs
        class="guide_tab"
        :item="[{ txt: '승급시 웰컴 포인트' }, { txt: '리워드 포인트 Ⅰ' }, { txt: '리워드 포인트 Ⅱ' }]"
        :tabidx="0"
        tabType="type_05" />
      <div class="guide_con">
        <div v-if="guide_tab === 0" class="welcome">
          <div class="table row">
            <table>
              <caption>
                혜택 적립, 소멸 안내
              </caption>
              <colgroup>
                <col style="width: 33.8%" />
                <col style="width: auto" />
              </colgroup>
              <tbody>
                <tr>
                  <th>적립 시점</th>
                  <td>21년 VIP 선정월 15일 적립<sup>1</sup></td>
                </tr>
                <tr>
                  <th>소멸 시점</th>
                  <td>
                    플래티넘, 골드, 실버:<br />
                    적립일 포함 90일차 자정 소멸<br />
                    그린: 적립일로부터 90일
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="help_wrap">
            <ul>
              <li>1. 선정월 15일부터 다음달 15일까지 아모레몰에서 직접 신청</li>
              <li>* 신청방법<br />아모레몰 > 뷰티파우치 > 뷰티포인트 회원등급 > VIP 등급별 혜택 > 웰컴 포인트 적립하기</li>
            </ul>
          </div>
        </div>
        <div v-if="guide_tab === 1" class="re_one">
          <div class="table row">
            <table>
              <caption>
                혜택 적립, 소멸 안내
              </caption>
              <colgroup>
                <col style="width: 33.8%" />
                <col style="width: auto" />
              </colgroup>
              <tbody>
                <tr>
                  <th>적립 시점</th>
                  <td>200만원 구매월의 익월 15일 자동 적립</td>
                </tr>
                <tr>
                  <th>소멸 시점</th>
                  <td>적립일 포함 90일차 자정 소멸</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div v-if="guide_tab === 2" class="re_two">
          <div class="table row">
            <table>
              <caption>
                혜택 적립, 소멸 안내
              </caption>
              <colgroup>
                <col style="width: 33.8%" />
                <col style="width: auto" />
              </colgroup>
              <tbody>
                <tr>
                  <th>적립 시점</th>
                  <td>250만원 구매월의 익월 15일 자동 적립</td>
                </tr>
                <tr>
                  <th>소멸 시점</th>
                  <td>적립일 포함 90일차 자정 소멸</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="sub_title_wrap">
        <h4>유의사항</h4>
      </div>
      <ul class="dot_list">
        <li>회원등급 선정 기준 및 등급별 혜택은 회사 사정에 따라<br />변경될 수 있습니다.</li>
        <li>회원등급은 현금 결제금액(할인 후 금액)과 포인트 결제금액의<br />합산금액이 반영됩니다. (고객별 집계기간 상이)</li>
        <li>방문판매(방판/리리코스)를 통한 제품 구매 시, 수금금액을 기준으로<br />반영됩니다.</li>
        <li>ABC 회원 혜택을 받기 위해서는 반드시 아모레퍼시픽 멤버십<br />'뷰티포인트' 회원(실명인증)이어야 합니다.</li>
        <li>
          내부 심사기준에 따라 아래의 경우 선정이 제한될 수 있습니다.<br />
          <ul>
            <li>- 선정시점의 통합 탈퇴고객</li>
            <li>- 휴대번호 비정상 (3회 이상 중복, 번호 미기재, 번호오류 등)</li>
            <li>- 특정 브랜드 구매 편중 및 적립 과다로 비정상적으로 판단될 경우</li>
            <li>- 직원(판매사원 및 가맹점주)</li>
            <li>- 카운셀러/뷰레이터 전화번호로 고객이 등록된경우</li>
          </ul>
        </li>
        <li>VIP 선정기준 및 혜택에 대한 더욱 자세한 안내는 아모레몰 > 마이페이지 ><br />통합 회원 등급 혜택에서 확인하실 수 있습니다.</li>
      </ul>
    </div>
  </section>
</template>
<script setup>
import { definePageMeta, useRouter, ref, onMounted } from '#imports'
const router = useRouter()

definePageMeta({
  layout: 'publish-mo-name-search-cart'
})

const membership_link = ['IN_MO_MYP_01_04', 'IN_MO_MYP_01_05', 'IN_MO_MYP_01_07']
const beauty_link = ['IN_MO_MYP_01_05', 'IN_MO_MYP_01_06']

const tbidx = ref(0)
const guide_tab = ref(0)

const tb_list = [
  { price: '300', point: '50,000' },
  { price: '150', point: '20,000' },
  { price: '100', point: '10,000' },
  { price: '50', point: '5,000' }
]

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', '멤버십')

  document.querySelectorAll('.membership_tab li').forEach((el, idx) => {
    el.addEventListener('click', () => {
      router.push(`/publish/${membership_link[idx]}`)
    })
  })

  document.querySelectorAll('.beauty_tab li').forEach((el, idx) => {
    el.addEventListener('click', () => {
      router.push(`/publish/${beauty_link[idx]}`)
    })
  })

  document.querySelectorAll('.point_tab li').forEach((item, idx) => {
    item.addEventListener('click', () => {
      tbidx.value = idx
    })
  })

  document.querySelectorAll('.guide_tab li').forEach((item, idx) => {
    item.addEventListener('click', () => (guide_tab.value = idx))
  })
})
</script>
<style lang="scss" scoped>
.inner {
  padding: 0 2.1rem;
}

:deep(.tab_wrap) {
  &.point_tab,
  &.guide_tab {
    margin: 1.5rem 0 1rem;
    background: #f8f8f8;
    ul {
      li {
        width: 25%;
        border: 0.1rem solid #eee;
        &.current {
          button {
            color: #fff;
            font-weight: 600;
            background: #00bc70;
            border: 0.1rem solid #00bc70;
          }
        }
        button {
          height: 5.5rem;
          color: #000;
          border-color: #eee;
          font-size: 1.3rem;
          line-height: 1.6rem;
          white-space: pre-line;
        }
      }
    }
  }
}

.sub_title_wrap {
  margin-top: 5rem;

  &:nth-of-type(2) {
    margin-top: 4rem;
  }
}

.header {
  padding-left: 8rem;
  margin-top: 3rem;
  position: relative;
  &:before {
    content: '';
    width: 7rem;
    height: 7rem;
    background: url('@inmModule/assets/images/common/img_beauty_logo.png') no-repeat left top;
    background-size: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  h4 {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.8rem;
    > span {
      margin: 0;
      color: #999;
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 1.6rem;
      display: block;
    }
  }
  p {
    margin-top: 0.5rem;
    color: #666;
    font-size: 1.3rem;
    line-height: 2rem;
  }
}

.table {
  border-top: 0.1rem solid #999;
  position: relative;
  table {
    width: 100%;
    border-collapse: collapse;
    border: 0;
    caption {
      position: absolute;
      z-index: -1;
      font-size: 0;
      text-indent: -99999px;
    }
    th {
      padding: 1.1rem 1rem;
      color: #666;
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 1.6rem;
      border-bottom: 0.1rem solid #eee;
      border-left: 0.1rem solid #eee;
      background: #f5f5f5;
    }
    td {
      padding: 1.5rem 1rem;
      color: #000;
      font-size: 1.3rem;
      line-height: 1.6rem;
      text-align: center;
      border-left: 0.1rem solid #eee;
      border-bottom: 0.1rem solid #eee;
      sup {
        line-height: 1;
      }
    }
    th:first-child,
    td:first-child {
      border-left: 0;
    }
  }
  &.row {
    th,
    td {
      text-align: left;
    }
  }
}

ul.dot_list {
  margin-top: 1.5rem;
  &.mt {
    li {
      margin-top: 0.5rem;
    }
  }
  &.sm {
    li {
      color: #888;
      font-size: 1.2rem;
    }
  }
  > li {
    padding-left: 0.7rem;
    margin-top: 1rem;
    color: #666;
    font-size: 1.3rem;
    line-height: 1.53em;
    letter-spacing: -0.01em;
    position: relative;
    &.point {
      color: #ff0000;
    }
    &:before {
      content: '';
      width: 0.2rem;
      height: 0.2rem;
      background: #666;
      position: absolute;
      top: 0.8rem;
      left: 0;
    }
    &:first-child {
      margin-top: 0;
    }
    > ul {
      li {
        color: #999;
      }
    }
  }
}

.help_wrap {
  margin-top: 1.5rem;
  li {
    margin-top: 0.5rem;
    color: #888;
    font-size: 1.2rem;
    line-height: 1.53em;
    &:first-child {
      margin-top: 0;
    }
  }
}
</style>
