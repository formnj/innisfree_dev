<template>
  <section>
    <h2>Inputs</h2>
    <div class="dimmed">
      <ul class="explain">
        <li>round_square : checkbox, radio 사용 가능</li>
      </ul>
      <ul class="toolbar">
        <li>
          <button class="current" @click="tool_select('text')">Text</button>
        </li>
        <li><button @click="tool_select('text_err')">Text Error</button></li>
        <li><button @click="tool_select('error')">Error Message</button></li>
        <li><button @click="tool_select('pw')">Password</button></li>
        <li><button @click="tool_select('check')">Checkbox</button></li>
        <li><button @click="tool_select('check2')">Checkbox02</button></li>
        <li><button @click="tool_select('check3')">Round_square</button></li>
        <li><button @click="tool_select('radio')">Radio</button></li>
        <li><button @click="tool_select('isswitch')">Switch</button></li>
      </ul>
      <div class="design_box">
        <Inputs
          :_type="input_opt.type"
          :isswitch="input_opt.isswitch"
          :_placeholder="input_opt.Placeholder"
          _text="Label"
          :isDisabled="_disabled"
          :isError="input_opt.isError"
          :_err_text="input_opt.err_text"
          :class="input_opt.class" />
      </div>
      <pre class="code_box"><code>&lt;Inputs {{ input_opt.opt }} /&gt;</code></pre>
    </div>
  </section>

  <section>
    <h2>Input Error</h2>
    <div class="design_box">
      <InputValidation :is-error="true" err-text="입력해주세요">
        <Inputs :_type="text" />
      </InputValidation>
    </div>
    <pre class="code_box"><code>&lt;InputValidation :is-error="true" err-text="입력해주세요"&gt;
  &lt;Inputs :_type="text" /&gt;
&lt;/InputValidation&gt;
    </code></pre>
  </section>

  <section>
    <h2>Textarea</h2>
    <div class="dimmed">
      <div class="design_box">
        <Textarea _placeholder="문구를 입력해주세요." />
      </div>
      <pre class="code_box"><code>&lt;Textarea _placeholder="문구를 입력해주세요." /&gt;</code></pre>
    </div>
  </section>

  <section>
    <h2>Select</h2>
    <div class="dimmed">
      <ul class="explain">
        <li>Error 처리 : isError="true"</li>
        <li>Error 문구 : _err_text</li>
      </ul>
      <div class="design_box">
        <Selectbox
          :isError="true"
          _err_text="Error"
          :options="[
            { val: 'value', txt: '옵션01' },
            { val: 'value', txt: '옵션02' }
          ]" />
      </div>
      <pre class="code_box"><code>&lt;Selectbox
      :isError="true" _err_text="에러문구"
      :options="{{ select_opt }}" /&gt;</code></pre>
    </div>
  </section>

  <section>
    <h2>Button</h2>
    <ul class="explain">
      <li>
        클래스 규칙 : btn_크기_타입(보더유무)<br />
        ex) &lt;Button class="btn_big_outline" /&gt;]
      </li>
      <li>size : default = 40 / [_big] = 60 / [_mid] = 50 / [_min] = 30</li>
    </ul>
    <div class="design_box">
      <div class="multi_form">
        <Button class="btn_big" txt="btn_big (60px)sss" />

        <Button class="btn_mid" txt="btn_mid (50px)" />

        <Button txt="default (40px)" />

        <Button txt="disabled" disabled />

        <Button class="btn_min" txt="btn_min (30px)" />

        <Button class="btn_sm" txt="btn_sm (24px)" />

        <Button class="btn_big_outline" txt="btn_big_outline (60px)" />

        <Button class="btn_mid_outline" txt="btn_mid_outline (50px)" />

        <Button class="btn_outline" txt="btn_outline (40px)" />

        <Button class="btn_min_outline" txt="btn_min_outline (30px)" />

        <Button class="btn_sm_outline" txt="btn_sm_outline (24px)" />
        <Button class="btn_ confirm" txt="confirm" />
      </div>
    </div>
    <pre class="code_box"><code>&lt;Button /&gt;</code></pre>
  </section>

  <section>
    <h2>Icons</h2>
    <ul class="explain">
      <li>아이콘 버튼으로 style은 pc베이스로 잡고, 모바일 스타일은 mobile.scss에 선언.</li>
    </ul>
    <div class="design_box" style="background-color: #fff; display: flex; gap: 10px; align-items: center">
      <Icons class="header_zzim" />
      <Icons class="mypage" />
      <Icons class="delivery" />
      <Icons class="pc_cart" txt="5" />
      <Icons class="mo_cart" txt="5" />
      <Icons class="home" />
      <Icons class="share" />
      <Icons class="back" />
      <Icons class="btn_search" />
      <Icons class="barcode" />
      <Icons class="alarm" />
      <Icons class="tooltip" />
      <Icons class="del" />
    </div>
    <pre class="code_box"><code>&lt;Icons class="tooltip" /&gt;
&lt;Icons class="del" /&gt;
&lt;Icons class="header_zzim" /&gt;
&lt;Icons class="mypage" /&gt;
&lt;Icons class="delivery" /&gt;
&lt;Icons class="pc_cart" txt="5" /&gt;
&lt;Icons class="mo_cart" txt="5" /&gt;
&lt;Icons class="home" /&gt;
&lt;Icons class="share" /&gt;
&lt;Icons class="back" /&gt;
&lt;Icons class="btn_search" /&gt;
&lt;Icons class="barcode" /&gt;
&lt;Icons class="alarm" /&gt;
&lt;Icons class="tooltip" /&gt;
&lt;Icons class="del" /&gt;</code></pre>
  </section>

  <section>
    <h2>Nav Gnb</h2>
    <ul class="explain">
      <li>item 데이터 추가 :item="[{ tit: '', url: '', admChk: true, active: true }]"</li>
      <li>active - active class 추가</li>
      <li>admChk - dot class 추가</li>
    </ul>
    <div class="design_box">
      <NavGnb
        :item="[
          { tit: 'txt01', url: '#none' },
          { tit: 'txt02', url: '#none', active: true },
          { tit: 'txt03', url: '#none', admChk: true },
          { tit: 'txt04', url: '#none', admChk: true, active: true }
        ]" />
    </div>
    <pre class="code_box"><code>&lt;NavGnb :item="item" /&gt;</code></pre>
  </section>

  <section>
    <h2>Multi form</h2>
    <div class="design_box">
      <ul class="form_group">
        <li>
          <p class="form_tit">Input + Button</p>
          <div class="multi_form">
            <Inputs _type="text" _placeholder="문구를 입력해주세요" />
            <Button />
          </div>
        </li>
        <li>
          <p class="form_tit">Input + Input</p>
          <div class="multi_form">
            <Inputs _type="text" _placeholder="문구를 입력해주세요" />
            <Inputs _type="text" _placeholder="문구를 입력해주세요" />
          </div>
        </li>
      </ul>
    </div>
    <pre class="code_box"><code>&lt;div class="multi_form"&gt;
    &lt;Inputs _type="text" _placeholder="문구를 입력해주세요" /&gt;
    &lt;Inputs _type="text" _placeholder="문구를 입력해주세요" /&gt;
