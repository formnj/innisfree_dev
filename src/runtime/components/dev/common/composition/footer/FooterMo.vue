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
          <li><a href="#none">Be free with INNISFREE</a></li>
          <li><a href="#none">나의 주문내역</a></li>
          <li><a href="#none">공지사항</a></li>
          <li><a href="#none">로그인 / 회원가입</a></li>
          <li><a href="#none">고객센터 : 080-380-0114 (수신자요금부담)</a></li>
        </ul>
      </div>
      <div class="footer_common">
        <ul>
          <li class="mo">
            <a
              href=""
              @click.prevent="
                () => {
                  alert('Comming Soon')
                }
              "
              >이용약관</a
            >
          </li>
          <li class="mo">
            <a
              href=""
              class="active"
              @click.prevent="
                () => {
                  alert('Comming Soon')
                }
              "
              >개인정보처리방침</a
            >
          </li>
          <li class="mo">
            <a
              href="#none"
              @click.prevent="
                () => {
                  alert('Comming Soon')
                }
              "
              >영상기기관리방침</a
            >
          </li>
          <li class="mo">
            <a
              href="#none"
              @click.prevent="
                () => {
                  alert('Comming Soon')
                }
              "
              >위치기반서비스 이용약관</a
            >
          </li>
          <li class="mo">
            <a
              href="#none"
              @click.prevent="
                () => {
                  alert('Comming Soon')
                }
              "
              >사업자정보확인</a
            >
          </li>
          <li class="mo">
            <a
              href="#none"
              @click.prevent="
                () => {
                  alert('Comming Soon')
                }
              "
              >약관및법적고지확인</a
            >
          </li>
        </ul>
        <div class="sns">
          <a href="https://x.com/innisfree_kr" class="twitter" target="_blank"></a>
          <a href="https://www.facebook.com/innisfreeHQ?%60fref=ts&_rdr" class="facebook" target="_blank"></a>
          <a href="https://www.instagram.com/innisfreeofficial/" class="instagram" target="_blank"></a>
          <a href="https://m.youtube.com/user/ecoinnisfree11" class="youtube" target="_blank"></a>
          <a
            href="#none"
            class="download"
            @click.prevent="
              () => {
                alert('Comming Soon')
              }
            "></a>
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
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
footer {
  margin-top: 90px;
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
</style>
