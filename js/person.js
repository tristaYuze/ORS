window.onload=function (){
	var oPersonMenu=document.getElementById("personMenu");
	var oPerson=document.getElementById("person");
	var aInput=oPersonMenu.getElementsByTagName("input");
	var aSection=oPerson.getElementsByTagName("section");
	
	for (var i=0;i<aInput.length;i++) {
		aInput[i].index=i;
		aInput[i].onclick=function (){
			for (var i=0;i<aInput.length;i++) {
				aInput[i].className="";
				aSection[i].style.display="none";
			}
			this.className="active";
			aSection[this.index].style.display="block";
		};
	}
    
};
