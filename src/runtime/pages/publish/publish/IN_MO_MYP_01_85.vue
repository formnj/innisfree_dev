<template>
  <div class="my_shop_wrap">
    <div class="info">
      <div class="title">
        <h3>마이샵이란?</h3>
        <p>내가 선택하는 ‘나의 단골매장’으로<br />내 단골 매장 서비스 소식을 받아보실 수 있습니다.</p>
        <Button class="btn_mid confirm" txt="위치기반 서비스 동의 모달(확인용)" @click="modal.open('alert_myshop_agree', 'alert')" />
        <Button class="btn_mid confirm" txt="마이샵 등록하기" @click="modal.open('modal_pick_my_shop', 'fullMo modal_pick_my_shop')" />
      </div>
      <div class="my_shop">
        <!-- 폐점일 경우 closed 클래스 추가-->
        <dl>
          <dt>
            등록된 마이샵
            <button type="button" class="btn_dot_menu" @click="modal.open('modal_my_shop_menu', 'layer')">마이샵 메뉴</button>
            <div id="modal_my_shop_menu" class="modal_wrap">
              <!-- 마이샵 메뉴 -->
              <div class="modal_container">
                <ul class="dot_menu">
                  <li><button type="button" class="btn_single_menu">변경</button></li>
                  <li>
                    <button type="button" class="btn_single_menu" @click="modal.open('alert_myshop_del', 'alert')">1개월 전(확인용)</button>
                  </li>
                  <li><button type="button" class="btn_single_menu" @click="modal.open('alert_myshop_del2', 'alert')">삭제</button></li>
                </ul>
              </div>
              <div class="overlay" @click="modal.close(this)"></div>
            </div>
            <!-- //마이샵 메뉴 -->
          </dt>
          <dd class="no_shop">등록된 매장이 없습니다.</dd>
          <!-- 등록된 매장이 없을 경우 -->
          <!-- 등록 매장-->
          <dd>
            <em>이마트_IF용산점</em>
            <p>[10500] 경기도 고양시 덕양구 백양로 79 최대한줄로 표시됩니다.</p>
          </dd>
          <!-- //등록 매장-->
        </dl>
      </div>
      <ul class="bul_list dash">
        <li>
          마이샵은 등록일 기준으로 1개월 이후 변경이 가능합니다.<br />1개월 이내 변경을 원하시면 고객센터 (080-380-0114)로 문의해주세요.
        </li>
        <li>폐점/폐쇄점 매장의 경우 [삭제] 버튼 클릭 시 삭제되며, 삭제 후 마이샵 재등록이 가능합니다.</li>
      </ul>
    </div>

    <section>
      <div class="sub_title_wrap mt0">
        <h4>매장 안내</h4>
      </div>
      <div class="multi_form">
        <Selectbox
          :options="[
            { val: 'op1', name: 'op', txt: '광역시/도' },
            { val: 'op2', name: 'op', txt: '강원' },
            { val: 'op3', name: 'op', txt: '경기' },
            { val: 'op4', name: 'op', txt: '경남' }
          ]" />
        <Selectbox
          :options="[
            { val: 'op1', name: 'op2', txt: '시/군/구' },
            { val: 'op2', name: 'op2', txt: '강릉시' },
            { val: 'op3', name: 'op2', txt: '고성군' },
            { val: 'op4', name: 'op2', txt: '동해시' }
          ]" />
      </div>

      <div class="multi_form">
        <Inputs _type="text" _placeholder="매장명" />
        <Button class="btn_outline" txt="검색" />
      </div>
    </section>

    <div class="shop_list">
      <div class="list_header">총 <em>337개</em> 매장</div>
      <div class="no_content">검색된 매장이 없습니다.</div>
      <ul>
        <li v-for="(item, idx) in shop_list" :key="idx">
          <ShopInfo :item="item" />
        </li>
      </ul>
    </div>
  </div>
  <!-- 마이샵 등록하기 -->
  <div id="modal_pick_my_shop" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>마이샵 등록하기</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <section>
          <div class="title">
            <h3><em>최근 방문한 매장</em></h3>
          </div>
          <ul class="pick_shop_list">
            <li v-for="(item, idx) in shop_list.slice(0, 1)" :key="idx">
              <input :id="'shop0' + idx" type="radio" name="shop0" />
              <label :for="'shop0' + idx">
                <ShopInfo :item="item" />
              </label>
            </li>
          </ul>
        </section>
        <section>
          <div class="title">
            <h3><em>가장 가까운 매장</em></h3>
          </div>
          <div class="noti">
            <p>위치서비스를 이용할 수 없습니다.<br />앱관리 > 이니스프리 > 위치서비스 상태를 변경해주세요.</p>
            <Button class="btn_outline" txt="설정페이지로 이동" />
          </div>
          <ul class="pick_shop_list">
            <li v-for="(item, idx) in shop_list.slice(0, 2)" :key="idx">
              <input :id="'shop1' + idx" type="radio" name="shop1" />
              <label :for="'shop1' + idx">
                <ShopInfo :item="item" />
              </label>
            </li>
          </ul>
        </section>
        <section>
          <div class="title">
            <h3>매장 검색</h3>
            <div class="multi_form">
              <Selectbox
                :options="[
                  { val: 'op1', name: 'op', txt: '광역시/도' },
                  { val: 'op2', name: 'op', txt: '강원' },
                  { val: 'op3', name: 'op', txt: '경기' },
                  { val: 'op4', name: 'op', txt: '경남' }
                ]" />
              <Selectbox
                :options="[
                  { val: 'op1', name: 'op2', txt: '시/군/구' },
                  { val: 'op2', name: 'op2', txt: '강릉시' },
                  { val: 'op3', name: 'op2', txt: '고성군' },
                  { val: 'op4', name: 'op2', txt: '동해시' }
                ]" />
            </div>
            <div class="multi_form">
              <Inputs _type="text" _placeholder="검색어를 입력해주세요." />
              <Button class="btn_outline" txt="매장 검색" />
            </div>
          </div>

          <p class="list_header">총 <em>337개</em> 매장이 검색되었습니다.</p>
          <div class="no_content">검색된 매장이 없습니다.</div>
          <ul class="pick_shop_list">
            <li v-for="(item, idx) in shop_list.slice(0, 2)" :key="idx">
              <input :id="'shop3' + idx" type="radio" name="shop3" />
              <label :for="'shop3' + idx">
                <ShopInfo :item="item" />
              </label>
            </li>
          </ul>
        </section>
      </div>
      <div class="btn_wrap">
        <Button class="btn_big" txt="마이샵 등록하기" disabled />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //마이샵 등록하기 -->

  <!-- 운영매장/마이샵 등록 1개월 내 -->
  <div id="alert_myshop_del" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
        <p class="tit">알림</p>
        <p class="txt">마이샵 변경/삭제는 마이샵 등록일로부터 1개월 후에 하실 수 있습니다.</p>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //운영매장/마이샵 등록 1개월 내 -->

  <!-- 운영매장/ 마이샵 등록 1개월 후, 폐점/폐쇄점 매장 -->
  <div id="alert_myshop_del2" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
        <p class="tit">마이샵 삭제</p>
        <p class="txt">등록한 마이샵을 삭제하시겠습니까?<br />삭제 후 새로운 마이샵을 등록하실 수 있습니다.</p>
      </div>
      <div class="modal_footer">
        <Button class="btn_big" txt="취소" />
        <Button class="btn_big confirm" txt="확인" @click="modal.open('alert_myshop_del3', 'alert')" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //운영매장/ 마이샵 등록 1개월 후, 폐점/폐쇄점 매장 -->

  <!-- 삭제되었습니다 -->
  <div id="alert_myshop_del3" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
        <p class="tit">알림</p>
        <p class="txt">삭제되었습니다.</p>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //삭제되었습니다. -->

  <!-- 위치기반서비스 동의 -->
  <div id="alert_myshop_agree" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
        <p class="tit">알림</p>
        <p class="txt">
          <strong>이니스프리 서비스 이용을 위해 다음의 앱 권한과 약관동의가 필요합니다.</strong><br />
          <br />
          위치 : 가까운매장검색<br />
          권한 허용과 이용약관에 동의하지 않을 수 있습니다.<br />동의하지 않은 경우 해당 기능을 사용할 수 없습니다.
        </p>
        <div class="agree_box">
          <Inputs _type="checkbox" _text="위치기반서비스 이용약관 동의" />
          <a href="#none" class="btn_link_arrw">전문보기</a>
        </div>
      </div>
      <div class="modal_footer">
        <Button class="btn_big" txt="허용안함" />
        <Button class="btn_big confirm" txt="승인" @click="modal.open('alert_myshop_agree2', 'alert')" />
        <Button class="btn_big confirm" txt="승인(미체크 확인용)" @click="modal.open('alert_myshop_agree3', 'alert')" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //위치기반서비스 동의 -->

  <!-- 위치기반서비스 동의 - 체크 -->
  <div id="alert_myshop_agree2" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
        <p class="tit">알림</p>
        <p class="txt">위치기반서비스 이용약관 동의 여부가 수정되었습니다.</p>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //위치기반서비스 동의 - 체크 -->

  <!-- 위치기반서비스 동의 - 미체크 -->
  <div id="alert_myshop_agree3" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
        <p class="tit">알림</p>
        <p class="txt">위치기반서비스 이용약관 동의 후 승인할 수 있습니다.</p>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //위치기반서비스 동의 - 미체크 -->
