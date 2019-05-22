export function timeStampToYMD( timeStamp = new Date().getTime(), hms = false, connector = '-' ) {
  let dateObj = new Date(timeStamp)
  let year = dateObj.getFullYear(),
      month = dateObj.getMonth() + 1,
      date = dateObj.getDate(),
      hours = dateObj.getHours(),
      minutes = dateObj.getMinutes(),
      seconds = dateObj.getSeconds()
  // prefix '0' if value.length == 0
  if ( String(month).length == 1 ) month = '0' + month
  if ( String(date).length == 1 ) date = '0' + date
  if ( String(hours).length == 1 ) hours = '0' + hours
  if ( String(minutes).length == 1 ) minutes = '0' + minutes
  if ( String(seconds).length == 1 ) seconds = '0' + seconds
  if ( hms ) {
    return String( year + connector + month + connector + date + ' ' + hours + ':' + minutes + ':' + seconds )
  } else {
    return String( year + connector + month + connector + date )
  }
}

export function getDateRange( num  = 0 ) {
  let timeStamp, start_time, end_time
  if ( num >= 0 ) {
    timeStamp = new Date( new Date().getTime() - -num * 1000 * 60 * 60 * 24 )
    start_time = timeStampToYMD(new Date().getTime())
    end_time = timeStampToYMD(timeStamp)
    return [start_time, end_time]
  } else {
    timeStamp = new Date(new Date().getTime() + num * 1000 * 60 * 60 * 24)
    start_time = timeStampToYMD(timeStamp)
    end_time = timeStampToYMD(new Date().getTime())
    return [start_time, end_time]
  }
}