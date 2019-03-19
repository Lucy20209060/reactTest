let timeOut = null;
export const debounce = (fn, time=100) => {
    // 短时间内清除上一个定时器 不会重复触发fn
  clearTimeout(timeOut);
  timeOut = setTimeout(()=>{
    fn();
    timeOut = null;
  },time)
}