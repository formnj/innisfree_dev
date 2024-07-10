<template>
  <section>
    <h2>[공통] content</h2>
    <ul class="explain">
      <li>[class="inner"] = max-width:1320px; padding-right:20px; padding-left:20px;</li>
      <li>
        상품 리스트, 이벤트 리스트 등 content 내부에 공통으로 사용하며, pc에서는 넓이의 제한을 주기위해 사용하지만, mo에서는 소스의 통일성을
        위해 사용함
      </li>
    </ul>
    <pre class="code_box"><code>&lt;template&gt;
  &lt;div class="inner"&gt;
    &lt;ul class="list_wrap"&gt;
      &lt;li&gt;list01&lt;/li&gt;
      &lt;li&gt;list02&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
  </section>

  <section>
    <h2>pc-category</h2>
    <ul class="explain">
      <li>상품 리스트 레이아웃 [LNB] 노출 여부 선택</li>
    </ul>
    <pre class="code_box"><code>&lt;template&gt;
  &lt;div class="title_wrap" :data-layout="props.layoutType"&gt;
    &lt;h2&gt;Title&lt;/h2&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
definePageMeta({
  layout: 'publish-pc-category'
});

const props = defineProps({ //default값이 'default'가 아니면 lnb 노출 없음
  layoutType: {
    type:String,
    default:'default'
  }
});
&lt;/script&gt;</code></pre>
  </section>

  <section>
    <h2>Content wrap</h2>
    <ul class="explain">
      <li>content 구성 기본 마크업</li>
    </ul>
    <div class="design_box">
      <div class="content">
        <div class="title_wrap" style="margin: 0 auto">
          <div>
            <h2>
              Title
              <strong class="badge count"><em>20</em></strong>
            </h2>
          </div>
          <a href="#none" class="btn_link_arrw">링크</a>
        </div>

        <div class="title_wrap" style="margin: 40px auto 0">
          <div>
            <h2>
              Title
              <strong class="badge count"><em>20</em></strong>
            </h2>
            <p class="explain" style="margin-bottom: 0; color: #999">
              fsetetetetefsetetetetefsetetetetefsetetetetefsetetetetefsetetetetefsetetetetefsetetetetefsetetetetefsetetetetefsetetetetefsetetetetefsetetetete
            </p>
            <Button class="btn_min_outline mt10" txt="구매 안내사항" />
          </div>

          <div class="pdtSortTab_wrap">
            <div class="sortTab">
              <button class="btn_dropdown">추천순</button>
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
            <button>상세검색</button>
          </div>
        </div>

        <div class="sub_title_wrap" style="margin: 0 auto">
          <div>
            <h3>
              Sub title
              <Icons class="tooltip" txt="툴팁" />
            </h3>
            <p class="explain">타이틀 설명 글</p>
          </div>
          <a href="#none" class="btn_link_arrw">링크</a>
        </div>

        <div class="inner" style="max-width: 1320px; margin: 0 auto; padding: 0 20px">콘텐츠</div>

        <div class="sub_title_wrap">
          <div>
            <h3>Sub title</h3>
            <p class="explain">타이틀 설명 글</p>
          </div>
          <a href="#none" class="btn_link_arrw">링크</a>
        </div>

        <div class="inner" style="max-width: 1320px; margin: 0 auto; padding: 0 20px">콘텐츠</div>
      </div>
    </div>
    <pre class="code_box"><code>&lt;div class="content"&gt;

  &lt;div class="title_wrap"&gt;
    &lt;div&gt;
      &lt;h2&gt;Title
        &lt;strong class="badge count"&gt;&lt;em&gt;20&lt;/em&gt;&lt;/strong&gt;
      &lt;/h2&gt;
      &lt;p class="explain"&gt;설명글설명글설명글설명글설명글&lt;/p&gt;
      &lt;Button class="btn_min_outline mt10" txt="구매 안내사항"/&gt;
    &lt;/div&gt;
    &lt;a href="#none" class="btn_link_arrw"&gt;링크&lt;/a&gt;

  &lt;/div&gt;

  &lt;div class="title_wrap"&gt;
    &lt;div&gt;
      &lt;h2&gt;Title
        &lt;strong class="badge count"&gt;&lt;em&gt;20&lt;/em&gt;&lt;/strong&gt;
      &lt;/h2&gt;
      &lt;p class="explain"&gt;설명글설명글설명글설명글설명글&lt;/p&gt;
      &lt;Button class="btn_min_outline mt10" txt="구매 안내사항" /&gt;
    &lt;/div&gt;

    &lt;div class="pdtSortTab_wrap"&gt;
      &lt;div class="sortTab"&gt;
        &lt;button class="btn_dropdown"&gt;추천순&lt;/button&gt;
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
      &lt;button&gt;상세검색&lt;/button&gt;
    &lt;/div&gt;

  &lt;/div&gt;

  &lt;div class="sub_title_wrap"&gt;
    &lt;div&gt;
      &lt;h3&gt;Sub title
        &lt;Icons class="tooltip" txt="툴팁" /&gt;
      &lt;/h3&gt;
      &lt;p class="explain"&gt;설명글설명글설명글설명글설명글&lt;/p&gt;
    &lt;/div&gt;
    &lt;a href="#none" class="btn_link_arrw"&gt;링크&lt;/a&gt;
  &lt;/div&gt;

  &lt;div class="inner"&gt;
    콘텐츠
  &lt;/div&gt;

  &lt;div class="sub_title_wrap"&gt;
    &lt;div&gt;
      &lt;h3&gt;Sub title&lt;/h3&gt;
      &lt;p class="explain"&gt;타이틀 설명 글&lt;/p&gt;
    &lt;/div&gt;
    &lt;a href="#none" class="btn_link_arrw"&gt;링크&lt;/a&gt;
  &lt;/div&gt;

  &lt;div class="inner"&gt;
    콘텐츠
  &lt;/div&gt;

