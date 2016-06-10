/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js\"></script>\n    <script type=\"text/javascript\" src='https://www.google.com/jsapi?autoload={\"modules\":[{ \"name\":\"visualization\",\"version\":\"1\", \n         \"packages\":[\"charteditor\", \"corechart\"]\n         }] \n      }'></script> \n  </head>\n  <script>\n\n    google.setOnLoadCallback(loadChart);\n\n    var wrapper;\n    \n        var baseURL = \"//marv.scriptrapps.io/\";\n        var token = \"\";\n\n    var options = {\n        type: \"POST\",\n        url: baseURL + \"File/mapData\",\n        success: function() {},\n        failure: function() {},\n        dataType: \"json\",\n        processData: false, \n        contentType: false\n    };\n    \n    if(token) {\n        options[\"headers\"] = { \"Authorization\":  \"bearer \" + token };\n    }\n\n    function loadChart() {\n        wrapper = new google.visualization.ChartWrapper({\"containerId\":\"chartContainer\",\"options\": { \n      displayMode: 'markers', \n      height: 700, \n      colorAxis: {colors: ['green', 'blue']} \n    },\"state\":{},\"view\":{\"columns\":[0,{\"sourceColumn\":1,\"properties\":{\"role\":\"annotation\"},\"label\":\"Population\"}]},\"isDefaultVisualization\":false,\"chartType\":\"GeoChart\"});\n        $.ajax(options).done(function(response) {\n                setDataSource(response.response.result);\n             })\n             .fail(function(response ) {\n                var out = \"\";\n            if(response.status == 0 && response.statusText == \"error\" && response.readyState == 0 && response.responseText == \"\"){\n                out += \"An error has occurred. This is most likely a cross-domain issue. In case you modified the response object in your script, try adding response.addHeaders(configuration.crossDomainHeaders) to your code.\";\n            }else{\n                var output = response;\n                if(response.responseJSON){\n                    out += \"Your chart data source script returned a \"+ response.responseJSON.response.metadata.errorCode + \" error.\"\n                }\n            }\n            $(\"#chartContainer\").html(out);\n            })\n            .always(function(data) {\n            });\n    }\n    \n    function setDataSource(data) {\n        wrapper.setDataTable(data);\n        if(wrapper.getChartType() != null) {\n            wrapper.draw();\n        }\n    }\n\n    function drawChart() {\n        wrapper.draw();\n    }\n\n    </script>\n  <body>\n      <div id=\"chartContainer\"></div>\n  </body>\n</html>"},"scriptrdata":[]}}*#*#*/
var content= '<!DOCTYPE html>\n\
<html>\n\
  <head>\n\
    <meta charset=\"utf-8\">\n\
    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js\"></script>\n\
    <script type=\"text/javascript\" src=\'https://www.google.com/jsapi?autoload={\"modules\":[{ \"name\":\"visualization\",\"version\":\"1\", \n\
         \"packages\":[\"charteditor\", \"corechart\"]\n\
         }] \n\
      }\'></script> \n\
  </head>\n\
  <script>\n\
\n\
    google.setOnLoadCallback(loadChart);\n\
\n\
    var wrapper;\n\
    \n\
        var baseURL = \"//marv.scriptrapps.io/\";\n\
        var token = \"\";\n\
\n\
    var options = {\n\
        type: \"POST\",\n\
        url: baseURL + \"File/mapData\",\n\
        success: function() {},\n\
        failure: function() {},\n\
        dataType: \"json\",\n\
        processData: false, \n\
        contentType: false\n\
    };\n\
    \n\
    if(token) {\n\
        options[\"headers\"] = { \"Authorization\":  \"bearer \" + token };\n\
    }\n\
\n\
    function loadChart() {\n\
        wrapper = new google.visualization.ChartWrapper({\"containerId\":\"chartContainer\",\"options\": { \n\
      displayMode: \'markers\', \n\
      height: 700, \n\
      colorAxis: {colors: [\'green\', \'blue\']} \n\
    },\"state\":{},\"view\":{\"columns\":[0,{\"sourceColumn\":1,\"properties\":{\"role\":\"annotation\"},\"label\":\"Population\"}]},\"isDefaultVisualization\":false,\"chartType\":\"GeoChart\"});\n\
        $.ajax(options).done(function(response) {\n\
                setDataSource(response.response.result);\n\
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
            $(\"#chartContainer\").html(out);\n\
            })\n\
            .always(function(data) {\n\
            });\n\
    }\n\
    \n\
    function setDataSource(data) {\n\
        wrapper.setDataTable(data);\n\
        if(wrapper.getChartType() != null) {\n\
            wrapper.draw();\n\
        }\n\
    }\n\
\n\
    function drawChart() {\n\
        wrapper.draw();\n\
    }\n\
\n\
    </script>\n\
  <body>\n\
      <div id=\"chartContainer\"></div>\n\
  </body>\n\
</html>';  response.write(content);response.close();			