<template>
  <div class="action_bar">
    <div class="fix_btn">
      <Button class="btn_icon btn_icon_back" txt="뒤로가기" />
      <!-- <div class="pdtSortTab_wrap">
        <div class="sortTab">
          <button
            class="btn_dropdown"
            @click="modal.open('modal_sort', 'bottom')">
            추천순
          </button>
        </div>
        <button @click="modal.open('modal_search', 'bottom')">
          상세검색
        </button>
      </div> -->
      <div class="right_box">
        <Button
          v-if="pageType === 'IN_MO_MYP_01_02'"
          class="btn_icon btn_icon_barcode"
          txt="멤버십 바코드"
          @click="modal.open('modal_beauty_barcode', 'bottom beauty_barcode')" />
        <Button class="btn_icon btn_icon_history" txt="히스토리" @click="$router.push('/publish/IN_MO_HOM_01_18')" />
        <Button class="btn_icon top_btn" txt="상단 이동" @click="scroll_top()" />
      </div>
    </div>
    <div class="inner">
      <a :href="path + 'IN_MO_HOM_01_01'"><img src="@inmModule/assets/images/actionbar/Logo_Motion.png" alt="" /></a>
      <div>
        <a :href="path + 'IN_MO_HOM_01_19'">
          <img src="@inmModule/assets/images/actionbar/Category.png" alt="" />
        </a>
        <a :href="path + 'IN_MO_HOM_01_05'">
          <img src="@inmModule/assets/images/actionbar/Best.png" alt="" />
        </a>
      </div>
      <div>
        <a :href="path + 'IN_MO_MYP_01_01'">
          <img src="@inmModule/assets/images/actionbar/MyPage.png" alt="" />
        </a>
        <a :href="path + 'IN_MO_HOM_01_18'">
          <img src="@inmModule/assets/images/actionbar/History.png" alt="" />
        </a>
      </div>
    </div>
  </div>
  <div id="modal_sort" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <button class="btn_close" @click="modal.close(this)"></button>
      </div>
      <div class="modal_content">
        <div>
          <ul>
            <li class="active"><a href="#none" class="active">추천순</a></li>
            <li><a href="#none">신제품순</a></li>
            <li><a href="#none">판매량순</a></li>
            <li><a href="#none">낮은 가격순</a></li>
            <li><a href="#none">높은 가격순</a></li>
            <li><a href="#none">리뷰순</a></li>
            <li><a href="#none">판매금액순</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <div id="modal_search" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>상세검색</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <dl class="sortList">
          <dt>혜택별</dt>
          <dd>
            <ul>
              <li>
                <label for="benefit1" class="inputChk">
                  <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정" /><span @click="setFilter($event)"
                    >증정</span
                  >
                </label>
              </li>
            </ul>
          </dd>
        </dl>
        <dl class="sortList">
          <dt>고민별</dt>
          <dd>
            <ul>
              <li>
                <label for="benefit1" class="inputChk">
                  <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정" /><span @click="setFilter($event)"
                    >트러블/리페어</span
                  >
                </label>
              </li>
              <li>
                <label for="benefit1" class="inputChk">
                  <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정" /><span @click="setFilter($event)"
                    >영양/토탈안티에이징</span
                  >
                </label>
              </li>
              <li>
                <label for="benefit1" class="inputChk">
                  <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정" /><span @click="setFilter($event)"
                    >잡티/피부톤</span
                  >
                </label>
              </li>
              <li>
                <label for="benefit1" class="inputChk">
                  <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정" /><span @click="setFilter($event)"
                    >주름/탄력</span
                  >
                </label>
              </li>
              <li>
                <label for="benefit1" class="inputChk">
                  <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정" /><span @click="setFilter($event)"
                    >수분/보습/속건조</span
                  >
                </label>
              </li>
              <li>
                <label for="benefit1" class="inputChk">
                  <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정" /><span @click="setFilter($event)"
                    >각질/피부결</span
                  >
                </label>
              </li>
            </ul>
          </dd>
        </dl>
        <dl class="sortList">
          <dt>기능성</dt>
          <dd>
            <ul>
              <li>
                <label for="benefit1" class="inputChk">
                  <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정" /><span @click="setFilter($event)"
                    >미백</span
                  >
                </label>
              </li>
              <li>
                <label for="benefit1" class="inputChk">
                  <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정" /><span @click="setFilter($event)"
                    >주름개선</span
                  >
                </label>
              </li>
              <li>
                <label for="benefit1" class="inputChk">
                  <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정" /><span @click="setFilter($event)"
                    >비건인증</span
                  >
                </label>
              </li>
            </ul>
          </dd>
        </dl>
        <dl class="sortList">
          <dt>공병수거</dt>
          <dd>
            <ul>
              <li>
                <label for="benefit1" class="inputChk">
                  <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정" /><span @click="setFilter($event)"
                    >공병수거 가능</span
                  >
                </label>
              </li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="modal_footer">
        <Button class="btn_big btn_reset" txt="초기화" />
        <Button class="btn_big btn_type_02" txt="검색" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <div id="modal_beauty_barcode" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>뷰티포인트 바코드</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div class="barcode">
          <img src="/public/images/sam/mypage_barcode.png" />
        </div>
        <ul class="num">
          <li>5279</li>
          <li>3300</li>
          <li>1758</li>
          <li>3890</li>
        </ul>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
</template>

<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
import { onMounted } from '#imports'

defineProps({
  pageType: {
    type: String,
    default: ''
  }
})

const path = '/publish/publish/'

