<template>
  <Button txt="126,000원 결제하기" class="btn_big confirm" />
  <section class="orderer_info">
    <div class="inner">
      <div class="sub_title_wrap">
        <h4>주문자 정보</h4>
        <div class="btn_wrap">
          <Button txt="변경" class="btn_sm change" @click="toggle_btn_02" />
        </div>
      </div>
      <span class="name">김이안</span>
      <em>000-0000-5000</em>
    </div>
    <div class="list_wrap">
      <ul>
        <li>
          <Inputs _type="text" _placeholder="주문자 이름을 입력해주세요." :isError="false" _err_text="주문자 이름을 입력해주세요." />
        </li>
        <li>
          <Inputs _type="text" _placeholder='휴대폰번호 입력("-"제외)' :isError="false" _err_text="주문자 휴대폰번호를 확인해주세요" />
        </li>
        <li>
          <Button txt="변경완료" class="btn_outline" />
        </li>
      </ul>
    </div>
  </section>

  <section class="addr_info">
    <div class="inner">
      <div class="sub_title_wrap">
        <h4>배송지 정보</h4>
        <div class="btn_wrap">
          <Button class="btn_sm" txt="등록/변경" @click="modal.open('ord_addr_change', 'fullMo')" />
        </div>
      </div>
      <article>
        <dl>
          <dt>
            <em>기본 배송지</em>
            <span class="name">김이안</span>
            <i>010-0000-5000</i>
          </dt>
          <dd>(22275) 서울특별시 강서구 리앙에이지</dd>
        </dl>
        <div><Inputs _type="checkbox" _text="안심번호 사용" /><Icons class="tooltip" @click="modal.open('relief_num', 'alert')" /></div>
        <Selectbox
          class="adress_sl"
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
      </article>
    </div>
  </section>

  <section class="order_info">
    <div class="inner">
      <div class="sub_title_wrap">
        <h4>
          주문 제품가격
          <p>3개</p>
        </h4>
      </div>
      <ul>
        <li v-for="(item, idx) in order_info_goods" :key="idx" :class="item.class">
          <div>
            <a href="#none"><img src="/images/sam/36804_l_S_90.png" alt="" /></a>
          </div>
          <dl>
            <dt>
              <span>{{ item.title }}</span>
              <em>{{ item.count }}</em>
              <i v-if="item.date">{{ item.date }}</i>
            </dt>
            <dd>
              <em>{{ item.point }}</em>
              <span>{{ item.price }}</span>
            </dd>
          </dl>
        </li>
      </ul>
      <article>
        <p>
          친환경 종이 완충재로 포장하여 안전하게 보내드립니다.
          <Icons class="tooltip" @click="modal.open('packaging', 'alert')" />
        </p>
        <div class="more_btns">
          <Button class="more_list active" @click="show($event)">
            <span>더보기</span>
          </Button>
          <Button class="more_close" @click="hide($event)">
            <span>닫기</span>
          </Button>
        </div>
      </article>
    </div>
  </section>

  <section class="point">
    <div class="inner">
      <div class="sub_title_wrap">
        <h4>
          쿠폰/포인트
          <Icons class="tooltip" @click="modal.open('coupon_info', 'alert')" />
        </h4>
      </div>
      <dl>
        <dt>
          <span>쿠폰</span>
          <em>0장 적용 가능</em>
        </dt>
        <dd>
          <Selectbox
            :options="[
              { val: 'value', txt: '적용 가능한 쿠폰이 없습니다.' },
              { val: 'value', txt: '옵션02' }
            ]" />
        </dd>
      </dl>
      <dl>
        <dt>
          <span>뷰티포인트</span>
          <em>0 P</em>
        </dt>
        <dd>
          <div class="multi_form">
            <Inputs _type="text" _placeholder="" _value="0P" />
            <Button txt="모두 사용" class="btn_outline" />
          </div>
        </dd>
      </dl>
    </div>
  </section>

  <section class="odgift">
    <div class="inner">
      <div class="sub_title_wrap">
        <h4>
          구매금액대 증정품
          <p>1개</p>
        </h4>
        <Button class="active" @click="toggle_btn"></Button>
      </div>
      <div class="list_wrap">
        <ul class="type_default">
          <li>
            <p>함께 드리는 증정품</p>
            <div class="row">
              <div class="cell pdt_img">
                <a href="#none">
                  <span class="thumb">
                    <em><img src="https://images.innisfree.co.kr/upload/product/36116_l_S_140.jpg?T202404300927" alt="" /></em>
                  </span>
                </a>
              </div>
              <div class="cell pdt_info">
                <em>[특별증정품]</em>
                <h4>UV 액티브 포어리스 션스크린 1mL</h4>
                <div class="cell count">
                  <Quantity _id="sample" quantity="32" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section class="pay_method">
    <div class="inner">
      <div class="sub_title_wrap">
        <h4>결제수단</h4>
        <Button @click="modal.open('notice_modal', 'fullMo notice_modal')">유의사항 안내</Button>
      </div>
      <ul>
        <li v-for="(item, idx) in mo_payment_01" :key="idx">
          <input type="radio" :name="item.name" :id="item.input_id" @change="radioChk = item.change" />
          <label :for="item.label_for">
            <span>{{ item.title }}</span>
            <em v-if="item.benefit" class="method_benefit">{{ item.benefit }}</em>
          </label>
        </li>
      </ul>
      <article class="method_onclick" :class="{ active: radioChk == 'onclick' }">
        <div>
          <Button>
            <span>원클릭 결제 카드등록</span>
          </Button>
        </div>
      </article>
      <article class="method_card" :class="{ active: radioChk == 'card' }">
        <!-- 활성화된 article에 active 클래스 추가 --><!-- [Tip] 라디오버튼이 change되어 변경된 변수값을 확인하여 해당 article에 active 클래스를 활성화 시킴 -->
        <Selectbox
          :options="[
            { val: 'value', txt: '카드사 선택' },
            { val: 'value', txt: '국민' },
            { val: 'value', txt: '하나' }
          ]" />
        <Button @click="modal.open('install', 'fullMo install')">무이자 할부 안내</Button>
        <div>
          <h4>신용카드 결제 혜택</h4>
          <ul class="bul_list dot">
            <li>롯데카드 TOUCH 3만원 결제 시, 5,000원 결제일 할인 (5/9 목 - 5/24 금)</li>
          </ul>
        </div>
      </article>
      <article class="method_other" :class="{ active: radioChk == 'other' }">
        <ul>
          <li v-for="(item, idx) in mo_etc_info" :key="idx" :id="item.li_id" @change="orderChk = item.class">
            <input type="radio" name="etc" :id="item.input_id" :checked="item.checked" />
            <label :for="item.label_for">
              <span>
                {{ item.text }}
                <em class="discount_txt" v-if="item.discont_txt">{{ item.discont_txt }}</em>
              </span>
            </label>
            <i v-if="item.benefit" class="method_benefit">{{ item.benefit }}</i>
          </li>
        </ul>
        <div class="other_cont">
          <div class="toss" :class="{ active: orderChk == 'toss' }">
            <div class="discount_info">
              <h4>토스페이 결제 혜택</h4>
              <ul class="bul_list dot">
                <li>토스 페이로 생애 첫 결제 시 2천원 적립!</li>
                <li>토스 페이로 결제 시(토스로 등록된 신용카드 결제 시 제외)</li>
                <li>토스 전체 가맹점에서 결제 이력이 없는 경우 적용됩니다.(토스 ID당 1회)</li>
                <li>토스페이 결제 화면에서 생애 첫 결제 혜택이 보이지 않을 경우 대상이 아닙니다.</li>
                <li>생애 첫 결제 프로모션은 기타 할인 및 적립 프로모션과 중복으로 적용이 가능합니다.</li>
                <li>관련 문의는 토스 고객센터(1599-4905)로 문의 부탁드립니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
      <ul>
        <li v-for="(item, idx) in mo_payment_02" :key="idx">
          <input type="radio" :name="item.name" :id="item.input_id" @change="radioChk = item.change" />
          <label :for="item.label_for">
            <span>{{ item.title }}</span>
          </label>
          <i v-if="item.benefit" class="method_benefit">{{ item.benefit }}</i>
        </li>
      </ul>
      <article class="old_card" :class="{ active: radioChk == 'oldcard' }">
        <Selectbox
          :options="[
            { val: 'value', txt: '카드사 선택' },
            { val: 'value', txt: '국민' },
            { val: 'value', txt: '하나' }
          ]" />
        <Button>무이자 할부/카드혜택 안내</Button>
        <div>
          <h4>(구)제휴카드 결제 혜택</h4>
          <ul class="bul_list dot">
            <li>[롯데카드]</li>
            <li>기간 : 5/9(목) - 5/24(금)</li>
            <li>TOUCH 후 3만원 이상 결제 시, 5,000원 결제일 할인</li>
          </ul>
        </div>
      </article>
      <Inputs _type="checkbox" _text="선택한 결제수단 다음에도 사용" />
    </div>
  </section>

  <section class="payment">
    <div class="inner">
      <div class="sub_title_wrap">
        <h4>결제 예정 금액</h4>
      </div>
      <ul>
        <li>
          <p>총 상품 금액</p>
          <span><em>0</em>원</span>
        </li>
        <li>
          <p>할인 금액</p>
          <span><i>- 0원</i></span>
        </li>
        <li>
          <p>배송비</p>
          <span><em>2,500</em>원</span>
        </li>
        <li>
          <dl>
            <dt>최종 결제 금액</dt>
            <dd>
              <strong><em>2,500</em>원</strong>
              <p>
                <Icons class="tooltip" @click="modal.open('beauty_point', 'full')" />
                <span>적립 예정 뷰티포인트</span>
                <em><i>0</i>P</em>
              </p>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
  </section>

  <section class="ord_agree">
    <div class="inner">
      <Inputs _type="checkbox" _text="구매 조건 및 결제 진행 동의" />
      <ul class="bul_list dot">
        <li>주문할 제품의 제품명, 제품가격, 배송정보를 확인하였으며, 구매 진행에 동의합니다.(전자상거래법 제8조 제2항)</li>
        <li>미성년자가 체결한 계약은 법정대리인이 동의하지 않는 경우, 본인 또는 법정대리인이 취소할 수 있습니다.</li>
      </ul>
    </div>
  </section>

  <!-- modal -->

  <div class="modal_wrap" id="ord_addr_change">
    <div class="modal_container">
      <div class="modal_header">
        <h2>배송지 등록/변경</h2>
        <Button class="btn_close" @click="modal.close(this)">닫기</Button>
      </div>
      <div class="modal_content">
        <section>
          <Button class="btn_outline" txt="새배송지 추가" @click="modal.open('address_add_modal', 'fullMo')" />
        </section>
        <ul class="adress_wrap">
          <li v-for="(item, idx) in adress_list" :key="idx" class="tab_title" @click="tab_click($event)">
            <dl>
              <dt>
                <span>{{ item.name }}</span>
                <em v-if="item.on">{{ item.on }}</em>
              </dt>
              <dd>
                <Button class="btn_outline btn_sm" txt="수정" @click="modal.open('address_modify_modal', 'fullMo')" />
                <Button class="btn_outline btn_sm" txt="삭제" @click="modal.open('delete_modal', 'alert')" />
              </dd>
            </dl>
            <p>{{ item.tel }}</p>
            <span>{{ item.adress }}</span>
          </li>
        </ul>
        <Inputs _type="checkbox" _text="선택한 배송지를 다음에도 사용" />
      </div>
      <div class="modal_footer">
        <Button txt="배송지 선택" class="btn_big confirm" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <div class="modal_wrap" id="delete_modal">
    <div class="modal_container">
      <div class="modal_header">
        <h2>배송지 삭제</h2>
      </div>
      <div class="modal_content">
        <div>등록된 배송지를 삭제 하시겠습니까?</div>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" />
        <Button class="btn_big" txt="취소" @click="modal.close(this)" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <div class="modal_wrap" id="address_add_modal">
    <div class="modal_container">
      <div class="modal_header">
        <h2>배송지 추가</h2>
        <Button class="btn_close" @click="modal.close(this)">닫기</Button>
      </div>
      <div class="modal_content">
        <section>
          <Inputs _type="text" _placeholder="도로명, 건물명, 번지로 검색해주세요." />
          <article>
            <a href="#none">CU 편의점 찾기</a>
            <a href="#none">GS 편의점 찾기</a>
            <a href="#none">군부대 배송안내<Icons class="tooltip" @click="modal.open('shippingArmyInfo', 'full')" /></a>
          </article>
        </section>
        <div>
          <h3>
            검색결과
            <span>1건</span>
          </h3>
          <div class="res_address_wrap" @click="[setFilter($event), show_hide()]">
            <p>
              <span class="flag">도로명</span>
              서울특별시 강서구 양천로 551-17
            </p>
            <p>
              <span class="flag">지번</span>
              서울특별시 강서구 가양동 449-4ddd
            </p>
            <a href="#none"></a>
          </div>
        </div>
        <ul>
          <li>
            <Inputs _type="text" _placeholder="상세주소" :isError="false" _err_text="상세주소를 입력해주세요." />
            <span class="error">상세주소를 입력해주세요.</span>
          </li>
          <li>
            <Inputs _type="text" _placeholder="배송지명" :isError="false" _err_text="배송지명을 입력해주세요." />
            <span class="error">배송지명을 입력해주세요.</span>
          </li>
          <li>
            <Inputs _type="text" _placeholder="받으시는 분" :isError="false" _err_text="받으시는 분 이름을 입력해주세요." />
            <span class="error">받으시는 분 이름을 입력해주세요.</span>
          </li>
          <li>
            <Inputs _type="text" _placeholder="휴대폰번호 입력('-')제외" :isError="false" _err_text="휴대폰 번호를 확인해주세요." />
            <span class="error">휴대폰 번호를 확인해주세요.</span>
          </li>
          <li class="chk_address">
            <Inputs _type="checkbox" _text="기본배송지 사용" />
          </li>
          <li class="chk_agree">
            <Inputs _type="checkbox" _text="개인정보 수집동의" /><a @click="modal.open('personalinfo', 'fullMo')">자세히보기</a>
          </li>
        </ul>
      </div>
      <div class="modal_footer">
        <Button txt="배송지 등록" class="btn_big confirm" />
      </div>
    </div>
  </div>

  <div class="modal_wrap" id="shippingArmyInfo">
    <div class="modal_container">
      <div class="modal_header">
        <h2>군부대 배송 안내</h2>
        <Button class="btn_close" @click="modal.close(this)">닫기</Button>
      </div>
      <div class="modal_content">
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
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <div class="modal_wrap" id="personalinfo">
    <div class="modal_container">
      <div class="modal_header">
        <h2>개인정보 수집동의</h2>
        <Button class="btn_close" @click="[modal.close(this)]">닫기</Button>
      </div>
      <div class="modal_content">
        <p>㈜이니스프리는 다음과 같이 서비스 제공을 위한 최소한의 이용자의 개인정보를 수집 및 이용하고 있습니다.</p>
        <div class="table_wrap">
          <table>
            <caption>
              개인정보 수집동의
            </caption>
            <colgroup>
              <col style="width: 100px" />
            </colgroup>
            <tbody>
              <tr>
                <th>수집항목</th>
                <td>[필수] 이름(상품수령인), 주소(상품수령지), 휴대폰번호</td>
              </tr>
              <tr>
                <th>수집이용/<br />목적</th>
                <td>
                  배송지 등록 및<br />
                  주문 편의 목적
                </td>
              </tr>
              <tr>
                <th>이용/<br />보유기간</th>
                <td>
                  회원탈외 또는<br />
                  배송지 정보 삭제 시까지
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>※ 귀하는 개인정보 수집 및 이용에 거부할 수 있습니다. 단, 거부하는 경우 제품을 구매 하실 수 없습니다.</p>
      </div>
    </div>
  </div>

  <div class="modal_wrap" id="address_modify_modal">
    <div class="modal_container">
      <div class="modal_header">
        <h2>배송지 수정</h2>
        <Button class="btn_close" @click="modal.close(this)">닫기</Button>
      </div>
      <div class="modal_content">
        <ul>
          <li>
            <Inputs _type="text" _placeholder="배송지명" :isError="false" _err_text="배송지명을 입력해주세요." />
            <span class="error">배송지명을 입력해주세요.</span>
          </li>
          <li>
            <Inputs _type="text" _placeholder="받으시는분" :isError="false" _err_text="배송지명을 받으시는 분 이름을 입력해주세요." />
            <span class="error">받으시는 분 이름을 입력해주세요.</span>
          </li>
          <li>
            <Inputs _type="text" _placeholder="휴대폰번호 입력('-')제외" :isError="false" _err_text="휴대폰 번호를 확인해주세요." />
            <span class="error">휴대폰 번호를 확인해주세요.</span>
          </li>
          <li>
            <div class="multi_form">
              <Inputs _type="text" _placeholder="문구를 입력해주세요" />
              <Button class="btn_outline" txt="주소검색" />
            </div>
            <Inputs _type="text" _placeholder="" />
          </li>
          <li>
            <Inputs _type="text" _placeholder="" :isError="false" _err_text="상세주소를 입력해주세요." />
            <span class="error">상세주소를 입력해주세요.</span>
          </li>

          <li class="chk_army">
            <a href="#none">군부대 배송안내<Icons class="tooltip" @click="modal.open('shippingArmyInfo', 'full')" /></a>
          </li>
          <li class="chk_agree">
            <div>
              <Inputs _type="checkbox" _text="개인정보 수집동의" />
              <a @click="modal.open('personalinfo', 'fullMo')">자세히보기</a>
            </div>
            <span class="error">개인정보 수집에 동의해주셔야 배송지 저장 가능합니다.</span>
          </li>
        </ul>
      </div>
      <div class="modal_footer">
        <Button txt="배송지 등록" class="btn_big confirm" />
      </div>
    </div>
  </div>

  <div class="modal_wrap" id="relief_num">
    <div class="modal_container">
      <div class="modal_header">
        <h2>안심번호 서비스 안내</h2>
        <Button class="btn_close" @click="modal.close(this)">닫기</Button>
      </div>
      <div class="modal_content">
        <p>고객님의 실제 휴대폰번호와 연락처가 노출되지 않도록 1회성 임시번호(050-000-0000)를 제공하는 서비스 입니다.</p>
        <ul class="bul_list dot">
          <li>판매자/택배사에 안심번호로 전달되므로 개인정보 유출을 사전에 방지할 수 있습니다. (택배상자에 안심번호 표시)</li>
          <li>배송완료 후 일정시간이 지나면 안심번호는 자동으로 해제됩니다.</li>
          <li>안심번호 서비스는 LMS/MMS 사용이 불가합니다.</li>
        </ul>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <div class="modal_wrap" id="coupon_info">
    <div class="modal_container">
      <div class="modal_header">
        <h2>사용 가능한 쿠폰 안내</h2>
        <Button class="btn_close" @click="modal.close(this)">닫기</Button>
      </div>
      <div class="modal_content">
        <ul class="bul_list dot">
          <li>쿠폰은 조건에 따라 적용이 되지 않을 수 있습니다.</li>
          <li>쿠폰 사용 후, 최종 결제 금액에 대하여 뷰티포인트가 산정/적립 됩니다. (뷰티포인트 사용분 및 배송비제외)</li>
          <li>
            쿠폰 사용 요건에 따라 사은품이 지급되지 않을 수 있습니다. 최종 주문 완료 후, &lt;마이페이지-주문내역-사은품 목록&gt;에서사은품
            내역을 반드시 확인해주세요.
          </li>
        </ul>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <div class="modal_wrap" id="beauty_point">
    <div class="modal_container">
      <div class="modal_header">
        <h2>뷰티포인트 적립 혜택 안내</h2>
        <Button class="btn_close" @click="modal.close(this)">닫기</Button>
      </div>
      <div class="modal_content">
        <ul class="bul_list dot">
          <li>뷰티포인트는 수취확인 후 <strong>15일 이후</strong>에 적립됩니다.</li>
          <li>아모레퍼시픽 뷰티포인트 비회원인 경우 적립되지 않습니다.</li>
        </ul>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <div class="modal_wrap" id="packaging">
    <div class="modal_container">
      <div class="modal_header">
        <h2>배송 포장재 안내</h2>
        <Button class="btn_close" @click="modal.close(this)">닫기</Button>
      </div>
      <div class="modal_content">
        <p>이니스프리는 환경을 생각하는 마음으로,</p>
        <p>일반 플라스틱 완충제(에어캡) 대신 친환경 종이</p>
        <p>완충제(FSC인증)로 제품을 보호하고 있습니다.</p>
        <div>
          <img src="@inmModule/assets/mo_images/common/packing_img.jpg" alt="" />
        </div>
        <ul class="bul_list dot">
          <li>업체 배송 및 일부 제품 제외</li>
        </ul>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <div class="modal_wrap notice_modal" id="notice_modal">
    <div class="modal_container">
      <div class="modal_header">
        <h2>결제수단 유의사항 안내</h2>
        <Button class="btn_close" @click="modal.close(this)">닫기</Button>
      </div>
      <div class="modal_content">
        <section>
          <Selectbox
            :options="[
              { val: 0, txt: '전체' },
              { val: 1, txt: '신용카드' },
              { val: 2, txt: '원클릭' },
              { val: 3, txt: '애플페이' },
              { val: 4, txt: '네이버페이' },
              { val: 5, txt: '카카오페이' },
              { val: 6, txt: '토스페이' },
              { val: 7, txt: '하나페이' },
              { val: 8, txt: '페이코' },
              { val: 9, txt: '삼성페이' },
              { val: 10, txt: '실시간계좌이체' },
              { val: 11, txt: '무통장입금' },
              { val: 12, txt: '휴대폰결제' },
              { val: 13, txt: '제휴카드(KB,신한,삼성,롯데)' },
              { val: 14, txt: 'KB페이' }
            ]"
            @change="input_change_cont($event)" />
          <p>
            저희 쇼핑몰은 고객님의 안전한 거래를 위해 무통장입금/계좌 이체 거래에 대해 구매안전서비스를 적용하고 있습니다. (결제 금액 5만원
            이상 적용)
          </p>
          <Button>토스페이먼츠 구매안전 서비스 가입확인dd</Button>
        </section>
        <article>
          <div v-for="(item, idx) in mo_ord_notice" :key="idx" :class="item.class" class="active">
            <h5>{{ item.title }}</h5>
            <ul class="bul_list dot" v-if="item.desc">
              <li v-for="(a, idx) in mo_ord_notice[idx].desc" :key="idx">
                {{ a }}
              </li>
            </ul>
          </div>
        </article>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <div class="modal_wrap install" id="install">
    <div class="modal_container">
      <div class="modal_header">
        <h2>무이자 할부 안내</h2>
        <Button class="btn_close" @click="modal.close(this)">닫기</Button>
      </div>
      <div class="modal_content">
        <img src="/images/sam/P01_51_1.png" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
