var HOSE_Stocks =[],HNX_Stocks = [],DER_Stocks = [],UPC_Stocks = [],CW_Stocks = [],HOSE_CW = [],stocklist_vn=[],VN30_Stocks=[],HN30_Stocks=[],DefaultPortfolio_Stocks=[],TopTrader_S=[];
var TopTrader_H = ["ACB","BCC","HUT","LAS","MBS","NTP","PVB","PVC","PVI","PVS","SHB","SHS","TNG","VCG","VGC"];
document.addEventListener('DOMContentLoaded',function(){
	var sPathStock = "http://10.64.154.112/infos-api/api/marketInfo/GetAllStock";
		$.ajax({
			url: sPathStock,
			type: 'GET',			
			timeout: time_out,
			cache: false
		}).done(function(data){
		$.each(data,function(index,value){
			if(index=="HNX_Stocks" && value!=null){
				$.each(value,function(idx,val){
					HNX_Stocks.push(val.stock);
				})
			}else if(index=="HOSE_Stocks"&& value!=null){
			$.each(value,function(idx,val){
				HOSE_Stocks.push(val.stock);
			})
			}else if(index=="DER_Stocks"&& value!=null){
				$.each(value,function(idx,val){
					DER_Stocks.push(val.stock);
				})
			}else if(index=="UPC_Stocks"&& value!=null){
				$.each(value,function(idx,val){
					UPC_Stocks.push(val.stock);
				})
			}else if(index=="CW_Stocks"&& value!=null){
				$.each(value,function(idx,val){
					CW_Stocks.push(val.stock);
				})
			}else if(index=="VN30_Stocks"&& value!=null){
				$.each(value,function(idx,val){
					VN30_Stocks.push(val.stock);
				})
			}else if(index=="HN30_Stocks"&& value!=null){
				$.each(value,function(idx,val){
					HN30_Stocks.push(val.stock);
				})
			}
		});
		HOSE_CW = HOSE_Stocks.concat(CW_Stocks)
		});
		var sPathStockInfo = "http://10.64.154.112/infos-api/api/marketInfoCompany/market";
		$.ajax({
			url: sPathStockInfo,
			type: 'GET',			
			timeout: time_out,
			cache: false
		}).done(function(data){
			stocklist_vn = data;stockListDes=stocklist_vn;
		});
})
