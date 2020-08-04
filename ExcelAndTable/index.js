import XLSX from 'xlsx'
import FileSaver from 'file-saver'
export function excelToJson(rawFile) {
  let reader = new FileReader();
  let jsonArr = []
  reader.onload = function(e) {
    let data = e.target.result;
    let workbook = XLSX.read(data, {
      type: 'binary'
    });
    let sheets = workbook.Sheets
    Object.keys(sheets).forEach(key => {
      let unitJson = XLSX.utils.sheet_to_json(sheets[key])
      unitJson.forEach(item => {
        jsonArr.push(item)
      })
    })
  };
  reader.readAsBinaryString(rawFile);
  return jsonArr
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
