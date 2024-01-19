import { onMounted, onUnmounted, ref, Ref } from 'vue'

export default function useCountDown(timestamp: number): [time: Ref<number>, setTime: (time: number) => void] {
  const lastTime = ref(timestamp) // 剩余时间
  // 重设时间计时 ⌛️
  const setTime = (timestamp: number) => {
    cancelAnimationFrame(timer.value)
    startTime.value = Date.now()
    lastTime.value = timestamp
    loop()
  }

  const timer = ref(0) // requestAnimationFrame 计时器
  const startTime = ref(Date.now()) // 开始时间 !important
  const interval = ref(1000) // 时间间隔 1s
  const past = ref(0) // 经过时间

  const calcDown = () => {
    startTime.value = Date.now() // 更新开始时间
    lastTime.value = Math.round((lastTime.value - past.value)/1000) * 1000
    if(lastTime.value <= 0) {
      // 倒计时终止
      cancelAnimationFrame(timer.value)
      lastTime.value = 0
    }
  }
  // raf > setTimeout > setInterval
  const loop = () => {
    let now = Date.now()
    past.value = now - startTime.value
    if(past.value >= interval.value) {
      calcDown()
    }
    timer.value = requestAnimationFrame(loop)
  }

  onMounted(() => {
    loop()
  })
  onUnmounted(() => {
    cancelAnimationFrame(timer.value)
  })

  return [lastTime, setTime]
}