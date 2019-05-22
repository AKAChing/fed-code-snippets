export function validatePhone(str) {
  const reg = /^1[34578]\d{9}$/
  return reg.test(str)
}

export function validateEmail(email) {
  const reg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/
  return reg.test(email)
}

export function validatePositiveInteger(num) {
  const reg = /^[1-9]\d*$/
  return reg.test(num)
}

export function validateIdNumber(idNum) {
  const reg = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/
  return reg.test(idNum)
}

export function getUrlQueryParams() {
  let paramsObj = {}
  location.search.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => paramsObj[k] = v)
  return paramsObj
}

export function lowercaseLetter(str){
  const reg = /^[a-z]+$/
  return reg.test(str)
}

export function uppercaseLetter(str){
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

export function letter(str){
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

export function isIncludesWhiteSpace(str){
  if(str) return str.includes(' ')
}

export function isIncludesDot(str){
  if(str) return str.includes('.')
}

export function isLongerThan(str,length){
  if(str) return str.length > length
}

export function isShorterThan(str,length){
  if(str) return str.length < length
}