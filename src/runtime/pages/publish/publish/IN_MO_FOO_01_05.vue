<template>
  <div class="inner">
    <section>
      <p>
        <span> 개인정보 처리방침이란 ㈜이니스프리를 이용하는 고객님의 개인 정보를 보호하기 위한 약속입니다. </span>
        <span> ㈜이니스프리를 이용하실 때 처리되는 개인정보에 대하여 알기 쉽게 안내해드립니다. </span>
        <span> 상세 내용은 하단의 “개인정보 처리방침“ 전문보기를 통해서 확인하실 수 있습니다. </span>
      </p>
      <div class="btn_wrap">
        <Button
          class="btn_ confirm"
          txt="이니스프리 개인정보 처리방침 전문보기"
          @click="modal.open('infor_office', 'fullMo infor_office')" />
        <Button class="btn_ confirm" txt="뷰티포인트 개인정보 처리방침 전문보기" @click="amore_info()" />
      </div>
    </section>
    <section>
      <h2>수집/이용</h2>
      <div class="cont_wrap">
        <strong>회원서비스 제공을 위한 회원가입정보</strong>
        <span>
          회원서비스 이용을 위하여 회원가입시, 본인 확인 등 필요한 최소한의 개인정보를 수집하고 이용하며, 멤버십 회원관리를 위하여 서비스
          이용과정 중의 정보를 수집합니다.
        </span>
        <div class="bg">
          <ul class="bul_list dot">
            <li>회원가입정보 (아이디, 이름, 본인확인 값, 생년월일, 성별, 휴대전화번호)</li>
            <li>구매 거래 내역, 포인트 적립 내역</li>
          </ul>
        </div>
      </div>
      <div class="cont_wrap">
        <strong>쇼핑몰 주문/결제/배송</strong>
        <span>쇼핑몰에서 상품을 구매하실 때 다음의 개인정보를 수집하고 이용합니다.</span>
        <div class="bg">
          <ul class="bul_list dot">
            <li>대금결제에 필요한 정보(신용카드 종류, 카드번호, 유효기간 등)</li>
            <li>상품 배송을 위한 배송정보(발송인과 수신인의 이름, 주소, 연락처)</li>
          </ul>
        </div>
      </div>
      <div class="cont_wrap">
        <strong>고객과의 의사소통</strong>
        <span>별도 동의한 고객에 한하여 이벤트 제공 및 참여 기회 제공, 경품 배송, 마케팅 프로모션 목적 등으로 개인정보를 이용합니다.</span>
        <div class="bg">
          <ul class="bul_list dot">
            <li>휴대전화번호(선택 : 이메일주소, 주소)</li>
          </ul>
        </div>
      </div>
      <div class="cont_wrap">
        <strong>이벤트 참여 등 마케팅 활동</strong>
        <span>별도 동의한 고객에 한하여 이벤트 제공 및 참여 기회 제공, 경품 배송, 마케팅 프로모션 목적 등으로 개인정보를 이용합니다.</span>
        <div class="bg">
          <ul class="bul_list dot">
            <li>이메일주소, 주소, 휴대전화번호</li>
          </ul>
        </div>
      </div>
      <div class="cont_wrap">
        <strong>서비스 이용 시 필요한 정보</strong>
        <span
          >특정 서비스 이용과정에서 고객의 선택에 따라 추가적인 정보 집이 발생할 수 있으며, 이 경우 수집ㆍ이용 목적을 안내하고 동의를
          받습니다.</span
        >
      </div>
      <div class="cont_wrap">
        <strong>자동으로 수집되는 정보</strong>
        <span>온라인 서비스 이용이나 사업처리 과정에서 자동으로 생성되는 정보가 수집될 수 있습니다.</span>
        <div class="bg">
          <dl>
            <dt>생성정보</dt>
            <dd>
              <ul class="bul_list dot">
                <li>IP주소, 방문일시, 서비스 이용기록, 쿠키, 부정 이용 기록 등</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>쿠키란?</dt>
            <dd>
              <p>
                인터넷 접속 시 자동으로 생성되는 방문기록 정보입니다. 서비스 이용 편의 및 최적화된 서비스 제공을 위해 제한적으로 활용하며,
                고객님께서는 웹 브라우저 설정에서 쿠키의 저장을 허용하거나 거부할 수 있습니다.
              </p>
              <Button txt="쿠기 설치 거부 방법" class="btn_sm_outline" @click="modal.open('cookei_modal', 'fullMo cookei_modal')" />
            </dd>
          </dl>
        </div>
      </div>
    </section>
    <section>
      <h2>저장</h2>
      <ul class="bul_list dot">
        <li>개인정보의 안전한 처리를 위한 내부관리계획을 수립하고 시행 하며, 교육을 실시합니다.</li>
        <li>
          고객의 개인정보가 분실, 도난, 유출, 변조 또는 훼손되지 않도록 무분별한 접근을 통제하고 접근권한을 제한하며, 접속기록을 보관합니다.
        </li>
        <li>고객의 개인정보는 안전하게 저장ㆍ전송될 수 있도록 암호화하며, 보안프로그램을 설치하여 침해되는 것을 방지하고 있습니다.</li>
        <li>고객의 개인정보는 보관시설을 마련하고 잠금장치를 설치하는 등 물리적 조치를 통해 철저하게 보호되고 있습니다.</li>
      </ul>
    </section>
    <section>
      <h2>제공ㆍ위탁</h2>
      <div class="cont_wrap">
        <strong>제3자 제공</strong>
        <ul class="bul_list dot">
          <li>
            고객의 동의가 있거나 요금정산 또는 관련법령의 규정에 의한 경우를 제외하고 고객의 정보를 다른 목적으로 이용하거나 제공 하지
            않습니다.
          </li>
          <li>다양한 서비스 제공을 위해서 고객정보를 제공해야 하는 경우에는 고객으로부터 별도 동의를 받아 제공합니다.</li>
        </ul>
      </div>
      <div class="cont_wrap">
        <strong>개인정보 처리 위탁</strong>
        <span>고객에게 제공하는 서비스의 향상과 원활한 처리를 위하여 고객의 개인정보 처리를 외부 전문 업체에 위탁합니다.</span>
        <Button class="btn_ confirm" txt="개인정보 처리 위탁 내역 보기" @click="modal.open('infor_office', 'fullMo infor_office')" />
      </div>
      <div class="cont_wrap">
        <strong>개인정보 국외 이전</strong>
        <span>고객에게 보다 다양하고 전문적인 서비스를 제공하기 위해 국외의 사업자에게 개인정보를 위탁하고 있습니다.</span>
      </div>
    </section>
    <section>
      <h2>파기</h2>
      <div class="cont_wrap">
        <strong>고객정보의 안전한 파기</strong>
        <span> 개인정보의 수집 목적을 달성하거나 보유기간이 만료되었을 때 복원이 불가능한 방식으로 개인정보를 지체없이 파기합니다. </span>
      </div>
      <div class="cont_wrap">
        <dl>
          <dt class="dest_icon_01"></dt>
          <dd>
            <span> 회원가입 정보 </span>
            <p>회원 탈퇴하거나 회원에서 제명된 때 파기됩니다.</p>
          </dd>
        </dl>
        <dl>
          <dt class="dest_icon_02"></dt>
          <dd>
            <span> 대금지급정보 </span>
            <p>대금의 완제일 또는 채권소멸 시효기간이 만료된 때 파기됩니다.</p>
          </dd>
        </dl>
        <dl>
          <dt class="dest_icon_03"></dt>
          <dd>
            <span> 배송정보 </span>
            <p>물품 또는 서비스가 인도되거나 제공된 때 파기됩니다.</p>
          </dd>
        </dl>
        <dl>
          <dt class="dest_icon_04"></dt>
          <dd>
            <span> 설문조사, 이벤트 </span>
            <p>해당 설문조사, 이벤트가 종료된 때 파기됩니다.</p>
          </dd>
        </dl>
      </div>
      <div class="cont_wrap">
        <strong>법령에 의한 개인정보 보존</strong>
        <span>
          목적이 달성된 개인정보라 할지라도 전자상거래 등에서의 소비자 보호에 관한 법률 개인정보 보호법, 통신비밀보호법, 상법, 국세 기본법
          등에 따라 일정기간 보유할 수 있습니다.
        </span>
        <div class="bg">
          <ul class="bul_list dot">
            <li>계약 또는 청약철회 등에 관한 기록 : 5년</li>
            <li>대금결제 및 재화 등 공급에 관한 기록 : 5년</li>
            <li>소비자 불만 또는 분쟁 처리에 관한 기록 : 3년</li>
            <li>웹사이트 방문기록 : 3개월</li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <h2>고객의 권리 보호</h2>
      <div class="cont_wrap">
        <strong>개인정보 자기결정권 보장</strong>
        <ul class="bul_list dot">
          <li>고객은 언제든지 자신의 개인정보 및 이용현황을 확인할 수 있습니다.</li>
          <li>자신의 개인정보를 직접 수정하거나 정정, 동의를 철회할 것을 요청할 수 있습니다.</li>
          <li>
            ㈜이니스프리는 개인정보 수집에 대한 동의철회(회원탈퇴) 시 개인정보를 수집했을 때보다 쉽게 할 수 있도록 필요한 조치를
            취하겠습니다.
          </li>
        </ul>
      </div>
      <div class="cont_wrap">
        <strong>법정대리인의 권리 행사</strong>
        <span>고객은 법정대리인을 통해서도 권리를 행사할 수 있습니다.</span>
      </div>
      <div class="cont_wrap">
        <strong>권리 행사 방법</strong>
        <span>고객과 법정대리인은 개인정보 보호책임자와 책임부서에 연락을 취해 권리를 행사할 수 있습니다.</span>
      </div>
    </section>
    <section class="depart_info">
      <dl>
        <dt>개인정보 보호책임부서</dt>
        <dd>
          <ul>
            <li>
              <span>부서명 :</span>
              <em>이니스프리 정보보안센터</em>
            </li>
            <li>
              <span>연락처 :</span>
              <em>
                080-380-0114 (수신자 부담전화)<br />
                <i>(월~금 : 09:00 ~ 18:00, 공휴일 제외)</i>
              </em>
            </li>
            <li>
              <span>이메일 :</span>
              <em>innisfree_privacy@innisfree.com</em>
            </li>
          </ul>
        </dd>
      </dl>
      <dl>
        <dt>개인정보 침해에 따른 신고 및 유관기관</dt>
        <dd>
          <p>개인정보침해신고센터 (국번없이 118)</p>
          <p><a href="http://privacy.kisa.or.kr">http://privacy.kisa.or.kr</a></p>
        </dd>
        <dd>
          <p>경찰청 사이버수사국 (국번없이 182)</p>
          <p><a href="http://ecrm.cyber.go.kr">http://ecrm.cyber.go.kr</a></p>
        </dd>
      </dl>
    </section>
  </div>

  <!--modal-->
  <!-- cookei -->
  <div class="modal_wrap cookei_modal" id="cookei_modal">
    <div class="modal_container">
      <div class="modal_header">
        <h2>쿠키설치거부방법</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <h3>쿠키 설치 허용 여부를 지정하는 방법</h3>
        <dl>
          <dt>Internet Explorer의 경우</dt>
          <dd>
            <p>
              인터넷 화면 작업표시줄의 [도구]를 클릭한 후 [인터넷 옵션]을 선택→ [개인정보]탭을 클릭 → [고급]을 클릭 → 쿠키 허용여부를 선택
            </p>
          </dd>
        </dl>
        <dl>
          <dt>Safari의 경우</dt>
          <dd>
            <p>
              (Mac OS) MacOS 상단 좌측 메뉴바에서 [Safari]에서 [환경설정]을 선택 → [환경설정]창에서 [개인 정보 보호]로 이동하여 쿠키
              허용여부 선택
            </p>
            <p>(iOS) [설정] → 앱 목록에서 [Safari]선택 → [개인 정보 보호 및 보안]에서 쿠키 허용 여부 선택</p>
          </dd>
        </dl>
        <dl>
          <dt>Chrome의 경우</dt>
          <dd>
            <p>
              (PC) 웹브라우저 우측 상단 메뉴에서 [설정] 선택 → [개인정보 및 보안] 선택 → [쿠키 및 기타 사이트 데이터]로 이동하여 쿠키 허용
              여부 선택
            </p>
            <p>
              (Mobile) 웹브라우저 우측 상단 메뉴에서 [설정] 선택 → 고급 설정에서 [사이트 설정] 선택 → [쿠키]로 이동하여 쿠키 허용 여부 선택
            </p>
          </dd>
        </dl>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //cookei -->

  <!-- infor_office -->
  <div class="modal_wrap infor_office" id="infor_office">
    <div class="modal_container">
      <div class="modal_header">
        <h2>이니스프리 개인정보 처리방침 전문</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div class="policy_wrap">
          <Selectbox
            :options="[
              { val: 'value', txt: '2024-05-17 (3.00v)' },
              { val: 'value', txt: '2024-02-14 (2.98v)' },
              { val: 'value', txt: '2023-04-22 (2차 개정)' },
              { val: 'value', txt: '2021-03-21 (초안)' }
            ]" />
          <h3>이니스프리 개인정보 처리방침</h3>
          <p>
            <span>
              주식회사 이니스프리(이하 '회사'라고 함)는 회사에서 제공하는 서비스(이하 '서비스'라고 함)를 이용하는 회원님 (이하 '이용자'라고
              함)의 개인정보를 매우 소중하게 생각하고 있으며, 이용자의 개인정보를 보호하기 위하여 최선의 노력을 다하고 있습니다.
            </span>
            <span>
              회사는 『개인정보보호법』,『위치정보 보호 및 이용 등에 관한 법률』등 모든 개인정보보호 관련 법률규정을 준수하고 있으며 회사의
              개인정보처리방침을 별도로 제정하고 이를 준수함으로써 이용자의 개인정보를 더욱 보호하고 있습니다. 또한 회사는
              개인정보처리방침을 항상 회사 홈페이지 첫 화면에 공개함으로써 이용자들이 언제나 쉽게 열람할 수 있도록 조치하고 있습니다. 회사의
              개인정보처리방침은 관련 법률 및 고시의 변경 또는 내부 운영방침의 변경에 따라 변경될 수 있습니다. 회사의 개인정보처리방침이
              수정될 경우 변경된 사항은 홈페이지를 통하여 공지합니다. 회사의 개인정보처리방침은 다음과 같은 내용을 담고 있습니다.
            </span>
          </p>
          <dl>
            <dt>제 1 조 (목적)</dt>
            <dd>
              <span>
                이 약관은 ㈜이니스프리(전자상거래 사업자, 이하 "회사")가 운영하는 이니스프리 쇼핑몰(이하 "몰")에서 제공하는 관련 서비스(이하
                "서비스")를 이용함에 있어 고객의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
              </span>
            </dd>
          </dl>
          <dl>
            <dt>제 2 조 (정의)</dt>
            <dd>
              <ul class="bul_list num">
                <li>
                  "몰"이란 회사가 재화 또는 용역(이하 "재화 등")의 판매등 고객에 대한 서비스를 제공하기 위하여 컴퓨터 등 정보통신설비를
                  이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말합니다.
                </li>
                <li>"고객"이란 몰에 접속하여 이 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</li>
                <li>
                  "서비스"란 회사가 인터넷 웹사이트 또는 모바일 앱 내에서 제4조에서 정한 내용의 업무를 통하여 이용자에게 제공하는 인터넷관련
                  유•무형의 행위 등을 말합니다.
                </li>
                <li>
                  "회원"이라 함은 몰에 개인정보를 제공하여 회원등록을 한 자로서, 회사및 몰의 정보를 지속적으로 제공받으며, 몰이 제공하는
                  서비스를 계속적으로 이용할 수 있는 자를 말합니다.
                </li>
                <li>"비회원"이라 함은 몰에 회원등록을 하지 않고 몰이 제공하는 서비스를 이용하는 자를 말합니다</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>제 3 조 (약관의 등의 명시와 설명 및 개정)</dt>
            <dd>
              <ul class="bul_list num">
                <li>
                  회사는 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소(고객의 불만을 처리할 수 있는 곳의 주소를 포함), 전화번호,
                  팩스전송번호, 전자우편주소, 사업자등록번호, 통신판매업신고번호, 개인정보 보호 책임자 등을 고객이 쉽게 알 수 있도록 몰의
                  초기화면에 게시합니다. 다만, 약관의 내용은 고객이 연결화면을 통하여 볼 수 있도록 할 수 있습니다.
                </li>
                <li>
                  회사는 고객이 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 청약철회, 배송책임, 환불조건 등과 같은 중요한 내용을
                  고객이 이해할 수 있도록 별도의 연결 화면 또는 팝업화면 등을 몰에 제공하여 고객의 확인을 구하여야 합니다.
                </li>
                <li>
                  회사는 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제에 관한 법률, 전자거래기본법, 전자서명법, 정보통신망
                  이용촉진 등에 관한 법률, 방문 판매 등에 관한 법률, 소비자 보호법 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수
                  있습니다.
                </li>
                <li>
                  회사가 약관을 개정할 경우에는 변경된 약관을 적용하고자 하는 날(이하 "효력 발생일")로부터 7일(회원에게 불리한 변경의 경우
                  30일) 이전에 이 약관이 변경된다는 사실과 변경된 내용 등을 공지합니다. 이 경우 개정 전 내용과 개정 후 내용을 명확하게
                  비교하여 고객에게 알기 쉽도록 표시합니다.
                </li>
                <li>
                  변경 약관에 이의가 있는 회원은 회원 탈퇴 또는 이의 제기를 할 수 있으며, 제4항의 고지가 있은 후 30일 이내에 회원 탈퇴 또는
                  이의 제기하지 않은 회원은 변경 약관에 동의한 것으로 간주합니다.
                </li>
                <li>
                  회원이 몰의 개정된 약관에 동의하지 않는 경우에는 회사는 개정 약관내용을 당해 회원에게 적용할 수 없으며, 이 경우 회원은
                  이용계약을 해지할 수 있습니다. 변경된 약관의 효력 발생일 이후에도 서비스를 이용하는 경우 약관의 변경 사항에 동의한 것으로
                  간주됩니다.
                </li>
                <li>
                  이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 전자상거래 등에서의 소비자 보호에 관한 법률, 약관의 규제 등에
                  관한 법률, 공정거래위원회가 정하는 전자상거래 등에서의 소비자보호지침 및 관계법령 또는 상관례에 따릅니다.
                </li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //infor_office -->
