import React from 'react';
import { 
	Button, 
	Input, 
	// DatePicker,
	Menu, 
	Icon,
	Switch,
	Modal,
	Radio,
	Popover,
	Tooltip,
	Table,
} from 'antd';
import cs from 'classnames'

import './index.css'
import json from './index.json'
// console.log(json)

const SubMenu = Menu.SubMenu;
const RadioGroup = Radio.Group;

const logo = 'http://cdn.poc.allinbots.com/codestore-assets/frontend/0.0.1/tfs/TB1hRpAaY_I8KJjy1XaXXbsxpXa-200-60.png'


export default class Diff extends React.Component{

	constructor(props) {  
        super(props);   
        this.state = {  
			sign:0,						// 账号版本等级
			dataArr:json.data.list,		// 列表假数据

			theme:'dark', 				// 侧边栏背景色

			visible:false, 				// 样式编辑弹窗
			logoUrl:'', 				// logo URL
			editLogo:'', 				// 编辑 logo URL

			version:'0', 				// 版本 0基础版 1专业版 2企业版

			table_border:false, 		// 表格边框
			table_img_radius:true,   	// 表格头像 圆形 方形
        };  
    }  
  
    componentDidMount() {
		console.log(this.state.dataArr)
		this.setState({
			logoUrl: logo
		});
    }

	// 编辑框 显示
	editModal(){
		this.setState({
			visible: true
		});
	}
	// 主题切换
	changeTheme = (value) => {
		this.setState({
			theme: value ? 'light' : 'dark',
		});
	}
	// 弹出框 确定
	handleOk = (e) => {
		console.log('确定');
		this.setState({
			visible: false,
		});
	}
	// 弹出框 取消
	handleCancel = (e) => {
		console.log('取消');
		this.setState({
			visible: false,
		});
	}

	// 在线logo输入框
	onChangeUrl(e){
		this.setState({
			editLogo: e.target.value === '' ? logo : e.target.value
		},()=>{
			this.setState({
				logoUrl: this.state.editLogo
			})
		});
		
	}

	// url输入框 删除 X
	inputClose(){
		this.setState({
			editLogo: ''
		},()=>{
			this.setState({
				logoUrl: logo
			})
		});
	}

	// 表格边框
	tableBorder(){
		this.setState({
			table_border:!this.state.table_border
		})
	}
	// 头像形状
	tableRadius(){
		this.setState({
			table_img_radius:!this.state.table_img_radius
		})
	}

	// 切换版本
	handleSizeChange(e){
		console.log(e.target.value)
		this.setState({ version: e.target.value });
	}

