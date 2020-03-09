# Download the canvas
> Code
``` javascript
  function downLoadCanvas(canvas, name = 'iamge') {
    let type = 'png', imgData = canvas.toDataURL(type)
    const _fixType = function (type) {
      type = type.toLowerCase().replace(/jpg/i, 'jpeg')
      let r = type.match(/png|jpeg|bmp|gif/)[0]
      return 'image/' + r
    }
    imgData = imgData.replace(_fixType(type), 'image/octet-stream');
    const saveFile = function (data, filename) {
      let save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
      let event = document.createEvent('MouseEvents')
      save_link.href = data
      save_link.download = filename
      event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
      save_link.dispatchEvent(event)
    }
    let filename = name + '.' + type
    saveFile(imgData, filename)
  }
```

> Example
``` javascript
  let qrCodeEl = document.getElementById('qrCode')
  downLoadCanvas(qrCodeEl, 'myQrcode')
```

> Params

| Params | Description | Type | Default |
| :------: | :-----------: | :----: | :-------: |
| canvas | the canvas you want to download | canvas object | - |
| name | the file name you want to save | string | 'iamge' |
