import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
import Index from './unlogin/index';
import Memberindex from './member/memberIndex/memberIndex';
import registerServiceWorker from './registerServiceWorker';
import routeConfig from './utils/router'; //路由配置

async function init() {
    document.body.addEventListener('touchstart', function() {});
    render((
        //路由配置
        routeConfig()
    ), document.getElementById('root'))
}
//初始化
init()

registerServiceWorker();