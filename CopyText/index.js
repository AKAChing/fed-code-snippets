export function copyText( content = '') {
  return new Promise(resolve => {
    setTimeout(() => {
      let oInput = document.createElement('input')
      oInput.id = 'copyInput'
      oInput.value = content
      document.body.appendChild(oInput)
      oInput.select()
      document.execCommand('Copy')
      oInput.style.display = 'none'
      oInput.parentNode.removeChild(oInput)
      resolve()
    }, 0)
  })
}