&lt;/div&gt;</code></pre>
  </section>

  <section>
    <h2>Review header</h2>
    <div class="design_box">
      <div class="review_header">
        <!-- left -->
        <div class="user_info">
          <span class="name">user</span>
          <span class="age">age</span>
          <span class="type">type</span>
          <div class="rate">
            <Reviewpoint width="90" />
          </div>
          <span class="date">2024.00.00</span>
        </div>
        <!-- //left -->
        <!-- right -->
        <div class="btn_wrap ar">
          <button type="button">신고</button>
          <button type="button">차단하기</button>
        </div>
        <!-- //right -->
      </div>
    </div>
    <pre class="code_box"><code>&lt;div class="review_header"&gt;
&lt;!-- left --&gt;
&lt;div class="user_info"&gt;
  &lt;span class="name"&gt;user&lt;/span&gt;
  &lt;span class="age"&gt;age&lt;/span&gt;
  &lt;span class="type"&gt;type&lt;/span&gt;
  &lt;div class="rate"&gt;
    &lt;Reviewpoint width="90" /&gt;
  &lt;/div&gt;
  &lt;span class="date"&gt;2024.00.00&lt;/span&gt;
&lt;/div&gt;
&lt;!-- //left --&gt;
&lt;!-- right --&gt;
&lt;div class="btn_wrap ar"&gt;
  &lt;button type="button"&gt;신고&lt;/button&gt;
  &lt;button type="button"&gt;차단하기&lt;/button&gt;