&lt;/div&gt;</code></pre>
  </section>

  <section>
    <h2>Goods Item - default</h2>
    <ul class="explain">
      <li>sold out, coming soon = status:'sold_out' or 'coming_soon' or 'end'</li>
      <li>
        Props<br />useMark(마크/스티커 사용여부, default:true)<br />useHas(해시태그 사용여부, default:false)<br />useScore(별점 사용여부,
        default:true)<br />useGiveaway(증정품 사용여부, default:false)<br />useBigmark(대용량 마크 사용여부, default:true)
      </li>
      <li>class<br />type_column, type_cart</li>
      <li>기준 : 기획서 PC, MO 제품목록 참고</li>
    </ul>
    <div class="design_box">
      <div class="list_wrap">
        <h3>pc</h3>
        <ul class="goods_list">
          <li v-for="(item, idx) in sample_goods.slice(0, 2)" :key="idx">
            <GoodsItem :item="item" :link="item.link" />
          </li>
          <li v-for="(item, idx) in sample_goods.slice(3, 6)" :key="idx">
            <GoodsItem :item="item" :link="item.link" />
          </li>
        </ul>
        <h3 style="margin-top: 40px">mobile</h3>
        <ul class="goods_list mobile" style="width: 100%">
          <li v-for="(item, idx) in sample_goods.slice(0, 2)" :key="idx">
            <GoodsItem :item="item" :link="item.link" />
          </li>
          <li v-for="(item, idx) in sample_goods.slice(3, 6)" :key="idx">
            <GoodsItem :item="item" :link="item.link" />
          </li>
        </ul>
      </div>
    </div>
    <pre class="code_box"><code>&lt;div class="list_wrap"&gt;
    &lt;ul class="goods_list"&gt;
        &lt;li v-for="(item, idx) in sample_goods" :key="idx"&gt;
            &lt;GoodsItem :item="item" :link="item.link" /&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code></pre>
  </section>

  <section>
    <h2>Goods Item - useHash</h2>
    <ul class="explain">
      <li>:useHash="true", default는 false(그 외 props는 default형 설명 참고)</li>
    </ul>
    <div class="design_box" style="display: flex">
      <div class="list_wrap">
        <ul class="goods_list">
          <li v-for="(item, idx) in sample_goods.slice(0, 1)" :key="idx">
            <GoodsItem :item="item" :link="item.link" :useHash="true" />
          </li>
        </ul>
      </div>
      <div class="list_wrap mobile">
        <ul class="goods_list">
          <li v-for="(item, idx) in sample_goods.slice(0, 1)" :key="idx">
            <GoodsItem :item="item" :link="item.link" :useHash="true" />
          </li>
        </ul>
      </div>
    </div>
    <pre class="code_box"><code>&lt;div class="list_wrap"&gt;
    &lt;ul class="goods_list"&gt;
        &lt;li v-for="(item, idx) in sample_goods" :key="idx"&gt;
            &lt;GoodsItem :item="item" :link="item.link" :useHash="true" /&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code></pre>
  </section>

  <section>
    <h2>Goods Item - useGiveaway</h2>
    <ul class="explain">
      <li>:useGiveaway="true", default는 false(그 외 props는 default형 설명 참고)</li>
    </ul>
    <div class="design_box" style="display: flex; gap: 20px">
      <div class="list_wrap">
        <ul class="goods_list">
          <li v-for="(item, idx) in sample_goods.slice(0, 1)" :key="idx">
            <GoodsItem :item="item" :link="item.link" :useGiveaway="true" />
          </li>
        </ul>
      </div>
      <div class="list_wrap mobile">
        <ul class="goods_list">
          <li v-for="(item, idx) in sample_goods.slice(0, 1)" :key="idx">
            <GoodsItem :item="item" :link="item.link" :useGiveaway="true" />
          </li>
        </ul>
      </div>
    </div>
    <pre class="code_box"><code>&lt;div class="list_wrap"&gt;
    &lt;ul class="goods_list"&gt;
        &lt;li v-for="(item, idx) in sample_goods" :key="idx"&gt;
            &lt;GoodsItem :item="item" :link="item.link" :useGiveaway="true" /&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code></pre>
  </section>

  <section>
    <h2>Sticker(마크)</h2>
    <div class="design_box">
      <div v-for="(item, idx) in sample_goods.slice(0, 1)" :key="idx">
        <Sticker :item="item.sticker" />
      </div>
    </div>
    <pre class="code_box"><code>&lt;Sticker :item="item" /&gt;</code></pre>
  </section>

  <section>
    <h2>Hash(해시태그)</h2>
    <div class="design_box">
      <div v-for="(item, idx) in sample_goods.slice(0, 1)" :key="idx">
        <Hash :item="item.hash" />
      </div>
    </div>
    <pre class="code_box"><code>&lt;Hash :item="item" /&gt;</code></pre>
  </section>

  <section>
    <h2>Event Item</h2>
    <div class="design_box">
      <div class="list_wrap">
        <ul class="event_list">
          <li v-for="(item, idx) in sample_event.slice(0, 3)" :key="idx">
            <EventItem :item="item" :link="item.link" />
          </li>
        </ul>
      </div>
    </div>
    <pre class="code_box"><code>&lt;div class="list_wrap"&gt;
    &lt;ul class="event_list"&gt;
        &lt;li v-for="(item, idx) in sample_event" :key="idx"&gt;
            &lt;EventItem :item="item" :link="item.link" /&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code></pre>
  </section>

  <section>
    <h2>Shopping Log</h2>
    <ul class="explain">
      <li>쇼핑로그 영역 전체</li>
      <li>limit="노출 갯수", limit 사용하지 않을 경우 전체 노출</li>
    </ul>
    <div class="design_box" style="width: 500px">
      <ShoppingLogList limit="2" />
    </div>
    <pre class="code_box"><code>&lt;ShoppingLogList /&gt;
    </code></pre>
  </section>

  <section>
    <h2>Quantity count</h2>
    <div class="dimmed">
      <ul class="explain">
        <li>quantity : 초기 input 값</li>
      </ul>
      <div class="design_box">
        <div style="width: 160px">
          <Quantity _id="sample" quantity="32" />
        </div>
      </div>
      <pre class="code_box"><code>&lt;Quantity _id="아이디" quantity="초기 input value" /&gt;</code></pre>
    </div>
  </section>

  <section>
    <h2>Cart Item - default</h2>
    <ul class="explain">
      <li>PC default 버전</li>
    </ul>
    <div class="design_box">
      <div class="list_wrap">
        <ul class="cart_list">
          <li v-for="(item, idx) in sample_goods.slice(0, 4)" :key="idx">
            <CartItem :item="item" />
          </li>
        </ul>
      </div>
    </div>
    <pre class="code_box"><code>&lt;div class="list_wrap"&gt;
  &lt;ul class="cart_list"&gt;
    &lt;li v-for="(item, idx) in sample_goods.slice(0, 4)" :key="idx"&gt;
      &lt;CartItem :item="item" /&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</code></pre>
  </section>

  <section>
    <h2>Cart Item - MO</h2>
    <ul class="explain">
      <li>MO default 버전</li>
    </ul>
    <div class="design_box">
      <div class="list_wrap mobile">
        <ul class="cart_list">
          <li v-for="(item, idx) in sample_goods.slice(0, 4)" :key="idx">
            <CartItem :item="item" :is-mo="true" />
          </li>
        </ul>
      </div>
    </div>
    <pre class="code_box"><code>&lt;div class="list_wrap"&gt;
  &lt;ul class="cart_list"&gt;
    &lt;li v-for="(item, idx) in sample_goods.slice(0, 4)" :key="idx"&gt;
      &lt;CartItem :item="item" :is-mo="true" /&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</code></pre>
  </section>

  <section>
    <h2>Breadcrumb</h2>
    <div class="design_box">
      <Breadcrumb :item="sam_menu" />
    </div>
    <pre class="code_box"><code>&lt;Breadcrumb :item="Data" /&gt;</code></pre>
  </section>

  <section>
    <h2>Modal</h2>
    <ul class="explain">
      <li>import { modal } from '@inmModule/assets/js/common-ui' 선언 후 필요한 스타일만 페이지 하단에 적용</li>
      <li>
        Open : modal.open(오픈할 모달아이디, 타입);<br />
        타입 = full / alert / bottom : mobile 하단에서 올라오는 팝업 / layer : [tooltip, 공유하기] 등 position absolute 모달
      </li>
      <li>특정 스타일이 필요하여 클래스를 추가할 경우, 특정클래스 추가 가능: ex) Open : modal.open(오픈할 모달아이디, 타입 특정클래스);</li>
      <li>Close : modal.close(); /* 다중팝업 노출 시 바디스크롤 풀림 처리 예정 */</li>
      <li>toast 모달의 경우 import { toast_pop } from '@inmModule/assets/js/common-ui' 선언 후, 파라미터로 시간 추가하여 진행</li>
      <li>layer 모달의 경우 modal open 버튼과 동일한 위치에 modal_wrap 선언(하단 Modal layer type 주석 참고)</li>
      <li>tooltip 공통 스타일 추가 (하단 Modal tooltip 주석 참고)</li>
    </ul>
    <div class="design_box">
      <div class="multi_form">
        <Button txt="Modal full" @click="modal.open('sample_modal', 'full')" />
        <Button txt="Modal alert" @click="modal.open('sample_modal', 'alert')" />
        <Button txt="Modal bottom" @click="modal.open('sample_modal', 'bottom')" />
        <Button txt="Modal detailSearch" @click="modal.open('sample_modal', 'detailSearch')" />
        <Button id="layer" txt="Modal layer" @click="modal.open('sample_modal', 'layer')" />
        <Button id="tooltip" txt="Modal layer tooltip" @click="modal.open('sample_modal2', 'layer tooltip')" />
        <Button txt="Modal fullMo" @click="modal.open('sample_modal', 'fullMo')" />
        <Button txt="Modal toast" @click="modal.open('sample_modal', 'toast'), toast_pop(3000)" />
      </div>
    </div>
    <pre class="code_box"><code>&lt;div class="modal_wrap" id="모달_아이디"&gt;
    &lt;div class="modal_container"&gt;
        &lt;div class="modal_header"&gt;
            &lt;h2&gt;Modal Title&lt;/h2&gt;
            &lt;button class="btn_close" @click="modal.close(this);"&gt;닫기&lt;/button&gt;
        &lt;/div&gt;
        &lt;div class="modal_content"&gt;
            &lt;!-- modal contents --&gt;
        &lt;/div&gt;
        &lt;div class="modal_footer"&gt;
            &lt;Button class="btn_outline" txt="cancel" /&gt;
            &lt;Button txt="OK" /&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="overlay" @click="modal.close(this);"&gt;&lt;/div&gt;
