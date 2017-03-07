var arr = ['婚姻','结婚','婚后','离婚','离婚赔偿','sd','ssdd','ssddddd','233a','sdfsadf','rfgsedr','rtgea','adfasdf','erfgerg','qwefa','sedfrg','dsd3','adfv'];

function change(obj){
	var myarr=new Array();
	var value = obj.value.replace(/(^\s*)|(\s*$)/g, "");
	
	
	var parent = document.getElementById("parent");
	


     while(parent.hasChildNodes()) {//输入的值改变时先清空以前的值

         parent.removeChild(parent.firstChild);
          }
     if (value == '') {//如果是将文本框中的值删除完了, 直接返回
         parent.style.display='none';
         return;
       }
  
   //  查出满足输入信息的词
	for(var i=0; i<arr.length;i++){
		if(arr[i].indexOf(value)!=-1){
			myarr[myarr.length]=arr[i];
			
		}

	}
     console.log(myarr)
     if(myarr.length>0){

     	parent.style.display="block";

     	var d;
     	for(var i=0; i<myarr.length;i++){
     		d=document.createElement("div");
     		d.innerHTML=myarr[i];

     		d.onmouseover=function(){this.style.backgroundColor="grey"};
     		d.onmouseout=function(){this.style.backgroundColor="white"};
     		d.onclick=function(){obj.value=this.innerHTML,parent.style.display="none"};

     		parent.appendChild(d);

     	}
     }

    

}