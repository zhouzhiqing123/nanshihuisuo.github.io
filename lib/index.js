(function ($) {
	$.gparam = {
		path : ''
	}
	
	$.selfa = function() {
		$.cookie('CLOUD-PATH', "", { path: '/' });
		window.location.href = "/cloudweb/selfindex?redirectUrl=2729199133352980241";
	};
	
	$.selfb = function() {
		$.cookie('CLOUD-LOGIN_TYPE', "login", { path: '/' });
		window.location.href = "/cloudweb/login?form=login&redirectUrl=2729199133352980241";
	};
	
	var userAccount = $.cookie('CLOUD-USER');

	if (userAccount && userAccount != "visitor" ) {
		$("#login").html('<a id="selfa" href="javascript:$.selfa();">' + unescape(userAccount) + '</a>');
		$("#mobileLogin").text(unescape(userAccount));
		$("#mobileLogin").attr("href", "javascript:$.selfa();");
	} else {
		$("#login").html('<a href="javascript:$.selfb();">用户登录</a>');
		$("#mobileLogin").attr("href", "javascript:$.selfb();");
		
		var path = window.location.pathname;
		if (path.indexOf("tryportal") > 0 && path.indexOf("login?form") < 0) {
			$.gparam.path = "attempt";
			$.cookie('CLOUD-SELF', "false", { path: '/' });
			window.location.href = "/cloudweb/login?form=" + encodeURIComponent($.gparam.path) + "&redirectUrl=2729199133352980241";
		}
		if (path.indexOf("pricing_ohwyaa") > 0 && path.indexOf("login?form") < 0) {
			$.gparam.path = "/pages/product/editions-pricing_ohwyaa";
			window.location.href = "/cloudweb/login?form=" + encodeURIComponent($.gparam.path) + "&redirectUrl=2729199133352980241";
		}
		
		if (path.indexOf("pricing_snap") > 0 && path.indexOf("login?form") < 0) {
			$.gparam.path = "/pages/product/editions-pricing_snap";
			window.location.href = "/cloudweb/login?form=" + encodeURIComponent($.gparam.path) + "&redirectUrl=2729199133352980241";
		}
		
		if (path.indexOf("pricing_chart") > 0 && path.indexOf("login?form") < 0) {
			$.gparam.path = "/pages/product/editions-pricing_chart";
			window.location.href = "/cloudweb/login?form=" + encodeURIComponent($.gparam.path) + "&redirectUrl=2729199133352980241";
		}
		
		if (path.indexOf("pricing_form") > 0 && path.indexOf("login?form") < 0) {
			$.gparam.path = "/pages/product/editions-pricing_form";
			window.location.href = "/cloudweb/login?form=" + encodeURIComponent($.gparam.path) + "&redirectUrl=2729199133352980241";
		}
		
		if (path.indexOf("pricing_dataviz") > 0 && path.indexOf("login?form") < 0) {
			$.gparam.path = "/pages/product/pricing_dataviz";
			window.location.href = "/cloudweb/login?form=" + encodeURIComponent($.gparam.path) + "&redirectUrl=2729199133352980241";
		}
		
	}
	
	$.tryportal = function() {
		window.location.href = "/cloudweb/selfindex";
		//if (userAccount && userAccount != "visitor" ) {
		//	$.cookie('CLOUD-PATH', "attempt", { path: '/' });
		//	window.location.href = "/cloudweb/selfindex";
		//} else {
		//	$.gparam.path = "attempt";
		//	window.location.href = "/cloudweb/login?form=" + encodeURIComponent($.gparam.path);
		//}
	}
	
	$.menuLine = function(id) {
		$("#p_line").css("display", "none");
		$("#i_line").css("display", "none");
		$("#c_line").css("display", "none");
		$("#s_line").css("display", "none");
		$("#r_line").css("display", "none");
		$("#a_line").css("display", "none");
		
		if (id != null) {
			$("#" + id).css("display", "block");
		}
	}
	
	$.loadPrice = function(product) {
		if (product == "ohwyaa") {
			$.gparam.path = "/pages/product/editions-pricing_ohwyaa";
		}
		
		if (product == "snap") {
			$.gparam.path = "/pages/product/editions-pricing_snap";
		}
		
		if (product == "chart") {
			$.gparam.path = "/pages/product/editions-pricing_chart";
		}
		
		if (product == "dataviz") {
			$.gparam.path = "/pages/product/editions-pricing_dataviz";
		}
		
		if (product == "form") {
			$.gparam.path = "/pages/product/editions-pricing_form";
		}

		if (userAccount && userAccount != "visitor" ) {
			window.location.href = $.gparam.path;
		} else {
			window.location.href = "/cloudweb/login?form=" + encodeURIComponent($.gparam.path) + "&redirectUrl=2729199133352980241";
		}
	}

/*	$.loadOhwyaa = function() {
		if (userAccount && userAccount != "visitor" ) {
			window.open("/cloudweb/ohwyaa");
		} else {
			window.open("/cloudweb/login?form=" + encodeURIComponent("/cloudweb/ohwyaa") + "&redirectUrl=2729199133352980241");
		}
	}*/

	$.loadOhwyaa = function() {
		window.open("/pages/sns/sns");
	}
	
	$.checkSession = function() {
		var result = false;
		$.ajax({
	        url : "/cloudweb/check/session",
	        async : false,
	        type : "GET",
	        dataType : "json",
	        success : function(obj) {
	        	if (obj.status == 'Success') {
	        		result = true;
	        	} else if (obj.status == 'Error') {
	        		result = false;
	        	}
	        },
	        error : function() {
	        	result = false;
	        }
	    });
		
		return result;
	};
	
	var shiftFlag = 0;
	
	$.shift = function() {
		console.log(shiftFlag)
		if (shiftFlag == 0) {
			$("#bg6, #bg6text").delay("100").fadeOut(1500);
			$("#bg5, #bg5text").delay("300").fadeIn(1500);
			shiftFlag++;
			return;
		}
		if (shiftFlag == 1) {
			$("#bg5, #bg5text").delay("100").fadeOut(1500);
			$("#bg2, #bg2text").delay("300").fadeIn(1500);
			shiftFlag++;
			return;
		}
		if (shiftFlag == 2) {
			$("#bg2, #bg2text").delay("100").fadeOut(1500);
			$("#bg3, #bg3text").delay("300").fadeIn(1500);
      shiftFlag++;
			return;
		}
    if (shiftFlag == 3) {
      $("#bg3, #bg3text").delay("100").fadeOut(1500);
      $("#bg6, #bg6text").delay("300").fadeIn(1500);
      shiftFlag = 0;
      return;
    }
	}

	window.setInterval("$.shift()", 5000);
	
	// 判断浏览器类型
	$.isBrowser = function() {
		var userAgent = navigator.userAgent;
		//判断是否Opera浏览器
	    var isOpera = userAgent.indexOf("Opera") > -1;
	    //判断是否IE浏览器
	    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera;  
	    //判断是否IE的Edge浏览器
	    var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE;
	    //判断是否Firefox浏览器
	    var isFF = userAgent.indexOf("Firefox") > -1;
	    //判断是否Safari浏览器
	    var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1;
	    //判断Chrome浏览器
	    var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1;

	    if (isIE) {
	        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
	        reIE.test(userAgent);
	        var fIEVersion = parseFloat(RegExp["$1"]);
	        if (fIEVersion == 9) {
	        	return "IE9";
	        } else if(fIEVersion == 10) {
	        	return "IE10";
	        } else if(fIEVersion == 11) {
	        	return "IE11";
	        } else {
	        	return "0"
	        }
	    }

	    if (isFF) {
	        return "FF";
	    }
	    
	    if (isOpera) {
	    	return "Opera";
	    }
	    
	    if (isSafari) {
	    	return "Safari";
	    }
	    
	    if (isChrome) {
	    	return "Chrome";
	    }
	    
	    if (isEdge) {
	    	return "Edge";
	    }
	};
	
	$(".aui_sharebox").mouseover(function() {
		$(".aui_sharebox").css("left", "0px");
	});
	
	$(".aui_sharebox").mouseout(function() {
		$(".aui_sharebox").css("left", "-120px");
	});

	$.getUrlParam = function (name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return decodeURIComponent(r[2]); return null;
	}
	
	$.search = function() {
		window.open("/search?type=web&q=" + encodeURIComponent($('#bdcsMain').val()));
	};
	
	$("#searchBtn").click(function(){
		$.search();
	}); 
	
	$("#bdcsMain").keydown(function(event){
		if(event.which == "13"){
			$.search();
		}
	});
	
})(jQuery);