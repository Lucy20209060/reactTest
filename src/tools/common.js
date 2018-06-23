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

