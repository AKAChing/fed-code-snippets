/**
 * @param {file} 文件对象
 * @param {imgType} 图片格式限制 
 * @param {size} 图片大小 
 * @param {width} 图片分辨率宽度 
 * @param {height} 图片分辨率高度 
 * @param {equalRation} 是否开启等比限制
 */
export function checkImageFile(file, imgType = 'png', size = 1, width = 100, height = 100, equalRation = true ) {
  const isCorrectImgType = file.type === `image/${imgType}`
  const isLessThanSize = file.size / 1024 / 1024 < size
  if (!isCorrectImgType) {
    Message.error(`图片格式错误, 只能为${imgType}格式`)
    return false
  } else if (!isLessThanSize) {
    console.log(isLessThanSize)
    Message.error(`图片大小不能超过${size}MB`)
    return false
  } else {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = function(e) {
        let image = new Image()
        image.onload = function() {
          let imgWidth = this.width
          let imgHeight = this.height
          if (equalRation) {
            if (imgWidth !== imgHeight) {
              Message.error(`图片比例必须为1:1`)
              reject()
              return false
            }
          } else {
            if (imgWidth !== width && imgHeight !== height) {
              Message.error(`图片分辨率必须为${width}像素x${height}像素`)
              reject()
              return false
            }
          }
          resolve()
        }
        image.src = e.target.result
      }
      reader.readAsDataURL(file)
    })
  }
}
