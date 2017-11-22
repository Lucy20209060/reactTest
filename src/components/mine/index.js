import React from 'react';
import './index.css';
import Bar from '../common/bar/index';
import mineBg from '../../images/minebg.png'
import mineImg from '../../images/mine.png'

import orderImg from '../../images/order.png'
import contactImg from '../../images/contact.png'
import helpImg from '../../images/help.png'

import { NavLink } from 'react-router-dom';

export default class Mine extends React.Component{
	constructor(props) {
        super(props);
        this.state = {
        	mobile:'17681886725',
        	verify:-1,
        	userId:0
    	}
    }
	render(){ 
		// 背景图
		let divStyle = {
		    background:'url('+mineBg+') 0 0/cover no-repeat'
		}

		const {location} = this.props;
		console.log(location)

		return (
		  	<div className="Mine-wrap">
		  		<section className="Mine-info" style={divStyle}>
					<header>安厨供应链</header>
					<div className="Mine-info-img">
						<img src={mineImg} alt="" />
					</div>

					<div className="Mine-info-btn">
						{/*
							登录/未登录 按钮状态
						*/}
						{
							this.state.userId > 0
							?<div className="Mine-info-exit">
								<i>{this.state.mobile}</i>
								<span className="iconfont icon-denglu">退出登录</span>
							 </div>
							:<a href="/login" className="Mine-info-login">立即登录</a>
						}
					</div>
		  		</section>
		  		<dl className="Mine-func">
		  			<dt>我的功能</dt>
		  			<dd>
		  				<NavLink to="/reduxTest">
		  					<img src={orderImg} alt="" />
		  					<i>查看订单</i>
		  				</NavLink>
		  				<NavLink to="/">
		  					<img src={contactImg} alt="" />
		  					<i>联系我们</i>
		  				</NavLink>
		  				<NavLink to="/">
		  					<img src={helpImg} alt="" />
		  					<i>帮助</i>
		  				</NavLink>
		  			</dd>
		  		</dl>
		  		<Bar />
		  	</div>
		) 
	}
}