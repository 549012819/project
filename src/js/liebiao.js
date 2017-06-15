require(['config'],function(){
	require(['jquery','common','shouye','gwfeiru'],function($){
		let $goodslist = $('.choose');
		let pageNo = 1;
		let qty = 10;

		// 请求数据
		$.ajax({
			url:'../api/goods_b.php',
			dataType:'json',
			data:{
				page:pageNo,
				qty:qty
			},
			success:function(res){
				showList(res);

				// 显示分页
				var pageQty = Math.ceil(res.total/res.qty);

				var page_str = '';
				for(var i=1;i<=pageQty;i++){
					page_str += `<li ${res.pageNo==i?'class="active"':''}><a href="#">${i}</a></li>`
				}

				$('.pagination').html(page_str);
			}
		});

		// 点击分页切换
		$('.pagination').on('click','a',function(){
			$(this).parent().addClass('active').siblings().removeClass();
			pageNo = $(this).text();

			$.ajax({
				url:'../api/goods_b.php',
				dataType:'json',
				data:{
					page:pageNo,
					qty:qty
				},
				success:function(res){
					showList(res);
				}
			});

			return false;
		});


		function showList(res){
		    	let html = res.data.map(item=>{
						// console.log(item)
					return `<div class="nei" data-guid='${item.id}'>
					<div class="nei-tu" >					 
						<a href="#">
							<img src="../img/${item.imgurl}"alt="" id='${item.id}'>
                            </a>
					</div>
						<div class="wai">
						   <h2>${item.name}</h2>
					       <p class="price">${item.price}</p>
					       <span>数量：</span><input type="text" value="${item.qty}"/>
							<div class="btn">
								<a href="javascript:;" class="btn-primary btn-xs">加入购物车</a>
							</div>
						</div>
						</div>
					`	
				}).join('');
				$goodslist.html(html);



			 $('.btn').on('click',function(){
                var $c = $('.lnr_cont');
                var $d = $('.btn');
                $num = $c.val()*1;
                $num++;
                $c.val($d)
            })

    }


		// 获取id传入详情页
		$('.choose').on('click','img',function(){
				console.log(this)
				 $(location).attr('href','../html/xiangqing.html?id='+this.id)
		})



		    // 飞入购物车
		     $(function(){
            
            // 1）给按钮绑定点击事件
            var $spec = $('.choose');
            var $cart = $('.lnr_cart');
            console.log($cart)

            $('.choose').on('click','div a',function(){
                // var $currentLi = $(this).closest('li');
                console.log(this)
                 
                // 当前商品图片
                var $img = $(this).parent().parent().prev().children('a').children('img');
                console.log($img)

                // 把复制的图片写入页面，并设置样式
                var $cloneImg = $img.clone();
                console.log($cloneImg)
                $cloneImg.css({
                    position:'absolute',
                    left:$img.offset().left,
                    top:$img.offset().top,
                    width:$img.outerWidth(),
                    height:$img.outerHeight()
                }).appendTo('body');

                // 图片飞入动画效果
                // 动画完成后，把复制li写入购物车列表
                $cloneImg.animate({
                    left:$cart.offset().left,
                    top:$cart.offset().top + $cart.outerHeight(),
                    width:10,
                    height:10
                },function(){

                   // 删除动画图片
                   $cloneImg.remove();
                });

            });
        });

        
		     //获取Cookie
		   var goods = document.querySelector('.choose');
		   console.log(goods)

		   var goodslist = getCookie('goodslist');
			goodslist = goodslist ? JSON.parse(goodslist) : [];
		      
		   goods.onclick = function(e){
		   	 e = e || window.event;
		   	 var target = e.target || e.srcElement;
		   		   	 	
		   	 if(target.tagName.toLowerCase() === 'a'){
		   	 	 console.log(target)
		   	 	 var current = target.parentNode.parentNode.parentNode;
		   	 	 // console.log(current);
		   	 	 // var res = current.children[0].children[0];
		   	 	 // console.log(res)

		   	 	 var guid = current.getAttribute('data-guid');

		   	 	 console.log(guid,current)

		   	 	 for(var i=0;i<goodslist.length;i++){
		   	 	 	if(goodslist[i].guid === guid){
		   	 	 		goodslist[i].qty++;
		   	 	 		break;
		   	 	 	}
		   	 	 }

		   	 	 if(i === goodslist.length){
		   	 	 	var goods = {
		   	 	 		guid:guid,
		   	 	 		imgurl:current.children[0].children[0].children[0].src,
		   	 	 		name:current.children[1].children[0].innerText,
		   	 	 		price:current.children[1].children[1].innerText,
		   	 	 		qty:1
		   	 	 	};
		   	 	 	//往数组中添加商品
		   	 	 	goodslist.push(goods);
		   	 	 } 

		   	 	 setCookie('goodslist',JSON.stringify(goodslist));
		   	 }
		   }

	});
});

		    