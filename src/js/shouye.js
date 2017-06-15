require(['config'],function(){
	require(['common','jquery'],function(){
		 var top = document.querySelector('.top_b');
			var user = document.querySelector('.user_con');
			var top_c = document.querySelector('.top_c');
			var app = document.querySelector('.app');
			var top_d = document.querySelector('.top_d');
			var service = document.querySelector('.service');
			// var nav = document.querySelector('.navCon-cate');
			// var menu = document.querySelector('.catemenu');

			
			top.onmouseenter = function(){
				user.style.display = 'block';
			}
			top.onmouseleave = function(){
				user.style.display = 'none';
			}
			top_c.onmouseenter = function(){
				app.style.display = 'block';
			}
			top_c.onmouseleave = function(){
				app.style.display = 'none';
			}
			top_d.onmouseenter = function(){
				service.style.display = 'block';
			}
			top_d.onmouseleave = function(){
				service.style.display = 'none';
			}
			//  nav.onmouseenter = function(){
			// 	menu.style.display = 'block';
			// }
			// nav.onmouseleave = function(){
			// 	menu.style.display = 'none';
			//  }
			

	})
})
			

