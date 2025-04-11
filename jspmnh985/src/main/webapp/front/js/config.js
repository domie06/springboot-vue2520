
var projectName = '中小型医院管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.jsp'
}, 
]


var indexNav = [

{
	name: '门诊信息',
	url: './pages/menzhenxinxi/list.jsp'
}, 

{
	name: '公告信息',
	url: './pages/news/list.jsp'
},
]

var adminurl =  "http://localhost:8080/jspmnh985/index.jsp";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-link","buttons":["新增","查看","修改","删除"],"menu":"医生","menuJump":"列表","tableName":"yisheng"}],"menu":"医生管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["新增","查看","修改","删除"],"menu":"药品类别","menuJump":"列表","tableName":"yaopinleibie"}],"menu":"药品类别管理"},{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["新增","查看","修改","删除"],"menu":"项目类型","menuJump":"列表","tableName":"xiangmuleixing"}],"menu":"项目类型管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["新增","查看","修改","删除"],"menu":"科室类型","menuJump":"列表","tableName":"keshileixing"}],"menu":"科室类型管理"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["新增","查看","修改","删除"],"menu":"门诊信息","menuJump":"列表","tableName":"menzhenxinxi"}],"menu":"门诊信息管理"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看","修改","删除"],"menu":"挂号信息","menuJump":"列表","tableName":"guahaoxinxi"}],"menu":"挂号信息管理"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["新增","查看","修改","删除"],"menu":"药品信息","menuJump":"列表","tableName":"yaopinxinxi"}],"menu":"药品信息管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","修改","删除"],"menu":"处方信息","menuJump":"列表","tableName":"chufangxinxi"}],"menu":"处方信息管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看","修改","删除"],"menu":"门诊项目","menuJump":"列表","tableName":"menzhenxiangmu"}],"menu":"门诊项目管理"},{"child":[{"appFrontIcon":"cuIcon-qrcode","buttons":["查看","修改","删除"],"menu":"住院登记","menuJump":"列表","tableName":"zhuyuandengji"}],"menu":"住院登记管理"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看","修改","删除"],"menu":"出院信息","menuJump":"列表","tableName":"chuyuanxinxi"}],"menu":"出院信息管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"公告信息","tableName":"news"},{"appFrontIcon":"cuIcon-explore","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","挂号"],"menu":"门诊信息列表","menuJump":"列表","tableName":"menzhenxinxi"}],"menu":"门诊信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看","删除","支付"],"menu":"挂号信息","menuJump":"列表","tableName":"guahaoxinxi"}],"menu":"挂号信息管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","支付"],"menu":"处方信息","menuJump":"列表","tableName":"chufangxinxi"}],"menu":"处方信息管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看","支付"],"menu":"门诊项目","menuJump":"列表","tableName":"menzhenxiangmu"}],"menu":"门诊项目管理"},{"child":[{"appFrontIcon":"cuIcon-qrcode","buttons":["查看"],"menu":"住院登记","menuJump":"列表","tableName":"zhuyuandengji"}],"menu":"住院登记管理"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看","支付"],"menu":"出院信息","menuJump":"列表","tableName":"chuyuanxinxi"}],"menu":"出院信息管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","挂号"],"menu":"门诊信息列表","menuJump":"列表","tableName":"menzhenxinxi"}],"menu":"门诊信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看"],"menu":"门诊信息","menuJump":"列表","tableName":"menzhenxinxi"}],"menu":"门诊信息管理"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看"],"menu":"挂号信息","menuJump":"列表","tableName":"guahaoxinxi"}],"menu":"挂号信息管理"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看","处方"],"menu":"药品信息","menuJump":"列表","tableName":"yaopinxinxi"}],"menu":"药品信息管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","删除"],"menu":"处方信息","menuJump":"列表","tableName":"chufangxinxi"}],"menu":"处方信息管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["新增","查看","修改","删除"],"menu":"门诊项目","menuJump":"列表","tableName":"menzhenxiangmu"}],"menu":"门诊项目管理"},{"child":[{"appFrontIcon":"cuIcon-qrcode","buttons":["新增","查看","修改","删除"],"menu":"住院登记","menuJump":"列表","tableName":"zhuyuandengji"}],"menu":"住院登记管理"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["新增","查看","修改","删除"],"menu":"出院信息","menuJump":"列表","tableName":"chuyuanxinxi"}],"menu":"出院信息管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","挂号"],"menu":"门诊信息列表","menuJump":"列表","tableName":"menzhenxinxi"}],"menu":"门诊信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"医生","tableName":"yisheng"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
