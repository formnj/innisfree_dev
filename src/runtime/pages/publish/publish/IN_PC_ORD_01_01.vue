<template>
  <!-- title washed -->
  <div class="title_wrap">
    <div>
      <h2>결제하기</h2>
    </div>
  </div>
  <!-- //title washed -->

  <div class="inner">
    <section>
      <div class="sub_title_wrap">
        <div>
          <h3>주문/배송정보</h3>
        </div>
      </div>
      <div class="table_wrap">
        <table>
          <caption>
            주문/배송정보
          </caption>
          <colgroup>
            <col style="width: 170px" />
          </colgroup>
          <tbody>
            <tr>
              <th><em>*</em>주문자</th>
              <td>
                <Inputs _type="text" />
              </td>
            </tr>
            <tr>
              <th><em>*</em>연락처</th>
              <td class="ord_sms">
                <div>
                  <Selectbox
                    :_placeholder="'010'"
                    :options="[
                      { val: 'value', txt: '010' },
                      { val: 'value', txt: '011' }
                    ]" />
                  <span>-</span>
                  <Inputs _type="text" _placeholder="" value="1234" />
                  <span>-</span>
                  <Inputs _type="text" _placeholder="" value="5678" />
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <em>*</em>
                <span>이메일</span>
              </th>
              <td class="ord_email">
                <Inputs _type="text" _placeholder="aaa@rianag.com" />
              </td>
            </tr>
            <tr>
              <th>
                <span>배송지 작성</span>
              </th>
              <td>
                <div class="deliveryList">
                  <p class="btn_wrap">
                    <Button class="btn_outline btn_min" txt="새로운 배송지" @click="change($event)" />
                    <Button class="btn_outline btn_min" txt="배송지 관리" @click="modal.open('add_list_modal', 'alert add_list_modal')" />
                  </p>
                  <div class="list">
                    <dl>
                      <dt>
                        <Inputs _type="radio" _text="" />
                      </dt>
                      <dd>
                        <span>
                          김이나 010-1234-5678
                          <em>기본배송지</em>
                        </span>
                        서울특별시 리앙에이지
                      </dd>
                    </dl>
                  </div>
                  <Inputs _type="checkbox" _text="안심번호 서비스 사용" />
                </div>
                <div class="new_address">
                  <p>
                    <Inputs _type="checkbox" _text="배송지 목록에 추가" />
                    <Inputs _type="checkbox" _text="기본 배송지로 등록" />
                    <Button class="btn_min_outline" txt="입력취소" @click="change_res($event)" />
                  </p>
                  <ul>
                    <li>
                      <span>배송지명</span>
                      <p>
                        <Inputs _type="text" _placeholder="최대 10자까지 입력가능" />
                      </p>
                    </li>
                    <li>
                      <span>받으실분</span>
                      <p>
                        <Inputs _type="text" _placeholder="최대 10자까지 입력가능" />
                      </p>
                      <Inputs _type="checkbox" _text="주문자 정보와 동일" />
                    </li>
                    <li>
                      <span>주소</span>
                      <div class="multi_form">
                        <Inputs _type="text" _placeholder="문구를 입력해주세요" />
                        <Button class="btn_outline" txt="우편번호 검색" />
                        <Button class="btn_outline" txt="CU 편의점 찾기" />
                        <Button class="btn_outline" txt="GS 편의점 찾기" />
                      </div>
                      <Inputs _type="text" _placeholder="" />
                      <Inputs _type="text" _placeholder="" />
                      <a
                        href="#none"
                        class="btn_link_arrw"
                        @mouseover="modal.open('shippingArmyInfo', 'layer shippingArmyInfo tooltip'), modalPositioning()"
                        >군부대 배송안내</a
                      >
                    </li>
                    <li>
                      <span>휴대폰 번호</span>
                      <div class="phone_wrap">
                        <Selectbox
                          :_placeholder="'010'"
                          :options="[
                            { val: 'value', txt: '010' },
                            { val: 'value', txt: '011' }
                          ]" />
                        <em>-</em>
                        <Inputs _type="text" _placeholder="" value="1234" />
                        <em>-</em>
                        <Inputs _type="text" _placeholder="" value="5678" />
                      </div>
                      <div class="checkbox_wrap">
                        <Inputs _type="checkbox" _text="안심번호 서비스 사용" />
                        <Icons class="tooltip" @click="modal.open('layer_safe_number', 'layer tooltip layer_safe_number')" />
                        <div id="layer_safe_number" class="modal_wrap">
                          <div class="modal_container">
                            <button class="btn_close" @click="modal.close(this)">닫기</button>
                            <div class="modal_content">
                              <h2>안심번호 서비스 안내</h2>
                              <p>
                                고객님의 실제 휴대폰번호와 연락처가 노출되지<br />않도록 1회성 임시번호(050-000-0000)를 제공하는<br />서비스
                                입니다.
                              </p>
                              <ul class="bul_list">
                                <li>
                                  판매자/택배사에 안심번호로 전달되므로 개인정보<br />유출을 사전에 방지할 수 있습니다.(택배상자에 안심번호
                                  표시)
                                </li>
                                <li>배송완료 후 일정시간이 지나면 안심번호는 자동으로<br />해제됩니다.</li>
                                <li>안심번호 서비스는 LMS/MMS 사용이 불가합니다.</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <span>배송 요청사항</span>
              </th>
              <td class="shippingMsg">
                <Selectbox
                  class="adress_sl"
                  :_placeholder="'배송 요청사항을 선택해 주세요.'"
                  :options="[
                    { val: 0, txt: '배송 요청사항을 선택해 주세요.' },
                    { val: 1, txt: '부재 시 경비(관리)실에 맡겨주세요.' },
                    { val: 2, txt: '부재 시 문 앞에 놓아주세요.' },
                    { val: 3, txt: '파손의 위험이 있는 제품이 있으니, 배송에 주의해주세요.' },
                    { val: 4, txt: '배송 전에 연락주세요.' },
                    { val: 5, txt: '메세지 직접입력' }
                  ]"
                  @change="input_change($event)" />
                <Inputs _type="text" _placeholder="배송 메세지를 직업 앱력해주세요(최대 20자)" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="order_info">
      <div class="sub_title_wrap">
        <div>
          <h3>주문 상품 정보</h3>
        </div>
      </div>
      <div class="list_wrap">
        <ul class="cart_list type_default">
          <li>
            <div class="row">
              <div class="order_goods">
                <div class="cell pdt_img">
                  <a href="#none">
                    <span class="thumb">
                      <em><img src="/images/sam/order_list_01.png" alt="" /></em>
                    </span>
                  </a>
                </div>
                <div class="cell pdt_info">
                  <em>5/2~15, 기간내 5개</em>
                  <a href="#none" class="name">
                    <p>블랙티 앰플 50mL[대용량] 스페셜 세트 + 블랙티 에센스 145mL</p>
                    <span>1개</span>
                  </a>
                </div>
                <div class="cell price">
                  <p><strong>52,000</strong>원</p>
                  <em class="point">+529P</em
                  ><!-- point -->
                </div>
              </div>
              <div class="gifts">
                <dl class="board_type_toggle single">
                  <dt>
                    <a href="#none" class="active" @click="toggle_btn">
                      그린티 씨드 세럼 대용량 + 씨드크림 (130mL+50mL) 구매 시 드리는 사은품입니다.
                      <em></em>
                    </a>
                  </dt>
                  <dd>
                    <div>
                      <img src="/images/sam/order_list_01.png" alt="" />
                      <p>
                        레티놀 시카 흔적 앰플 1mL
                        <em>6개</em>
                      </p>
                    </div>
                    <div>
                      <img src="/images/sam/order_list_02.png" alt="" />
                      <p>
                        레티놀 시카 흔적 앰플 1mL
                        <em>6개</em>
                      </p>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </li>
          <li>
            <div class="row">
              <div class="order_goods">
                <div class="cell pdt_img">
                  <a href="#none">
                    <span class="thumb">
                      <em><img src="/images/sam/order_list_01.png" alt="" /></em>
                    </span>
                  </a>
                </div>
                <div class="cell pdt_info">
                  <em>5/2~15, 기간내 5개</em>
                  <a href="#none" class="name">
                    <p>블랙티 앰플 50mL[대용량] 스페셜 세트 + 블랙티 에센스 145mL</p>
                    <span>1개</span>
                  </a>
                </div>
                <div class="cell price">
                  <p><strong>52,000</strong>원</p>
                  <em class="point">+529P</em
                  ><!-- point -->
                </div>
              </div>
              <div class="gifts">
                <dl class="board_type_toggle single">
                  <dt>
                    <a href="#none" class="active" @click="toggle_btn">
                      그린티 씨드 세럼 대용량 + 씨드크림 (130mL+50mL) 구매 시 드리는 사은품입니다.
                      <em></em>
                    </a>
                  </dt>
                  <dd>
                    <div>
                      <img src="/images/sam/order_list_01.png" alt="" />
                      <p>
                        레티놀 시카 흔적 앰플 1mL
                        <em>6개</em>
                      </p>
                    </div>
                    <div>
                      <img src="/images/sam/order_list_02.png" alt="" />
                      <p>
                        레티놀 시카 흔적 앰플 1mL
                        <em>6개</em>
                      </p>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </li>
          <li>
            <div class="row">
              <div class="order_goods">
                <div class="cell pdt_img">
                  <a href="#none">
                    <span class="thumb">
                      <em><img src="/images/sam/order_sam_01.png" alt="" /></em>
                    </span>
                  </a>
                </div>
                <div class="cell pdt_info">
                  <em>5/2~15, 기간내 5개</em>
                  <a href="#none" class="name">
                    <p>블랙티 앰플 50mL[대용량] 스페셜 세트 + 블랙티 에센스 145mL</p>
                    <span>1개</span>
                  </a>
                </div>
                <div class="cell price">
                  <p><strong>52,000</strong>원</p>
                  <em class="point">+529P</em
                  ><!-- point -->
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <article>
        <em>친환경 종이 완충재로 포장하여 안전하게 보내드립니다.</em>
        <Icons class="tooltip" @click="modal.open('ecoTooltip', 'layer tooltip')" />
        <div id="ecoTooltip" class="modal_wrap">
          <div class="modal_container">
            <button class="btn_close" @click="modal.close(this)">닫기</button>
            <div class="modal_content">
              <h2>이니스프리 배송 포장재 안내</h2>
              <span>
                이니스프리는 환경을 생각하는 마음으로,<br />
                일반 플라스틱 완충제(에어캡) 대신 친환경 종이<br />
                완충제(FSC인증)로 제품을 보호하고 있습니다.
              </span>
              <ul class="bul_list">
                <li>업체 배송 및 일부 제품 제외</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </section>

    <section class="point">
      <div class="sub_title_wrap">
        <div>
          <h3>쿠폰/포인트 적용</h3>
        </div>
      </div>
      <div class="table_wrap">
        <table>
          <caption>
            쿠폰/포인트 적용
          </caption>
          <colgroup>
            <col style="width: 214px" />
            <col style="" />
          </colgroup>
          <tbody>
            <tr>
              <th>쿠폰 (<span>사용 가능한 쿠폰</span><em>0장</em>)</th>
              <td>
                <Selectbox
                  :_placeholder="'적용 가능한 쿠폰이 없습니다.'"
                  :options="[
                    { val: 'value', txt: '적용 가능한 쿠폰이 없습니다.' },
                    { val: 'value', txt: '옵션02' }
                  ]" />
                <Selectbox
                  :_placeholder="'적용 가능한 더블쿠폰이 없습니다.'"
                  :options="[
                    { val: 'value', txt: '적용 가능한 더블쿠폰이 없습니다.' },
                    { val: 'value', txt: '옵션02' }
                  ]" />
                <ul class="bullistType_01">
                  <li>쿠폰은 조건에 따라 적용이 되지 않을 수 있습니다.</li>
                  <li>쿠폰 사용 후, 최종 결제 금액에 대하여 뷰티포인트가 산정/적립 됩니다. (뷰티포인트 사용분 및 배송비제외)</li>
                  <li>
                    쿠폰 사용 요건에 따라 사은품이 지급되지 않을 수 있습니다. 최종 주문 완료 후, &lt;마이페이지-주문내역-사은품 목록&gt;
                    에서사은품 내역을 반드시 확인해주세요.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>뷰티포인트</th>
              <td>
                <div>
                  사용가능 <strong>0</strong>P / 보유 <strong>0</strong> P <Inputs _type="text" _placeholder="" value="0" /> P
                  <Button txt="모두사용" class="btn_outline" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="odgift">
      <div class="sub_title_wrap">
        <div>
          <h3>증정품</h3>
        </div>
      </div>
      <div class="list_wrap">
        <dl class="cart_list">
          <dt>
            <strong>함께 드리는 증정품</strong>
          </dt>
          <dd>
            <div class="cell pdt_img">
              <span class="thumb">
                <em><img src="https://images.innisfree.co.kr/upload/product/36116_l_S_140.jpg?T202404300927" alt="" /></em>
              </span>
            </div>
            <div class="wrap">
              <div>
                <span>[특별증정품]</span>
                <p>[슈퍼 빅세일] 매쉬 썸머 파우치</p>
              </div>
              <div class="cell count">
                <Quantity _id="order" quantity="3" />
              </div>
            </div>
          </dd>
        </dl>
      </div>
      <ul class="bul_list star">
        <li>스페셜 기프트 또는 원하시는 구매 금액 증정품을 선택하셔야 증정품 증정이 가능합니다.</li>
        <li>구매 금액대별로 선택 가능한 개수만큼 중복 또는 여러 증정품의 선택이 가능합니다.</li>
        <li>선택하신 증정품은 배송기간 중 품절이나 소진 시 동일 수준 혹은 더 좋은 증정품으로 변경될 수 있습니다.</li>
      </ul>
    </section>

    <section class="pay_method">
      <div class="sub_title_wrap">
        <div>
          <h3>결제수단 선택</h3>
        </div>
      </div>
      <div class="list_wrap">
        <ul class="type_default">
          <li>
            <div class="row">
              <Inputs _type="radio" _text="신용카드 결제" _name="pay_method" _checked @change="radioChk = 'card'" />
              <!-- [Tip] change되었을 때, 변수값을 지정해준 값으로 변경해준다. -->
              <Inputs _type="radio" _text="원클릭 결제" _name="pay_method" @change="radioChk = 'onclick'" />
              <Inputs _type="radio" _text="다른 결제 수단" _name="pay_method" @change="radioChk = 'other'" />
            </div>
          </li>
        </ul>
      </div>
      <article class="method_card" :class="{ active: radioChk == 'card' }">
        <!-- 활성화된 article에 active 클래스 추가 --><!-- [Tip] 라디오버튼이 change되어 변경된 변수값을 확인하여 해당 article에 active 클래스를 활성화 시킴 -->
        <ul>
          <li v-for="(item, idx) in bank_info" :id="item.li_id" :key="idx">
            <input :id="item.input_id" type="radio" name="cardList" />
            <label :for="item.label_for">{{ item.name }}</label>
          </li>
        </ul>
        <a href="#none" @click="modal.open('install', 'full install')">무이자 할부 안내</a>
        <p class="tosspay">
          <span>저희 쇼핑몰은 고객님의 안전한 거래를 위해 무통장입금/계좌이체 거래에 대해 구매안전서비스를 적용하고 있습니다.</span>
          <Button txt="토스페이먼츠 구매안전 서비스 가입확인" class="btn_min_outline" @click="toss_info()" />
        </p>
      </article>
      <article class="method_onclick" :class="{ active: radioChk == 'onclick' }">
        <div>
          <button>
            <span>대표카드를 등록해 주세요</span>
          </button>
        </div>
        <p class="tosspay">
          <span>저희 쇼핑몰은 고객님의 안전한 거래를 위해 무통장입금/계좌이체 거래에 대해 구매안전서비스를 적용하고 있습니다.</span>
          <Button txt="토스페이먼츠 구매안전 서비스 가입확인" class="btn_min_outline" @click="toss_info()" />
        </p>
      </article>
      <article class="method_other" :class="{ active: radioChk == 'other' }">
        <ul>
          <li v-for="(item, idx) in etc_info" :id="item.li_id" :key="idx" @change="[(orderChk = item.class)]">
            <input
              :id="item.input_id"
              type="radio"
              name="etcList"
              :checked="item.checked"
              :value="item.value"
              @change="radio_change($event)" />
            <label :for="item.label_for"
              ><span>{{ item.text }}</span></label
            >

            <div v-if="item.discont_txt" class="discount_txt">{{ item.discont_txt }}</div>
          </li>
        </ul>
        <div class="other_cont">
          <div class="kakao" :class="{ active: orderChk == 'kakao' }">
            <div class="discount_info">
              <h4>카카오페이 결제 혜택</h4>
              <ul class="bullistType_01">
                <li>카카오페이 머니로 결제 시에만 적용 가능(신용카드 제외)</li>
                <li>기간 : 5/9(목) - 5/13(월)</li>
                <li>카카오페이 머니로 3만원 이상 결제 시 5,000원 즉시할인</li>
                <li>공식온라인몰 / 오프라인매장 기간 내 각 1회 할인가능</li>
              </ul>
            </div>
            <div class="notice">
              <h5>유의사항</h5>
              <ul class="bulListType_02">
                <li>카카오톡안에서 개인 신용카드(체크카드포함)를 등록하여 카카오페이 비밀번호로 결제할 수 있는 간편결제입니다.</li>
                <li>본인명의 스마트폰에서 본인명의 카드 등록 후 사용 가능합니다.(카드등록 : 카카오톡 > 더 보기 > 카카오페이 > 카드)</li>
                <li>카드사별 무이자 할부 행사는 카카오페이 결제 창에서 확인 가능합니다.</li>
                <li>결제메시지 요청 시 입력하신 휴대폰 번호로 카카오페이로부터 메시지가 발송됩니다.</li>
              </ul>
            </div>
          </div>
          <div class="toss" :class="{ active: orderChk == 'toss' }">
            <div class="discount_info">
              <h4>토스페이 결제 혜택</h4>
              <ul class="bullistType_01">
                <li>토스 페이로 생애 첫 결제 시 2천원 적립!</li>
                <li>토스 페이로 결제 시(토스로 등록된 신용카드 결제 시 제외</li>
                <li>토스 전체 가맹점에서 결제 이력이 없는 경우 적용됩니다.(토스 ID당 1회)</li>
                <li>토스페이 결제 화면에서 생애 첫 결제 혜택이 보이지 않을 경우 대상이 아닙니다.</li>
                <li>생애 첫 결제 프로모션은 기타 할인 및 적립 프로모션과 중복으로 적용이 가능합니다.</li>
                <li>관련 문의는 토스 고객센터(1599-4905)로 문의 부탁드립니다.</li>
              </ul>
            </div>
            <div class="notice">
              <h5>유의사항</h5>
              <ul class="bulListType_02">
                <li>토스페이 결제시 토스페이 또는 등록된 카드로 결제가 가능합니다.</li>
                <li>토스페이로 결제한 경우 환불(또는 부분환불)시 토스페이로 환불됩니다.</li>
                <li>토스페이 앱을 최신 버전으로 업데이트 해주세요. 최신 버전이 아닌 경우 결제가 원활하지 않을 수 있습니다.</li>
              </ul>
            </div>
          </div>
          <div class="kb" :class="{ active: orderChk == 'kb' }">
            <div class="discount_info">
              <h4>KB페이 결제 혜택</h4>
              <ul class="bullistType_01">
                <li>KB Pay 결제 시 적용 (국민카드>KB Pay 선택시에도 적용)</li>
                <li>기간 : 5/9(목) - 5/13(월)</li>
                <li>KB국민카드로 3만원 이상 결제 시 5,000원 즉시할인</li>
                <li>공식온라인몰에서만 진행됩니다.</li>
              </ul>
            </div>
            <div class="notice">
              <h5>유의사항</h5>
              <ul class="bulListType_02">
                <li>이벤트 페이지 참조</li>
              </ul>
            </div>
          </div>
          <div class="sam" :class="{ active: orderChk == 'sam' }">
            <div class="notice">
              <h5>유의사항</h5>
              <ul class="bulListType_02">
                <li>스마트폰 명의자와 카드명의자가 동일한 경우에만 삼성페이 서비스에 카드등록이 가능합니다.</li>
                <li>삼성페이 지원 가능한 단말기는 아래 삼성페이 홈페이지에서 확인 가능합니다. (www.samsungpay.com/sec/Samsung-pay)</li>
              </ul>
            </div>
          </div>
          <div class="bankbook" :class="{ active: orderChk == 'bankbook' }">
            <div class="notice">
              <h5>유의사항</h5>
              <ul class="bulListType_02">
                <li>무통장 입금의 경우 주문접수 후 입금이 되지 않고 3일이 지나면 자동 취소됩니다.</li>
                <li>현금영수증 신청은 주문 시, 각 결제수단(실시간계좌이체, 무통장입금)의 인증 페이지에서 신청 가능합니다.</li>
                <li>추후 신청은 '회원로그인 > 마이페이지 > 증빙서류 발급'에서 가능합니다.</li>
                <li>(비회원은 '비회원 로그인(주문조회) > 증빙서류 발급')</li>
                <li><em>사업자증빙의 경우 반드시 주문 시 신청하여야 합니다.</em></li>
                <li><em>세금계산서는 고객상담실과 상담 후 발급이 가능합니다.</em></li>
              </ul>
            </div>
          </div>
          <div class="old_card" :class="{ active: orderChk == 'old_card' }">
            <dl>
              <dt>카드 선택</dt>
              <dd>
                <Selectbox
                  :_placeholder="'선택'"
                  :options="[
                    { val: 'value', txt: '선택' },
                    { val: 'value', txt: '국민' },
                    { val: 'value', txt: '신한' },
                    { val: 'value', txt: '삼성' },
                    { val: 'value', txt: '롯데' },
                    { val: 'value', txt: 'KEB하나' }
                  ]" />
                <a href="#none">무이자 할부 안내</a>
              </dd>
            </dl>
          </div>
        </div>

        <p class="tosspay">
          <span>저희 쇼핑몰은 고객님의 안전한 거래를 위해 무통장입금/계좌이체 거래에 대해 구매안전서비스를 적용하고 있습니다.</span>
          <Button txt="토스페이먼츠 구매안전 서비스 가입확인" class="btn_min_outline" @click="toss_info()" />
        </p>
      </article>
    </section>

    <section class="soldout">
      <div class="sub_title_wrap">
        <div>
          <h3>품절 시 환불 방법</h3>
        </div>
      </div>
      <div class="list_wrap">
        <ul class="type_default">
          <li>
            <div class="row">
              <Inputs _type="radio" _text="결제 수단으로 환불 받기" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>

  <!-- modal -->
  <div id="delete_modal" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>배송지 관리</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div>배송지를 삭제 하시겠습니까?</div>
      </div>
      <div class="modal_footer">
        <Button class="btn_ confirm" txt="확인" @click="close($event)" />
        <Button txt="취소" @click="[modal.close(this), close($event)]" />
      </div>
    </div>
    <div class="overlay" @click="[modal.close(this)], close($event)"></div>
  </div>

  <div id="add_list_modal" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>배송지 목록</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div class="list">
          <dl>
            <dt>
              <Inputs _type="radio" _text="" _name="address" />
            </dt>
            <dd>
              <span>
                김이나 010-1234-5678
                <em>기본배송지</em>
              </span>
              서울특별시 리앙에이지
            </dd>
            <dd class="btn_wrap">
              <Button
                class="btn_outline btn_sm"
                txt="수정"
                @click="[modal.open('adress_manage', 'alert adress_manage'), ord_addr_more($event)]" />
            </dd>
          </dl>
          <dl>
            <dt>
              <Inputs _type="radio" _text="" _name="address" />
            </dt>
            <dd>
              <span>
                김이나 010-1234-5678
                <em>기본배송지</em>
              </span>
              서울특별시 리앙에이지
            </dd>
            <dd class="btn_wrap">
              <Button
                class="btn_outline btn_sm"
                txt="수정"
                @click="[modal.open('adress_manage', 'alert adress_manage'), ord_addr_more($event)]" />
              <Button class="btn_outline btn_sm" txt="삭제" @click="[modal.open('delete_modal', 'alert'), ord_addr_more($event)]" />
            </dd>
          </dl>
        </div>
      </div>
      <div class="modal_footer">
        <Button class="btn_big bg_type_02" txt="이번만 배송지 변경" />
        <Button class="btn_big" txt="배송지 추가" @click="modal.open('adress_manage', 'alert adress_manage')" />
        <Button class="btn_big confirm" txt="기본 배송지로 설정" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <div id="adress_manage" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>배송지 관리</h2>
        <button class="btn_close" @click="[modal.close(this), close($event)]">닫기</button>
      </div>
      <div class="modal_content">
        <Inputs _type="checkbox" _text="내 우편수신처 불러오기(선택)" />
        <!-- 배송지 관리 > 배송지 추가일 때만 노출 -->
        <div class="table_wrap">
          <table>
            <caption>
              배송지 관리
            </caption>
            <colgroup>
              <col style="width: 170px" />
            </colgroup>
            <tbody>
              <tr>
                <th>
                  <em>*</em>
                  <span>배송지명</span>
                </th>
                <td>
                  <Inputs _type="text" />
                  <span class="error">배송지명을 입력해주세요</span>
                </td>
              </tr>
              <tr>
                <th>
                  <em>*</em>
                  <span>받으실 분</span>
                </th>
                <td>
                  <Inputs _type="text" />
                  <span class="error">받으실 분을 입력해 주세요.</span>
                </td>
              </tr>
              <tr>
                <th>
                  <em>*</em>
                  <span>주소</span>
                </th>
                <td class="adress">
                  <div class="multi_form">
                    <Inputs _type="text" _placeholder="" />
                    <Button txt="우편번호 검색" class="btn_outline" />
                  </div>
                  <Inputs _type="text" _placeholder="" />
                  <Inputs _type="text" _placeholder="" />
                  <a
                    href="#none"
                    class="btn_link_arrw"
                    @mouseover="modal.open('shippingArmyInfo', 'layer shippingArmyInfo'), modalPositioning()"
                    >군부대 배송안내</a
                  >
                </td>
              </tr>
              <tr>
                <th>
                  <em>*</em>
                  <span>휴대폰번호</span>
                </th>
                <td class="ord_sms">
                  <div>
                    <Selectbox
                      :_placeholder="'010'"
                      :options="[
                        { val: 'value', txt: '010' },
                        { val: 'value', txt: '012' }
                      ]" />
                    <span>-</span>
                    <Inputs _type="text" _placeholder="" value="1234" />
                    <span>-</span>
                    <Inputs _type="text" _placeholder="" value="5678" />
                  </div>
                  <span class="error">휴대폰번호를 입력해 주세요.</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="checkbox_wrap">
            <Inputs _type="checkbox" _text="개인정보 수집 동의" />
            <a class="info_more" href="#none" @click="[modal.open('personalinfo', 'layer personalinfo'), adress_more($event)]"
              >자세히보기</a
            >
          </div>
          <span class="error">개인정보 수집에 동의해주셔야 배송지 저장 가능합니다.</span>
        </div>
      </div>
      <div class="modal_footer">
        <Button txt="저장" class="btn_ confirm" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <div id="shippingArmyInfo" class="modal_wrap">
    <div class="modal_container">
      <button class="btn_close" @click="modal.close(this)">닫기</button>
      <div class="modal_content">
        <h2>군부대 배송 안내</h2>
        <p>
          <strong>- 사서함 주소</strong>
          <strong>- 배송지 명이 ‘부대’일 시 우체국 택배로 배송되며, 그 외에는 CJ택배로 배송됩니다.</strong>
        </p>
        <ol>
          <li>우체국 택배 서비스는 군부대 배송의 경우에만 가능합니다.</li>
          <li>수신인의 군 부대명 / 사서함 번호를 정확하게 기재하셔야 배송됩니다.</li>
          <li>
            <em>군 부대 발송 택배는 우체국 택배만 가능하기 때문에, 1차 CJ 택배 출고 → 2차 우체국 택배 이관 출고하여 최종 발송</em> 됩니다.
            택배 송장 번호 확인 시, CJ 택배 송장으로 표기되며 최종 우체국 송장 번호는 고객 상담실로 문의 시 확인 <br />가능합니다. (1:1 상담
            혹은 080 유선상담) 위의 특수한 배송 절차로 인해 일반 배송보다 배송일이 2~3일 정도 더 <br />소요될 수 있음을 안내 드립니다.
          </li>
          <li>
            <em>군부대 배송안내에 따른 기재를 정확하게 하지 않으실 경우, 이니스프리 물류 쪽으로 다시 반입</em>되기 때문에 배송 <br />지연,
            <em>왕복 배송비 5,000원을 입금</em>해 주셔야 합니다. '사서함 주소' 또는 '부대'를 입력해 주세요!
          </li>
          <li>
            군부대 배송건은 교환/반품접수시 부대 내 택배기사님 방문이 불가하여 직접 반품처리 해주셔야 합니다.<br />
            이점 양해 부탁드립니다.
          </li>
        </ol>
      </div>
    </div>
  </div>

  <div id="personalinfo" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>개인정보 수집동의</h2>
        <button class="btn_close" @click="[modal.close(this), reset($event)]">닫기</button>
      </div>
      <div class="modal_content">
        <p>㈜이니스프리는 다음과 같이 서비스 제공을 위한 최소한의 이용자의 개인정보를 수집 및 이용하고 있습니다.</p>
        <div class="table_wrap">
          <table>
            <caption>
              개인정보 수집동의
            </caption>
            <colgroup>
              <col style="" />
              <col style="width: 145px" />
              <col style="width: 184px" />
            </colgroup>
            <thead>
              <tr>
                <th>수집항목</th>
                <th>수집이용/목적</th>
                <th>이용/보유기간</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>[필수] 이름(상품수령인), 주소(상품수령지), 휴대폰번호</td>
                <td>배송지 등록 및<br />주문 편의 목적</td>
                <td>
                  <strong>
                    회원탈퇴 또는<br />
                    배송지 정보 삭제 시까지
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>※ 귀하는 개인정보 수집 및 이용에 거부할 수 있습니다. 단, 거부하는 경우 제품을 구매 하실 수 없습니다.</p>
      </div>
    </div>
  </div>

  <div class="modal_wrap install" id="install">
    <div class="modal_container">
      <div class="modal_header">
        <h2>무이자 할부 안내</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <img src="/images/sam/P01_51_1.png" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //modal -->
