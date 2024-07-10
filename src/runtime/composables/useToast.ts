import { createApp } from 'vue'
import ToastContainer from '@inmModule/components/dev/common/composition/ToastContainer.vue'
import { useUtils } from './useUtils'
import { useState } from '#imports'

let toastContainerApp = null
let toastContainerInstance: ComponentPublicInstance | undefined

interface ToastProps {
  id: string
  message: string
  duration?: number
  color?: string
  textColor?: string
  opacity?: number
}

export function useToast() {
  const { getUUID } = useUtils()
  const toastList = useState<Array<ToastProps>>('toastList', () => [])

  function createToastContainer() {
    if (!toastContainerInstance) {
      const containerEl = document.createElement('div')
      document.body.appendChild(containerEl)

      toastContainerApp = createApp(ToastContainer)

      toastContainerInstance = toastContainerApp.mount(containerEl)
    }
  }

  /**
   * 토스트 팝업을 생성하는 함수.
   *
   * @param {Object} params - 토스트 팝업 생성에 필요한 매개변수 객체.
   * @param {string} [params.message=''] - 토스트에 표시할 메세지.
   * @param {number} [params.duration=5000] - 토스트가 화면에 표시되는 지속 시간 (밀리초).
   * @param {string} [params.color='black'] - 토스트의 배경 색상.
   * @param {string} [params.textColor='white'] - 토스트의 문자 색상.
   * @param {number} [params.opacity=0.8] - 토스트의 투명도.
   *
   * @example
   * addToast({ message: 'Hello, world!', duration: 3000, color: 'blue', textColor: 'yellow', opacity: 0.9 });
   */
  function addToast({ message = '', duration = 5000, color = 'black', textColor = 'white', opacity = 0.8 }) {
    const id = getUUID()

    if (!document.querySelector('toast-container')) {
      createToastContainer()
    }
    setTimeout(() => {
      toastList.value.push({ id, message, color, textColor, opacity })

      setTimeout(() => {
        removeTaost(id)
      }, duration)
    }, 0)
  }

  function removeTaost(id: string) {
    toastList.value = toastList.value.filter((item) => item.id != id)
  }
  return { addToast, removeTaost, toastList }
}
