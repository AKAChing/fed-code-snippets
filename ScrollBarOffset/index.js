export function addScrollBarOffsetWidth(className) {
  const isTouchDevice = "ontouchstart" in window
  if (!isTouchDevice) { // 如果是触摸屏则滚动条不占据空间 不进行操作
    let observer = new MutationObserver(mutations => {
      const flag = mutations.some(mutation => mutation.target.className == className) // 判断是否含有目标属性
      if (flag) {
        document.querySelector('body').style.paddingRight = 17 + 'px' // 有overflow属性则给body添加padding-right
      } else {
        document.querySelector('body').style.paddingRight = 0 + 'px' // 没有则归零
      }
    })
    observer.observe(document.querySelector('body'), { attributes: true, attributeFilter: ['class'] }) 
  }
}
