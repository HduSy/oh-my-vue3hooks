import { ref } from 'vue'

/**
 * Reactively track `window.devicePixelRatio`.
 *
 * @see https://vueuse.org/useDevicePixelRatio
 */
export function useDevicePixelRatio() {
  const pixelRatio = ref(1)
  if (window) {
    let media: MediaQueryList
    const observe = () => {
      pixelRatio.value = window!.devicePixelRatio
      cleanup()
      media = window!.matchMedia(`(resolution: ${pixelRatio.value}dppx)`)
      media.addEventListener('change', observe, { once: true })
    }
    const cleanup = () => {
      media?.removeEventListener('change', observe)
    }
    observe()
  }
  return [ pixelRatio ]
}