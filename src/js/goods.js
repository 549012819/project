require(['config'],function(){
	require(['common','jquery','gwfeiru','shouye'],function(){
		var carList = document.querySelector('.carlist');
		var sub = document.querySelector('.subprice');
		var btns = document.querySelector('#btn');
		console.log(sub)

		//获取cookie商品信息
		var goodslist = getCookie('goodslist');
		goodslist = goodslist ? JSON.parse(goodslist) : [];
		console.log(goodslist)
		show();

		function show(){
			//总价
			var totalPrice = 0;

			var ul = document.createElement('ul');

			ul.innerHTML = goodslist.map(function(goods){
				//计算总价
				totalPrice += goods.price*goods.qty;
				console.log(goods.price)
				return `<li data-guid="${goods.guid}">
				    <input type="checkbox" checked="checked" />
					<img src="${goods.imgurl}" alt="" />
					<div class="good_a">产地：韩国</div>
					<span class="good_b">适用税率11.9%</span>
					<span class="good_c">税费￥11.66</span>
					<h2>${goods.name}</h2>
				    <p class="price">${goods.price}&times;${goods.qty}</p>
					<span class="btn">&times;</span>
				</li>`

				// if(checked.checked){
				// 	var now = new Date();
				// 	now.setDate(now.getDate()+7);
				// 	document.cookie='name='${goods.name}';expires=' + now.toUTCString();
				// }

			}).join('');

			// console.log(totalPrice)
			carList.innerHTML = '';
			carList.appendChild(ul);
			sub.innerHTML = totalPrice.toFixed(2);
			console.log()
		}

		//清空购物车
		btn.onclick = function(e){
			removeCookie('goodslist');

			//清空节点
			carList.innerHTML = '';
			price.innerHTML = '';

			e.preventDefault();
		}

		//删除单个商品
		carList.onclick = function(e){
			e = e || window.event;
			var target = e.target || e.srcElement;

			if(target.className === 'btn'){
				var current = target.parentNode;
				var guid = current.getAttribute('data-guid');

				for(var i=0;i<goodslist.length;i++){
					if(goodslist[i].guid === guid){
						goodslist.splice(i,1);

						//重新写入cookie
						var now = new Date();
					    now.setDate(now.getDate()+7);
						setCookie('goodslist',JSON.stringify(goodslist),now);

						break;
					}
				}

				show();
			}
		}
	})
})