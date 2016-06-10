/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var log = require("log")
log.setLevel("debug")
var clientLib = require("Maps/backend/client")

var client = new clientLib.Client()

var msg = client.getMessage()

function process(client, msg) {
    switch(msg.id) {
        case "marker":
            client.send("map_point", {})
            break;
        default:
            break;
    }   
}				