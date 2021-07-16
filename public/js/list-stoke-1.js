 $(function() {
     var $win = $(window);
     var $box = $(".search-box");
     $win.on("click.Bst", function(event) {
         if (
             $box.has(event.target).length == 0 //checks if descendants of $box was clicked
             &&
             !$box.is(event.target) //checks if the $box itself was clicked
         ) {
             $('#search-stoke').val("");
         }
     });
 });
$(function() {
     $('.lang-vi').click(function() {
         stockListDes = stocklist_vn;
     });
     $('.lang-en').click(function() {
         stockListDes = stocklist_en;
     });  

    /*$("#search-stoke").on('keyup change', function (){    
       this.value = this.value.toUpperCase();
    }); */
    
     $("#search-stoke").autocomplete({
         minLength: 0,
         source: function(request, response) {
            var filteredArray = $.map(stockListDes, function(item) { 
                 if (item.value.toLowerCase().startsWith(request.term) || item.value.toUpperCase().startsWith(request.term)) { 
                    return item;  
                 } else {
                     return null;
                 }
             });
             response(filteredArray); 
         },
         focus: function(event, ui) {
             $("#search-stoke").val(ui.item.value); 
             setTimeout(function() {
                 $('.testfzname').trigger('click');
             }, 1000);
             return false; 
         },
         select: function(event, ui) {
             $("#search-stoke").val(ui.item.value);
             setTimeout(function() {
                 $('.testfzname').trigger('click');
             }, 1000);
             if($(window).width() < 1024){ 
               $('.search-box3 ').removeClass("tranfromSearch-Box");
               //$('.show_search-mobile').css({"display" : "block"}); 
            }  
            addStock(ui.item.value);  
         }
     });
     $('.button').click(function() {
        var data = $('#search-stoke').val().toUpperCase();   

         var body1 = $('body').height();
         var infotable = body1 - ($('#navigation').height() + $('#top-navigation').height() + $('.div-table-head').height());
         var heighttable = $('.priceboard-info').height() + 26;
         if (heighttable > infotable) {
             $('.div-table-head').css({
                 "width": "calc(100% - 10px)"
             });
             $('.div-table-body').css({
                 "width": "calc(100% - 10px)"
             });
         } else if (heighttable < infotable) {
             $('.div-table-head').css({
                 "width": "100%"
             });
             $('.div-table-body').css({
                 "width": "100%"
             });
         }
         setTimeout(function() {
             $('.testfzname').trigger('click');
         }, 1000); 
            if($(window).width() < 1024){ 
               $('.search-box3 ').removeClass("tranfromSearch-Box");
               //$('.show_search-mobile').css({"display" : "block"}); 
            } 
     });
     $('#search-stoke').change(function() {
         var data = $('#search-stoke').val().toUpperCase();
         addStock(data); 
         $('#search-stoke').val("");
         var body1 = $('body').height();
         var infotable = body1 - ($('#navigation').height() + $('#top-navigation').height() + $('.div-table-head').height());
         var heighttable = $('.priceboard-info').height() + 26;
         if (heighttable > infotable) {
             $('.div-table-head').css({
                 "width": "calc(100% - 10px)"
             });
             $('.div-table-body').css({
                 "width": "calc(100% - 10px)"
             });
         } else if (heighttable < infotable) {
             $('.div-table-head').css({
                 "width": "100%"
             });
             $('.div-table-body').css({
                 "width": "100%"
             });
         }
         setTimeout(function() {
             $('.testfzname').trigger('click');
         }, 1000);
             if($(window).width() < 1024){ 
               $('.search-box3 ').removeClass("tranfromSearch-Box");
               //$('.show_search-mobile').css({"display" : "block"}); 
            } 
     });

    var input = document.getElementById("search-stoke");
    input.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) { 
            $('#ui-id-1').css({"display": "none"})
        }
    });

    var input = document.getElementById("search-chart");
    input.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) { 
            $('#ui-id-1').css({"display": "none"})
        }
    });

    /* $('#search-chart').keyup(function() {
        this.value = this.value.toUpperCase();
     });*/

     $("#search-chart").autocomplete({
         minLength: 0,
         source: function(request, response) {
             var filteredArray = $.map(stockListDes, function(item) {
                  if (item.value.toLowerCase().startsWith(request.term) || item.value.toUpperCase().startsWith(request.term)) { 
                     return item;
                 } else {
                     return null;
                 }
             });
             response(filteredArray);
         },
         focus: function(event, ui) {
             $("#search-chart").val(ui.item.value);
             setTimeout(function() {
                 $('.testfzname').trigger('click');
             }, 1000);
             return false;
         },
         select: function(event, ui) {
             $("#search-chart").val(ui.item.value);
             setTimeout(function() {
                 $('.testfzname').trigger('click');
             }, 1000);
             showStockChart(ui.item.value); 
         }

     });
     $('.buttonchart').click(function() {
         var data = $('#search-chart').val().toUpperCase();
         showStockChart(data);
         var body1 = $('body').height();
         var infotable = body1 - ($('#navigation').height() + $('#top-navigation').height() + $('.div-table-head').height());
         var heighttable = $('.priceboard-info').height() + 26;
         if (heighttable > infotable) {
             $('.div-table-head').css({
                 "width": "calc(100% - 10px)"
             });
             $('.div-table-body').css({
                 "width": "calc(100% - 10px)"
             });
         } else if (heighttable < infotable) {
             $('.div-table-head').css({
                 "width": "100%"
             });
             $('.div-table-body').css({
                 "width": "100%"
             });
         } 
     });
     $('#search-chart').change(function() {
         var data = $('#search-chart').val().toUpperCase();
         showStockChart(data);
         $('#search-chart').val("");
         var body1 = $('body').height();
         var infotable = body1 - ($('#navigation').height() + $('#top-navigation').height() + $('.div-table-head').height());
         var heighttable = $('.priceboard-info').height() + 26;
         if (heighttable > infotable) {
             $('.div-table-head').css({
                 "width": "calc(100% - 10px)"
             });
             $('.div-table-body').css({
                 "width": "calc(100% - 10px)"
             });
         } else if (heighttable < infotable) {
             $('.div-table-head').css({
                 "width": "100%"
             });
             $('.div-table-body').css({
                 "width": "100%"
             });
         }
     });
 });
 