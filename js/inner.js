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
function complete(){
	var xmlrequest=createXMLHttpRequest();
	xmlrequest.open("POST","http://119.23.213.108/addBlogComment?blogId=3&plnr=",true);
	var json="visitInner="+document.getElementById("visitInner").value;
	xmlrequest.send(json);
	xmlrequest.onreadystatechange=function (){
		if(xmlrequest.readyState==4&&xmlrequest.status==200){
			document.getElementById("visitIn").innerHTML=xmlrequest.responseText;
		}
	};
	
}