</template>

<script setup>
import { definePageMeta, ref, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-mo-name'
})
import { modal, setFilter } from '@inmModule/assets/js/common-ui'
import {
  adress_list,
  order_info_goods,
  mo_etc_info,
  mo_payment_01,
  mo_payment_02,
  mo_ord_notice
} from '@inmModule/test/data/publish/dummyData'

const radioChk = ref('') //[Tip] 최초의 article에 active 클래스 조건을 맞춰 줄 변수 지정
const orderChk = ref('naver') //[Tip] 최초의 article에 active 클래스 조건을 맞춰 줄 변수 지정

const props = defineProps({
  link: {
    type: String,
    default: '#none'
  }
})

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', '결제')
})

const tab_click = (event) => {
  let tab_title = document.querySelectorAll('.adress_wrap li')
  console.log(tab_title)
  tab_title.forEach((a) => {
    a.classList.remove('active')
  })
  const target = event.currentTarget
  target.classList.add('active')
}

const show_hide = () => {
  let target = document.querySelector('.res_address_wrap')
  target.parentElement.nextElementSibling.classList.toggle('show')
}

const show = (event) => {
  let list = document.querySelectorAll('.order_info ul > li')
  let close_btn = document.querySelector('.more_btns .more_close')
  let more_list = document.querySelector('.more_btns .more_list')
  list.forEach((a, i) => {
    a.classList.add('active')
  })
  more_list.classList.remove('active')
  close_btn.classList.add('active')
}

