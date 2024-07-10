<template>
  <!-- title washed -->
  <div class="title_wrap" :data-layout="props.layoutType">
    <div>
      <h2>쇼케이스</h2>
    </div>
  </div>

  <div class="sub_title_wrap">
    <h3>
      봄맞이 핑크템으로 생기를 더하세요!
      <!-- 공유 레이어 -->
      <div class="share_wrap">
        <Button class="btn_outline btn_share" txt="공유하기" @click="[modal.open('modal_share', 'toast'), toast_pop(3000)]" />
      </div>
      <!-- //공유 레이어 -->
    </h3>
  </div>
  <!-- //title washed -->

  <div class="inner">
    <div class="prd_wrap">
      <div><img src="/images/sam/pinkdoc1.jpg" /></div>
      <div>
        <img src="/images/sam/pinkdoc2.jpg" />
        <div class="video"><img src="/images/sam/colored.gif" /></div>
        <div class="overlay"><img src="/images/sam/lipstick.png" /></div>
      </div>
    </div>

    <ProductDetailSwiperProgressBar />

    <div class="banner_wrap">
      <ul>
        <li v-for="(item, idx) in banner_list" :key="idx">
          <a href="#none">
            <div class="img">
              <img :src="item.img" />
            </div>
            <span>{{ item.title }}</span>
          </a>
        </li>
      </ul>
    </div>
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

  <!-- 공유 모달 -->
  <div id="modal_share" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">URL이 복사되었습니다.</div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- 공유 모달 -->

  <!-- 콘텐츠 우선순위에 맞는 배치 변경 -->
  <div class="floating_wrap">
    <div class="box off">
      <span>실시간 이니스프리<br />이야기</span>
    </div>
    <div class="box on">
      <h3>대학생 에디터들의 뷰티팁을<br />에디터에서 만나보세요.</h3>
      <div class="qr"><img src="/images/sam/sample_qrcode.gif" /></div>
      <p>휴대폰으로 QR코드를 스캔하여<br />모바일로 이동해주세요.</p>
    </div>
    <button type="button" class="btn_close" @click="qr_menu">닫기</button>
  </div>
  <!-- //콘텐츠 우선순위에 맞는 배치 변경 -->
</template>
<script setup>
import { banner_list } from '@inmModule/test/data/publish/dummyData'
import { modal, toast_pop } from '@inmModule/assets/js/common-ui'
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-pc-category'
})

onMounted(() => {
  setTimeout(() => {
    document.querySelector('.floating_wrap').classList.add('close')
  }, 3000)
})

const props = defineProps({
  layoutType: {
    type: String,
    default: 'default'
  }
})

const qr_menu = (e) => {
  e.target.closest('.floating_wrap').classList.toggle('close')
}
</script>
<style lang="scss" scoped>
.floating_wrap {
  .box {
    &.off {
      line-height: 1.43;
      opacity: 0;
      top: 20px;
    }
    &.on {
      h3 {
        color: #000;
        font-size: 14px;
      }
      .qr {
        margin: 15px auto;
      }
      p {
        color: #999;
        font-size: 12px;
      }
    }
  }
  .btn_close {
    background: url('@inmModule/assets/images/common/icon_split.png') no-repeat -210px -170px;
    background-size: 250px auto;
    left: 10px;
    bottom: 10px;
  }
  &.close {
    width: 160px;
    height: 104px;
    .off {
      opacity: 1;
    }
    .on {
      > * {
        opacity: 0;
      }
    }
  }
}

.prd_wrap {
  border-top: 1px solid #eeeeee;
  padding-top: 60px;
  > div {
    max-width: 780px;
    margin: 0 auto;
    position: relative;
    img {
      vertical-align: top;
    }
    .video {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
    }
  }
}

.swiper_progressbar_wrap {
  width: 1280px;
  padding: 100px 0;
  margin: 0 auto;
  position: relative;
}

.banner_wrap {
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    li {
      width: calc(50% - 10px);
      > a {
        position: relative;
        .img {
          position: relative;
          img {
            vertical-align: top;
          }
          &:after {
            content: '';
            width: 100%;
            height: 100%;
            background: #000;
            opacity: 0.25;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
        span {
          color: #fff;
          font-size: 18px;
          font-weight: 600;
          line-height: 24px;
          white-space: normal;
          overflow: hidden;
          text-overflow: ellipsis;
          word-wrap: break-word;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          word-break: break-all;
          white-space: pre-line;
          position: absolute;
          top: 50%;
          left: 30px;
          right: 30px;
          transform: translateY(-50%);
        }
      }
    }
  }
}
</style>