</template>

<script setup>
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-mo-name-search-cart'
})
import { modal } from '@inmModule/assets/js/common-ui'

const props = defineProps({
  //default값이 'default'가 아니면 lnb 노출 없음
  link: {
    type: String,
    default: '#none'
  }
})

const amore_info = () => {
  window.open('https://www.amoremall.com/kr/ko/beautypoint/app/footer/privacy.do')
}

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', '개인정보처리방침')
})
</script>

<style lang="scss" scoped>
.inner {
  padding: 2rem 2.1rem;
  section {
    margin-right: -2.1rem;
    margin-left: -2.1rem;
    padding: 0 2.1rem 3rem;
    border-bottom: 5px solid #f5f5f5;
    > p {
      line-height: 2rem;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      > span {
        color: #333;
        font-size: 1.3rem;
        font-weight: 400;
      }
    }
    > .btn_wrap {
      > * + * {
        margin-top: 0.5rem;
      }
      margin-top: 1.5rem;
      .btn_ {
        width: 100%;
      }
    }
    &:last-of-type {
      border-bottom: 0;
    }
  }
  > * + * {
    padding-top: 3rem !important;
  }
  h2 {
    margin-bottom: 1.5rem;
    color: #aaa;
    font-size: 2.4rem;
    font-weight: 300;
  }
}

