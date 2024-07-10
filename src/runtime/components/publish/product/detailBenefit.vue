<template>
  <dl class="benefit_list gift">
    <dt>증정혜택</dt>
    <dd>
      <ul>
        <li>
          <span class="thumb">
            <img src="https://images.innisfree.co.kr/upload/freegift/7014_1.png?T202404120947" alt="">
          </span>
          <span class="desc">
            <span>4월 멤버십세일 쓰리데이즈박스</span>
            <span class="date">24.4.11 ~ 24.4.13</span>
            <span>1개 구매시 1개 증정</span>
          </span>
        </li>
        <li>
          <span class="thumb">
            <img src="https://images.innisfree.co.kr/upload/freegift/7014_1.png?T202404120947" alt="">
          </span>
          <span class="desc">
            <span>4월 멤버십세일 쓰리데이즈박스</span>
            <span class="date">24.4.11 ~ 24.4.13</span>
            <span>1개 구매시 1개 증정</span>
          </span>
        </li>
      </ul>
      <p class="text_notify">증정품 한정수량 소진 시 조기 품절될 수 있습니다.</p>
    </dd>
  </dl>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.benefit_list.gift {
  padding: 30px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px 0;

  dd {
    flex: 1;

    ul {
      li {
        display: flex;
        flex-wrap: wrap;
        padding: 15px 0;

        & + li {
          border-top: 1px solid #F5F5F5;
        }

        .thumb {
          width: 60px;
          margin-right: 20px;
          flex: none;

          img {
            vertical-align: top;
          }
        }

        .desc {
          display: flex;
          flex-direction: column;
          justify-content: center;

          .date {
            margin: 5px 0 13px;
            font-weight: 300;
            font-size: 12px;
            line-height: 1.33em;
            letter-spacing: -0.01em;
            color: #666;
          }
        }
      }
    }
  }
}
</style>
