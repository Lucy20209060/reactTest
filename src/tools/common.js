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
