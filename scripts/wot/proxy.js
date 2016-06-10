/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var wot = require("wot");

//Example 1
return wot.request({"url": "http://api.openweathermap.org/data/2.5/weather?APPID=6f1aec5198f72608f48bc8b9ee027538","params": {"q":"Beirut,lb"}, "method": "GET"});

//Example 2
return wot.request({"url": "https://marvette.bip.io/bip/http/Jz7zGKx","params": {"q":"Beirut,lb"}, "method": "GET", "headers":{"Authorization": "Basic bWFydmV0dGU6aGltYXJ2ZXRjYXZh"}});

			