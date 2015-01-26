---
categories:
- ichizon
date: 2015-01-25T22:01:29+08:00
tags: []
title: "mcfog的一己之见4th"
---
<!--================================!-->

## 一个优秀的前端工程师应该具备什么样的技能？

[问题](http://segmentfault.com/q/1010000002504410?_ea=121396) by [侯志强](http://segmentfault.com/u/houxiaoqiang)

一个优秀的前端工程师应该具备什么样的技能，应该从哪些方面来提高自己的专业技能还有软实力？

<!--more-->
---

## 我的看法

+ 学力

  - 迅速了解新技术，判断适用场景
  - 在合适的时机把玩新技术，迅速熟悉
  - 在合适的时机引入新技术，提高生产效率

+ 解决问题

  - google
  - 寻找和选择合适的解决方案
  - 判断解决方案靠谱程度

+ 沟通

  - 说服队友放弃不靠谱方案
  - 对产品暴击
  - 对设计协商
  - 对后台撒娇
  - 带小朋友提高

+ 个人效率

  - 效率工具的发现与精通
  - 自己实现小工具小脚本
  - 时间管理
  - 个人知识管理

------

说穿了任何技术岗位不都一样么！

---

<!--================================!-->

## 高效的js，jquery语句写法

[问题](http://segmentfault.com/q/1010000000633373) by [zzzddd](http://segmentfault.com/u/zzzddd)

    $("#check_order").on("click", function() {
        $(".merchant_page").hide();
        $(".cart_page").show();
    });

    $(".continue").on("click", function() {
        $(".merchant_page").show();
        $(".cart_page").hide();
    });

    $(".close").on("click", function() {
        $("#shade").hide();
    });

我现在的代码像这样一坨大便一样。。。

请问各位如何写成比如像jquery插件那样的一些写法，比如像这样的 `function(id){$("#"+id).on("click",function(){.....})}` 等等，有什么教程或者有什么书关于这种的嘛？

谢谢各位了


---

## 我的看法

美刀是个很重的函数，尽量其缓存结果

```js
var $merchantPage = $(".merchant_page");
var $cartPage = $(".cart_page");
var $shade = $("#shade");
$("#check_order").on("click", function() {
    $merchantPage.hide();
    $cartPage.show();
});

$(".continue").on("click", function() {
    $merchantPage.show();
    $cartPage.hide();
});

$(".close").on("click", function() {
    $shade.hide();
});
```

代码要有语义，比如很明显例子里有类似切换页面的逻辑，有个名字会让代码可读性提高很多

```js
var $merchantPage = $(".merchant_page");
var $cartPage = $(".cart_page");
var $shade = $("#shade");
$("#check_order").on("click", showCart);

$(".continue").on("click", showMerchant);

$(".close").on("click", closePage);

function closePage() {
    $shade.hide();
}
function showCart() {
    $merchantPage.hide();
    $cartPage.show();
}
function showMerchant() {
    $merchantPage.show();
    $cartPage.hide();
}
```

最后dom有个范围，有个闭包，有个chain，再加一行点睛的注释，代码就非常漂亮，主次分明了

```js
//商品购买模块
(function($view) {
	var $merchantPage = $view.find(".merchant_page");
	var $cartPage = $view.find(".cart_page");
	var $shade = $view.find("#shade");

	$view
		.on("click", "#check_order", showCart)
		.on("click", ".continue", showMerchant)
		.on("click", ".close", closePage)
	;

	function closePage() {
	    $shade.hide();
	}

	function showCart() {
	    $merchantPage.hide();
	    $cartPage.show();
	}

	function showMerchant() {
	    $merchantPage.show();
	    $cartPage.hide();
	}

})($(document.body))
```


<!--================================!-->

## Javascript是否需要私有变量？

[问题](http://segmentfault.com/q/1010000000525835) by [JerryZou](http://segmentfault.com/u/jerryzou)

总所周知的是，`js`在目前流行的标准中还不支持私有变量。我在阅读一篇讲**`js`模块化**很不错的文章《[JavaScript Module Pattern: In-Depth](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html)》时，看到一则谴责作者所说的模块化以及大量运用私有变量违反`js`设计初衷的留言，留言如下：

> Comment by **steida** — March 15, 2010
Module pattern is useless JavaScript mannerism junk. It’s simple product of **misunderstanding of JavaScript**. Hiding properties and methods in anonymous function does not make sense, except two reasons:  
1). I need another variable, and no scope pollution. It’s useful for jQuery- (function($) {})(jQuery), for instance.  
2). micro optimization, rarely useful, and only just because Internet Explorer.   
Anybody who thinks “private in JavaScript is nice” suffer from **false illusion of “safe code”**. There is no such thing in dynamic language which JavaScript really is.   
If you want method or property as “private”, just mark it in documentation, or use underscore prefix (google closure uses it even as suffix). It’s enough to tell our code readers: “Do not call or use this, and do not except that this “private” property will work forever.   
From: [http://ajaxian.com](http://ajaxian.com/archives/a-deep-dive-and-analysis-of-the-javascript-module-pattern)

其实我目前的想法跟这位评论者**steida**有些相似，因为我觉得

1. 那些可能对安全性有要求的操作就不应该放在前端做。
2. 私有变量的确可以提供有效的抽象层次，像`js`中一直有私有成员用的变量名用下划线开头。我认为这样足够了，而不需要用闭包来专门做出真的私有变量。

各位对`js`在中实现私有变量有什么看法？

---

## 我的看法

我是下划线／POJO党。闭包私有变量不仅如题主所说无法提供所谓的安全，在断点调试的时候更是噩梦。

很多编程pattern的问题是：先假设别的程序员都是傻子或者恶棍，然后试图写出针对性的防御性代码。这是病，得治。防御性代码应当是“如果事情变糟糕了，那么就崩溃”，而不是“禁止你买菜刀，防止你砍人”


---


这是我在 [SegmentFault](http://segmentfault.com/) 上的问题回答选编，遵循[CC BY-SA 3.0 CN](http://creativecommons.org/licenses/by-sa/3.0/cn/) 分享

题图：万智【洁斯凯学僧】

![](/img/2015-q1/ktk14.jpg)
