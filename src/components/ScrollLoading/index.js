import React from 'react';
import './index.css';
import ScrollLoading from './components/ScrollLoading'

export default class Scroll extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = {
	    	dataSource: [1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
		}
	}

    componentDidMount() {
    }
	render(){ 
        const { style } = this.props;
        const { dataSource } = this.state;
        // style={{height: '100%', overflow: 'auto'}}
		return (
		  	<div className="scrollLoading-page">
                <ScrollLoading 
                    style={{height: '100%'}} 
                    loading={this.getData.bind(this)}
                >
                    {
                        dataSource.map((item, index)=>{
                            return <div style={{textAlign: 'center'}} key={index}>{item}</div>
                        })
                    }
                </ScrollLoading>
		  	</div>
		) 
    }
    
    getData() {
        console.log('getData')
        const { dataSource } = this.state;
        const end = dataSource[dataSource.length -1];
        // 模拟请求
        if(this.state.dataSource.length <= 40){
            this.setState({
                dataSource: this.state.dataSource.concat([...this.range(end + 1, end+6)])
            })
        }else{
            this.setState({
                dataSource: this.state.dataSource
            })
        }
    }

    * range(start = 0, end = 0, step = 1) {
        if (start > end) {
            [start, end] = [end, start]
        }
        for (let i of Array((end - start) / step).keys()) {
            yield i * step + start
        }
    }
}