</template>

<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
import { shop_list } from '@inmModule/test/data/publish/dummyData'
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-mo-name-search-cart'
})

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', '마이샵관리')

  //마이샵 메뉴 외 영역 클릭 시 메뉴 닫힘
  const body = document.querySelector('body')
  body.addEventListener('click', (event) => {
    const target = event.target
    const dotMenuModal = document.getElementById('modal_my_shop_menu')
    if (
      !target.classList.contains('btn_dot_menu') &&
      dotMenuModal.classList.contains('active') &&
      !target.classList.contains('btn_single_menu')
    ) {
      dotMenuModal.classList.remove('active')
    }
  })
})
</script>

<style lang="scss" scoped>
.my_shop_wrap {
  .info {
    padding: 3rem 2.1rem;

    .title {
      margin-bottom: 2rem;
      text-align: center;

      h3 {
        margin-bottom: 0.5rem;
        font-size: 2rem;
        line-height: 2.4rem;
        color: #000;
      }

      .p {
        font-size: 13rem;
        line-height: 2rem;
        color: #666;
      }

      button.confirm {
        width: 100%;
        margin-top: 2rem;
        justify-content: flex-end;
      }
    }
  }

  .my_shop {
    padding: 2rem;
    background-color: #f7fafa;
    border: 1px solid #e2eaea;

    dl {
      dt {
        font-size: 1.2rem;
        color: #00bc70;
        line-height: 1.6rem;
        position: relative;

        .btn_dot_menu {
          width: 2.4rem;
          height: 2.4rem;
          font-size: 0;
          background: url('@inmModule/assets/mo_images/common/icon_split.png') -21rem -7rem / 25rem auto no-repeat;
          position: absolute;
          bottom: 0;
          right: -2.2rem;
        }
      }

      dd {
        margin-top: 1.6rem;
        line-height: 2rem;

        em {
          font-size: 1.6rem;
          font-weight: 600;
        }

        p {
          margin-top: 0.8rem;
          font-size: 1.3rem;
          color: #888;
          text-overflow: ellipsis;
          white-space: normal;
          word-wrap: break-word;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }

        &.no_shop {
          margin-top: 0.8rem;
          padding-top: 1.6rem;
          font-size: 1.3rem;
          text-align: center;
          color: #666;
          border-top: 1px solid #e2eaea;
        }
      }
    }

    &.closed {
      background-color: #f5f5f5;
      border-color: #ddd;

      em {
        color: #999;
      }

      p {
        color: #aaa;
      }
    }
  }

  .bul_list.dash {
    margin-top: 1.6rem;
    li {
      color: #888;
      line-height: 1.6rem;
    }
  }

  section {
    padding: 3rem 2.1rem;

    h3 {
      margin-bottom: 2rem;
    }

    .multi_form {
      display: flex;
      gap: 0.5rem;

      & + .multi_form {
        margin-top: 1rem;
      }

      :deep(label.select) {
        flex: 1;
      }

      :deep(.btn_outline) {
        width: 9rem;
      }
    }
  }
}