	render(){ 

		const { editLogo } = this.state;
		
		const cla = cs('bar-left',this.state.theme);
		const title = editLogo

		const columns = [{
	title: ' ',
	dataIndex: 'avatar',
	width:85,
	render: (text, record, index) => {
		return 	<span 
					className="tdImg"
					style={{
						background:record.avatarColor,
						borderRadius:this.state.table_img_radius?'25px':'4px'
					}}
				>{record.name.slice(0,2)}</span>
	},
  },{
	title: '姓名',
	dataIndex: 'name',
	// width:150
  }, {
	title: '登录账号',
	dataIndex: 'associatedAccount',
	// width:110
  }, {
	title: '状态',
	dataIndex: 'status',
	render: text => <span>{text ===1 ?'激活':'未激活'}</span>,
	// width:90
  }, {
	title: '角色',
	dataIndex: 'roleName',
	// width:90
  }, {
	title: '开发应用权限',
	dataIndex: 'developType',
	render: text => <span>{text ===1 ?'有':'无'}</span>,
	// width:130
  },{
	title: '操作',
	dataIndex: 'key',
	render: text => <span>
						<Button type="primary" size="small">修改</Button>
						<Button size="small">重置密码</Button>
						<Button type="danger" size="small">删除</Button>
						{
							this.state.version === '1' 
							? <Button size="small">A功能</Button>
							: ''
						}
						{
							this.state.version === '2' 
							? 	<div>
									<Button size="small">A功能</Button>
									<Button size="small">B功能</Button>
								</div>
							: ''
						}
					</span>
  }];
  
// rowSelection object indicates the need for row selection
const rowSelection = {
	onChange: (selectedRowKeys, selectedRows) => {
	  console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
	},
	getCheckboxProps: record => ({
	  disabled: record.name === 'Disabled User', // Column configuration not to be checked
	}),
};
		return (
		  	<div className="employee-list">

				{/* 侧边栏 */}
				<div className={cla}>
					<div className="logo">
						<img src={this.state.logoUrl} alt=""/>
					</div>
					<Menu
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']}
						mode="inline"
						theme={this.state.theme}
						inlineCollapsed={false}
					>
						<Menu.Item key="1">
							<Icon type="pie-chart" />
							<span>首页</span>
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="desktop" />
							<span>员工管理</span>
						</Menu.Item>
						<Menu.Item key="3">
							<Icon type="inbox" />
							<span>审批管理</span>
						</Menu.Item>
						<Menu.Item key="4">
							<Icon type="mail" />
							<span>应用管理</span>
						</Menu.Item>
						<Menu.Item key="5">
							<Icon type="appstore" />
							<span>日志查询</span>
						</Menu.Item>
					</Menu>
				</div>

				{/* 页面 右部分 */}
				<div className="page-right">
					{/* 头部 */}
					<header className={this.state.theme}>
						<Radio.Group value={this.state.version} onChange={this.handleSizeChange.bind(this)}>
							<Radio.Button value="0">基础版</Radio.Button>
							<Radio.Button value="1">专业版</Radio.Button>
							<Radio.Button value="2">企业版</Radio.Button>
						</Radio.Group>
						{
							this.state.version === '2'
							? <Icon type="form" onClick={this.editModal.bind(this)} />
							: ''
						}
						
					</header>
					{/* 下部 内容区 */}
					<div className="page-list-wrap">
						<div className="button-wrap">
							<p>
								<Button type="primary">添加员工</Button>
								{
									this.state.version ==='1' || this.state.version ==='2' 
									? <Button>批量导入</Button>
									:''
								}
								<Button>删除</Button>
								<Button>导出全部员工信息</Button>
								{
									this.state.version ==='2' 
									? <Button>其他功能</Button>
									:''
								}
							</p>
							
							{/* 表格区 */}
							<Table
								bordered={this.state.table_border}
								filterMultiple={false}
								rowSelection={rowSelection} 
								columns={columns} 
								dataSource={this.state.dataArr} 
							/>
						</div>
					</div>
				</div>

				{/* 自定义UI界面 */}
				<Modal
					title="自定义UI界面"
					maskClosable={false}
					mask={true}
					visible={this.state.visible}
					onOk={this.handleOk.bind(this)}
					onCancel={this.handleCancel.bind(this)}
				>
					<dl>
						<dt>主题</dt>
						<dd>
							<span>logo</span>
							<div>
								<Popover 
									placement="rightBottom" 
									title={<span>输入logo在线链接</span>} 
									content={
										<Tooltip title={title} trigger="focus">
											<Input
												placeholder="输入logo在线链接"
												suffix={
													<Icon 
														type="close-circle" 
														onClick={this.inputClose.bind(this)} 
													/>
												}
												onChange={this.onChangeUrl.bind(this)}
												value={this.state.editLogo}
											/>
										</Tooltip>
									} 
									trigger="hover"
								>
									<Button size="small">自定义</Button>
								</Popover>
							</div>
						</dd>
						<dd>
							<span>主题切换</span>
							<div><Switch onChange={this.changeTheme.bind(this)} /></div>
						</dd>
					</dl>

					<dl>
						<dt>列表</dt>
						<dd>
							<span>表格边框</span>
							<div><Switch onChange={this.tableBorder.bind(this)} /></div>
						</dd>
						<dd>
							<span>头像形状</span>
							{/* <div><Switch onChange={this.tableRadius.bind(this)} /></div> */}
							<RadioGroup onChange={this.tableRadius.bind(this)} value={this.state.table_img_radius}>
								<Radio value={true}>圆形</Radio>
								<Radio value={false}>方形</Radio>
							</RadioGroup>
						</dd>
					</dl>
					
				</Modal>

		  		
		  	</div>
		) 
	}
}


// Reqwest：非常小；
// 优点：

// JSONP支持
// 稳定/IE6 +支持
// CORS跨域
// Promise/A支持


// 基础版 专业版 企业版

// 专业版包含码栈现有免费服务。除此之外，专业版新增服务有：
// 云端运行：网页操作码栈，7*24h不间断运行；
// 无人值守：即开即用，消灭开机-运行-使用-关闭流程，一步到位；
// 编码模式：一站式开发环境，及码栈特有的封装参数让应用搭建能力更强大；
// 技术支持：阿里小二助力，快速响应解决难题。

// 企业版包含基础版、专业版的所有服务。除此之外，码栈企业版提供的服务有：
// 增值管理后台：员工权限管理，应用授权管理；
// 专享企业应用库：内部应用环境，自主使用应用，保障数据安全；
// 多人协同开发：支持一个应用设置多个员工进行开发，提升效率；
// 高级接口共享：SDK接口开放以及多人共享自定义API接口。