import React from 'react';
import ReactDOM from 'react-dom';
export default class About extends React.Component{

	// 设置默认状态 可以修改 this.state
	constructor(props) { // 设置初始值
        console.log("constructor设置默认状态");
        super(props);
        this.state = {
        	str: "constructor里的数据"
    	};
    }

    // 组件即将渲染
    componentWillMount() {
        console.log("componentWillMount组件即将渲染 获取ajax");
    }

    // 组件已经渲染
    componentDidMount() {
        console.log("componentDidMount组件已经渲染");
        // 修改状态
        this.setState({
            str: '修改了constructor里的数据'
        });

        console.log(ReactDOM.findDOMNode(this))
    }

    // 组件将要接受新组件
    // 父组件修改了子组件的属性 或者 一个组件修改自身的状态 才会触发
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps组件将要接受新组件");
    }

    // 组件是否更新
    // 组件是否应当渲染新的props或state，返回false表示跳过后续的生命周期方法，
 	//通常不需要使用以避免出现bug。在出现应用的瓶颈时，可通过该方法进行适当的优化。
	// 在首次渲染期间或者调用了forceUpdate方法后，该方法不会被调用
    shouldComponentUpdate(a,b) {
        console.log("shouldComponentUpdate组件是否更新",a,b);
        return true;        // 记得要返回true
 		

    }

    // 组件即将更新
    // 接收到新的props或者state后，进行渲染之前调用，此时不允许更新props或state。
    componentWillUpdate() {
        console.log("componentWillUpdate组件即将更新");
    }

    // 组件更新完毕
    // 完成渲染新的props或者state后调用，此时可以访问到新的DOM元素。
    componentDidUpdate() {
        console.log("componentDidUpdate组件更新完毕");
        console.log(ReactDOM.findDOMNode(this))
    }

   	// 组件即将卸载
    componentWillUnmount() {
        console.log("componentWillUnmount组件即将卸载");
    }
    tap(){
    	console.log('点击了')
    	this.setState({
    		str:'点击修改了数据'
    	})
    }

    // 创建虚拟DOM
	render(){
		console.log('render创建虚拟DOM') 
		return (
		  	<div>
		  		<h5 onClick={this.tap.bind(this)}>我是about组件,参数</h5>
		  		<h4>{this.state.str}</h4>
                <button onClick={this.props.onTap}>我是about组件 button</button>
		  	</div>
		) 
	}
}