const hide = (event) => {
  let list = document.querySelectorAll('.order_info ul > li')
  let more_list = document.querySelector('.more_btns .more_list')
  let close_btn = document.querySelector('.more_btns .more_close')
  close_btn.classList.remove('active')
  more_list.classList.add('active')
  list.forEach((a, i) => {
    a.classList.remove('active')
    list[0].classList.add('active')
  })
}

const toggle_btn = (event) => {
  console.log(event.currentTarget)
  event.currentTarget.classList.toggle('active')
  const panel = event.currentTarget.parentNode.nextElementSibling
  console.log(panel)
  const ori_H = panel.childNodes[0].offsetHeight
  console.log(ori_H)

  if (!event.currentTarget.classList.contains('active')) {
    panel.style.height = ori_H + 'px'
    setTimeout(() => {
      panel.style.height = '0px'
      panel.classList.add('hide')
    })
  } else {
    panel.style.height = 0
    panel.classList.remove('hide')
    setTimeout(() => {
      panel.style.height = ori_H + 'px'
    })
  }
}

const toggle_btn_02 = (event) => {
  console.log(event.currentTarget)
  event.currentTarget.classList.toggle('active')
  const panel = event.currentTarget.closest('.inner').nextElementSibling
  console.log(panel)
  const ori_H = panel.childNodes[0].offsetHeight
  console.log(ori_H)

  if (!event.currentTarget.classList.contains('active')) {
    panel.style.height = ori_H + 'px'
    event.currentTarget.innerText = '변경'
    setTimeout(() => {
      panel.style.height = '0px'
      panel.classList.add('hide')
    })
  } else {
    panel.style.height = 0
    event.currentTarget.innerText = '닫기'
    panel.classList.remove('hide')
    setTimeout(() => {
      panel.style.height = ori_H + 'px'
    })
  }
}

