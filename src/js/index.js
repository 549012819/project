
require(['config'],function(){
		require(['common','jquery','lxCarousel','shouye'],function(){
		  $(function(){
			$('.carousel').lxCarousel({
				imgs:['img/01.jpg','img/02.jpg','img/03.jpg'],
				width:1920,
				height:447,
				autoPlay:true,
				btn:true,
				index:3,
				decation:3000
			}).css('background-color','#f00');
		});


						//吸顶菜单
			// $(document).scroll(function(){
			// 	if ($(document).scrollTop()>200) {
			// 		$('.top').fadeIn();

			// 	}else{
			// 		$('.top').fadeOut()

			// 	}

			// 	//按钮top
			// 	$('.icon4').on('click',function(){
			// 		$('body').stop(true).animate({scrollTop:0},500)
			// 	})

			// })
		var picList = document.querySelector('.home');
		var col = picList.querySelectorAll('.col');
		

		for(var i=0;i<col.length;i++){
			col[i].onmouseenter = function(){
				var set = this.children[1];
				console.log(this)

				clearInterval(this.timer);
				this.timer = setInterval(()=>{
					var w = set.offsetTop;

					var speed = Math.ceil(w/5);

					if(w < 1){
						clearInterval(this.timer);
						w = speed;
					}

					set.style.top = w - speed + 'px';
				},50)
			}

			col[i].onmouseleave = function(){
				var set = this.children[1];
				
				clearInterval(this.timer);
				this.timer = setInterval(()=>{
					var w = set.offsetTop;

					 var speed = Math.ceil((240-w)/5);

					if(w > 240){
						clearInterval(this.timer);
						w = 240 - speed;
					}

					set.style.top = w + speed + 'px';
				},50)
			}
		}

		
		})
	})
require(['config'],function(){
	require(['jquery'],function($){
		$.ajax({
			url:'api/indexs.php',
			dataType:'json',
			success:function (data){
				//console.log(data)
				let html =data.map(item=>{
						// console.log(item)
					return `<div class="nei">
					<div class="nei-tu">					 
						<a href="html/liebiao.html">
							<img src="img/${item.imgurl}"alt="">
                            </a>
					</div>
						<div class="wai">
						   <h2>${item.name}</h2>
					       <p class="price">￥${item.price}起</p>
					       <span>数量：</span><input type="text" value="${item.qty}"/>
							<div class="btn">
								<a href="../h6/html/liebiao.html" class="btn-primary btn-xs">加入购物车</a>
							</div>
						</div>
						</div>
					`	
				}).join('');
				$('.choose').html(html)
			}
		})

	});
});

