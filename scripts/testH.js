/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var hogan = require("Hogan.js").Hogan;


// construct template string
var template = "Hello {{world}}!";

// compile template
var hello = hogan.compile(template);			