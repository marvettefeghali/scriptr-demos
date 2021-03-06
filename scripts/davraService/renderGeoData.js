/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"<!DOCTYPE html>\n<html>\n  <head>\n    <title>Simple Map</title>\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <meta charset=\"utf-8\">\n<link rel=\"shortcut icon\"type=\"image/x-icon\" href=\"data:image/x-icon;,\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js\"></script>\n    <style>\n      html, body {\n        height: 100%;\n        margin: 0;\n        padding: 0;\n      }\n      #map {\n        height: 100%;\n      }\n    </style>\n  </head>\n  <body>\n    <div id=\"map\"></div>\n    <script>\n\n var wrapper;\n\t\n\tvar baseURL = window.location.origin + window.location.pathname.substring(0,window.location.pathname.indexOf(\"davraService/renderGeoData\"))\n\t\n\t\t$.urlParam = function(name){\n    \t\tvar results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);\n    \t\tif (results==null){\n      \t\t\treturn null;\n    \t\t}else{\n       \t\t\treturn results[1] || 0;\n    \t\t}\n\t\t}\n   \t\tvar token = $.urlParam('auth_token');\n         var device = $.urlParam('device');\n\t\n\tvar options = {\n\t\ttype: \"POST\",\n\t\turl: baseURL + \"davraService/loadGeoData\",\n\t\tsuccess: function() {},\n\t\tfailure: function() {},\n\t\tdataType: \"json\",\n        data: { \"device\": device}\n\t};\n\t\n\tif(token) {\n\t\toptions[\"headers\"] = { \"Authorization\":  \"bearer \" + token };\n\t}\n\nvar map;\nfunction initMap() {\n  \n  \n$.ajax(options).done(function(response) {\n  var map = new google.maps.Map(document.getElementById('map'), {\n    zoom: 3,\n    center: {lat: 33.9, lng: -71.2}\n  });\n  var entries = response.response.result;\n   for (var i = 1; i < entries.length; i++) {\n    var entry = entries[i];\n    var marker = new google.maps.Marker({\n      position: {lat: entry[0], lng: entry[1]},\n      map: map,\n      icon:  ((entry[3] == \"Waiting for first heartbeat\") ? blueImage.url : greenImage.url),\n      title: entry[2],\n      zIndex: 4\n    });\n  }\n             })\n             .fail(function(response ) {\n                var out = \"\";\n            if(response.status == 0 && response.statusText == \"error\" && response.readyState == 0 && response.responseText == \"\"){\n                out += \"An error has occurred. This is most likely a cross-domain issue. In case you modified the response object in your script, try adding response.addHeaders(configuration.crossDomainHeaders) to your code.\";\n            }else{\n                var output = response;\n                if(response.responseJSON){\n                    out += \"Your chart data source script returned a \"+ response.responseJSON.response.metadata.errorCode + \" error.\"\n                }\n            }\n            $(\"#scriptrChart\").html(out);\n            })\n            .always(function(data) {\n            });\n}\n\n  var url = 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/';\n  var blueImage = {\n    url: url + 'Map-Marker-Ball-Azure-icon.png'\n  };\n  \n  var greenImage = {\n    url: url + 'Map-Marker-Ball-Chartreuse-icon.png'\n  };\n   \n  var shape = {\n    coords: [1, 1, 1, 20, 18, 20, 18, 1],\n    type: 'poly'\n  };\n    </script>\n    <script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyBcPYghFh_BXz4dDz-TXTHbU2iV3Wbf57I&callback=initMap\"\n    async defer></script>\n  </body>\n</html>"},"scriptrdata":[]}}*#*#*/
var content= '<!DOCTYPE html>\n\
<html>\n\
  <head>\n\
    <title>Simple Map</title>\n\
    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n\
    <meta charset=\"utf-8\">\n\
<link rel=\"shortcut icon\"type=\"image/x-icon\" href=\"data:image/x-icon;,\">\n\
<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js\"></script>\n\
    <style>\n\
      html, body {\n\
        height: 100%;\n\
        margin: 0;\n\
        padding: 0;\n\
      }\n\
      #map {\n\
        height: 100%;\n\
      }\n\
    </style>\n\
  </head>\n\
  <body>\n\
    <div id=\"map\"></div>\n\
    <script>\n\
\n\
 var wrapper;\n\
	\n\
	var baseURL = window.location.origin + window.location.pathname.substring(0,window.location.pathname.indexOf(\"davraService/renderGeoData\"))\n\
	\n\
		$.urlParam = function(name){\n\
    		var results = new RegExp(\'[\\?&]\' + name + \'=([^&#]*)\').exec(window.location.href);\n\
    		if (results==null){\n\
      			return null;\n\
    		}else{\n\
       			return results[1] || 0;\n\
    		}\n\
		}\n\
   		var token = $.urlParam(\'auth_token\');\n\
         var device = $.urlParam(\'device\');\n\
	\n\
	var options = {\n\
		type: \"POST\",\n\
		url: baseURL + \"davraService/loadGeoData\",\n\
		success: function() {},\n\
		failure: function() {},\n\
		dataType: \"json\",\n\
        data: { \"device\": device}\n\
	};\n\
	\n\
	if(token) {\n\
		options[\"headers\"] = { \"Authorization\":  \"bearer \" + token };\n\
	}\n\
\n\
var map;\n\
function initMap() {\n\
  \n\
  \n\
$.ajax(options).done(function(response) {\n\
  var map = new google.maps.Map(document.getElementById(\'map\'), {\n\
    zoom: 3,\n\
    center: {lat: 33.9, lng: -71.2}\n\
  });\n\
  var entries = response.response.result;\n\
   for (var i = 1; i < entries.length; i++) {\n\
    var entry = entries[i];\n\
    var marker = new google.maps.Marker({\n\
      position: {lat: entry[0], lng: entry[1]},\n\
      map: map,\n\
      icon:  ((entry[3] == \"Waiting for first heartbeat\") ? blueImage.url : greenImage.url),\n\
      title: entry[2],\n\
      zIndex: 4\n\
    });\n\
  }\n\
             })\n\
             .fail(function(response ) {\n\
                var out = \"\";\n\
            if(response.status == 0 && response.statusText == \"error\" && response.readyState == 0 && response.responseText == \"\"){\n\
                out += \"An error has occurred. This is most likely a cross-domain issue. In case you modified the response object in your script, try adding response.addHeaders(configuration.crossDomainHeaders) to your code.\";\n\
            }else{\n\
                var output = response;\n\
                if(response.responseJSON){\n\
                    out += \"Your chart data source script returned a \"+ response.responseJSON.response.metadata.errorCode + \" error.\"\n\
                }\n\
            }\n\
            $(\"#scriptrChart\").html(out);\n\
            })\n\
            .always(function(data) {\n\
            });\n\
}\n\
\n\
  var url = \'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/\';\n\
  var blueImage = {\n\
    url: url + \'Map-Marker-Ball-Azure-icon.png\'\n\
  };\n\
  \n\
  var greenImage = {\n\
    url: url + \'Map-Marker-Ball-Chartreuse-icon.png\'\n\
  };\n\
   \n\
  var shape = {\n\
    coords: [1, 1, 1, 20, 18, 20, 18, 1],\n\
    type: \'poly\'\n\
  };\n\
    </script>\n\
    <script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyBcPYghFh_BXz4dDz-TXTHbU2iV3Wbf57I&callback=initMap\"\n\
    async defer></script>\n\
  </body>\n\
</html>';  response.write(content);response.close();			