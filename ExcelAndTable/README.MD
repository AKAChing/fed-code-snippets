# Excel to Json data

> Dependencies
- xlsx

> Code
``` javascript
  function excelToJson(rawFile,keysOption) {
    let reader = new FileReader()
    reader.onload = function (e) {
      let data = e.target.result
      let workbook = XLSX.read(data, { type: 'binary' }) 
      let unitSheet = []  // a one dimensional array, only includes the data in someome sheet
      let totalSheet = [] // a two dimensional array, includes all the data in the all sheets
      let arrySheet = []  // a one dimensional array, includes all the data in the all sheets
      Object.keys(workbook.Sheets).forEach(key => {//提取每个sheet表中的每条数据并保存备用
        unitSheet = XLSX.utils.sheet_to_json(workbook.Sheets[key], { header: keysOption })
        keysOption && unitSheet.splice(0,1) // splice the first item bcz we don't need it, it just label, you can redefine it by keysOption
        totalSheet.push(unitSheet)
      })
      totalSheet.map(arr1 => arr1.map(arr2 => arrySheet.push(arr2))) // generate a one dimensional arry for back-end to receives
      console.log(arrySheet)
      return arrySheet
    }
    reader.readAsBinaryString(rawFile)
  }
```

> Example

Example excel file 

| Name | Age | Gender |
| :--: | :-: | :----: |
| Jack | 18 | male |
| Rose | 18 | female |

you can use the upload components (like: element-upload or ...) to get the raw file object
``` javascript
  excelToJson(rawFile) // [{ Name: 'Jack', Age: '18', Gender: 'male' }, { Name: 'Rose', Age: '18',  Gender: 'female' }]
```
or you can pass the keysOption to customize the key of each object in returns arry
``` javascript
  let keysOption = [ 'name', 'age', 'gender' ]
  excelToJson(rawFile, keysOption) // [{ name: 'Jack', age: '18', gender: 'male' }, { name: 'Rose', age: '18',  gender: 'female' }]
```
usually a excel file will have mutiple sheets, just do it as before because no matter how many sheets it has, it will merge each sheet to an array

> Params

| Params | Description | Type | required | default |
| :------: | :-----------: | :----: | :-------: | :---: |
| rowFile | the xlsx / xls raw file | file object | true | - |
| keysOption | customize the key of each column | string array | false | - |


# Download the element-ui table

> Dependencies
- element-ui
- xlsx
- file-saver

> Code
``` javascript
  function tableToExcel(table, name = 'table') {
    let el = XLSX.utils.table_to_book(table)
    let documents = XLSX.write(el, {
      bookType: 'xlsx',
      bookSST: true,
      type: 'array'
    })
    try {
      FileSaver.saveAs(new Blob([documents], {
        type: 'application/octet-stream'
      }), name + '.xlsx') // the file name
    } catch (e) {
      if (typeof console !== 'undefined') {
        console.log(e, documents)
      }
    }
    return documents
  }
```

> Example

``` javascript
  let tableEl = document.getElementById('targetTable')
  tableToExcel(tableEl, 'someListName') // it will open the file save window automatically
```

> Params

| Params | Description | Type | required | default |
| :------: | :-----------: | :----: | :-------: | :---: |
| table | the element-table element | DOM element | true | - |
| name | file name | string | false | 'table' |