&lt;/div&gt;</code>
<code>
// Modal layer type
&lt;button @click="modal.open('모달_아이디', 'layer')" &gt;버튼&lt;/button&gt;
&lt;div id="모달_아이디" class="modal_wrap"&gt;
  &lt;div class="modal_container"&gt;
    ...
  &lt;/div&gt;
&lt;/div&gt;

// Modal tooltip
&lt;div id="sample_modal2" class="modal_wrap"&gt;
  &lt;div class="modal_container"&gt;
    &lt;button class="btn_close" @click="modal.close(this);"&gt;닫기&lt;/button&gt;
    &lt;div class="modal_content"&gt;
      &lt;h2&gt;Modal Title&lt;/h2&gt;
      &lt;div&gt;Sample Modal&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="modal_footer"&gt;
      &lt;Button class="btn_outline" txt="cancel" /&gt;
      &lt;Button txt="OK" /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="overlay" @click="modal.close(this);"&gt;&lt;/div&gt;
&lt;/div&gt;
</code>
</pre>
  </section>

  <section>
    <h2>Tabs</h2>
    <div class="dimmed">
      <ul class="explain">
        <li>tabType : tab type 클래스 지정</li>
        <li>default : 탭 요소의 넓이가 갯수에 대한 비율로 늘어남.</li>
        <li>tabType="type_01" = 상품상세 정보 탭 / type_02 = 베스트 카테고리 탭</li>
        <li>카운트(숫자)가 들어가는 경우 데이터에 Cnt 항목 필요</li>
      </ul>
      <div class="design_box">
        <ul class="form_group">
          <li>
            <p class="form_tit">[Default]</p>
            <Tabs tabType="" :item="[{ txt: 'tab01', Cnt: 999 }, { txt: 'tab02' }]" :tabidx="0" />
          </li>
          <li>
            <p class="form_tit">[type_01]</p>
            <Tabs tabType="type_01" :item="[{ txt: 'tab01' }, { txt: 'tab02' }]" :tabidx="0" />
          </li>
          <li>
            <p class="form_tit">[type_02]</p>
            <Tabs
              tabType="type_02"
              :item="[
                { txt: 'tab01' },
                { txt: 'tab02' },
                { txt: 'tab03' },
                { txt: 'tab04' },
                { txt: 'tab05' },
                { txt: 'tab06' },
                { txt: 'tab07' },
                { txt: 'tab08' },
                { txt: 'tab09' },
                { txt: 'tab10' }
              ]"
              :tabidx="0" />
          </li>
          <li>
            <p class="form_tit">[type_03]</p>
            <Tabs tabType="type_03" :item="[{ txt: 'tab01' }, { txt: 'tab02' }]" :tabidx="0" />
          </li>
          <li>
            <p class="form_tit">[type_04]</p>
            <Tabs tabType="type_04" :item="[{ txt: 'tab01' }, { txt: 'tab02' }]" :tabidx="0" />
          </li>
          <li>
            <p class="form_tit">[type_05]</p>
            <Tabs tabType="type_05" :item="[{ txt: 'tab01' }, { txt: 'tab02' }, { txt: 'tab03' }]" :tabidx="0" />
          </li>
        </ul>
      </div>
      <pre class="code_box"><code>&lt;Tabs tabType="" :item="[{txt:'tab01', Cnt:999},{txt:'tab02'}]"  :tabidx="0" /&gt;</code></pre>
    </div>
  </section>

  <section>
    <h2>swiper</h2>
    <ul class="explain">
      <li>
        <NuxtLink :to="'https://swiperjs.com/vue'" target="_blank">[API] https://swiperjs.com/vue</NuxtLink>
      </li>
    </ul>
    <div class="design_box">
      <div class="swiper_wrap">
        <!-- swiper -->
        <swiper v-bind="swiperOpt" @swiper="onSwiper" @slideChange="onSlideChange">
          <swiper-slide v-for="(item, idx) in mainSam.visual" :key="idx">
            <a href="#none" class="item">
              <!-- visual tag -->
              <div class="tag-card">
                <span class="cardSt_1">{{ item.tag[0] }}</span>
                <span class="cardSt_2">{{ item.tag[1] }}</span>
              </div>
              <!-- //visual tag -->

              <!-- item text content -->
              <div class="cont">
                <p class="name">
                  <strong>{{ item.name[0] }}</strong>
                  <span>{{ item.name[1] }}</span>
                </p>
                <p class="price">
                  {{ item.price[0] }}
                  <em>{{ item.price[1] }}</em>
                </p>
              </div>
              <!-- //item text content -->

              <!-- visual image -->
              <span class="thumb">
                <em><img :src="item.img" /></em>
              </span>
              <!-- //visual image -->
            </a>
          </swiper-slide>
        </swiper>
        <!-- //swiper -->

        <!-- scrollbar -->
        <div class="swiper-scrollbar-wrap">
          <p class="scrollbar">scroll bar</p>
        </div>
        <!-- //scrollbar -->

        <!-- navigation -->
        <div class="navigation">
          <button class="swiper-button-prev">Prev</button>
          <button class="swiper-button-next">Next</button>
        </div>
        <!-- //navigation -->

        <!-- pagination -->
        <div class="custom_pagination">
          <div class="current">
            <em class="idx_01"></em>
            <em class="idx_02"></em>
          </div>
          <strong class="total"></strong>

          <Button class="btn_swiper_cont" data="play" />
        </div>
        <!-- //pagination -->
      </div>
    </div>
    <pre class="code_box"><code>&lt;div class="swiper_wrap"&gt;
  &lt;!-- swiper --&gt;
  &lt;swiper
    v-bind="swiperOpt" //swiper option
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  &gt;
    &lt;swiper-slide v-for="(item, idx) in mainSam.visual" :key="idx"&gt;
      &lt;a href="#none" class="item"&gt;
        &lt;!-- visual image --&gt;
        &lt;span class="thumb"&gt;
          &lt;em&gt;&lt;img :src="item.img"&gt;&lt;/em&gt;
        &lt;/span&gt;
        &lt;!-- //visual image --&gt;
      &lt;/a&gt;
    &lt;/swiper-slide&gt;
  &lt;/swiper&gt;
  &lt;!-- //swiper --&gt;

  &lt;!-- custom scrollbar --&gt;
  &lt;div class="swiper-scrollbar-wrap"&gt;
    &lt;p class="scrollbar"&gt;scroll bar&lt;/p&gt;
  &lt;/div&gt;
  &lt;!-- //custom scrollbar --&gt;

  &lt;!-- custom navigation --&gt;
  &lt;div class="navigation"&gt;
    &lt;button class="swiper-button-prev"&gt;Prev&lt;/button&gt;
    &lt;button class="swiper-button-next"&gt;Next&lt;/button&gt;
  &lt;/div&gt;
  &lt;!-- //custom navigation --&gt;

  &lt;!-- custom pagination --&gt;
  &lt;div class="custom_pagination"&gt;
    &lt;div class="current"&gt;
      &lt;em class="idx_01"&gt;&lt;/em&gt;
      &lt;em class="idx_02"&gt;&lt;/em&gt;
    &lt;/div&gt;
    &lt;strong class="total"&gt;&lt;/strong&gt;

    &lt;Button class="btn_swiper_cont" data="play" /&gt;
  &lt;/div&gt;
  &lt;!-- //custom pagination --&gt;
