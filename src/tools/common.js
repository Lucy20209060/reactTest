/*
	公共js方法
*/

export const goback = (par) => {
	if(par === undefined){
		console.error('请传入参数')
		return false;
	}
	return par + '啊啊啊五环你比四环多一环'
}

export const merge = (target) => {
	console.log(target)
	for (let i = 1, j = arguments.length; i < j; i++) {
	  let source = arguments[i] || {};
	  for (let prop in source) {
		if (source.hasOwnProperty(prop)) {
		  let value = source[prop];
		  if (value !== undefined) {
			target[prop] = value;
		  }
		}
	  }
	}
  
	return target;
  };

// 获取拖动元素的id 当前元素没有则向上找父元素的id
export const getParentNodeId = (node) => {
	const id = node.getAttribute('id');
	return id ? id : getParentNodeId(node.parentNode)|| undefined;
}

let timeOut = null;
export const delay = (fn) => {
    // 短时间内清除上一个定时器 不会重复触发fn
  clearTimeout(timeOut);
  timeOut = setTimeout(()=>{
    fn();
  },100)
}