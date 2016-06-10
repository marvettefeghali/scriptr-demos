/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 var md5 = require("migrateHookId/md5") ;

var _scriptName = request.parameters.scriptName ;//"aTestHook";
var _event = "EXECUTE";
var hookUrl = request.parameters.url; //"http://www.google.com?search=test";


var json = {
  "old": md5.hex_md5(_scriptName+"_"+hookUrl+"_"+_event),
  "new":  md5.hex_md5(hookUrl+"_"+_event)
}
return json;			