const input_change = (event) => {
  let input_box = event.target.closest('.select').nextElementSibling.childNodes[0]
  const input_value = ref(event.target.value)
  if (input_value.value == 5) {
    input_box.classList.add('active')
  } else {
    input_box.classList.remove('active')
  }
}

const input_change_cont = (event) => {
  let cont_box = event.currentTarget.parentNode.nextElementSibling.childNodes
  const input_value = ref(event.target.value)

  for (let i = 1; i < cont_box.length - 1; i++) {
    cont_box[i].classList.remove('active')
  }

  if (input_value.value == 0) {
    //전체 선택이면
    for (let i = 1; i < cont_box.length - 1; i++) {
      cont_box[i].classList.add('active')
    }
  } else {
    cont_box[input_value.value].classList.add('active')
  }
}
</script>

<style lang="scss" scoped>
.inner {
  padding: 0 2.1rem;
}

.more_btns {
  margin-top: 2rem;
  border-top: 0.1rem solid #eeeeee;
  border-bottom: 0.1rem solid #eeeeee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  button {
    padding: 2rem;
    color: #999999;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      &::after {
        content: '';
        width: 1.6rem;
        height: 1.6rem;
        margin-left: 0.5rem;
        background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
        background-repeat: no-repeat;
        background-size: 25rem;
        display: inline-block;
      }
    }
    &.more_list {
      display: none;
      span {
        &::after {
          background-position: -0.5rem -32.8rem;
        }
      }
      &.active {
        display: block;
      }
    }
    &.more_close {
      display: none;
      &.active {
        display: block;
      }
      span {
        &::after {
          background-position: -0.5rem -32.8rem;
          transform: rotate(180deg);
        }
      }
    }
  }
}

