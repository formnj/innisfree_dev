<template>
  <Tabs
    tabType="type_01 product_tab"
    :item="[{ txt: '상세정보' }, { txt: '리뷰', Cnt: 299 }, { txt: '유의사항' }, { txt: '문의' }]"
    :tabidx="0"
    @click="tabContShow" />
</template>
<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
import { onMounted } from '#imports'

const props = defineProps({
  isMo: {
    //모바일 여부
    type: Boolean,
    default: false
  }
})

onMounted(() => {
  let gnbH, contTop, tri
  if (props.isMo) {
    gnbH = document.getElementsByTagName('header')[0].offsetHeight
  }
  const target = document.querySelector('.product_tab').parentElement
  window.addEventListener('scroll', () => {
    if (!props.isMo) {
      gnbH = document.getElementsByClassName('gnb_wrap')[0].offsetHeight
    }

    if (
      !props.isMo
        ? (contTop = document.getElementsByClassName('tab_contents')[0].getBoundingClientRect().y - gnbH - target.offsetHeight)
        : (contTop = document.getElementsByClassName('tab_contents')[0].getBoundingClientRect().y - target.offsetHeight)
    );
    if (!props.isMo ? (tri = 0) : (tri = gnbH));
    if (contTop < tri) {
      if (!target.classList.contains('sticky')) {
        target.classList.add('sticky')

        let top
        if (!props.isMo ? (top = 'top:' + gnbH + 'px;') : (top = 'top:0'));
        target.style.cssText = top
      }
    } else if (contTop > 0) {
      target.classList.remove('sticky')
      target.style.cssText = ''
    }
  })
})

const tabContShow = (e) => {
  const el = e.target
  const clickedLi = el.closest('li')
  const tabIdx = [...el.closest('li').parentElement.children].indexOf(clickedLi)
  const tabConts = [...el.closest('ul').parentElement.nextElementSibling.children]
  let contPadding = ''
  !props.isMo
    ? (contPadding =
        document.getElementsByClassName('gnb_wrap')[0].offsetHeight + document.getElementsByClassName('tab_wrap')[0].offsetHeight)
    : (contPadding = 60)

  if (!(tabIdx == 3)) {
    for (const i in tabConts) {
      tabConts[i].style.display = 'none'
    }

    // if (tabIdx == 0 || tabIdx == 1) {
    //   tabConts[0].style.display = "block";
    //   tabConts[1].style.display = "block";
    // }
    tabConts[tabIdx].style.display = 'block'
    const contsTop = tabConts[tabIdx].getBoundingClientRect().y + window.pageYOffset - contPadding
    window.scrollTo({ top: contsTop, behavior: 'smooth' })
  } else if (tabIdx == 3) {
    modal.open('prod_qna_wrap', 'full prod_qna_wrap')
  }
}
</script>
<style lang="scss" scoped>
.tab_wrap {
  :deep(em) {
    padding: 0;
  }

  &.sticky {
    width: 100%;
    background-color: #fff;
    position: sticky;
    left: 0;
    z-index: 11;

    ul {
      width: 1280px;
      margin: 0 auto;
    }
  }
}

.tab_contents {
  .tab_cont {
    padding: 60px 0;
    display: none;
  }
}
</style>
