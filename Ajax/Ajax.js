'use strict'


/**
 * @Author   lan
 * @DateTime 2017-08-21
 * @version  1.0.0
 * @param    opt
 */
export default function ajax(opt) {
	opt = opt || {};
	opt.method = opt.method || "GET";
	opt.url = opt.url || "";
	opt.async = opt.async || true;
	opt.data = opt.data || null;
	opt.success = opt.success || function (){};

	//判断浏览器的支持的xmlHttp类型
	let xmlHttp = null;
	if (xmlHttp){
		xmlHttp = new XMLHttpRequest();
	} else {
		xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
	}

	//不同请求方式传递的参数不一样
	let parmas = [];
	for (let key in opt.data) {
		parmas.push(key + "=" + opt.data[key]);
	}
	let postData = parmas.join("&");

	//post请求要设置请求头信息
	if (opt.method === "GET") {
		xmlHttp.open(opt.method, opt.url + "?" + postData, opt.async);
		xmlHttp.send(null);
	} else {
		xmlHttp.open(opt.method, opt.url, opt.async);
		xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
		xmlHttp.send(opt.data)
	}

	//xmlHttp的监听状态来判断成功回调的时候调用的方法
	xmlHttp.onreadystatechange() = function () {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
			opt.success(xmlHttp.responseText);
		}
	}

}