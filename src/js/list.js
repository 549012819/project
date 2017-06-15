require(['config'],function(){
		require(['common','jquery','lxCarousel'],function(){
		  $(function(){
			$('.carousel').lxCarousel({
				imgs:['img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg'],
				width:1920,
				height:447,
				autoPlay:true,
				btn:false,
				index:3,
				decation:3000
			}).css('background-color','#f00');
		});



						//吸顶菜单
			// $(document).scroll(function(){
			// 	if ($(document).scrollTop()>100) {
			// 		$('.top').fadeIn();

			// 	}else{
			// 		$('.top').fadeOut()

			// 	}

			// 	//按钮top
			// 	$('.icon4').on('click',function(){
			// 		$('body').stop(true).animate({scrollTop:0},500)
			// 	})

			// })

		})
	})
// require(['config'],function(){
// 	require(['jquery'],function($){
// 		$.ajax({
// 			url:'../api/list.php',
// 			dataType:'json',
// 			success:function (data){
// 				let html =data.map(item=>{
// 						console.log(item)
// 					return `<div class="nei-quan">
// 					<div class="nei-tu">
// 						<a href="">

// 							<img src="img/${item.imgurl}"alt="">
//                             </a>
// 					</div>
// 						<div class="nei-wen">
// 							<h2>${item.name}</h2>
// 							<div class="xiang">${item.xiang}</div>
// 							<p class="price">￥${item.price}.00起</p>
// 							<p>
// 								<a href="#" class="btn btn-primary btn-xs">点击进入</a>
// 							</p>
// 						</div>
// 						</div>
// 					`	
// 				}).join('');
// 				$('#neirong').html(html)
// 			}
// 		})

// 	});
// });