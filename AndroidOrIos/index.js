export function getPlatformType() {
  let ua = window.navigator.userAgent
  let isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1
  let isIOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  if (isAndroid) {
    return 0
  } else if (isIOS) {
    return 1
  } else {
    return 3
  }
}