</template>

<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
import { bank_info, etc_info } from '@inmModule/test/data/publish/dummyData'
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-pc-ord'
})

const radioChk = ref('card') //[Tip] 최초의 article에 active 클래스 조건을 맞춰 줄 변수 지정
const orderChk = ref('naver') //[Tip] 최초의 article에 active 클래스 조건을 맞춰 줄 변수 지정

const toss_info = () => {
  window.open('https://consumer.tosspayments.com/escrow/detail?mertid=innisfree', '_blank')
}

const ord_addr_more = () => {
  document.querySelector('.modal_wrap.add_list_modal').classList.remove('active')
  document.querySelector('.modal_wrap.shippingArmyInfo').classList.remove('active')
}
const adress_more = () => {
  document.querySelector('.adress_manage .modal_container').style.display = 'none'
  document.querySelector('.modal_wrap.shippingArmyInfo').classList.remove('active')
}
const close = () => {
  document.querySelector('.modal_wrap.add_list_modal').classList.add('active')
}

const reset = () => {
  document.querySelector('.adress_manage .modal_container').style.display = 'block'
  document.querySelector('.modal_wrap.shippingArmyInfo').classList.remove('active')
}

const change = () => {
  document.querySelector('.deliveryList').classList.add('hide')
  document.querySelector('.new_address').classList.add('active')
}

