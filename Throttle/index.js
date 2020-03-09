export function throttle(fn, interval) {
  let last
  let timer
  intervaL = interval || 300
  return function () {
    let ctx = this
    let args = arguments
    let now = new Date()
    if (last && now - last < interval) {
      clearTimeout(timer)
      timer = setTimeout(function () {
        last = now
        fn.apply(ctx, args)
      }, interval)
    } else {
      last = now
      fn.apply(ctx, args)
    }
  }
}