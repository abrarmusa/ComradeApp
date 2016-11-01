module.exports = {
  
  dataSanitizer(obj, callback){
    var finaldata = {};
    for (var k in obj){
      finaldata[k] = obj[k];
    }
    callback(finaldata);
  }
  
}