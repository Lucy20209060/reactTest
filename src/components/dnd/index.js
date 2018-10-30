import React from 'react';
import './index.css'
import {parseDiff, Diff, Hunk} from 'react-diff-view';


export default class Dnd extends React.Component{

	// 设置默认状态 可以修改 this.state
	constructor(props) {
        super(props);
        this.state = {
        	
    	};
    }

    // 组件即将渲染
    componentWillMount() {
        
    }

    // 创建虚拟DOM
	render(){
		const diffText = `
		--- a/splc-core/src/main/java/com/aliyun/splc/core/user/manager/impl/UserManagerImpl.java
		+++ b/splc-core/src/main/java/com/aliyun/splc/core/user/manager/impl/UserManagerImpl.java
		@@ -196,7 +196,7 @@
		Map<UserKeyModel, UserModel> userModels = new HashMap<>();
		if (CollectionUtil.isNotEmpty(users) ) {
			List<UserKeyModel> usersCopy = new LinkedList<>(users);
			-List<List<UserKeyModel>> userModelsPortionList = Lists.partition(usersCopy, 5);
			+List<List<UserKeyModel>> userModelsPortionList = Lists.partition(usersCopy, 20);
			for (List<UserKeyModel> usersPortion : userModelsPortionList) {
				Map<UserKeyModel, UserModel> usersModelPortion = getUsersFromTair(usersPortion);
			}
		`
		const {files} = parseDiff(diffText);
		console.log(files)

    const renderFile = ({oldRevision, newRevision, type, hunks}) => (
        <Diff key={oldRevision + '-' + newRevision} viewType="split" diffType={type} hunks={hunks}>
            {hunks => hunks.map(hunk => <Hunk key={hunk.content} hunk={hunk} />)}
        </Diff>
    );
		return (
			<div>
				{/* {files.map(renderFile)} */}
			</div>
		) 
	}
}