.cont_wrap {
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  > strong {
    margin-bottom: 0.5rem;
    color: #333;
    font-weight: 600;
  }
  > span {
    color: #666;
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 2rem;
    + .btn_ {
      margin-top: 1.5rem;
    }
  }
  > .bg {
    margin-top: 1.5rem;
    padding: 2rem;
    background: #fcfcfd;
    border: 1px solid #eeeeee;
    > * + * {
      margin-top: 1.5rem;
    }
    ul {
      li {
        color: #888;
        font-size: 1.2rem;
        font-weight: 400;
      }
    }
    dl {
      > * + * {
        margin-top: 0.5rem;
      }
      dt {
        color: #666;
        font-size: 1.3rem;
        font-weight: 500;
      }
      dd {
        color: #888;
        font-size: 1.2rem;
        font-weight: 400;
        :deep(.btn_sm_outline) {
          margin-top: 0.5rem;
          border: 0.05rem solid #999;
          em {
            padding: 0 0.5rem;
            color: #999;
            font-size: 1rem;
            font-weight: 600;
          }
        }
      }
    }
  }
  > dl {
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    &:last-of-type {
      margin-bottom: 0;
    }
    dt {
      min-width: 6rem;
      height: 6rem;
      margin-right: 1.5rem;
      background-image: url('@inmModule/assets/mo_images/common/foo_img.png');
      background-position: 0rem 0rem;
      background-repeat: no-repeat;
      background-size: 30rem auto;
      display: block;
      &.dest_icon_01 {
        background-position: -1rem 0rem;
      }
      &.dest_icon_02 {
        background-position: -8rem 0rem;
      }
      &.dest_icon_03 {
        background-position: -15rem 0rem;
      }
      &.dest_icon_04 {
        background-position: -22rem 0rem;
      }
    }
    dd {
      span {
        color: #333;
        font-size: 1.3rem;
        font-weight: 500;
      }
      p {
        margin-top: 0.5rem;
        color: #666;
        font-size: 1.2rem;
        font-weight: 400;
      }
    }
  }
}

