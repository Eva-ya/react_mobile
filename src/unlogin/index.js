import React, { Component } from 'react';
import logo from '../logo.svg';
import './index.css';
import unlogin from '../api/unlogin.api.js';
import PublicFn from '../utils/public';
// import { NavLink } from 'react-router-dom';
var sha512 = require('js-sha512').sha512; //密码加密算法

class index extends Component {
    constructor(props) {
        super(props);
        this.state={
                phone:"",
                pwd:""
        } 
     
    }
    handleChange = (type,event)=>{
        switch(type){
            case 'phone':
            this.setState({phone: event.target.value});
            break;
            case 'pwd':
            this.setState({pwd: event.target.value});
            break;
            default:;
        }
        
    }
    getLoginPromise = (phone,pwd) =>{
        // console.log(PublicFn.getServerTime())
        // var serverTime = PublicFn.getServerTime()
        // var todayDateObj = new Date(serverTime);
        // console.log(todayDateObj);
        // debugger
        // todayDateObj = PublicFn.changeTimeZone(todayDateObj); //转化成东八区时间
        // var todayDate = todayDateObj.year + "-" + todayDateObj.month + "-" + todayDateObj.date;
        // var loginPasswordSha512 = sha512(pwd + todayDate);
        // const userInfo = {
        //     phone:phone,
        //     pwd:loginPasswordSha512
        // }
        // let result = unlogin.getLoginPromise({data: userInfo});
        window.location.href="/memberIndex";
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <h2>登录</h2>
          <div className="login">
            <input type="text" value={this.state.phone} placeholder="您的手机号" onChange={this.handleChange.bind(this,"phone")}/><br/>
            <input type="password" value={this.state.password} placeholder="请输入密码" onChange={this.handleChange.bind(this,"pwd")} />
            <button onClick={this.getLoginPromise.bind(this,this.state.phone,this.state.pwd)}>确认</button>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
