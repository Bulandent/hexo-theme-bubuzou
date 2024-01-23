![hexo-theme-bubuzou](https://bubuzou.oss-cn-shenzhen.aliyuncs.com/blog/202010/theme-bubuzou.png)

## 更新日志

### 2024-01-23

- 变更站点和文章访问统计脚本为[不蒜子](https://ibruce.info/2015/04/04/busuanzi/)

### 2021-4-4

- 主题更变-暗色系
- 文章页目录支持 3 级

### 2020-11-06

- 加载优化
- 文章页目录插件重写

### 2020-08-13

- 文章页目录栏 bug 修复

### 2019-03-29

- 文章页的右侧去掉“分类归档”、“标签云”和“最新文章”，右侧整块为文章目录
- 文章评论系统和访问统计改成基于 `leancloud` 的 `valine`
- 手机端头部菜单精简
- 手机端去掉右侧导航栏

### 2017-07-21

- bubuzou.css 规范化了`css`文件

### 2017-07-12

- 评论系统由网易云跟帖改成了畅言

### 2017-06-25

- 增加了文章访问次数的统计功能

### 2017-06-07

- 文章目录优化，能够自适应定位

## 说明

hexo-theme-bubuzou 主题是根据 hexo 里 Apollo 主题改编而来的，[主题效果](http://bubuzou.com/)

## 安装

想要把 hexo 的主题应用到自己的博客上，需要在本地先构建好 hexo 所依赖的环境。[hexo 使用文档](https://hexo.io/zh-cn/docs/index.html)
大致的步骤是这样的：

- 安装 git
- 安装 node.js
- 安装 hexo

```
$ npm install -g hexo-cli
```

- 构建站点

```
    $ hexo init d://Blog
    $ cd d://Blog
    $ npm install
```

- clone 主题
  这个时候已经构建好了站点，但是使用的主题是 hexo 默认的`landscape`。所以如果需要变更为`bubuzou`主题，就需要从 github 上 clone 到本地，修改文件名为`bubuzou`，并且放到`d://Blog/theme`下
  [hexo-theme-bubuzou 主题](https://github.com/Bulandent/hexo-theme-bubuzou)
- 修改主题
  然后把 blog 目录下的`_config.yml`配置文件里的`theme: landscape`改成`bubuzou`即可
- 安装依赖包
  hexo 里每个不同的主题所依赖的包都不尽相同。安装的默认主题已经包含了一些依赖包，但是对于`bubuzou`这个主题来说是不够的，所以还需要安装以下几个:

```
    npm install --save hexo-renderer-jade hexo-generator-feed hexo-generator-sitemap hexo-browsersync hexo-generator-archive
    npm install --save hexo-deployer-git hexo-generator-json-content hexo-generator-search
```

## 主题说明文档

- [中文文档](https://github.com/bulandent/hexo-theme-bubuzou/blob/master/doc/doc-zh.md)

## 协议

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