const change_res = () => {
  document.querySelector('.new_address').classList.remove('active')
  document.querySelector('.deliveryList').classList.remove('hide')
}

const input_change = (event) => {
  let input_box = event.target.closest('.select').nextElementSibling.childNodes[0]
  const input_value = ref(event.target.value)
  console.log(input_box)
  console.log(input_value.value)
  if (input_value.value == 5) {
    input_box.classList.add('active')
  } else {
    input_box.classList.remove('active')
  }
}

const toggle_btn = (event) => {
  console.log(event.currentTarget)
  event.currentTarget.classList.toggle('active')
  const panel = event.currentTarget.parentNode.nextElementSibling
  console.log(panel)

  const ori_H_1 = panel.childNodes[0].offsetHeight
  const ori_H_2 = panel.childNodes[1].offsetHeight
  console.log(ori_H_1 + ori_H_2)

  if (!event.currentTarget.classList.contains('active')) {
    panel.style.height = ori_H_1 + ori_H_2 + 'px'
    setTimeout(() => {
      panel.style.height = '0px'
      panel.classList.add('hide')
    })
  } else {
    panel.style.height = 0
    panel.classList.remove('hide')
    setTimeout(() => {
      panel.style.height = ori_H_1 + ori_H_2 + 'px'
    })
  }
}

