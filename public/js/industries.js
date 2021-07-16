var Industries = [
	{ 
		'industry_id':'BAOH',
		'description':'Bảo hiểm', 
		'stock_list_S': ["BIC","BMI","PGI"],
        'stock_list_H': ["PTI","PVI","VNR","ABI","BLI","MIG"]
	},
	{ 
		'industry_id':'DVCN',
		'description':'Sản phẩm và dịch vụ công nghiệp',
		'stock_list_S': ["ADS","AST","CAV","CLL","DCM","DLG","DVP","EMC","FTM","GMD","GSP","HAG","HLG","HPG","HSG","HTV","LGC","MCG","MCP","MHC","MSN","OGC","PAC","PAN","PDN","PJT","PLP","PVT","QCG","REE","S4A","SFG","SFI","SHP","SMA","STG","STT","SVC","SVI","TCL","TCO","THI","TIE","TIX","TLH","TMS","TMT","TVT","TYA","VHG","VIP","VNL","VNS","VOS","VPD","VPK","VSC","VTB","VTO"],
        'stock_list_H': ["ARM","BBS","BII","BPC","BXH","CAG","CJC","CLM","CMC","CMS","CTB","CTT","DHP","DL1","DXP","DZM","GLT","HCT","HHG","HMH","HVA","INN","KVC","L35","MAC","MAS","MEC","MEL","MNC","MPT","NAG","NHP","PBP","PEN","PGT","PHP","PJC","PMS","PRC","PSC","PTS","PVB","QHD","SDA","SDC","SDE","SMT","SPP","SRA","SSM","STP","TJC","TMB","TPP","TSB","VBC","VCM","VGP","VKC","VMI","VMS","VNC","VNF","VNT","VSA","VSM","VTH","WCS","APL","ATB","AVC","BAL","BDF","BTC","BTG","BTH","BVG","BVN","CBI","CCP","CCR","CIP","CKD","CKH","CLX","CMK","CMP","CNH","CPI","CVC","DAP","DAS","DDM","DFC","DNA","DNL","DOC","DRI","DTK","DTV","DVC","DVH","EIN","EME","EMG","EMS","EPH","FHN","FSO","G20","GEG","GGS","GLW","GTD","GTT","GVT","HAM","HBD","HDO","HDW","HJC","HKP","HLS","HMG","HNA","HND","HNP","HNT","HPB","HPH","HPI","HPP","HPU","HRG","HSM","HTE","HTG","HUG","IDN","IHK","IN4","ISG","ITS","KHD","KIP","KSV","L12","L45","L63","LMI","MES","MGC","MH3","MIE","MQB","MTL","MTM","MTP","MVB","NAS","NBT","NCP","ND2","NED","NHH","NHT","NNG","NSG","NTC","NTT","PDV","PEC","PMJ","PMT","PSB","PSP","PTM","PTP","PTT","QNS","RBC","RTB","RTS","SAC","SAL","SB1","SBM","SCH","SCO","SCY","SDK","SDV","SFT","SGN","SGP","SHC","SHX","SIV","SNZ","SON","SPA","SPB","SSG","STS","SVG","SWC","TB8","TBD","TCK","TDM","TDS","TGP","THR","TMG","TNP","TPS","TQN","TRS","TTP","TTS","TTV","TUG","TVN","TW3","UEM","VBH","VCA","VDN","VDT","VEE","VEF","VES","VFC","VFR","VGG","VGL","VGR","VGT","VKP","VLC","VNA","VNP","VPR","VPW","VQC","VSG","VSP","VST","VTI","VTM","WTN","YBC"] 
	},
	{ 
		'industry_id':'TAIN',
		'description':'Tài nguyên',
		'stock_list_S': ["ATG","BMC","DHC","DHM","HAP","HCD","HII","KSA","KSB","KSH","LCM","NKG","SMC","TNT","VID","VIS"],
        'stock_list_H': ["ACM","AMC","BKC","CAP","CCM","CMI","CTA","DNY","HGM","HLC","HPM","ITQ","KHB","KKC","KMT","KSK","KSQ","MDC","MIM","NBC","PMP","PXA","SHN","TC6","TCS","TDN","THT","TKU","TVD","VGS","AFC","BGW","BMJ","BRR","BWS","CVH","CZC","DNS","FBA","ICI","ISH","KCB","KTB","KTL","LMC","MC3","MDF","MEF","MIC","MMC","MSR","MTA","NHV","NQB","PTK","QTP","SQC","SSF","STV","SUM","THN","TIS","TLP","TNB","TND","TVM","TVW","VBG","VIM","WTC"]
	},
	{ 
		'industry_id':'TPDU',
		'description': 'Thực phẩm đồ uống',
		'stock_list_S': ["AAM","ABT","ACL","AGF","ANV","BBC","BHN","CMX","DAT","FMC","HNG","HVG","ICF","IDI","KDC","LAF","LSS","NAF","NSC","SAB","SBT","SCD","SJF","SSC","TAC","TS4","VCF","VHC","VNM"],
        'stock_list_H': ["ATS","BLF","CAN","CTP","DBC","HAD","HAT","HHC","HKB","HKT","HNM","KHS","KTS","MCF","MLS","NDF","NGC","SAF","SGC","SGO","SJ1","SLS","TFC","THB","VDL","VE1","VTJ","AFX","AGX","ANT","APF","ATA","AUM","AVF","BBM","BHK","BHP","BLT","BMV","BQB","BSD","BSL","BSP","BSQ","BTB","CAD","CBS","CFC","CID","CMF","CMN","FCC","FCS","FDG","GTC","HAF","HAF","HAV","HBH","HLB","HNF","IFC","IFS","JOS","KDF","KSC","KSE","LTG","MCH","MPC","MTH","NCS","PCF","PNG","PRO","PSL","QHW","S33","SBL","SCC","SEA","SKH","SKV","SMB","SNC","SPD","SPH","SPV","TCJ","TTJ","VHF","VKD","VLF","VNH","VOC","VSF","VSN","WSB"]
	},
	{ 
		'industry_id':'TICC',
		'description':'Tiện ích công cộng',
		'stock_list_S': ["BTP","BWE","CHP","CLW","CNG","DRL","GEX","KHP","NT2","PGC","PPC","SBA","SJD","TBC","TDW","TMP","VSH","VSI"],
        'stock_list_H': ["BAX","BTW","DNC","DS3","HJS","NBP","NBW","PCG","PGS","PPS","PVG","SEB","BDW","BHA","BMD","BPW","BRS","BTR","BUD","BWA","CHS","CMW","CTW","CXH","DAR","DBW","DNE","DNH","DNN","DNW","DSS","DSV","EAD","GDW","GHC","GSM","HCS","HEP","HGW","HHR","HPD","HPW","HTR","HTU","HTW","KHW","KTU","LAW","LCW","LDW","LKW","LWS","MDA","MLC","MND","MPY","MTG","MTV","MVY","NAW","NLS","NNB","NNT","NQT","NS2","NS3","NTW","NUE","NVP","PJS","PWS","PYU","QNU","QNW","QPH","RCC","RTH","SP2","SSN","SSU","STU","SZE","TAP","TAW","TBN","TDB","THU","THW","TNW","TSG","TTN","TVU","UCT","UPC","VAV","VCW","VLP","VLW","VPD","VWS"]
	},
	{ 
		'industry_id':'PTTT',
		'description':'Phương tiện truyền thông',
		'stock_list_S': ["PNC"],
        'stock_list_H': ["ADC","ALT","BDB","BED","BST","DAD","DAE","DST","EBS","ECI","EID","HBE","HEV","HST","HTP","LBE","ONE","QST","SAP","SED","SGD","SMN","STC","TPH","ABC","HAB","HES","IKH","ILA","KBE","NBE","SVL","VNB","VNX"]
	},
	{ 
		'industry_id':'XDVL',
		'description':'Xây dựng và vật liệu xây dựng',
		'stock_list_S': ["ACC","ASM","BCE","BMP","C47","CDO","CEE","CII","CTD","CTI","CVT","DAG","DHA","DIC","DTL","DXV","EVG","FCM","FCN","FLC","HAS","HID","HMC","HT1","HTT","HU1","HU3","HVX","IJC","ITA","KPF","L10","LBM","LCG","LEC","LM8","MDG","NAV","NNC","NVL","PC1","POM","PTC","PXI","SBV","SHA","SRF","TCR","TDC","THG","TIP","TNI","TV1","VNE"],
        'stock_list_H': ["ALV","B82","BCC","BHT","BTS","C69","C92","CLH","CSC","CT6","CTX","CVN","CX8","DC2","DID","DIH","DNP","DTD","FID","GKM","GMX","HCC","HDA","HLD","HLY","HOM","HUT","ICG","IDV","INC","KDM","KHL","KTT","L14","L18","L43","L44","L61","L62","LCD","LCS","LHC","LIG","LM7","LO5","LUT","MBG","MCC","MCO","MST","NDX","NHC","NSH","NTP","PDB","PHC","PIC","PPE","PTD","PVV","PVX","QNC","QTC","S55","S74","S99","SCI","SCJ","SCL","SD2","SD4","SD5","SD6","SD7","SD9","SDD","SDG","SDN","SDP","SDT","SDU","SJC","SJE","SPI","SVN","TA9","TBX","THS","TMX","TTB","TTC","TTZ","TV2","TV3","TV4","TXM","V12","V21","VAT","VC1","VC2","VC3","VC6","VC7","VC9","VCC","VCG","VCS","VE2","VE3","VE4","VE8","VE9","VGC","VHL","VIT","VMC","VTS","VTV","VXB","ABC","ABI","AC4","ACE","ACS","AMS","ASD","BDT","BHC","BHV","BMF","BMN","BT6","BTD","BTN","BTU","C12","C36","C71","CC1","CC4","CCH","CCV","CDG","CDR","CE1","CEG","CER","CGV","CH5","CHC","CI5","CNN","CNT","CQT","CT3","CTN","CTR","CYC","DAC","DBH","DC1","DCF","DCT","DGT","DND","DPG","DSG","DT4","DTC","EIC","G36","GND","GTH","GTS","H11","HAN","HAS","HC3","HCI","HD2","HEC","HEJ","HFB","HHV","HLE","HMS","HU4","HU6","I10","ICC","ICN","IME","KCE","KGU","KOS","LAI","LG9","LIC","LLM","LM3","LQN","MCI","MCT","MTS","MVC","NAC","NMK","PCC","PCM","PHH","PIS","PNT","PSG","PTE","PTO","PVA","PX1","PXL","PXM","QCC","QLD","QLT","RCD","RLC","S12","S27","S96","SD1","SD3","SD8","SDB","SDH","SDI","SDJ","SDX","SDY","SHG","SJG","SJM","STL","SVH","TA3","TA6","TBT","TEC","TL4","TLT","TNM","TNS","TNY","TRT","TS3","TS5","TTR","TVA","TVG","UDJ","UMC","USC","V11","V15","VC5","VCE","VCP","VCT","VCX","VGV","VHD","VHH","VIF","VIH","VIW","VLB","VRG","VTA","VVN","X18","X77","XMD"]
	},
	{ 
		'industry_id':'VDGD',
		'description':'Vật dụng cá nhân và gia đình',
		'stock_list_S': ["CLC","DQC","EVE","GDT","GMC","GTA","KMR","LIX","RAL","SAV","SHI","STK","TCM","TLD","TLG","TTF"],
        'stock_list_H': ["ASA","DCS","KSD","MHL","NET","NST","SFN","TET","TNG","AG1","BDG","FRM","GER","HDM","HFS","HHA","HNI","LBC","M10","MGG","MRF","NPS","PID","PPH","PTG","T12","TMW","TTG","VT1","XHC"]
	},
	{ 
		'industry_id':'PTOT',
		'description':'Ô tô & linh kiện phụ tùng',
		'stock_list_S': ["BRC","CSM","CTF","DRC","HHS","HTL","SRC"],
        'stock_list_H': ["AG1","BDG","FBC","FRM","FT1","FTI","GER","GGG","GVR","HDM","HFS","HHA","HNI","LBC","M10","MGG","MLN","MRF","NPS","PID","PPH","PTG","T12","TMW","TTG","VMA","VT1","XHC"]
	},
	{ 
		'industry_id':'YTE',
		'description':'Y tế',
		'stock_list_S': ["APC","DCL","DHG","DMC","IMP","JVC","OPC","PME","SPM","TRA","VDP","VMD"],
        'stock_list_H': ["AMV","DBT","DHT","DNM","LDP","MKV","PMC","PPP","AGP","AMP","BCP","CGP","DBD","DBM","DDN","DHD","DHN","DP2","DPH","DPP","DTG","DVN","HDP","MKP","NDC","NDP","TTD","TVP","UPH","VET","YTC"]
	},
	{ 
		'industry_id':'VITH',
		'description':'Viễn thông',
		'stock_list_S': [],
        'stock_list_H': ["LTC","POT","FOX","HLA","PAI","PIA","TEL"]
	},
	{ 
		'industry_id':'BDSA',
		'description':'Bất động sản',
		'stock_list_S': ["C32","CCL","CDC","CIG","CLG","D2D","DIG","DRH","DTA","DXG","HAR","HBC","HDC","HDG","HQC","HTI","ITC","KAC","KBC","KDH","LDG","LGL","LHG","NBB","NLG","NTL","NVT","PDR","PPI","PTL","ROS","SC5","SCR","SGR","SII","SJS","SZL","TDH","UDC","UIC","VIC","VPH","VRC"],
        'stock_list_H': ["D11","DC4","DLR","DPS","IDJ","NDN","NHA","NRC","PV2","PVL","RCL","SIC","TEG","TKC","VCR","VPI","BCM","DCH","DTI","HBI","HRB","IDC","NTB","PFL","VNI"]
	},
	{ 
		'industry_id':'CNGH',
		'description':'Công nghệ',
		'stock_list_S': ["AMD","CMG","CMT","ELC","FPT","ITD","SAM","SGT","ST8"],
        'stock_list_H': ["CKV","KST","PSD","TAG","TST","UNI","VIE","VLA","VTC","BEL","CNC","HEM","HIG","HPT","ONW","PBK","PPG","SBD","VEC","X20"]
	},
	{ 
		'industry_id':'DKHI',
		'description':'Dầu khí',
		'stock_list_S': ["ASP","GAS","PGD","PLX","PMG","PVD","PXS","PXT","TDG"],
        'stock_list_H': ["PCN","PLC","PPY","PVC","PVE","PVS","VTL","BSR","DOP","GCB","HFC","OIL","PEQ","PLA","PND","POS","POV","POW","PSN","PVH","PVM","PVO","PVP","PXC","VPA"]
	},
	{ 
		'industry_id':'DVTC',
		'description':'Dịch vụ tài chính',
		'stock_list_S': ["AGR","APG","BCG","BSI","BVH","CTS","E1VFVN30","FIT","FTS","FUCTVGF1","FUCVREIT","FUESSV50","HCM","SSI","TCH","TVS","VCI","VDS","VND","VRE"],
        'stock_list_H': ["API","APS","BVS","CEO","HBS","IVS","KLF","MBS","ORS","PIV","PSI","SHS","TIG","TVC","VIG","VIX","WSS","ART","DSC","EFI","FSC","HAC","HFT","HAS","IPA","SBS","SID","TVB","VNN","VPC"]
	},
	{ 
		'industry_id':'DLGT',
		'description':'Du lịch và giải trí',
		'stock_list_S': ["DAH","DSN","HOT","RIC","SKG","TCT","VJC","VNG"],
        'stock_list_H': ["CIA","CTC","FDT","MSC","OCH","PDC","SGH","TTT","BDP","BTV","C21","CDH","DCD","DDV","DLD","DLT","DNR","DXL","HNB","HVN","MTC","NPH","NTR","PVR","QBR","RGC","SAS","TSD","TSJ","VIR","VTG"]
	},
	{ 
		'industry_id':'HOAC',
		'description':'Hóa chất',
		'stock_list_S': ["AAA","BFC","CSV","DPM","DPR","DTT","HAI","HRC","PHR","RDP","TNC","TPC","TRC","TSC","VAF","VFG","VPS"],
        'stock_list_H': ["ADP","BT1","CEC","DCI","DHB","DTN","HSI","LCC","POB","PVY","SPC","VMG","XPH","APP","CET","CPC","DGC","DGL","DP3","DPC","HVT","LAS","NFC","PCE","PMB","PSE","PSW"]
	},
	{ 
		'industry_id':'NGHA',
		'description':'Ngân hàng',
		'stock_list_S': ["BID","CTG","EIB","HDB","MBB","STB","TCB","TPB","VCB","VPB"],
        'stock_list_H': ["ACB","NVB","SHB","BAB","KLB","LPB","VIB"]
	},
	{ 
		'industry_id':'PHPH',
		'description':'Bán lẻ và Phân phối',
		'stock_list_S': ["AGM","BTT","CCI","CMV","COM","DGW","FDC","GIL","GTN","HAH","HAX","IBC","KHA","MWG","NCT","PET","PIT","PNJ","PTB","QBS","SFC","SVT","TCD","TNA"],
        'stock_list_H': ["AME","BSC","CDN","HTC","NAP","PCT","TH1","TMC","TTH","ACV","BLN","BSG","CCT","CPH","DDH","HFX","HHN","HLR","HRT","ILS","IST","KGM","NBR","NOS","NWT","PKR","PTH","QSP","RAT","RHN","SCS","SEP","SGS","SLC","SRB","SRT","TCW","TOP","TOT","VIN","VLG","VT8","VTX","YRC"]
	},
]; 


