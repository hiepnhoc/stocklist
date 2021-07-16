$(document).ready(function () {   
	

	$('.button-menu').click(function () {
		$('.navigation-menu').toggleClass("show");
		$('.menu-overlay').toggleClass("visible");
	});
	$('.menu-overlay').click(function () {
		$('.menu-overlay').removeClass("visible");
		$('.navigation-menu').removeClass("show");
	});
	$('#select-switch-priceboard1').click(function () {
		$('.switch-bg').css({
			"left": "0px"
		});
	});
	$('#select-switch-priceboard2').click(function () {
		$('.switch-bg').css({
			"left": "50%"
		});
	});
	var a = 0;
	$('.navigation-menu .menu-item').click(function () {
		var btnId = $(this).data('id');
		jQuery('.sub-menu[data-id=' + btnId + ']').toggle();
		if (a == 0) {
			$(this).find('.icon-right').removeClass('fa-angle-down').addClass('fa-angle-up');
			$(this).addClass('highlight');
			a = 1;
		} else if (a == 1) {
			$(this).find('.icon-right').removeClass('fa-angle-up').addClass('fa-angle-down');
			$(this).removeClass('highlight');
			a = 0;
		}
	});  


	$('#VN30').click(function () { 
		subscribeStocks("VN30");  
		$('.table-proad1').show();
		$('.table-proad3').hide();		
		$('.tableagree').hide(); 
		$('#concurrent').parent().removeClass("active"); 
		$('.catelogybranch').parent().removeClass('active');
		$(this).parent().addClass('active');   
		disconnect_rq();	 
	});  

	$('#myPortfolio').click(function () { 
		subscribeStocks("myPortfolio");  
		$('.table-proad1').show();   
		$('.table-proad3').hide();
		$('.tableagree').hide();  

		var changename = $(this).html(); 
		$('.catelogybranch').parent().removeClass('active');
		$('.catelogyPofolio span').html(changename);  
		disconnect_rq();  
	}); 
	
	$('.catelogybranch li').click(function () {  
		$('.primary li').removeClass('active');  
		$(this).parent().parent().parent().addClass('active');  
	});

	$('#myPortfolio1').click(function () { 
		subscribeStocks("myPortfolio1");  
		$('.table-proad1').show();
		$('.table-proad3').hide();		
		$('.tableagree').hide(); 
		var changename = $(this).html(); 
		$('.catelogybranch').parent().removeClass('active');
		$('.catelogyPofolio span').html(changename);  
		disconnect_rq();  
	});  
	$('#myPortfolio2').click(function () { 
		subscribeStocks("myPortfolio2");  
		$('.table-proad1').show(); 
		$('.table-proad3').show();
		$('.tableagree').hide(); 
		var changename = $(this).html(); 
		$('.catelogybranch').parent().removeClass('active');
		$('.catelogyPofolio span').html(changename);  
		disconnect_rq();  
	});  
	
	$('#TopTrader').click(function () {
		subscribeStocks("TopTrader"); 
		$('.table-proad1').show();
		$('.table-proad3').hide();
		$('.tableagree').hide();
		$('#concurrent').parent().removeClass("active");
		setTimeout(function(){    
   		$('.testfzname').trigger('click');  
   		}, 2000); 
		$(this).parent().addClass('active'); 
		$('.catelogybranch').parent().removeClass('active');
		disconnect_rq();
	});

	$('#HOSE').click(function () {
		subscribeStocks("HOSE");
		$('.table-proad1').show();
		$('.table-proad3').hide();
		$('.tableagree').hide();
		$('#concurrent').parent().removeClass("active");
		setTimeout(function(){    
   		$('.testfzname').trigger('click');  
   		}, 2000); 
		$(this).parent().addClass('active');  
		$('.catelogybranch').parent().removeClass('active');
		disconnect_rq();
	});

	$('#HNX').click(function () {
		subscribeStocks("HNX");
		$('.table-proad1').show();
		$('.table-proad3').hide();
		$('.tableagree').hide();
		$('#concurrent').parent().removeClass("active");
		setTimeout(function(){    
   		$('.testfzname').trigger('click');  
   		}, 2000); 
		$(this).parent().addClass('active');  
		$('.catelogybranch').parent().removeClass('active');
		disconnect_rq();
	});	

	$('#HNX30').click(function () {
		subscribeStocks("HNX30");
		$('.table-proad1').show();
		$('.table-proad3').hide();
		$('.tableagree').hide();
		$('#concurrent').parent().removeClass("active");
		setTimeout(function(){    
   		$('.testfzname').trigger('click');  
   		}, 2000); 
		$(this).parent().addClass('active');   
		$('.catelogybranch').parent().removeClass('active');
		disconnect_rq();
	});

	$('#UPCoM').click(function () {
		subscribeStocks("UPCoM");
		$('.table-proad1').show();
		$('.table-proad3').hide();
		$('.tableagree').hide();
		$('#concurrent').parent().removeClass("active");
		setTimeout(function(){    
   		$('.testfzname').trigger('click');  
   		}, 2000); 
		$(this).parent().addClass('active');  
		$('.catelogybranch').parent().removeClass('active');
		disconnect_rq();

	});

	$('#Derivatives').click(function () {
		subscribeStocks("Derivatives");
		$('.table-proad2').show();
		$('.table-proad3').hide();
		$('.tableagree').hide();
		$('#concurrent').parent().removeClass("active");
		$(this).parent().addClass('active');
		$('.catelogybranch').parent().removeClass('active');
		disconnect_rq();
	}); 
	$('#cw_stocks').click(function () {
		subscribeStocks("cw_stocks");
		$('.table-proad3').show();
		$('.table-proad1').hide();		
		$('.tableagree').hide();
		$('#concurrent').parent().removeClass("active");
		setTimeout(function(){    
   		$('.testfzname').trigger('click');  
   		}, 2000); 
		$(this).parent().addClass('active');  
		$('.catelogybranch').parent().removeClass('active');
		disconnect_rq();

	}); 
	
	$('#modern').click(function () {
		styleValue = 1; 
		$("body").removeClass('theme-white');  
		setCookie("stylesvalue", "1", 30);  
		//$('.priceboard-info').load(document.URL +  '.priceboard-info');
		document.location.reload(true)
	});
	$('#whitesnow').click(function () {
		styleValue = 0; 
		$("body").addClass('theme-white'); 
		setCookie("stylesvalue", "0", 30);  
		//$('.priceboard-info').load(document.URL +  '.priceboard-info');
		document.location.reload(true)
	});	 



 	function offsetheight(){
 		if ($('#slider-chart').height() <= 110 ){
        	$('.navigation-menu').css({"top" : "184"});
        } else if ($('#slider-chart').height() <= 5){
        	$('.navigation-menu').css({"top" : "75"});
        } else if ($('#slider-chart').height() > 120){
        	$('.navigation-menu').css({"top" : "237"});
        }
 	}
 	
 	$('.button-menu').click(function () {  
	    if ($('#slider-chart').height() < 108 && $('#slider-chart').height() > 50 ){
        	$('.navigation-menu').css({"top" : "130px"}); 
        } else if ($('#slider-chart').height() < 115 && $('#slider-chart').height() > 109  ){
        	$('.navigation-menu').css({"top" : "184px"}); 
        } else if ($('#slider-chart').height() < 5){
        	$('.navigation-menu').css({"top" : "75px"}); 
        } else if ($('#slider-chart').height() > 120){
        	$('.navigation-menu').css({"top" : "238px"}); 
        } 
    });   

	var options = {
		timeNotation: '24h',
		am_pm: true,
		foreground: '#bfd630',
	}
	$('.jclock').jclock(options);
	var options5 = {
		format: '%d/%m/%y'
	}
	$('.date').jclock(options5);  

	$(".detail-info-char" ).on( "mouseenter", function() {    
		$('.bg-char').draggable({ disabled : true});   
		$('.bg-char').css({ "cursor" : "auto"});  
	})
	.on("mouseleave", function() {  
		$('.bg-char').draggable({ disabled : false});   
		$('.bg-char').css({ "cursor" : "move"});   
	});  
	 
	$('#tab1').click(function () { 
		$('#box-4').css({
			"position" : "absolute",
			"z-index" : "1", 
		});
		$('#box-2').css({
			"position" : "relative", 
			"z-index" : "9999" 
		}); 
		$('#tab2').removeClass("activetab");
		$(this).addClass("activetab"); 
	}); 

	$('#tab2').click(function () { 
		$('#box-2').css({
			"position" : "absolute", 
			"z-index" : "1" 
		});
		$('#box-4').css({
			"position" : "relative", 
			"z-index" : "9999" 
		}); 
		$('#tab1').removeClass("activetab");
		$(this).addClass("activetab");
	});    
 	
  	$('.tootipck').tooltip({ 
  		track: true,
  		position: { my: "left center", at: "left bottom+25	" } 
  	});	 

  	$('.date-tblResultHeader h4 a').click(function () {
  		$('.date-tblResultHeader h4').removeClass();
    	$(this).parent().addClass('acvite-daychart');
  	});   

  	$('.showallclose i').click(function() { 
  		if(a == 0) { 
  			$('.tb_a tbody tr .icon-close .fa-times').css({"opacity" : "1", "z-index": "5"});
  			a = 1;
  		} else if (a == 1) { 
  			$('.tb_a tbody tr .icon-close .fa-times').css({"opacity" : "0", "z-index": "-1"});
  			a = 0;
  		}   
  	});  

  	$('.iconexplain .iconquestion').hide()
  	$('.iconconvert-total').click(function () {
  		if(total_vol_clk == 0) {
  			$('.div-table-main').addClass("changegt");
  			$('.div-table-main').removeClass("changekl");
  			$('.iconexplain .iconquestion').show() 
  			total_vol_clk = 1;
  		} else if ( total_vol_clk ==1) {
  			$('.div-table-main').addClass("changekl");
  			$('.div-table-main').removeClass("changegt");
  			$('.iconexplain .iconquestion').hide();
  			total_vol_clk = 0
  		}
  	}); 

  	$('.iconconvertchange-icchane').click(function () {
  		if(percentage_clk == 0) {  
  			$('.div-table-main').addClass("test1");
  			$('.div-table-main').removeClass("test");
  			return percentage_clk = 1;
  		} else if (percentage_clk == 1) { 
  			$('.div-table-main').addClass("test");
  			$('.div-table-main').removeClass("test1");
  			return percentage_clk = 0;
  		} 
  	});

  	$('.tableagree').hide();
  	$('#concurrent').click(function () {
  		$('.nav-title-stock ul li').removeClass("active");
  		$(this).parent().addClass("active");
  		$('.div-table-main').hide();
  		$('.tableagree').show();
		load_PutData("HOSE");
		pre_industry_id_p="";
  	});

  	$('#agreeHSX').click(function () {
  		$('.titlecatalogagree a').removeClass("active");
  		$(this).addClass("active");
		load_PutData("HOSE");		
  	});

  	$('#agreeHNX').click(function () {
  		$('.titlecatalogagree a').removeClass("active");
  		$(this).addClass("active"); 
		load_PutData("HNX");	
  	});

  	$('#agreeUPOM').click(function () {
  		$('.titlecatalogagree a').removeClass("active");
  		$(this).addClass("active"); 
		load_PutData("UPCOM");
  	});

  	$('.iconquestion').tooltip({ position: { my: "left center", at: "left bottom+20" }});	  
	$('.showrownameck').hide(); 
	$('.inforgt').hide(); 

	var getshowbetck = getCookie("showbetck");	 
	if( getshowbetck == undefined) {
		$('.priceboard-info').removeClass("showdlnshowrownameck");
		$('.showrownameck').hide(); 
		$('#clickshowcolnameck i').removeClass("fa-angle-double-right");
		$('#clickshowcolnameck i').addClass("fa-angle-double-left");
		setTimeout(function(){    
   			$('.testfzname').trigger('click');  
   		}, 2000); 
   		var clickshowcolnameck = 0,clickshowcolnameckCW = 0; 
	} else if (getshowbetck == 0) {
		$('.priceboard-info').removeClass("showdlnshowrownameck");
		$('.showrownameck').hide(); 
		$('#clickshowcolnameck i').removeClass("fa-angle-double-right");
		$('#clickshowcolnameck i').addClass("fa-angle-double-left"); 
		setTimeout(function(){    
   			$('.testfzname').trigger('click');  
   		}, 2000); 
   		var clickshowcolnameck = 0; 
	} else if (getshowbetck == 1) {
		$('.priceboard-info').addClass("showdlnshowrownameck");
		$('.showrownameck').show(); 
		$('#clickshowcolnameck i').removeClass("fa-angle-double-left");
		$('#clickshowcolnameck i').addClass("fa-angle-double-right");
		setTimeout(function(){    
   			$('.testfzname').trigger('click');  
   		}, 2000); 
   		var clickshowcolnameck = 1,clickshowcolnameckCW = 1;
	} 	 
	
	$('#clickshowcolnameck').click(function() { 
		if (clickshowcolnameck == 0){
			$('.priceboard-info').addClass("showdlnshowrownameck");
			$('.showrownameck').show(); 
			$('#clickshowcolnameck i').removeClass("fa-angle-double-left");
			$('#clickshowcolnameck i').addClass("fa-angle-double-right");
			setTimeout(function(){    
       			$('.testfzname').trigger('click');  
       		}, 1000); 
			clickshowcolnameck = 1;
			setCookie("showbetck", "1" , 30);
		} else if (clickshowcolnameck == 1) {
			$('.priceboard-info').removeClass("showdlnshowrownameck");
			$('.showrownameck').hide(); 
			$('#clickshowcolnameck i').removeClass("fa-angle-double-right");
			$('#clickshowcolnameck i').addClass("fa-angle-double-left");
			setTimeout(function(){    
       			$('.testfzname').trigger('click');  
       		}, 1000); 
			clickshowcolnameck = 0;
			setCookie("showbetck", "0" , 30);
		} 
	}); 
	
	$('#clickshowcolnameckCW').click(function() { 
		if (clickshowcolnameck == 0){
			$('.priceboard-info').addClass("showdlnshowrownameck");
			$('.showrownameck').show(); 
			$('#clickshowcolnameck i').removeClass("fa-angle-double-left");
			$('#clickshowcolnameck i').addClass("fa-angle-double-right");
			setTimeout(function(){    
       			$('.testfzname').trigger('click');  
       		}, 1000); 
			clickshowcolnameck = 1;
			setCookie("showbetck", "1" , 30);
		} else if (clickshowcolnameck == 1) {
			$('.priceboard-info').removeClass("showdlnshowrownameck");
			$('.showrownameck').hide(); 
			$('#clickshowcolnameck i').removeClass("fa-angle-double-right");
			$('#clickshowcolnameck i').addClass("fa-angle-double-left");
			setTimeout(function(){    
       			$('.testfzname').trigger('click');  
       		}, 1000); 
			clickshowcolnameck = 0;
			setCookie("showbetck", "0" , 30);
		} 
	}); 
	
	

	var priceinfo1 = 0; 
	$('.iconconverinforkl').click(function() {
		if (priceinfo1 == 0){
			$('.inforkl').hide(); 
			$('.inforgt').show();  
			priceinfo1 = 1;
		} else if (priceinfo1 == 1) {
			$('.inforgt').hide(); 
			$('.inforkl').show();  
			priceinfo1 = 0;
		} 
	});  

	/*---- UPDATE 13/04/2018  */
	$('.child-Pofolio > li > p').click(function () {
		$('.child-Pofolio li ').removeClass("active-child-Pofolio");
		$(this).parent().addClass("active-child-Pofolio");
	});   

	$('.child-Pofolio > li > .clickrename').click(function () {	  
		$(this).parent().addClass("show-input"); 
		$(this).parent().addClass("savenamePor");    
	});   

	$('.child-Pofolio > li > .savenamePor').click(function () {
		$(this).parent().removeClass("show-input"); 
		$(this).parent().removeClass("savenamePor");  

		if( $(this).parent().find("input").val() != '' && $(this).parent().find("input").val() != undefined ) { 
			var changename = $(this).parent().find("input").val(); 
			$(this).parent().find("p").html(changename);  
		} else { 
			var textp = $(this).parent().find("p").html(); 
			$(this).parent().find("p").html("Danh Mục");  
			$(this).parent().find("input").val(textp); 
		}   
	});

	var body = $(window).height();    

	var getHideChart = getCookie("setHideChart");
	if (getHideChart == undefined) {
		getHideChart = 1;
	}

	if(getHideChart == 1) {  
		$('.chart-img').addClass("show-nav"); 
	} else if(getHideChart == 0) {  
		$('.chart-img').removeClass("show-nav");
		$('.hidechart').addClass("activeicon"); 
		var heigtable = body - ($('#navigation').height() + $('#top-navigation').height() + $('.div-table-head').height()); 
		$('.div-table-body').height(heigtable);  
	}

	$('.hidechart').click(function() {  
		if($(this).hasClass("activeicon")){
			var setHideChart = setCookie("setHideChart", "1" , 30);  
		} else {
			var setHideChart = setCookie("setHideChart", "0" , 30); 
			
		}
		setTimeout(function () {  
			chart_resize();
		}, 300); 
		$(this).toggleClass("activeicon");
		$('.chart-img').toggleClass("show-nav"); 
		$('.chart-info').toggleClass("bdinfo");
		var heigtable = body - ($('#navigation').height() + $('#top-navigation').height() + $('.div-table-head').height());  
		$('.div-table-body').height(heigtable);  
	});   
 

	var getInforChart = getCookie("setInforChart");
	if (getInforChart == undefined) {
		getInforChart = 1;
	}

	if(getHideChart == 1 && getInforChart == 0) {
		$('.chart-img').addClass("bdimg");
	} else if (getHideChart == 0 && getInforChart == 1){
		$('.chart-info').addClass("bdinfo");
	} else if (getHideChart == 1 && getInforChart == 1) {
		$('.chart-img').removeClass("bdimg");
		$('.chart-info').removeClass("bdinfo");
	} else if (getHideChart == 0 && getInforChart == 0) {
		$('.chart-img').addClass("bdimg");
		$('.chart-info').addClass("bdinfo");
	}

	if(getInforChart == 1) {
		$('.chart-info').addClass("show-nav"); 
	} else if(getInforChart == 0) { 
		$('.chart-info').removeClass("show-nav");
		$('.hideinforchart').addClass("activeicon"); 
		var heigtable = body - ($('#navigation').height() + $('#top-navigation').height() + $('.div-table-head').height()); 
		$('.div-table-body').height(heigtable);
	}

	$('.hideinforchart').click(function () {  
		if($(this).hasClass("activeicon")){
			var setInforChart = setCookie("setInforChart", "1" , 30);  
		} else {
			var setInforChart = setCookie("setInforChart", "0" , 30);  
		}

		setTimeout(function () {  
			chart_resize();
		}, 300); 
		$(this).toggleClass("activeicon");
		$('.chart-info').toggleClass("show-nav");   
		$('.chart-img').toggleClass("bdimg"); 
		var heigtable = body - ($('#navigation').height() + $('#top-navigation').height() + $('.div-table-head').height()); 
		$('.div-table-body').height(heigtable); 
		
	});   

	/*------ ICON MYPORFOLIO */
	$(".showcatelogyPor" ).on( "mouseenter", function() {    
	 	$('.showcatelogyPor .iconshowmypor').removeClass("fa-caret-down");
	 	$('.showcatelogyPor .iconshowmypor').addClass("fa-caret-up"); 
	}) .on("mouseleave", function() {   
		$('.showcatelogyPor .iconshowmypor').removeClass("fa-caret-up");
	 	$('.showcatelogyPor .iconshowmypor').addClass("fa-caret-down");
	});  

	$(".iconshowmypor" ).on( "mouseenter", function() {     
	 	$('.child-Pofolio').css({"display" : "block"});
	}) .on("mouseleave", function() {
		$('.child-Pofolio').css({"display" : "none"})
	});  

	$(".child-Pofolio" ).on( "mouseenter", function() {
	 	$('.child-Pofolio').css({"display" : "block"})
	 }) .on("mouseleave", function() {     
	 	$('.child-Pofolio').css({"display" : "none"})
	});  

	$('.hovercatelogybranch .catelogybranch').on( "mouseenter", function() {     
	 	$('.child-branch').css({"display" : "block"})  
	 	$('.iconbranch').removeClass("fa-caret-down");
	 	$('.iconbranch').addClass("fa-caret-up"); 
	}) .on("mouseleave", function() {
		$('.child-branch').css({"display" : "none"});
		$('.iconbranch').removeClass("fa-caret-up");
	 	$('.iconbranch').addClass("fa-caret-down");
	});  

	$('.child-branch' ).on( "mouseenter", function() {
	 	$('.child-branch').css({"display" : "block"})
	 	$('.iconbranch').removeClass("fa-caret-down");
	 	$('.iconbranch').addClass("fa-caret-up"); 
	 }) .on("mouseleave", function() {     
	 	$('.child-branch').css({"display" : "none"});
	 	$('.iconbranch').removeClass("fa-caret-up");
	 	$('.iconbranch').addClass("fa-caret-down");
	});  

	$('.catelogybranch .child-branch > li').click(function () {
		$(this).parent().find("li").removeClass("active-child-branch");
		$(this).addClass("active-child-branch"); 
		if ( $(this).attr("id") == "branch1"){
			subscribeStocks("branch1");  
			$('.table-proad1').show(); 
			$('.table-proad3').hide();
			$('.tableagree').hide();  
			disconnect_rq();
		}
	});

	/*$('.show_search-mobile i').click(function () { 
		$('.nav-title-stock .search-box ').animate({ width: '125px'}, 200 );
		$(this).parent().css({"display" : "none"}); 
	});*/ 


});  