const modalPositioning = () => {
  const top = window.scrollY + event.target.getBoundingClientRect().top + event.target.getBoundingClientRect().height
  const left = event.target.getBoundingClientRect().left
  document.getElementsByClassName('shippingArmyInfo')[0].style.cssText = 'top:' + top + 'px;left:unset;left:' + left + 'px;bottom:unset;'
}

const radio_change = (event) => {
  const radio_value = ref(event.target.value)
  let refund = document.querySelector('.payment > .inner > div  > ul > li.refund')
  console.log(refund)
  console.log(radio_value.value)
  if (radio_value.value == 9) {
    refund.classList.add('active')
  } else {
    refund.classList.remove('active')
  }
}

onMounted(() => {})
</script>

<style lang="scss" scoped>
.sub_title_wrap {
  padding: 0 !important;
}
.table_wrap {
  border-top: 2px solid #000;
  table {
    width: 100%;
    border-collapse: collapse;
    border: 0;
    table-layout: fixed;
    caption {
      display: none;
    }
    thead {
      th {
        padding: 15px 20px;
        color: #000;
        font-size: 14px;
        border-bottom: 1px solid #eee;
        background: #f5f5f5;
        &:not(:first-of-type) {
          border-left: 1px solid #eee;
        }
      }
    }
    tbody {
      tr {
        th {
          padding: 24px 30px;
          color: #333;
          font-size: 14px;
          font-weight: 300;
          border-bottom: 1px solid #f5f5f5;
          text-align: left;
          vertical-align: top;
          em {
            margin-left: -10px;
            margin-right: 3px;
            color: #ff0000;
          }
        }
        td {
          padding: 20px 0;
          font-size: 16px;
          font-weight: 300;
          border-bottom: 1px solid #f5f5f5;
          :deep(button.btn_outline) {
            em {
              font-weight: 600;
            }
          }
          .input_wrap {
            width: 21%;
            flex: 0 auto;
          }

          &.ord_sms {
            > div {
              .select {
                width: 21%;
              }
              span {
                margin: 0 10px;
              }
            }
          }
          &.ord_email {
            .input_wrap {
              width: 90%;
            }
          }
          &.shippingMsg {
            .select {
              width: 75% !important;
              display: inline-block;
            }
            :deep(.input_wrap) {
              width: 75% !important;
              margin-top: 12px;
              display: block;
              .label_wrap {
                display: none;
                &.active {
                  display: block;
                }
              }
            }
          }
          > div {
            display: flex;
            align-items: center;
            &.deliveryList {
              width: 100%;
              padding: 0 25px 0 0;
              flex-direction: column;
              align-items: flex-start;
              gap: 12px;
              .btn_wrap {
                display: flex;
                gap: 4px;
                :deep(button.btn_outline) {
                  border-radius: 1px;
                  em {
                    padding: 0 16px;
                    color: #000;
                    font-size: 12px;
                  }
                }
              }
              :deep(.input_wrap) {
                width: 100%;
                em.label {
                  color: #777;
                }
              }
              &.hide {
                display: none;
              }
            }
          }
          > .new_address {
            padding: 25px 25px 25px 0;
            display: none;
            > p {
              width: 100%;
              margin-bottom: 15px;
              display: flex;
              gap: 20px;
              button.btn_min_outline {
                margin-left: auto;
                margin-right: 0;
                border-radius: 1px;
              }
              :deep(.input_wrap) {
                label.check {
                  em {
                    color: #333;
                    font-size: 14px;
                    font-weight: 400;
                  }
                }
              }
            }
            &.active {
              display: block;
            }
          }
          .new_address > ul {
            padding: 25px;
            border: 1px solid #eee;
            > * + * {
              margin: 30px 0 10px;
            }
            li {
              font-size: 13px;
              span {
                display: inline-block;
                &::before {
                  content: '*';
                  margin-right: 5px;
                  color: #ff0000;
                  font-size: 16px;
                  vertical-align: middle;
                }
              }
              .input_wrap {
                width: 100%;
                margin-top: 10px;
              }
              .multi_form {
                margin-top: 10px;
                gap: 0px;
                .input_wrap {
                  margin-top: 0px;
                  margin-right: 10px;
                  flex: 1;
                }
                :deep(button.btn_outline) {
                  width: 110px;
                  margin-right: 5px;
                  border-radius: 1px;
                  em {
                    padding: 0 10px;
                    color: #333;
                    font-size: 13px;
                    font-weight: 500;
                  }
                }
              }
              a {
                color: #666;
                font-size: 13px;
                text-decoration: underline;
                &:after {
                  width: 7px;
                  height: 7px;
                  border-color: #666;
                }
              }
              > .phone_wrap {
                margin-top: 10px;
                display: flex;
                align-items: center;
                label.select {
                  width: 21%;
                  display: inline-block;
                }
                .input_wrap {
                  width: 21% !important;
                  margin-top: 0;
                }
                em {
                  margin: 0 10px;
                }
              }
              .checkbox_wrap {
                margin-top: 10px;
                position: relative;
                display: flex;
                align-items: center;
                .input_wrap {
                  width: auto;
                  margin-top: 0;
                }
              }
            }
          }
        }
      }
    }
  }
  > em {
    width: 100%;
    margin-top: 10px;
    font-size: 16px;
    color: #d72137 !important;
    display: block;
  }
}
div.list {
  width: 100%;
  dl {
    width: 100%;
    padding: 25px;
    border: 1px solid #eee;
    background: #fcfcfd;
    display: flex;
    dt {
      margin-right: 10px;
    }
    dd {
      font-size: 14px;
      display: flex;
      flex-direction: column;
      span {
        margin-bottom: 3px;
        font-size: 14px;
        em {
          width: 65px;
          margin: 0 0 0 10px;
          padding: 2px 0;
          color: #00bc70;
          font-size: 12px;
          font-weight: normal;
          line-height: 1.5;
          background: #e0fbf0;
          text-align: center;
          display: inline-block;
        }
      }
      &.btn_wrap {
        margin-left: auto;
        margin-right: 0;
        display: flex;
        flex-direction: row;
        gap: 5px;
        :deep(button.btn_outline) {
          width: 34px;
          border-radius: 1px;
          em {
            padding: 0px !important;
            font-size: 10px;
            font-weight: 600;
          }
        }
      }
    }
  }
}
.modal_wrap {
  .modal_container {
    .modal_content {
      .table_wrap {
        tbody {
          tr {
            td {
              :deep(.input_wrap) {
                width: 29%;
              }
              &.ord_sms {
                > div {
                  label.select {
                    width: 29% !important;
                  }
                  span {
                    margin: 0 10px;
                  }
                }
              }
            }
          }
        }
      }
      ul {
        li {
          :deep(.input_wrap) {
            flex: 0 auto;
          }
        }
      }
    }
  }
  .modal_container {
    .modal_content {
      > .check {
        margin-bottom: 20px;
        color: #000;
        font-weight: 500;
      }
      .error {
        margin: 10px 0;
        color: #ff0000;
        font-size: 12px;
        display: block;
      }
      :deep(button.btn_outline) {
        border: 1px solid #000;
        border-radius: 1px;
        box-sizing: border-box;
        em {
          padding: 0 20px;
          color: #000;
          font-size: 12px;
          font-weight: 600;
        }
      }
    }
  }
  &.adress_manage {
    .modal_container {
      width: 720px;

      .input_wrap + .table_wrap {
        margin-top: 20px;
      }

      .table_wrap {
        tbody {
          tr {
            td {
              &.adress {
                > * + * {
                  margin-top: 8px;
                }

                .multi_form {
                  :deep(.input_wrap) {
                    flex: 0 auto;
                  }
                }

                > .input_wrap {
                  width: 100%;
                }

                > a {
                  padding: 4px 0;
                  color: #666;
                  font-size: 13px;
                  text-decoration: underline;
                  &:after {
                    border-color: #666;
                  }
                }
              }
            }
          }
        }
      }

      .checkbox_wrap {
        margin-top: 20px;
        display: flex;

        .input_wrap {
          flex: none;
        }
        a {
          margin-left: 20px;
          color: #666;
          font-size: 14px;
          text-decoration: underline;
        }
      }
    }
  }
  &.shippingArmyInfo {
    z-index: 15;
    &.active {
      display: block;
    }
    .modal_container {
      width: 640px;
      .modal_content {
        padding: 30px 20px;
        p {
          color: #666666;
          font-size: 13px;
          line-height: 1.54em;
          letter-spacing: -0.01em;
          display: flex;
          flex-direction: column;
          strong {
            font-weight: 600;
          }
        }
        ol {
          margin: 10px 0 0 15px;
          > * + * {
            margin-top: 5px;
          }
          li {
            color: #888;
            font-size: 13px;
            list-style-type: decimal;
            em {
              color: #d72137 !important;
            }
          }
        }
      }
    }
  }
  &.personalinfo {
    .modal_container {
      width: 720px !important;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .modal_content {
        p {
          color: #888;
          font-size: 13px;
        }
        .table_wrap {
          margin: 10px 0;
          table {
            thead {
              th {
                color: #888;
                font-size: 13px;
              }
            }
            tbody {
              tr {
                > * + * {
                  text-align: center;
                }
                td {
                  padding: 10px;
                  color: #888;
                  font-size: 13px;
                  strong {
                    font-size: 17px;
                    font-weight: normal;
                    text-decoration: underline;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  &.add_list_modal {
    .modal_container {
      width: 540px;
      .modal_header {
        border-bottom: 0;
      }
      .modal_content {
        div.list {
          border: 1px solid #eee;
          dl {
            border: 0 !important;
          }
        }
      }
      .modal_footer {
        button.bg_type_02 {
          background: #333;
        }
      }
    }
  }
  &.install {
    .modal_container {
      width: 720px;
    }
  }
}

.point {
  .table_wrap {
    table {
      tbody {
        th {
          padding: 30px 0 16px 10px;
          color: #000;
          span {
            color: #999;
          }
          em {
            margin-left: 3px;
            margin-right: 0px;
            color: #009d5e !important;
          }
        }
        td {
          > * + * {
            margin-top: 12px;
          }
          label.select {
            display: block;
          }
          ul {
            padding: 0;
            border: 0;
            > * + * {
              margin-top: 12px;
              margin-bottom: 0;
            }
          }
          > div {
            font-weight: 500;
            strong {
              margin: 0 5px;
              color: #00bc70;
            }
            .input_wrap {
              width: 90px;
              margin: 0 5px 0 15px;
            }
            button.btn_outline {
              margin-left: 10px;
              border-radius: 1px;
            }
          }
        }
      }
    }
  }
}

.odgift {
  strong {
    font-weight: 600;
  }
  dl {
    border: 1px solid #eeeeee;
    border-radius: 3px;
    background: #fcfcfd;
    dt {
      padding: 22px 19px;
      color: #333;
      font-size: 16px;
      font-weight: 600;
    }
    dd {
      padding: 25px 19px;
      border-top: 1px solid #eee;
      background: #fff;
      display: flex;
      align-items: center;
      .pdt_img {
        width: 68px;
        height: 90px;
      }
      .wrap {
        font-weight: 400;
        p {
          margin-bottom: 10px;
        }
      }
    }
  }
  .bul_list.star {
    margin-top: 20px !important;
  }
}
.order_info {
  .row {
    flex-direction: column;
    .order_goods {
      display: flex;
      .cell {
        &.pdt_info {
          margin-left: 20px;
          em {
            padding: 2px 5px;
            color: #00bc70;
            font-size: 12px;
            background: #e0fbf0;
            display: inline-block;
          }
          p {
            margin: 10px 0;
            font-size: 16px;
            font-weight: 400;
          }
          span {
            color: #888;
            font-size: 14px;
          }
        }
        &.price {
          p {
            display: flex;
            flex-direction: row;
            align-items: center;
            strong {
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
  .gifts {
    width: 100%;
    dl {
      width: 100%;
      dt {
        height: 69px;
        padding: 0 20px;
        color: #333;
        font-weight: 600;
        font-size: 16px;
        border: 1px solid #eee;
        border-radius: 3px;
        background: #fcfcfd;
        position: relative;
        display: flex;
        align-items: center;
        a {
          width: 100%;
          &.active {
            em {
              transform: translateY(40%) rotate(0deg);
            }
          }
          em {
            width: 36px;
            height: 40px;
            background-image: url('@inmModule/assets/images/common/icon_split.png');
            background-repeat: no-repeat;
            background-size: 250px;
            background-position: -200px -60px;
            text-indent: -9999px;
            position: absolute;
            top: 15%;
            right: 10px;
            transform: rotate(180deg);
            transition: all 0.3s;
          }
        }
      }
      dd {
        width: 100%;
        border: 1px solid #eee;
        border-top: 0;
        align-items: center;
        gap: 25px;
        overflow: hidden;
        transition: height 0.2s ease-out;
        &.hide {
          border: 0;
        }
        div {
          width: 390px;
          padding: 15px 19px 0px;
          display: flex;
          align-items: center;
          img {
            width: 68px;
            height: 90px;
            margin-right: 15px;
          }
          p {
            font-size: 14px;
            font-weight: 400;
            display: flex;
            flex-direction: column;
            gap: 10px;
            em {
              color: #666;
              font-size: 13px;
            }
          }
        }
      }
    }
  }
  > article {
    position: relative;
    margin-top: 20px;
    color: #888;
    font-size: 13px;
    display: flex;
    align-items: center;
    em {
      &::before {
        content: '※';
        margin-right: 5px;
        display: inline-block;
      }
    }
  }
}
.show {
  display: flex !important;
}
button.tooltip {
  width: 16px;
  height: 16px;
  margin-left: 5px;
  background-position: 0px -260px;
}

.pay_method {
  .list_wrap {
    .row {
      gap: 30px;
    }
  }
  article {
    padding: 20px 0 0;
    display: none;
    &.active {
      display: block;
    }
    &.method_card {
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          width: 106px;
          height: 95px;
          position: relative;
          input {
            position: absolute;
            z-index: -1;
            opacity: 0;
            &[type='radio']:checked {
              + label {
                border: 1px solid #333;
              }
            }
          }
          label {
            font-size: 12px;
            border: 1px solid transparent;
            text-align: center;
            cursor: pointer;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            &::before {
              content: '';
              height: 50px;
              margin-bottom: 15px;
              padding: 10px 0 0;
              background-image: url('@inmModule/assets/images/common/icon_bank.png');
              background-repeat: no-repeat;
              background-size: 250px;
              background-position: 4px 0px;
              display: block;
            }
          }
          &#cardList_1 {
            label {
              &::before {
                background-position: 4px -60px;
              }
            }
          }
          &#cardList_3 {
            label {
              &::before {
                background-position: -100px -3px;
              }
            }
          }
          &#cardList_4 {
            label {
              &::before {
                background-position: -96px -60px;
              }
            }
          }
          &#cardList_5 {
            label {
              &::before {
                background-position: 4px -120px;
              }
            }
          }
          &#cardList_6 {
            label {
              &::before {
                background-position: -96px -120px;
              }
            }
          }
          &#cardList_7 {
            label {
              &::before {
                background-position: 4px -174px;
              }
            }
          }
          &#cardList_8 {
            label {
              &::before {
                background-position: -96px -174px;
              }
            }
          }
          &#cardList_9 {
            label {
              &::before {
                background-position: 4px -225px;
              }
            }
          }
          &#cardList_10 {
            label {
              &::before {
                background-position: -96px -225px;
              }
            }
          }
          &#cardList_11 {
            label {
              &::before {
                background-position: 4px -280px;
              }
            }
          }
          &#cardList_12 {
            label {
              &::before {
                background-position: -96px -280px;
              }
            }
          }
          &#cardList_13 {
            label {
              &::before {
                background-position: 4px -335px;
              }
            }
          }
          &#cardList_14 {
            label {
              &::before {
                background-position: -96px -335px;
              }
            }
          }
          &#cardList_15 {
            label {
              &::before {
                background-position: 4px -390px;
              }
            }
          }
          &#cardList_16 {
            label {
              &::before {
                background-position: -96px -390px;
              }
            }
          }
          &#cardList_17 {
            label {
              &::before {
                background-position: 4px -444px;
              }
            }
          }
          &#cardList_18 {
            label {
              &::before {
                background-position: -96px -444px;
              }
            }
          }
          &#cardList_19 {
            label {
              &::before {
                background-position: 4px -498px;
              }
            }
          }
          &#cardList_20 {
            label {
              &::before {
                background-position: -96px -498px;
              }
            }
          }
          &#cardList_21 {
            label {
              &::before {
                background-position: 4px -554px;
              }
            }
          }
          &#cardList_22 {
            label {
              &::before {
                background-position: -96px -554px;
              }
            }
          }
          &#cardList_23 {
            label {
              &::before {
                background-position: 4px -608px;
              }
            }
          }
          &#cardList_24 {
            label {
              &::before {
                background-position: -96px -608px;
              }
            }
          }
        }
      }
      > a {
        margin-top: 21px;
        color: #666;
        font-size: 13px;
        text-decoration: underline;
        display: block;
      }
    }
    &.method_onclick {
      > div {
        width: 100%;
        button {
          width: 300px;
          height: 180px;
          margin: 0 auto;
          color: #000;
          font-size: 16px;
          line-height: 1.25;
          border: 1px dashed #dddddd;
          border-radius: 5px;
          background: #f5f5f5;
          display: block;
          span {
            &::before {
              content: '';
              width: 24px;
              height: 25px;
              margin: 0 auto 10px auto;
              background-image: url('@inmModule/assets/images/common/icon_split.png');
              background-repeat: no-repeat;
              background-size: 250px;
              background-position: -9px -138px;
              display: block;
            }
          }
        }
      }
    }
    &.method_other {
      ul {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        li {
          width: 174px;
          height: 83px;
          position: relative;
          &#etcdList_1 {
            span {
              &::before {
                background-position: -66px -695px;
              }
            }
          }
          &#etcdList_2 {
            span {
              &::before {
                background-position: -130px -670px;
              }
            }
          }
          &#etcdList_3 {
            span {
              &::before {
                background-position: -65px -670px;
              }
            }
          }
          &#etcdList_4 {
            span {
              &::before {
                background-position: 0px -720px;
              }
            }
          }
          &#etcdList_5 {
            span {
              &::before {
                background-position: 0px -695px;
              }
            }
          }
          &#etcdList_6 {
            span {
              &::before {
                background-position: -129px -695px;
              }
            }
          }
          input {
            position: absolute;
            z-index: -1;
            opacity: 0;
            &[type='radio']:checked {
              + label {
                border: 3px solid #009d5e;
              }
            }
          }
          label {
            color: #222;
            font-size: 14px;
            border: 1px solid #ddd;
            text-align: center;
            line-height: 22px;
            position: absolute;
            top: -1px;
            right: 0;
            bottom: 0;
            left: -1px;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            span {
              display: flex;
              flex-direction: column;
              align-items: center;
              &::before {
                content: '';
                width: 60px;
                height: 20px;
                background-image: url('@inmModule/assets/images/common/icon_bank.png');
                background-repeat: no-repeat;
                background-size: 250px;
                background-position: -2px -672px;
                text-align: center;
                display: inline-block;
              }
            }
          }
          .discount_txt {
            padding: 3px 8px 4px;
            color: #fff;
            font-size: 10px;
            font-weight: 700;
            background: #1a90fb;
            text-align: center;
            position: absolute;
            left: 5px;
            top: -10px;
            z-index: 10;
            display: block;
            &::after {
              content: '';
              border-top: 6px solid #1b8df7;
              border-left: 6px solid transparent;
              border-right: 6px solid transparent;
              border-bottom: none;
              position: absolute;
              left: 6px;
              bottom: -4px;
              display: inline-block;
            }
          }
          &#etcdList_8,
          &#etcdList_9,
          &#etcdList_10,
          &#etcdList_11 {
            label {
              span {
                &::before {
                  display: none;
                }
              }
            }
          }
        }
      }
      > div {
        > div {
          display: none;
          &.active {
            display: block;
          }
          &.old_card {
            dl {
              padding: 30px 0 20px;
              border-bottom: 1px solid #f5f5f5;
              display: flex;
              align-items: flex-start;
              dt {
                width: 210px;
                color: #333;
              }
              dd {
                width: 100%;
                display: flex;
                align-items: flex-end;
                gap: 30px;
                :deep(label.select) {
                  width: 45%;
                }
                a {
                  color: #222;
                  text-decoration: underline;
                }
              }
            }
          }
          > div {
            ul {
              margin-top: 10px;
              flex-direction: column;
              > * + * {
                margin-top: 5px;
              }
              li {
                width: 100%;
                height: 100%;
              }
            }
            &.discount_info {
              margin-top: 25px;
              padding: 30px;
              border: 1px solid #eee;
              background: #fcfcfd;
              h4 {
                color: #333;
                font-weight: 600;
              }
              ul {
                li {
                  color: #666;
                  font-size: 14px;
                }
              }
            }
            &.notice {
              margin-top: 30px;
              h5 {
                color: #666;
                font-size: 16px;
                font-weight: 600;
              }
              ul {
                li {
                  color: #888;
                  font-size: 13px;
                  &::before {
                    content: '※';
                    margin-right: 10px;
                    display: inline-block;
                  }
                  em {
                    color: #d72137 !important;
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
.tosspay {
  margin: 40px 0 0;
  padding: 20px 0 0;
  border-top: 1px solid #eee;
  button.btn_min_outline {
    margin-top: 15px;
    border-radius: 1px;
    :deep(em) {
      font-size: 12px;
      font-weight: 600;
    }
  }
}

.bullistType_02 {
  display: flex;
  flex-direction: column;
  gap: 10px;
  li {
    color: #888;
    font-size: 13px;
    &::before {
      content: '※';
      margin-right: 10px;
      display: inline-block;
    }
  }
}

.list_wrap {
  ul {
    li {
      div.row {
        :deep(.input_wrap) {
          flex: 0 auto !important;
          label.check {
            > * {
              font-size: 16px !important;
            }
          }
        }
      }
    }
  }
}
</style>