&lt;/div&gt;

&lt;script setup&gt;
// import Swiper core and required components
import SwiperCore from "swiper";
import { Navigation, Pagination, A11y, Autoplay, Scrollbar } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y, Autoplay, Scrollbar]);

const onSwiper = (swiper) => {
  const total = swiper.wrapperEl.children.length,
  current = swiper.realIndex+1,
  pagination = swiper.wrapperEl.closest('.swiper_wrap').querySelector('.custom_pagination');

  if(total < 10) {
    pagination.querySelector('.current .idx_01').textContent = '0'+current;

    if((current+1) > total) {
      pagination.querySelector('.current .idx_02').textContent = '0'+((total - current)+1);
    } else {
      pagination.querySelector('.current .idx_02').textContent = '0'+(current+1);
    }

    pagination.querySelector('strong.total').textContent = '0'+total;
  }

  /* play & pause button */
  pagination.querySelector('button').addEventListener('click', ()=>{
    if(event.currentTarget.getAttribute('data') == 'play'){
      swiper.autoplay.stop();
      event.currentTarget.setAttribute('data','pause');
    } else {
      swiper.autoplay.start();
      event.currentTarget.setAttribute('data','play');
    }
  });
}

const onSlideChange = (swiper) => {
  const total = swiper.wrapperEl.children.length,
  current = swiper.realIndex+1,
  pagination = swiper.wrapperEl.closest('.swiper_wrap').querySelector('.custom_pagination');

  if(total < 10) {
    pagination.querySelector('.current .idx_01').textContent = '0'+current;

    if((current+1) > total) {
      pagination.querySelector('.current .idx_02').textContent = '0'+((total - current)+1);
    } else {
      pagination.querySelector('.current .idx_02').textContent = '0'+(current+1);
    }
  }

  /* scrollbar */
  swiper.wrapperEl.closest('.swiper_wrap').querySelector('.scrollbar').style.width = ((swiper.realIndex + 1)/swiper.wrapperEl.children.length) * 100+'%'
}
&lt;/script&gt;</code></pre>
  </section>

  <section>
    <h2>Drop_Down</h2>
    <div class="dimmed">
      <ul class="explain">
        <li>import { Drop_Down } from '@inmModule/assets/js/common-ui' 선언 후 필요한 스타일만 페이지 하단에 적용</li>
      </ul>
      <div class="design_box">
        <div class="pdtSortTab_wrap">
          <div class="sortTab">
            <button class="btn_dropdown" @click="Drop_Down()">추천순</button>
            <ul>
              <li><a href="#none" class="active">추천순</a></li>
              <li><a href="#none">신제품순</a></li>
              <li><a href="#none">판매량순</a></li>
              <li><a href="#none">낮은 가격순</a></li>
              <li><a href="#none">높은 가격순</a></li>
              <li><a href="#none">리뷰순</a></li>
              <li><a href="#none">판매금액순</a></li>
            </ul>
          </div>
        </div>
      </div>
      <pre class="code_box"><code>&lt;div class="pdtSortTab_wrap"&gt;
        &lt;div class="sortTab"&gt;
      &lt;button class="btn_dropdown" @click="Drop_Down()"&gt;추천순&lt;/button&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;a href="#none" class="active"&gt;추천순&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#none"&gt;신제품순&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#none"&gt;판매량순&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#none"&gt;낮은 가격순&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#none"&gt;높은 가격순&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#none"&gt;리뷰순&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#none"&gt;판매금액순&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
    </div>
  </section>

  <section>
    <h2>setFilter - checkbox.round_sqaure 타입으로 사용</h2>
    <div class="dimmed mod">
      <ul class="explain">
        <li>클릭 요소에 active 클래스 추가</li>
        <li>import { setFilter } from '@inmModule/assets/js/common-ui' 선언</li>
        <li>@click="setFilter($event)"</li>
        <li style="color: #ff0000">.active 스타일 별도 적용 필수</li>
      </ul>
      <div class="design_box">
        <label for="skin1" class="setFilter_sample">
          <input id="skin1" type="checkbox" name="typArr" value="FB" alt="주름/탄력" /><span @click="setFilter($event)">주름/탄력</span>
        </label>
      </div>
      <pre class="code_box"><code>&lt;label for="skin1" class="setFilter_sample"&gt;
        &lt;input id="skin1" type="checkbox" name="typArr" value="FB" alt="주름/탄력"&gt;&lt;span @click="setFilter($event)"&gt;주름/탄력&lt;/span&gt;
      &lt;/label&gt;</code></pre>
    </div>
  </section>

  <section>
    <h2>별점</h2>
    <div class="dimmed">
      <ul class="explain">
        <li>class="type_big" : 상품상세 리뷰 편점 등 큰 사이즈에 사용</li>
      </ul>
      <div class="design_box">
        <ul class="form_group">
          <li>
            <p class="form_tit">Default</p>
            <Reviewpoint width="90" rate="4.7" />
          </li>
          <li>
            <p class="form_tit">type_big</p>
            <Reviewpoint width="90" rate="4.7" class="type_big" />
          </li>
        </ul>
      </div>
      <pre class="code_box"><code>&lt;Reviewpoint width="퍼센트(숫자)" rate="평점(숫자)" /&gt;</code></pre>
    </div>
  </section>

  <section>
    <h2>리뷰 영역(사진 + 글) - default</h2>
    <ul class="explain">
      <li>리뷰 관련 컴포넌트와 prop에 대해서는 디자인 고도화 반영 후 설명 추가 예정</li>
    </ul>
    <div class="design_box">
      <div v-for="(item, idx) in sample_review.slice(0, 1)" :key="idx">
        <ProductReview :item="item" />
      </div>
    </div>
    <pre class="code_box"><code>&lt;ProductReview :item="item" /&gt;</code></pre>
  </section>

  <section>
    <h2>Post Item - default</h2>
    <ul class="explain">
      <li>모바일에서만 사용(에디터 메뉴)</li>
    </ul>
    <div class="design_box">
      <div v-for="(item, idx) in samplePost.slice(0, 1)" :key="idx" style="width: 165px">
        <PostItem :item="item" />
      </div>
    </div>
    <pre class="code_box"><code>&lt;PostItem :item="item" /&gt;</code></pre>
  </section>

  <section>
    <h2>Post Item - 가로형</h2>
    <ul class="explain">
      <li>모바일에서만 사용</li>
    </ul>
    <div class="design_box">
      <div v-for="(item, idx) in samplePost.slice(0, 1)" :key="idx" style="width: 375px">
        <PostItemVertical :item="item" />
      </div>
    </div>
    <pre class="code_box"><code>&lt;PostItemVertical :item="item" /&gt;</code></pre>
  </section>

  <section>
    <h2>Editor Profile</h2>
    <ul class="explain">
      <li>모바일에서만 사용(에디터 메뉴)</li>
    </ul>
    <div class="design_box">
      <div v-for="(item, idx) in samplePost.slice(0, 1)" :key="idx" style="width: 375px">
        <EditorProfile :item="item" />
      </div>
    </div>
    <pre class="code_box"><code>&lt;EditorProfile :item="item" /&gt;</code></pre>
  </section>

  <section>
    <h2>Editor - Post Item</h2>
    <ul class="explain">
      <li>모바일에서만 사용(에디터 프로필 페이지의 포스트 아이템)</li>
    </ul>
    <div class="design_box">
      <div v-for="(item, idx) in samplePost.slice(0, 1)" :key="idx" style="width: 375px">
        <EditorPostItem :item="item" :link="link" />
      </div>
    </div>
    <pre class="code_box"><code>&lt;EditorPostItem :item="item" /&gt;</code></pre>
  </section>

  <!-- modal -->
  <div id="sample_modal" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>Modal Title</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div>Sample Modal</div>
      </div>
      <div class="modal_footer">
        <Button class="btn_outline" txt="cancel" />
        <Button txt="OK" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //modal -->

  <!-- modal tooltip -->
  <div id="sample_modal2" class="modal_wrap">
    <div class="modal_container">
      <button class="btn_close" @click="modal.close(this)">닫기</button>
      <div class="modal_content">
        <h2>Modal Title</h2>
        <div>Sample Modal</div>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //modal tooltip -->

  <!-- 증정품 모달 -->
  <div class="modal_wrap" id="giveaway_01">
    <div class="modal_container">
      <div class="modal_header">
        <h2>증정품안내</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <dl>
          <dt>
            <img src="@inmModule/public/images/sam/giveaway_01.png" />
          </dt>
          <dd>
            <p>제주 루트 에너지 마스크[당근] 5매 세트</p>
            <em>24.3.25 ~ 24.3.31</em>
            <span>1개 구매시 1개 증정</span>
          </dd>
        </dl>
        <dl>
          <dt>
            <img src="@inmModule/public/images/sam/giveaway_02.png" />
          </dt>
          <dd>
            <p>비타C 세럼 럭키 박스 (30ml + 랜덤기프트)</p>
            <em>23.4.11</em>
            <span>1개 구매시 n개 증정</span>
          </dd>
        </dl>
        <dl>
          <dt>
            <img src="@inmModule/public/images/sam/giveaway_03.png" />
          </dt>
          <dd>
            <p>레티놀 시카 앰플 포커싱 패치 1ea / 9patches</p>
            <em>24.2.29 ~ 24.3.31</em>
            <span>1개 구매시 n개 증정</span>
          </dd>
        </dl>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //증정품 모달 -->
