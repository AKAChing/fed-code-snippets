# Copy text
> Code
``` javascript
  function copyText( content = '', successInfo = 'copy success') {
    // it works by simulating the input element
    let oInput = document.createElement('input')
    oInput.id = 'copyInput'
    oInput.value = content
    document.body.appendChild(oInput)
    oInput.select()
    document.execCommand('Copy')
    oInput.style.display = 'none'
    alert(successInfo)
    // remove the element after copied
    oInput.parentNode.removeChild(oInput)
  }
```

> Example
``` javascript
  `<span id="info">test infomation<span>`
  let target = document.getElementById('info')
  copyText(target)
```

> Params

| Params | Description | Type | Default |
| :------: | :-----------: | :----: | :-------: |
| content | the content you want to copy | string | '' |
| successInfo | the message you want to alert after copied | string | 'copy success' |
