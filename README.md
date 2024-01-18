# oh-my-vueuse
基于 Vue3 编写的日常开发中一些常用 Hooks.
Some useful hooks in usual development based on Vue3.
## Install
```cmd
pnpm add oh-my-vueuse --save
```
## Hooks
### useCountDown
倒计时 Hook
```ts
import { useCountDown } from 'oh-my-vueuse'

// time Ref<number>, setTime (t: number) => void
const [time, setTime] = useCountDown(5 * 1000)

// time: 剩余时间
// setTime: 传入一个新的时间，重新倒计时
```
### 建设中... 🚜
...