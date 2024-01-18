import { onMounted, onUnmounted, ref, Ref } from 'vue'

export default function useCountDown(lastTime: number):[Ref<number>, (t: number) => void] {
  const time = ref(lastTime) // 剩余时间
  // 重设时间计时 ⌛️
  const setTime = (t: number) => {
    timer.value && clearTimeout(timer.value)
    startTime.value = Date.now()
    time.value = t
    calcDown()
  }
  
  const timer = ref(0) // setTimeout 计时器
  const startTime = ref(Date.now())
  const count = ref(0) // 递归次数
  const interval = ref(1000) // 时间间隔

  const calcDown = () => {
    time.value -= interval.value
    // 置为 0
    if(time.value < 0) {
      time.value = 0
      clearTimeout(timer.value)
      return
    }
    let offset = Date.now() - (startTime.value + count.value * interval.value) // 偏差
    if(offset < 0) offset = 0
    const nextDelay = interval.value - offset // 修正后间隔
    count.value = count.value + 1
    console.log("误差：" + offset + "ms，下一次执行：" + nextDelay + "ms后，离活动开始还有：" + time.value + "ms");
    timer.value = setTimeout(calcDown, nextDelay)
  }
  
  onMounted(() => {
    calcDown()
  })
  onUnmounted(() => {
    clearTimeout(timer.value)
  })

  return [time, setTime]
}
