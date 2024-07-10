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

  <Tabs class="beauty_tab" tabType="type_01" :item="[{ txt: '뷰티포인트' }, { txt: 'VIP등급안내' }]" :tabidx="0" />
  <section>
    <div class="inner">
      <div class="beauty_wrap show">
        <div class="header">
          <h4>뷰티 포인트는</h4>
          <p>쌓을수록 아름다워지는 아모레퍼시픽<br />통합 멤버십 서비스 입니다.</p>
        </div>
        <div class="sub_title_wrap">
          <h4>뷰티포인트 적립안내</h4>
        </div>
        <div class="table">
          <table>
            <caption>
              포인트 적립안내
            </caption>
            <colgroup>
              <col style="width: 100%" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">제품 구매 포인트 적립</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>결제금액의 1%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="desc_wrap">
          <h5>유의사항</h5>
          <ul class="dot_list">
            <li class="point">
              제품 구매시 연간 적립 가능한 최대 뷰티포인트는 50만 포인트로 초과분에 대해서는 포인트 적립이 되지 않습니다.
            </li>
            <li>제품 환불 시, 적립된 뷰티포인트도 자동으로 취소됩니다.</li>
            <li>
              AP 및 계열사 쇼핑몰에서 로그인 후 구매 혹은 결제하시면 포인트가 적립됩니다.<br />
              단, 온라인 쇼핑몰의 경우 배송상품의 특성상 상품 수령 후, 해당 온라인 쇼핑몰에서 구매확정 절차인 [수취확인]을 클릭하셔야
              포인트가 적립됩니다.
            </li>
            <li>이니스프리 공식 온라인몰은 배송완료 후 15일 후에 포인트가 적립됩니다.</li>
            <li>할인쿠폰/교환권/일부 상품권으로 결제 시 뷰티포인트가 적립되지 않습니다.</li>
            <li>
              뷰티포인트 카드 미소지 등의 이유로 현장에서 적립을 받지 못하셨을 경우, 구매일로부터 60일 이내에 제품 구매 매장에 구매
              영수증이나 카드대금 청구서를 제시하면 뷰티포인트 적립이 가능합니다.
            </li>
            <li>내부 심사기준에 따라 특정 브랜드 구매 편중 및 적립 과다로 비정상적으로 판단될 경우 뷰티포인트가 적립되지 않습니다.</li>
            <li>뷰티포인트 적립률은 회사 정책에 따라 사전 고지 후 변동될 수 있습니다.</li>
            <li>
              뷰티포인트는 제휴사 포인트 전환, 공병으로도 적립하실 수 있습니다. 자세한 내용은 아모레몰 > 뷰티포인트 가이드에서 확인하실 수
              있습니다.
            </li>
          </ul>
        </div>
        <div class="sub_title_wrap">
          <h4>
            뷰티포인트 사용안내
            <p class="explain">
              적립된 뷰티포인트는 <em>1P=1</em>원가치를 지니며, 사용처별<br />세부 기준은 아모레몰 > 뷰티포인트 가이드에서 확인하실 수
              있습니다.
            </p>
          </h4>
        </div>
        <div class="point_info">
          <ul>
            <li>사용시 명의자 본인 방문<br />&#40;모바일/실물 카드 or 신분증 소지&#41;</li>
            <li>제품 결제시 부분 또는 전체 사용<br />&#40;사용처별, 제품별 상이할 수 있음&#41;</li>
          </ul>
        </div>
        <ul class="dot_list mt">
          <li>
            사용시 명의자 본인이 방문해야 하며, 모바일/실물 카드 혹은 신분증을 소지하거나 휴대전화를 통한 본인인증 절차를 거쳐야 합니다.
          </li>
          <li>결제시 10P 단위로 사용할 수 있습니다. &#40;단, 방문 판매 채널은 1,000P 단위 사용&#41;</li>
          <li>부분 사용시 사용처에 따라 최대 사용 가능한 금액이 다를 수 있습니다. 사용 전, 아모레몰 > 뷰티포인트 가이드를 확인해주세요.</li>
          <li>일부 매장, 일부 제품에 대해서는 사용에 제한이 있을 수 있습니다.</li>
          <li>할인 및 특가 판매 등 일부 제품은 사용 대상에서 제외될 수 있습니다.</li>
        </ul>
        <div class="sub_title_wrap">
          <h4>
            뷰티포인트 유효기간 및 소멸안내
            <p class="explain">유효기간과 소멸 기준을 확인하여 포인트를 관리하실 수 있습니다.</p>
          </h4>
        </div>
        <ul class="dot_list">
          <li>
            기본 적립 포인트는 추가 구매 적립이 없는 경우 자동 소멸되며 회사는 별도의 고지에 대한 의무를 부담하지 않습니다.<br />
            소멸 예정 및 소멸 시기 등 관련된 정보는 아모레몰 홈페이지 또는 모바일 앱에서 확인 가능합니다.<br />
            ※ 할인 적용 제품 구매 시에는 포인트가 적립되지 않습니다.<br />
            &#40;단, 아리따움의 경우, 할인 후 실결제금액에 대해 뷰티포인트 적립 가능&#41;
          </li>
          <li>이벤트 포인트의 경우 각 포인트마다 별도 지정된 소멸 일자를 따릅니다.</li>
          <li>
            포인트 사용 후 취소할 경우 차감된 포인트는 기존 유효기간으로 복구되며 유효기간이 지난 포인트의 경우 취소일로부터 3일간
            유효기간이 적용됩니다. &#40;1회에 한함&#41;
          </li>
          <li>
            회원 탈퇴, 무거래&#40;1년&#41; 등의 사유로 포인트가 소멸되는 경우 포인트는 현금으로 반환되지 않고 소멸되며, 소멸된 포인트는
            복구가 불가능합니다.
          </li>
          <li>
            포인트 소멸은 소멸 예정일 자정에 완료되므로, 소멸 예정일까지 사용하시기 바랍니다.<br />
            예&#41; 2023.07.30 소멸 예정 포인트 → 2023.07.30에서 2023.07.31로 넘어가는 밤 12시에 소멸
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup>
import { definePageMeta, useRouter, onMounted } from '#imports'
const router = useRouter()