.method_benefit {
  width: 2.6rem;
  height: 1.6rem;
  color: #fff;
  font-size: 1rem;
  background-color: #000000;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
}

.other_cont {
  h4 {
    margin-bottom: 1rem;
  }
  > div {
    margin-top: 1rem;
    padding: 1.5rem;
    font-size: 1.2rem;
    background-color: #f5f5f5;
    display: none;
    &.active {
      display: block;
    }
  }
}

:deep(label) {
  &.select {
    div {
      select {
        border-color: #e8e5e2 !important;
      }
    }
  }
}

.btn_big {
  font-size: 1.6rem;
  font-weight: 600;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10;
}
.name {
  color: #333;
  &::after {
    content: '·';
    margin: 0 0.3rem;
    display: inline-block;
  }
}
i {
  font-style: normal;
}
section {
  padding-bottom: 2rem;
  border-bottom: 0.5rem solid #f5f5f5;
  &:last-of-type {
    border-bottom: 0;
  }
  .sub_title_wrap {
    align-items: center;
    h4 {
      display: flex;
      align-items: center;
      p {
        margin-top: 0;
        margin-left: 0.5rem;
        color: #00bc70;
        font-size: 1.6rem;
        font-weight: 600;
      }
    }
    .explain {
      margin-top: 0;
      font-size: 13px;
      font-weight: 400;
    }
    .btn_wrap {
      display: flex;
      :deep(.btn_sm) {
        min-width: 3.4rem;
        background-color: #999999;
        em {
          padding: 0 0.8rem;
          font-size: 1rem;
          font-weight: 600;
        }
      }
    }
  }
  &.orderer_info {
    border-bottom: 0;
    .sub_title_wrap {
      .btn_wrap {
        :deep(.btn_sm) {
          color: #fff;
          font-size: 1rem;
          &.active {
            background-color: #000000;
            color: #fff;
            font-size: 1rem;
          }
        }
      }
    }
    .list_wrap {
      height: 0;
      margin-top: 2rem;
      border-top: 2px solid #f5f5f5;
      transition: all 0.3s;
      overflow: hidden;
      ul {
        padding: 3rem 2.1rem;
        background: #f5f5f5;
        > * {
          margin-bottom: 1rem;
          &:last-of-type {
            margin-bottom: 0;
          }
          & .btn_outline {
            width: 100%;
            background: #fff !important;
          }
        }
      }
    }
    > .name {
      color: #333;
      + em {
        color: #333;
      }
    }
  }
  &.addr_info {
    article {
      dl {
        dt {
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          em {
            height: 1.8rem;
            margin-right: 1rem;
            padding: 0 0.5rem;
            color: #00bc70;
            font-size: 1rem;
            background-color: #e0fbf0;
            line-height: 1.4em;
            display: inline-flex;
            align-items: center;
          }
        }
        dd {
          color: #888888;
        }
        + div {
          margin: 2rem 0;
          display: flex;
          align-items: center;
          :deep(.input_wrap) {
            flex: 0 auto;
          }
        }
      }
      :deep(label.select) {
        > div {
          margin-bottom: 1rem;
        }
      }
      :deep(.label_wrap) {
        display: none;
        &.active {
          display: block;
        }
      }
    }
  }
  &.order_info {
    padding-bottom: 0;
    ul {
      li {
        display: flex;
        &:first-of-type {
          padding-bottom: 2rem;
        }
        div {
          width: 6.9rem;
          height: 9.2rem;
          border-radius: 0.5rem;
          position: relative;
          a {
            &::after {
              content: '';
              width: 100%;
              height: 100%;
              border-radius: 0.5rem;
              background-color: rgba(34, 34, 34, 0.02);
              position: absolute;
              top: 0;
              left: 0;
              z-index: 1;
              overflow: hidden;
            }
          }
        }
        dl {
          margin-left: 1.5rem;
          flex: 1;
          dt {
            display: flex;
            flex-direction: column;
            > * + * {
              margin-top: 0.5rem;
            }
            span {
              word-wrap: break-word;
            }
            em {
              color: #999999;
              font-size: 1.2rem;
            }
            i {
              color: #eb5b54;
              font-size: 1.2rem;
            }
          }
          dd {
            margin-top: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            em {
              margin-right: 0.5rem;
              color: #009d5e;
              font-size: 1.2rem;
            }
            span {
              font-size: 1.6rem;
              font-weight: 600;
            }
          }
        }
      }
      > * + * {
        padding: 2rem 0;
        border-top: 0.1rem solid #f5f5f5;
        display: none !important;
        &.active {
          display: flex !important;
        }
      }
    }
    article {
      > p {
        padding: 1.5rem 0;
        color: #666666;
        font-size: 1.2rem;
        border: 0.1rem solid #eeeeee;
        display: flex;
        align-items: center;
        justify-content: center;
        button {
          margin-left: 0.5rem;
        }
      }
    }
  }
  &.point {
    .sub_title_wrap {
      justify-content: flex-start;
      .tooltip {
        margin-left: 1rem;
      }
    }
    > .inner > * + * {
      margin-top: 2rem;
      padding-bottom: 2rem;
      border-bottom: 0.1rem solid #f5f5f5;
    }
    dl {
      dt {
        font-size: 1.3rem;
        span {
          color: #666666;
        }
        em {
          margin-left: 0.5rem;
          color: #00bc70;
        }
      }
      dd {
        margin-top: 1rem;
        .multi_form {
          :deep(.input_wrap) {
            .label_wrap {
              label {
                color: #999;
                font-weight: 600;
                input {
                  text-align: right;
                }
              }
            }
          }
        }
      }
    }
  }
  &.odgift {
    .sub_title_wrap {
      > button {
        width: 1.6rem;
        height: 1.6rem;
        background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
        background-repeat: no-repeat;
        background-size: 25rem;
        background-position: 0px -73px;
        display: inline-block;
        transform: rotate(0deg);
        transition: all 0.5s;
        &.active {
          transform: rotate(180deg);
        }
      }
    }
    .list_wrap {
      border: 0.1rem solid #eeeeee;
      transition: height 0.3s ease-out;
      overflow: hidden;
      &.hide {
        border: 0;
      }
      > ul {
        padding: 1.5rem;
        border: 0;
        > li {
          > p {
            color: #999999;
            font-size: 1.2rem;
          }
          .row {
            margin-top: 1rem;
            margin-bottom: 0 !important;
            display: flex;
            .pdt_img {
              width: 3.6rem;
              height: 4.8rem;
              background-color: #f5f5f5;
            }
            .pdt_info {
              padding-left: 1rem;
              flex: 1 auto;
              > * + * {
                margin-top: 0.5rem;
              }
              em {
                color: #999;
                font-size: 1.2rem;
              }
              h4 {
                font-size: 1.3rem;
                font-weight: normal;
              }
              .count {
                flex-direction: row;
              }
            }
          }
        }
      }
    }
  }
  &.pay_method {
    .inner {
      .sub_title_wrap {
        button {
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          &::after {
            content: '';
            width: 1.6rem;
            height: 1.6rem;
            margin-left: 0.5rem;
            background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
            background-repeat: no-repeat;
            background-size: 25rem;
            background-position: -1px -73px;
            display: inline-block;
            transform: rotate(270deg);
          }
        }
      }
      > ul {
        &:first-of-type {
          margin-bottom: 0.5rem;
        }
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        li {
          width: 32.333%;
          position: relative;

          input {
            position: absolute;
            z-index: -1;
            opacity: 0;
            &[type='radio']:checked {
              + label {
                color: #fff;
                background-color: #00bc70;
                border: 0;
              }
            }
            &#etcdList4 {
              + label {
                span {
                  display: flex;
                  align-items: center;
                  &::before {
                    content: '';
                    width: 5.2rem;
                    height: 2.6rem;
                    margin-right: 0.5rem;
                    background-image: url('@inmModule/assets/images/common/icon_bank.png');
                    background-repeat: no-repeat;
                    background-size: 25rem;
                    background-position: -7rem -69rem;
                    display: inline-block;
                  }
                }
              }
            }
          }
          label {
            width: 100%;
            height: 6rem;
            color: #333333;
            font-size: 1.3rem;
            border: 0.1rem solid #eeeeee;
            background: #fff;
            box-sizing: border-box;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
      article {
        margin: 0.5rem 0;
        display: none;
        &.active {
          display: block;
        }
        &.method_onclick {
          margin-top: 1rem;
          > div {
            width: 100%;
            button {
              width: 27.3rem;
              height: 14.8rem;
              margin: 0 auto;
              color: #000;
              font-size: 1.4rem;
              line-height: 1.25;
              border: 0.1rem dashed #dddddd;
              border-radius: 0.5rem;
              background: #f5f5f5;
              display: block;
              span {
                &::before {
                  content: '';
                  width: 2.4rem;
                  height: 2.5rem;
                  margin: 0 auto 1rem auto;
                  background-image: url('@inmModule/assets/images/common/icon_split.png');
                  background-repeat: no-repeat;
                  background-size: 25rem;
                  background-position: -0.9rem -13.8rem;
                  display: block;
                }
              }
            }
          }
        }
        &.method_card,
        &.old_card {
          > * + * {
            margin-top: 1rem;
          }
          button {
            width: 100%;
            color: #999;
            font-size: 1.2rem;
            display: flex;
            justify-content: flex-end;
            gap: 0.5rem;
            &::after {
              content: '';
              width: 1.6rem;
              height: 1.6rem;
              background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
              background-repeat: no-repeat;
              background-size: 25rem;
              background-position: -23rem 0rem;
              display: block;
            }
          }
          > div {
            padding: 1.5rem;
            font-size: 1.2rem;
            background: #f5f5f5;
            h4 {
              margin-bottom: 1rem;
              color: #333333;
              font-weight: 600;
            }
          }
        }
        &.method_other {
          > ul {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            li {
              width: calc(50% - 0.3rem);
              height: 6rem;
              padding: 1rem;
              position: relative;
              &#etc_1 {
                span {
                  &::before {
                    background-position: -66px -695px;
                  }
                }
              }
              &#etc_2 {
                span {
                  &::before {
                    background-position: -130px -670px;
                  }
                }
              }
              &#etc_3 {
                span {
                  &::before {
                    background-position: -65px -670px;
                  }
                }
              }
              &#etc_4 {
                span {
                  &::before {
                    background-position: 0px -720px;
                  }
                }
              }
              &#etc_5 {
                span {
                  &::before {
                    background-position: 0px -695px;
                  }
                }
              }
              &#etc_6 {
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
                  margin-left: -1rem;
                  position: relative;
                  display: flex;
                  align-items: center;
                  gap: 1rem;
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
                  em {
                    color: #009d5e;
                    font-size: 1rem;
                    position: absolute;
                    bottom: -12px;
                    right: 0;
                  }
                }
              }
            }
          }
        }
        &.old_card {
          + div {
            margin-top: 2rem;
          }
        }
      }
    }
  }
  &.payment {
    ul {
      > * + * {
        margin-top: 1.5rem;
      }
      li {
        width: 100%;
        display: flex;
        justify-content: space-between;
        p {
          color: #666;
        }
        span {
          i {
            color: #ff0000;
            font-style: normal;
          }
          em {
            font-weight: 500;
          }
        }
        dl {
          width: 100%;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 0.1rem solid #eeeeee;
          display: flex;
          justify-content: space-between;
          dt {
            color: #333;
            font-weight: 600;
          }
          dd {
            text-align: right;
            strong {
              em {
                font-size: 2rem;
                font-weight: 600;
              }
            }
            p {
              margin-top: 0.4rem;
              color: #999999;
              font-size: 1.2rem;
              display: flex;
              align-items: center;
              button {
                margin-right: 0.5rem;
              }
              em {
                color: #009d5e;
                font-weight: 400;
                font-size: 1.2rem;
                i {
                  margin: 0 0.3rem;
                  font-style: normal;
                }
              }
            }
          }
        }
      }
    }
  }

  &.ord_agree {
    padding-top: 3rem;
    :deep(.input_wrap) {
      .check {
        em {
          font-weight: 300;
        }
      }
    }
    ul {
      margin-top: 2rem;
      color: #888;
      font-size: 1.2rem;
    }
  }
}

