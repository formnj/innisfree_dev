<template>
  <div class="inner">
    <section>
      <Inputs _type="checkbox" _text="전체선택" />
      <Button class="btn_min_outline" txt="선택 삭제" @click="modal.open('delete_modal', 'alert')" />
    </section>
    <ul>
      <li v-for="(goods, idx) in select_list" :key="idx">
        <div>
          <Inputs _type="checkbox" _text="" />
          <a href="#none" @click="modal.open('delete_modal', 'alert')">취소</a>
        </div>
        <section>
          <a href="#none">
            <img :src="goods.img" alt="" />
            <dl>
              <dt>{{ goods.name }}</dt>
              <dd>
                <span>{{ goods.price.discount }}</span>
                <del>{{ goods.price.regular }}</del>
              </dd>
            </dl>
          </a>
          <p>
            <button class="cart"></button>
            <button class="order"></button>
          </p>
        </section>
      </li>
    </ul>

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

  <!--modal-->
  <div class="modal_wrap" id="delete_modal">
    <div class="modal_container">
      <div class="modal_header">
        <h2>알림</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div>삭제하시겠습니까?</div>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" />
        <Button class="btn_big" txt="취소" @click="modal.close(this)" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
</template>

<script setup>
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-mo-name-search-cart'
})
import { modal } from '@inmModule/assets/js/common-ui'
import { select_list } from '@inmModule/test/data/publish/dummyData'

const props = defineProps({
  //default값이 'default'가 아니면 lnb 노출 없음
  link: {
    type: String,
    default: '#none'
  }
})

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', '찜한 제품')
})
</script>

<style lang="scss" scoped>
.inner {
  padding: 0 2.1rem;
  > section {
    margin-left: -2.1rem;
    margin-right: -2.1rem;
    padding: 1rem 2.1rem;
    border-bottom: 0.1rem solid #eeeeee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    :deep(label.check) {
      display: flex;
      align-items: center;
      em {
        font-size: 1.4rem;
      }
    }
    :deep(button.btn_min_outline) {
      height: 2.8rem;
      em {
        padding: 0 0.8rem;
        font-size: 1rem;
        font-weight: 600;
      }
    }
  }
  ul {
    li {
      width: 100%;
      height: auto;
      padding: 3rem 0;
      border-bottom: 0.1rem solid #f5f5f5;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      > div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        > a {
          width: 2.4rem;
          height: 2.4rem;
          background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
          background-repeat: no-repeat;
          background-size: 25rem;
          background-position: -8rem -17.5rem;
          display: inline-block;
          text-indent: -999px;
        }
      }
      section {
        width: 100%;
        margin-top: 0.5rem;
        display: flex;
        justify-content: space-between;
        > a {
          display: flex;
          img {
            width: 9rem;
            height: 12rem;
          }
          dl {
            width: 18.9rem;
            height: 10.4rem;
            margin-left: 2rem;
            flex: 1 auto;
            dt {
              font-size: 1.4rem;
              font-weight: 300;
            }
            dd {
              margin-top: 1.5rem;
              span {
                margin-right: 1rem;
                font-size: 1.4rem;
                font-weight: 700;
              }
              del {
                color: #999;
                font-size: 1rem;
                font-weight: 300;
                display: inline-block;
              }
            }
          }
        }
        > p {
          display: flex;
          flex-direction: column;
          gap: 10px;
          button {
            width: 2.4rem;
            height: 2.4rem;
            background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
            background-repeat: no-repeat;
            background-size: 25rem;
            display: inline-block;
            &.cart {
              background-position: -16.9rem -3.8rem;
            }
            &.order {
              background-position: -19.9rem -3.8rem;
            }
          }
        }
      }
    }
  }
  .paging {
    div {
      a {
        font-size: 1.6rem;
      }
    }
  }
}

.modal_wrap {
  &#delete_modal {
    .modal_container {
      .modal_header {
        padding: 2rem;
        h2 {
          font-size: 1.8rem;
        }
      }
      .modal_content {
        padding: 3rem;
      }
    }
  }
}
</style>
