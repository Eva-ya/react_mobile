import moment from 'moment';
import Server from './service.js';

class PublicFn {
    //获取系统时间
    //获取服务器时间
    getServerTime() {
        var xhr = null;

        if (window.XMLHttpRequest) {
            xhr = new window.XMLHttpRequest();
        } else { // ie
            // xhr = new ActiveObject("Microsoft")
        }

        xhr.open("POST", "/api/speakhiTeenager/v1/user/login", false) //false不可变
        xhr.send(null);
        var date = xhr.getResponseHeader("Date");
        return new Date(date).getTime();
    }

    // 把当前date对象或者毫秒数转换成东八区,并且月份和日期 一个数自动补0 
    changeTimeZone(time) {
        var timeObj = {};
        timeObj.year = moment(time).utcOffset(8).get('year');
        timeObj.month = moment(time).utcOffset(8).get('month') + 1;
        timeObj.date = moment(time).utcOffset(8).get('date');
        timeObj.week = moment(time).utcOffset(8).get('day');
        if (timeObj.month < 10) {
            timeObj.month = "0" + timeObj.month
        }
        if (timeObj.date < 10) {
            timeObj.date = "0" + timeObj.date
        }
        return timeObj;
    }
}
export default new PublicFn()