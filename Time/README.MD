# Time stamp to YMD 
> Code
``` javascript
  function timeStampToYMD( timeStamp = new Date().getTime(), hms = false, connector = '-' ) {
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
```

> Example
``` javascript
  let dateObject = new Date() // Mon May 13 2019 15:57:28 GMT+0800 (中国标准时间)
  let timeStamp = new Date().getTime() // 1557734177210
  timeStampToYMD( dateObject ) // "2019-05-13"
  timeStampToYMD( timeStamp ) // "2019-05-13"
```

> Params

| Params | Description | Type | Default |
| :------: | :-----------: | :----: | :-------: |
| timestamp | new Date( )/new Date( ).getTime( ) | date object / number | new Date( ) |
| hms | whether to return hours,minutes and seconds | boolean | false |
| connector | connector between year,month and date | string | '-' |


# get time range by number
> Code
``` javascript
  function getDateRange( num  = 0 ) {
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
```

> Example
``` javascript
  getDateRange(0) // ["2019-05-13", "2019-05-13"]
  getDateRange(1) // ["2019-05-13", "2019-05-14"]
  getDateRange(7) // ["2019-05-13", "2019-05-20"]
  getDateRange(-30) // ["2019-04-13", "2019-05-13"]
  getDateRange(-365) // ["2018-05-13", "2019-05-13"]
```

> Params

| Params | Description | Type | Default |
| :------: | :-----------: | :----: | :-------: |
| num | how many days you want | number | 0 |