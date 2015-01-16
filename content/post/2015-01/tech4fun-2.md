---
categories:
- tech4fun
date: 2015-01-16T11:30:42+08:00
tags:
title: "[新姿势]前端革命，革了再革：WebPack"
---

时光回溯到2009年，CommonJS规范和NodeJS都还在襁褓之中，离Bower诞生还有三年时间，Ruby还统治着github，CoffeeScript在年末提交了第一个commit……

备受加载顺序，依赖关系折磨的前端开发，开始站起来试图解决日益复杂的前端开发的种种问题，RequireJS降临了。如果说NodeJS吹响了JS全栈革命的号角，那么同时发生的前端模块化革命便是RequireJS的历史使命。

五年过去了，RequireJS战胜了同级生LabJS，带起了中国小伙伴SeaJS。今天看来，它过时了。RequireJS以及AMD重浏览器端，轻打包编译，没有及时跟进包管理体系，almond没有成为标配而只是周边……诞生太早的RequireJS，虽然成为了前端模块化的某种程度上的事实标准，但难掩其缺点。

<!--more-->

五年间，NodeJS成为了服务端以及脚本的一代翘楚，NPM的成功让大家意识到一个集中式的依赖／包管理体系的重要性，Bower应运而生，还有试图将CMD带到前端领域，统一前后端包格式的Browerify等等，大量的前端工具爆发式地出现，WebPack是其中的(又)一款模块打包工具。

![](/img/2015-q1/webpack.png)

+ 模块来源广泛，支持包括npm/bower等等的各种主流模块安装／依赖解决方案
+ 模块规范支持全面，amd/cmd以及shimming等一应具全
+ 浏览器端足迹小，移动端友好，却对热加载乃至热替换有很好的支持
+ 插件机制完善，实现本身实现同样模块化，容易扩展

webpack官网   
http://webpack.github.io/

我的前端技术栈scaffold （bower+webpack+less+gulp）  
https://github.com/mcfog/glimmervoid

