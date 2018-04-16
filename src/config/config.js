/**
 * 全局配置文件
 */
let baseURL;
let imgUrl = '//cangdu.org:8001/img/';
if (process.env.NODE_ENV === 'development') {
    baseURL = '//192.168.250.242:8331';
} else {
    baseURL = '//cangdu.org';
}


export default { imgUrl, baseURL }