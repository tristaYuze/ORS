var code;
function createCode() {
    code="";
    var codeLength = 4; //验证码的长度
    var codeDiv = document.getElementById("codeDiv");
    var codeChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 
    'W', 'X', 'Y', 'Z']; 
    for (var i = 0; i < codeLength; i++) 
    {
        var charNum = Math.floor(Math.random() * 52);
        code += codeChars[charNum];
    }
    if (codeDiv) 
    {
    	codeDiv.className="code";
        codeDiv.innerHTML = code;
    }
}
function judgeCode() 
{
    var codeTxt = document.getElementById("codeTxt").value;
    if (codeTxt.length <= 0) 
    {
        alert("请输入验证码！");
    }
    else if (codeTxt != code) 
    {
        alert("验证码输入有误！");
        createCode();
    }
    else 
    {
    	self.location="login.html";
    }        
}