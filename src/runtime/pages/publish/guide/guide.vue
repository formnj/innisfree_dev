<template>
  <section>
    <h2>디자인 파일</h2>
    <ul class="explain">
      <li>
        <a
          href="https://www.figma.com/file/rLUIRIJp3v6t9tNs5xTagk/MO---01-%EB%AA%A8%EB%B0%94%EC%9D%BC---SHARE?type=design&node-id=0%3A1&mode=design&t=uacV7h9EqHaxwbI4-1"
          target="_blank"
          >모바일 디자인(새창)</a
        >
      </li>
      <li>
        <a
          href="https://www.figma.com/file/JpGt7vDMmoZ4XOLR9SWI3o/PC---02-%EB%8D%B0%EC%8A%A4%ED%81%AC%ED%83%91---SHARE?type=design&node-id=1%3A2&mode=design&t=4NFN2JpCWKZxFOsF-1"
          target="_blank"
          >PC 디자인(새창)</a
        >
      </li>
    </ul>
  </section>

  <section>
    <h2>공통</h2>
    <ul class="explain">
      <li>Vue Guide : <a href="https://vuejs.org/style-guide/" target="_blank">https://vuejs.org/style-guide/</a></li>
      <li>ESLint / editorconfig / prettier 익스텐션 설치</li>
      <li>test용 dummy 데이터 : @inmModule/test/data/publish/dummyData</li>
      <li>image path : 샘플이미지 = public / 공통이미지 = @inmModule/assets/images</li>
      <li>Props : 카멜케이스 / 언더스코어 프리픽스 사용 금지</li>
    </ul>
  </section>

  <section>
    <h2>Style</h2>
    <ul class="explain">
      <li>Style의 선언 규칙은 [넓이 / 외부여백 / 내부여백 / 폰트 / 배경 / 테두리 / 정렬 / 위치 / 블럭 / 변형] 순으로 선언함</li>
    </ul>
    <pre class="code_box"><code>.test {
    width:10px;
    height:10px;
    margin:10px;
    padding:10px;
    color:#333;
    font-size:14px;
    font-family:'dotum', sans-serif;
    font-weight:500;
    letter-spacing:-0.05em;
    background:url('/test.jpg');
    border:1px solid #ccc;
    text-align:left;
    float:none;
    position:relative;
    display:block;
    transform:rotate(90deg);
}</code></pre>
  </section>

  <section>
    <h2>Images path</h2>
    <ul class="explain">
      <li>사용 이미지와 더미 이미지의 경로 선언에 차별을 둠</li>
    </ul>
    <pre class="code_box"><code>사용 이미지(PC) : @inmModule/assets/images
사용 이미지(MO) : @inmModule/assets/mo_images
더미 이미지 : /images/sam</code></pre>
  </section>

  <section>
    <h2>media query</h2>
    <ul class="explain">
      <li>break point : mo_749, mo_639, mo_519, mo_413, mo_410, mo_374, mo_359 (뒤의 숫자는 max-width)</li>
      <li>모바일의 각 레이아웃에 선언된 @import "~/assets/scss/mobile.scss";는 공통콤포넌트에 대한 정의를 담습니다.</li>
    </ul>
    <pre class="code_box"><code>&lt;style lang="scss" scoped&gt;
media query : @import "~/assets/scss/_mo_mixin";
@include mo_749 {
  스타일 선언
}
&gt;</code></pre>
  </section>

  <section>
    <h2>Naming</h2>
    <ul class="explain">
      <li>영문 소문자로 시작하며, 대문자의 사용은 지양함 (숫자로 시작할 수 없음)</li>
      <li>[형태, 의미, 상태] 순서로 조합하되, 3단계를 넘지 않도록 권장함</li>
      <li>Class는 Underscore 방식으로 사용함</li>
      <li>ID는 고유 기능을 명시하도록 네이밍하며, 중복하여 사용하지 않음</li>
    </ul>
    <pre class="code_box"><code>.board_type_list01(o)
.01board_type_list(x)</code></pre>
  </section>
</template>

<script setup>
import { definePageMeta, reactive } from '#imports'

definePageMeta({
  layout: 'publish-guide'
})

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

