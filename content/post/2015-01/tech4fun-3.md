---
categories:
- tech4fun
date: 2015-01-22T14:38:32+08:00
tags: 
title: "[新姿势]开源去中心密码生成器PasswordMaker"
---

在统一密码的方便但不设防和每个站独立密码的麻烦之中，各种密码管理解决方案出现了。关于这个小众需求，我个人无法接受这个密码生成方案是有“中心”的，无论这个中心是商业公司还是某个加密的数据文件。前者我要信赖他的生存能力，国外的不被墙能力和国内的哔—能力；而后者我要小心保护这个数据文件，用一个强密码乃至多层加密来保护它的同时，还要把它同步在不同的电脑和手机之间，这依然是方便和安全之间的悖论。

<!--more-->

今天我要推荐的[PasswordMaker.org](http://passwordmaker.org/)基于这样一个并不新但有效的点子：把网站名字和自己记住的一个主密码混合起来用哈希算法计算得到真正的密码。

passwordmaker的密码生成流程大致如下：

1. 配置你的profile，包括密码长度，密码字符集(英文数字还是包括符号等)，哈希算法，l33t混淆等级等。如果需要在多个设备上使用，统一配置即可
1. 访问目标网站，调用passwordmaker，它会将一级域名作为生成密码的另一个要素
1. 输入你的主密码，得到生成后的密码

过程中不涉及中心服务器或者数据库文件，所以无需担心服务器宕机，数据文件丢失，也没有引入额外的风险 —— 除了你自己的脑子之外，没有别的地方集中记录了你究竟在哪些网站有什么账号

可能的麻烦和解决对策

+ 一站多号：passwordmaker支持额外在密码的盐中混入用户名，更简单的方法是直接把用户名打在主密码里面即可
+ 同一个站点在不同的域名下有登录界面：固定最常用的那个域名，或者手工输入域名
+ 应用的密码没有对应域名：手动输入官网地址，或者干脆就输应用名字也行
+ 希望定时修改密码： 这可能是去中心唯一的缺点……但我真没见过能坚持定时修改各种小网站密码的人，反正我没这个需求。真的必须的话，可以定时更换主密码

国内的替身有花密，但既然都开源无中心了，也就没必要考虑国内了吧

最后，__不要用任何此类方法管理你的邮箱／网银／支付密码__。__不要用任何此类方法管理你的邮箱／网银／支付密码__。

----

题图：万智 【心灵操控】 

![](/img/2015-q1/m12-67.jpg)
