<template>
  <div class="prod_detail_review">
    <!-- 평점/리뷰 요약 -->
    <div class="summary">
      <div class="total_point">
        <div class="rate">
          <Reviewpoint width="90" rate="4.7" class="type_big" />
        </div>
        <div class="emoji_txt"><p class="emoji01">최고! 평생쓸래요</p></div>
      </div>

      <div class="review">
        <p class="txt">
          “그린티 씨드 세럼은 꾸준하게 쓸 수 있는 수분 세럼입니다. 히알루론산으로 리뉴얼 된 이후 더 촉촉한 수분감을 느낄 수 있고 펌핑 용기가
          사용하기에 매우 편합니다. 산뜻한 마무리감과 수분력으로 추천하는 제품입니다.”
        </p>
        <p class="i_noti">Chat GPT로 최근 리뷰들을 요약했어요. 기술 수준으로 요약이 정확하지 않거나 표현이 어색할 수 있습니다.</p>

        <!-- 리뷰 요약이 없을 시 안내문구 노출 -->
        <p class="i_noti">
          Chat GPT 리뷰 서비스가 제공되는 부분입니다. 해당 서비스는 최근 6개월간의 리뷰를 대상으로 제공됩니다. <br />최근 등록된 제품일 경우
          충분한 리뷰가 없어 서비스 제공이 어려울 수 있습니다.
        </p>
      </div>
    </div>
    <!-- //평점/리뷰 요약 -->

    <!-- 포토 리뷰 요약 -->
    <div v-if="usePhotoList" class="list_photo_wrap">
      <ul>
        <li v-for="(item, idx) in samplePost.slice(0, limit)" :key="idx" :class="idx == limit - 1 ? 'last' : ''">
          <!-- 마지막 포토에 last 클래스 추가 -->
          <ProductReviewPhotoList :item="item" :idx="idx" :isAll="false" :limit="limit - 1" />
        </li>
      </ul>
    </div>
    <!-- //포토 리뷰 요약 -->
  </div>
</template>
<script setup>
import { samplePost } from '@inmModule/test/data/publish/dummyData'
const props = defineProps({
  isMo: {
    //모바일 여부
    type: Boolean,
    default: false
  },
  limit: String, //리뷰 갯수
  usePhotoList: {
    //리뷰 포토 사용 여부
    type: Boolean,
    default: true
  }
})
</script>
<style lang="scss" scoped>
.prod_detail_review {
  .summary {
    padding: 34px 40px;
    border: 1px solid #eee;
    display: flex;

    .total_point {
      min-height: 70px;
      margin-right: 40px;
      padding-right: 40px;
      border-right: 1px solid #eee;
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      align-items: flex-start;
      justify-content: space-evenly;

      .emoji_txt {
        height: 28px;

        p {
          font-size: 20px;
          line-height: 1.4em;
          display: flex;
          align-items: center;
        }

        > *:before {
          content: '';
          width: 24px;
          height: 24px;
          margin-right: 10px;
          background-image: url('@inmModule/assets/images/common/icon_emoji.png');
          display: inline-block;
        }
      }
    }

    :deep(.review_point) {
      p {
        width: 120px;
        height: 24px;
        background: url('@inmModule/assets/images/common/bg_reviewPoint.png') 0 0 / 120px auto no-repeat;

        span {
          background: url('@inmModule/assets/images/common/bg_reviewPoint.png') 0 -24px / 120px auto no-repeat;
        }
      }
    }

    .review {
      .txt {
        font-size: 16px;
        font-weight: 600;
        line-height: 26px;
        color: #333;
        word-break: keep-all;
      }
    }
  }

  .list_photo_wrap {
    margin: 30px 0;

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      li {
        width: 120px;
        height: 120px;
      }
    }
  }
}
</style>
