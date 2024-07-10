<template>
  <div class="inner">
    <div class="title_wrap" :data-layout="props.layoutType">
      <h2>개인정보 처리방침</h2>
    </div>
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
          @click="modal.open('infor_office', 'alert infor_office')" />
        <Button class="btn_ confirm" txt="뷰티포인트 개인정보 처리방침 전문보기" @click="amore_info()" />
      </div>
    </section>
    <section>
      <h3>수집/이용</h3>
      <div class="right_wrap">
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
          <span
            >별도 동의한 고객에 한하여 이벤트 제공 및 참여 기회 제공, 경품 배송, 마케팅 프로모션 목적 등으로 개인정보를 이용합니다.</span
          >
          <div class="bg">
            <ul class="bul_list dot">
              <li>휴대전화번호(선택 : 이메일주소, 주소)</li>
            </ul>
          </div>
        </div>
        <div class="cont_wrap">
          <strong>이벤트 참여 등 마케팅 활동</strong>
          <span
            >별도 동의한 고객에 한하여 이벤트 제공 및 참여 기회 제공, 경품 배송, 마케팅 프로모션 목적 등으로 개인정보를 이용합니다.</span
          >
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
                  인터넷 접속 시 자동으로 생성되는 방문기록 정보입니다. 서비스 이용 편의 및 최적화된 서비스 제공을 위해 제한적으로
                  활용하며,<br />
                  고객님께서는 웹 브라우저 설정에서 쿠키의 저장을 허용하거나 거부할 수 있습니다.
                </p>
                <Button txt="쿠기 설치 거부 방법" class="btn_sm_outline" @click="modal.open('cookei_modal', 'alert cookei_modal')" />
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h3>저장</h3>
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
      <h3>제공ㆍ위탁</h3>
      <div class="right_wrap">
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
          <Button class="btn_sm_outline" txt="개인정보 처리 위탁 내역 보기" @click="modal.open('infor_office', 'alert infor_office')" />
        </div>
        <div class="cont_wrap">
          <strong>개인정보 국외 이전</strong>
          <span>고객에게 보다 다양하고 전문적인 서비스를 제공하기 위해 국외의 사업자에게 개인정보를 위탁하고 있습니다.</span>
        </div>
      </div>
    </section>
    <section>
      <h3>파기</h3>
      <div class="right_wrap">
        <div class="cont_wrap">
          <strong>고객정보의 안전한 파기</strong>
          <span> 개인정보의 수집 목적을 달성하거나 보유기간이 만료되었을 때 복원이 불가능한 방식으로 개인정보를 지체없이 파기합니다. </span>
        </div>
        <div class="cont_wrap">
          <ol>
            <li>
              <em class="dest_icon_01"></em>
              <span>회원가입 정보</span>
              <p>회원 탈퇴하거나 회원에서 <br />제명된 때파기됩니다.</p>
            </li>
            <li>
              <em class="dest_icon_02"></em>
              <span>대금지급정보</span>
              <p>대금의 완제일 또는 채권소멸 시효<br />기간이 만료된 때 파기됩니다.</p>
            </li>
            <li>
              <em class="dest_icon_03"></em>
              <span>배송정보</span>
              <p>물품 또는 서비스가 인도되거나<br />제공된 때 파기됩니다.</p>
            </li>
            <li>
              <em class="dest_icon_04"></em>
              <span>설문조사, 이벤트</span>
              <p>해당 설문조사, 이벤트가 종료된 때 <br />파기됩니다.</p>
            </li>
          </ol>
        </div>
        <div class="cont_wrap">
          <strong>법령에 의한 개인정보 보존</strong>
          <span>
            목적이 달성된 개인정보라 할지라도 전자상거래 등에서의 소비자 보호에 관한 법률, <br />
            개인정보 보호법, 통신비밀보호법, 상법, 국세 기본법 등에 따라 일정기간 보유할 수 있습니다.
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
      </div>
    </section>
    <section>
      <h3>고객의 권리 보호</h3>
      <div class="right_wrap">
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

  <!-- modal -->
  <!-- cookei -->
  <div class="modal_wrap cookei_modal" id="cookei_modal">
    <div class="modal_container">
      <div class="modal_header">
        <h2>쿠키설치거부방법</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <dl>
          <dt>Internet Explorer의 경우</dt>
          <dd>
            <p>
              인터넷 화면 작업표시줄의 [도구]를 클릭한 후 [인터넷 옵션]을 선택 → [개인정보]탭을 클릭 → [고급]을 클릭 → 쿠키 허용여부를 선택
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
  <!-- infor_office -->
  <div class="modal_wrap infor_office" id="infor_office">
    <div class="modal_container">
      <div class="modal_header">
        <h2>이니스프리 개인정보 처리방침 전문</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div class="policy_wrap_pc">
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
          <div class="summary">
            <ol>
              <li><a href="#box_1">01 개인정보 수집에 대한 동의 및 수집</a></li>
              <li><a href="#box_2">02 개인정보의 수짖ㅂ항목 및 수집ㆍ이용 목적</a></li>
              <li><a href="#box_3">03 개인정보의 제공</a></li>
              <li><a href="#box_4">04 개인정보의 처리위탁</a></li>
              <li><a href="#box_5">05 개인정보의 보유·이용 기간, 파기 절차 및 파기방법</a></li>
              <li><a href="#box_6">06 개인정보 보호업무 및 관련 고충사항 처리 부서</a></li>
            </ol>
            <ol>
              <li><a href="#box_7">07 개인정보 자동수집 장치에 의한 개인정보 수집</a></li>
              <li><a href="#box_8">08 개인정보의 열람 및 정정 등</a></li>
              <li><a href="#box_9">09 개인정보 수집·이용·제공에 대한 동의 철회</a></li>
              <li><a href="#box_10">10 개인정보보호를 위한 관리적·기술적·물리적 대책</a></li>
              <li><a href="#box_11">11 이용자 및 법정대리인의 권리와 그 행사방법</a></li>
              <li><a href="#box_12">12 보호정책 변경시 공지의무</a></li>
            </ol>
          </div>
          <dl id="box_1">
            <dt>제 1 조 (개인정보 수집에 대한 동의 및 수집방법)</dt>
            <dd>
              <ul>
                <li>① "회원"이라 함은 회사에게 개인정보를 제공하여 회원등록을 하는 방법으로 회원 가입된 이용자를 의미합니다.</li>
                <li>② "비회원"이라 함은 회사의 사이트 등에 회원 가입을 하지 않고, 회사가 제공하는 서비스를 이용하는 자를 말합니다.</li>
                <li>
                  ③ 이용자는 온라인 또는 오프라인으로, 회사가 회사의 개인정보처리방침에 따라 이용자의 개인정보를 수집함에 대하여 동의여부를
                  표시하는 방법으로 동의할 수 있습니다. 이용자가 동의 부분에 표시하면 해당 개인정보 수집에 대해 동의한 것으로 봅니다.
                </li>
              </ul>
            </dd>
          </dl>
          <dl id="box_2">
            <dt>제 2 조 (개인정보의 수집항목 및 수집 • 이용 목적)</dt>
            <dd>
              <ul>
                <li>
                  ① 회사는 이용자들이 회원 서비스를 이용하기 위해 회원으로 가입하실 때 서비스 제공을 위한 필요최소한의 개인정보를 필요한
                  시점에 수집하고 있습니다. 다만 이용자들에게 보다 양질의 맞춤서비스를 제공하기 위하여 이용자의 추가적인 개인정보를
                  선택적으로 입력 받고 있습니다.
                </li>
                <li>
                  ② 회사는 이용자의 명시적인 별도 동의 없이 기본적 인권 침해의 우려가 있는 사상 • 신념, 노동조합 • 정당의 가입탈퇴, 정치적
                  견해, 건강, 성생활, 과거의 병력, 종교, 출신지, 범죄기록 등 민감한 개인정보는 수집하지 않습니다.
                </li>
                <li>
                  ③ 회사가 회원가입 시 수집하는 개인정보 항목과 그 수집 • 이용의 주된 목적은 아래와 같습니다.
                  <div class="table_wrap">
                    <table>
                      <caption>
                        위치정보 수집방법 및 서비스 내용
                      </caption>
                      <colgroup>
                        <col style="width: 120px" />
                        <col style="width: 270px" />
                        <col style="width: 252px" />
                        <col style="" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>구분</th>
                          <th>수집항목</th>
                          <th>수집이용/목적</th>
                          <th>이용/보유기간</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td rowspan="3">필수항목</td>
                          <td>
                            성명, 본인확인 값(CI), 생년월일, 성별, 무선 전화 번호, 내/외국인 구별, 온라인 회원의 아이디(ID) 및 비밀번호,
                            외국인등록번호(외국인회원 인증 시에만 수집․이용 후 파기)
                          </td>
                          <td>서비스 이용에 따른 본인 식별 / 가입연령확인 / 불량회원의 부정이용 방지</td>
                          <td class="important" rowspan="4">
                            회원 탈퇴 시까지<br />
                            개인정보 처리방침 제 5조 참조
                          </td>
                        </tr>
                        <tr>
                          <td>휴대 전화 번호</td>
                          <td>공지사항 전달 / 본인 의사 확인, 불만처리 등을 위한 의사소통 경로확보</td>
                        </tr>
                        <tr>
                          <td>구매거래 내역, 뷰티포인트 내역</td>
                          <td>이용자의 서비스 이용 및 상품구매에 따른 멤버십 회원 관리 근거자료</td>
                        </tr>
                        <tr>
                          <td rowspan="2">선택항목</td>
                          <td>휴대 전화 번호</td>
                          <td>
                            본인 동의 시 회사 또는 제휴사의 서비스 / 사업 및 정책 / 기타 이벤트에 관한 정보 제공 및 그에 따른 경품 등 물품
                            배송
                          </td>
                        </tr>
                        <tr>
                          <td>성명, 계좌정보(예금주명, 은행명, 계좌번호)</td>
                          <td>주문취소나 품절 시 환불목적</td>
                          <td class="important">
                            환불진행고객 : 환불 완료 후 즉시 삭제<br />
                            미환불 고객 : 구매확정 시 즉시 삭제<br />
                            미입금 고객 : 주문취소 시점 즉시 삭제
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <ul class="bul_list ref">
                    <li>이니스프리 사이트 이용을 위해 아모레퍼시픽으로부터 제공받는 정보</li>
                  </ul>
                  <div class="table_wrap">
                    <table>
                      <caption>
                        위치정보 수집방법 및 서비스 내용
                      </caption>
                      <colgroup>
                        <col style="width: 120px" />
                        <col style="width: 270px" />
                        <col style="width: 252px" />
                        <col style="" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>구분</th>
                          <th>수집항목</th>
                          <th>제공받는 목적</th>
                          <th>이용/보유기간</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>필수항목</td>
                          <td>
                            성명, 본인확인 값, 생년월일, 내/외국인여부, ID, PW, 성별, 휴대전화번호, 뷰티포인트 내역, (고객이 입력한 경우)
                            이메일주소, 주소
                          </td>
                          <td>이니스프리 사이트 회원가입 및 로그인 포인트 적립/사용</td>
                          <td class="important">
                            회원 탈퇴 시까지<br />
                            개인정보 처리방침 제 5조 참조
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <ul class="bul_list ref">
                    <li>이니스프리 리뷰관 (이니스프리 로그인 후 추가로 받는 정보)</li>
                  </ul>
                  <div class="table_wrap">
                    <table>
                      <caption>
                        이니스프리 리뷰관 (이니스프리 로그인 후 추가로 받는 정보)
                      </caption>
                      <colgroup>
                        <col style="width: 120px" />
                        <col style="width: 270px" />
                        <col style="width: 252px" />
                        <col style="" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>구분</th>
                          <th>수집항목</th>
                          <th>수집이용/목적</th>
                          <th>이용/보유기간</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td rowspan="2">선택항목</td>
                          <td>성별, 생년월일, 프로필이미지</td>
                          <td rowspan="2">
                            리뷰어 프로필 등록, 맞춤서비스 제공 및 서비스 개발, 서비스 이용에 대한 통계/분석, 이벤트 정보 및 참여기회 제공
                          </td>
                          <td class="important" rowspan="2">
                            리뷰어 프로필 삭제 시 혹은<br />
                            회원탈퇴 시까지
                          </td>
                        </tr>
                        <tr>
                          <td>피부타입, 피부밝기, 피부톤, 피부고민</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <ul class="bul_list ref">
                    <li>가까운 매장 찾기 서비스</li>
                  </ul>
                  <div class="table_wrap">
                    <table>
                      <caption>
                        가까운 매장 찾기 서비스
                      </caption>
                      <colgroup>
                        <col style="width: 120px" />
                        <col style="width: 270px" />
                        <col style="width: 252px" />
                        <col style="" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>구분</th>
                          <th>수집항목</th>
                          <th>수집이용/목적</th>
                          <th>이용/보유기간</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>선택항목</td>
                          <td>위치정보</td>
                          <td>이용자의 현재 위치를 기반으로 가까운 매장 안내</td>
                          <td class="important">
                            서비스 제공 목적 달성 후 <br />
                            지체없이파기
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <ul class="bul_list ref">
                    <li>반려동물 정보</li>
                  </ul>
                  <div class="table_wrap">
                    <table>
                      <caption>
                        반려동물 정보
                      </caption>
                      <colgroup>
                        <col style="width: 120px" />
                        <col style="width: 270px" />
                        <col style="width: 252px" />
                        <col style="" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>구분</th>
                          <th>수집항목</th>
                          <th>수집이용/목적</th>
                          <th>이용/보유기간</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>선택항목</td>
                          <td>반려동물 정보(이름, 생년월일)</td>
                          <td>맞춤서비스 제공</td>
                          <td class="important">동의 철회 또는 회원 탈퇴 시 까지</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </li>
                <li>
                  ④ 온라인(모바일 포함) 서비스 이용 시 이용자 확인, 서비스 제공 및 부정 이용 방지 등을 위하여 단말기에 관한 정보(단말기
                  모델, 운영체제 정보, 브라우저 정보 등)가 수집될 수 있으며, 모바일 서비스 경우 PUSH서비스 제공(고객이 동의한 경우에 한함),
                  어플리케이션 버전 업그레이드 등의 모바일 서비스 특성에 따른 서비스 제공을 위하여 이동통신사 정보가 추가적으로 수집 및
                  이용될 수 있습니다.
                </li>
                <li>
                  ⑤ 이용자가 회사에서 상품이나 용역 등을 구입하는 경우에는 대금결제 및 상품배송, 환불처리 등을 위하여 다음과 같은 추가정보를
                  입력하여야 합니다
                  <em>* 결제방법에 따라</em>
                  <ul class="bul_list dash">
                    <li>카드결제의 경우: 신용카드 종류, 카드번호, 유효기간 등 결제에 필요한 최소 정보</li>
                    <li>계좌이체의 경우: 거래 은행명, 계좌번호, 거래자 성명</li>
                  </ul>
                  <em>* 상품배송에 필요한 정보로서 상품을 보내는 사람과 받는 사람의 성명, 주소 및 전화번호 등 연락처</em>
                </li>
                <li>
                  ⑥ 회사는 회원가입을 위한 개인정보 수집 외에도, 아래와 같은 경우에 개인정보를 수집하고 있으며, 개인정보 수집 시 수집목적을
                  명시하여 동의를 받고 있습니다.
                  <ul class="bul_list star">
                    <li>문의 응대 : 이용자의 문의 기타 요청사항 처리 및 회신을 위한 개인정보 입력</li>
                    <li>고객상담시 : 고객상담 및 분쟁조정을 위한 기록보존을 위한 고객카드 작성</li>
                    <li>설문조사나 경품 행사시 : 통계분석이나 경품제공 등을 위해 선별적인 개인정보 입력</li>
                    <li>모니터요원 프로슈머 선발시 : 모니터활동 및 프로슈머 활동을 위한 지원서 작성</li>
                    <li>회사가 주최하는 이벤트 진행 시 : 이벤트에 참여하기 위한 개인정보 수집</li>
                  </ul>
                </li>
                <li>
                  ⑦ 회사는 이용자 확인, 경품 배송 및 통계분석을 통한 마케팅 자료로서 이용자의 취향에 맞는 최적의 서비스를 제공하기 위한
                  목적으로 이용자의 개인정보를 수집 · 이용하고 있습니다. 그리고 이용자의 사전 동의나 관련법령의 규정 없이는 어떠한 경우라도
                  이용자들에게 사전에 밝힌 목적 이외에 다른 목적으로 개인정보를 사용하지 않으며 외부에 공개하지 않습니다.
                </li>
                <li>
                  ⑧ 회사는 서비스 이용을 위한 본인식별을 위해 이용자의 외국인등록번호를 개인정보 주체의 별도 동의를 받아 처리할 수 있습니다.
                </li>
                <li>
                  ⑨ 이용자는 개인정보의 수집 · 이용에 대한 동의를 거부할 수 있습니다. 다만, 필수정보의 수집 · 이용 동의를 거부할 경우 멤버십
                  서비스 이용이 불가하며, 선택정보의 수집 및 이용에 거부하는 경우, 회원가입은 가능하나 선택정보를 이용한 서비스 이용 및 혜택
                  제공에 제한을 받을 수 있습니다.
                </li>
                <li>
                  ⑩ 비회원 고객 개인정보 수집사항 회사에서는 회원 고객 뿐 아니라 비회원 고객 또한 물품 및 서비스 상품의 구매를 하실 수
                  있습니다. 회사는 비회원 고객이 상품 등을 주문하는 경우 배송 및 대금 결제, 주문내역 조회 및 구매확인 등을 위하여 필요한
                  개인정보(주문자의 이름, 주소, 연락처, 이메일, 대금 결제 및 환불에 관한 정보, 주문번호, 주문비밀번호 등) 만을 비회원님께
                  요청하고 있습니다. 회사에서 비회원으로 구입을 하신 경우, 비회원 고객께서 입력하신 주문자 정보 및 수령인 정보는 대금결제 및
                  상품등의 배송에 관련한 용도 외에는 다른 어떠한 용도로도 사용되지 않습니다. 회사는 비회원의 개인정보를 회원과 동일하게
                  보호하며, 법령에 따른 보존기간 동안 보관하고 안전하게 파기합니다.
                </li>
                <li>
                  ⑪ 회사는 위치기반서비스 이용약관에서 정한 목적 범위 내에서 개인위치정보를 이용자로부터 별도 동의를 받아 수집 · 이용할 수
                  있습니다.
                </li>
              </ul>
            </dd>
          </dl>
          <dl id="box_3">
            <dt>제 3 조 (개인정보의 제공)</dt>
            <dd>
              <ul>
                <li>
                  ① 회사는 이용자의 동의가 있거나 관련법령의 규정에 의한 경우를 제외하고는 제2조에서 고지한 범위를 넘어 이용자의
                  개인(위치)정보를 이용하거나 제3자에게 제공하지 않습니다.
                </li>
                <li>
                  ② 다만, 다음 각 호의 경우는 이용자의 별도 동의 없이 제공될 수 있습니다.
                  <ul class="bul_list star">
                    <li>서비스 제공에 따른 요금정산을 위하여 필요한 경우</li>
                    <li>
                      통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정 개인을 알아볼 수 없는 형태로 가공하여 연구단체,
                      설문조사, 리서치 기관 등에 제공하는 경우
                    </li>
                    <li>
                      개인정보보호법, 통신비밀보호법, 국세기본법, 정보통신망 이용촉진 및 정보보호에 관한 법률, 금융실명거래 및 비밀보장에
                      관한 법률, 신용정보의 이용 및 보호에 관한 법률, 전기통신기본법, 전기통신사업법, 지방세법, 소비자보호법, 형사소송법 등
                      특별한 규정이 있는 경우
                    </li>
                  </ul>
                </li>
                <li>
                  ③ 이용자는 제3자에 대한 개인정보 제공 동의를 거부할 수 있으며, 동의를 거부할 때에는 제3자 제공에 따른 서비스 이용에 제한을
                  받을 수 있습니다.
                </li>
                <li>④ 회사는 개인정보를 국외의 제3자에게 제공할 때에는 이용자에게 내용을 알리고 동의를 받습니다.</li>
                <li>
                  ⑤ 회사는 개인위치정보를 이용자가 지정하는 제3자에게 제공하는 경우, 개인위치정보를 수집한 통신단말장치로 매회 이용자에게
                  제공받는 자, 제공일시 및 제공목적을 즉시 통지합니다. 단, 아래의 경우 이용자가 미리 특정하여 지정한 통신단말장치 또는
                  전자우편주소, 온라인게시 등으로 통지합니다.
                  <ul>
                    <li>1. 개인위치정보를 수집한 당해 통신단말장치가 문자, 음성 또는 영상의 수신기능을 갖추지 아니한 경우</li>
                    <li>
                      2. 이용자의 개인위치정보를 수집한 통신단말장치 외의 통신단말장치 또는 전자우편주소, 온라인게시 등으로 통보할 것을 미리
                      요청한 경우
                    </li>
                  </ul>
                </li>
              </ul>
            </dd>
          </dl>
          <dl id="box_4">
            <dt>제 4 조 (개인정보의 처리위탁)</dt>
            <dd>
              <ul>
                <li>① 회사는 서비스 향상 및 원활한 전산처리 등을 위하여 이용자의 개인정보 관리를 외부 전문 업체에 위탁할 수 있습니다.</li>
                <li>
                  ② 회사는 개인정보의 처리의 위탁 시 위탁계약 등을 통하여 서비스제공자의 개인정보보호 관련 지시엄수, 개인정보에 관한
                  비밀유지, 이용자 동의 없는 개인정보의 제3자 제공금지 등 이용자의 개인정보 보호를 위해 관리•감독합니다.
                </li>
                <li>
                  ③ 개인정보 처리위탁을 받는 수탁자와 그 업무는 아래와 같으며, 재위탁 현황은 상세보기에서 확인할 수 있습니다.
                  <Button class="btn_sm_outline" txt="재위탁현황 상세보기" @click="pageLink" />
                  <div class="table_wrap">
                    <table>
                      <caption>
                        위치정보 수집방법 및 서비스 내용
                      </caption>
                      <colgroup>
                        <col style="" />
                        <col style="" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>처리위탁 받는 자</th>
                          <th>처리위탁 업무내용</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>(주)젤라블루코리아</td>
                          <td>온라인 경품 발송 대행</td>
                        </tr>
                        <tr>
                          <td>㈜아모레퍼시픽</td>
                          <td>개인정보의 전산처리 및 관리, 이메일 발송</td>
                        </tr>
                        <tr>
                          <td>(주)아모레퍼시픽, (주)이니스프리 가맹사업자</td>
                          <td>
                            회원모집 및 회원정보 관리, 포인트 조회, 적립 및 사용, 각종 이벤트 및 프로모션 <br />실행• 안내, 제품 및 경품
                            배송
                          </td>
                        </tr>
                        <tr>
                          <td>NICE평가정보㈜, 한국모바일인증(주)</td>
                          <td>실명확인 및 본인확인 업무</td>
                        </tr>
                        <tr>
                          <td>(주)LG 유플러스</td>
                          <td>SMS발송업무</td>
                        </tr>
                        <tr>
                          <td>(주)한결로지스</td>
                          <td>배송업무 대행</td>
                        </tr>
                        <tr>
                          <td>진코퍼레이션</td>
                          <td>배송 시스템의 유지 보수</td>
                        </tr>
                        <tr>
                          <td>CJ올리브네트웍스</td>
                          <td>SMS, MMS 등 문자메시지 및 경품 배송</td>
                        </tr>
                        <tr>
                          <td>(주)두웰커뮤니티</td>
                          <td>이니스프리 직영몰 운영</td>
                        </tr>
                        <tr>
                          <td>
                            씨제이대한통운㈜, GS엠비즈 주식회사, 주식회사 비지에프네트웍스,<br />주식회사 지에스네트웍스, 케이원익스프레스,
                            진보커뮤니케이션㈜
                          </td>
                          <td>DM발송, 제품 및 경품 배송, 배송지 확인</td>
                        </tr>
                        <tr>
                          <td>콘센트릭스 서비스코리아 유한회사</td>
                          <td>(마케팅 채널, EDM, MDM, DM 등)을 활용한 CRM 마케팅 활용 및 분석</td>
                        </tr>
                        <tr>
                          <td>㈜엘지씨엔에스</td>
                          <td>스마트 메시지 서비스, 알림톡 고객설문 발송 대행</td>
                        </tr>
                        <tr>
                          <td>㈜아모레퍼시픽, (주)씨제이올리브네트웍스</td>
                          <td>
                            개인정보의 전산처리 및 관리<br />
                            SMS/MMS/카카오 및 이메일 발송 및 발송 시스템 유지보수
                          </td>
                        </tr>
                        <tr>
                          <td>(주)휴넥트</td>
                          <td>직영몰 반품/교환 업무 지원 및 상담업무</td>
                        </tr>
                        <tr>
                          <td>(주) 카카오</td>
                          <td>카카오채널 서비스 운영 및 카카오톡을 이용한 알림 정보 전송</td>
                        </tr>
                        <tr>
                          <td>㈜디마코코리아, 커뮤니크</td>
                          <td>온라인 채널 운영 대행(SNS) 및 이벤트 당첨자 경품 발송</td>
                        </tr>
                        <tr>
                          <td>KT알파</td>
                          <td>안심번호서비스 제공</td>
                        </tr>
                        <tr>
                          <td>블루스톤익스체인지, ㈜비즈마켓</td>
                          <td>기프티콘 등 모바일 상품권 발송</td>
                        </tr>
                        <tr>
                          <td>모비두 주식회사</td>
                          <td>라이브방송 내 댓글 서비스 제공</td>
                        </tr>
                        <tr>
                          <td>(주)제니엘</td>
                          <td>
                            회원모집 및 회원정보 관리, 포인트 조회, 적립 및 사용, 각종 이벤트 및 프로모션 <br />실행 • 안내 및 고객상담
                            업무, 데이터 분석을 통한 통계 및 전략 수립
                          </td>
                        </tr>
                        <tr>
                          <td>엠아이티마스</td>
                          <td>개인정보의 전산처리 및 관리</td>
                        </tr>
                        <tr>
                          <td>더케이텍㈜</td>
                          <td>
                            회원모집 및 회원정보 관리, 포인트 조회, 적립 및 사용, 각종 이벤트 및 프로모션 <br />실행•안내 및 고객상담 업무
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div class="table_wrap" id="info_per">
                    <table>
                      <caption>
                        제 4 조 (개인정보의 처리위탁)
                      </caption>
                      <colgroup>
                        <col style="" />
                        <col style="width: 225px" />
                        <col style="" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>처리위탁 받는 자(수탁자)</th>
                          <th>재위탁 받는 자(재수탁자)</th>
                          <th>재위탁 업무내용</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>㈜아모레퍼시픽</td>
                          <td>
                            한국아이비엠(주), 메가존클라우드㈜, ㈜킨드릴코리아, 도시바글로벌커머스솔루션즈코리아 ㈜, Amazon Web Service Inc.
                          </td>
                          <td>개인정보의 전산처리 및 관리, 이메일 발송</td>
                        </tr>
                        <tr>
                          <td>(주)젤라블루코리아</td>
                          <td>쿠프마케팅</td>
                          <td>모바일 쿠폰발송</td>
                        </tr>
                        <tr>
                          <td>한국모바일인증㈜</td>
                          <td>다우기술, (주)LG 유플러스</td>
                          <td>본인확인을 위한 SMS 발송 대행(SMS 인증번호 발송, 기타문자(SMS, LMS 등)발송 업무</td>
                        </tr>
                        <tr>
                          <td>(주)LG 유플러스</td>
                          <td>미디어로그</td>
                          <td>기업메시징 서비스 업무</td>
                        </tr>
                        <tr>
                          <td>지에스네트웍스</td>
                          <td>씨제이대한통운(주)</td>
                          <td>배송업무</td>
                        </tr>
                        <tr>
                          <td>씨제이대한통운㈜</td>
                          <td><a href="https://www.cjlogistics.com/ko/agreement/privacy-policy#num3">재위탁집배점</a></td>
                          <td>택배물품 배송 접수 및 물품 배송</td>
                        </tr>
                        <tr>
                          <td>㈜케이원익스프레스</td>
                          <td>로젠택배</td>
                          <td>기업택배 서비스</td>
                        </tr>
                        <tr>
                          <td>㈜엘지씨엔에스</td>
                          <td>㈜이커머스테크, ㈜한성엠에스</td>
                          <td>전자지급대행서비스(상담 및 업무지원)</td>
                        </tr>
                        <tr>
                          <td>(주)씨제이올리브네트웍스</td>
                          <td>CJ OliveNetworks Vina, Salesforce Inc.</td>
                          <td>개인정보의 전산처리 및 관리 <br />SMS/MMS/카카오 및 이메일 발송 및 발송 시스템 유지보수</td>
                        </tr>
                        <tr>
                          <td>KT알파</td>
                          <td>제이예스㈜</td>
                          <td>안심번호서비스 개발 관리</td>
                        </tr>
                        <tr>
                          <td>블루스톤익스체인지</td>
                          <td>비엑스테크놀로지</td>
                          <td>모바일 쿠폰 공급 및 서비스 이용</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </li>
                <li>④ 회사는 이벤트 및 프로모션을 위하여 개인정보 처리 위탁 시 이용자의 별도 동의를 받아 위탁합니다.</li>
                <li>
                  ⑤ 회사는 이용자에게 보다 다양하고 전문적인 서비스를 제공하기 위해 아래와 같이 국외의 사업자에게 개인정보를 위탁하고
                  있습니다.
                  <div class="table_wrap">
                    <table>
                      <caption>
                        제 4 조 (개인정보의 처리위탁)
                      </caption>
                      <colgroup>
                        <col style="" />
                        <col style="width: 99px" />
                        <col style="width: 153px" />
                        <col style="width: 153px" />
                        <col style="width: 153px" />
                        <col style="width: 153px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>이전 받는 자</th>
                          <th>이전 받는 국가</th>
                          <th>이전 항목</th>
                          <th>이전 방법</th>
                          <th>이전 목적</th>
                          <th>이전 일시 및 보유기간</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            Salesforce.com, Inc<br />
                            Heim Patrick, Chief trust Officer<br />
                            +1 888 747 9736<br />
                            pheim@salesforce.<br />com<br />
                            1 Market St # 300, San Francisco, CA 94105 USA
                          </td>
                          <td>미국</td>
                          <td>
                            성명, 생년월일, 내외국인정보, 휴대전화번호, 이메일주소, 성별, 구매이력, 회원등급, 결제정보, 고객 등록(신청)일,
                            고객식별번호, 브랜드별 혜택 동의여부, 수신동의 여부
                          </td>
                          <td>네트워크를 통한 원격지 전송</td>
                          <td>개인정보의 전산처리 및 저장, SMS/MMS/카카오 발송시스템 연결, 이메일 발송 및 발송 시스템 유지보수용</td>
                          <td>
                            <ul class="bul_list dot">
                              <li>이전시점 : 2020년 10월 28일</li>
                              <li>보유기간 : 개인정보처리방침에 규정된 보관기간에 따름(제5조 참조)</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            CJ OliveNetworks Vina<br />
                            Jang, Myung Soo<br />
                            +82-70-4990-2985<br />
                            ms.jang@cj.net<br />
                            CJ Building, 2Bis04-6 Le Thanh Ton Street, Ben Nghe Ward, District 1, Hochiminh City
                          </td>
                          <td>베트남</td>
                          <td>
                            성명, 생년월일, 내외국인정보, 휴대전화번호, 이메일 주소, 성별, 구매이력, 회원등급, 결제정보, 고객 등록(신청)일,
                            고객식별번호, 브랜드별 혜택 동의여부, 수신동의 여부
                          </td>
                          <td>네트워크를 통한 원격지 전송</td>
                          <td>개인정보의 전산처리 및 저장, SMS/MMS/카카오/이메일 발송 및 발송 시스템 유지보수용</td>
                          <td>
                            <ul class="bul_list dot">
                              <li>이전시점 : 2022년 10월 1일</li>
                              <li>보유기간 : 개인정보 처리방침에 규정된 보관기간에 따름(제5조 참조)</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <span
                      >이용자는 개인정보의 국외이전을 거부할 수 있습니다. 다만, 국외이전을 거부하실 경우 회사의 서비스 중 개인정보
                      국외이전이 필수적으로 수반되는 서비스의 이용이 제한될 수 있습니다. 이전을 원치 않으실 경우, 회원탈퇴를 진행하시거나
                      고객센터를 통해서 요청하실 수 있습니다.</span
                    >
                  </div>
                </li>
              </ul>
            </dd>
          </dl>
          <dl id="box_5">
            <dt>제 5 조 (개인정보의 보유 이용 기간, 파기절차 및 파기방법)</dt>
            <dd>
              <ul>
                <li>
                  ① 회사는 이용자가 회사에서 제공하는 서비스를 이용하는 동안 이용자들의 개인정보를 보유하며 서비스 제공 등의 목적을 위해
                  이용합니다. 전산에 등록된 이용자의 개인정보는 개인정보보호 담당자 및 책임자 또는 이들의 승인을 얻은 자가 아니면 문서로
                  출력할 수 없습니다.
                </li>
                <li>
                  ② 회사는 이용자가 자신의 개인(위치)정보를 삭제하거나 회원가입 탈퇴를 요청한 경우 지체 없이 조치를 취하며, 삭제된 정보는
                  기록을 복구 또는 재생할 수 없는 방법에 의하여 디스크에서 완전히 삭제하며 추후 열람이나 이용이 불가능한 상태로 처리됩니다.
                </li>
                <li>
                  ③ 회사는 개인정보의 수집목적 및 또는 제공받은 목적이 아래와 같이 파기사유가 발생한 때에 회사의 내부 파기절차에 따라
                  디스크에서 정보를 삭제하고, 출력된 경우에는 분쇄기로 분쇄하는 방법으로 이용자의 개인정보를 지체 없이 파기합니다.
                  <ul class="bul_list star">
                    <li>회원가입정보의 경우 : 회원가입을 탈퇴하거나 회원에서 제명된 때</li>
                    <li>대금지급정보의 경우 : 대금의 완제일 또는 채권소멸시효기간이 만료된 때</li>
                    <li>배송정보의 경우 : 물품 또는 서비스가 인도되거나 제공된 때</li>
                    <li>설문조사, 이벤트 등의 목적을 위하여 수집한 경우 : 해당 설문조사, 이벤트가 종료한 때</li>
                  </ul>
                </li>
                <li>
                  ④ 수집목적 또는 제공받은 목적이 달성된 경우에도 전자상거래 등에서의 소비자보호에 관한 법률, 개인정보보호법, 상법,
                  국세기본법 등 법령의 규정에 의하여 보존할 필요성이 있는 경우에는 다음과 같이 일정기간 이용자의 개인정보를 보유할 수
                  있습니다.
                  <ul class="bul_list star">
                    <li>계약 또는 청약철회 등에 관한 기록 : 5년</li>
                    <li>대금결제 및 재화 등의 공급에 관한 기록 : 5년</li>
                    <li>소비자 불만 또는 분쟁 처리에 관한 기록 : 3년</li>
                    <li>웹사이트 방문기록 : 3개월</li>
                  </ul>
                </li>
                <li>
                  ⑤ 회사는 위치정보의 보호 및 이용 등에 관한 법률 제16조에 따라 개인위치정보 이용‧제공사실 확인자료를 자동으로 기록‧보존하며
                  해당 자료는 6개월간 보유합니다.
                </li>
              </ul>
            </dd>
          </dl>
          <dl id="box_6">
            <dt>제 6 조 (개인정보 보호업무 및 관련 고충사항 처리 부서)</dt>
            <dd>
              <ul>
                <li>
                  ① 회사는 이용자의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 개인정보보호업무 및 관련 고충사항을
                  처리하는 부서가 지정되어 있습니다. 또한 개인정보 보호 책임자와 개인정보 보호 담당자를 두어 이용자의 개인정보에 관한 문의
                  및 불만을 신속하게 처리해드리고 있습니다.
                  <ul>
                    <li>
                      <p>[개인정보 보호 책임자]</p>
                      <p>성 명 : 정구화 Division장</p>
                      <p>소 속 : 영업 Division</p>
                    </li>
                    <li>
                      <p>[위치정보 관리 책임자]</p>
                      <p>성 명 : 정구화 Division장</p>
                      <p>소 속 : 영업 Division</p>
                    </li>
                    <li>
                      <p>전화번호 : 080-380-0114(수신자 부담전화)</p>
                      <p>(월~금 : 09:00~18:00, 공휴일 제외)</p>
                      <p>E-mail : innisfree_privacy@innisfree.com</p>
                      <p>FAX : 02-6040-7108</p>
                    </li>
                  </ul>
                </li>
                <li>
                  ② 이용자는 자신의 개인정보에 관하여 침해의 발생 또는 그 염려로 인하여 상담이 필요한 때에는 제1항의 회사 개인정보보호
                  담당부서뿐만 아니라 다음의 기관 등에 문의할 수 있습니다.
                  <ul class="bul_list dash">
                    <li>개인정보분쟁조정위원회 (<a href="https://www.kopico.go.kr/main/main.do">www.kopico.go.kr</a>/ 1833-6972)</li>
                    <li>개인정보침해신고센터 (<a href="#none">privacy.kisa.or.kr</a>/ 국번없이 118)</li>
                    <li>대검찰청 사이버수사과 (<a href="https://www.spo.go.kr/site/spo/main.do">www.spo.go.kr</a>/ 국번없이 1301)</li>
                    <li>경찰청 사이버수사국 (<a href="https://ecrm.police.go.kr/minwon/main">ecrm.cyber.go.kr</a>/ 국번없이 182)</li>
                  </ul>
                </li>
              </ul>
            </dd>
          </dl>
          <dl id="box_7">
            <dt>제 7 조 (개인정보 자동수집 장치에 의한 개인정보 수집)</dt>
            <dd>
              <ul>
                <li>
                  ① 회사는 이용자에 대한 정보를 저장하고 수시로 찾아내는 '쿠키(cookie, 인터넷 접속정보파일 등 개인정보 자동수집 장치)'를
                  사용할 수 있습니다. 쿠키란 회사의 웹사이트를 운영하는데 이용되는 서버가 이용자의 브라우저(넷스케이프, 인터넷 익스플로러
                  등)에 보내는 소량의 정보로서 이용자의 컴퓨터의 하드디스크에 저장되기도 합니다. 이용자가 웹사이트에 접속을 하면 회사의
                  컴퓨터는 이용자의 브라우저에 있는 쿠키의 내용을 읽고, 이용자의 추가정보를 귀하의 컴퓨터에서 찾아 접속에 따른 성명 등의
                  추가 입력 없이 서비스를 제공할 수 있습니다. 쿠키는 이용자의 컴퓨터는 식별하지만 귀하를 개인적으로 식별하지는 않습니다.
                </li>
                <li>
                  ② 회사는 회원과 비회원의 접속 빈도, 방문시간 등의 분석, 이용자의 방문횟수 파악 등 사이트 운영에 필요한 서비스 지원 및
                  개편을 위해 쿠키를 사용합니다.
                </li>
                <li>
                  ③ 회사는 쿠키를 사용하여 회사가 진행하는 각종 이벤트에서 이용자의 참여 정도 및 방문횟수를 파악하여 차별적인 응모기회를
                  부여하고 이용자의 관심분야에 따라 차별화된 정보를 제공하기 위한 자료로 이용됩니다.
                </li>
                <li>
                  ④ 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서 이용자는 웹 브라우저에서 옵션을 설정함으로써 쿠키의 전부
                  허용, 일부 허용, 전부 거부 등의 선택이 가능합니다.
                  <ul>
                    <li>
                      1. 쿠키설치 허용여부를 지정하는 방법 (Internet Explorer를 사용하고 있는 경우)인터넷 화면 작업표시줄의 [도구]를 클릭한
                      후 [인터넷 옵션] 선택하고, [개인정보 탭]을 선택한 후, [고급]을 선택하여 쿠키허용 여부를 설정합니다.
                    </li>
                    <li>
                      2. 받은 쿠키를 보는 방법 (Internet Explorer를 사용하고 있는 경우)인터넷 화면 작업표시줄의 [도구]를 클릭한 후 [인터넷
                      옵션]을 선택하고, 일반 탭(기본 탭)에서 검색 기록의 [설정]을 선택한 후, 임시 인터넷 파일 탭(기본 탭)의 [파일보기]를
                      선택합니다.
                    </li>
                  </ul>
                </li>
              </ul>
            </dd>
          </dl>
          <dl id="box_8">
            <dt>제 8 조 (개인정보의 열람 및 정정)</dt>
            <dd>
              <ul>
                <li>
                  ① 이용자는 언제든지 회사의 웹사이트에 로그인한 후 [회원정보수정]을 클릭하여 직접 열람 또는 정정하거나, 이용자가 가맹점 등
                  개인정보 처리위탁을 받은 자에게 요청하거나, 회사의 개인정보보호부서로 전화, 서면, 전자우편(e-mail)로 연락하여, 열람, 정정,
                  삭제, 처리정지를 요구할 수 있으며, 회사는 이용자의 요구에 대하여 지체 없이 관련 조치를 취하겠습니다.
                </li>
                <li>
                  ② 이용자가 개인정보의 오류에 대한 정정을 요청한 경우 회사는 정정을 완료하기 전까지 해당 개인정보를 이용 또는 제공 등
                  처리하지 않습니다. 또한 잘못된 개인정보를 이미 처리한 경우에는 정정 처리결과가 지체 없이 반영되도록 조치하겠습니다.
                </li>
                <li>
                  ③ ③ 다음과 같은 경우에는 개인정보의 열람 및 정정을 제한할 수 있습니다.
                  <ul>
                    <li>1. 제3자의 권익을 현저하게 해할 우려가 있는 경우</li>
                    <li>2. 해당 서비스제공자의 업무에 현저한 지장을 미칠 우려가 있는 경우</li>
                    <li>3. 법령을 위반하는 경우 등</li>
                  </ul>
                </li>
              </ul>
            </dd>
          </dl>
          <dl id="box_9">
            <dt>제 9 조 (개인정보 수집 이용 제공에 대한 동의 철회)</dt>
            <dd>
              <ul>
                <li>
                  ① 이용자는 개인정보의 수집, 이용 및 제공에 대해 동의한 내용을 언제든지 철회할 수 있습니다. 동의철회(회원탈퇴)는 회사
                  웹사이트에 로그인한 후 직접 동의철회(회원탈퇴)를 하거나, 이용자가 가맹점 등 개인정보 처리위탁을 받은 자에게 요청하거나,
                  회사의 개인정보보호부서로 서면, 전화 또는 전자우편(E-mail) 등으로 연락하는 등의 방법으로 할 수 있습니다. 회사는 이용자의
                  요청에 대하여 지체 없이 이용자의 회원탈퇴처리 및 개인정보의 파기 등 필요한 조치를 하겠습니다.
                </li>
                <li>
                  ② 회사는 개인정보의 수집에 대한 동의철회(회원탈퇴)를 개인정보의 수집 방법보다 쉽게 할 수 있도록 필요한 조치를 취하도록
                  노력합니다.
                </li>
              </ul>
            </dd>
          </dl>
          <dl id="box_10">
            <dt>제 10 조 (개인정보보호를 위한 관리적•기술적•물리적 대책)</dt>
            <dd>
              <ul>
                <li>① 회사는 개인정보의 안전한 처리를 위한 내부관리계획을 수립하고 시행하며, 교육을 실시합니다.</li>
                <li>
                  ② 회사는 이용자의 개인정보를 처리함에 있어 개인정보가 분실, 도난, 유출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여
                  기술적 대책을 강구하고 있습니다.
                </li>
                <li>
                  ③ 이용자의 개인정보는 외부 망에서 접근 및 침입이 불가능한 내부 망을 활용하여 관리되고 있으며, 파일 및 전송데이터를
                  암호화하거나 파일 잠금기능(lock)을 사용하여 중요한 데이터는 별도의 보안기능을 통해 철저하게 보호되고 있습니다.
                </li>
                <li>
                  ④ 회사는 해킹 등 외부 침입에 대비하여 방화벽 및 각 서버마다 침입탐지시스템을 이용하여 사내 네트워크 보안에 만전을 기하고
                  있으며, 접근제어 시스템을 설치하여 보안을 강화하고 있습니다.
                </li>
                <li>
                  ⑤ 개인정보처리 시스템 및 개인정보 처리자가 개인정보 처리에 이용하는 정보기기에 컴퓨터 바이러스, 스파이웨어 등 악성
                  프로그램의 침투 여부를 항시 점검, 처리할 수 있도록 백신프로그램을 설치하여 개인정보가 침해되는 것을 방지하고 있습니다.
                </li>
                <li>
                  ⑥ 회사는 이용자의 개인정보에 대한 접근권한을 최소한의 인원으로 제한하고 개인정보의 안전성을 확보하기 위하여 개인정보에
                  대한 접근 및 관리에 필요한 내부절차를 마련하고 출입통제∙잠금장치를 하고 소속 직원으로 하여금 이를 숙지하고 준수하도록 하고
                  있습니다.
                </li>
                <li>
                  ⑦ 개인정보 관련 처리자의 업무 인수인계는 보안이 유지된 상태에서 철저하게 이뤄지고 있으며 입사 및 퇴사 후 개인정보 사고에
                  대한 책임을 명확화하고 있습니다.
                </li>
                <li>
                  ⑧ 이용자는 회사에 제공한 개인정보에 대한 스스로의 확인 및 관리를 통하여 정확한 정보를 유지하도록 하며, 인터넷 사이트의
                  이용과정에서 타인의 개인정보를 권한 없이 이용하거나 타인의 권리를 침해하는 경우에는 회사의 제재뿐만 아니라 민∙형사상
                  책임을 부담할 수 있습니다.
                </li>
                <li>
                  ⑨ 회사는 이용자 본인의 부주의나 인터넷상의 문제로 아이디(ID), 비밀번호(P/W), 주민등록번호 등 개인정보가 유출되어 발생한
                  문제에 대해 회사는 일체 책임을 지지 않습니다. 따라서 이용자 개개인이 본인의 개인정보를 보호하기 위해서 자신의 아이디(ID)
                  와 비밀번호(P/W)를 적절하게 관리하고 여기에 대한 책임을 져야 합니다. 다만, 회사의 내부 관리자의 실수 또는 기술관리의
                  사고로 인해 이용자의 개인정보의 상실, 유출, 변조, 훼손이 생긴 경우 회사는 즉각 이용자에게 사실을 알리고 적절한 대책과
                  보상을 강구할 것입니다.
                </li>
              </ul>
            </dd>
          </dl>
          <dl id="box_11">
            <dt>제 11 조 (이용자 및 법정대리인의 권리와 그 행사방법)</dt>
            <dd>
              <ul>
                <li>
                  ① 이용자 및 법정대리인은 회사에 대하여 제공한 본인 또는 법정대리인으로서 개인정보를 조회, 수정, 변경 및 회원의 탈퇴 등과
                  관련한 권리를 행사할 수 있습니다.
                </li>
                <li>
                  ② 회사는 아동의 개인정보보호를 특별히 보호하기 위하여 만 14세 미만의 아동에 대한 개인정보는 법정대리인(부모 등)의 동의를
                  받은 경우에 한하여 수집합니다.
                </li>
                <li>
                  ③ 이용자 및 법정대리인은 개인정보와 관련하여 인터넷, 전화, 서면 등을 이용하여 회사에 연락을 하여 권리를 행사할 수 있으며,
                  회사는 지체 없이 필요한 조치를 합니다.
                </li>
                <li>
                  ④ 회사는 아래의 경우에 해당하는 자(이하 ”8세 이하의 아동 등”)의 위치정보의 보호 및 이용 등에 관한 법률 제26조 2항에
                  해당하는 자(이하 “보호의무자”)가 8세 이하의 아동 등의 생명 또는 신체보호를 위하여 개인위치정보의 이용 또는 제공에 동의하는
                  경우에는 본인의 동의가 있는 것으로 봅니다.
                  <ul>
                    <li>1. 8세 이하의 아동</li>
                    <li>2. 피성년후견인</li>
                    <li>
                      3. 장애인복지법 제2조제2항제2호에 다른 정신적 장애를 가진 사람으로서 장애인고용촉진 및 직업재활법 제2조제2호에 따른
                      중증장애인에 해당하는 사람(장애인복지법 제32조에 따라 장애인 등록을 한 사람만 해당)
                    </li>
                  </ul>
                </li>
                <li>
                  ⑤ 8세 이하의 아동 등의 생명 또는 신체의 보호를 위하여 개인위치정보의 이용 또는 제공에 동의를 하고자 하는 보호의무자는
                  서면동의서에 보호의무자임을 증명하는 서면을 첨부하여 회사에 제출하여야 하며, 보호의무자는 8세 이하의 아동 등의
                  개인위치정보 이용 또는 제공에 동의하는 경우 위치기반 서비스 약관 상의 이용자의 권리를 모두 가집니다.
                </li>
              </ul>
            </dd>
          </dl>
          <dl id="box_12">
            <dt>제 12 조 (보호정책 변경시 공지의무)</dt>
            <dd>
              <span
                >개인정보처리방침은 법령•정책 및 회사 내부 운영방침 또는 보안기술의 변경에 따라 내용이 변경될 수 있으며, 이 때에는 변경되는
                개인정보처리방침을 지체없이 회사 사이트 첫 페이지에 변경 이유 및 내용 등을 공지하도록 하겠습니다.</span
              >
            </dd>
          </dl>
          <dl class="supple_pro">
            <dt>&lt;부칙&gt;</dt>
            <dd>
              <span>2023. 01. 24 제 1 조(시행일) 이 지침은 2024년 1월 31일부터 시행합니다.</span>
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
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'publish-pc-category'
})

