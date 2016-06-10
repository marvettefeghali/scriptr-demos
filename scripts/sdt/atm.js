/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"SimpleDecisionTable","plugindata":{"columns":[{"field":"recid","caption":"Rec. Id","size":"100%","resizable":true,"hidden":true,"noDrag":true},{"field":"rowtype","caption":"Type","size":"100%","hidden":true,"noDrag":true},{"field":"name","caption":"","size":"100%","noDrag":true,"editable":{"type":"text","inTag":"","outTag":"","style":"","items":[],"selected":"withdraw"},"sizeType":"%","sizeCalculated":"333px","min":20,"sizeCorrected":"20%"},{"field":"fieldType","caption":"Type","size":"100%","noDrag":true,"editable":{"type":"select","items":[{"id":"number","text":"number"},{"id":"string","text":"string"},{"id":"boolean","text":"boolean"}],"inTag":"","outTag":"","style":""},"sizeType":"%","sizeCalculated":"333px","min":20,"sizeCorrected":"20%"},{"field":"rule2","caption":"Rule 2","size":"100%","editable":{"type":"myType","inTag":"","outTag":"","style":"","items":[],"selected":"true"},"sizeType":"%","sizeCalculated":"333px","min":20,"sizeCorrected":"20%"},{"field":"rule1","caption":"Rule 1","size":"100%","editable":{"type":"myType","inTag":"","outTag":"","style":"","items":[],"selected":">1500"},"sizeType":"%","sizeCalculated":"333px","min":20,"sizeCorrected":"20%"},{"field":"rule3","caption":"Rule 3","size":"100%","editable":{"type":"myType","inTag":"","outTag":"","style":"","items":[],"selected":">1500"},"sizeType":"%","sizeCalculated":"333px","min":20,"sizeCorrected":"20%"}],"records":[{"recid":0,"name":"withdrawal_amount","rowtype":"condition","fieldType":"number","rule1":">balance","style":{"6":""},"rule2":"<=balance","rule3":">balance"},{"recid":1,"name":"grant_credit","rowtype":"condition","fieldType":"boolean","rule3":"false","rule2":"","style":{"6":""},"rule1":"true"},{"recid":2,"name":"withdraw","rowtype":"action","fieldType":"string","attr":"action='true'","style":{"5":""},"rule2":"true","rule1":"true","rule3":"false"},{"recid":3,"name":"escalate","rowtype":"action","fieldType":"string","attr":"action='true'","rule1":"true","rule3":"false","rule2":"true"}],"prescript":"var balance = 1500;","postscript":"//Variable \"decision\" is the object returned by the decision table execution.\n//Variable \"decision\" format is {\"action1\": \"value1\", \"action2\":  \"value2\"}.\nreturn decision;"},"scriptrdata":"//Get payload parameters\nvar pl = null;\nvar requestBody = request.body;\nif (!requestBody) {\n\tpl = request.parameters.payload;\n\tpl = JSON.parse(pl);\n} else {\n\tpl = requestBody.payload;\n}\n\n//START TABLE DECISION CODE\nfunction execute(pl) {\nvar decision = {};\n//PRESCRIPT START\nvar balance = 1500;\n//PRESCRIPT END\n\nif(typeof pl != \"object\") {\n  return;\n} else { \n\t  if((pl != null && pl[\"withdrawal_amount\"] != undefined && pl[\"withdrawal_amount\"]<=balance) && isAny(\"grant_credit\")){\n       decision = { \"withdraw\": \"true\",\"escalate\": \"true\" }\n\t} \n\t else if((pl != null && pl[\"withdrawal_amount\"] != undefined && pl[\"withdrawal_amount\"]>balance) && (pl != null && pl[\"grant_credit\"] != undefined && pl[\"grant_credit\"] ===true)){\n       decision = { \"withdraw\": \"true\",\"escalate\": \"true\" }\n\t} \n\t else if((pl != null && pl[\"withdrawal_amount\"] != undefined && pl[\"withdrawal_amount\"]>balance) && (pl != null && pl[\"grant_credit\"] != undefined && pl[\"grant_credit\"] ===false)){\n       decision = { \"withdraw\": \"false\",\"escalate\": \"false\" }\n\t} \n}\n\n//POSTSCRIPT START\n//Variable \"decision\" is the object returned by the decision table execution.\n//Variable \"decision\" format is {\"action1\": \"value1\", \"action2\":  \"value2\"}.\nreturn decision;\n//POSTSCRIPT END\n\n}\n//Check if value is \"in\" or is \"not in\" array\n//return true or false\nfunction evalArrayOperation(value, operator,  array) {\n\tif(operator == \"in\") {\n\t\treturn (array.indexOf(value)>-1);\n\t} else {\n\t\treturn (array.indexOf(value) == -1) ;\n\t} \n}\n\n//isAny function, when condition expression is not important\nfunction isAny(param) {\n\treturn true;\n}\n\n//START_REST_CALL \nreturn execute(pl);\n//END_REST_CALL"}}*#*#*/
//Get payload parameters
var pl = null;
var requestBody = request.body;
if (!requestBody) {
	pl = request.parameters.payload;
	pl = JSON.parse(pl);
} else {
	pl = requestBody.payload;
}

//START TABLE DECISION CODE
function execute(pl) {
var decision = {};
//PRESCRIPT START
var balance = 1500;
//PRESCRIPT END

if(typeof pl != "object") {
  return;
} else { 
	  if((pl != null && pl["withdrawal_amount"] != undefined && pl["withdrawal_amount"]<=balance) && isAny("grant_credit")){
       decision = { "withdraw": "true","escalate": "true" }
	} 
	 else if((pl != null && pl["withdrawal_amount"] != undefined && pl["withdrawal_amount"]>balance) && (pl != null && pl["grant_credit"] != undefined && pl["grant_credit"] ===true)){
       decision = { "withdraw": "true","escalate": "true" }
	} 
	 else if((pl != null && pl["withdrawal_amount"] != undefined && pl["withdrawal_amount"]>balance) && (pl != null && pl["grant_credit"] != undefined && pl["grant_credit"] ===false)){
       decision = { "withdraw": "false","escalate": "false" }
	} 
}

//POSTSCRIPT START
//Variable "decision" is the object returned by the decision table execution.
//Variable "decision" format is {"action1": "value1", "action2":  "value2"}.
return decision;
//POSTSCRIPT END

}
//Check if value is "in" or is "not in" array
//return true or false
function evalArrayOperation(value, operator,  array) {
	if(operator == "in") {
		return (array.indexOf(value)>-1);
	} else {
		return (array.indexOf(value) == -1) ;
	} 
}

//isAny function, when condition expression is not important
function isAny(param) {
	return true;
}

//START_REST_CALL 
return execute(pl);
//END_REST_CALL			