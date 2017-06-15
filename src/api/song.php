<?php
	// 引入其他php文件
	include 'connect.php';

	$username = isset($_GET['username']) ? $_GET['username'] : '';
	$password = isset($_GET['password']) ? $_GET['password'] : '';

	// md5加密
	$password = md5($password);

	$sql = "select username from user where username='$username' and password='$password'";
	
	// 获取查询结果
		$res = $conn->query($sql);

		if($res->num_rows>0){
			echo "ok";
		}else{
			echo "no";
		}

	//关闭连接
	$conn->close();
?>