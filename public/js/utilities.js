/**
 * Copyright (c) ACBS
 * Website: http://www.acbs.com.vn
 */
/* $VERSION: 1.1 */


var oldTime=0;


/******************************************************************************
   NAME:    SEARCH
   PURPOSE: Search stock code form key board
******************************************************************************/
function KeyCode(evt){
	if(!evt){
          evt = window.event;
    } 
	
    var keycode="";
    if(evt.which){
        keycode = evt.which;
    } 
	else{
          keycode = evt.keyCode;
    }
    var keychar = Code2Name(keycode);
    var tableT = document.getElementById("tbBody");
    var rowsN = tableT.rows;
    var sysd = new Date();
    var curTime = sysd.getTime();
    if(curTime -  oldTime < 1500) {
        oldSymbol += keychar;
    }
    else oldSymbol = keychar;
    oldTime=curTime;
    var isScroll = true;
	
    for(var i=2;i<rowsN.length;i++){//2 row of header
        var row = rowsN[i];
        if(!row)return;
		var cell0 = row.cells[0].innerHTML;
		cell0 = ">" + cell0;
	
		if(isScroll==true && (cell0.match(">"+oldSymbol)!=null)){
            isScroll = false;
            var ele = row;
            var posy = findPosY(ele);
            if(ele!=null){
				 if(ele.className == "")
	                ele.className = "bghover";
					var clientH = document.body.clientHeight;
					if(posy < clientH /2)
						window.scrollTo(0,0);
					else
						if(posy >= clientH /2)
							window.scrollTo(0,posy - clientH /2);
                ele.onmouseout = function(){                    
                    ele.className = "";
                };
            }
        }
	    else{
            row.className = row.className= "";
        }
    }
	if(oldSymbol.length == 3)
		oldSymbol = "";
}
function Code2Name(keycode){
	var keynamearr = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
	var keycodearr = new Array("48","49","50","51","52","53","54","55","56","57","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90");
	var index=-1;
   
	for(var i=0;i<keycodearr.length;i++){
		if(keycodearr[i]==keycode){
			index=i;
			break;
		}
	}
	if(index> -1){
		return keynamearr[index];
	}
	return "";
}
/******************************************************************************
   NAME:    FAVORITE
   PURPOSE: Select favorite stock
******************************************************************************/
function ARFStock(row,nf,code){
	var tableT;
	var rowsC;
	var insertOK = 0;
	var fSL = "";
	 
	if(nf == "f"){//move to normal
		fSL = getCookie(LabelfSLCKName);
		tableT = document.getElementById("tbodyNSL");
		row.ondblclick = function(){
			ARFStock(this,"n",code); 
        };
		
		row.className = "";
		
		rowsC = tableT.rows;
		var lengthN = rowsC.length;
		if(lengthN == 0)
			tableT.appendChild(row);
		else{
			for(var i = 0; i < lengthN;i++){
				if(code < rowsC[i].cells[0].innerHTML){
					insertOK = 1;
					tableT.insertBefore(row, rowsC[i]);
					break;
				}
			}
			if(insertOK == 0)
				tableT.appendChild(row);
		}
		//save cookie
		fSL = fSL.replace(code +"|","");
		
	}
	else if(nf == "n"){//move to favorite
		tableT = document.getElementById("thheader");
		row.ondblclick = function(){
			ARFStock(this,"f",code);
        };
		row.className = "";
		
        rowsC = tableT.rows;
		if(rowsC.length < 3){
			tableT.appendChild(row);
			fSL = code + "|";
		}
		else{
			for(var i = 2; i < rowsC.length;i++){
				var nextCode = rowsC[i].cells[0].innerHTML;
				if(insertOK == 0 && code < nextCode){
					insertOK = 1;
					tableT.insertBefore(row, rowsC[i]);
					i++;
					fSL+=code+"|"+rowsC[i].cells[0].innerHTML+"|";
				}
				else{
					fSL +=nextCode + "|";
				}
			}
			if(insertOK == 0){
				tableT.appendChild(row);
				fSL +=code + "|";
			}
		}
	}
	setCookie(LabelfSLCKName,fSL,30);
}
/******************************************************************************
   NAME:    HEADER
   PURPOSE: Move header when scroll
******************************************************************************/
function MoveHeader(){
	var header = document.getElementById("divHeader");
	if(document.body.scrollTop <= findPosY(document.getElementById("divTableStock"))){
		header.style.display = 'none';
	}
	else {
		header.style.display = '';
		ResetWidth('tbBody','tbHeader');	    
		var ns = (navigator.appName.indexOf("Netscape") != -1) || window.opera;
		if(ns){
			header.style.position = "fixed";
			header.style.top = "0px";
		}
		else{
			header.style.position = "absolute";
			var pY = ns ? pageYOffset : iecompattest().scrollTop;
			header.style.top = pY + "px";
		}
	}     		
}
function ResetWidth(id1,id2){
	var tbMain = document.getElementById(id1);
	var rMain = tbMain.rows;
	var tbHeader = document.getElementById(id2);
	var rHeader = tbHeader.rows;             

	tbHeader.style.width = tbMain.clientWidth + 3;
	for(var i=0;i<2;i++)
		for(var j=0;j<rMain[i].cells.length;j++){ 
		  rHeader[i].cells[j].style.width = rMain[i].cells[j].clientWidth;
		}
}
function iecompattest(){
	return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body;
}

/******************************************************************************
   NAME:    LOCATION
   PURPOSE: To specify x and y of object on screen
******************************************************************************/
function findPosX(obj){
	var curleft = 0;
	if(obj.offsetParent)
	while(1) 
	{
	  curleft += obj.offsetLeft;
	  if(!obj.offsetParent)
		break;
	  obj = obj.offsetParent;
	}
	else if(obj.x)
	curleft += obj.x;
	return curleft;
}
function findPosY(obj){
	var curtop = 0;
	if(obj.offsetParent)
	while(1)
	{
	  curtop += obj.offsetTop;
	  if(!obj.offsetParent)
		break;
	  obj = obj.offsetParent;
	}
	else if(obj.y)
	curtop += obj.y;
	return curtop;
}
