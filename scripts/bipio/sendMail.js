/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var time = new Date();
var mailBody = "Hello,<br>A bip ran was detected at " + time + "<br>";
mailBody += "Let's check this out!<br>";
mailBody += request.parameters.myContent;
mailBody += "<br/>"; 

var filesInRequest = request.files;
var fileContent = {};

if (request.files) {
   if (filesInRequest.myFile && filesInRequest.myFile.length > 0) {
     // Do something with the file "paramName", "fileName", "size", "contentType", and "content".
      mailBody += "Number of files posted to this script " + filesInRequest.myFile[0].fileName + " "+ filesInRequest.myFile[0].contentType + " "+ filesInRequest.myFile[0].content +"<br>";
   }
} 

var emailConfig = {
  "to": "marvette.feghali@elementn.com",
  "fromName": "BipIo Account",
  "subject": "Your bip ran",
  "body": mailBody
};
return sendMail(emailConfig.to, emailConfig.fromName, emailConfig.subject, emailConfig.body);			