</template>

<script setup>
import { definePageMeta, onMounted, reactive } from '#imports'

definePageMeta({
  layout: 'publish-guide'
})

import { modal, Drop_Down, setFilter, toast_pop } from '@inmModule/assets/js/common-ui'
import { sample_goods, sam_menu, sample_event, mainSam, sample_review, samplePost } from '@inmModule/test/data/publish/dummyData'

/* swiper */
// import Swiper core and required components
import SwiperCore from 'swiper'
import { Navigation, Pagination, A11y, Autoplay, Scrollbar } from 'swiper/modules'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y, Autoplay, Scrollbar])

/* swiper sample option */
const swiperOpt = {
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  spaceBetween: 40,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  autoplay: {
    delay: 300,
    disableOnInteraction: false
  },
  centeredSlides: true,
  slidesOffsetBefore: -330,
  scrollbar: {
    draggable: false
  },
  observer: true
}

const onSwiper = (swiper) => {
  // const total = swiper.loopedSlides,
  const total = swiper.wrapperEl.children.length,
    current = swiper.realIndex + 1,
    pagination = swiper.wrapperEl.closest('.swiper_wrap').querySelector('.custom_pagination')

  if (total < 10) {
    pagination.querySelector('.current .idx_01').textContent = '0' + current

    if (current + 1 > total) {
      pagination.querySelector('.current .idx_02').textContent = '0' + (total - current + 1)
    } else {
      pagination.querySelector('.current .idx_02').textContent = '0' + (current + 1)
    }

    pagination.querySelector('strong.total').textContent = '0' + total
  }

  /* play & pause button */
  pagination.querySelector('button').addEventListener('click', () => {
    if (event.currentTarget.getAttribute('data') == 'play') {
      swiper.autoplay.stop()
      event.currentTarget.setAttribute('data', 'pause')
    } else {
      swiper.autoplay.start()
      event.currentTarget.setAttribute('data', 'play')
    }
  })
}

