<template>
  <div class="title_wrap" :data-layout="props.layoutType">
    <h2>고객센터</h2>
  </div>

  <div class="inner">
    <Tabs
      tabType="type_03"
      :item="[{ txt: 'FAQ' }, { txt: '공지사항' }, { txt: '1:1 상담' }, { txt: '매장안내' }, { txt: '창업안내' }, { txt: '전자공고' }]"
      :tabidx="3" />

    <Tabs tabType="type_04" :item="[{ txt: '자주 구매한 매장' }, { txt: '지역별 매장안내' }]" :tabidx="0" @click="tabContShow" />

    <div class="tab_contents">
      <!-- 탭 컨텐츠 -->

      <div class="tab_cont" style="display: block">
        <!-- 자주 구매한 매장 -->
        <div class="my_shop_wrap">
          <div class="info">
            <div class="title">
              <h3>MY SHOP이란?</h3>
              <p>내가 선택하는 ‘나의 단골매장’으로<br />내 단골 매장 서비스 소식을 받아보실 수 있습니다.</p>
              <p class="sub_txt">자주가는 매장을 확인하시고 특별한 혜택을 받아가세요!</p>
            </div>
          </div>

          <div class="my_shop">
            <p>MY SHOP으로 등록된 매장이 없습니다.<br />자주가는 매장을 찾아 MY SHOP으로 등록해보세요!</p>
            <!-- 등록된 매장이 없을 경우 -->
            <dl>
              <dt>IF 은평 신사점</dt>
              <dd>
                <span>[03423] 서울특별시 은평구 갈현로 14, 1층 (신사동)</span>
                <Button class="btn_outline btn_min" txt="삭제" />
              </dd>
            </dl>
          </div>
        </div>

        <div class="table">
          <table>
            <caption>
              자주가는 매장
            </caption>
            <colgroup>
              <col style="width: 15%" />
              <col />
              <col style="width: 15%" />
              <col style="width: 15%" />
              <col style="width: 15%" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">매장명</th>
                <th scope="col">주소</th>
                <th scope="col">최근 구매 횟수</th>
                <th scope="col">위치</th>
                <th scope="col">마이매장</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="5">자주가는 매장이 없습니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul class="bul_list ref">
          <li>최근 구매 횟수는 최근 1년간 구매한 횟수 입니다.</li>
          <li>MY SHOP 등록은 오프라인 매장만 가능합니다.</li>
        </ul>
      </div>

      <div class="tab_cont">
        <!-- 지역별 매장 -->
        <div class="search">
          <div class="box">
            <h4>지역별 검색</h4>
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
              <Button class="btn_outline" txt="검색" />
            </div>
          </div>
          <div class="box">
            <h4>주소 / 매장명 검색</h4>
            <div class="multi_form">
              <Inputs _type="text" _placeholder="검색어를 입력해주세요." />
              <Button class="btn_outline" txt="검색" />
            </div>
          </div>
        </div>
        <div class="table">
          <table>
            <caption>
              지역별 매장
            </caption>
            <colgroup>
              <col style="width: 16%" />
              <col />
              <col style="width: 17%" />
              <col style="width: 17%" />
              <col style="width: 16%" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">매장명</th>
                <th scope="col">주소</th>
                <th scope="col">전화번호</th>
                <th scope="col">위치</th>
                <th scope="col">마이매장</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, idx) in shop_list" :key="idx">
                <td>{{ item.branch }}</td>
                <td class="ta_l">{{ item.add }}</td>
                <td>{{ item.phone }}</td>
                <td><button type="button" class="btn_link_arrw" @click="modal.open('modal_map', 'full modal_map')">지도보기</button></td>
                <td><Inputs _type="radio" _text="선택" _name="map" /></td>
              </tr>
            </tbody>
          </table>

          <div class="btn_wrap">
            <Button txt="등록하기" class="btn_" />
          </div>

          <div class="paging">
            <div>
              <a href="#none" class="first">처음으로</a>
              <a href="#none">1</a>
              <a href="#none">2</a>
              <a href="#none" class="active">3</a>
              <a href="#none">4</a>
              <a href="#none">5</a>
              <a href="#none" class="last">마지막으로</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 지도보기 -->
  <div id="modal_map" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>이마트_IF화정점</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div class="map">
          <p style="text-align: center">지도영역</p>
          <div class="map_pointer" style="left: 120px; top: 100px">
            <div class="shop">
              <div class="name">이마트_IF화정점</div>
              <div class="addr">경기도 고양시 덕양구 백양로 79화정점 이니스프리 (화정동,이마트)</div>
              <div class="phone">031-970-7139</div>
              <button type="button">로드뷰</button>
            </div>
            <span class="pointer">위치</span>
          </div>
        </div>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //지도보기 -->
</template>
<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
import { shop_list } from '@inmModule/test/data/publish/dummyData'
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'publish-pc-category'
})
const props = defineProps({
  layoutType: {
    type: String,
    default: 'default'
  }
})