window.onresize = onloadmb;
window.onload = onloadmb;
function onloadmb() {   

	var body = $(window).height(); 
	$('.div-table-body').height(body - ($('#navigation').height() + $('#top-navigation').height() + $('.div-table-head').height())); 
	
	var body1 = $('body').height();  
	var infotable = body1 - ($('#navigation').height() + $('#top-navigation').height() + $('.div-table-head').height()); 
	var heighttable = $('.priceboard-info').height() + 26;    

	$('.bgtableagreeinfo ').height(body1 - ($('.titlecatalogagree').height() + $('#navigation').height() + $('#top-navigation').height() + 150) );

	if(heighttable > infotable){ 
		$('.div-table-head').css({"width" : "calc(100% - 10px)"});
		$('.div-table-body').css({"width" : "calc(100% - 10px)"});  
	} else if(heighttable < infotable) {
		$('.div-table-head').css({"width" : "100%"});
		$('.div-table-body').css({"width" : "100%"}); 
	} 

	$('.bg-tblResultHeader').mCustomScrollbar({
		scrollButtons:{enable:true},
		theme:"light-thick",
		scrollbarPosition:"outside" 
	});

	$('.bgtableagreeinfo').mCustomScrollbar({
		scrollButtons:{enable:true},
		theme:"light-thick",
		scrollbarPosition:"outside",
		scrollInertia: 0,
		autoDraggerLength:true,
		mouseWheelPixels: 180, 
	});  
	if($(window).width() < 1023){
		$('.div-table-main').click(function () {
			$('.child-Pofolio').css({"display" : "none"}); 
			$('.search-box3 ').removeClass("tranfromSearch-Box"); 
		});
		$('.charts-wrapper').click(function () {
			$('.child-Pofolio').css({"display" : "none"}); 
		});    
		
	}


	if($(window).width() > 751){
		var heigthtable = body - ($('#navigation').height() + $('#top-navigation').height() + $('.div-table-head').height());   

		$('.div-table-body').mCustomScrollbar({
			scrollButtons:{enable:true},
			theme:"light-thick",
			scrollbarPosition:"outside",
			scrollInertia: 0,
			autoDraggerLength:true,
			mouseWheelPixels: 180, 
		}); 

	}
    if($(window).width() > 642){ 
        document.getElementById("col4970buy").colSpan = "6";  
        document.getElementById("col4970sale").colSpan = "6";

        document.getElementById("col4970buy1").colSpan = "6";  
        document.getElementById("col4970sale1").colSpan = "6";
		
		document.getElementById("col4970buy2").colSpan = "6";  
        document.getElementById("col4970sale2").colSpan = "6";
		document.getElementById("col4970kl2").colSpan = "3";
    }
    if($(window).width() < 641){ 
        document.getElementById("col4970buy").colSpan = "4";   
        document.getElementById("col4970sale").colSpan = "4";  
        $("#tab1 span").text("KL theo thời gian"); 
        $("#tab2 span").text("KL theo bước giá"); 

        document.getElementById("col4970buy1").colSpan = "4";   
        document.getElementById("col4970sale1").colSpan = "4";

		document.getElementById("col4970buy2").colSpan = "4";   
        document.getElementById("col4970sale2").colSpan = "4";
		document.getElementById("col4970kl2").colSpan = "3";
    }  
    if($(window).width() < 501){ 
        document.getElementById("col4970buy").colSpan = "2";   
        document.getElementById("col4970sale").colSpan = "2";  

        document.getElementById("col4970buy1").colSpan = "2";   
        document.getElementById("col4970sale1").colSpan = "2";

		document.getElementById("col4970buy2").colSpan = "2";   
        document.getElementById("col4970sale2").colSpan = "2";
		document.getElementById("col4970kl2").colSpan = "3";
    }  

    if($(window).width() > 1023){
    	document.getElementById("col4970kl1").colSpan = "4";   
		
		document.getElementById("col4970kl2").colSpan = "3";
    } 

    if($(window).width() < 1023){
    	document.getElementById("col4970kl1").colSpan = "3";  

    } 

    if($(window).width() < 1023){ 
		$('.show_search-mobile i').click(function () { 
			$('.search-box3').addClass("tranfromSearch-Box");
			//$(this).parent().css({"display" : "none"}); 
		});
	} 
	 
    if($(window).width() < 325){
    	$("#Derivatives").text("PS"); 
   	}

    if($(window).width() < 751){
    	$('.div-table-body').mCustomScrollbar('destroy'); 
    	setTimeout(function () { 	
 			$('.div-table-body').height(body - ($('#navigation').height() + $('#top-navigation').height() + $('.div-table-head').height()));
 			
 		}, 1000);  
    	   

	}   

	/*if($(window).width() > 801){
		
	}*/

	if($(window).width() < 801){
		$("#Derivatives").text("PS"); 
		$("#cw_stocks").text("CW"); 
		$('.chart-img').hide();  
		$('.hidechart_mb').addClass("activeicon"); 

		var heigtable = body - ($('#navigation').height() + $('#top-navigation').height() + $('.div-table-head').height()); 
		var heigtable_tt = body - ($('#navigation').height() + $('#top-navigation').height() + $('.titlecatalogagree').height());  
        
		var hidechart_mb = 0; 

		$('#concurrent').click(function() {
			$('.bgtableagreeinfo ').height(heigtable_tt - 180 ); 
		});
		
		$('.hidechart_mb').click(function() {
			if(m_itemChartStock!=null){
				clearInterval(m_itemChartStock);
			}
			if(hidechart_mb == 0){
				m_getChart();
				$('.chart-img').show();  
				$(this).removeClass("activeicon"); 
				$('.div-table-body').height(heigtable - 20); 
				hidechart_mb = 1 ;
			} else if (hidechart_mb == 1) {
				$('.chart-img').hide();  
				$(this).addClass("activeicon"); 
				$('.div-table-body').height(heigtable); 
				hidechart_mb = 0;
			}

			if (hideinforchart_mb == 0 && hidechart_mb == 1) {
				$('.bgtableagreeinfo ').height(heigtable_tt - 280);
			} else if (hideinforchart_mb == 1 && hidechart_mb == 0) {
				$('.bgtableagreeinfo ').height(heigtable_tt - 130);
			} else if (hideinforchart_mb == 1 && hidechart_mb == 1) {
				$('.bgtableagreeinfo ').height(heigtable_tt - 230);
			} else if (hideinforchart_mb == 0 && hidechart_mb == 0) {
				$('.bgtableagreeinfo ').height(heigtable_tt - 180);
			}

			if(hideinforchart_mb == 1 && hidechart_mb == 0) {
				$('.item-chart-img').css({"border": "0px solid rgba(115, 115, 115, 0.48)"});
				$('.slick-prev').css({"display": "none" });
				$('.slick-next').css({"display": "none" });
			} else {
				$('.item-chart-img').css({"border": "1px solid rgba(115, 115, 115, 0.48)"});
				$('.slick-prev').css({"display": "block" });
				$('.slick-next').css({"display": "block" });
			} 

			chart_resize();
		});

		var hideinforchart_mb = 0; 
		$('.hideinforchart_mb').click(function() {
			if(hideinforchart_mb == 0){
				$('.chart-info').hide(); 
				$(this).addClass("activeicon");    
				hideinforchart_mb = 1 ; 
			} else if (hideinforchart_mb == 1) { 
				$('.chart-info').show();   
				$(this).removeClass("activeicon");  
				hideinforchart_mb = 0;
			}

			if (hideinforchart_mb == 0 && hidechart_mb == 1) {
				$('.bgtableagreeinfo ').height(heigtable_tt - 280);
			} else if (hideinforchart_mb == 1 && hidechart_mb == 0) {
				$('.bgtableagreeinfo ').height(heigtable_tt - 130);
			} else if (hideinforchart_mb == 1 && hidechart_mb == 1) {
				$('.bgtableagreeinfo ').height(heigtable_tt - 230);
			} else if (hideinforchart_mb == 0 && hidechart_mb == 0) {
				$('.bgtableagreeinfo ').height(heigtable_tt - 180);
			}

			if(hideinforchart_mb == 1 && hidechart_mb == 0) {
				$('.item-chart-img').css({"border": "0px solid rgba(115, 115, 115, 0.48)"});
				$('.slick-prev').css({"display": "none" });
				$('.slick-next').css({"display": "none" });
			} else {
				$('.item-chart-img').css({"border": "1px solid rgba(115, 115, 115, 0.48)"});
				$('.slick-prev').css({"display": "block" });
				$('.slick-next').css({"display": "block" });
			} 

		}); 

		$("#tab1 span").text("Khớp lệnh theo thời gian"); 
        $("#tab2 span").text("Khớp lệnh theo bước giá");     
	}  

	/*------ UPDATE  27/04/2018 --*/
	var getstylesvalue = getCookie("stylesvalue");  
	if (getstylesvalue == undefined) {
		$("body").removeClass("theme-white"); 
		$('.ColorDefaule').css({ "background": "#0902ff", "color" : "#fff"}); 
		var styleValue = 1;
	} else if (getstylesvalue == 0) {
		$("body").addClass("theme-white"); 
		$('.ColorDefaule').css({ "background": "#c9db12", "color" : "#183d9e"}); 
		var styleValue = 0;
	} else if (getstylesvalue == 1) {
		$("body").removeClass("theme-white"); 
		$('.ColorDefaule').css({ "background": "#0902ff", "color" : "#fff"}); 
		var styleValue = 1;
	} 
	  
	$('#changecolormb' ).click(function () { 
		if (getstylesvalue == undefined ||  getstylesvalue == null) {
			setCookie("stylesvalue", "1", 30);   
		} else if(getstylesvalue == 1){  
			setCookie("stylesvalue", "0", 30);  
		} else if (getstylesvalue == 0){ 
			setCookie("stylesvalue", "1", 30);    
		}
		document.location.reload(true)
		
	});
 
}
 

