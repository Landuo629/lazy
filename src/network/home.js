import {request} from './request'

//随机句子模块
export function getsentence(parameter){
    return request({
        url: 'https://v1.hitokoto.cn/?' + parameter,
    })
}

//天气模块
export function getweather(city){
    return request({
        url: 'https://tianqiapi.com/api?version=v1&appid=78313313&appsecret=6fJnrySc&vue=1&city=' + city,
    })
}

//JSONP方法
export function ajax(key){
    // if (!key) {
    //     console.error('Axios.JSONP 至少需要一个url参数!')
    //     return;
    // }
    const url = 'https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=1424,21121,30791,30908,30935,30824&wd='+key+'&req=2&csor=1'
    return new Promise((resolve, reject) => {
        window.jsonCallBack = res => {
            resolve(res)
        }
        var JSONP = document.createElement("script");
        JSONP.type = "text/javascript";
        JSONP.src = `${url}&callback=jsonCallBack`;
        document.getElementsByTagName("head")[0].appendChild(JSONP);
        setTimeout(() => {
            document.getElementsByTagName("head")[0].removeChild(JSONP)
        }, 500)
    })
}