var portfolio_industry_S = [];
var portfolio_industry_H = [];
//var industry_id_p="";
var pre_industry_id_p= null;
var portfolio_index = null;

$(document).ready(function () {
	var length = Industries.length; 
  
    for (var i = 0; i < Industries.length; i++) { 
    	document.getElementById("industry_catalog").innerHTML += '<li class="trn" id="' + i + '">' + Industries[i].description + '</li>';
    }
	
	$('.child-industry1  li').click(function () { 
		//select stock_list from Industries where Industries.industry_id=industry_id;
		portfolio_index = this.id;  
		//console.log(portfolio_index);
		if(portfolio_index != pre_industry_id_p){
			portfolio_industry_S = Industries[portfolio_index].stock_list_S;
			portfolio_industry_H = Industries[portfolio_index].stock_list_H;
			setCookie("ACBS_save_industry_index", portfolio_index , 30);
			pre_industry_id_p = portfolio_index;   
			subscribeStocks("portfolio_industry");
			disconnect_rq();
		}
	});   
	
	portfolio_index = getCookie("ACBS_save_industry_index"); 
	var change_bg = document.querySelectorAll(".child-industry1 li"); 
	
	if (portfolio_index === undefined || portfolio_index == null){
		change_bg[0].classList.add("active-child-branch");
	} else if (portfolio_index !== undefined && portfolio_index != null) {
		change_bg[portfolio_index].classList.add("active-child-branch");
	}

	if (savedCurrentViewID == "portfolio_industry") {
		$('.hovercatelogybranch').addClass("active");
	}
}); 