const sample_goods = [
  {
    // img:("/images/sam/sam_goods_list_01.jpg"),
    img: 'https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900',
    overflip: 'https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900',
    cate: 'BEST',
    name: '히알루론 수분 선크림 SPF 50+ PA++++',
    price: '11,000',
    sale: '~50%',
    cost: '26,000',
    status: 'sold_out',
    sticker: [
      { txt: 'type01', type: 'type01' },
      { txt: 'type02', type: 'type02' },
      { txt: 'type03', type: 'type03' },
      { txt: 'type04', type: 'type04' }
    ],
    hash: ['#스킨팩', '#화장솜', '#순면화장솜']
  },
  {
    img: '/images/sam/sam_goods_list_02.jpg',
    overflip: '/images/sam/sam_goods_list_02-1.jpg',
    name: '히알루론 수분 선크림 SPF 50+ PA++++',
    status: 'coming_soon',
    sticker: [{ txt: '증정', type: 'type02' }]
  },
  {
    img: '/images/sam/sam_goods_list_03.jpg'
  },
  {
    img: '/images/sam/sam_goods_list_04.jpg'
  },
  {
    img: '/images/sam/sam_goods_list_04.jpg'
  }
]

const sam_menu = [
  {
    depth01: '카테고리',
    sub_depth: ['카테고리', '특가', '이벤트', '베스트', '라이브', 'FOR ME', 'ABOUT', '고객센터', '마이페이지', '공병수거 캠페인', '멤버십']
  },
  {
    depth01: '유형별',
    sub_depth: ['유형별', '피부고민']
  },
  {
    depth01: '스킨케어',
    sub_depth: ['스킨케어', '메이크업', '남성', '헤어/바디/펫', '기획 세트', '미용소품']
  },
  {
    depth01: '전체',
    sub_depth: [
      '전체',
      '에센스/세럼/앰플',
      '로션/크림',
      '스킨/토너/미스트',
      '립/아이케어',
      '선케어',
      '오일/마사지',
      '클렌징',
      '팩/마스크',
      '기획 세트',
      '기타'
    ]
  }
]
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
        (input_opt.opt = '_type="' + input_opt.type + '" :isswitch="' + input_opt.isswitch + '" _text="Label"')
      break

    case 'error':
      ;(input_opt.isswitch = false),
        (input_opt.type = 'text'),
        (input_opt.Placeholder = '문구를 입력해주세요'),
        (input_opt.opt =
          '_type="' +
          input_opt.type +
          '" _placeholder="' +
          input_opt.Placeholder +
          '"' +
          '" :isError="' +
          input_opt.isError +
          '" _err_text="Error Text"'),
        (input_opt.isError = true),
        (input_opt.err_text = 'Error Text')
      break

    case 'pw':
      ;(input_opt.isswitch = false),
        (input_opt.type = 'password'),
        (input_opt.Placeholder = '비밀번호를 입력해주세요'),
        (input_opt.opt = '_type="' + input_opt.type + '" _placeholder="' + input_opt.Placeholder + '"'),
        (input_opt.isError = false)
      break

    case 'check':
      ;(input_opt.isswitch = false), (input_opt.type = 'checkbox'), (input_opt.opt = '_type="' + input_opt.type + '" _text="Label"')
      break

    case 'radio':
      ;(input_opt.isswitch = false), (input_opt.type = 'radio'), (input_opt.opt = '_type="' + input_opt.type + '" _text="Label"')
      break

    default:
      ;(input_opt.isswitch = false),
        (input_opt.type = 'text'),
        (input_opt.Placeholder = '문구를 입력해주세요'),
        (input_opt.opt = '_type="' + input_opt.type + '" _placeholder="' + input_opt.Placeholder + '"'),
        (input_opt.isError = false)
      break
  }
}
/* //inputs type function */

const modal = {
  open: (_target, _type) => {
    document.getElementById(_target).classList.add('active', _type)
    const body = document.querySelector('body')
    const pageY = document.body.scrollTop || document.documentElement.scrollTop

    if (!body.hasAttribute('scrollY')) {
      body.setAttribute('scrollY', String(pageY))
      body.classList.add('lockbody')
    }
    body.addEventListener('touchmove', modal.lockScrollHandle, { passive: false })
  },
  close: (_target) => {
    event.target.closest('.modal_wrap').setAttribute('class', 'modal_wrap')
    const body = document.querySelector('body')

    if (body.hasAttribute('scrollY')) {
      body.classList.remove('lockbody')
      body.scrollTop = Number(body.getAttribute('scrollY'))
      body.removeAttribute('scrollY')
    }

    body.removeEventListener('touchmove', modal.lockScrollHandle, { passive: true })
  },
  lockScrollHandle(event) {
    const e = event || window.event

    // 멀티 터치는 터치 되게 한다
    if (e.touches.length > 1) return

    // event 초기화 속성이 있음 초기화
    e.preventDefault()
  }
}
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

.breadcrumb {
  .inner {
    margin: 0 !important;
  }
}
</style>
