import React from 'react';
import './index.css'

import { NavLink } from 'react-router-dom'; // NavLink有激活class Link没有

export default class Bar extends React.Component{  
	render() {
		return (
			<div className="Bar-wrap">
				<NavLink to="/index">
					<i className="iconfont icon-dianpu"></i>
					<span>首页</span>
				</NavLink>

				<NavLink to="/classify">
					<i className="iconfont icon-fenlei"></i>
					<span>分类</span>
				</NavLink>

				<NavLink to="/car/56">
					<i className="iconfont icon-gouwuche"></i>
					<span>购物车</span>
				</NavLink>

				<NavLink to="/mine">
					<i className="iconfont icon-wode"></i>
					<span>我的</span>
				</NavLink>
			</div>
		);
	}
}