.bul_list {
  color: #666;
  font-size: 1.3rem;
  font-weight: 400;
}

.depart_info {
  > * + * {
    margin-top: 3rem;
  }
  dt {
    margin-bottom: 0.5rem;
    color: #666;
    font-size: 1.3rem;
    font-weight: 500;
  }
  dd {
    margin-bottom: 0.5rem;
    color: #888;
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 2rem;

    &:last-of-type {
      margin-bottom: 0;
    }
    span {
      width: 4.1rem;
      display: inline-block;
    }
    i {
      padding-left: 4.1rem;
      font-style: normal;
    }
  }
}

.modal_wrap {
  .modal_container {
    .modal_content {
      padding: 0 2.1rem;
    }
  }
  &.cookei_modal {
    .modal_container {
      .modal_content {
        h3 {
          margin-bottom: 2rem;
          font-size: 1.6rem;
          font-weight: 600;
        }
        dl {
          margin-bottom: 2rem;
          > * + * {
            margin-top: 0.5rem;
          }
          &:last-of-type {
            margin-bottom: 0;
          }
          dt {
            color: #333;
            font-weight: 500;
          }
          dd {
            color: #666;
            font-size: 1.3rem;
            font-weight: 400;
            line-height: 2rem;
            > * + * {
              margin-top: 0.5rem;
            }
          }
        }
      }
    }
  }
}
</style>
