import React from 'react';
import './index.css'

// import { Button } from 'antd-mobile';

export default class Login extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
	    	phone:'',
	    	password:'',
	    	phoneSign:false,		// 电话号码开关
	    	passwordSign:false,		// 密码开关
		}
	}

	// 输入框 取消
	cacel(){
		if(this.state.phone !== ''){
			this.setState({
				phone: ''
			});

		}
	}
	// 输入电话号码
	phoneChange(event){
		this.setState({
			phone: event.target.value
		});
	}

	// 输入密码
	passwordChange(event){
		this.setState({
			password: event.target.value
		});
	}

	render(){ 
		// 背景图
		let divStyle = {
		    background:'#f5f4f2 url('+require('../../images/loginBg.png')+') 0 100% no-repeat',
		    backgroundSize:'100% auto'
		}
		return (
		  	<div className="Login-wrap" style={divStyle}>
		  		{/*logo*/}
		  		<p className="Login-wrap-logo">
		  			<a href="/">
		  				<img src={require('../../images/jishi.png')} alt="" />
		  			</a>
		  		</p>

		  		{/*电话号码输入框*/}
		  		<p className="Login-wrap-phone">
		  			<span>
		  				<input 
		  					type="tel" 
		  					placeholder="手机号" 
		  					maxLength="11" 
		  					value={this.state.phone} 
		  					onChange={this.phoneChange.bind(this)} />
		  				{
		  					this.state.phone !== ''
		  					?<i className="iconfont icon-guanbi" onClick={this.cacel.bind(this)}></i>
		  					:''
		  					
		  					
		  				}
		  			</span>
		  		</p>

		  		{/*密码输入框*/}
		  		<p className="Login-wrap-password">
		  			<span>
		  				<input 
		  					type="password" 
		  					placeholder="密码" 
		  					maxLength="16" 
		  					value={this.state.password}
		  					onChange={this.passwordChange.bind(this)} />
		  			</span>
		  		</p>

		  		{/*登陆按钮*/}
		  		<p className="Login-wrap-button">
		  			<button>登录</button>
		  		</p>

		  		<p className="Login-wrap-register">
		  			<a href="/register">注册>></a>
		  		</p>

		  	</div>
		) 
	}
}