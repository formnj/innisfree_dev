<template>
  <footer :class="props.device">
    <div class="inner">
      <a href="#none"><img src="@inmModule/assets/images/footer/Wordmark.png" alt="" /></a>
      <!-- mobile -->
      <div v-if="props.isMobile" class="cont_footer">
        <span>
          본 사이트와 앱의 모든 정보, 콘텐츠, UI등에 대한 무단 복제, 전송, 배포<br />
          스크래핑 등의 행위는 관련 법령에 의하여 엄격히 금지됩니다.<br />
        </span>
        <p class="copyRignt">Copyright ©2023 이니스프리. All Rights Reserved</p>
        <ul>
          <li><a href="#none">Be free with INNISFREE</a></li>
          <li><a href="#none">나의 주문내역</a></li>
          <li><a href="#none">공지사항</a></li>
          <li><a href="#none">로그인 / 회원가입</a></li>
          <li><a href="#none">고객센터 : 080-380-0114 (수신자요금부담)</a></li>
        </ul>
      </div>
      <!-- //mobile -->
      <!-- pc -->
      <div v-else class="cont_footer">
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
          <a href="">토스페이먼츠 구매안전 서비스 가입확인</a>
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
      <!-- //pc -->
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
          <a href="#none" class="twitter"></a>
          <a href="#none" class="facebook"></a>
          <a href="#none" class="instagram"></a>
          <a href="#none" class="youtube"></a>
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
</template>

<script setup lang="ts">
interface IFooterProps {
  device: string
  isMobile: boolean
}

const props = defineProps<IFooterProps>()
</script>

<style lang="scss" scoped>
footer {
  &.PC {
    .inner {
      max-width: 1280px;
      margin: 0 auto;
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
        left: 0;
        right: 0;
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

  /* 모바일 footer */
  &.MO {
    background-color: #f5f5f5;
    .inner {
      padding: 40px 21px;
      > a {
        width: 94px;
        height: 12px;
        display: block;
        img {
          width: 100%;
        }
      }
      > .cont_footer {
        margin-top: 20px;
        padding-bottom: 30px;
        > span {
          color: #aaa;
          font-size: 10px;
          line-height: 1.5;
        }
        .copyRignt {
          margin-bottom: 15px;
          color: #aaa;
          font-size: 10px;
          line-height: 1.5;
        }
        > ul {
          color: #999;
          font-size: 12px;
          font-weight: 600;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          li {
            padding: 6px 8px;
            border: 0.5px solid #999;
            border-radius: 1px;
          }
        }
      }
      > .footer_common {
        padding-top: 30px;
        font-size: 12px;
        font-weight: 500;
        border-top: 1px solid #ddd;
        display: flex;
        flex-direction: column;
        gap: 20px;
        overflow: hidden;
        > ul {
          margin-top: -10px;
          margin-left: -10px;
          display: flex;
          flex-wrap: wrap;
          li {
            &[class*='pc'] {
              display: none;
            }
            padding: 10px 10px 0px 10px;
            font-size: 12px;
            position: relative;
            display: flex;
            align-items: center;
            &::before {
              content: '';
              width: 1px;
              height: 10px;

              background: #ddd;
              position: absolute;
              top: 50%;
              left: 0px;
              display: inline-block;
            }
            a {
              color: #999e9c;
              font-weight: 500;
              display: flex;
              align-items: center;
              &.active {
                color: #606664;
              }
            }
          }
        }
        > .sns {
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
        width: 100%;
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        > span {
          width: 45%;
          display: flex;
          align-items: center;
          &::before {
            content: '';
            width: 38px;
            height: 37px;
            margin-right: 9px;
            display: block;
            background-size: 28px auto;
            background-repeat: no-repeat;
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
            color: #666;
            font-size: 9px;
          }
        }
      }
    }
  }
}
</style>
