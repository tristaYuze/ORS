$().ready(function(){
	$('#text').keyup(//.keydown按下，这个是松开发生的函数
		function(){
			$('table tr:gt(0)').hide();
			//jQuery过滤多个文字filter(":contains");trim函数功能是去掉字符串两段空格符
			var $d = $('table tr:gt(0)').filter(":contains('"+$.trim($('#text').val())+"')");
			$d.show();
		}
	)
})
function getMyDate(str){  
    var oDate = new Date(str),  
    oYear = oDate.getFullYear(),  
    oMonth = oDate.getMonth()+1,  
    oDay = oDate.getDate(),  
    oHour = oDate.getHours(),  
    oMin = oDate.getMinutes(),  
    oSen = oDate.getSeconds(),  
    oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay) +' '+ getzf(oHour) +':'+ getzf(oMin) +':'+getzf(oSen);//最后拼接时间  
    return oTime;  
}; 
//补0操作
  function getzf(num){  
      if(parseInt(num) < 10){  
          num = '0'+num;  
      }  
      return num;  
  }