const onSlideChange = (swiper) => {
  const total = swiper.wrapperEl.children.length,
    current = swiper.realIndex + 1,
    pagination = swiper.wrapperEl.closest('.swiper_wrap').querySelector('.custom_pagination')

  if (total < 10) {
    pagination.querySelector('.current .idx_01').textContent = '0' + current

    if (current + 1 > total) {
      pagination.querySelector('.current .idx_02').textContent = '0' + (total - current + 1)
    } else {
      pagination.querySelector('.current .idx_02').textContent = '0' + (current + 1)
    }
  }

  /* scrollbar */
  swiper.wrapperEl.closest('.swiper_wrap').querySelector('.scrollbar').style.width =
    ((swiper.realIndex + 1) / swiper.wrapperEl.children.length) * 100 + '%'
}

const pagination = {
  type: 'fraction',
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 2) + '</span>'
  }
}
/* //swiper */

/* component sample data */
const input_opt = reactive({
  Placeholder: '문구를 입력해주세요.',
  isswitch: Boolean,
  opt: '_type="text" _placeholder="문구를 입력해주세요"',
  isError: false
})

const select_opt = `[
    { val: 'value', txt: '옵션01' },
    { val: 'value', txt: '옵션02' }
]`
const tabidx = 0
/* //component sample data */

/* inputs type function */
const tool_select = (props) => {
  for (var i = 0; i < event.currentTarget.closest('.toolbar').querySelectorAll('button').length; i++) {
    event.currentTarget.closest('.toolbar').querySelectorAll('button')[i].classList.remove('current')
  }
  event.currentTarget.classList.add('current')

  switch (props) {
    case 'isswitch':
      ;(input_opt.isswitch = true),
        (input_opt.type = 'checkbox'),
        (input_opt.opt = '_type="' + input_opt.type + '" :isswitch="' + input_opt.isswitch + '" _text="Label"'),
        (input_opt.class = '')

      break

    case 'error':
      ;(input_opt.isswitch = false), (input_opt.isError = true), (input_opt.err_text = 'Error Text')
      break

    case 'pw':
      ;(input_opt.isswitch = false),
        (input_opt.type = 'password'),
        (input_opt.Placeholder = '비밀번호를 입력해주세요'),
        (input_opt.opt = '_type="' + input_opt.type + '" _placeholder="' + input_opt.Placeholder + '"'),
        (input_opt.isError = false),
        (input_opt.class = '')
      break

    case 'check':
      ;(input_opt.isswitch = false),
        (input_opt.type = 'checkbox'),
        (input_opt.opt = '_type="' + input_opt.type + '" _text="Label"'),
        (input_opt.class = '')
      break

    case 'check2':
      ;(input_opt.isswitch = false),
        (input_opt.type = 'checkbox'),
        (input_opt.opt = '_type="' + input_opt.type + '" _text="Label"' + ' class="checkbox02"')
      input_opt.class = 'checkbox02'
      break

    case 'check3':
      ;(input_opt.isswitch = false),
        (input_opt.type = 'checkbox'),
        (input_opt.opt = '_type="' + input_opt.type + '" _text="Label"' + ' class="round_square"')
      input_opt.class = 'round_square'
      break

    case 'radio':
      ;(input_opt.isswitch = false),
        (input_opt.type = 'radio'),
        (input_opt.opt = '_type="' + input_opt.type + '" _text="Label"'),
        (input_opt.class = '')
      break

    case 'text_err':
      ;(input_opt.isswitch = false),
        (input_opt.type = 'text'),
        (input_opt.opt = '_type="' + input_opt.type + ' class="err"'),
        (input_opt.isError = false),
        (input_opt.class = 'err')
      break

    case 'text':
      ;(input_opt.isswitch = false),
        (input_opt.type = 'text'),
        (input_opt.Placeholder = '문구를 입력해주세요'),
        (input_opt.opt = '_type="' + input_opt.type + '" _placeholder="' + input_opt.Placeholder + '"'),
        (input_opt.isError = false),
        (input_opt.class = '')
      break
  }
}

/* modal layer type sample position */
onMounted(() => {
  document.getElementById('layer').addEventListener('click', (event) => {
    document.getElementById('sample_modal').style.cssText =
      'top:' + event.currentTarget.offsetTop + 'px; left:' + event.currentTarget.offsetLeft + 'px;'
  })

  document.getElementById('tooltip').addEventListener('click', (event) => {
    document.getElementById('sample_modal2').style.cssText =
      'top:' + event.currentTarget.offsetTop + 'px; left:' + event.currentTarget.offsetLeft + 'px;'
  })
})
/* //inputs type function */
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/mo_mixin';

