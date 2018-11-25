import React from 'react';
// import './index.css';

export default class Drag extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = {
	    	
		}
	}

	// 组件即将渲染
    componentWillMount() {
		
	}

	render(){ 
		return (
		  	<div>
                <div 
                    id="div1" 
                    style={{width:'500px',height:'300px',border:'1px solid #333'}} 
                    onDrop={this.drop} 
                    onDragOver={this.allowDrop}
                ></div>
                <div 
                    id="div1" 
                    style={{width:'500px',height:'300px',border:'1px solid #333'}} 
                    onDrop={this.drop} 
                    onDragOver={this.allowDrop}
                ></div>
                <br />

                <div draggable="true" id="drag1" >
                    <img 
                        src="http://www.w3school.com.cn/i/eg_dragdrop_w3school.gif" 
                        id="drag1"
                        onDragStart={this.drag} 
                    />
                </div>
                
		  	</div>
		) 
    }
    // 在可放置的区域内拖动
    allowDrop(ev){
        ev.preventDefault();
    }

    // 开始移动拖动
    drag(ev){
        ev.dataTransfer.setData("Text",ev.target.id);
    }

    // 松开鼠标放置触发
    drop(ev){
        console.log(3)
        ev.preventDefault();
        var data=ev.dataTransfer.getData("Text");
        ev.target.appendChild(document.getElementById(data));
    }
}