import { modal } from '@inmModule/assets/js/common-ui'

const props = defineProps({
  layoutType: {
    type: String,
    default: 'default'
  }
})

const amore_info = () => {
  window.open('https://www.amoremall.com/kr/ko/beautypoint/app/footer/privacy.do')
}
</script>

<style lang="scss" scoped>
.important {
  font-size: 16.8px !important;
  text-decoration: underline;
}

.title_wrap {
  margin-bottom: 19px;
  justify-content: center;
  h2 {
    color: #000 !important;
    font-size: 38px !important;
    font-weight: 600 !important;
  }
}

.inner {
  > * + * {
    display: flex;
  }
  section {
    padding-bottom: 70px;
    border-bottom: 1px solid #eee;
    &:first-of-type {
      padding-top: 70px;
      padding-top: 0 !important;
      border-bottom: 2px solid #000;
      flex-direction: column;
    }
    > p {
      margin-bottom: 40px;
      line-height: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      > span {
        color: #666;
        font-size: 16px;
        font-weight: 400;
      }
    }
    > .btn_wrap {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: c;
      margin-top: 1.5rem;
      gap: 10px;
    }
    &:last-of-type {
      border-bottom: 0;
    }
    .cont_wrap {
      &:last-of-type {
        &::after {
          display: none;
        }
      }
    }
  }
  > * + * {
    padding-top: 70px !important;
  }
  h3 {
    width: calc(100% - 1020px);
    color: #000;
    font-size: 24px;
    font-weight: 600;
  }
}

