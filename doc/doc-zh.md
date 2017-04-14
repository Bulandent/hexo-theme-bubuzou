## 文章变量

文章变量可以定义在md文件的开头。可以定义文章的标题，时间，归档的标签，归档的分类，文章描述，文章出处以及文章的示例等。

```md
title: background属性
date: 2017-3-10 11:19:04
tags: css
desc: css的复合属性background，以及background-repeat,background-position,background-origin等子属性的介绍。
categories:
  - css
from: https://bitsofco.de/the-background-properties/
demo: ../../../demos/201703/background.html
```

## 标题

实际上，Hexo-theme-bubuzou 只支持两种标题：`h2` 一级标题，`h3` 二级标题，也就是分别使用 `##` 和 `###` 来表示。之所以这么处理，是因为就个人感觉而言，我们不应该为文章设置过多的层级消耗读者的阅读精力。配置了这样的标题的页面会自动生成页面目录。

![页面目录](https://raw.githubusercontent.com/Bulandent/hexo-theme-bubuzou/master/source/images/cate.png)

## 文章摘要

如果你想创建文章摘要用于向读者展示文章的核心内容，那么需要在文章摘要之后其他内容之前添加 HTML 注释标签 `<!--more-->`，使用方法如下图所示：

![文章摘要](https://raw.githubusercontent.com/Bulandent/hexo-theme-bubuzou/master/source/images/abstract.png)

## 评论插件

Hexo-theme-bubuzou 支持两种评论插件：Disqus 和 Duoshuo. 请在 `theme/_config.yml` 文件中做如下配置:

```yaml
duoshuo: bubuzou
```

## 警告块

使用警告块需要 `div` 标签和 `tip` 类名：

```html
<div class="tip">
    在ECMAScript 5的strict模式下，这种情况的`this`已经被规定不会指向全局对象了，而是`undefined`
</div>
```

![alert](https://raw.githubusercontent.com/Bulandent/hexo-theme-bubuzou/master/source/images/alert.png)

## 搜索

使用搜索功能需要在站点的配置文件_config.yml里配置如下：
```
# search
search:
  path: search.xml
  field: post
```

## 归档页面显示所有文章
需要安装`hexo-generator-archive`插件支持，然后在全局的`_config.yml`里配置：
```
archive_generator:
    per_page: 0
    yearly: false
    monthly: false
    daily: false
```