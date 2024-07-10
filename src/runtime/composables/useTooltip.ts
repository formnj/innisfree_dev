import { createApp, h } from 'vue'
import Tooltip from '@inmModule/components/dev/common/base/Tooltip.vue'

export const useTooltip = () => {
  // 현재 열린 Tooltip을 추적하기 위한 변수들
  let currentTooltipApp: any = null
  let currentMountEl: HTMLElement | null = null

  /**
   * Tooltip을 보여주는 함수
   * @param contents - Tooltip에 표시할 내용 (HTML 요소 또는 문자열)
   * @param event - 마우스 이벤트 객체
   *
   * @expamle
   * ```
   * const { showTooltip } = useTooltip()
   *
   * // 마우스 오버 핸들러 함수
   * const handleMouseOver = (event: MouseEvent) => {
   *   const tooltipContent = 'This is a tooltip'
   *   showTooltip(tooltipContent, event)
   * }
   *
   * // 템플릿에서 사용
   * <button @mouseover="handleMouseOver">Hover me for Tooltip</button>
   * ```
   */
  const showTooltip = (contents: HTMLElement | string, event: MouseEvent) => {
    // 기존에 열린 Tooltip이 있으면 닫기
    if (currentTooltipApp && currentMountEl) {
      currentTooltipApp.unmount()
      document.body.removeChild(currentMountEl)
    }

    // 이벤트가 발생한 요소의 위치를 기준으로 Tooltip 위치 설정
    const target = event?.target as HTMLElement
    const style = { top: `${target.offsetTop}px`, left: `${target.offsetLeft}px` }

    // 새로운 Tooltip 생성
    createTooltip({ contents, style })
  }

  /**
   * Tooltip을 생성하는 함수
   * @param options - Tooltip 옵션 (contents, style 등)
   */
  const createTooltip = (options: any) => {
    const { contents } = options

    // Tooltip을 마운트할 새로운 div 요소 생성
    const mountEl = document.createElement('div')
    document.body.appendChild(mountEl)

    // Tooltip 컴포넌트 생성 및 렌더링
    const tooltipApp = createApp({
      render() {
        return h(
          Tooltip,
          {
            ...options,
            onClose: () => {
              tooltipApp.unmount()
              document.body.removeChild(mountEl)
              currentTooltipApp = null
              currentMountEl = null
            }
          },
          {
            default: () => h('div', { innerHTML: contents })
          }
        )
      }
    })

    // Tooltip 마운트
    tooltipApp.mount(mountEl)
    currentTooltipApp = tooltipApp
    currentMountEl = mountEl
  }

  return { showTooltip }
}
