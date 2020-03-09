export default function setFontSize() {
  const width = document.body.clientWidth
  const rootEl = document.documentElement
  const dpr = window.devicePixelRatio || 1
  if (width > 470) {
    rootEl.style.fontSize = 47 + 'px'
    rootEl.dataset.dpr = dpr
  } else {
    rootEl.style.fontSize = width / 10 + 'px'
    rootEl.dataset.dpr = dpr
  }
}