onMounted(() => {
  let preScrollTop = 0
  window.addEventListener('scroll', () => {
    const nextScrollTop = window.scrollY
    const actionbar = document.querySelector('.action_bar')
    // const fix_btn = document.querySelector('.fix_btn')
    const right_box = document.querySelector('.right_box')

    if (preScrollTop < nextScrollTop) {
      if (nextScrollTop >= 350) {
        actionbar.style.transform = 'translateY(100%)'
        actionbar.querySelector('.inner > a').style.cssText = 'transform: translate(-50%, 32%); transition: all 0.1s linear;'
      }

      right_box.classList.add('active')
    } else if (nextScrollTop < 20) {
      right_box.classList.remove('active')
      // fix_btn.classList.remove('active')
    } else {
      actionbar.removeAttribute('style')
      // fix_btn.removeAttribute('style')
      actionbar.querySelector('.inner > a').removeAttribute('style')
    }
    preScrollTop = nextScrollTop
  })
})
const scroll_top = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

/* category layer */
const cate_layer = {
  open: () => {
    document.querySelector('.navCategory').classList.add('active')
  },
  close: () => {
    document.querySelector('.navCategory').classList.remove('active')
  }
}
</script>

<style lang="scss" scoped>
.action_bar {
  padding: 1rem 2.5rem;
  background: #000;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 11;
  transition: transform 0.1s linear;

  .inner {
    display: flex;
    justify-content: space-between;
    gap: 11.5rem;

    > a {
      width: 6.1rem;
      height: 6.1rem;
      position: absolute;
      left: 50%;
      bottom: 1rem;
      display: block;
      transform: translateX(-50%);

      img {
        width: 100%;
      }
    }

    > div {
      display: flex;
      gap: 4.1rem;

      a {
        width: 3.2rem;
        height: 3.2rem;

        img {
          width: 100%;
        }
      }
    }
  }
}

.fix_btn {
  margin-bottom: 2.1rem;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 52px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  .btn_icon {
    width: 4rem;
    height: 4rem;
    background-color: rgba(255, 255, 255, 0.95);
    border-radius: 5px;
    box-shadow: 0.2rem 0.2rem 0.5rem 0 rgba(0, 0, 0, 0.05);

    :deep(em) {
      width: 2.4rem;
      height: 2.4rem;
      padding: 0;
      background: url('@inmModule/assets/mo_images/common/icon_split.png') no-repeat;
      background-size: 25rem auto;
      font-size: 0;
    }
  }

  .btn_icon_back {
    position: absolute;
    bottom: 0;
    left: 2.1rem;

    :deep(em) {
      background-position: -3rem -4rem;
    }
  }

  .pdtSortTab_wrap {
    width: 20rem;
    height: 3.8rem;
    padding: 1rem 1.5rem;
    border: 0.1rem solid #000;
    border-radius: 20px;
    background: #fff;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    right: 50%;
    display: flex;
    justify-content: center;
    visibility: hidden;
    transform: translateX(50%);
    transition: all 0.2s;
    opacity: 0;
    &.active {
      visibility: visible;
      opacity: 1;
    }
    button {
      font-size: 1.2rem;
      font-weight: 600;
      border-radius: 0;
    }
    .sortTab {
      position: relative;
      > button {
        display: flex;
        justify-content: center;
        &::after {
          content: '';
          width: 17px;
          height: 17px;
          margin-left: 5px;
          background-image: url('@inmModule/assets/images/common/icon_split.png');
          background-size: 250px;
          background-repeat: no-repeat;
          background-position: -110px -60px;
          display: inline-block;
        }
      }

      & ~ button {
        position: relative;
        display: flex;
        justify-content: center;
        &::before {
          left: 1px !important;
        }
        &::after {
          content: '';
          width: 17px;
          height: 17px;
          margin-left: 5px;
          background-image: url('@inmModule/assets/images/common/icon_split.png');
          background-size: 250px;
          background-repeat: no-repeat;
          background-position: -130px -60px;
          display: inline-block;
        }
      }
    }
  }

  .right_box {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transform: translateY(5rem);
    transition: transform 0.2s linear;
    position: absolute;
    bottom: 0;
    right: 2.1rem;
    z-index: -1;

    &.active {
      transform: translateY(0);

      .top_btn {
        transform: translate(0, 0);
      }
    }

    .btn_icon_history {
      :deep(em) {
        background-position: -6.5rem -4rem;
      }
    }

    .top_btn {
      transform: translate(6.1rem, -5rem);
      transition: all 0.2s linear;

      :deep(em) {
        background-position: -10.5rem -4rem;
      }
    }

    .btn_icon_barcode {
      width: auto;
      height: auto;
      padding: 0.8rem;
      margin-right: -2.1rem;
      border-radius: 0.5rem 0 0 0.5rem;
      background-color: #00bc70;

      :deep(em) {
        width: 4.3rem;
        height: 2.4rem;
        background-position: -16.5rem -18rem;
      }
    }
  }
}

.modal_wrap.beauty_barcode {
  .modal_container {
    .modal_header {
      width: auto;
      height: auto;
      padding: 2.3rem 0;
      margin: 0 2.1rem;
      border-bottom: 0.1rem solid #eee;

      .btn_close {
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 0;
        background: transparent;
        transform: translateX(0);
        top: 2rem;
        right: 0;
        left: unset;

        &:before,
        &:after {
          width: 100%;
          border-top: 1px solid #222;
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          display: block;
        }

        &:before {
          transform: rotate(45deg);
        }

        &:after {
          transform: rotate(-45deg);
        }
      }
    }
    .modal_content {
      padding: 3rem 4.6rem;

      .barcode {
        width: 28.3rem;
        margin-bottom: 2rem;

        img {
          width: 100%;
          height: auto;
          vertical-align: top;
        }
      }

      .num {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;

        li {
          color: #000;
          font-size: 1.6rem;
          font-weight: 600;
          line-height: 2rem;
        }
      }
    }
  }
}
</style>
