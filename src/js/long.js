require(['config'],function(){
	require(['jquery'],function(){
		$('#btnReg').on('click',function(){
			$.ajax({
				url:'../api/song.php',
				data:{
					username:$('#username').val(),
					password:$('#password').val()
				},
				success:function(res){
					console.log(res);
					if(res === 'ok'){
						window.location.href='http://localhost/h6/index.html';
					}else{
						alert('该用户已存在')
					}
				}
			});

		});



		var username = document.querySelector('#username');
		var password = document.querySelector('#password');
		var btn = document.querySelector('#btnReg');
		var check = document.querySelector('#check');
		console.log(username,password,btn,check)

			btn.onclick = function(){
				var _username = username.value;
				var _password = password.value;
				// console.log(_username,_password)

				var str1 = 'username=' + _username;
				var str2 = 'password=' + _password;
				if(check.checked){
					var now = new Date();
					now.setDate(now.getDate() + 7);

					str1 += ';expires=' + now.toUTCString();
					str2 += ';exprires=' + now.toUTCString();
				}

				document.cookie = str1;
				document.cookie = str2;

				// location.href = 'html/*.html'
				// console.log(str1)
			} 

			var cookies = document.cookie;
			console.log(cookies)

			if(cookies){
				var arr = cookies.split('; ');
				// console.log(arr)

				arr.forEath(function(item){
					var temp = item.spilt('=');
					if(temp[0] === 'username'){
						location.href = 'html/*.html';
					}


				});
			}
		

	});
});