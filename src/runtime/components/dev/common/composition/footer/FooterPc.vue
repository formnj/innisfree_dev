<template>
  <footer>
    <div class="inner">
      <a href="#none"><img src="@inmModule/assets/images/footer/Wordmark.png" alt="" /></a>
      <div class="cont_footer">
        <ul>
          <li>
            <span>서울특별시 용산구 한강대로 100(한강로2가) 7층 이니스프리</span>
            <span>대표이사 최민정</span>
          </li>
          <li>
            <span>사업자 등록번호 106-86-68127</span>
            <span>통신판매신고번호 2018-서울용산-0014</span>
            <span>제품 문의 080-380-0114</span>
            <span>FAX 02-6040-7108</span>
          </li>
          <li>
            <span>이메일 주소 <a href="mailto:innisfree@innisfree.com">innisfree@innisfree.com</a></span>
            <span>비즈니스제휴/입점문의 <a href="mailto:partner.biz@innisfree.com">partner.biz@innisfree.com</a></span>
          </li>
          <li>
            <span>이메일 주소 무단 수집 거부</span>
            <span>개인정보 보호책임자 정구화</span>
            <span>호스팅 서비스 제공자 (주)이니스프리</span>
          </li>
        </ul>
        <div class="toss_wrap">
          <span>
            <strong>㈜토스페이먼츠의 에스크로 서비스 가입 :</strong> 저희 쇼핑몰은 고객님의 안전한 거래를 위해 무통장입금 거래에 대해
            구매안전서비스를 적용하고 있습니다.
          </span>
          <a href="https://consumer.tosspayments.com/escrow/detail?mertid=innisfree">토스페이먼츠 구매안전 서비스 가입확인</a>
        </div>
        <p class="copyRight">Copyright ©2023 이니스프리. All Rights Reserved</p>
        <dl>
          <dt>
            <span>고객 서비스 센터 이용안내</span>
            <strong>080-380-0114</strong>
          </dt>
          <dd>
            <span>운영시간 오전 09:00 ~ 오후 18:00 (주말 및 공휴일 휴무)</span>
            <span>점심시간 오후 12:00 ~ 오후 13:00</span>
          </dd>
          <dd>
            <button>1:1 문의하기</button>
          </dd>
        </dl>
      </div>
      <div class="footer_common">
        <ul>
          <li class="mo"><a href="#none">이용약관</a></li>
          <li class="mo"><a href="#none" class="active">개인정보처리방침</a></li>
          <li class="mo"><a href="#none">영상기기관리방침</a></li>
          <li class="mo"><a href="#none">위치기반서비스 이용약관</a></li>
          <li class="mo"><a href="#none">사업자정보확인</a></li>
          <li class="mo"><a href="#none">약관및법적고지확인</a></li>
          <li class="pc"><a href="#none">서비스 이용약관</a></li>
          <li class="pc"><a href="#none" class="active">개인정보처리방침</a></li>
          <li class="pc"><a href="#none">영상정보처리기기 운영/관리 방침</a></li>
          <li class="pc"><a href="#none">공지사항</a></li>
          <li class="pc"><a href="#none">고객센터</a></li>
          <li class="pc"><a href="#none">임직원 서비스</a></li>
        </ul>
        <div class="sns">
          <a href="https://x.com/innisfree_kr?mx=2" class="twitter" target="_blank"></a>
          <a href="https://www.facebook.com/innisfreeHQ?fref=ts" class="facebook" target="_blank"></a>
          <a href="https://www.instagram.com/innisfreeofficial/" class="instagram" target="_blank"></a>
          <a href="https://www.youtube.com/user/ecoinnisfree11" class="youtube" target="_blank"></a>
          <a href="#none" class="download"></a>
        </div>
      </div>
      <div class="footer_award">
        <span class="web2023">
          <span> 웹어워드 2023 모바일마케팅부문 통합대상 </span>
        </span>
        <span class="smart2023">
          <span> 스마트앱어워드 2023 브랜드부문 통합대상 </span>
        </span>
        <span class="smart2022">
          <span> 스마트앱어워드 2022 브랜드부문 통합대상 </span>
        </span>
      </div>
    </div>
    <!--// inner-->
  </footer>

  <!-- float menu -->
  <div class="float_menu">
    <ul>
      <li>
        <InmButton class="btn_history" txt="쇼핑로그" />
      </li>
      <li>
        <InmButton class="btn_goTop" txt="go top" />
      </li>
    </ul>
  </div>
  <!-- //float menu -->

  <!-- //쇼핑로그 안내 모달 -->
