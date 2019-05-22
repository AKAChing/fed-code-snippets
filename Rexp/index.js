function validatePhone(str) {
  const reg = /^1[34578]\d{9}$/
  return reg.test(str)
}

function validateEmail(email) {
  const reg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/
  return reg.test(email)
}

function validatePositiveInteger(num) {
  const reg = /^[1-9]\d*$/
  return reg.test(num)
}

function validateIdNumber(idNum) {
  const reg = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/
  return reg.test(idNum)
}

function getUrlQueryParams() {
  let paramsObj = {}
  location.search.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => paramsObj[k] = v)
  return paramsObj
}

function lowercaseLetter(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

function uppercaseLetter(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

function letter(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

function isIncludesWhiteSpace(str) {
  if (str) return str.includes(' ')
}

function isIncludesDot(str) {
  if (str) return str.includes('.')
}

function isLongerThan(str, length) {
  if (str) return str.length > length
}

function isShorterThan(str, length) {
  if (str) return str.length < length
}