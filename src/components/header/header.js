import React from 'react';
import './header.css'
import MineChild from '../mineChild';

import Bar from '../common/bar/index';

const year = new Date().getFullYear();
// const defaultProps = {
// 	userName:'大超哥'
// }
export default class Header extends React.Component{
	// 父组件传递参数到子组件 通过this.props.userName 接收
	render(){ 
		return (
		  	<div>
		  		<MineChild />
		  		<h5>{year}年</h5>
		  		<div className="tem">啥杀杀杀杀{this.props.userName}{this.props.userId}</div>
		  		<p>子组件input:<input type="text" onChange={this.props.handleChildvalue} /></p>
		  		<i className="iconfont icon-weibiaoti-5"></i>
		  		<Bar />
		  	</div>
		) 
	}
}

// 定义父组件传入的参数 
//number 参数数据类型 isRequired 参数必须传入
// Header.propTypes = {
// 	userId:React.PropTypes.number.isRequired
// }
// Header.defaultProps = defaultProps