 $(function() {
  var t = { 
    "Giao dịch": { 
      en: "Trading" 
    },
    "Mở tài khoản": { 
          en: "Open account" 
    },
    "Bảng giá cũ": { 
          en: "Old price board" 
    },
    "Hướng dẫn": { 
          en: "Guide" 
    },
    "Danh mục": { 
          en: "Watchlist" 
    },
  "Bảng giá": { 
          en: "Price board" 
    },
    "Màu nền": { 
          en: "Color" 
    }, 
    "Phái sinh": { 
          en: "Derivatives" 
    },
	"Chứng quyền": { 
          en: "Covered Warrant" 
    },
    "Mã CK": { 
          en: "Symbol" 
    },
	"Mã HĐ": { 
          en: "Contract" 
    },
	"#Cơ sở": { 
          en: "#Asset" 
    },
    "Trần": { 
          en: "Ceil" 
    },
    "Sàn": { 
          en: "Floor" 
    },
    "TC": { 
          en: "Ref" 
    },
    "Tổng": { 
          en: "Total" 
    },
    "KL": { 
          en: "Vol" 
    },
  
    "Bên mua": { 
          en: "Bid" 
    },
    "Khớp lệnh": { 
          en: "Match" 
    },
    "Bên bán": { 
          en: "Ask" 
    },
    "Bình": { 
          en: "Avg" 
    },
    "quân": { 
          en: " " 
	},
    "Cao": { 
          en: "High" 
    },
    "nhất": { 
          en: " " 
    },
    "Thấp": { 
          en: "Low" 
    },
    "nhất": { 
          en: " " 
    },
    "NN": { 
          en: "Foreign" 
    },
    "mua": { 
          en: "Bought" 
    },
    "bán": { 
          en: "Sold" 
    },
    "Mua": { 
          en: "Bought" 
    },
    "Bán": { 
          en: "Sold" 
    },
    "Giá": { 
          en: "Price" 
    },
  
    "Màu nền tối": { 
          en: "Color black" 
    },
    "Màu nền sáng": { 
          en: "Color White" 
    },
  "Đơn vị giá": { 
          en: "Price unit" 
    },
  "Đơn vị KL": { 
          en: "Vol unit" 
    },
  "Khớp lệnh theo thời gian": { 
          en: "Command prompt by time" 
    },
  "Thời gian": { 
          en: "Time" 
    },

  "Khối lượng": { 
        en: "Volume" 
  }, 
  "Khớp lệnh theo thời gian": { 
        en: "Oders matching by time" 
  }, 
  "Khớp lệnh theo bước giá": { 
        en: "Oders matching by ticksize" 
  },  
  "Tổng KL": { 
        en: "Total volume" 
  },
"Top 3 khối lượng": { 
        en: "Top 3 volume" 
  },  
  
  "Ngày": { 
        en: "Date" 
  },  
  "Nhật ký giao dịch hôm nay": { 
        en: "Trade log today" 
  },  
  "Nhật ký giao dịch T - 1": { 
        en: "Trade log T - 1" 
  },  
  "Nhật ký giao dịch T - 2": { 
        en: "Trade log T - 2" 
  },  
  "Nhật ký giao dịch T - 3": { 
        en: "Trade log T - 3" 
  },  
  "Nhật ký giao dịch T - 4": { 
        en: "Trade log T - 4" 
  },  
  "Nhật ký giao dịch T - 5": { 
        en: "Trade log T - 5" 
  },  
  "tỷ": { 
        en: "bil" 
  },
  "KL: ": { 
        en: "Vol: " 
  },
  "GT: ": { 
        en: "Val: " 
  },
  "GT": { 
        en: "Val" 
  },
  "Cổ phiếu.": { 
          en: "Shares." 
    }, 
  "Tổng Giá trị": {
    en: "Total value"
  }, 
	"Mở": { 
          en: "Open" 
    },
    "cửa": { 
          en: " " 
    },
	"Đáo hạn": { 
          en: "Expiry" 
    },
	"KL mở": { 
          en: "Open" 
    },
	"Room NN": { 
          en: "Current Room" 
    },
	"(OI)": { 
          en: "interest" 
    },
  "Thỏa thuận": {
    en: "Put Through"
  },
  "Chào mua": { 
          en: "Bid" 
    },
  "Khớp lệnh": { 
          en: "Match" 
    },
  "Chào bán": { 
          en: "Ask" 
    },
  "Giá trị": { 
          en: "Value" 
    }, 
  "Tổng giá trị giao dịch thoả thuận: ": {
    en: "Total value of put through trading: "
  },
  "Tổng khối lượng giao dịch thoả thuận: ": {
    en: "Total value of put through trading: "
  }, 
	"BQ": {
    en: "Avg"
  }, 
  "Mua ": {
    en: "Buy "
  },
  "Bán ": {
    en: "Sell "
  },
  "Khối Ngoại": { 
          en: "Foreign" 
  },
  /*---- DANH MỤC NGÀNH---*/
  "Ngành": { 
    en: "Industries" 
  },
  "Bảo hiểm": { 
    en: "Insurance" 
  },
  "Sản phẩm và dịch vụ công nghiệp": { 
    en: "Product & Service" 
  },
  "Tài nguyên": { 
    en: "Basic Resources" 
  },
  "Thực phẩm đồ uống": { 
    en: "Food & Beverage" 
  },
  "Tiện ích công cộng": { 
    en: "Public Utilities" 
  },
  "Phương tiện truyền thông": { 
    en: "Media" 
  },
  "Xây dựng và vật liệu xây dựng": { 
    en: "Construction & Materials" 
  },
  "Vật dụng cá nhân và gia đình": { 
    en: "Personal & Household Goods" 
  },
  "Ô tô &amp; linh kiện phụ tùng": { 
    en: "Automobiles & Parts" 
  },
  "Y tế": { 
    en: "Health Care" 
  },
  "Viễn thông": { 
    en: "Telecommunications" 
  },
  "Bất động sản": { 
    en: "Real Estate" 
  },
  "Công nghệ": { 
    en: "Technology" 
  },
  "Dầu khí": { 
    en: "Oil & Gas" 
  },
  "Dịch vụ tài chính": { 
    en: "Financial Services" 
  },
  "Du lịch và giải trí": { 
    en: "Travel & Leisure" 
  },
  "Hóa chất": { 
    en: "Chemicals" 
  },
  "Ngân hàng": { 
    en: "Banks" 
  },
  "Bán lẻ và Phân phối": { 
    en: "Retail & Distribution" 
  },
};
  var _t = $('body').translate({lang: "vi", t: t});
  var str = _t.g("translate");
  /* console.log(str); */


  $(".lang-btn").click(function(ev) {
    var lang = $(this).attr("data-value");
    _t.lang(lang);

   /*  console.log(lang); */
    ev.preventDefault();
  }); 
  
  

  $(".lang-vi img").click(function() {
      $('#search-stoke').attr("placeholder", "Nhập mã CK...");
      $('#search-chart').attr("placeholder", "Nhập mã CK...");
      $(".lang-en img").parent().removeClass("active");
      $(this).parent().addClass("active"); 
	    stockListDes = stocklist_vn;
		siteLanguage = "vi";
		//document.getElementById("addstoke").setAttribute("title", "Thêm vào Danh mục");
		$('.dlb1 .addstoke').attr("title", "Thêm vào Danh mục");
  	  $('#search-stoke').autocomplete({
        lookup: stockListDes,
        onSelect: function (suggestion) {  
          $('#search-stoke').val(suggestion.data);
    		  addStock(suggestion.data); 
        }  
      });

      $('#search-chart').autocomplete({
        lookup: stockListDes,
        onSelect: function (suggestion) {  
          $('#search-chart').val(suggestion.data);
          showStockChart(suggestion.data); 
        }  
      });   
     
  });

  
    $(".lang-en img").click(function() {
      $('#search-stoke').attr("placeholder", "Enter Symbol...");
      $('#search-chart').attr("placeholder", "Enter Symbol...");
      $(".lang-vi img").parent().removeClass("active");
      $(this).parent().addClass("active"); 
	     stockListDes = stocklist_en;
		 siteLanguage = "en";
		 //document.getElementById("addstoke").setAttribute("title", "Add to Watchlist");
		 $('.dlb1 .addstoke').attr("title", "Add to Watchlist");
	    $('#search-stoke').autocomplete({
        lookup: stockListDes,
        onSelect: function (suggestion) {  
          $('#search-stoke').val(suggestion.data);
    		  addStock(suggestion.data); 
        }  
      });

      $('#search-chart').autocomplete({
      lookup: stockListDes,
      onSelect: function (suggestion) {  
        $('#search-chart').val(suggestion.data);
        showStockChart(suggestion.data); 
      }  
    });   

    });


});
