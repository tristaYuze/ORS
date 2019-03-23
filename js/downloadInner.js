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
 $.ajax({
    url: '/jyw/sns/del_title',
    type: 'POST',
    data: 'uid='+uid+'&sid='+sid+'&r=' + Math.random(),
    success: function (txt) {
        txt = $.trim(txt);
        if (txt=='yes') {
            alert('恭喜，记录删除成功！');
            window.location.reload();//刷新当前页面.
            return false;
        }
        else{
            alert('删除失败！');
            return false;
        }
    }
});
