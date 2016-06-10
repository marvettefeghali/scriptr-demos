/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"GPS MAPPING \n=============\n\nGPS MAPPING using (https://www.scriptr.io)\n\n\nGetting Started\n===============\n\n\n"},"scriptrdata":[]}}*#*#*/
var content= 'GPS MAPPING \n\
=============\n\
\n\
GPS MAPPING using (https://www.scriptr.io)\n\
\n\
\n\
Getting Started\n\
===============\n\
\n\
\n\
';  response.write(content);response.close();			