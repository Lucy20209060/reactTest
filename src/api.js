/*
	api管理
	Created by lucy on 2017/06/15.
 */

const apiPre = '/api.php';

// 获取地域列表
export const api_getlist = `${apiPre}?s=api/site/getlist`;

export const goods = {
	info:`${apiPre}?s=api/goods/info`,
	searchcategory:`${apiPre}?s=api/goods/searchcategory`,
}