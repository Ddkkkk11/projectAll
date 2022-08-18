
			// //获取box1
			// var box1 = document.getElementById("box1");
			// //获取btn01
			// var btn01 = document.getElementById("btn01");

			// //获取btn02
			// var btn02 = document.getElementById("btn02");
			// // 获取btn03
			// var btn03 = document.getElementById("btn03");
			// // 获取btn04
			// var btn04 = document.getElementById("btn04");

			// //点击按钮以后，使box1向右移动（left值增大）
			// btn01.onclick = function () {
			// 	move(box1, 800, 20, "left");
			// 	// move(box2, 800, 10);

			// };


			// //点击按钮以后，使box1向左移动（left值减小）
			// btn02.onclick = function () {
			// 	move(box1, 0, 10, "left");
			// 	// move(box2, 0, 10);
			// };
			// btn03.onclick = function () {
			// 	// move(box1, 800, 10);
			// 	move(box2, 800, 10, "left");
			// };
			// // 测试
			// btn04.onclick = function () {

			// 	// move(box2, 800, 10,"width");
			// 	// move(box2, 800, 10,"height");
			// 	move(box2, 800, 10, "width", function () {
			// 		move(box2, 400, 10, "height", function () {
			// 			move(box2, 0, 10, "top", function () {
			// 				move(box2, 100, 10, "width", function () {
			// 					move(box2, 100, 10, "height", function () {
			// 						move(box2, 200, 10, "top", function () {
			// 							move(box2, 0, 10, "left", function () {


			// 							});

			// 						});
			// 					});
			// 				});
			// 			});
			// 		});
			// 	});

			// };


		//定义一个变量，用来保存定时器的标识
		// var timer;
		// 目前我们定时器的标识由全局变量保存
		// 所有正在执行的定时器都在这个变量中
		//尝试创建一个可以执行简单动画的函数
		/*
		 * 参数：
		 * 	obj:要执行动画的对象
		 * 	attr 要执行动画的样式
		 * 	target:执行动画的目标位置
		 * 	speed:移动的速度(正数向右移动，负数向左移动)
		 * callback :回调函数 这个函数会在动画执行完毕后执行
		 */
		function move(obj, target, speed, attr, callback) {
			//关闭上一个定时器
			clearInterval(obj.timer);
			//获取元素目前的位置
			var current = parseInt(getStyle(obj, attr));

			//判断速度的正负值
			//如果从0 向 800移动，则speed为正
			//如果从800向0移动，则speed为负
			if (current > target) {
				//此时速度应为负值
				speed = -speed;
			}

			//开启一个定时器，用来执行动画效果
			obj.timer = setInterval(function () {

				//获取box1的原来的left值
				var oldValue = parseInt(getStyle(obj, attr));

				//在旧值的基础上增加
				var newValue = oldValue + speed;

				//判断newValue是否大于800
				//从800 向 0移动
				//向左移动时，需要判断newValue是否小于target
				//向右移动时，需要判断newValue是否大于target
				if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
					newValue = target;
				}
				//将新值设置给box1
				obj.style[attr] = newValue + "px";

				//当元素移动到0px时，使其停止执行动画
				if (newValue == target) {
					//达到目标，关闭定时器
					clearInterval(obj.timer);
					// 动画执行完毕 调用回调函数
					if (callback) {
						callback();
					}
				}
			}, 30);
		}
		/*
		 * 定义一个函数，用来获取指定元素的当前的样式
		 * 参数：
		 * 		obj 要获取样式的元素
		 * 		name 要获取的样式名
		 */
		function getStyle(obj, name) {
			if (window.getComputedStyle) {
				//正常浏览器的方式，具有getComputedStyle()方法
				return getComputedStyle(obj, null)[name];
			} else {
				//IE8的方式，没有getComputedStyle()方法
				return obj.currentStyle[name];
			}

		}