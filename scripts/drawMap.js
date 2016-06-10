/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"<html>\n<head>\n  <script type=\"text/javascript\" src=\"https://www.gstatic.com/charts/loader.js\"></script>\n  <script type=\"text/javascript\" src=\"https://www.google.com/jsapi\"></script>\n  <script type=\"text/javascript\">\n    google.charts.load('current', {packages: ['map']});\n    google.charts.setOnLoadCallback(drawMap);\n\n    function drawMap () {\n      var data = new google.visualization.DataTable();\n      data.addColumn('string', 'latitude');\n      data.addColumn('string', 'longitude');\n      data.addColumn('string', 'Marker')\n\n      data.addRows([\n        ['33.812597754564', ' -84.35119952343751',   'blue' ],\n      ['13.812597754564', ' -14.35119952343751',   'blue' ]\n      ]);\n      var url = 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/';\n\n      var options = {\n        zoomLevel: 6,\n        showTip: true,\n        useMapTypeControl: true,\n        icons: {\n          blue: {\n            normal:   url + 'Map-Marker-Ball-Azure-icon.png',\n            selected: url + 'Map-Marker-Ball-Right-Azure-icon.png'\n          },\n          green: {\n            normal:   url + 'Map-Marker-Push-Pin-1-Chartreuse-icon.png',\n            selected: url + 'Map-Marker-Push-Pin-1-Right-Chartreuse-icon.png'\n          },\n          pink: {\n            normal:   url + 'Map-Marker-Ball-Pink-icon.png',\n            selected: url + 'Map-Marker-Ball-Right-Pink-icon.png'\n          }\n        },\n        \"view\":{\n          \"columns\":[0,{\"sourceColumn\":1,\"properties\":{\"role\":\"annotation\"},\"label\":\"Longitude\"}]\n        },\n        \"isDefaultVisualization\":false,\n      };\n      var map = new google.visualization.Map(document.getElementById('map_div'));\n\n      map.draw(data, options);\n    }\n  </script>\n</head>\n<body>\n  <div id=\"map_div\" style=\"height: 500px; width: 900px\"></div>\n</body>\n</html>"},"scriptrdata":[]}}*#*#*/
var content= '<html>\n\
<head>\n\
  <script type=\"text/javascript\" src=\"https://www.gstatic.com/charts/loader.js\"></script>\n\
  <script type=\"text/javascript\" src=\"https://www.google.com/jsapi\"></script>\n\
  <script type=\"text/javascript\">\n\
    google.charts.load(\'current\', {packages: [\'map\']});\n\
    google.charts.setOnLoadCallback(drawMap);\n\
\n\
    function drawMap () {\n\
      var data = new google.visualization.DataTable();\n\
      data.addColumn(\'string\', \'latitude\');\n\
      data.addColumn(\'string\', \'longitude\');\n\
      data.addColumn(\'string\', \'Marker\')\n\
\n\
      data.addRows([\n\
        [\'33.812597754564\', \' -84.35119952343751\',   \'blue\' ],\n\
      [\'13.812597754564\', \' -14.35119952343751\',   \'blue\' ]\n\
      ]);\n\
      var url = \'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/\';\n\
\n\
      var options = {\n\
        zoomLevel: 6,\n\
        showTip: true,\n\
        useMapTypeControl: true,\n\
        icons: {\n\
          blue: {\n\
            normal:   url + \'Map-Marker-Ball-Azure-icon.png\',\n\
            selected: url + \'Map-Marker-Ball-Right-Azure-icon.png\'\n\
          },\n\
          green: {\n\
            normal:   url + \'Map-Marker-Push-Pin-1-Chartreuse-icon.png\',\n\
            selected: url + \'Map-Marker-Push-Pin-1-Right-Chartreuse-icon.png\'\n\
          },\n\
          pink: {\n\
            normal:   url + \'Map-Marker-Ball-Pink-icon.png\',\n\
            selected: url + \'Map-Marker-Ball-Right-Pink-icon.png\'\n\
          }\n\
        },\n\
        \"view\":{\n\
          \"columns\":[0,{\"sourceColumn\":1,\"properties\":{\"role\":\"annotation\"},\"label\":\"Longitude\"}]\n\
        },\n\
        \"isDefaultVisualization\":false,\n\
      };\n\
      var map = new google.visualization.Map(document.getElementById(\'map_div\'));\n\
\n\
      map.draw(data, options);\n\
    }\n\
  </script>\n\
</head>\n\
<body>\n\
  <div id=\"map_div\" style=\"height: 500px; width: 900px\"></div>\n\
</body>\n\
</html>';  response.write(content);response.close();			