&lt;/div&gt;
&lt;!-- //right --&gt;</code></pre>
  </section>

  <section>
    <h2>Goods Item - type_column</h2>
    <ul class="explain">
      <li>class="type_column"</li>
    </ul>
    <div class="design_box">
      <div class="list_wrap">
        <ul class="goods_list">
          <li v-for="(item, idx) in sample_goods.slice(0, 1)" :key="idx">
            <GoodsItem :item="item" :link="item.link" class="type_column" />
          </li>
        </ul>
      </div>
    </div>
    <pre class="code_box"><code>&lt;div class="list_wrap"&gt;
    &lt;ul class="goods_list"&gt;
        &lt;li v-for="(item, idx) in sample_goods" :key="idx"&gt;
            &lt;GoodsItem :item="item" :link="item.link" class="type_column" /&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code></pre>
  </section>

  <section>
    <h2>Goods Item(Mobile) - type_cart</h2>
    <ul class="explain">
      <li>class="type_cart"</li>
    </ul>
    <div class="design_box">
      <div class="list_wrap">
        <ul class="goods_list mobile">
          <!--mobile 클래스는 가이드용 -->
          <li v-for="(item, idx) in sample_goods.slice(0, 1)" :key="idx">
            <GoodsItem :item="item" :link="item.link" class="type_cart" />
          </li>
        </ul>
      </div>
    </div>
    <pre class="code_box"><code>&lt;div class="list_wrap"&gt;
    &lt;ul class="goods_list"&gt;
        &lt;li v-for="(item, idx) in sample_goods" :key="idx"&gt;
            &lt;GoodsItem :item="item" :link="item.link" class="type_cart" /&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code></pre>
  </section>

  <section>
    <h2>Goods Item(Mobile) - type_column + type_cart</h2>
    <ul class="explain">
      <li>class="type_column type_cart"</li>
    </ul>
    <div class="design_box">
      <div class="list_wrap">
        <ul class="goods_list mobile">
          <!--mobile 클래스는 가이드용 -->
          <li v-for="(item, idx) in sample_goods.slice(0, 1)" :key="idx" style="width: 350px">
            <GoodsItem :item="item" :link="item.link" class="type_column type_cart" />
          </li>
        </ul>
      </div>
    </div>
    <pre class="code_box"><code>&lt;div class="list_wrap"&gt;
    &lt;ul class="goods_list"&gt;
        &lt;li v-for="(item, idx) in sample_goods" :key="idx"&gt;
            &lt;GoodsItem :item="item" :link="item.link" class="type_column type_cart" /&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code></pre>
  </section>

  <section>
    <h2>Goods Item(Mobile) - col_3</h2>
    <ul class="explain">
      <li>class="col_3"</li>
    </ul>
    <div class="design_box">
      <div class="list_wrap">
        <ul class="goods_list mobile col_3">
          <!--mobile 클래스는 가이드용 -->
          <li v-for="(item, idx) in sample_goods.slice(0, 6)" :key="idx">
            <GoodsItem :item="item" :link="item.link" />
          </li>
        </ul>
      </div>
    </div>
    <pre class="code_box"><code>&lt;div class="list_wrap"&gt;
    &lt;ul class="goods_list col_3"&gt;
        &lt;li v-for="(item, idx) in sample_goods" :key="idx"&gt;
            &lt;GoodsItem :item="item" :link="item.link" /&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code></pre>
  </section>

  <Tabs
    ref="event_tab"
    tabType="type_01"
    :item="[{ txt: 'default' }, { txt: 'type_reverse' }, { txt: 'type_column' }, { txt: 'type_arr' }, { txt: 'type_box' }]"
    tabidx="0"
    @click="tab_fn" />
  <section v-if="event_section === 0" class="event_item_section">
    <h2>Event Item - default</h2>
    <div class="design_box">
      <div class="list_wrap">
        <ul class="event_list">
          <li v-for="(item, idx) in sample_event.slice(0, 1)" :key="idx">
            <EventItem :item="item" :link="item.link" />
          </li>
        </ul>
      </div>
    </div>
    <pre class="code_box"><code>&lt;div class="list_wrap"&gt;
    &lt;ul class="event_list"&gt;
        &lt;li v-for="(item, idx) in sample_event" :key="idx"&gt;
            &lt;EventItem :item="item" :link="item.link" class="type_reverse" /&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code></pre>
  </section>

  <section v-if="event_section === 1" class="event_item_section">
    <h2>Event Item - type_reverse</h2>
    <ul class="explain">
      <li>class="type_reverse"</li>
    </ul>
    <div class="design_box">
      <div class="list_wrap">
        <ul class="event_list">
          <li v-for="(item, idx) in sample_event.slice(0, 1)" :key="idx">
            <EventItem :item="item" :link="item.link" class="type_reverse" />
          </li>
        </ul>
      </div>
    </div>
    <pre class="code_box"><code>&lt;div class="list_wrap"&gt;
    &lt;ul class="event_list"&gt;
        &lt;li v-for="(item, idx) in sample_event" :key="idx"&gt;
            &lt;EventItem :item="item" :link="item.link" class="type_reverse" /&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code></pre>
  </section>

  <section v-if="event_section === 2" class="event_item_section">
    <h2>Event Item - type_column</h2>
    <ul class="explain">
      <li>class="type_column"</li>
    </ul>
    <div class="design_box">
      <div class="list_wrap">
        <ul class="event_list">
          <li v-for="(item, idx) in sample_event.slice(0, 1)" :key="idx">
            <EventItem :item="item" :link="item.link" class="type_column" />
          </li>
        </ul>
      </div>
    </div>
    <pre class="code_box"><code>&lt;div class="list_wrap"&gt;
    &lt;ul class="event_list"&gt;
        &lt;li v-for="(item, idx) in sample_event" :key="idx"&gt;
            &lt;EventItem :item="item" :link="item.link" class="type_column" /&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code></pre>
  </section>

  <section v-if="event_section === 3" class="event_item_section">
    <h2>Event Item - type_arr</h2>
    <ul class="explain">
      <li>class="type_arr"</li>
    </ul>
    <div class="design_box">
      <div class="list_wrap">
        <ul class="event_list">
          <li v-for="(item, idx) in sample_event.slice(0, 1)" :key="idx">
            <EventItem :item="item" :link="item.link" class="type_arr" />
          </li>
        </ul>
      </div>
    </div>
    <pre class="code_box"><code>&lt;div class="list_wrap"&gt;
    &lt;ul class="event_list"&gt;
        &lt;li v-for="(item, idx) in sample_event" :key="idx"&gt;
            &lt;EventItem :item="item" :link="item.link" class="type_arr" /&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code></pre>
  </section>

  <section v-if="event_section === 4" class="event_item_section">
    <h2>Event Item - type_box</h2>
    <ul class="explain">
      <li>class="type_box"</li>
    </ul>
    <div class="design_box">
      <div class="list_wrap">
        <ul class="event_list">
          <li v-for="(item, idx) in sample_event.slice(0, 1)" :key="idx">
            <EventItem :item="item" :link="item.link" class="type_box" />
          </li>
        </ul>
      </div>
    </div>
    <pre class="code_box"><code>&lt;div class="list_wrap"&gt;
    &lt;ul class="event_list"&gt;
        &lt;li v-for="(item, idx) in sample_event" :key="idx"&gt;
            &lt;EventItem :item="item" :link="item.link" class="type_box" /&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code></pre>
  </section>
</template>

<script setup>
import { sample_goods, sample_event } from '@inmModule/test/data/publish/dummyData'
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'publish-guide'
})

const event_tab = ref(null)
const event_section = ref(0)
const tab_fn = (e) => {
  const tg = e.target
  const list = e.target.closest('ul').querySelectorAll('li')

  list.forEach((e, idx) => {
    if (tg === e.firstChild) {
      event_section.value = idx
    }
  })
}

// onMounted(tab_fn)
</script>

<style lang="scss" scoped>
.guide_wrap {
  padding: 30px 0;
  > section {
    margin: 0 20px;
    & + section {
      margin-top: 30px;
      padding-top: 30px;
      border-top: 1px dashed #ababab;
    }
    &.event_item_section {
      height: 820px;
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

/* goods list */
:deep(.goods_list).mobile {
  width: 375px;
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

/* event item */
:deep(.event_item) {
  width: 30%;
}

.tab_wrap {
  padding-top: 30px;
  margin: 30px 20px;
  border-top: 1px dashed #ababab;
}
</style>
