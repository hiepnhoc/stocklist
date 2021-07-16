var arr_index = [[],[],[],[],[]];
var arr_vol = [[],[],[],[],[]];
var threhold = [0,0,0,0,0], maxID=[0,0,0,0,0], lastVol=[0,0,0,0,0], minY=[0,0,0,0,0], maxY=[0,0,0,0,0], maxVol=[0,0,0,0,0], minVol=[0,0,0,0,0];
var chartName=[], chartIndex=null, chartVN30=null,chartH=null, chartH30=null,chartU=null, m_itemChartStock=null;
var checkValid = false;
var time_out = 50000;
var Date1="", Date2="";

$(document).ready(function() {
	/*$(".charts-wrapper").on('init', function(){ 
		if($(window).width()  <= 415){
			//m_requestIndexData(0);
			//m_itemChartStock = setInterval(function () {m_requestIndexData(0);}, 3000);
		}
		//alert("ccccc");
	});*/
	$(".charts-wrapper").slick({
    	dots: true,
    	infinite: true,
   		dots: false,
    	slidesToShow: 5,     	 
    	responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 4,
		        asNavFor: true,
		        infinite: true,
		        arrows: true,
		      }
		    },
		    {	
		      breakpoint: 800,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 481,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        infinite: true,
		      }
		    }, 
		    {
		      breakpoint: 415,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    }
		]
  	}); 
	$('.slick-prev').click(function(){	
		if($(window).width()  <= 415){				
			m_getChart();
		}
	});	
	$('.slick-next').on('click', function(e) {
		if($(window).width()  <= 415){
			m_getChart();
		}
	});
	var sPath = "http://10.64.154.112/infos-api/api/marketinfo/0/0/0/0/0"; 	
	Highcharts.setOptions({
		global: {
			useUTC: false
		}
	});	
	
	
	if($(window).width()  > 415){
		initIndexData(sPath);
		setInterval(function () {requestIndexData();}, 30000);	
	}	
	$(window).resize(function() {	
		if(chartIndex != null){
			chartIndex.setSize($("#MNHOSE").width(), $("#MNHOSE").height(), doAnimation = false);
		}
		if(chartVN30 != null){
			chartVN30.setSize($("#VMNN30").width(), $("#VMNN30").height(), doAnimation = false);
		}
		if(chartH != null){
			chartH.setSize($("#MNHNX").width(), $("#MNHNX").height(), doAnimation = false);
		}
		if(chartH30 != null){
			chartH30.setSize($("#MNHNX30").width(), $("#MNHNX30").height(), doAnimation = false);
		}
		if(chartU != null){
			chartU.setSize($("#MNUPCOM").width(), $("#MNUPCOM").height(), doAnimation = false);
		}
		
	});	
});
function IndexByTime(container, iheight, iwidth, imaxY, iminY, ithrehold, iarr_index, iarr_vol, imaxVol, iminVol, iChart, chartName){		
		var chart= new Highcharts.Chart({
			chart: {				
				renderTo: container,
				reflow: true,
				animation: false,
				backgroundColor: {
					linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
					stops: [
						[0, 'rgb(0, 0, 0)'],
						[1, 'rgb(62, 51, 0)']
					]
				},
				borderColor:'#505050',
				borderWidth: 0,
				marginTop: 0,
				marginLeft: 0,
				marginRight: 0,
				marginBottom: 21,				
				height: iheight,
				width: iwidth				
				/*events: {
					load: function () {
						if(container === "MNHOSE"){
							setInterval(function () {
								requestIndexData();
							}, 30000);
						}
					}
				}*/
			},
			title: {
				text: ""
			},			
			xAxis: {				
				type: "datetime",
				tickInterval: 3600 * 1000,	
				gridLineWidth: 0.5,
				gridLineColor: '#474747',
				tickWidth: 0,
				lineWidth: 1,
				//min: (new Date()).setHours(9, 0, 0, 0),				
				max: (new Date()).setHours(15, 0, 0, 0),				
				labels: {
					format: '{value:%H}h',
					style: {
						color: "#8F8F8F",
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
							fontSize: "9px",
							fontFamily: "Tahoma",
							opacity:0.4
						},
						text: 'Tạm nghỉ',
						rotation: 0,
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
					max: imaxY,
					min: iminY,
					tickPositioner: function(min, max) {						
						var interval = Math.round((max-min)/3);						
						var dataMin=this.dataMin;
						var dataMax=this.dataMax;          
						var positions = [dataMin];
						var defaultPositions = this.getLinearTickPositions(interval, dataMin, max);						
						for (var i = 0; i < defaultPositions.length; i++) {
							if (defaultPositions[i] > dataMin && defaultPositions[i] < dataMax) {
								positions.push(defaultPositions[i]);
							}
						}
						positions.push(dataMax);
						return positions;
					},				  
					plotLines: [{
						value: ithrehold,
						color: '#FFCC00',
						dashStyle: 'shortdot',
						width: 1,
						zIndex: 10,
						label: {
							//text: ithrehold,
							text: '',
							align: 'center',
							style: {
							color: '#ffffff',
							fontSize: "9px",
							fontFamily: "Tahoma"
							}
						}
					}],
					title: {
						text: ""
					},
					labels: {
						enabled:false						
					},					
					gridLineWidth: 0
				},
				{	
					max: imaxVol,
					min: iminVol,
					tickPositioner: function(min, max) {						
						var interval = Math.round((max-min)/3);						
						var dataMin=this.dataMin;
						var dataMax=this.dataMax;          
						var positions = [dataMin];
						var defaultPositions = this.getLinearTickPositions(interval, dataMin, max);						
						for (var i = 0; i < defaultPositions.length; i++) {
							if (defaultPositions[i] > dataMin && defaultPositions[i] < dataMax) {
								positions.push(defaultPositions[i]);
							}
						}
						positions.push(dataMax);
						return positions;
					},	
					title: {
						text: "",
						style: {
							color: "#ffffff",
							fontSize: "9px",
							fontFamily: "Tahoma"
						}
					},								
					labels: {
						enabled:false
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
					if(this.x != changeIntToTime('130000').getTime()){
						var e = "<b>" + Highcharts.dateFormat("%H:%M:%S", this.x) + "</b><br />";					
						$.each(this.points, function(r, i) {
						if (this.series.name == chartName) {
								e += this.series.name + ": <b>" + Highcharts.numberFormat (this.y,2) + "</b><br />";
							} else {
								e += this.series.name + ": <b>" +Highcharts.numberFormat (this.y *1000, 0, '.', ',') + "</b><br />";
							}
						});												
						return e
					}
					else{
						return false;
					}
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
				name: chartName,
				type: "line",				
				data: iarr_index,
				threshold: ithrehold,
				negativeColor: '#ec0000',
				color: '#00d700',
				tooltip: {
					valueDecimals: 2
				},	
				marker: {
					radius: 1
				},
				turboThreshold: 1000000,
				lineWidth: 1,								
				index: 0,
				yAxis: 0,
				zIndex:20
			},
			{
				name: "Volume",
				type: "column",				
				data: iarr_vol,							
				color: "#60a0ff",
				borderColor: "#60a0ff",	
				maxPointWidth: 1,				
				turboThreshold: 1000000,				
				index: 1,
				yAxis: 1,
				zIndex:15
			}]
			
		})
		return chart;
	}	

function requestIndexData() {		
	if(arr_index[0].length==0 || arr_index[1].length==0){
		var strUrl1 = "http://10.64.154.112/infos-api/api/marketinfo/0/0/0/0/0";
		initIndexData(strUrl1);
	}
	else{		
		var d = new Date();
		if((d < changeIntToTime('150000')) && (d > changeIntToTime('80000')) && checkValid){
			var strUrl = "http://10.64.154.112/infos-api/api/marketinfo"; 
			for(var i=0; i<maxID.length; i++){
				strUrl += "/" + maxID[i];
				
			}
			$.ajax({
				url: strUrl,
				type: 'GET',			
				timeout: time_out,
				cache: false
			})
			.done (function(data, textStatus, jqXHR) {
					Date2 = data.z;	
					if(Date2===Date1){
						processDataIndex2(data.vnindex,"vnindex", chartIndex);		
						processDataIndex2(data.vn30,"vn30", chartVN30);	
						processDataIndex2(data.hnx,"hnx", chartH);	
						processDataIndex2(data.hnx30,"hnx30", chartH30);	
						processDataIndex2(data.upcom,"upcom", chartU);							
					}
					else{
						checkValid = false;
						for(var i=0; i<arr_index.length; i++){
							arr_index[i].length = 0;
							arr_vol[i].length = 0;
							threhold[i] = 0;
							maxID[i]=0;
							lastVol[i]=0;
							minY[i]=0;
							maxY[i]=0;
							maxVol[i]=0;
							minVol[i]=0;
						}
					}
			})
			.fail (function(jqXHR, textStatus, errorThrown) {
				//console.log( "Ajax request failed... " + textStatus + ' - ' + jqXHR.responseText + "..." );
			})
		}
	}
}
function initIndexData(sPath){
	checkValid = false;
	var initIndex = $.ajax({
		url: sPath,
		type: 'GET',
		timeout: time_out,
		cache: false
	});
	
	initIndex.done (function(data) {
		Date1 = data.z;		
		Object.keys(data).forEach(function(k) {
			if(k === "vnindex") {
				processDataIndex(data.vnindex,k);
				chartIndex = IndexByTime("MNHOSE", $("#MNHOSE").height(), $("#MNHOSE").width(), maxY[0], minY[0], threhold[0], arr_index[0], arr_vol[0],maxVol[0],minVol[0],chartIndex, "VN Index");
			}				
			if(k === "vn30") {
				processDataIndex(data.vn30,k);
				chartVN30 = IndexByTime("VMNN30", $("#VMNN30").height(), $("#VMNN30").width(), maxY[1], minY[1], threhold[1], arr_index[1], arr_vol[1],maxVol[1],minVol[1],chartVN30, "VN30 Index");					
			}
			if(k === "hnx") {
				processDataIndex(data.hnx,k);
				chartH = IndexByTime("MNHNX", $("#MNHNX").height(), $("#MNHNX").width(), maxY[2], minY[2], threhold[2], arr_index[2], arr_vol[2],maxVol[2],minVol[2],chartH, "HNX Index");					
			}
			if(k === "hnx30") {
				processDataIndex(data.hnx30,k);
				chartH30 = IndexByTime("MNHNX30", $("#MNHNX30").height(), $("#MNHNX30").width(), maxY[3], minY[3], threhold[3], arr_index[3], arr_vol[3],maxVol[3],minVol[3],chartH30, "HNX30 Index");					
			}
			if(k === "upcom") {
				processDataIndex(data.upcom,k);
				chartU = IndexByTime("MNUPCOM", $("#MNUPCOM").height(), $("#MNUPCOM").width(), maxY[4], minY[4], threhold[4], arr_index[4], arr_vol[4],maxVol[4],minVol[4],chartU, "UPCOM Index");
			}
		});	
	});	
	initIndex.always (function(jqXHROrData, textStatus, jqXHROrErrorThrown) {
		  if (textStatus == "success"){
			checkValid = true;
		  }		  
	});
}
function rsetIndexIndexData(sPath){	
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

function processDataIndex(data,name){
	var index = -1;
	if(name === "vnindex"){
		index = 0;
	}
	else if(name === "vn30"){
		index = 1;
	}
	else if(name === "hnx"){
		index = 2;
	}
	else if(name === "hnx30"){
		index = 3;
	}
	else{
		index = 4;
	}
	if (data != null && data.length > 0) {
		var k = 0, e = 0, i = 0, sum =0, tg = null;			
		for (i = 0; i < data.length; i++) {
			var id = parseFloat(data[i].i);
			var vol = parseFloat(data[i].v);
			var price = parseFloat(data[i].p)/100;
			var time1 = data[i].t;
			var time = changeIntToTime(time1).getTime();			
			var j = _.findIndex(arr_index[index], function(o) { return o.x==time; });	
			if(vol > 0){				
				var vol2 = (vol - lastVol[index])/1000;
				if(vol2 > 0){	
					if(j==-1){
						arr_index[index].push({
							x: time,
							y: price
						});
						arr_vol[index].push({
							x: time,
							y: vol2						
						});	
					}	
					else{
						arr_index[index][j].y = price;
						arr_vol[index][j].y += vol2;
					}
				}
				else{
					if(time==changeIntToTime('130000').getTime() && (j==-1)){
						arr_index[index].push({
							x: time,
							y: price
						});
						arr_vol[index].push({
							x: time,
							y: vol2						
						});	
					}
				}
			}
			
			if(i>0){
				var id2 = parseFloat(data[i-1].i);
				if(id > id2){
					maxID[index] = id;
				}
				if(price > maxY[index]){
					maxY[index] = price;
				}
				if(price < minY[index]){
					minY[index] = price;
				}
			}
			else{
				maxID[index] = id;
				maxY[index] = price;
				minY[index] = price;
				threhold[index] = parseFloat(data[0].p)/100;
			}
			lastVol[index] = vol;						
		}
		maxVol[index]= Math.max.apply(Math,arr_vol[index].map(function(o){return o.y;}));
		minVol[index] = Math.min.apply(Math,arr_vol[index].map(function(o){return o.y;}));
	}
}
function processDataIndex2(data, name, ichartName){	
	var index = -1;
	if(name === "vnindex"){
		index = 0;
	}
	else if(name === "vn30"){
		index = 1;
	}
	else if(name === "hnx"){
		index = 2;
	}
	else if(name === "hnx30"){
		index = 3;
	}
	else{
		index = 4;
	}
	if(data != null && data.length > 0){
		for (i = 0; i < data.length; i++) {			
			var id = parseFloat(data[i].i);			
			var vol = parseFloat(data[i].v);
			var price = parseFloat(data[i].p)/100;
			var time1 = data[i].t;			
			var time = changeIntToTime(time1).getTime();
			var vol2 = (vol - lastVol[index])/1000;			
			var j = _.findIndex(arr_index[index], function(o) { return o.x==time; });	
			if(j == -1){				
				if(vol2 > 0){
					arr_index[index].push({
						x: time,
						y: price
					});
					arr_vol[index].push({
						x: time,
						y: vol2
					});	
				}
				else{
					if(time==changeIntToTime('130000').getTime() && (j==-1)){
						arr_index[index].push({
							x: time,
							y: price
						});
						arr_vol[index].push({
							x: time,
							y: vol2						
						});	
					}
				}
			} else{
				if(vol2 > 0){
					arr_index[index][j].y = price;
					arr_vol[index][j].y += vol2;
				}
			}
			if(id > maxID[index]){
				maxID[index] = id;
			}
			if(price > maxY[index]){
				maxY[index]=price;
			}
			if(price < minY[index]){
				minY[index] = price;
			}
			lastVol[index] = vol;
		}
		maxVol[index]= Math.max.apply(Math,arr_vol[index].map(function(o){return o.y;}));
		minVol[index] = Math.min.apply(Math,arr_vol[index].map(function(o){return o.y;}));	
		ichartName.yAxis[0].update({max: maxY[index],min: minY[index]},false);
		ichartName.yAxis[1].update({max: maxVol[index],min: minVol[index]},false);
		ichartName.series[0].update({data: arr_index[index]},false);
		ichartName.series[1].update({data: arr_vol[index]},false);
		ichartName.redraw(false);
	}
}
function m_requestIndexData(id) {		
	var indexName="";
	var indexType="";
	if(id==0){
		indexName = "VNINDEX";
		indexType="vnindex";		
	}
	else if(id==1){
		indexName = "VN30";
		indexType="vn30";
	}
	else if(id==2){
		indexName = "HNX";
		indexType="hnx";
	}
	else if(id==3){
		indexName = "HNX30";
		indexType="hnx30";
	}
	else{
		indexName = "UPCOM";
		indexType="upcom";
	}
	if(arr_index[id].length==0){
		var strUrl1 = "http://10.64.154.112/infos-api/api/marketinfo/"+indexName+"/0/";
		m_initIndexData(id);
	}
	else{		
		var d = new Date();
		if((d < changeIntToTime('160000')) && (d > changeIntToTime('80000')) && checkValid){
			var strUrl = "http://10.64.154.112/infos-api/api/marketinfo/"+indexName+"/"+ maxID[id]+"/"; 			
			$.ajax({
				url: strUrl,
				type: 'GET',			
				timeout: time_out,
				cache: false
			})
			.done (function(data, textStatus, jqXHR) {
					Date2 = data.z;	
					if(Date2===Date1){
						if(id==0){
							processDataIndex2(data.vnindex,"vnindex", chartIndex);			
						}
						else if(id==1){
							processDataIndex2(data.vn30,"vn30", chartVN30);	
						}
						else if(id==2){
							processDataIndex2(data.hnx,"hnx", chartH);	
						}
						else if(id==3){
							processDataIndex2(data.hnx30,"hnx30", chartH30);	
						}
						else{
							processDataIndex2(data.upcom,"upcom", chartU);	
						}
					}
					else{						
						checkValid = false;
						for(var i=0; i<arr_index.length; i++){
							arr_index[i].length = 0;
							arr_vol[i].length = 0;
							threhold[i] = 0;
							maxID[i]=0;
							lastVol[i]=0;
							minY[i]=0;
							maxY[i]=0;
							maxVol[i]=0;
							minVol[i]=0;
						}
					}
			})
		}
	}
}

function m_initIndexData(id){		
	checkValid = false;	
	var vUrl = "http://10.64.154.112/infos-api/api/marketinfo/";
	var indexName="";
	var indexType="";
	if(id==0){
		indexName = "VNINDEX";
		indexType="vnindex";		
	}
	else if(id==1){
		indexName = "VN30";
		indexType="vn30";
	}
	else if(id==2){
		indexName = "HNX";
		indexType="hnx";
	}
	else if(id==3){
		indexName = "HNX30";
		indexType="hnx30";
	}
	else{
		indexName = "UPCOM";
		indexType="upcom";
	}
	vUrl = "http://10.64.154.112/infos-api/api/marketinfo/"+indexName+"/0/";
	var initIndex = $.ajax({
		url: vUrl,
		type: 'GET',
		timeout: time_out,
		cache: false
	});	
	initIndex.done (function(data) {
		Date1 = data.z;	
		if(id==0){
			processDataIndex(data.vnindex,indexType);
			chartIndex = IndexByTime("MNHOSE", $("#MNHOSE").height(), $("#MNHOSE").width(), maxY[0], minY[0], threhold[0], arr_index[0], arr_vol[0],maxVol[0],minVol[0],chartIndex, "VN Index");		
		}
		else if(id==1){
			processDataIndex(data.vn30,indexType);
			chartVN30 = IndexByTime("VMNN30", $("#VMNN30").height(), $("#VMNN30").width(), maxY[1], minY[1], threhold[1], arr_index[1], arr_vol[1],maxVol[1],minVol[1],chartVN30, "VN30 Index");	
		}
		else if(id==2){
			processDataIndex(data.hnx,indexType);
			chartH = IndexByTime("MNHNX", $("#MNHNX").height(), $("#MNHNX").width(), maxY[2], minY[2], threhold[2], arr_index[2], arr_vol[2],maxVol[2],minVol[2],chartH, "HNX Index");	
		}
		else if(id==3){
			processDataIndex(data.hnx30,indexType);
			chartH30 = IndexByTime("MNHNX30", $("#MNHNX30").height(), $("#MNHNX30").width(), maxY[3], minY[3], threhold[3], arr_index[3], arr_vol[3],maxVol[3],minVol[3],chartH30, "HNX30 Index");
		}
		else{
			processDataIndex(data.upcom,indexType);
			chartU = IndexByTime("MNUPCOM", $("#MNUPCOM").height(), $("#MNUPCOM").width(), maxY[4], minY[4], threhold[4], arr_index[4], arr_vol[4],maxVol[4],minVol[4],chartU, "UPCOM Index");
		}
	});	
	initIndex.always (function(jqXHROrData, textStatus, jqXHROrErrorThrown) {
		  if (textStatus == "success"){
			checkValid = true;
		  }		  
	});
}
function m_getChart(){
	var currSlide = $('.charts-wrapper').slick('slickCurrentSlide');			
	if(currSlide >=0 && currSlide <=4){
		if(m_itemChartStock!=null){
			clearInterval(m_itemChartStock);
		}
		if(arr_index[currSlide].length==0){					
			m_initIndexData(currSlide);					
			m_itemChartStock = setInterval(function () {m_requestIndexData(currSlide);}, 3000);
		}
		else{								
			m_itemChartStock = setInterval(function () {m_requestIndexData(currSlide);}, 3000);
		}			
	}
}
