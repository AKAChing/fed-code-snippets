const siteKey = 'xxxxxxxxxxxxxxxxx', // 账户key
    domain = 'www.recaptcha.net'; // api文件地址

export function excutor(callback) {
  grecaptcha.execute(siteKey, { action: 'login' }).then( token => { // 触发验证
    callback && callback(token) // 通过回调把token传出去
  });
}
export function addRecaptcha(callback) {
  return new Promise((resolve, reject) => {
    document.getElementById('recaptcha') && document.getElementById('recaptcha').remove()
    let script = document.createElement("script");
    script.src = `https://${domain}/recaptcha/api.js?render=${siteKey}`; // 根据环境切换api地址
    script.async = 'async'
    script.defer = 'defer'
    script.id ="recaptcha"
    script.onload = () => { // script onlaod回调
      grecaptcha.ready(() => {
        grecaptcha.execute(siteKey, { action: 'login' }).then( token => { // 触发验证
          resolve(token)
        });
        console.log('recaptcha loaded')
      });
    }
    script.onerror = () => {
      console.log('recaptcha loaded failed')
      reject(err)
    }
    document.body.appendChild(script) // 插入script
  })
}
