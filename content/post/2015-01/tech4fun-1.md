---
categories:
- tech4fun
date: 2015-01-09T13:26:52+08:00
tags:
title: "[新姿势]我用过的静态站点生成器们"
---

随着诸如github pages的静态托管服务，静态站点生成器在近年有了极大的发展，静态生成+托管对托管环境要求低、维护简单、可配合版本控制，但又灵活多变，在程序员和geek群体中大有超越WordPress等动态博客程序的势头

近年来个人也好项目也好，我也经常要用到静态生成器，这里把我玩过的静态生成器挨个做个简评

_才、才不是什么玩博客程序的时间超过了写博客的时间呢_

<!--more-->

### Jekyll / OctoPress

[Jekyll](http://jekyllrb.com/)和[OctoPress](http://octopress.org/)是最流行的静态博客系统。OctoPress是基于Jekyll的扩展，进一步方便了写作。

在主题、插件数量上和wordpress一样对竞争对手有压倒性优势。上手简单，周边工具丰富。

推荐给想更多把时间花在写字而不是折腾博客的人。

缺点主要是文章量大的时候生成速度慢。

### Hexo

[Hexo](http://hexo.io/)是NodeJS编写的静态博客系统，其生成速度快，主题数量相对也比较丰富。是OctoPress的优秀替代者。

另外由于Node社区丰富的“方言”，写主题时天然有Jade/Stylus/Less等各种方言支持。

推荐给希望生成速度快，主要写博客的人

我用Hexo来写我的技术博客 <http://press.mcfog.wang/>


### Sculpin

[Sculpin](https://sculpin.io/)是PHP的静态站点系统。Hexo和Octopress专注于博客，而有时候我们的需求不仅仅是博客，而是有类似CMS的页面生成需求。Sculpin是一个泛用途的静态站点生成系统，在支持博客常见的分页、分类tag等同时，也能较好地支持非博客的一般页面生成。
但Sculpin没有主题功能，没有严格分离内容和模版，第三方提供的现成模版也很少。

推荐给没有主题需求，希望自己写页面，且需要博客之外的页面内容的人

缺点是生成速度一般，第三方扩展少


### Hugo

[Hugo](http://gohugo.io/)是GO语言编写的静态站点系统。其生成速度快，且在较好支持博客和非博客内容的同时提供了比较完备的主题系统。无论是自己写主题还是套用别人的主题都比较顺手。

推荐给重视生成速度且希望具备一定的灵活性的人

缺点是至今分页功能还没官方发布（还在下个release，有非官方的方案）

这是本站<http://inside.mcfog.wang/>的生成器

## 总结

|           	| 语言   	| 活跃度 	| 开箱即用 	| 主题数量 	| 主题系统 	| 生成速度 	| 博客适应性 	| 非博客适应性 	|
|-----------	|--------	|--------	|----------	|----------	|----------	|----------	|------------	|--------------	|
| Jekyll    	| Ruby   	| S      	| B        	| A        	| A        	| C        	| A          	| C            	|
| OctoPress 	| Ruby   	| C      	| A        	| S        	| A        	| C        	| A          	| C            	|
| Hexo      	| NodeJS 	| B      	| A        	| A        	| B        	| A        	| A          	| B            	|
| Sculpin   	| PHP    	| C      	| B        	| C        	| C        	| B        	| B          	| A            	|
| Hugo      	| GO     	| B      	| B        	| B        	| A        	| S        	| B          	| A            	|


最后推荐一个静态站点生成器的统计列表 <https://staticsitegenerators.net>，有机会准备玩玩<http://metalsmith.io>

----

题图：万智《Generator Servant》电机仆役

![](/img/2015-q1/m15-143.jpg)
