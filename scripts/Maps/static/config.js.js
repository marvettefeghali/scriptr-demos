/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"//Configuration file used by client side\nvar config = {\n  http: {\n    baseUrl: \"https://marv.scriptrapps.io\",\n  \tdataScript:\"Maps/scripts/data.js\"\n  },\n  websocket: {\n    url: \"wss://api.scriptrapps.io/RTg2MTczN0ZDRQ==\",\n    receive_channel: \"pushMapData\"\n  },\n  map: {\n  \tkey: \"AIzaSyBcPYghFh_BXz4dDz-TXTHbU2iV3Wbf57I\",\n    output: 'embed',\n\ttype: \"google.maps.MapTypeId.SATELLITE\", //MapTypeId.ROADMAP, MapTypeId.SATELLITE, MapTypeId.HYBRID, MapTypeId.TERRAIN \n    zoom: 4,\n    defaultCenter: {lat: 41.879, lng: -87.624},\n    iconsURL:'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/',\n\tblueImage: 'Map-Marker-Ball-Azure-icon.png',\n    pinkImage: 'Map-Marker-Ball-Pink-icon.png',\n  \tgreenImage: 'Map-Marker-Ball-Chartreuse-icon.png'\n  },\n  dataHandler: {\n    transformFnc: \"addMarkerPoints\" //Define the transformation function you will use\n  }\n}\n\n"},"scriptrdata":[]}}*#*#*/
var content= '//Configuration file used by client side\n\
var config = {\n\
  http: {\n\
    baseUrl: \"https://marv.scriptrapps.io\",\n\
  	dataScript:\"Maps/scripts/data.js\"\n\
  },\n\
  websocket: {\n\
    url: \"wss://api.scriptrapps.io/RTg2MTczN0ZDRQ==\",\n\
    receive_channel: \"pushMapData\"\n\
  },\n\
  map: {\n\
  	key: \"AIzaSyBcPYghFh_BXz4dDz-TXTHbU2iV3Wbf57I\",\n\
    output: \'embed\',\n\
	type: \"google.maps.MapTypeId.SATELLITE\", //MapTypeId.ROADMAP, MapTypeId.SATELLITE, MapTypeId.HYBRID, MapTypeId.TERRAIN \n\
    zoom: 4,\n\
    defaultCenter: {lat: 41.879, lng: -87.624},\n\
    iconsURL:\'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/\',\n\
	blueImage: \'Map-Marker-Ball-Azure-icon.png\',\n\
    pinkImage: \'Map-Marker-Ball-Pink-icon.png\',\n\
  	greenImage: \'Map-Marker-Ball-Chartreuse-icon.png\'\n\
  },\n\
  dataHandler: {\n\
    transformFnc: \"addMarkerPoints\" //Define the transformation function you will use\n\
  }\n\
}\n\
\n\
';  response.write(content);response.close();			