var arrT_price = [];
var arrT_vol = [];
var s_threhold = 0, s_maxID=0, s_maxPrice=0, s_minPrice=0, s_minVol=0, s_maxVol=0, s_maxX=0, s_maxX1=14, b_maxX=false, mobile_max=9, cell_price=0, floor_price=0, totalvol=0;
var uPrice=100, uVol=1000;
var arrV_Temp = [], arrV_Temp1=[];
var arrV_Price = [];
var arrV_Sell = [];
var arrV_Buy = [];
var arrV_Other = [];
var arrV_Change = [], arr_mobile=[];
var chartPrice = null, chartVol=null, itemChartStock=null, checkStock=false;
var gtype='column', sPath='', sCode='', sPath2='', sType='';
var color_ce = '#E100E1', color_fl='#66CCFF', color_bs='#FFCC00', color_up='#00D700', color_down='#EC0000';
var stockChart;
$(document).ready(function() {	
	if ($(".lang-en").hasClass('active')){
		
	}
	Highcharts.setOptions({
		global: {
			useUTC: false
		}
	});	
	
});
function PriceByTime(container){
	var iheight = $(document.getElementById(container)).height();
	var iwidth = $(document.getElementById(container)).width();	
	chartPrice= new Highcharts.Chart({
		chart: {
			renderTo: container,	
			alignTicks: false,
			animation: true,
			backgroundColor: {
				linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
				stops: [
					[0, 'rgb(0, 0, 0)'],
					[1, 'rgb(62, 51, 0)']
				]
			},			
			marginTop: 3,
			marginLeft: 35,
			marginRight: 40,
			marginBottom: 30,				
			height: iheight,
			width: iwidth,
			spacingLeft: 2,
			spacingRight: 2			
		},
		title: {
			text: ""
		},
		xAxis: {
			type: "datetime",					
			tickInterval: 1800 * 1000,			
			labels: {
				format: '{value:%H:%M}',
				style: {
					color: "#ffffff",
					fontSize: "9px",
					fontFamily: "Tahoma"
				}
			},
			crosshair: {
				width: 1,
				color: '#bfd630'
			},
			plotBands: [{ 
				color: '#2E2D2D',
				from: changeIntToTime('113000'),
				to: changeIntToTime('130000'),
				zIndex: 3,
				label: {
						style: {
						color: "#ffffff",
						fontSize: "12px",
						fontFamily: "Tahoma",
						opacity:0.4
					},
					text: 'Tạm nghỉ',						
					verticalAlign: 'middle',
					textAlign: 'center'
				}
			}],
			plotLines: [{
				color: '#ffffff',
				dashStyle: 'ShortDot', 
				value: changeIntToTime('113000'), 
				width: 1 
			},{
				color: '#ffffff', 
				dashStyle: 'ShortDot', 
				value: changeIntToTime('130000'), 
				width: 1  
			}]
		},
		colors: ["#60a0ff", "#14f803"],
		yAxis: [ 
			{
				max: s_maxPrice,
				min: s_minPrice,	
				endOnTick: false,
				tickAmount: 5,
				tickPositioner: function () {
					var dataMax = parseFloat(this.dataMax);
					var dataMin = parseFloat(this.dataMin);
					if(dataMax > dataMin){
						var inc = (dataMax - dataMin) / 5;
						var increment = Number(_.round((inc), 2).toFixed(2));
						var tick = this.dataMin + increment;	
						var positions = [];				
						positions.push(dataMin);
						if (this.dataMax !== null && this.dataMin !== null && increment>0) {
							for (tick; tick < dataMax-increment; tick += increment) {
								positions.push(tick);
							}
						}
						positions.push(this.dataMax);
					}
					
				},
				plotLines: [{
					value: s_threhold,
					color: color_bs,
					dashStyle: 'shortdot',
					width: 1,
					zIndex: 10,
					label: {
						text: s_threhold,
						align: 'center',
						style: {
						color: "#ffffff",
						fontSize: "9px",
						fontFamily: "Tahoma"
						}
					}
				}],
				title: {
					text: ""
				},
				labels: {
					formatter: function() {								
						return Highcharts.numberFormat(this.value, this.value >= 100 ? 1 : 2)
						
					},
					style: {
						color: "#ffffff",
						fontSize: "8px",
						fontFamily: "Tahoma",
						align: 'right'
					}
				},					
				gridLineColor: "#464646"
			},
			{
				max: s_maxVol,
				min: s_minVol,
				tickAmount: 5,
				tickPositioner: function () {
					if(this.dataMax > this.dataMin){
						var positions = [],						
							increment = Math.ceil((this.dataMax - this.dataMin) / 5),
							tick = Math.floor(this.dataMin) + increment;	
						positions.push(this.dataMin);
						if (this.dataMax !== null && this.dataMin !== null && increment>0) {
							for (tick; tick < this.dataMax - increment; tick += increment) {
								positions.push(tick);
							}
						}
						positions.push(this.dataMax);
					}
				},
	   
				title: {
					text: "",						
				},								
				labels: {
					formatter: function() {		
						if(sType=='FU'){
							return Highcharts.numberFormat (this.value, 0, '.', ',') ;
						}
						else{
							return Highcharts.numberFormat (this.value, 0, '.', ',') + "K";
						}
					},
					style: {
						color: "#ffffff",
						fontSize: "8px",
						fontFamily: "Tahoma",
						align: "left"
					}
				},					
				opposite: true,
				gridLineWidth: 0
			}
		],
		credits:{
			enabled: false
		},
		tooltip: {
			useHTML: true,
			backgroundColor: 'rgba(0, 0, 0, 0.85)',
			style: {
				fontSize: "9px",
				color: '#F0F0F0',
				fontFamily: "Tahoma"
			},
			formatter: function() {
				var e = "<b>" + Highcharts.dateFormat("%H:%M:%S", this.x) + "</b><br />";					
				$.each(this.points, function(r, i) {
					if (this.series.name == "Last Price") {
						e += this.series.name + ": <b>" + this.y + "</b><br />";
					} else {
						if(sType=='FU'){
							e += this.series.name + ": <b>" +Highcharts.numberFormat (this.y, 0, '.', ',') + "</b><br />";
						}
						else{
							e += this.series.name + ": <b>" +Highcharts.numberFormat (this.y * 1000, 0, '.', ',') + "</b><br />";
						}
					}
				});												
				return e
			},
			shared: true,
			crosshairs: true,
			shadow: false
		},
		legend: {
			enabled: false
		},
		exporting: {
			enabled: false
		},
		
		series: [ 
		{
			name: "Last Price",
			type: "line",
			data: arrT_price,
			threshold: s_threhold,
			negativeColor: color_down,
			color: color_up,
			turboThreshold: 1000000,
			tooltip: {
				valueDecimals: 2
			},
			marker: {
				enabled: false,
				radius: 2
			},
			lineWidth: 1,
			index: 0,
			yAxis: 0,
			zIndex: 20
		},
		{
			name: "Volume",
			type: "column",
			data: arrT_vol,							
			color: "#60a0ff",
			borderColor: "#60a0ff",
			turboThreshold: 1000000,
			pointWidth: 1,
			index: 1,
			yAxis: 1,
			zIndex: 15
		}]
		
	});
	
}
function VolumeByPrice(container) {
	var iheight = $(document.getElementById(container)).height();
	var iwidth = $(document.getElementById(container)).width();
	chartVol= new Highcharts.Chart({
		chart: {
			renderTo: container,	
			animation: false,
			spacingBottom:2,
			spacingTop:2,
			type: 'column',
			backgroundColor: {
				linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
				stops: [
					[0, '#2a2a2b'],
					[1, '#3e3e40']
				]
			},					
			plotBorderColor: '#606063',			
			height: iheight,
			width: iwidth
		},
		credits: {
			enabled: false
		},
		colors:[color_down,color_up,color_bs,'#F02DB6'],
		
		title: {
			text: ''
		},
		exporting: {
			enabled: false
		},
		xAxis: {
			max: s_maxX,
			scrollbar: {
				enabled: false
			},
			gridLineColor: '#707073',			
			labels: {
				 style: {
					fontSize: "9px",
					color: '#E0E0E3',
					fontFamily: "Tahoma"					
				 },
				 formatter: function() {								
					return Highcharts.numberFormat (this.value,2) ;
				}
			},
			lineColor: '#707073',
			minorGridLineColor: '#505053',
			tickColor: '#707073',
			title: {
				style: {
					color: '#A0A0A3'

				}
			},
			categories: arrV_Price 
		},
		yAxis: {
			gridLineColor: '#707073',
			lineColor: '#707073',
			minorGridLineColor: '#505053',
			tickColor: '#707073',
			tickWidth: 1,
			//min: 0,
			title: {
				text: ''
			},
			labels: {
				style: {
					fontSize: "9px",
					color: '#E0E0E3',
					fontFamily: "Tahoma"
				},
				formatter: function() {	
					if(sType=='FU'){						
						return Highcharts.numberFormat (this.value, 0, '.', ',') ;
					}
					else{
						return Highcharts.numberFormat (this.value/1000, 0, '.', ',') + "K"
					}
				}
			},
			stackLabels: {
				enabled: false,
				style: {
					fontWeight: 'bold',
					color: '#E0E0E3'
				},
				formatter: function() {							
					return Highcharts.numberFormat(this.total, 0, '.', ',') ;
				}
			}
		},
		legend: {
			backgroundColor: '#E0E0E3',
			borderColor: '#CCC',
			borderWidth: 1,
			itemStyle: {
				fontSize: "9px",				
				fontFamily: "Tahoma"
			},			
			itemMarginTop: 3,
            itemMarginBottom: 3,
			itemDistance: 0,
			padding: 5,
			shadow: false
		},
		tooltip: {
			useHTML: true,
			backgroundColor: 'rgba(0, 0, 0, 0.85)',
			style: {
				fontSize: "9px",
				color: '#F0F0F0',
				fontFamily: "Tahoma"
			},
			formatter: function() {
				var e = " Price:<b>" + Highcharts.numberFormat(this.x,2) + "</b><br/>";
				e += this.series.name + ": <b>" +Highcharts.numberFormat (this.y, 0, '.', ',') + "</b><br />";
				e += "Total: <b>" +Highcharts.numberFormat (this.total, 0, '.', ',')+"</b>" ;						
				return e
			}					
		},
		plotOptions: {				
			series: {
				stacking: 'normal',				
				pointWidth: 13,       
				events: {
					legendItemClick: function (event) {                        
						var chart = this.chart,
							index = this.index;
						if(index==3){
							if(gtype=="bar"){		
								chartVol.update({
									chart: {
										inverted: false,
										polar: false
									}
								});
								gtype="column";
							}
							else{
								chartVol.update({
									chart: {
										inverted: true,
										polar: false
									}
								});
								gtype="bar";
							}
						}								
						
					}
				}
			}
		},
		series: [{
			name: 'Sell',
			data: arrV_Sell
		}, {
			name: 'Buy',
			data: arrV_Buy
		}, {
			name: 'Other',
			data: arrV_Other
		}, {
			name: 'Change type',
			data: arrV_Change
		}]
	});	
	chartVol.xAxis[0].update({
		scrollbar: {
			enabled: b_maxX
		}
	});
	if(sType=='FU'){
		//chartVol.legendHide();
		chartVol.legend.update({
		   enabled:false
		});
	}
	$('#loadingc').fadeOut();
}
function showStockChart(stock){			
	drawStockChart(stock);		
	$('.bg-char').show();	
	$('.date-tblResultHeader h4').removeClass();
  	$('.date-tblResultHeader h4:first').addClass("acvite-daychart"); 

  	var widhttable1 = 59;
	var widhttable2 = 59; 
	var sumwidhttable = widhttable1 + widhttable2 + 25; 
	var sumtablekl = widhttable1 + widhttable2 + 13; 

	$(window).resize(function () { 
		$('.widcol1').width(widhttable1 );
		$('.widcol2').width(widhttable2);
		$('.widcol3').width($('.title-tblResultHeader').width() - sumwidhttable);
		$('.price-cold1').width(sumtablekl);
		$('.price-cold2').width($('.price-info1').width() - sumtablekl - 1) ;
	});
	$(window).trigger('resize');   

	$('#close-table-char').click(function () { 
		if(itemChartStock!=null){
			clearInterval(itemChartStock);
		}
		if(stockChart != null && stockChart.isActive()){		
			lsClient.unsubscribe(stockChart);
		}
		$('.bg-char').hide()  
	});	
}
function drawStockChart(name){	
	$("#loadingc").fadeIn("");
	//initChart(name);
	sCode = '';
	sPath='http://10.64.154.112/infos-api/api/stockinfo/';
	sPath2='http://10.64.154.112/infos-api/api/ls/';
	sCode = name;
	sPath += sCode;
	sPath2 += sCode;
	
	arrT_price.length = 0;
	arrT_vol.length = 0;	
	arrV_Temp.length = 0;
	arrV_Price.length = 0;
	arrV_Sell.length = 0;
	arrV_Buy.length = 0;
	arrV_Other.length = 0;
	arrV_Change.length = 0;
	arr_mobile.length = 0;
	
	s_threhold = 0, s_maxID=0, s_maxPrice=0, s_minPrice=0, s_minVol=0, s_maxVol=0, s_maxX=0, b_maxX=false, cell_price=0,floor_price=0,totalvol=0;
	uPrice=100, uVol=1000;	
	gtype='column';
	sType='';
	$(".scroll tbody").html('');
	$('#pcell').html('-');
	$('#pfloor').html('-');
	$('#pbasic').html('-');
	$('#ptotal').html('-');
	$('#tprice1').html('-');
	$('#tvol1').html('-');
	$('#tprice2').html('-');
	$('#tvol2').html('-');
	$('#tprice3').html('-');
	$('#tvol3').html('-');
	$('#ptval').html('-');
	$('#phight').html('-');
	$('#plow').html('-');
	$('#pavg').html('-');
	$('#tfbuy').html('-');
	$('#tfsell').html('-');
	$('#tfroom').html('-');
	if(siteLanguage == "vi")
		$("#tradelog_t").html('<span class="trn">Nhật ký giao dịch hôm nay</span>');
	else
		if(siteLanguage == "en")
		$("#tradelog_t").html('<span class="trn">Trade log today</span>');
	if (chartPrice !=null) {
		chartPrice.destroy();
	}
	if (chartVol !=null) {
		chartVol.destroy();
	}
	if(itemChartStock!=null){
		clearInterval(itemChartStock);
	}
	var stockName = _.find(stockListDes, function(o) { return o.value == sCode; });
	if(stockName != null){
		$(".stoke-name" ).html(stockName.label);	
	}
	else{
		$(".stoke-name" ).html(sCode);
	}
	initChartStock(sPath);	
	itemChartStock = setInterval(function () {requestData();}, 3000);
}	
function drawStockChart_Hist(dayT){
	$("#loadingc").fadeIn("");
	var hCode = sCode;
	var hPath='http://10.64.154.112/infos-api/api/stockinfo/hist/';		
	hPath += hCode + '/' + dayT;	
	
	arrT_price.length = 0;
	arrT_vol.length = 0;
	arrV_Temp.length = 0;
	arrV_Temp1.length = 0;
	arrV_Price.length = 0;
	arrV_Sell.length = 0;
	arrV_Buy.length = 0;
	arrV_Other.length = 0;
	arrV_Change.length = 0;
	arr_mobile.length = 0;
	s_threhold = 0, s_maxID=0, s_maxPrice=0, s_minPrice=0, s_minVol=0, s_maxVol=0, s_maxX=0, b_maxX=false, cell_price=0,floor_price=0,totalvol=0;
	uPrice=100, uVol=1000;
	gtype='column';	
	sType='';
	$(".scroll tbody").html('');
	$('#pcell').html('-');
	$('#pfloor').html('-');
	$('#pbasic').html('-');
	$('#ptotal').html('-');
	$('#tprice1').html('-');
	$('#tvol1').html('-');
	$('#tprice2').html('-');
	$('#tvol2').html('-');
	$('#tprice3').html('-');
	$('#tvol3').html('-');
	$('#ptval').html('-');
	$('#phight').html('-');
	$('#plow').html('-');
	$('#pavg').html('-');
	$('#tfbuy').html('-');
	$('#tfsell').html('-');
	$('#tfroom').html('-');
	if(siteLanguage == "vi")
		$("#tradelog_t").html('<span class="trn">Nhật ký giao dịch T - ' + dayT+'</span>');
	else
		if(siteLanguage == "en")
		$("#tradelog_t").html('<span class="trn">Trade log T -  ' + dayT + '</span>');	
	
	if(dayT != 0){
		if (chartPrice !=null) {
			chartPrice.destroy();
		}
		if (chartVol !=null) {
			chartVol.destroy();
		}
		if(itemChartStock!=null){
			clearInterval(itemChartStock);
		}
		initChartStock(hPath);	
	}
	else{
		drawStockChart(hCode);
	}
}	
function initChartStock(a){
	checkStock = false;
	var initStock = $.ajax({
		url : a,						
		type : 'GET',		
		timeout: time_out,
		cache: false
	});
	initStock.done (function(data, textStatus, jqXHR) {		
		sType=data.p8;
		if(sType=='FU'){
			uPrice=1, uVol=10;			
		}
		else{
			uPrice=100, uVol=1000;			
		}
		s_threhold = data.p7 / uPrice;	
		cell_price = data.p5 / uPrice;
		floor_price = data.p6 / uPrice;
		$('#pcell').html('<span style="color:'+ color_ce + ';">'+cell_price.toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 2})+'</span>');
		$('#pfloor').html('<span style="color:'+ color_fl + ';">'+floor_price.toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 2})+'</span>');
		$('#pbasic').html('<span style="color:'+ color_bs + ';">'+s_threhold.toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 2})+'</span>');
		processData1(data.lm);		
		processData2(data.ex);		
		PriceByTime("box-2");
		VolumeByPrice("box-4");		
	});
	initStock.fail (function(jqXHR, textStatus, errorThrown) {
		//console.log( "Ajax request failed... " + textStatus + ' - ' + jqXHR.responseText + "..." );
		$('#loadingc').fadeOut();
	});
	initStock.always (function(jqXHROrData, textStatus, jqXHROrErrorThrown) {
		if (textStatus == "success"){
			checkStock = true;
		}		  
	});
}
function requestData() {	
	var strUrl = sPath2+ "/"+s_maxID; 
	if(s_threhold != 0){
		var d = new Date();
		//if((d < changeIntToTime('150000')) && (d > changeIntToTime('90000')) && checkStock){		
		if((d < changeIntToTime('150000')) && (d > changeIntToTime('90000')) && checkStock){		
			$.ajax({
				url : strUrl,						
				type : 'GET',		
				timeout: time_out,
				cache: false
			})
			.done (function(data, textStatus, jqXHR) {
				processData3(data.lm);		
				processData2(data.ex);		
			})
			.fail (function(jqXHR, textStatus, errorThrown) {
				//console.log( "Ajax request failed... " + textStatus + ' - ' + jqXHR.responseText + "..." );
			});
		}
	}
	else{
		initChartStock(sPath);		
	}	
}
function changeIntToTime(b){
	var a = new Date();
	try {
		var f = $.trim(b + "");
		var d = 0;
		var h = 0;
		var c = 0;
		if (f.length == 5) {
			d = parseInt(f.substring(0, 1));
			h = parseInt(f.substring(1, 3));
			c = parseInt(f.substring(3, 5))
		} else {
			d = (f.substring(0, 2));
			h = (f.substring(2, 4));
			c = (f.substring(4, 6))
		}
		a.setHours((d), (h), (c), 0)
	} catch (g) {}
	return a
};	
function processData1(data){		
	var a="";
	if(data != null && data.length > 0){
		for (i = 0; i < data.length; i++) {	
			var B = 0;
			var S = 0;
			var O = 0;
			var P = 0;
			var C = 0;
			
			var id = parseFloat(data[i].i);			
			var vol = parseFloat(data[i].v);
			var price = parseFloat(data[i].p);
			var time1 = data[i].t;
			var side = data[i].x;
			var total = data[i].s;
			var time2 = time1.replace(/\:/g,'');
			var iside = '';
			var time = changeIntToTime(time2).getTime();
			if(sType=='FU'){
				vol = vol/10;
				total = total/10;
				price = Number(Math.round(price * 100+'e1')+'e-1');
			}
			if(i>0){
				var id2 = parseFloat(data[i-1].i);
				if(id > id2){
					s_maxID = id;
				}
				if(price > s_maxPrice){
					s_maxPrice = price;
				}
				if(price < s_minPrice){
					s_minPrice = price;
				}
			}else{
				s_maxID = id;
				s_maxPrice = price;
				s_minPrice = price;
				P = data[0].price;
				type = data[0].x;
				if(type == "B"){
					B = data[0].v;
				}
				else if(type == "S"){
					S = data[0].v;
				}
				else{
					O = data[0].v;
				}
			}
			var j = _.findIndex(arrT_price, function(o) { return o.x== time; });
			if(j == -1){
				arrT_price.push({
					x: time,
					y: price
				});				
				arrT_vol.push({
					x: time,
					y: vol/uVol
				});
				
				if(price > s_maxPrice){
					s_maxPrice = price;
				}
				if(price < s_minPrice){
					s_minPrice = price;
				}					
			} else{					
				arrT_price[j].y = price;
				arrT_vol[j].y += vol/uVol;
				
			}			
			
			var k = _.findIndex(arrV_Temp, function(o) { return o.p==price; });			
			if(k==-1){
				if(side == "B"){
					B = vol;
					iside="S";
				}
				else if(side == "S"){
					S = vol;
					iside="B";
				}
				else{
					O = vol;
					iside=side;
				}
				arrV_Temp.push({
					p: price,
					b: B,
					s: S,
					o: O,
					c: C
				});									
			}
			else{				
				if(side == "B"){
					arrV_Temp[k].b +=vol;	
					iside="S";
				}
				else if(side == "S"){						
					arrV_Temp[k].s +=vol;
					iside="B";
				}
				else{						
					arrV_Temp[k].o +=vol;
					iside=side;
				}				
			}			
			if(price > s_threhold){
				color = color_up;
			}
			else if(price < s_threhold){
				color = color_down;
			}
			else{
				color = color_bs;
			}
			if(sType=='FU'){
				iside='';
			}
			var temp_desc='<tr><td class="widcol1">' + time1 + '</td><td class="widcol2"><span style="color:' + color +'">' + price.toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 2}) + '</span></td><td><span style="color:' + color +'">'+ vol.toLocaleString()+' ' + iside+ '</span></td></tr>';
			if($(window).width()  > 750){
				a =  temp_desc + a;	
			}
			else{
				if(data.length - i <= mobile_max){
						arr_mobile.push({							
							desc: temp_desc
						});					
				}
			}	
			totalvol=total;
		}	
		//$("#tblResultContent tbody").prepend(a);		
		if($(window).width()  > 750){
			$(".scroll tbody").html(a);
		}
		else{
			var desc_mobile ="";
			for(var t=0;t<arr_mobile.length; t++){
				desc_mobile = arr_mobile[t].desc +desc_mobile;
				
			}
			$(".scroll tbody").append(desc_mobile);
		}
		//alert("ccccc:" + s_maxID);
		s_maxVol= Math.max.apply(Math,arrT_vol.map(function(o){return o.y;}));
		s_minVol = Math.min.apply(Math,arrT_vol.map(function(o){return o.y;}));		
		
		arrV_Temp = _.sortBy(arrV_Temp, 'p');
		arrV_Temp1.length = 0;
		for(var j=0; j<arrV_Temp.length; j++){
			arrV_Price.push(arrV_Temp[j].p);
			arrV_Sell.push(arrV_Temp[j].b);
			arrV_Buy.push(arrV_Temp[j].s);
			arrV_Other.push(arrV_Temp[j].o);
			arrV_Change.push(arrV_Temp[j].c);
			var sumV = arrV_Temp[j].b + arrV_Temp[j].s + arrV_Temp[j].o;
			arrV_Temp1.push({
				p: arrV_Temp[j].p,
				v: sumV
			});		
		}		
		if(arrV_Price.length > s_maxX1){
			s_maxX = s_maxX1;
			b_maxX = true;
		}
		else{
			s_maxX=arrV_Price.length-1;	
		}
		$('#ptotal').html(totalvol.toLocaleString());
		arrV_Temp1 = _.sortBy(arrV_Temp1, 'v');
		var tP = 0, tV=0;
		var tLength = arrV_Temp1.length;
		if(tLength == 1){			
			tV = arrV_Temp1[0].v;
			var tV1 = tV.toLocaleString();
			tP = arrV_Temp1[0].p;
			if(tP > s_threhold){				
				$('#tprice1').html('<span style="color:'+ color_up + ';">'+tP+'</span>');
				$('#tvol1').html('<span style="color:'+ color_up + ';">'+tV1+'</span>');
			}
			else if (tP < s_threhold){
				$('#tprice1').html('<span style="color:'+ color_down + ';">'+tP+'</span>');
				$('#tvol1').html('<span style="color:'+ color_down + ';">'+tV1+'</span>');
			}
			else{
				$('#tprice1').html('<span style="color:'+ color_bs + ';">'+tP+'</span>');
				$('#tvol1').html('<span style="color:'+ color_bs + ';">'+tV1+'</span>');
			}
		}
		else if(tLength == 2){
			tV = arrV_Temp1[0].v;
			var tV1 = tV.toLocaleString();
			tP = arrV_Temp1[0].p;			
			if(tP > s_threhold){				
				$('#tprice1').html('<span style="color:'+ color_up + ';">'+tP+'</span>');
				$('#tvol1').html('<span style="color:'+ color_up + ';">'+tV1+'</span>');
			}
			else if (tP < s_threhold){
				$('#tprice1').html('<span style="color:'+ color_down + ';">'+tP+'</span>');
				$('#tvol1').html('<span style="color:'+ color_down + ';">'+tV1+'</span>');
			}
			else{
				$('#tprice1').html('<span style="color:'+ color_bs + ';">'+tP+'</span>');
				$('#tvol1').html('<span style="color:'+ color_bs + ';">'+tV1+'</span>');
			}
			tV = arrV_Temp1[1].v;
			tV1 = tV.toLocaleString();
			tP = arrV_Temp1[1].p;
			if(tP > s_threhold){				
				$('#tprice2').html('<span style="color:'+ color_up + ';">'+tP+'</span>');
				$('#tvol2').html('<span style="color:'+ color_up + ';">'+tV1+'</span>');
			}
			else if (tP < s_threhold){
				$('#tprice2').html('<span style="color:'+ color_down + ';">'+tP+'</span>');
				$('#tvol2').html('<span style="color:'+ color_down + ';">'+tV1+'</span>');
			}
			else{
				$('#tprice2').html('<span style="color:'+ color_bs + ';">'+tP+'</span>');
				$('#tvol2').html('<span style="color:'+ color_bs + ';">'+tV1+'</span>');
			}
		}
		else if(tLength >= 3){
			tV = arrV_Temp1[arrV_Temp1.length-1].v;
			var tV1 = tV.toLocaleString();	
			tP = arrV_Temp1[tLength-1].p;			
			if(tP > s_threhold){				
				$('#tprice1').html('<span style="color:'+ color_up + ';">'+tP+'</span>');
				$('#tvol1').html('<span style="color:'+ color_up + ';">'+tV1+'</span>');
			}
			else if (tP < s_threhold){
				$('#tprice1').html('<span style="color:'+ color_down + ';">'+tP+'</span>');
				$('#tvol1').html('<span style="color:'+ color_down + ';">'+tV1+'</span>');
			}
			else{
				$('#tprice1').html('<span style="color:'+ color_bs + ';">'+tP+'</span>');
				$('#tvol1').html('<span style="color:'+ color_bs + ';">'+tV1+'</span>');
			}
			
			tV = arrV_Temp1[tLength-2].v;
			tV1 = tV.toLocaleString();	
			tP = arrV_Temp1[tLength-2].p;
			if(tP > s_threhold){				
				$('#tprice2').html('<span style="color:'+ color_up + ';">'+tP+'</span>');
				$('#tvol2').html('<span style="color:'+ color_up + ';">'+tV1+'</span>');
			}
			else if (tP < s_threhold){
				$('#tprice2').html('<span style="color:'+ color_down + ';">'+tP+'</span>');
				$('#tvol2').html('<span style="color:'+ color_down + ';">'+tV1+'</span>');
			}
			else{
				$('#tprice2').html('<span style="color:'+ color_bs + ';">'+tP+'</span>');
				$('#tvol2').html('<span style="color:'+ color_bs + ';">'+tV1+'</span>');
			}
			
			tV = arrV_Temp1[tLength-3].v;
			tV1 = tV.toLocaleString();
			tP = arrV_Temp1[tLength-3].p;		
			if(tP > s_threhold){				
				$('#tprice3').html('<span style="color:'+ color_up + ';">'+tP+'</span>');
				$('#tvol3').html('<span style="color:'+ color_up + ';">'+tV1+'</span>');
			}
			else if (tP < s_threhold){
				$('#tprice3').html('<span style="color:'+ color_down + ';">'+tP+'</span>');
				$('#tvol3').html('<span style="color:'+ color_down + ';">'+tV1+'</span>');
			}
			else{
				$('#tprice3').html('<span style="color:'+ color_bs + ';">'+tP+'</span>');
				$('#tvol3').html('<span style="color:'+ color_bs + ';">'+tV1+'</span>');
			}			
		}
	}
}
function processData2(data){
	if(data != null){
		var vtotal_vol = parseFloat(data.vo);
		var vtotal_val = parseFloat(data.va);
		var vhigh = parseFloat(data.h);
		var vlow = parseFloat(data.l);
		var vavg = parseFloat(data.a);
		var vbf = parseFloat(data.bf);
		var vsf = parseFloat(data.sf);
		var vtr = parseFloat(data.tr);
		if(vavg==0){
			vavg = (vtotal_val*1000)/vtotal_vol;
			if(sType=='FU'){
				vavg = vavg/100000;
			}
		}
		$('#ptval').html((vtotal_val/1000).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));
		$('#phight').html(showColorData(vhigh, floor_price, cell_price, s_threhold));
		$('#plow').html(showColorData(vlow, floor_price, cell_price, s_threhold));
		if(sType=='FU'){
			$('#pavg').html(showColorData(vavg, floor_price, cell_price, s_threhold).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));
		}
		else{
			$('#pavg').html(showColorData(vavg, floor_price, cell_price, s_threhold));
		}
		$('#tfbuy').html(vbf.toLocaleString());
		$('#tfsell').html(vsf.toLocaleString());
		$('#tfroom').html(vtr.toLocaleString());		
	}
}
function processData3(data){	
	if(data != null && data.length > 0){		
		for (i = 0; i < data.length; i++) {
			var B = 0;
			var S = 0;
			var O = 0;
			var P = 0;
			var C = 0;
			var a="";
			var id = parseFloat(data[i].i);
			s_maxID = id;
			var vol = parseFloat(data[i].v);
			var price = parseFloat(data[i].p);
			var time1 = data[i].t;
			var side = data[i].x;
			var total = data[i].s;
			var time2 = time1.replace(/\:/g,'');
			var time = changeIntToTime(time2).getTime();
			if(sType=='FU'){
				total = total/10;
				vol = vol/10;
				price = Number(Math.round(price * 100+'e1')+'e-1');
			}
			var iside="";
			var j = _.findIndex(arrT_price, function(o) { return o.x== time; });
			if(j == -1){
				arrT_price.push({
					x: time,
					y: price
				});
				arrT_vol.push({
					x: time,
					y: vol/uVol
				});	
				
				if(price > s_maxPrice){
					s_maxPrice = price;
				}
				if(price < s_minPrice){
					s_minPrice = price;
				}				
			} else{				
				arrT_price[j].y = price;
				arrT_vol[j].y += vol/uVol;	
				
			}
			var k = _.findIndex(arrV_Temp, function(o) { return o.p==price; });			
			if(k==-1){
				if(side == "B"){
					B = vol;
					iside="S";
				}
				else if(side == "S"){
					S = vol;
					iside="B";
				}
				else{
					O = vol;
					iside=side;
				}
				arrV_Temp.push({
					p: price,
					b: B,
					s: S,
					o: O,
					c: C
				});									
			}
			else{				
				if(side == "B"){
					arrV_Temp[k].b +=vol;
					iside="S";					
				}
				else if(side == "S"){					
					arrV_Temp[k].s +=vol;
					iside="B";
				}
				else{					
					arrV_Temp[k].o +=vol;
					iside=side;
				}				
			}
			if(price > s_threhold){
				color = color_up;
			}
			else if(price < s_threhold){
				color = color_down;
			}
			else{
				color = color_bs;
			}
			if(sType=='FU'){
				iside='';
			}
			var temp_desc='<tr><td class="widcol1">' + time1 + '</td><td class="widcol2"><span style="color:' + color +'">' + price.toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 2}) + '</span></td><td><span style="color:' + color +'">'+ vol.toLocaleString()+' ' + iside+ '</span></td></tr>';
			if($(window).width()  > 750){
				a =  temp_desc + a;	
			}
			else{
				if(arr_mobile.length == mobile_max + 1){
					_.drop(arr_mobile);
				}
				arr_mobile.push({					
					desc: temp_desc
				});
			}
			totalvol = total;
					
		}
		if($(window).width()  > 750){
			$(".scroll tbody").prepend(a);
		}
		else{
			var desc_mobile ="";
			for(var t=0;t<arr_mobile.length; t++){
				desc_mobile = arr_mobile[t].desc + desc_mobile;
			}
			$(".scroll tbody").html(desc_mobile);
		}
		chartPrice.series[0].setData(arrT_price);
		chartPrice.series[1].setData(arrT_vol);
		s_maxVol= Math.max.apply(Math,arrT_vol.map(function(o){return o.y;}));
		s_minVol = Math.min.apply(Math,arrT_vol.map(function(o){return o.y;}));
		chartPrice.yAxis[0].update({max: s_maxPrice,min: s_minPrice},true);
		if(s_maxVol > 0){
			chartPrice.yAxis[1].update({max: s_maxVol,min: s_minVol},true);
		}
		
		var arrV_P=[],arrV_B=[],arrV_S=[],arrV_O=[], arrV_C=[];
		arrV_Temp = _.sortBy(arrV_Temp, 'p');
		arrV_Temp1.length = 0;
		for(var l=0; l<arrV_Temp.length; l++){
			arrV_P.push(arrV_Temp[l].p);
			arrV_S.push(arrV_Temp[l].b);
			arrV_B.push(arrV_Temp[l].s);
			arrV_O.push(arrV_Temp[l].o);
			arrV_C.push(arrV_Temp[l].c);
			var sumV = arrV_Temp[l].b + arrV_Temp[l].s + arrV_Temp[l].o;
			arrV_Temp1.push({
				p: arrV_Temp[l].p,
				v: sumV
			});	
		}
		var xMax = 10;
		if(arrV_P.length > s_maxX1){
			xMax = s_maxX1;
			chartVol.xAxis[0].update({
				scrollbar: {
					enabled: true
				}
			});
			
		}
		else{
			xMax = arrV_P.length-1;
		}
		chartVol.xAxis[0].update({max: xMax},true);
		chartVol.xAxis[0].setCategories(arrV_P);
		chartVol.series[0].setData(arrV_S);
		chartVol.series[1].setData(arrV_B);
		chartVol.series[2].setData(arrV_O);
		
		$('#ptotal').html(totalvol.toLocaleString());
		arrV_Temp1 = _.sortBy(arrV_Temp1, 'v');
		var tP = 0, tV=0;
		var tLength = arrV_Temp1.length;
		if(tLength == 1){			
			tV = arrV_Temp1[0].v;
			var tV1 = tV.toLocaleString();
			tP = arrV_Temp1[0].p;
			if(tP > s_threhold){				
				$('#tprice1').html('<span style="color:'+ color_up + ';">'+tP+'</span>');
				$('#tvol1').html('<span style="color:'+ color_up + ';">'+tV1+'</span>');
			}
			else if (tP < s_threhold){
				$('#tprice1').html('<span style="color:'+ color_down + ';">'+tP+'</span>');
				$('#tvol1').html('<span style="color:'+ color_down + ';">'+tV1+'</span>');
			}
			else{
				$('#tprice1').html('<span style="color:'+ color_bs + ';">'+tP+'</span>');
				$('#tvol1').html('<span style="color:'+ color_bs + ';">'+tV1+'</span>');
			}
		}
		else if(tLength == 2){
			tV = arrV_Temp1[0].v;
			var tV1 = tV.toLocaleString();
			tP = arrV_Temp1[0].p;			
			if(tP > s_threhold){				
				$('#tprice1').html('<span style="color:'+ color_up + ';">'+tP+'</span>');
				$('#tvol1').html('<span style="color:'+ color_up + ';">'+tV1+'</span>');
			}
			else if (tP < s_threhold){
				$('#tprice1').html('<span style="color:'+ color_down + ';">'+tP+'</span>');
				$('#tvol1').html('<span style="color:'+ color_down + ';">'+tV1+'</span>');
			}
			else{
				$('#tprice1').html('<span style="color:'+ color_bs + ';">'+tP+'</span>');
				$('#tvol1').html('<span style="color:'+ color_bs + ';">'+tV1+'</span>');
			}
			tV = arrV_Temp1[1].v;
			tV1 = tV.toLocaleString();
			tP = arrV_Temp1[1].p;
			if(tP > s_threhold){				
				$('#tprice2').html('<span style="color:'+ color_up + ';">'+tP+'</span>');
				$('#tvol2').html('<span style="color:'+ color_up + ';">'+tV1+'</span>');
			}
			else if (tP < s_threhold){
				$('#tprice2').html('<span style="color:'+ color_down + ';">'+tP+'</span>');
				$('#tvol2').html('<span style="color:'+ color_down + ';">'+tV1+'</span>');
			}
			else{
				$('#tprice2').html('<span style="color:'+ color_bs + ';">'+tP+'</span>');
				$('#tvol2').html('<span style="color:'+ color_bs + ';">'+tV1+'</span>');
			}
		}
		else if(tLength >= 3){
			tV = arrV_Temp1[arrV_Temp1.length-1].v;
			var tV1 = tV.toLocaleString();	
			tP = arrV_Temp1[tLength-1].p;			
			if(tP > s_threhold){				
				$('#tprice1').html('<span style="color:'+ color_up + ';">'+tP+'</span>');
				$('#tvol1').html('<span style="color:'+ color_up + ';">'+tV1+'</span>');
			}
			else if (tP < s_threhold){
				$('#tprice1').html('<span style="color:'+ color_down + ';">'+tP+'</span>');
				$('#tvol1').html('<span style="color:'+ color_down + ';">'+tV1+'</span>');
			}
			else{
				$('#tprice1').html('<span style="color:'+ color_bs + ';">'+tP+'</span>');
				$('#tvol1').html('<span style="color:'+ color_bs + ';">'+tV1+'</span>');
			}
			
			tV = arrV_Temp1[tLength-2].v;
			tV1 = tV.toLocaleString();	
			tP = arrV_Temp1[tLength-2].p;
			if(tP > s_threhold){				
				$('#tprice2').html('<span style="color:'+ color_up + ';">'+tP+'</span>');
				$('#tvol2').html('<span style="color:'+ color_up + ';">'+tV1+'</span>');
			}
			else if (tP < s_threhold){
				$('#tprice2').html('<span style="color:'+ color_down + ';">'+tP+'</span>');
				$('#tvol2').html('<span style="color:'+ color_down + ';">'+tV1+'</span>');
			}
			else{
				$('#tprice2').html('<span style="color:'+ color_bs + ';">'+tP+'</span>');
				$('#tvol2').html('<span style="color:'+ color_bs + ';">'+tV1+'</span>');
			}
			
			tV = arrV_Temp1[tLength-3].v;
			tV1 = tV.toLocaleString();
			tP = arrV_Temp1[tLength-3].p;		
			if(tP > s_threhold){				
				$('#tprice3').html('<span style="color:'+ color_up + ';">'+tP+'</span>');
				$('#tvol3').html('<span style="color:'+ color_up + ';">'+tV1+'</span>');
			}
			else if (tP < s_threhold){
				$('#tprice3').html('<span style="color:'+ color_down + ';">'+tP+'</span>');
				$('#tvol3').html('<span style="color:'+ color_down + ';">'+tV1+'</span>');
			}
			else{
				$('#tprice3').html('<span style="color:'+ color_bs + ';">'+tP+'</span>');
				$('#tvol3').html('<span style="color:'+ color_bs + ';">'+tV1+'</span>');
			}			
		}		
	}
}
function LS_extractParam(name) {
	var pattern = new RegExp("[?&]" + name + "=[^&]*");
	var result = pattern.exec(location.search);
	if (result && result[0]) {
	  var prefLen = name.length + 2;
	  return unescape(result[0].substring(prefLen));
	} else {
	  return null;
	}
}
function initChart(itemName){
	if(stockChart != null && stockChart.isActive()){		
		lsClient.unsubscribe(stockChart);
	}
	var detailsSchema = ["CODE","BASIC_PRICE","CEILING_PRICE","FLOOR_PRICE","MATCH_PRICE","CHANGE","MATCH_QTTY","TOTAL_TRADED_QTTY","AVERAGE_PRICE","HIGHEST_PRICE","LOWEST_PRICE","BUY_FOREIGN_QTTY","SELL_FOREIGN_QTTY"];
	
	var stockData = new StaticGrid("chart",true);
	stockData.setNodeTypes(["div","span"]);
	stockData.setAutoCleanBehavior(true,false);
	stockData.addListener({onVisualUpdate:onStockChartChange});
	
	var dataAdapter;
	if(HOSE_Stocks.indexOf(itemName) != -1){
		dataAdapter = "HOSE";
	}
	else
		if(HNX_Stocks.indexOf(itemName) != -1 || UPC_Stocks.indexOf(itemName) != -1){
			dataAdapter = "HNX";
		}
	stockChart = new Subscription("MERGE",itemName,stockData.extractFieldList());
    stockChart.setDataAdapter(dataAdapter);
    stockChart.setRequestedSnapshot("yes");
    stockChart.addListener(stockData);    
    lsClient.subscribe(stockChart);
}
function onStockChartChange(key, info, domNode){
	if (info == null) {
          return;
        }
		
	info.setHotTime(1400);
	info.setAttribute("#006688",null,"backgroundColor");
	
	var ref = info.getCellValue("BASIC_PRICE");
	var ceil = info.getCellValue("CEILING_PRICE");
	var floor = info.getCellValue("FLOOR_PRICE");
	if(ref == null||ceil == null||floor == null)
		return;
	
	ref = parseFloat(ref);
	ceil = parseFloat(ceil);
	floor = parseFloat(floor);
	
	if(ref == "0"){
		info.setCellValue("BASIC_PRICE","");
		ref = (ceil + floor) / 2;
	}
	
	var coldColor;
	var updateRelatedFields = false;
	//Check MATCH_PRICE
	var matchPrice = info.getChangedFieldValue("MATCH_PRICE");
	if(matchPrice == null){
		var prevPrice = info.getCellValue("MATCH_PRICE");
		if(prevPrice == null){
			coldColor = color_up;
		}
		else{
			coldColor = getColor(prevPrice, ref, ceil,floor);
		}
	}
	else{
		coldColor = getColor(matchPrice, ref, ceil,floor);
		info.setCellAttribute("MATCH_PRICE",hotUpdate,coldColor,"color");
		updateRelatedFields = true;//Due to matched price has been changed, then update other related fields color.
	}
	
	//MATCH_QTTY
	var matchQtty = info.getChangedFieldValue("MATCH_QTTY");
	if(matchQtty  != null){
		info.setCellAttribute("MATCH_QTTY",null,coldColor,"color");
	}
	else{
		if(updateRelatedFields){
			var prevMatchQtty = info.getCellValue("MATCH_QTTY");
			if(prevMatchQtty != null){
				info.setCellValue("MATCH_QTTY",prevMatchQtty);
				info.setCellAttribute("MATCH_QTTY",null,coldColor,"color");
			}
		}
	}
		
	//CHANGE
	var change = info.getChangedFieldValue("CHANGE");
	if(change != null){
		if(change != "0" && change.charAt(0) != '-'){
			info.setCellValue("CHANGE","+"+change);
		}
		info.setCellAttribute("CHANGE",hotUpdate,coldColor,"color");
	}
	else{
		if(updateRelatedFields){
			var prevChange = info.getCellValue("CHANGE");
			if(prevChange != null){
				info.setCellValue("CHANGE",prevChange);
				info.setCellAttribute("CHANGE",hotUpdate,coldColor,"color");
			}
		}
	}
	
	//CODE
	/*if(updateRelatedFields){
		var code = info.getCellValue("CODE");
		if(code != null){
			info.setCellValue("CODE",code);
			info.setCellAttribute("CODE",null,coldColor,"color");
		}
	}*/
	
	
	
	//HIGHEST_PRICE
	var highestPrice = info.getChangedFieldValue("HIGHEST_PRICE");
	if(highestPrice != null){
		coldColor = getColor(highestPrice, ref, ceil,floor);
		info.setCellAttribute("HIGHEST_PRICE",null,coldColor,"color");
	}
	
	//LOWEST_PRICE
	var lowestPrice = info.getChangedFieldValue("LOWEST_PRICE");
	if(lowestPrice != null){
		coldColor = getColor(lowestPrice, ref, ceil,floor);
		info.setCellAttribute("LOWEST_PRICE",null,coldColor,"color");
	}
	
	//AVERAGE_PRICE
	var averagePrice = info.getChangedFieldValue("AVERAGE_PRICE");
	if(averagePrice != null){
		coldColor = getColor(averagePrice, ref, ceil,floor);
		info.setCellAttribute("AVERAGE_PRICE",null,coldColor,"color");
	}
	
}
function showColorData(dPrice, dFloor, dCeill, dBasic){
	var vStr ='';	
	if(dPrice == dFloor){
		vStr ='<span style="color:'+ color_fl + ';">'+dPrice.toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 2})+'</span>';
	}
	else if(dPrice == dBasic){
		vStr ='<span style="color:'+ color_bs + ';">'+dPrice.toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 2})+'</span>';
	}
	else if(dPrice == dCeill){
		vStr ='<span style="color:'+ color_ce + ';">'+dPrice.toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 2})+'</span>';
	}
	else if(dPrice > dBasic){
		vStr ='<span style="color:'+ color_up + ';">'+dPrice.toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 2})+'</span>';
	}
	else{
		vStr ='<span style="color:'+ color_down + ';">'+dPrice.toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 2})+'</span>';
	}
	return vStr;
}