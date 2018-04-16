import Server from '../utils/service';

class unlogin extends Server {
    async getLoginPromise(params = {}) {
        try {
            let result = await this.axios('post', '/api/speakhiTeenager/v1/user/login', params);
            if (result && result.status === 1) {
                return result;
            } else {
                let err = {
                    tip: '登录失败',
                    response: result,
                    data: params,
                    url: '/api/speakhiTeenager/v1/user/login',
                }
                throw err;
            }
        } catch (err) {
            throw err;
        }
    }

}

export default new unlogin();