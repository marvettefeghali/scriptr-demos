/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 var status = request.parameters.status;
var http = require("http");
var healthService = "http://54.243.241.106:58000/eem/api/v1/gps";
// invoke the healthService third party API
var callResult = http.request({"url":healthService});
// parse the result of the call using regular JSON object
var healthInfo = JSON.parse(callResult.body).records;

var myRecords = [];
healthInfo.forEach(function(entry){
     if(entry.statusCode == status) {
       myRecords.push(entry);
     }
})

return {"totalRecords": myRecords.length, records: myRecords};			