</template>

<script setup></script>

<style lang="scss" scoped>
footer {
  .inner {
    max-width: 1320px;
    margin: 0 auto;
    padding: 107px 20px 30px;
    padding-top: 107px;
    position: relative;
    > a {
      width: 156.68px;
      height: 20px;
      margin-top: 40px;
      display: inline-block;
      img {
        width: 100%;
      }
    }
    > .cont_footer {
      font-size: 12px;
      position: relative;

      > * {
        margin-top: 20px;
      }
      ul {
        color: #aaa;
        > * + * {
          margin-top: 8px;
        }
        li {
          > span {
            &::after {
              content: '';
              width: 1px;
              height: 10px;
              margin: 0 10px;
              background: #eee;
              display: inline-block;
            }
            &:last-of-type {
              &::after {
                display: none;
              }
            }
          }
        }
      }
      .toss_wrap {
        color: #aaa;
        display: flex;
        flex-direction: column;
        line-height: 1.5em;
        strong {
          color: #333;
        }
        a {
          color: #666;
          text-decoration: underline;
        }
      }
      dl {
        margin-top: 0px;
        padding: 45px 58px 45px 40px;
        background: #f5f5f5;
        position: absolute;
        top: -40px;
        right: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        dt {
          color: #666;
          display: flex;
          flex-direction: column;
          span {
            font-weight: 600;
          }
          strong {
            font-size: 20px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 5px;
            &::after {
              content: '(수신자 부담)';
              color: #999;
              font-size: 10px;
            }
          }
          + * {
            margin-top: 10px;
            margin-bottom: 20px;
          }
        }
        > dd {
          color: #999;
          font-size: 10px;
          display: flex;
          flex-direction: column;
          > button {
            padding: 6px 8px;
            color: #fff;
            font-size: 10px;
            font-weight: 600;
            background-color: #999;
          }
        }
      }
      .copyRight {
        color: #aaa;
      }
    }
    > .footer_common {
      padding: 41px 0;
      font-size: 14px;
      color: #999;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      top: 0;
      left: 20px;
      right: 20px;
      ul {
        display: flex;
        align-content: center;
        gap: 40px;
        li {
          &[class*='mo'] {
            display: none;
          }
          a {
            &.active {
              color: #333;
              font-weight: 600;
            }
          }
        }
      }
      .sns {
        display: flex;
        gap: 10px;
        a {
          width: 26px;
          height: 26px;
          background-image: url('@inmModule/assets/images/footer/SNS.png');
          background-repeat: no-repeat;
          background-size: 170px auto;
          display: inline-block;
          &.twitter {
            background-position: 0px 0px;
          }
          &.facebook {
            background-position: -38px 0px;
          }
          &.instagram {
            background-position: -74px 0px;
          }
          &.youtube {
            background-position: -110px 0px;
          }
          &.download {
            background-position: -143px 0px;
          }
        }
      }
    }
    > .footer_award {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      > span {
        display: flex;
        align-items: center;
        &::before {
          content: '';
          width: 28px;
          height: 36px;
          margin-right: 9px;
          display: block;
          background-size: 28px auto;
        }
        &.web2023::before {
          background-image: url('@inmModule/assets/images/footer/Award.png');
        }
        &.smart2023::before {
          background-image: url('@inmModule/assets/images/footer/Award-1.png');
        }
        &.smart2022::before {
          background-image: url('@inmModule/assets/images/footer/Award-2.png');
        }
        > span {
          max-width: 90px;
          color: #666;
          font-size: 9px;
          display: inline-block;
        }
      }
    }
  }
}

.float_menu {
  position: fixed;
  right: 40px;
  bottom: 40px;
  z-index: 10;
  li + li {
    margin-top: 10px;
  }
  :deep(button) {
    height: auto;
    background-color: transparent;
    em {
      width: 40px;
      height: 40px;
      padding: 0;
      font-size: 0;
      background-color: #fff;
      border: 1px solid #eee;
      border-radius: 50%;
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
      position: relative;
      &:after {
        width: 24px;
        height: 24px;
        background-image: url('@inmModule/assets/images/common/icon_split.png');
        background-repeat: no-repeat;
        background-size: 250px auto;
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        transform: translate(-50%, -50%);
      }
    }
    &.btn_history em:after {
      background-position: -170px -250px;
    }
    &.btn_goTop em:after {
      background-position: -180px -60px;
    }
  }
}
</style>
