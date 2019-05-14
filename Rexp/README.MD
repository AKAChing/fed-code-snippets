# Regular Expression

> Tel
``` javascript
  function validatePhone(str) {
    const reg = /^1[34578]\d{9}$/
    return reg.test(str)
  }
```

> Email
``` javascript
  function validateEmail(email) {
    const reg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/
    return reg.test(email)
  }
```

> PositiveInteger
``` javascript
  function validatePositiveInteger(num) {
    const reg = /^[1-9]\d*$/
    return reg.test(num)
  }
```

> Chinese ID card
``` javascript
  function validateIdNumber(idNum) {
    const reg = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/
    return reg.test(idNum)
  }
```

> Url query params
``` javascript
  function getUrlQueryParams() {
    let paramsObj = {}
    location.search.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => paramsObj[k] = v)
    return paramsObj
  }
```