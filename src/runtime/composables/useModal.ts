import { createApp, h } from 'vue'
import Modal from '@inmModule/components/dev/common/base/Modal.vue'
import { useUtils } from './useUtils'
import { useState } from '#imports'

interface ModalProps {
  id?: string | number
  title?: string
  /** 팝업 내용 */
  contents: HTMLElement | string
  /** 닫기 버튼 노출 여부 */
  closeButton?: boolean
  /** 닫기 버튼 텍스트 */
  closeButtonText?: string
  /** 확인 버튼 텍스트 */
  okButtonText?: string
  resolve?: Function
  reject?: Function
}

export const useModal = () => {
  const { isFunction } = useUtils()
  const modalList = useState<Array<ModalProps>>('modalList', () => [])

  const bodyScrollLock = useBodyScrollLock()

  /**
   * 시스템 얼럿을 표시하는 함수
   * @param modal - ModalProps 타입의 모달 정보
   * @returns Promise
   *
   * @expamle
   * ```
   * const { showAlert } = useModal()
   *
   * // 버튼 클릭 핸들러
   * const handleClick = () => {
   *   showAlert({ contents: 'This is an alert!' }).then(() => {
   *     console.log('Alert closed')
   *   })
   * }
   *
   * // 템플릿에서 사용
   * <button @click="handleClick">Show Alert</button>
   * ```
   */
  const showAlert = (modal: ModalProps): Promise<any> => {
    bodyScrollLock.lock() // 스크롤 잠금
    return new Promise((_resolve, _reject) => {
      // resolve와 reject 함수를 래핑하여 모달을 닫는 로직 추가
      const resolve = (r: any) => {
        if (isFunction(_resolve)) {
          _resolve(r)
          closeModal()
        }
      }

      const reject = (r: any) => {
        if (isFunction(_reject)) {
          _reject(r)
          closeModal()
        }
      }

      modalList.value.push(modal) // 모달 리스트에 추가
      createModal({ ...modal, resolve, reject }) // 모달 생성
    })
  }

  /**
   * 모달을 종료하는 함수
   */
  const closeModal = async () => {
    modalList.value.pop() // 모달 리스트에서 제거
    setTimeout(() => {
      if (modalList.value.length === 0) {
        bodyScrollLock.unlock() // 스크롤 잠금 해제
      }
    })
  }

  /**
   * 모달을 생성하고 DOM에 마운트하는 함수
   * @param options - ModalProps 타입의 모달 옵션
   */
  const createModal = (options: ModalProps) => {
    const { contents } = options

    // 모달을 마운트할 새로운 div 요소 생성
    const mountEl = document.createElement('div')
    document.body.appendChild(mountEl)

    // Modal 컴포넌트 생성 및 렌더링
    const modalApp = createApp({
      render() {
        return h(
          Modal,
          {
            ...options,
            type: 'alert',
            onOk: () => {
              modalApp.unmount()
              document.body.removeChild(mountEl)
            },
            onClose: () => {
              modalApp.unmount()
              document.body.removeChild(mountEl)
            }
          },
          {
            header: () => h('div', { innerHTML: `<h2>${options.title || ''}</h2>` }),
            default: () => h('div', { innerHTML: contents })
          }
        )
      }
    })

    modalApp.mount(mountEl) // Modal 마운트
  }

  return { modalList, showAlert, closeModal }
}

const useBodyScrollLock = () => {
  const lock = () => (document.body.style.overflow = 'hidden')

  const unlock = () => {
    setTimeout(() => {
      if ([...document.querySelectorAll('.modal_wrap.active')].filter((element) => !element.classList.contains('layer')).length === 0)
        document.body.style.overflow = ''
    })
  }

  return { lock, unlock }
}
