import { observable } from 'mobx'

const counterStore = observable({
  counter: 0,
  counterStore() {
    this.counter++
  },
  increment() {
    this.counter++
  },
  decrement() {
    this.counter--
  },
  incrementAsync() {
    setTimeout(() => {
      this.counter++
    }, 1000)
  },
  formatDate(num) {//毫秒转换
    const n = num
    const date = new Date(n)
    let y:any = date.getFullYear();
    let m:any = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    let d:any = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    if (!num){
      y = ""
      m = ""
      d = ""
    }
    return y + '-' + m + '-' + d;
  }
})
export default counterStore
