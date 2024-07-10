/* 공통 - 모달 */
export const modal = {
  open: (_target, _type) => {
    // console.log(_target, _type);
    document.getElementById(_target).className = 'modal_wrap active ' + _type
    const body = document.querySelector('body')
    const pageY = document.body.scrollTop || document.documentElement.scrollTop

    if (_type.indexOf('layer') < 0 && _type.indexOf('fullMo') < 0) {
      if (!body.hasAttribute('scrollY')) {
        body.setAttribute('scrollY', String(pageY))
        body.classList.add('lockbody')
      }
      body.addEventListener('touchmove', modal.lockScrollHandle, { passive: false })
    }

    // layer modal 위치
    if (_type.indexOf('layer') >= 0) {
      const tg = event.target
      const rect = event.target.getBoundingClientRect()
      const doc = document.documentElement.clientWidth / 2

      const top = tg.offsetTop + tg.offsetHeight

      if (tg.nextElementSibling != null && tg.nextElementSibling.classList.contains('modal_wrap')) {
        if (rect.left < doc) {
          const left = tg.offsetLeft + tg.offsetWidth
          tg.nextSibling.style.cssText = `top:${top}px; left:${left}px;`
        } else if (rect.left > doc) {
          const modalW = tg.nextSibling.querySelector('.modal_container').offsetWidth
          const left = tg.offsetLeft - modalW
          tg.nextSibling.style.cssText = `top:${top}px; left:${left}px;`
        }
      }
    }
  },
  close: (_target) => {
    event.target.closest('.modal_wrap').setAttribute('class', 'modal_wrap')
    event.target.closest('.modal_wrap').removeAttribute('style')
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
/* //공통 - 모달 */

/* toast 모달 */
export const toast_pop = (_time) => {
  //시간 지정해서 사라지게 처리
  let allmodal = document.querySelectorAll('.modal_wrap')
  allmodal.forEach((el) => {
    el.classList.remove('active')
  })
  let tostmessage = document.querySelector('.modal_wrap.toast')
  tostmessage.classList.add('active')
  let body = document.querySelector('body')
  setTimeout(function () {
    tostmessage.classList.remove('active', 'toast')
    body.classList.remove('lockbody')
  }, _time)
}

/* PC - 상품 목록 드롭다운 */
export const Drop_Down = () => {
  let selet = document.querySelector('.pdtSortTab_wrap ul')
  selet.classList.toggle('active')
  if (selet.classList.contains('active')) {
    //console.log(selet.clientHeight)
    selet.style.height = 'auto'
    selet.style.maxHeight = '332px'
    selet.style.border = '1px solid #888'

    // console.log(selet.clientHeight) + 'px'
  } else {
    selet.style.border = 'none'
    selet.style.height = '0px'
    selet.style.maxHeight = '0px'
  }
}
/* //PC - 상품 목록 드롭다운 */

/* 공통 - 클릭 타겟에 active 클래스 추가(ex-옵션 선택) */
export const setFilter = (event) => {
  const target = event.currentTarget
  target.classList.toggle('active')
}
/* //공통 - 클릭 타겟에 active 클래스 추가(ex-옵션 선택) */
