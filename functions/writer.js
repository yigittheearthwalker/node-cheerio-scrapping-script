const fs = require('fs')
const ExcelJS = require('exceljs');

const writeOutput = (data, outputFormat, container) => {
    if (outputFormat === 'json') {
        fs.writeFileSync('./out/'+container+'.json', JSON.stringify(data, null, 2))
    }else if (outputFormat === 'xlsx'){
        let workbook = new ExcelJS.Workbook();
        workbook.creator = 'node-cheerio-scrapper-script';
        workbook.created = new Date();

        let sheet = workbook.addWorksheet('data');
        let columns = [];
        
        let sampleObject = data[0];
        
        for (const key in sampleObject) {
            if (Object.hasOwnProperty.call(sampleObject, key)) {
                columns.push({ header: key, key: key, width: 10 })    
            }
        }
        sheet.columns = columns;
        data.forEach((e, i) => {
            sheet.addRow(e)
        })
        
        workbook.xlsx.writeFile('./out/' + container + '.xlsx');
    }
}

module.exports = {writeOutput}