function getStockName(name){   
	var stockName = _.find(stockListDes, function(o) { return o.value == name; });  
	
	if(stockName != null){ 
		$('.tootipck').attr("title", stockName.label); 
		$('.tootipck').tooltip({ position: { my: "left center", at: "left bottom+25	" } });	 

		if($(window).width() < 751){
			$('.tootipck').tooltip('destroy');
			$('.tootipck').tooltip('disable'); 
		}
	}
	else{ 
	}  
	
}  
 
function clickadd() {   
	$('.addstoke').attr("title", "Thêm vào Danh mục"); 
	$('.addstoke').on('click', function () {
     	$(this).tooltip('enable').tooltip('open');
   	}); 

	$('.addstoke').tooltip({          
	 	disabled: true,
	 	close: function( event, ui ) { $(this).tooltip('disable'); }
	});  	
}  

function chart_resize(){
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
}
 
/*-----  COOKIE  ----*/

$(function(){     

	/*----- UPDATE EADIT PORFOLIO*/
	$('.savenamePor1').click(function () {  
		var editcatporfolio1 = $('.editcatporfolio1').val();  
		setCookie("editcatporfolio1", editcatporfolio1, 30); 
	});  

	$('.editcatporfolio1').keypress(function(event){
	    var keycode = (event.keyCode ? event.keyCode : event.which);
	    if(keycode == '13'){  
	    	$(this).parent().parent().parent().find("li").removeClass("active-child-Pofolio");
	    	$(this).parent().addClass("active-child-Pofolio");
	    	$('.savenamePor1').trigger('click');
	    	$(this).parent().find("p").click();
	    } 
	    event.stopPropagation();
	});

	$('.editcatporfolio2').keypress(function(event){
	    var keycode = (event.keyCode ? event.keyCode : event.which);
	    if(keycode == '13'){  
	    	$(this).parent().parent().parent().find("li").removeClass("active-child-Pofolio");
	    	$(this).parent().addClass("active-child-Pofolio");
	    	$('.savenamePor2').trigger('click');
	    	$(this).parent().find("p").click();
	    } 
	    event.stopPropagation();
	});

	$('.savenamePor2').click(function () {  
		var editcatporfolio2 = $('.editcatporfolio2').val(); 
		setCookie("editcatporfolio2", editcatporfolio2, 30); 
	});

	$('#myPortfolio').click(function( ) { 
		var getdatadtipor1  = getCookie("editcatporfolio1");  
		$(this).html(getdatadtipor1);  
		$(this).parent().parent().parent().find("span").html(getdatadtipor1);
		if(getdatadtipor1 != null) {
 			$(this).html(getdatadtipor1);
		} else {
			$(this).html("Danh Mục 1");
			$(this).parent().parent().parent().find("span").html("Danh Mục 1");
		}
		
	});

	$('#myPortfolio1').click(function( ) {  
		var getdatadtipor2  = getCookie("editcatporfolio2");    
		$(this).html(getdatadtipor2);  
		$(this).parent().parent().parent().find("span").html(getdatadtipor2);
 
		if(getdatadtipor2 != null) {
 			$(this).html(getdatadtipor2); 
		} else {
			$(this).html("Danh Mục 2");
			$(this).parent().parent().parent().find("span").html("Danh Mục 2");
		} 
	});
	$('#myPortfolio2').click(function( ) {  
		var getdatadtipor3  = getCookie("editcatporfolio3");    
		$(this).html(getdatadtipor3);  
		$(this).parent().parent().parent().find("span").html(getdatadtipor3);
 
		if(getdatadtipor3 != null) {
 			$(this).html(getdatadtipor3); 
		} else {
			$(this).html("Chứng quyền");
			$(this).parent().parent().parent().find("span").html("Chứng quyền");
		} 
	});
	
	/*----- UPDATE SAVE COOKIE LANGUAGE*/
	$('.lang-vi').click(function( ) {
		var testlang =  setCookie("testlang", "1", 30); 
	});

	$('.lang-en').click(function( ) {
		var testlang =  setCookie("testlang", "2", 30); 
	});

	var gettestlang = getCookie("testlang");

	if (gettestlang == undefined ) {
		$('.lang-vi').trigger('click');
	} else if (gettestlang == 1 ) { 
		$('.lang-vi').trigger('click'); 
	} else if (gettestlang == 2) { 
		$('.lang-en').trigger('click'); 
	}

	var textPor1 = getCookie("editcatporfolio1"); 
	var textPor2 = getCookie("editcatporfolio2"); 

	if (textPor1 != null  ) {  
		$('#myPortfolio').html(textPor1); 
	}

	if (textPor2 != null) { 
		$('#myPortfolio1').html(textPor2); 
	}

	/*----- UPDATE 16/04/2018 --*/  

	$('.savestorage1').click(function( ) {
		var savestorage =  setCookie("savestorage", "1", 30); 
	});

	$('.savestorage2').click(function( ) {
		var savestorage =  setCookie("savestorage", "2", 30); 
	});
	$('.savestorage3').click(function( ) {
		var savestorage =  setCookie("savestorage", "3", 30); 
	});

	$('.showcatelogyPor').click(function() {
		$(this).parent().children().removeClass("active");
		$(this).addClass("active");
		if (getCookie("savestorage") == 1 ) { 
			subscribeStocks("myPortfolio");   
			$('.table-proad1').show();
			$('.table-proad3').hide();			
			$('.tableagree').hide();  	
 
			disconnect_rq();  
		} else if (getCookie("savestorage") == 2) { 
			subscribeStocks("myPortfolio1");   
			$('.table-proad1').show();
			$('.table-proad3').hide();
			$('.tableagree').hide();  

			disconnect_rq();  
		}
		 else if (getCookie("savestorage") == 3) { 
			subscribeStocks("myPortfolio2");   
			$('.table-proad1').show(); 
			$('.table-proad3').hide();
			$('.tableagree').hide();  

			disconnect_rq();  
		}
	});

}); 

