require(['config'],function(){
	require(['jquery'],function(){

    $(function(){
	var $cart = $('.cateMenu');
	var $list = $('.list-item');
	console.log($cart,$list)

	//获取所有ul的li
	var $het = $cart.find('li').has('ul');
	console.log($het)

	//添加箭头
	$het.append('<p>&gt;</p>');

	//鼠标移入显示子菜单
	$het.on('mouseenter',function(){
		console.log(666)
		// var $subMenu = $(this).children('ul');
		$list.show();
	})
});

	})
})
