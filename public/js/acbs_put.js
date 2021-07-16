var putid1=0, putid2=0;
var color_up='#03FF04', color_down='#FF0000', color_basic='#FFCC1C', color_floor='#00FFFF', color_ceiling='#FF00E8';
var PutInterval=null;
var time_out = 50000, put_Vol=0.0, put_Val=0.0;
/*$(document).ready(function() {
	load_PutData("HOSE");
});*/
function load_PutData(market){
	$("#tb_matching tbody").html('');
	$("#tb_buy tbody").html('');
	$("#tb_sell tbody").html('');
	putid1=0, putid2=0;
	put_Vol=0.0, put_Val=0.0;
	if(PutInterval!=null){
		clearInterval(PutInterval);
	}
	intit_Data(market);
	PutInterval=setInterval(function () {get_PutData(market);}, 300000);
}
function disconnect_rq(){
	if(PutInterval!=null){
		clearInterval(PutInterval);
	}
}
function intit_Data(market){
	var sPath="http://10.64.154.112/infos-api/api/put/";
	sPath += market;
	sPath +="/0/0";	
	var sHtml="";
	var initPutData = $.ajax({
		url: sPath,
		type: 'GET',
		timeout: time_out,
		cache: false
	});
	initPutData.done (function(data) {
		processData(data);
	});	
}
function get_PutData(market) {	
	var sPath="http://10.64.154.112/infos-api/api/put/";
	sPath += market+"/"+putid1+"/"+putid2;	
	$.ajax({
		url : sPath,						
		type : 'GET',		
		timeout: time_out,
		cache: false
	})
	.done (function(data, textStatus, jqXHR) {
		processData(data);		
	})
	.fail (function(jqXHR, textStatus, errorThrown) {
		//console.log( "Ajax request failed... " + textStatus + ' - ' + jqXHR.responseText + "..." );
	});		
}
function processData(data){
	var sAds='', sAdb='',sExec='';
	if(data != null && data.length > 0){
		var vlength=data.length;
		for(var i=vlength-1; i<data.length, i>=0; i--){
			var vID=parseInt(data[i].p1);
			var vStock = data[i].p2;
			var vDate = data[i].p3;
			var vVol=parseFloat(data[i].p4);
			var vPrice=parseFloat(data[i].p5);
			var vTime=data[i].p6;
			var vType=data[i].p7;
			var vSide=data[i].p8;
			var vCell=parseFloat(data[i].p9);
			var vFloor=parseFloat(data[i].p10);
			var vBasic=parseFloat(data[i].p11);
			var vRef = parseInt(data[i].p12);
			var vFlag = data[i].p13;
			var vColor='';
			if(vPrice==vFloor){
				vColor = color_floor;
			}
			else if(vPrice==vCell){
				vColor=color_ceiling;
			}
			else if(vPrice==vBasic){
				vColor=color_basic;
			}
			else if(vPrice>vBasic){
				vColor=color_up;
			}
			else{
				vColor=color_down;
			}
			if(vType=='AD'){
				if(vSide=='S'){
					sAds +='<tr>';
					sAds+='<td style="color:'+vColor+'">'+vStock+'</td>';
					sAds+='<td style="color:'+vColor+'; text-align:right">' + vPrice.toFixed(2) + '</td>';
					sAds+='<td style="color:'+vColor+'; text-align:right">' + vVol.toLocaleString() + '</td>';
					sAds+='<td style="color:'+vColor+'">' + vTime + '</td>';
					sAds+='</tr> ';
				}
				if(vSide=='B'){
					sAdb +='<tr>';
					sAdb+='<td style="color:'+vColor+'">'+vStock+'</td>';
					sAdb+='<td style="color:'+vColor+'; text-align:right">' + vPrice.toFixed(2) + '</td>';
					sAdb+='<td style="color:'+vColor+'; text-align:right">' + vVol.toLocaleString() + '</td>';
					sAdb+='<td style="color:'+vColor+'">' + vTime + '</td>';
					sAdb+='</tr> ';
				}
				if(vID > putid2){
					putid2 = vID;
				}				
			}
			
			if(vType=='EXEC'){
				var vTotal = vPrice*vVol;
				put_Val += (vTotal/1000000);
				put_Vol += vVol;
				sExec+='<tr>';
				sExec+='<td style="color:'+vColor+'">'+vStock+'</td>';
				sExec+='<td style="color:'+vColor+'; text-align:right">'+vPrice.toFixed(2)+'</td>';
				sExec+='<td style="color:'+vColor+'; text-align:right">'+vVol.toLocaleString()+'</td>';
				sExec+='<td style="color:'+vColor+'; text-align:right">'+vTotal.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})+'</td>';
				sExec+='<td style="color:'+vColor+'">'+vTime+'</td>';
				if(vID > putid1){
					putid1 = vID;
				}
			}
		}
		$("#tb_matching tbody").append(sExec);
		$("#tb_buy tbody").html(sAdb);
		$("#tb_sell tbody").html(sAds);
		$("#putvol").html(put_Vol.toLocaleString());		
		$("#putval").html(put_Val.toLocaleString(undefined, {minimumFractionDigits: 3, maximumFractionDigits: 3}) + ' <span class="trn b" data-trn-key="tỷ">tỷ</span>');
	}	
}