/*----- UPDATE 19/04/2018 -*/
/*=========================== 
	SEARCH ALL TEXT IN PAGE
=============================*/

var TRange=null;

function findString (str) {
	 if (parseInt(navigator.appVersion)<4) return;
	 var strFound;
	 if (window.find) {

	  // CODE FOR BROWSERS THAT SUPPORT window.find

	  strFound=self.find(str);
	  if (!strFound) {
	   strFound=self.find(str,0,1);
	   while (self.find(str,0,1)) continue;
	  }
	 }
	 else if (navigator.appName.indexOf("Microsoft")!=-1) {

	  // EXPLORER-SPECIFIC CODE

	  if (TRange!=null) {
	   TRange.collapse(false);
	   strFound=TRange.findText(str);
	   if (strFound) TRange.select();
	  }
	  if (TRange==null || strFound==0) {
	   TRange=self.document.body.createTextRange();
	   strFound=TRange.findText(str);
	   if (strFound) TRange.select();
	  }
	 }
	 else if (navigator.appName=="Opera") {
	  alert ("Opera browsers not supported, sorry...")
	  return;
	 }
	 if (!strFound) alert ("String '"+str+"' not found!")
	 return;
}


/******************************************************************************
   NAME:    LOCATION
   PURPOSE: To specify x and y of object on screen
******************************************************************************/
var oldTime ;
var oldSymbol ;

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

/******************************************************************************
   NAME:    SEARCH
   PURPOSE: Search stock code form key board
******************************************************************************/
function KeyCode(evt, text){
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
    var tableT = document.getElementById("ScrollHiglhigt");
    var rowsN = tableT.rows;
    var sysd = new Date();
    var curTime = sysd.getTime();
    if(curTime -  oldTime < 1500) {
        oldSymbol += keychar; 
    }
    else oldSymbol = keychar;
    oldTime=curTime;
    var isScroll = true;     

    for(var i=2; i < rowsN.length ;i++){//2 row of header
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
                    ele.className = "highlight";
                    //var clientH = document.body.clientHeight; 
                    var clientH = $('#ScrollHiglhigt').height();  
                    if(posy < clientH /2)
                        $('.div-table-body').mCustomScrollbar("scrollTo", 0);
                    else
                        if(posy >= clientH /2)	
                            //window.scrollTo(0,posy - clientH /2); 
                        	var offsettop = posy ; 
                        	$('.div-table-body').mCustomScrollbar("scrollTo", offsettop);
                            //alert(posy); 
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
 