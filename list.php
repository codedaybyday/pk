<?php
	$index = $_POST['index'];
	$list = [
		[
			[
				'img'=>'/images/list-img.png',
				'user_name'=>'李狗蛋',
				'portrait'=>'/images/portrait.jpg',
				'post_date'=>'2016-12-30',
				'like'=>false,
				'like_num'=>50,
				'des'=>'好像ch'
			],
			[
				'img'=>'/images/list-img.png',
				'user_name'=>'李狗蛋',
				'portrait'=>'/images/portrait.jpg',
				'post_date'=>'2016-12-30',
				'like'=>false,
				'like_num'=>50,
				'des'=>'好像ch'
			],
			[
				'img'=>'/images/list-img.png',
				'user_name'=>'李狗蛋',
				'portrait'=>'/images/portrait.jpg',
				'post_date'=>'2016-12-30',
				'like'=>false,
				'like_num'=>50,
				'des'=>'好像ch'
			],
			[
				'img'=>'/images/list-img.png',
				'user_name'=>'李狗蛋',
				'portrait'=>'/images/portrait.jpg',
				'post_date'=>'2016-12-30',
				'like'=>false,
				'like_num'=>50,
				'des'=>'好像ch'
			]
		],
		[
			[
				'img'=>'/images/list-img.png',
				'user_name'=>'李狗蛋sadsdasda',
				'portrait'=>'/images/portrait.jpg',
				'post_date'=>'2016-12-30',
				'like'=>false,
				'like_num'=>50,
				'des'=>'好像ch'
			],
			[
				'img'=>'/images/list-img.png',
				'user_name'=>'李狗蛋dsdsadsdfddg',
				'portrait'=>'/images/portrait.jpg',
				'post_date'=>'2016-12-30',
				'like'=>false,
				'like_num'=>50,
				'des'=>'好像ch'
			],
			[
				'img'=>'/images/list-img.png',
				'user_name'=>'李狗蛋ffffffffffffffff',
				'portrait'=>'/images/portrait.jpg',
				'post_date'=>'2016-12-30',
				'like'=>false,
				'like_num'=>50,
				'des'=>'好像ch'
			],
			[
				'img'=>'/images/list-img.png',
				'user_name'=>'李狗蛋fffffffff',
				'portrait'=>'/images/portrait.jpg',
				'post_date'=>'2016-12-30',
				'like'=>false,
				'like_num'=>50,
				'des'=>'好像ch'
			]
		]
	];
	echo json_encode($list[$index]);
?>