.right_wrap {
  flex: 1;
}

.cont_wrap {
  &::after {
    content: '';
    width: 100%;
    height: 1px;
    margin: 30px 0;
    background: #f5f5f5;
    display: block;
  }
  display: flex;
  flex-direction: column;
  > strong {
    margin-bottom: 10px;
    color: #000;
    font-size: 16px;
    font-weight: 600;
  }
  > span {
    color: #333;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
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
        color: #666;
        font-size: 14px;
        font-weight: 400;
      }
    }
    dl {
      > * + * {
        margin-top: 0.5rem;
      }
      dt {
        color: #333;
        font-size: 14px;
        font-weight: 600;
      }
      dd {
        color: #666;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
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
  ol {
    padding: 40px;
    background: #fcfcfd;
    border: 1px solid #eeeeee;
    display: flex;

    li {
      width: 25%;
      text-align: center;
      flex: 1;
    }

    em {
      width: 48px;
      height: 48px;

      background: url('@inmModule/assets/images/common/footer_icon.png') 0px 0px / 250px auto no-repeat;
      display: inline-block;
      &.dest_icon_01 {
        background-position: 5px -60px;
      }
      &.dest_icon_02 {
        background-position: -42px -61px;
      }
      &.dest_icon_03 {
        background-position: -95px -60px;
      }
      &.dest_icon_04 {
        background-position: -147px -60px;
      }
    }
    span {
      margin: 20px 0 5px 0;
      color: #333;
      font-size: 14px;
      font-weight: 600;
      display: block;
    }
    p {
      color: #666;
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
    }
  }
}

.bul_list {
  color: #333;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  li {
    flex-direction: row;
    a {
      margin-left: 20px;
      margin-right: 20px;
    }
  }
}