const tabContShow = (e) => {
  const el = e.target
  const clickedLi = el.closest('li')
  const tabIdx = [...el.closest('li').parentElement.children].indexOf(clickedLi)
  const tabConts = [...el.closest('ul').parentElement.nextElementSibling.children]
  for (const i in tabConts) {
    tabConts[i].style.display = 'none'
  }
  tabConts[tabIdx].style.display = 'block'
}
</script>
<style lang="scss" scoped>
.title_wrap {
  padding: 0 20px;
  margin: 60px auto 30px;
}
.inner {
  .tab_wrap + .tab_wrap {
    margin: 60px 0 50px;
  }
  .tab_cont {
    display: none;
  }

  .my_shop_wrap {
    .info {
      margin: 75px 0 0;
      text-align: center;

      .title {
        h3 {
          font-weight: 500;
          font-size: 26px;
          line-height: 40px;
          vertical-align: middle;
          display: inline-block;

          &:before {
            content: '';
            width: 40px;
            height: 40px;
            margin-right: 12px;
            background: url('@inmModule/assets/images/common/icon_split.png') -460px -500px no-repeat;
            display: inline-block;
            vertical-align: middle;
          }
        }

        p {
          margin: 20px 0 0;
          font-size: 16px;
          font-weight: 600;
          color: #666;

          &.sub_txt {
            margin: 20px 0 0;
            font-size: 14px;
            line-height: 1.57;
            color: #999;
          }
        }
      }
    }

    .my_shop {
      margin: 30px 0 80px;
      padding: 38px 39px;
      font-size: 14px;
      line-height: 1.57;
      color: #333;
      background: #fcfcfd;
      border: 1px solid #eeee;

      p {
        text-align: center;
      }

      dl {
        display: flex;
        gap: 20px;

        dt {
          font-weight: 600;
          color: #333;
        }

        dd {
          flex: 1;
          display: flex;

          span {
            flex: 1;
          }

          :deep(button) {
            background-color: #fff !important;
            border-radius: 1px;

            em {
              font-size: 12px;
            }
          }
        }
      }
    }
  }

  .search {
    margin-bottom: 40px;
    display: flex;
    gap: 40px;
    justify-content: space-between;

    .box {
      flex: 1;
      h4 {
        margin-bottom: 20px;
        font-weight: 600;
        font-size: 22px;
        line-height: 1.55;
      }

      .multi_form {
        display: flex;

        :deep(label.select) {
          flex: 1;
        }
        .btn_outline {
          border-radius: 1px;
        }
      }
    }
  }
}
.table {
  border-top: 2px solid #000;
  position: relative;
  table {
    width: 100%;
    border-collapse: collapse;
    border: 0;
    table-layout: fixed;
    caption {
      position: absolute;
      z-index: -1;
      font-size: 0;
    }
    th {
      padding: 15px 20px;
      border-bottom: 1px solid #eee;
      border-left: 1px solid #eee;
      color: #000;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.5;
      text-align: center;
      background: #f5f5f5;
    }
    td {
      padding: 21px 20px;
      color: #333;
      font-size: 16px;
      line-height: 1.5;
      text-align: center;
      border-left: 1px solid #eee;
      border-bottom: 1px solid #eee;
      span {
        color: #777;
        font-size: 14px;
      }
      sup {
        font-size: 10px;
        line-height: 12px;
      }
    }
    th:first-child,
    td:first-child {
      border-left: 0;
    }
    .btn_link_arrw {
      text-decoration: underline;
    }
  }

  & + .bul_list.ref {
    margin-top: 30px;

    li {
      color: #666;
    }
  }

  .btn_wrap {
    margin-top: 30px;
    display: flex;
    justify-content: flex-end;
  }
}
.ta_l {
  text-align: left !important;
}
.modal_map {
  .modal_container {
    width: 960px;

    .map {
      height: 587px;
      background-color: #eee;
      position: relative;

      .map_pointer {
        width: 320px;
        position: absolute;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        gap: 2.5rem;

        & > * {
          display: inline-block;
        }

        .shop {
          padding: 28px 30px;
          border: 1px solid #222;
          background: #fff;
          position: relative;

          .name {
            font-size: 16px;
          }

          .addr {
            margin-top: 12px;
            font-size: 14px;
          }

          .phone {
            margin-top: 25px;
            font-size: 18px;
          }

          &:before {
            content: '';
            width: 28px;
            height: 23px;
            background: url('@inmModule/assets/images/common/icon_split.png') -430px -560px no-repeat;
            position: absolute;
            left: 50%;
            bottom: -22px;
            display: block;
          }

          button {
            padding: 0 16px;
            line-height: 24px;
            color: #fff;
            border-radius: 12px;
            background-color: #000;
            position: absolute;
            top: 8px;
            right: 8px;
          }
        }

        .pointer {
          font-size: 0;
          width: 28px;
          height: 37px;
          background: url('@inmModule/assets/images/common/icon_split.png') -470px -550px no-repeat;
        }
      }
    }
  }
}
</style>
