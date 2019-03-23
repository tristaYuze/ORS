
window.onload=function(){
	getPerson();
}


function createXMLHttpRequest(){
	var xmlrequest;
	if(window.XMLHttpRequest){
		xmlrequest=new XMLHttpRequest();
	}else if(window.ActiveXObject){
		try{
			xmlrequest=new ActiveXObject("Msxm12.XMLHTTP");
		}catch(e){
			try{
				xmlrequest=new ActiveXObject("Microsoft.XMLHTTP");
			}catch(e){
				xmlrequest="";
			}
		}
	}
	return xmlrequest;
}
//获取数据的函数
function getPerson(){
	var xmlrequest=createXMLHttpRequest();
	xmlrequest.open("GET","http://119.23.213.108:8080/viewLoginedUser",true);
	xmlrequest.onreadystatechange=function (){
		if(xmlrequest.readyState==4&&xmlrequest.status==200){
			
			var json=eval('('+xmlrequest.responseText+')');
			//var data=JSON.parse(xmlrequest.responseText);
			var oForm=document.getElementById("personInner");
			for(var i=0;i<json.length;i++){
				oForm.getElementById("username").innerHTML=json.xm;
			}
		}
	};
};

function formsubmit(){
	document.getElementById("submit").submit();
}
