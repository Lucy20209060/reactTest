import React from 'react';
import './ScrollLoading.css';
import {debounce} from './func'

export default class ScrollLoading extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = {
            loading_animation_show: true,
            children_State: []
		}
    }

    componentDidMount() {
        const el = document.getElementById('scroll-loading');
        const _this = this;
        const { children } = this.props;
        const { children_State } = this.state;
        el.onscroll= function(){
            const scrollTop = el.scrollTop,
                offsetHeight = el.offsetHeight, 
                scrollHeight = el.scrollHeight;
            if(scrollHeight === (scrollTop + offsetHeight) ){
                debounce(()=>{
                    _this.props.loading();
                }, 800)
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        const { children_State } = this.state;
        const { children } = nextProps;

        this.setState({
            children_State: children
        },()=>{
            if(children_State.length === nextProps.children.length){
                this.setState({
                    loading_animation_show: false
                })
            } 
        })
    }
	render(){ 
        const { style, children } = this.props;
        const { loading_animation_show } = this.state;
		return (
		  	<div id="scroll-loading" style={{height: '100%', overflow: 'auto', ...style}}>
                <div className="scroll-content">{children}</div>
                <div className='loading-animation box'>
                    {
                        loading_animation_show
                        ? <div className="loader"></div>
                        : <p>无更多数据~</p>
                    }
                </div>  
		  	</div>
		) 
	}
}