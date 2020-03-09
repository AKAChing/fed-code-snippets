export function saveTicketInLocalStorage(ticket, limit = 5) {
  if (!ticket || typeof ticket != 'string') {
    console.error('ticket illegal')
    return
  }

  const existedTickets = localStorage.mstkt ? localStorage.mstkt.split(',') : []
  const newTicket = [ticket]
  const isExisted = existedTickets.includes(ticket)
  if (existedTickets.length < limit) { // 小于5条
    if (!isExisted) {
      const newTickets = newTicket.concat(existedTickets)
      localStorage.mstkt = newTickets
    }
  } else { // 超过5条
    if (!isExisted) {
      const newTickets = newTicket.concat(existedTickets)
      newTickets.length = limit
      localStorage.mstkt = newTickets
    }
  }
}

// 删除localstorage里字符串数组中的某一项
export function delTicketInLocalStorage(ticket) {
  if (!ticket || typeof ticket != 'string') {
    console.error('ticket illegal')
    return
  }
  const existedTickets = localStorage.mstkt ? localStorage.mstkt.split(',') : []
  const index = existedTickets.findIndex(item => item == ticket)
  if (index >= 0) {
    existedTickets.splice(index, 1)
    localStorage.mstkt = existedTickets
  } else {
    return
  }
}