.dot_menu {
  border: 1px solid #999;

  li {
    width: 8rem;

    & + li {
      border-top: 1px solid #999;
    }

    button {
      padding: 1.2rem 0;
      width: 100%;
      font-size: 1.2rem;
      text-align: center;
      line-height: 1.6rem;
      display: block;
    }
  }
}

.shop_list {
  .list_header {
    padding: 0 2.1rem 1.5rem;
    font-weight: 600;
    border-bottom: 1px solid #f5f5f5;

    em {
      color: #00bc70;
    }
  }

  ul {
    li {
      & + li {
        border-top: 2px solid #f5f5f5;
      }
    }
  }
}

.modal_pick_my_shop {
  section {
    & + section {
      border-top: 0.5rem solid #f5f5f5;
    }
  }

  .title {
    padding: 2rem 2.1rem 1.5rem;
    em {
      font-size: 1.3rem;
      font-weight: 600;
      color: #00bc70;
    }

    .multi_form {
      margin-top: 2rem;

      & + .multi_form {
        margin-top: 1.5rem;
      }

      & > label.select {
        flex: 1;
      }
    }

    & + * {
      border-top: 1px solid #f5f5f5;

      & + * {
        border-top: 1px solid #f5f5f5;
      }
    }
  }

  .noti {
    padding: 3rem 2.1rem;

    p {
      margin-bottom: 2rem;
      font-size: 1.2rem;
      color: #999;
      text-align: center;
    }

    button {
      margin: 0 auto;
    }
  }

  .list_header {
    padding: 1.5rem 2.1rem;
    font-size: 1.2rem;
    font-weight: 600;
    border-top: 0;

    em {
      color: #00bc70;
    }
  }

  .pick_shop_list {
    li {
      display: flex;
      gap: 1rem;
      align-content: flex-start;
      position: relative;

      & + li {
        border-top: 1px solid #f5f5f5;
      }

      :deep(.shop_wrap) {
        .shop {
          padding-left: 5.1rem;
        }
      }

      input[type='radio'] {
        position: absolute;
        width: 0;
        height: 0;
        margin: 2rem 2rem 0 0;

        &:before {
          content: '';
          width: 2rem;
          height: 2rem;
          background-color: #ddd;
          border-radius: 50%;
          box-sizing: border-box;
          position: absolute;
          top: 1.35rem;
          left: 2.1rem;
        }

        &:after {
          content: '';
          width: 1rem;
          height: 1rem;
          background-color: #fff;
          border-radius: 50%;
          box-sizing: border-box;
          position: absolute;
          top: 1.9rem;
          left: 2.6rem;
        }

        &:checked:before {
          content: '';
          background-color: #00bc70;
        }

        &:checked + label {
          background-color: #f7fafa;
        }
      }
    }
  }

  .btn_wrap {
    display: fixed;
    bottom: 0;
    left: 0;

    button {
      width: 100%;
    }
  }
}

/* alert 모달 스타일 */
.modal_wrap.alert {
  .modal_content {
    padding: 30px 40px 30px 20px;

    .tit {
      font-size: 1.8rem;
      font-weight: 600;
      color: #000;
      line-height: 2.4rem;
    }

    .txt {
      margin-top: 1rem;
      font-size: 1.3rem;
      font-weight: 400;
      color: #666;
      line-height: 2rem;
    }

    .agree_box {
      margin-top: 2.5rem;
      padding: 1.5rem;
      background-color: #f5f5f5;

      .btn_link_arrw {
        display: block;
        margin: 0.5rem 0 0 3rem;
        color: #aaa;
        &:after {
          border-color: #999;
          width: 0.6rem;
          height: 0.6rem;
          transform: rotate(135deg) translateY(2px);
        }
      }
    }
  }
}
</style>
