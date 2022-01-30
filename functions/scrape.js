const request = require('request')
const cheerio = require('cheerio')


const scrapeData = (url, container, elements) => {
    return new Promise((resolve, reject) => {
        request(url, (error, response, html) => {
            if (!error && response.statusCode == 200) {
                const $ = cheerio.load(html)
                const containerArr = $(container)

                containerArr.each((i, singleContainer) => {
                    elements.forEach(element => {
                        console.log($(singleContainer).find(element).text());
                    });
                })
            }
        })
    })
}

module.exports = {scrapeData}