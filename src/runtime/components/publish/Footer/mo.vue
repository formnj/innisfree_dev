<template>
  <footer>
    <div class="inner">
      <a href="#none"><img src="@inmModule/assets/images/footer/Wordmark.png" alt="" /></a>
      <div class="cont_footer">
        <span>
          본 사이트와 앱의 모든 정보, 콘텐츠, UI등에 대한 무단 복제, 전송, 배포<br />
          스크래핑 등의 행위는 관련 법령에 의하여 엄격히 금지됩니다.<br />
        </span>
        <p class="copyRignt">Copyright ©2023 이니스프리. All Rights Reserved</p>
        <ul>
          <li><a @click="$router.push('/publish/IN_MO_FOO_01_01')">Be free with INNISFREE</a></li>
          <li><a href="#none">나의 주문내역</a></li>
          <li><a href="#none">공지사항</a></li>
          <li><a href="#none">로그아웃</a></li>
          <li><a href="#none">로그인 / 회원가입</a></li>
          <li><a href="#none">고객센터 : 080-380-0114 (수신자요금부담)</a></li>
          <li><a href="#none">임직원인증</a></li>
        </ul>
      </div>
      <div class="footer_common">
        <ul>
          <li class="mo"><a @click="$router.push('/publish/IN_MO_FOO_01_04')">이용약관</a></li>
          <li class="mo"><a @click="$router.push('/publish/IN_MO_FOO_01_05')" class="active">개인정보처리방침</a></li>
          <li class="mo"><a @click="$router.push('/publish/IN_MO_FOO_01_10')">영상기기관리방침</a></li>
          <li class="mo"><a @click="$router.push('/publish/IN_MO_FOO_01_12')">위치기반서비스 이용약관</a></li>
          <li class="mo"><a @click="fair_trade_info()">사업자정보확인</a></li>
          <li class="mo"><a href="#none" @click="modal.open('legal_notice', 'fullMo')">약관및법적고지확인</a></li>
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

  <!-- modal -->
  <!-- 약관 및 법적 고지 -->
  <div class="modal_wrap legal_notice" id="legal_notice">
    <div class="modal_container">
      <div class="modal_header">
        <h2>약관 및 법적 고지</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <dl>
          <dt>㈜ 이니스프리</dt>
          <dd>
            <p>서울특별시 용산구 한강대로 100(한강로2가) 7층 이니스프리</p>
            <p>대표이사 최민정 사업자등록번호 106-86-68127</p>
            <p>통신판매신고번호 2018-서울용산-0014</p>
            <p>제품문의 : 080-380-0114 FAX : 02-6040-7108</p>
            <p>이메일 주소 : Innisfree@Innisfree.com</p>
            <p>비즈니스제휴/입점문의 partner.biz.Innisfree.com</p>
          </dd>
        </dl>
        <dl class="email_reject">
          <dt>
            이메일 주소 무단 수집 거부
            <button @click="toggle_btn($event)" class="active"></button>
          </dt>
          <dd class="active">
            <p>개인정보 보호책임자 정구화</p>
            <p>호스팅 서비스 제공자 ㈜이니스프리</p>
          </dd>
          <dd class="reject_info">
            <ul>
              <li>
                <strong>제 1 조 (목적)</strong>
                <span
                  >이 약관은 ㈜이니스프리(전자상거래 사업자, 이하 "회사")가 운영하는 이니스프리 쇼핑몰(이하 "몰")에서 제공하는 관련
                  서비스(이하 "서비스")를 이용함에 있어 고객의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</span
                >
              </li>
              <li>
                <strong>제 2 조 (정의)</strong>
                <ul class="bul_list num">
                  <li>
                    "몰"이란 회사가 재화 또는 용역(이하 "재화 등")의 판매등 고객에 대한 서비스를 제공하기 위하여 컴퓨터 등 정보통신설비를
                    이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말합니다.
                  </li>
                  <li>"고객"이란 몰에 접속하여 이 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</li>
                  <li>
                    "서비스"란 회사가 인터넷 웹사이트 또는 모바일 앱 내에서 제4조에서 정한 내용의 업무를 통하여 이용자에게 제공하는
                    인터넷관련 유•무형의 행위 등을 말합니다.
                  </li>
                  <li>
                    "회원"이라 함은 몰에 개인정보를 제공하여 회원등록을 한 자로서, 회사및 몰의 정보를 지속적으로 제공받으며, 몰이 제공하는
                    서비스를 계속적으로 이용할 수 있는 자를 말합니다.
                  </li>
                  <li>"비회원"이라 함은 몰에 회원등록을 하지 않고 몰이 제공하는 서비스를 이용하는 자를 말합니다</li>
                </ul>
              </li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>㈜토스페이먼츠의 에스크로 서비스 가입</dt>
          <dd><p>저희 쇼핑몰은 고객님의 안전한 거래를 위해 무통장입금 거래에 대해 구매안전서비스를 적용하고 있습니다.</p></dd>
        </dl>
        <Button txt="토스페이먼츠 구매안전 서비스 가입 확인" class="btn_ confirm" @click="onPress()" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //약관 및 법적 고지 -->
</template>

<script setup>
import { modal } from '@inmModule/assets/js/common-ui'

const toss = 'https://consumer.tosspayments.com/escrow/detail?mertid=innisfree'

const toggle_btn = (event) => {
  const tg = event.target
  const toggle = document.querySelectorAll('.email_reject > dd')
  //console.log(toggle)

  if (tg.classList.contains('active')) {
    tg.classList.remove('active')
    toggle.forEach((a) => {
      a.classList.remove('active')
    })
    toggle[1].classList.add('active')
  } else {
    tg.classList.add('active')
    toggle.forEach((a) => {
      a.classList.remove('active')
    })
    toggle[0].classList.add('active')
  }
}

const onPress = () => {
  window.open(toss)
}

const fair_trade_info = () => {
  window.open('https://www.ftc.go.kr/bizCommPop.do?key=232&wrkr_no=1068668127')
}
</script>

<style lang="scss" scoped>
footer {
  margin-top: 10px;
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
        font-size: 10px;
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

.modal_wrap {
  .modal_container {
    .modal_content {
      padding: 0 2.1rem;
      > * + * {
        margin-top: 2rem;
      }
      dl {
        &.email_reject {
          dd {
            display: none;
          }
        }
        dt {
          color: #333;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: space-between;
          button {
            width: 1.6rem;
            height: 1.6rem;
            background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
            background-repeat: no-repeat;
            background-size: 25rem;
            background-position: -0.1rem -7rem;
            transition: all 0.3s;
            transform: rotate(180deg);
            &.active {
              transform: rotate(0deg);
            }
          }
        }
        > dd {
          &.reject_info {
            margin-left: -2.1rem;
            margin-right: -2.1rem;
            padding: 2rem 2.1rem;
            background: #f5f5f5;
            display: none;
          }
          margin-top: 0.5rem;
          line-height: 2rem;
          p {
            color: #666;
            font-size: 1.3rem;
            font-weight: 400;
          }
          &.active {
            display: block;
          }
          > ul {
            > li + li {
              margin-top: 3rem;
            }
            li {
              display: flex;
              flex-direction: column;
            }
          }
        }
      }
      .btn_ {
        margin: 2rem auto;
      }
    }
  }
}
</style>