definePageMeta({
  layout: 'publish-mo-name-search-cart'
})

const membership_link = ['IN_MO_MYP_01_04', 'IN_MO_MYP_01_05', 'IN_MO_MYP_01_07']
const beauty_link = ['IN_MO_MYP_01_05', 'IN_MO_MYP_01_06']

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
})
</script>
<style lang="scss" scoped>
.inner {
  padding: 0 2.1rem;
}

.sub_title_wrap {
  margin-top: 5rem;

  &:nth-of-type(2) {
    margin-top: 4rem;
  }

  h4 {
    p {
      margin-top: 2rem;
    }
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

.point_info {
  margin-top: 1.5rem;
  padding: 2rem;
  border: 0.1rem solid #eee;
  background: #fcfcfd;
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    li {
      width: 100%;
      padding-left: 2.5rem;
      color: #666;
      font-size: 1.3rem;
      line-height: 1.8rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      &:before {
        content: '';
        width: 2rem;
        height: 2.5rem;
        background: url('@inmModule/assets/mo_images/common/icon_split.png') no-repeat;
        background-size: 25rem auto;
        background-position: -10.5rem -24rem;
        position: absolute;
        top: 0;
        left: 0;
      }
      &:last-child {
        &:before {
          width: 2rem;
          height: 2rem;
          background-position: -10.5rem -21rem;
        }
      }
      span {
        line-height: 1.2;
      }
    }
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

.desc_wrap {
  h5 {
    margin: 2rem 0 1rem;
    color: #333;
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1.8rem;
  }
  .dot_list {
    margin-top: 0;
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
</style>