.modal_wrap {
  top: -1px;
  right: -1px;
  bottom: -1px;
  left: -1px;
  .chk_agree {
    > div {
      display: flex;
      :deep(.input_wrap) {
        flex: 0 auto;
      }
    }
  }
  &#ord_addr_change {
    .modal_container {
      .modal_content {
        overflow-x: hidden;
        section {
          padding: 0rem 2.1rem 3rem;
          border-bottom: 0.5rem solid #f5f5f5;
          > button {
            width: 100%;
            margin-top: 2rem;
            vertical-align: middle;
            &.btn_outline {
              display: flex;
              align-items: center;
              :deep(em) {
                font-size: 1.3rem;
                display: flex;
                align-items: center;
                &::before {
                  content: '';
                  width: 16px;
                  height: 16px;
                  margin-right: 1rem;
                  background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
                  background-repeat: no-repeat;
                  background-size: 250px;
                  background-position: -228px -98px;
                  display: inline-block;
                }
              }
            }
          }
        }
        > ul {
          margin-top: 1rem;
          padding: 2rem;
          > * + * {
            margin-top: 1rem;
          }
          li {
            padding: 2.5rem 2.1rem;
            border: 0.1rem solid #eeeeee;
            &.active {
              border: 0.2rem solid #00bc70;
            }
            > dl {
              display: flex;
              align-items: center;
              justify-content: space-between;
              + p {
                margin: 1rem 0 0.5rem;
              }

              dt {
                display: flex;
                align-items: center;
                span {
                  margin-right: 1rem;
                  color: #000;
                  font-size: 1.6rem;
                  font-weight: 600;
                }
                em {
                  padding: 0.3rem;
                  color: #00bc70;
                  font-size: 1rem;
                  background: #e0fbf0;
                }
              }
              dd {
                display: flex;
                gap: 8px;
                :deep(button.btn_outline) {
                  border: 0.1rem solid #999 !important;
                  em {
                    padding: 0 1rem;
                    color: #999;
                    font-size: 1rem;
                    font-weight: 600;
                  }
                }
              }
            }
            p {
              color: #999;
              font-size: 1.3rem;
            }
            span {
              color: #666;
              font-size: 1.4rem;
            }
          }
        }
        .input_wrap {
          padding: 0 2rem;
        }
      }
      .modal_footer {
        padding: 0;
        .btn_big {
          width: 100%;
          background: #12b560;
          &.confirm {
            em {
            }
          }
        }
      }
    }
  }
  &#delete_modal {
    .modal_container {
      .modal_header {
        padding: 3rem 2rem 1rem 2rem;
        border-bottom: 0;
        h2 {
          font-size: 1.8rem;
        }
      }
      .modal_content {
        padding: 2rem 3rem 3rem 2rem;
        text-align: center;
      }
    }
  }
  &#address_modify_modal {
    .modal_container {
      .modal_content {
        overflow: hidden;
        > ul {
          margin-left: -2.1rem;
          margin-right: -2.1rem;
          padding: 3rem 4rem;
          > * + * {
            margin-top: 0.8rem;
          }
          li {
            font-size: 1.3rem;
            > * + * {
              margin-top: 0.8rem;
            }
            &.chk_army {
              margin-top: 1.5rem;
              a {
                display: flex;
                align-items: center;
                justify-content: flex-end;
              }
            }
            &:last-of-type {
              margin-top: 1.5rem;
              display: flex;
              flex-direction: column;

              a {
                margin-left: 1rem;
                text-decoration: underline;
              }
            }
            > .multi_form {
              height: 100%;
              align-items: center;
              gap: 0.5rem;
              :deep(.input_wrap) {
                flex: 1;
              }
              .btn_outline {
                display: block;
              }
              + .label_wrap {
                margin-top: 0.8rem;
              }
            }
            > .error {
              margin-top: 1rem;
              color: #ff0000;
              font-size: 1.2rem;
              display: block;
            }
          }
        }
      }
      .modal_footer {
        padding: 0;
        .btn_big {
          width: 100%;
        }
      }
    }
  }
  &#address_add_modal {
    .modal_container {
      .modal_content {
        overflow: hidden;
        > section {
          margin-left: -2.1rem;
          margin-right: -2.1rem;
          padding: 2rem 4rem 1.5rem;
          border-bottom: 0.5rem solid #f5f5f5;
          :deep(div.label_wrap) {
            &::after {
              content: '';
              width: 2.4rem;
              height: 2.4rem;
              background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
              background-repeat: no-repeat;
              background-position: 0 -40px;
              background-size: 250px;
              position: absolute;
              top: 50%;
              right: 2.1rem;
              display: inline-block;
              transform: translateY(-50%);
            }
          }
          article {
            display: flex;
            a {
              margin: 1.5rem 0rem;
              font-size: 1.3rem;
              display: flex;
              align-content: center;
              &::after {
                content: '';
                width: 0.1rem;
                height: 1.4rem;
                margin: 0 1.5rem;
                background-color: #eeeeee;
                display: block;
              }
              &:last-of-type {
                &::after {
                  display: none;
                }
              }
            }
          }
        }
        > div {
          margin-left: -2.1rem;
          margin-right: -2.1rem;
          padding: 2.5rem 2.1rem 2rem;
          border-bottom: 0.1rem solid #f5f5f5;
          position: relative;
          a {
            width: 1.6rem;
            height: 1.6rem;
            background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
            background-repeat: no-repeat;
            background-position: -1px -70px;
            background-size: 250px;
            position: absolute;
            bottom: 2rem;
            right: 4rem;
            display: inline-block;
            transition: all 0.2s;
            transform: rotate(0deg);
          }
          h3 {
            margin-left: -2.1rem;
            margin-right: -2.1rem;
            padding: 0 4rem 2.5rem;
            font-size: 1.6rem;
            border-bottom: 0.1rem solid #f5f5f5;
            display: flex;
            align-items: center;
            > span {
              margin-left: 1rem;
              color: #00bc70;
              font-size: 1.3rem;
            }
          }
          .res_address_wrap {
            margin-top: 2.5rem;
            > * + * {
              margin-top: 0.8rem;
            }
            p {
              padding: 0 2.1rem;
              display: flex;
              align-items: center;
              gap: 1rem;
              span {
                width: 3.6rem;
                height: 1.6rem;
                color: #666;
                font-size: 1rem;
                background: #eee;
                text-align: center;
                display: inline-block;
              }
            }
            &.active {
              a {
                transform: rotate(180deg);
              }
            }
          }
        }
        > ul {
          margin-left: -2.1rem;
          margin-right: -2.1rem;
          padding: 2.5rem 4rem 2rem;
          background: #f5f5f5;
          display: none;
          &.show {
            display: block;
          }
          > * + * {
            margin-top: 0.8rem;
          }
          li {
            font-size: 1.3rem;
            &.chk_address {
              margin-top: 1.5rem;
            }
            &:last-of-type {
              margin-top: 1.5rem;
              display: flex;
              align-items: center;
              a {
                margin-left: 1rem;
                text-decoration: underline;
              }
            }
            > .error {
              margin-top: 1rem;
              color: #ff0000;
              font-size: 1.2rem;
              display: block;
            }
          }
        }
      }
      .modal_footer {
        padding: 0;
        button.btn_big {
          width: 100%;
        }
      }
    }
  }
  &#shippingArmyInfo {
    z-index: 20;
    .modal_container {
      .modal_header {
        border-bottom: 0;
        h2 {
          padding-top: 1.5rem;
          font-size: 1.8rem;
        }
      }
      .modal_content {
        padding: 0px 20px 30px;
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
  &#personalinfo {
    z-index: 20;
    .modal_container {
      padding: 3rem 2rem 3rem 2rem;
      .modal_header {
        padding: 0;
      }
      .modal_content {
        padding-top: 3rem;
        p {
          color: #222;
          font-size: 1.3rem;
        }
        .table_wrap {
          margin: 2rem 0;
          table {
            caption {
              display: none;
            }

            tbody {
              tr {
                &:first-of-type {
                  th {
                    border-top: 0.1rem solid #999;
                  }
                  td {
                    border-top: 0.1rem solid #999;
                  }
                }
                &:last-of-type {
                  td {
                    color: #ff3131;
                  }
                }
                > * {
                  text-align: left;
                }
                th {
                  padding: 1.1rem 1rem;
                  color: #666;
                  font-weight: normal;
                  font-size: 1.2rem;
                  border-bottom: 0.1rem solid #eee;
                  background: #f5f5f5;
                }
                td {
                  padding: 1.5rem 1rem;
                  color: #777777;
                  font-size: 1.3rem;
                  border-left: 0.1rem solid #eee;
                  border-bottom: 0.1rem solid #eee;
                }
              }
            }
          }
        }
      }
    }
  }
  &#relief_num,
  &#coupon_info,
  &#beauty_point,
  &#packaging {
    .modal_container {
      width: 32.3rem;
      .modal_header {
        border-bottom: 0;
        h2 {
          font-size: 1.8rem;
        }
      }
      .modal_content {
        padding: 1rem 2rem 3rem;
        color: #666;
        p {
          font-size: 1.3rem;
          line-height: 2rem;
        }
        ul {
          margin-top: 1rem;
          font-size: 1.2rem;
          li {
            line-height: 1.6rem;
          }
        }
        div {
          width: 24rem;
          margin: 0 auto;
        }
      }
    }
  }
  &.notice_modal {
    .modal_container {
      .modal_header {
      }
      .modal_content {
        padding: 2.1rem;
        section {
          margin-left: -2.1rem;
          margin-right: -2.1rem;
          padding: 0 2.1rem 2.5rem;
          border-bottom: 0.5rem solid #f5f5f5;
          :deep(label) {
            &.select {
              div {
                select {
                  border-color: #000 !important;
                }
              }
            }
          }
          p {
            margin: 2rem 0 1rem;
            color: #333;
            font-size: 1.3rem;
            line-height: 1.35;
          }
          button {
            color: #aaaaaa;
            font-size: 1.2rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            &::after {
              content: '';
              width: 1.6rem;
              height: 1.6rem;
              background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
              background-repeat: no-repeat;
              background-size: 25rem;
              background-position: -23rem 0.1rem;
            }
          }
        }
        article {
          padding: 3rem 0;
          div {
            display: none;
            &.active {
              display: block;
            }
            h5 {
              margin-bottom: 1.5rem;
              padding-bottom: 1rem;
              color: #000000;
              font-size: 1.6rem;
              font-weight: 600;
              border-bottom: 0.1rem solid #000000;
            }
            ul {
              margin-bottom: 1.5rem;
              color: #666;
              font-size: 1.3rem;
            }
            &.active {
              display: block;
            }
          }
        }
      }
      .modal_footer {
        padding: 0;
        button {
          width: 100%;
        }
      }
    }
  }
}
</style>
