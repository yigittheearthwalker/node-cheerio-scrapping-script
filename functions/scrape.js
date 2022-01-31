const request = require('request')
const cheerio = require('cheerio')
let data = [];


const scrapeData = (url, container, elements) => {
    return new Promise((resolve, reject) => {
        request(url, (error, response, html) => {
            if (!error && response.statusCode == 200) {
                const $ = cheerio.load(html)
                const containerHTML = $(container)

                containerHTML.each((i, singleContainer) => {
                    let containerObj = {};
                    elements.forEach(element => {
                        let value = $(singleContainer).find(element).text()
                        element = element.replaceAll(' ', '_')
                                         .replaceAll('.', '')
                                         .replaceAll('#', '')
                        containerObj[element] = value != null ? value : "";
                    });
                    data.push(containerObj)
                })
                resolve(data)
            }else{
                throw Error(error)
            }
        })
    })
}

module.exports = {scrapeData}