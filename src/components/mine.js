import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css'
import { Link } from 'react-router-dom'
import Header from './header/header';
import About from './about';


export default class Mine extends React.Component{

	constructor(props) { // 设置初始值
	    super(props);
	    this.state = {
	    	Font: true,
	    	num:20
		}
	}

	switchFont(){
		this.setState({
			Font : !this.state.Font
		})
	}

	changenums(event){
		this.setState({
			num : event.target.value
		})
	}

	tap(){
		console.log(this)
	}

	render(){ 

		const styleTem = {
			fontSize:(this.state.Font) ? "20px" : "14px"
		};

		/*根据条件加载不同的组件*/
		var comTem;
		if(false){
			comTem = <Header/>;
		}else{
			comTem = <About/>;
		}

		let name = 'Lucy'
		let nameId = 550502661

		let html = 'aaaaaa<span>span标签</span>bbbb'

		return (
		  	<div>
		  		<Button type="primary">Primary</Button>
		  		<Button>Default</Button>
			    <Button type="dashed">Dashed</Button>
			    

			    <h2>{name===''?'用户没有登录':'用户名'+name}</h2>

				{/*点击事件*/}
		  		<h5 onClick={this.switchFont.bind(this)} style={styleTem}>我的 组件 点击切换字体大小</h5>

		  		{comTem}


		  		<p>{html}</p>
		  		
		  		{/*html解析 存在XSS攻击漏洞 不建议 HTML要显示可以进行 Unicode转码*/}
		  		<p dangerouslySetInnerHTML={{__html:html}}></p>

		  		<p style={{color:'red',fontSize:'30px'}}>{'年龄：'+this.state.num}</p>

		  		{/*this.changenums.bind(this,50) 可传参数*/}
		  		<Header userId={nameId} userName="大超哥" handleChildvalue={this.changenums.bind(this)}  />


		  		<Button type="danger"><Link to="/mine/mineChild">去mineChild页面</Link></Button>

			  	{/*
			  			带参数 Link

					<Link to={{
						pathname: '/course',
						search: '?sort=name',
						state: { price: 18 }
					}} />

			  	*/}

		  		{/*自定义组件*/}
		  		<About onTap={this.tap.bind(this)}/>
		  	</div>
		) 
	}
}
