const {urlValidation, emailValidation} = require('./functions/validation')
const {scrapeData} = require('./functions/scrape')
let url, container;
let elements = [];
let args = process.argv.slice(2)

console.log("Processing arguments...");

if (args.length < 3) {
    throw Error("Missing parameters. At least 3 arguments needs to pass with the order of \n"
                      + " URL>HTML Container>HTML Elements(IDs, Classes or tag namess joined with '=')");  
}

args.forEach(function (val, index, array) {
    if(index == 0){
        if (urlValidation(val)) {
            url = val
            console.log("URL: " + url);
        }else{
            throw Error("args[0]: "+ val +" is not a valid URL")
        }
    }else if (index == 1){
        container = val
        console.log("HTML Container: " + container);
    }else if (index == 2){ 
        elements = val.split("=")
        console.log("HTML Elements: { ");
        elements.forEach((element, i) => {
            if (element.startsWith("#")) {
                console.log("\tHTML Element Id: " + element);
            }else if(element.startsWith(".")) {
                console.log("\tHTML Element Class: " + element);
            }else{
                console.log("\tHTML Element Tag: " + element);
            }
        })
        console.log("}")
    }
  });


  scrapeData(url, container, elements)