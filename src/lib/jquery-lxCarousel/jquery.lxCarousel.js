/*
	轮播图插件
	$不一定就是jQuery
 */
;(function($){
	// $.prototype = $.fn
	$.fn.lxCarousel = function(options){
		// 默认值
		var defaults = {
			width:1920,
			height:447,
			index:0,
			autoPlay:true,
			duration:3000,
			type:'vertial'//vertial,horizontal,fade,show
		}

		// 覆盖默认值
		var opt = $.extend({},defaults,options);

		// 这里的this指向实例：$('.carousel')

		// 遍历jquery对象
		// 解决多个jquery对象使用插件的问题
		this.each(function(){

			// 这里的this指向DOM节点
			
			// 给this添加插件样式
			$(this).addClass('lxCarousel');


			// 生成图片结构
			var $ul = $('<ul/>');
			$ul.html($.map(opt.imgs,function(item,idx){
				return `<li><img src="${item}"></li>`;
			}).join(''));

			$(this).append($ul);

			//无缝滚动
			// var $list = $ul.children().first().clone();
			// $list.append($ul)
			 // console.log($list) 
			// var $res = opt.imgs[0]
			// opt.imgs[0].clone().append($ul);
			// $ul.appendTo(opt.imgs[0].clone());
			// console.log(opt.imgs[0].clone())
			// $ul.appendTo($ul.children(0).first().clone());
			// console.log($list)

			// 生成页码 
			var $page = $('<div/>').addClass('page');
			$page.html($.map(opt.imgs,function(item,idx){
				if(idx==0){
					return `<span class="active">${idx+1}</span>`;
				}else{
					return `<span>${idx+1}</span>`;
				}
			}).join(''));
			$(this).append($page);

			//生成左右按钮
			//判断点击按钮是否显现
			if(options.btn === false){
				$this = '';
			}else if(options.btn === true){
				var $btnPrev = $('<div/>').addClass('prev').html('&lt;');
			
				var $btnNext = $('<div/>').addClass('next').html('&gt;');
					
				$(this).append($btnPrev);
				$(this).append($btnNext);

			 	// 前一张/后一张
				$btnPrev.on('click',function(){
					index --;
					showPic();
				});
				$btnNext.on('click',function(){
					index ++;
					showPic();
			})

			}
			
			// 默认索引值
			// 默认显示第一张图
			var index = 0;

			
			//判断轮播图是否轮播
			if(options.autoPlay === false){
				clearInterval(function(){
					index++;

				    showPic();
				})
			}else if(options.autoPlay === true){
				setInterval(function(){
				   index++;

				   showPic();
			},options.decation);
		  }

			function showPic(){
				if(index > opt.imgs.length-1){
					index = 0;

					// $ul.css({left:0});
				}else if(index < 0){
					index = opt.imgs.length-1;
				}

				var $len = opt.imgs.length;
				var $ImgWidth = $ul.children(0).outerWidth();
				$ul.css({width:$len*$ImgWidth});
				
				// 轮播动画
				$ul.animate({left:-opt.width*index});


				//滚动到复制图片时
				// if(index == opt.imgs.length-1){
				// 	$page.children(0).addClass('active');
				// }else{
				// 	$page.children(index).addClass('active');
				// }

				// 给页码添加高亮
				$page.children().eq(index).addClass('active').siblings().removeClass('active');
			}
		});

		// 为了链式调用
		return this;
	}

	// $.fn.extend({
	// 	lxCarousel:function(){},

	// })
})(jQuery);