.guide_wrap {
  padding: 30px 0;
  > section {
    margin: 0 20px;
    & + section {
      margin-top: 30px;
      padding-top: 30px;
      border-top: 1px dashed #ababab;
    }
    > h2 {
      margin-bottom: 20px;
      padding: 10px 10px 10px 20px;
      font-size: 24px;
      font-weight: 700;
      position: relative;
      display: flex;
      &:before {
        height: 15px;
        border-left: 5px solid #ff7200;
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
      ul {
        margin-left: auto;
        display: inline-flex;
        li {
          display: flex;
          align-items: center;
          a {
            color: #222;
            padding: 0 15px;
            font-size: 14px;
            text-decoration: none;
            display: block;
          }
        }
      }
    }
    .explain {
      margin-bottom: 20px;
      li {
        padding-left: 12px;
        position: relative;
        & + li {
          margin-top: 15px;
        }
        &:before {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          content: '-';
          display: block;
        }
        strong {
          margin-bottom: 8px;
          display: block;
        }
      }
    }
    .toolbar {
      background-color: #eee;
      display: flex;
      flex-wrap: wrap;
      li {
        padding: 8px;
        > * {
          padding: 8px;
          border-radius: 4px;
          display: block;
          transition: background 0.25s;
          &:hover {
            background-color: #ddd;
          }
          &.current {
            background-color: #ccc;
          }
        }
      }
    }
    h3 {
      margin-top: 20px;
      margin-bottom: 10px;
    }
  }
}
.design_box {
  padding: 15px;
  border: 1px solid #eee;
}

.code_box {
  padding: 15px;
  color: #fff;
  line-height: 1.8;
  background-color: #000;
  border: 10px solid #f2f2f2;
  overflow: auto;
}

:deep(.breadcrumb) {
  .inner {
    margin: 0 !important;
  }
}

.swiper_wrap {
  width: 100%;
  position: relative;
  .swiper {
    padding-bottom: 40px;
    .swiper-pagination {
      bottom: 0;
    }
  }
  .custom_pagination {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    em {
      font-weight: 600;
      & + em:before {
        margin: 0 3px;
        content: '/';
      }
    }
    strong {
      margin: 0 10px;
      color: #888;
      font-weight: 400;
      display: flex;
      align-items: center;
      &:before {
        height: 8px;
        margin-right: 10px;
        border-left: 1px solid rgba(0, 0, 0, 0.2);
        content: '';
        display: block;
      }
    }
    button {
      width: 20px;
      height: 20px;
      margin: 0;
      background-color: transparent;
      background-image: url('@inmModule/assets/images/common/icon_split.png');
      background-repeat: no-repeat;
      background-size: 250px auto;
      position: static;
      display: block;
      transform: rotate(0);
      :deep(em) {
        font-size: 0;
      }
      &[data='play'] {
        background-position: -130px -250px;
      }
      &[data='pause'] {
        background-position: -100px -250px;
      }
    }
  }
}
:deep(.swiper-slide) {
  width: 620px;
  opacity: 0.2;
  filter: grayscale(1);
  transition: opacity 0.25s;

  &.swiper-slide-active {
    opacity: 1;
    filter: grayscale(0);
  }
  &.swiper-slide-active + .swiper-slide {
    opacity: 1;
    filter: grayscale(0);
  }
}
.item {
  position: relative;
  &:hover {
    .thumb {
      img {
        transform: scale(1.2);
      }
    }
    .cont {
      transform: translateY(-15px);
    }
  }
  .thumb {
    position: relative;
    overflow: hidden;
    display: block;
    &:after {
      padding-top: 36.774193%;
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      display: block;
    }
    img {
      display: block;
      transition: transform 0.45s;
    }
  }
  .tag-card {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 1;
    &:after {
      clear: both;
      content: '';
      display: block;
    }
    & > * {
      padding: 6px 10px;
      font-size: 14px;
      background-color: #000;
      color: #fff;
      float: left;
      display: block;
      & + * {
        margin-left: 1px;
      }
      &.cardSt_1 {
        color: #000;
        font-weight: 600;
        background-color: #ffff82;
      }
    }
  }
  .cont {
    color: #fff;
    position: absolute;
    bottom: 40px;
    left: 40px;
    z-index: 1;
    transition: transform 0.45s;
    .name {
      & > * {
        margin-top: 5px;
        font-size: 32px;
        display: block;
      }
    }
    .price {
      margin-top: 15px;
      font-size: 32px;
      font-weight: 700;
      display: flex;
      align-items: center;
      em {
        margin-left: 10px;
        font-size: 20px;
        font-weight: 300;
        text-decoration: line-through;
      }
    }
  }
}

.navigation {
  margin: 0 -740px;
  position: absolute;
  top: 50%;
  right: 50%;
  left: 50%;
  button {
    width: 60px;
    height: 60px;
    font-size: 0;
    background: url('@inmModule/assets/images/common/icon_split.png') no-repeat 0 -190px;
    background-size: 250px auto;
    &:after {
      display: none;
    }
    &.swiper-button-next {
      transform: rotate(180deg);
    }
  }
}

.swiper-scrollbar-wrap {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  &:after {
    width: 100%;
    border-top: 1px solid #ddd;
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    display: block;
  }
  .scrollbar {
    font-size: 0;
    border-bottom: 2px solid #000;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: width 0.25s;
  }
}

:deep(.pdtSortTab_wrap) {
  justify-content: right;
}

.setFilter_sample {
  padding-left: 0;
  display: inline-block;
  cursor: pointer;

  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  span {
    height: 30px;
    padding: 0 20px;
    color: #aaaaaa;
    font-weight: 600;
    font-size: 14px;
    border-radius: 5px;
    background-color: #f5f5f5;
    line-height: 1.29em;
    letter-spacing: -0.01em;
    display: flex;
    align-items: center;

    &.active {
      color: #ffffff;
      background: #00bc70;
    }
  }
}

/* goodsItem */
.mobile {
  :deep(.goods_item) {
    width: 16.5rem;
    padding-bottom: calc(24px + 1rem);
    position: relative;

    .img_wrap {
      position: static;
      &:before {
        display: none !important;
      }
      .top_sticker {
        height: 2.4rem;
        line-height: 2.4rem;
      }
      .thumb {
        width: 100%;
        height: 22rem;
      }
      .btnIconBox {
        background-color: transparent;
        position: absolute;
        bottom: 0;
        gap: 1rem;
        justify-content: start;
        transform: translateY(0);
        button {
          padding: 0;
          em {
            width: 24px;
            height: 24px;
            padding: 0;
            background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
            background-size: 250px auto;
          }
          &.btn_heart {
            em {
              background-position: -140px -40px;
            }
            &.on {
              em {
                background-position: -180px -70px;
              }
            }
          }
          &.btn_cart em {
            background-position: -170px -40px;
          }
          &.btn_buy em {
            background-position: -200px -40px;
          }
        }
      }
    }
    &.sold_out,
    &.coming_soon,
    &.end {
      .img_wrap {
        a {
          position: relative;
          &:before,
          &:after {
            content: '';
            display: block;
          }
          &:before {
            background-color: rgba(0, 0, 0, 0.3);
            background-position: 50%;
            background-repeat: no-repeat;
            background-size: 60%;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 1;
          }
        }
      }
    }
    &.sold_out {
      .img_wrap a:before {
        background-image: url('@inmModule/assets/images/ui/overlay_soldout.png');
      }
    }
    &.coming_soon {
      .img_wrap a:before {
        background-image: url('@inmModule/assets/images/ui/overlay_comingsoon.png');
      }
    }
    &.end {
      .img_wrap a:before {
        background-image: url('@inmModule/assets/images/ui/overlay_end.png');
      }
    }
    .cont {
      > .price {
        margin-top: 0.6rem;
        margin-bottom: 1rem;
        strong {
          margin-right: 0.5rem;
          font-size: 1.4rem;
        }
        span {
          font-size: 1.2rem;
        }
        em {
          font-size: 1rem;
          display: block;
        }
      }
      .name {
        font-size: 1.4rem;
        strong {
          color: #000;
          .cate {
            margin: 0;
          }
        }
      }
      .review_score {
        margin-top: 1rem;
        font-size: 1rem;
      }
      .sticker em {
        padding: 3px 5px;
        font-size: 1rem;
      }
    }

    &.type_column {
      width: 100%;
      padding-bottom: 0;

      .img_wrap {
        .thumb {
          width: 9rem;
          height: 12rem;
        }
      }
      .cont {
        .price {
          em {
            display: inline;
          }
        }
      }

      &.type_cart {
        /* .type_column.type_cart */
        .img_wrap {
          position: static;
          .btnIconBox {
            display: flex;
            position: absolute;
            top: 50%;
            transform: translate(-50%);
            bottom: auto;
            right: 0;
            left: auto;
            z-index: 2;
            gap: 0;
          }
        }
      }
    }

    &.type_cart {
      /* .type_cart */
      padding-bottom: 0;

      .img_wrap {
        position: relative;

        .btnIconBox {
          position: absolute;
          bottom: 0.5rem;
          right: 0px;
          justify-content: end;
          gap: 0.5rem;

          .btn_heart,
          .btn_buy {
            display: none;
          }
        }
      }
    }
  }
}
/* //goodsItem */

.list_wrap.mobile {
  width: 375px;
}

/* goods list */
.mobile {
  :deep(.goods_list) {
    &.col_3 {
      display: flex;
      gap: 2rem 0.3rem;
      > li {
        width: 10.9rem;
        .goods_item {
          width: 10.9rem;
          .img_wrap {
            .thumb {
              height: 14.5rem;
            }
          }
        }
      }
    }
  }
}

/* cart list */
.mobile {
  :deep(.cart_item) {
    padding: 0;

    .row {
      padding-right: 0;
      display: grid;
      grid-template-columns: 9rem auto auto;
      grid-template-rows: minmax(4.4rem, auto) minmax(0, auto);
      align-items: start;
      gap: 0;
      position: relative;

      .prod_img {
        width: 7.5rem;
        height: 10rem;
        flex-shrink: 0;
        grid-row: 1 / 3;
      }

      .prod_info_wrap {
        height: auto;
        grid-row: 1 / 2;
      }

      .prod_info {
        height: auto;
        padding-right: 0;
        margin-bottom: auto;

        .tag {
          margin-bottom: 0.8rem;

          > * {
            font-size: 1rem;
          }
        }

        & > .name {
          font-size: 1.4rem;
          line-height: 1.8rem;
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;

          & + * {
            margin: 0.5rem 0 0.8rem;
          }
        }

        .prod_select {
          width: 100%;
          margin-top: 0.8rem;
        }
      }

      .prod_price {
        justify-content: space-between;
        grid-column: 2 / span 2;
        grid-row: 2 / 3;

        .quantity_area {
          flex-direction: row;
          justify-content: space-between;

          .count_wrap {
            width: 8rem;

            button {
              width: 2.8rem;
              height: 2.8rem;
            }

            .label_wrap {
              label.input input {
                height: 2.8rem;
                padding: 0;
              }
            }
          }

          & > span {
            font-size: 1.3rem;
          }
        }

        .price_wrap {
          padding-left: 0;
          flex-direction: row-reverse;
          align-items: center;
          gap: 0.5rem;

          .price {
            min-width: unset;
            font-size: 1.6rem;
          }

          .cost {
            font-size: 1.1rem;
          }
        }
      }

      .del {
        width: 20px;
        height: 20px;
        font-size: 0;
        background: url('@inmModule/assets/images/common/icon_split.png') -460px -40px no-repeat;

        &:before,
        &:after {
          content: none;
        }
      }

      .tag {
        & > * {
          margin-right: 4px;
          padding: 2px 5px;
          font-size: 12px;
          color: #fff;
          background-color: #00bc70;
          display: inline-block;
        }

        &.gift {
          grid-column: 3 / 4;
          grid-row: 3 / 4;

          & > * {
            padding: 7px 20px;
            position: relative;

            &:before {
              content: '';
              width: 0;
              height: 0;
              border-top: 10px solid #00bc70;
              border-bottom: 10px solid transparent;
              border-right: 10px solid #00bc70;
              border-left: 10px solid transparent;
              position: absolute;
              left: -9px;
              top: 8px;
            }
          }

          button {
            margin-right: 0;
          }
        }
      }

      > span {
        margin: auto 0 0 auto;
        grid-column: 3 / 4;
        grid-row: 1 / 2;
      }
    }

    .selected_list {
      margin-top: 2rem;

      li {
        .name {
          line-height: 1.6rem;
        }

        .quantity_control {
          .name {
            display: none;
          }

          .count {
            width: 8rem;

            .count_wrap {
              width: 8rem;
              padding: 0;

              button {
                width: 2.8rem;
                height: 2.8rem;
              }
            }
          }
        }

        .cost {
          font-size: 1.1rem;
          font-weight: 300;
          color: #999;
        }
      }
    }

    &.extra {
      padding-left: 2.5rem;

      &:before {
        left: 0;
        top: 3.2rem;
        transform: none;
      }

      .row {
        grid-template-columns: 7.1rem auto auto;

        .prod_img {
          width: 5.6rem;
          height: 7.4rem;
        }
      }
    }

    &.sample {
      .row {
        grid-template-columns: 9.6rem auto auto;

        .prod_img {
          gap: 0.5rem;

          .thumb {
            width: 5.6rem;
            height: 7.4rem;
          }
        }

        .prod_price {
          .quantity_area {
            width: 100%;
          }
        }

        .del {
          top: 0;
          transform: none;
        }
      }
    }
  }
}

/* cart list */
:deep(.cart_list) {
  li {
    & + li {
      padding-top: 2rem;
      margin-top: 2rem;
    }

    .cart_list {
      margin-top: 3rem;

      li {
        & + li {
          padding-top: 1.5rem;
          margin-top: 1.5rem;
        }

        &:first-child {
          border-top: 0;
        }
      }
    }
  }
}

:deep(.post_icons) {
  margin-top: 1rem;
  padding-top: 1rem;
  gap: 0.4rem;
  border-top: 1px solid #f5f5f5;
  align-items: center;
  display: flex;

  .i {
    font-size: 1.2rem;
    color: #888;
    align-items: center;
    justify-content: space-evenly;
    display: flex;
    flex: 1;

    &:before {
      content: '';
      width: 1.6rem;
      height: 1.6rem;
      background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
      background-repeat: no-repeat;
      background-size: 25rem auto;
    }

    &.view:before {
      background-position: 0 -10.5rem;
    }

    &.like:before {
      background-position: -2rem -10.5rem;
    }

    &.like.active:before {
      background: url('@inmModule/assets/mo_images/common/icon_split.png') -12rem -4.67rem / 16.5rem auto repeat;
    }

    &.cmnt:before {
      background-position: -4rem -10.5rem;
    }

    &.clock:before {
      background-position: -19rem -10rem;
    }
  }
}
/* //토픽 아이콘 스타일 */

.dimmed {
  position: relative;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9;
  }
  &:after {
    content: '개발 컴포넌트 참고(/dev/guide/component)';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
    font-size: 24px;
    z-index: 10;
    width: 100%;
    text-align: center;
  }

  &.mod {
    &:after {
      content: '수정 또는 삭제 예정';
    }
  }
}
</style>
