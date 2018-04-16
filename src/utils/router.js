import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from './asyncComponent';
import { BrowserRouter as Router, Link, StaticRouter } from 'react-router-dom';

const index = asyncComponent(() => import("../unlogin/index"));
const memberIndex = asyncComponent(() => import("../member/memberIndex/memberIndex"));
//路由数组配置
const routes = [{
    exact: true,
    path: '/', //绑定页面
    component: index
},{
    exact: true,
    path: '/index', //绑定页面
    component: index
}, {
    exact: false,
    path: '/memberIndex', //会员首页
    component: memberIndex
}]

const RouteWithSubRoutes = (route) => (
    <Route exact={route.exact} path={route.path} render={props => (
    // 把自路由向下传递来达到嵌套。
    <route.component {...props} routes={route.routes}/>
             
      )}  />
    )
    
    const RouteConfig = () => ( 
        <Router basename = "/" >
        <div > {
            routes.map((route, i) => ( <
                RouteWithSubRoutes key = { i } {...route }
                />
            ))
        } 
        </div> 
        </Router >
    )

    export default RouteConfig
