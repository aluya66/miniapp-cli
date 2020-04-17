
/*
*  请求配置
*/

const env = 'dev';

/*
** 小程序没有env监测，只能通过手动的方式更改
*/

const BaseUrl = {
    //开发环境
    'dev': {
         url: 'http://127.0.0.1' 
    },
    //测试环境
    'test': {
        url: 'http://127.0.0.1' 
     },
     //预发布环境
    'pre': {
        url: 'http://127.0.0.1' 
    },
    //生产环境
    'master': {
        url: 'http://127.0.0.1' 
    },
}

export default {
     baseUrl: BaseUrl[env].url
}