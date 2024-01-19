# oh-my-vueuse
基于 Vue3 编写的日常开发中一些常用 Hooks.
Some useful hooks in usual development based on Vue3.
## Install
```cmd
pnpm add oh-my-vueuse --save
```
## Hooks
### useCountDown
倒计时 Hook ，
#### 特征
利用 `requestAnimationFrame` 实现**高性能、精准**倒计时，分别体现在：
- 性能比较：页面不可见时，暂停倒计时代码的执行 `raf > setTimeout > setInterval`；
- 精准度：依赖于系统刷新率，时间间隔固定;
- 兼容性；[requestAnimationFrame | Can I use](https://caniuse.com/?search=requestAnimationFrame)
```ts
import { useCountDown } from 'oh-my-vueuse'

// time Ref<number>, setTime (t: number) => void
const [time, setTime] = useCountDown(5 * 1000)

// timestamp: 剩余时间(ms时间戳格式)
// setTime: 传入一个新的时间戳，重新开始倒计时
```
### 建设中... 🚜
...