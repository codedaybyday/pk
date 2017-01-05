<?php
	$data = array();
	$leftArr = array();
	$rightArr = array();
	$leftArr['img'] = '/images/face_1.png';
	$leftArr['rate'] = 0.52;
	$leftArr['dish_num'] = 240;
	$leftArr['id'] = 122;
	$leftArr['dish_name'] = '南红烧肉';

	$rightArr['img'] = '/images/face_2.png';
	$rightArr['rate'] = 0.48;
	$rightArr['dish_num'] = 200;
	$rightArr['id'] = 120;
	$rightArr['dish_name'] = '北红烧肉';

	$data['left'] = $leftArr;
	$data['right'] = $rightArr;
	$data['des'] = '这是描述内容啊哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈啊哈哈';
	$data['index'] = 0;
	echo json_encode($data);
?>