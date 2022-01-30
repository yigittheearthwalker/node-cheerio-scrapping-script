const urlValidation = (urlString) => {
    let url;
  
    try {
      url = new URL(urlString);
    } catch (_) {
      return false;  
    }
  
    return url.protocol === "http:" || url.protocol === "https:";}
const emailValidation = () => {
    console.log("this is email valiadation");
}



module.exports={urlValidation, emailValidation}