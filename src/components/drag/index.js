import React from 'react';
// import './index.css';

import { getParentNodeId, delay } from '../../tools/common'

export default class Drag extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = {
	    	
		}
	}

	// 组件即将渲染
    componentWillMount() {
		// document.onmousemove = function(e){
        //     console.log(e)
        // }
	}

	render(){ 
		return (
		  	<div>
                <div 
                    style={{width:'500px',height:'300px',border:'1px solid #333'}} 
                    onDrop={this.drop} 
                    onDragOver={this.allowDrop}
                ></div>
                <div 
                    style={{width:'500px',height:'300px',border:'1px solid #333',padding:'20px'}} 
                    onDrop={this.drop} 
                    onDragOver={this.allowDrop}
                ></div>
                <br />

                <div style={{display:'inline-block',padding:'5px'}} draggable="true" id="drag-1">
                    <img 
                        style={{width:'auto',height:'70px'}} 
                        src="http://n.sinaimg.cn/sinacn/w1080h1920/20180127/4389-fyqzcxh3793070.jpg" 
                        onDragStart={this.drag} 
                    />
                </div>
                <div style={{display:'inline-block',padding:'5px'}} draggable="true" id="drag-2">
                    <img 
                        style={{width:'auto',height:'70px'}} 
                        src="http://p2.ifengimg.com/cmpp/2016/11/19/11/9fcd51bc-ffe2-43ce-a49b-2e0b94e6f3d9_size32_w387_h535.jpg" 
                        onDragStart={this.drag} 
                    />
                </div>
                
		  	</div>
		) 
    }
    // 在可放置的区域内拖动
    allowDrop(ev){
        ev.preventDefault();
        // const target = ev.target;
        // delay(()=>{
        //     console.log(target)
        // })
    }

    // 开始移动拖动
    drag(ev){
        const id = getParentNodeId(ev.target);
        ev.dataTransfer.setData("Text",id);
    }

    // 松开鼠标放置触发
    drop(ev){
        ev.preventDefault();
        var data=ev.dataTransfer.getData("Text");
        ev.target.appendChild(document.getElementById(data));
    }
}