# Copy text
> Code
``` javascript
function copyText( content = '') {
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
```

> Example
``` javascript
  `<span id="info">test infomation<span>`
  let target = document.getElementById('info')
  copyText(target).then(() => {
    console.log('copied success')
  })
```

> Params

| Params | Description | Type | Default |
| :------: | :-----------: | :----: | :-------: |
| content | the content you want to copy | string | '' |
