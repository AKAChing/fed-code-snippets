# Regular Expression

> tel
``` javascript
  function validatePhone(str) {
    const reg = /^1[34578]\d{9}$/
    return reg.test(str)
  }
```

> email
``` javascript
  function validateEmail(email) {
    const reg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/
    return reg.test(email)
  }
```

> positiveInteger
``` javascript
  function validatePositiveInteger(num) {
    const reg = /^[1-9]\d*$/
    return reg.test(num)
  }
```

> chinese ID card
``` javascript
  function validateIdNumber(idNum) {
    const reg = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/
    return reg.test(idNum)
  }
```

> url query params
``` javascript
  function getUrlQueryParams() {
    let paramsObj = {}
    location.search.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => paramsObj[k] = v)
    return paramsObj
  }
```

> lowercase letter
``` javascript
  function lowercaseLetter(str){
    const reg = /^[a-z]+$/
    return reg.test(str)
  }
```

> uppercase letter
``` javascript
  function uppercaseLetter(str){
    const reg = /^[A-Z]+$/
    return reg.test(str)
  }
```

> uppercase and lowercase letter
``` javascript
  function letter(str){
    const reg = /^[A-Z]+$/
    return reg.test(str)
  }
```

> whiteSpace
``` javascript
  function isIncludesWhiteSpace(str){
    if(str) return str.includes(' ')
  }
```

> dot
``` javascript
  function isIncludesDot(str){
    if(str) return str.includes('.')
  }
```

> longger than
``` javascript
  function isLongerThan(str,length){
    if(str) return str.length > length
  }
```

> shorter than
``` javascript
  function isShorterThan(str,length){
    if(str) return str.length < length
  }
```