import XLSX from 'xlsx'
import FileSaver from 'file-saver'
export function excelToJson(rawFile, keysOption) {
  let reader = new FileReader()
  reader.onload = function (e) {
    let data = e.target.result
    let workbook = XLSX.read(data, { type: 'binary' }) 
    let unitSheet = []  // a one dimensional array, only includes the data in one sheet
    let totalSheet = [] // a two dimensional array, includes the data in all sheets
    let arrySheet = []  // a one dimensional array, includes the data in all sheets
    Object.keys(workbook.Sheets).forEach(key => {
      unitSheet = XLSX.utils.sheet_to_json(workbook.Sheets[key], { header: keysOption })
      keysOption && unitSheet.splice(0,1) // splice the first item bcz we don't need it, it's a label, you can redefine it by keysOption
      totalSheet.push(unitSheet)
    })
    totalSheet.map(arr1 => arr1.map(arr2 => arrySheet.push(arr2))) // generate a one dimensional array for back-end
    console.log(arrySheet)
    return arrySheet
  }
  reader.readAsBinaryString(rawFile)
}

export function tableToExcel(table, name = 'table') {
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