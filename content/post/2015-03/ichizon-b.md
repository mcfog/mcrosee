---
categories:
- ichizon
date: 2015-03-16T16:17:26+08:00
tags: []
title: "mcfog的一己之见 X"
---

<!--================================!-->

## 有哪些知名的网站是通过建站程序或建站程序二次开发搭建的？

[问题](http://segmentfault.com/q/1010000002503122) by [路西llq](http://segmentfault.com/u/llq)

我想建一个兴趣站，类似创业邦，时光网，铁血网这样的网站能通过建站程序做到吗？我目前有学过建站，仍感觉无从下手，想知道建站程序能不能胜任，或者又只能等团队组建好了再开始做？

<!--more-->

---

## 我的看法

题主已经问过多次此类问题了

我想说无论你问多久，问什么，你的站都不会突然就建起来了

如果你打算自己搞定技术方面，那么就赶紧去学技术  
如果你打算找人搞定技术方面，那么就赶紧去找技术合伙人


如果你拿不定主意，我建议找人搞定。

至于到底用开源合适还是自己写合适，这完全看你的预算和规划，虽然可能95%的情况都是开源合适


---

<!--================================!-->

## js中如何继承实现Array的子类

[问题](http://segmentfault.com/q/1010000002557358) by [chinesedfan](http://segmentfault.com/u/chinesedfan)

试想需要实现一个数组的子类ZeroArray，其构造函数接收一个长度参数n，自动初始化数组元素都为0。

我试图继承原生的Array类型，成员变量通过apply()方法窃取，成员方法则通过原型链引用。代码如下：

    function ZeroArray(n) {
        // 构造函数窃取
        Array.apply(this);
    
        // 自动塞入0元素
        for (var i = 0; i < n; i++) {
            this.push(0);
        }
    }

    // 利用空函数作为过渡，ZeroArray原型的原型指向Array.prototype
    // 既建立原型链，又不影响Array.prototype本身，而且防止Array构造函数重复调用两次
    var F = function() {};
    F.prototype = Array.prototype;
    ZeroArray.prototype = new F();
    ZeroArray.prototype.constructor = ZeroArray;
    
那么问题来了：

    Object.getOwnPropertyDescriptor(new Array(), "length")
    // 输出：Object {value: 0, writable: true, enumerable: false, configurable: false}
    Object.getOwnPropertyDescriptor(new ZeroArray(3), "length")
    // 输出：Object {value: 3, writable: true, enumerable: true, configurable: true}
    
为什么两者的length属性enumerable/configurable会不同？是不是因为Array本质上并不是Object？

---

## 我的看法

单纯的解决方案只要脚痛医脚就好 `Object.defineProperty(this, 'length', {enumerable: false, configurable: false, writable: true});`

具体原因我观察了一下Array的行为

```
> Array.call({})
[]
> Array.call(undefined)
[]
```

瞧，this是啥完全不影响Array工作，Array这个constructor应该是类似

```
function Array() {
  var array = [Native Code];
  return array;
}
```
的形式（并非修饰this的风格），所以代码里的`Array.apply`完全没有起到效果。

祭出翻ECMA大法，很快就能找到标准里对应的行为

[15.4.1 The Array Constructor Called as a Function](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.1)

length的行为也有[描述](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.5.2)

关于Array究竟是不是Object，答案毫无疑问是肯定的，JS中除了原始值(null/undefined/数字/布尔/字符串)之外一切皆对象

----------

在我看来，题主掉到“以其他OO语言经验看JS”的大坑里了，有大量的材料会把人往这个坑里带，他们标题往往叫“JS OOP指南／入门／精通”，“JS实现继承的X种方法”等等

实际上，如果需求只是“接收一个长度参数n，自动初始化数组元素都为0”的话，更好的实现可能是

```
function makeZeroArray(n) {
  var arr = [];
  while(n-- > 0) {
    arr[arr.length] = 0;
  }

  return arr;
}
```

继承在JS中并非一等居民，而是普通的一个模式而已，合适用就用，不合适没必要硬套

补充一下，JS中没有类的概念，JS中没有类的概念，JS中没有类的概念。
JS里，对象才是一等居民，我们写的是方便地创建某种对象的构造器，而不是类


---

<!--================================!-->

## 登录系统怎么样才是最安全的

[问题](http://segmentfault.com/q/1010000000575911) by [woshicixide](http://segmentfault.com/u/woshicixide)

现在很多公司关于网站登录上都是怎么设计的，怎么样才能确保万无一失

---

## 我的看法

没有万无一失，只有见招拆招

安全是从操作系统开始到开发人员，管理人员个人素养全方位的命题

+ 操作系统：关注业界新闻，及时打补丁。正确配置，权限最小化，强密码定期更换
+ 数据库/web server：及时打补丁。正确配置，权限最小化，强密码定期更换
+ 应用逻辑：科学的hash，收拢的鉴权服务，最小知识原则，XSS和各种协议劫持的防止，频率限制，恶意行为和异常流量监测
+ 传输协议：https、证书等
+ 开发人员：不要把密码存在文件里，更不要上传到github（别笑），不要记住密码，不要统一密码，不要把密码写在邮件里，不要把密码写在笔记服务里
+ 开发人员/管理人员：个人信息安全，不要被乱点文件，不要乱装软件。社工知识，不要相信同事在邮件和IM上和你说让你传一些敏感信息给他，或者他传东西让你点开（不用windows是个更好的选择）。如果和360没有合作关系就不要装360。

还有如果公司用WIFI，不要广播SSID。不要用带着办公VPN、邮箱、IM等任何工作有关的账户的电脑连接其他免费WIFI，星巴克WIFI等WIFI热点

好累，简直列不完，就先告一段落吧

---



这是我在 [SegmentFault](http://segmentfault.com/) 上的问题回答选编，遵循[CC BY-SA 3.0 CN](http://creativecommons.org/licenses/by-sa/3.0/cn/) 分享

题图：万智【拒斥恶行】

![](/img/2015-q1/plc12.jpg)




