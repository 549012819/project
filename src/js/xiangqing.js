require(['config'],function(){
	require(['jquery','common','gdszoom','shouye','gwfeiru'],function($){
		 
		 $(function(){
            
            // 1）给按钮绑定点击事件
            var $spec = $('.main_b');
            var $cart = $('.cart');
            console.log($cart,$spec)

            $spec.on('click','div a',function(){
                console.log(this)
                 
                // 当前商品图片
                var $img = $('.spec').children('img');
                console.log($img)

                // 把复制的图片写入页面，并设置样式
                var $cloneImg = $img.clone();
                $cloneImg.css({
                    position:'absolute',
                    left:$img.offset().left,
                    top:$img.offset().top,
                    width:$img.outerWidth(),
                    height:$img.outerHeight()
                }).appendTo('body');

                // 图片飞入动画效果
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



         //接收id
         var a = location.search.split('=')[1];
            console.log(a)
           $.ajax({
               url:'../api/id.php',
               data:{
                   id:a
               },
              success:function(res){
                    JSON.parse(res)
                 // console.log(JSON.parse(res))

                 showList(res);   
              }
           })
           return false;

           function showList(res){
          var set = JSON.parse(res)
                let html = set.map(item=>{
                        // console.log(item)
                    return `
                    <div class="info">
                <div class="wrap">
                    <div class="goodblock"> 
                        <div class="good_left fl">
                            <div class="spec">
                                    <img src="../img/${item.imgurl}" data-big="../img/${item.imgurl}">
                            </div>
                                 <i class="prev"></i>
                                 <div class="items">
                                            <img src="../img/${item.imgurl}" alt="">
                                            <img src="../img/nytz1.jpg" alt="">
                                            <img src="../img/nytz2.jpg" alt="">
                                            <img src="../img/nytz3.jpg" alt="">
                                            <img src="../img/nytz4.jpg" alt=""> 
                                            <img src="../img/nytz5.jpg" alt="">     
                            </div>
                         </div>
                         <div class="items_a "></div>
                        <div class="good_mid fl">
                           <div class="goods">杭州保税区一号仓发货</div>
                            <div class="good_a ">
                                <span style="color: #e5004b;">下单送洗衣皂</span>
                                <span style="color: #ccc;margin: 0 5px;"> | </span>
                                ${item.name}
                            </div>
                            <div class="good_b">
                                <div class="good_b_a fl">促销价</div>
                                <div class="good_b_bs"><span style=
                                "font-size:14px;">￥</span>${item.price}</div> 
                              <div class="good_b_c fl"><span class="good_let" title"整点抢购">整点抢购</span>还有<span class="good_sale">1天23时45分45秒</span>结束</div> -->
                                 <div class="good_b_d ">市场价</div>
                                <div class="good_b_e "><span style="text-decoration: line-through;">￥328</span>(为您节省321.8元)</div>
                                <div class="good_b_d ">促销</div>
                                <div class="good_b_f ">
                                    <span>全场下单送绵心洗衣皂</span>
                                    <span>加6.9送防溢乳垫12片</span>
                                </div>
                            </div>
                            <div class="good_pd">
                                <div class="good_pd_a fl">运费</div>
                                <div class="good_pd_b">
                                    <div class="fl" id="sellerinfo" sellerid="101" style="line-height: 25px;margin-right: 10px;">至</div>
                                    <div class="good_pd_c">
                                        <input type="text" value="北京市直辖区">
                                        <i></i>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="good_c ">
                                <div class="good_c_a">颜色</div>
                                <div class="good_c_b ">
                                    <ul>
                                    <li title="红色">
                                    <a href="#">红色</a></li>
                                    <li title="白色"><a href="#">白色</a></li>
                                    <li title="蓝色"><a href="#">蓝色</a></li>
                                    <li title="黑色"><a href="#">黑色</a></li>
                                    <li title="绿色"><a href="#">绿色</a></li>
                                </ul>
                                </div>
                            </div>
                            <div class="good_d ">
                               <div class="good_d_a">购买数量</div>
                                 <div class="good_d_b">
                                        <i class="d_a">-</i> 
                                         <input type="text" value="0" class="set">
                                         <i class="d_b">+</i> 
                                  </div>
                            </div>
                            <div class="good_e">
                               <div class="good_e_a">
                                <a href="javascript:;">加入购物车</a>
                               </div>
                                <div class="good_e_b ">
                                <a href="#">客户端下单</a>
                                </div>
                            </div>
                    </div>        
      </div>
    </div>
    </div>
                   `   
                }).join('');
                $('.main_b').html(html)

                 //放大镜
            $(function(){
            $('.spec').gdszoom({
            width:420,height:420
         });

         $('.items img').click(function(){
            $('.spec img').attr({
                'src':this.src,
                'data-big':this.src
            })
        })
         
         })

            var $input;
            var $num;

            $('.d_a').on('click',function(){
                if($num <=1){

                    $num=1;
                }
                    var c = $(this).next().html()*1;
                    $input = $(this).next('input');
                    $num = $input.val()*1;
                    $num--;
                    $input.val($num);   
                
            })
            $('.d_b').on('click',function(){
                var c = $(this).prev().html()*1;
                $input = $(this).prev('input');
                $num = $input.val()*1;
                $num++;
                $input.val($num)
            })
           
           $('.good_e_a').on('click',function(){
               var $set = $('.set');
               var $b = $set.val()*1;
               var $hos = $('.hos').val()*1
              
               // console.log($b,$hos,$set)
               $('.hos').val($b+$hos);

           })

    


        //标签切换
       var tab = document.querySelector('.shopping');
       var title = tab.querySelector('.title').children;
       var content = tab.querySelector('.content').children;
       console.log(tab,title,content)

        index=0;
            for(var i=0;i<title.length;i++){
                content[i].style.display = 'none';
                if(i === index){
                    title[i].classList.add('active');
                    content[i].style.display = 'block';
                }

                title[i].onclick = (function(idx){
                    return function(){
                        for(var i=0;i<title.length;i++){
                            content[i].style.display = 'none';
                            title[i].classList.remove('active')
                        }
                        title[idx].classList.add('active');
                        content[idx].style.display = 'block';
                    }
                })(i);
            }
        };    

	 })
});