.depart_info {
  display: flex;
  justify-content: space-between;
  dl {
    width: 49%;
    padding: 30px;
    background: #f5f5f5;
    dt {
      margin-bottom: 10px;
      color: #333;
      font-size: 18px;
      font-weight: 600;
    }
    dd {
      margin-bottom: 5px;
      color: #666;
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;

      &:last-of-type {
        margin-bottom: 0;
      }
      span {
        width: 51px;
        display: inline-block;
      }
      i {
        padding-left: 51px;
        font-style: normal;
      }
    }
  }
}

:deep(.btn_sm_outline) {
  max-width: 185px;
  margin-top: 5px;
  border: 1px solid #aaa;
  em {
    padding: 6px 15px;
    color: #333;
    font-size: 12px;
    font-weight: 500;
  }
}

:deep(.select) {
  > div {
    width: 320px;
    margin-bottom: 40px;
  }
}
.modal_wrap {
  .modal_container {
    .modal_content {
      > * + * {
        margin-top: 20px;
      }
    }
  }
  &.cookei_modal {
    .modal_container {
      .modal_content {
        padding: 20px 30px 40px 30px;
        h3 {
          width: 100%;
          margin-bottom: 2rem;
          font-size: 1.6rem;
          font-weight: 600;
        }
        dl {
          &:last-of-type {
            margin-bottom: 0;
          }
          dt {
            margin-bottom: 10px;
            color: #666;
            font-size: 14px;
            font-weight: 600;
          }
          dd {
            color: #888;
            font-size: 12px;
            font-weight: 400;
            line-height: 16px;
            > * + * {
              margin-top: 5px;
            }
          }
        }
      }
    }
  }

  &.infor_office {
    .modal_container {
      min-width: 920px;
      .modal_content {
        .policy_wrap_pc {
          dl {
            dd {
              > ul {
                > li {
                  :deep(.btn_sm_outline) {
                    border: 1px solid #ccc;
                    position: absolute;
                    top: -10px;
                    right: 0;
                    em {
                      color: #666;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

.table_wrap {
  margin-top: 10px;
  margin-bottom: 10px;
  border-top: 2px solid #000;
  table {
    width: 100%;
    margin-bottom: 10px;
    border-collapse: collapse;
    border: 0;
    table-layout: fixed;
    caption {
      display: none;
    }
    thead {
      tr {
        th {
          padding: 10px 5px;
          color: #666;
          font-size: 13px;
          font-weight: 500;
          border-bottom: 1px solid #eee;
          border-left: 1px solid #eee;
          background: #f5f5f5;
          text-align: center;
          &:first-of-type {
            border-left: 0;
          }
        }
      }
    }
    tbody {
      tr {
        th {
          padding: 24px 0px;
          color: #666;
          font-size: 16px;
          border-bottom: 1px solid #f5f5f5;
          text-align: center;
          em {
            margin-left: -10px;
            margin-right: 3px;
            color: #ff0000;
          }
        }
        td {
          padding: 10px;
          font-size: 13px;
          font-weight: 400;
          border-bottom: 1px solid #f5f5f5;
          border-right: 1px solid #eee;
          text-align: center;
          &:last-of-type {
            border-left: 1px solid #eee;
            border-right: none;
          }
          ul {
            li {
              text-indent: -2px;
            }
          }
        }
      }
    }
  }
}

.summary {
  margin: 15px 0 0;
  padding: 20px;
  color: #888;
  font-size: 12px;
  background: #f5f5f5;
  border: 1px solid #eeeeee;
  line-height: 16px;
  display: flex;
  overflow: hidden;
  ol {
    flex: 1;
  }
}
</style>
