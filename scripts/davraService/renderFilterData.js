/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js\"></script>\n    <script type=\"text/javascript\" src='https://www.google.com/jsapi?autoload={\"modules\":[{ \"name\":\"visualization\",\"version\":\"1\", \n         \"packages\":[\"charteditor\", \"corechart\", \"controls\"]\n         }] \n      }'></script> \n  </head>\n  <script>\n\n    google.setOnLoadCallback(loadChart);\n\n    var wrapper;\n    \n        var baseURL = \"//marv.scriptrapps.io/\";\n        var token = \"RTg2MTczN0ZDRQ==\";\n\n    var options = {\n        type: \"POST\",\n        url: baseURL + \"davraService/loadFilterData\",\n        success: function() {},\n        failure: function() {},\n        dataType: \"json\",\n        processData: false, \n        contentType: false\n    };\n    \n    if(token) {\n        options[\"headers\"] = { \"Authorization\":  \"bearer \" + token };\n    }\n\n    function loadChart() {\n        var chart_content = {\"options\":{\"annotations\":{\"domain\":{}},\"hAxis\":{\"useFormatFromData\":true,\"viewWindow\":{\"max\":null,\"min\":null},\"minValue\":null,\"maxValue\":null},\"legacyScatterChartLabels\":true,\"legend\":\"right\",\"series\":{\"0\":{\"hasAnnotations\":true}},\"title\":\"Chart Title\",\"vAxes\":[{\"title\":null,\"minValue\":null,\"maxValue\":null,\"viewWindow\":{\"max\":null,\"min\":null},\"useFormatFromData\":true,\"logScale\":false},{\"viewWindow\":{\"max\":null,\"min\":null},\"minValue\":null,\"maxValue\":null,\"useFormatFromData\":true,\"logScale\":false}],\"booleanRole\":\"certainty\",\"width\":\"100%\"},\"state\":{},\"view\":{\"columns\":[0,1,2,{\"sourceColumn\":3,\"properties\":{\"role\":\"annotation\"},\"label\":\"Status\"},{\"sourceColumn\":4,\"properties\":{\"role\":\"annotationText\"},\"label\":\"Description\"},5,{\"sourceColumn\":6,\"properties\":{\"role\":\"annotation\"},\"label\":\"Name\"},{\"sourceColumn\":7,\"properties\":{\"role\":\"annotationText\"},\"label\":\"IP\"},8,{\"sourceColumn\":9,\"properties\":{\"role\":\"annotation\"},\"label\":\"GPS LAST SEEN\"},{\"sourceColumn\":10,\"properties\":{\"role\":\"annotationText\"},\"label\":\"ASSET LAST SEEN\"},{\"sourceColumn\":11,\"properties\":{\"role\":\"annotationText\"},\"label\":\"[lat/lon]\"}],\"rows\":null},\"isDefaultVisualization\":false,\"chartType\":\"Table\"};\n        chart_content[\"containerId\"] = \"programmatic_chart_div\"\n       \n      \n        var dashboard = new google.visualization.Dashboard(document.getElementById('programmatic_dashboard_div'));\n\n        // We omit \"var\" so that programmaticSlider is visible to changeRange.\n        programmaticSlider = new google.visualization.ControlWrapper({\n          'controlType': 'CategoryFilter',\n          'containerId': 'programmatic_control_div',\n          'options': {\n            'filterColumnLabel': 'Status',\n            'ui': {'labelStacking': 'vertical'}\n          }\n        });\n      \n       programmaticChart = new google.visualization.ChartWrapper(chart_content);\n      \n       dashboard.bind(programmaticSlider, programmaticChart);\n      \n        $.ajax(options).done(function(response) {\n                dashboard.draw(response.response.result);\n             })\n             .fail(function(response ) {\n                var out = \"\";\n            if(response.status == 0 && response.statusText == \"error\" && response.readyState == 0 && response.responseText == \"\"){\n                out += \"An error has occurred. This is most likely a cross-domain issue. In case you modified the response object in your script, try adding response.addHeaders(configuration.crossDomainHeaders) to your code.\";\n            }else{\n                var output = response;\n                if(response.responseJSON){\n                    out += \"Your chart data source script returned a \"+ response.responseJSON.response.metadata.errorCode + \" error.\"\n                }\n            }\n            $(\"#scriptrChart\").html(out);\n            })\n            .always(function(data) {\n            });\n    }\n    </script>\n  <body>\n      <div id=\"programmatic_dashboard_div\" style=\"border: 1px solid #ccc\">\n <div id=\"programmatic_control_div\" style=\"padding-left: 2em; min-width: 250px\"></div>\n <div id=\"programmatic_chart_div\"></div>\n    </div>\n  </body>\n</html>"},"scriptrdata":[]}}*#*#*/
var content= '\n\
<!DOCTYPE html>\n\
<html>\n\
  <head>\n\
    <meta charset=\"utf-8\">\n\
    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js\"></script>\n\
    <script type=\"text/javascript\" src=\'https://www.google.com/jsapi?autoload={\"modules\":[{ \"name\":\"visualization\",\"version\":\"1\", \n\
         \"packages\":[\"charteditor\", \"corechart\", \"controls\"]\n\
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
        var token = \"RTg2MTczN0ZDRQ==\";\n\
\n\
    var options = {\n\
        type: \"POST\",\n\
        url: baseURL + \"davraService/loadFilterData\",\n\
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
        var chart_content = {\"options\":{\"annotations\":{\"domain\":{}},\"hAxis\":{\"useFormatFromData\":true,\"viewWindow\":{\"max\":null,\"min\":null},\"minValue\":null,\"maxValue\":null},\"legacyScatterChartLabels\":true,\"legend\":\"right\",\"series\":{\"0\":{\"hasAnnotations\":true}},\"title\":\"Chart Title\",\"vAxes\":[{\"title\":null,\"minValue\":null,\"maxValue\":null,\"viewWindow\":{\"max\":null,\"min\":null},\"useFormatFromData\":true,\"logScale\":false},{\"viewWindow\":{\"max\":null,\"min\":null},\"minValue\":null,\"maxValue\":null,\"useFormatFromData\":true,\"logScale\":false}],\"booleanRole\":\"certainty\",\"width\":\"100%\"},\"state\":{},\"view\":{\"columns\":[0,1,2,{\"sourceColumn\":3,\"properties\":{\"role\":\"annotation\"},\"label\":\"Status\"},{\"sourceColumn\":4,\"properties\":{\"role\":\"annotationText\"},\"label\":\"Description\"},5,{\"sourceColumn\":6,\"properties\":{\"role\":\"annotation\"},\"label\":\"Name\"},{\"sourceColumn\":7,\"properties\":{\"role\":\"annotationText\"},\"label\":\"IP\"},8,{\"sourceColumn\":9,\"properties\":{\"role\":\"annotation\"},\"label\":\"GPS LAST SEEN\"},{\"sourceColumn\":10,\"properties\":{\"role\":\"annotationText\"},\"label\":\"ASSET LAST SEEN\"},{\"sourceColumn\":11,\"properties\":{\"role\":\"annotationText\"},\"label\":\"[lat/lon]\"}],\"rows\":null},\"isDefaultVisualization\":false,\"chartType\":\"Table\"};\n\
        chart_content[\"containerId\"] = \"programmatic_chart_div\"\n\
       \n\
      \n\
        var dashboard = new google.visualization.Dashboard(document.getElementById(\'programmatic_dashboard_div\'));\n\
\n\
        // We omit \"var\" so that programmaticSlider is visible to changeRange.\n\
        programmaticSlider = new google.visualization.ControlWrapper({\n\
          \'controlType\': \'CategoryFilter\',\n\
          \'containerId\': \'programmatic_control_div\',\n\
          \'options\': {\n\
            \'filterColumnLabel\': \'Status\',\n\
            \'ui\': {\'labelStacking\': \'vertical\'}\n\
          }\n\
        });\n\
      \n\
       programmaticChart = new google.visualization.ChartWrapper(chart_content);\n\
      \n\
       dashboard.bind(programmaticSlider, programmaticChart);\n\
      \n\
        $.ajax(options).done(function(response) {\n\
                dashboard.draw(response.response.result);\n\
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
    </script>\n\
  <body>\n\
      <div id=\"programmatic_dashboard_div\" style=\"border: 1px solid #ccc\">\n\
 <div id=\"programmatic_control_div\" style=\"padding-left: 2em; min-width: 250px\"></div>\n\
 <div id=\"programmatic_chart_div\"></div>\n\
    </div>\n\
  </body>\n\
</html>';  response.write(content);response.close();			