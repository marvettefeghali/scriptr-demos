/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 var http = require("http");
var healthService = "http://54.243.241.106:58000/eem/api/v1/gps";
// invoke the healthService third party API
var callResult = http.request({"url":healthService});
// parse the result of the call using regular JSON object
var healthInfo = JSON.parse(callResult.body).records;

var myArray = [["Asset Icon", "Device", "Status Code", "Status", "Description", "Profile Id", "Name", "IP", "Alert", "GPS LAST SEEN", "ASSET LAST SEEN", "[lat/lon]"]];
healthInfo.forEach(function(entry){
     myArray.push([entry.assetIconId, entry.deviceId, entry.statusCode, entry.statusString, entry.description, entry.profileId, entry.name, entry.IPAddress,  entry.alertState, new Date(entry.assetLastSeen), new Date(entry.assetGPSLastSeen), "["+entry.latitude+"/"+entry.longitude+"]"])
})
return myArray;			