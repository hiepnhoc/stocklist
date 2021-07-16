/**
 * Copyright (c) ACBS
 * Website: http://www.acbs.com.vn
 */
/* $VERSION: 1.9 */
/* Updated: 17 May, 2018*/

var siteLanguage = "vi";//"en"
var styleValue = 1;//default black, 0 is white
var savedCurrentViewID = null;
var ReleaseCompany = "ACBS";
var CK_SavedViewID = "viewID_" + ReleaseCompany;
/*
    viewID = myPortfolio: The stocks collected by customer.
    viewID = VN30: VN30 Stocks
    viewID = HOSE: All HOSE Stocks
    viewID = HNX30: HNX30 Stocks
    viewID = HNX: All HNX Stocks
    viewID = UPCoM: All UPCoM Stocks
    viewID = Derivatives: All Derivatives Stocks
*/

var percentage_clk = 0; //default 0: not clicked; 1: clicked
var total_vol_clk = 0; //default 0: not clicked; 1: clicked
var room_clk = 0; //default 0: not clicked; 1: clicked
/******************************************************************************
   NAME:    COOKIE
   PURPOSE: Set and get cookie
******************************************************************************/
function setCookie(ckName, value, expiredays) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + expiredays);
	document.cookie = ckName + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}

function getCookie(ckName) {
	if (document.cookie.length > 0) {
		c_start = document.cookie.indexOf(ckName + "=");
		if (c_start != -1) {
			c_start = c_start + ckName.length + 1;
			c_end = document.cookie.indexOf(";", c_start);
			if (c_end == -1) c_end = document.cookie.length;
			return unescape(document.cookie.substring(c_start, c_end));
		}
		return null;
	}
	return null;
}

function LoadCookies(){
	styleValue = getCookie("stylesvalue");
	if (styleValue === undefined || styleValue == null) { 
		styleValue = 1;
	}
	//Get savedViewID
	savedCurrentViewID = getCookie(CK_SavedViewID); 
	if (savedCurrentViewID === undefined || savedCurrentViewID == null) { 
		savedCurrentViewID = "myPortfolio";
	}
}