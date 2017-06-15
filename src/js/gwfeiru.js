require(['config'],function(){
	require(['common','jquery'],function($){
		
        var msg = document.querySelector('.top_left');

        var cookies = document.cookie;

        if(cookies){
            var arr = cookies.split('; ');

            arr.forEach(function(item){
                var temp = item.split('=');
                if(temp[0] === 'username'){
                    msg.innerHTML = temp[1] + '先生，欢迎您的到来。<button>退出</button>'
                }  
            })
        }

        msg.onclick = function(e){
            e = e || window.event;
            var target = e.target || e.srcElement;

            if(target.tagName.toLowerCase() === 'button'){
                var now = new Date('2017-6-22');

                document.cookie = 'username=null;expires=' + now.toUTCString();

                location.href = 'denglu.html';
            }
        }
	})
})