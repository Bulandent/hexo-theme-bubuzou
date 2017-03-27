![hexo-theme-bubuzou](https://raw.githubusercontent.com/Bulandent/hexo-theme-bubuzou/master/source/images/readme.png)

## 说明

hexo-theme-bubuzou主题是根据hexo里Apollo主题改编而来的，[主题效果](http://bubuzou.com/)

## 安装
想要把hexo的主题应用到自己的博客上，需要在本地先构建好hexo所依赖的环境。[hexo使用文档](https://hexo.io/zh-cn/docs/index.html)
大致的步骤是这样的：
- 安装git
- 安装node.js
- 安装hexo
  ``` 
    $ npm install -g hexo-cli
  ```
- 构建站点
  ```
    $ hexo init d://Blog
    $ cd d://Blog
    $ npm install
  ```
- clone主题
  这个时候已经构建好了站点，但是使用的主题是hexo默认的`landscape`。所以如果需要变更为`bubuzou`主题，就需要从github上clone到本地，修改文件名为`bubuzou`，并且放到`d://Blog/theme`下
  [hexo-theme-bubuzou主题](https://github.com/Bulandent/hexo-theme-bubuzou)
- 修改主题
  然后把blog目录下的`_config.yml`配置文件里的`theme: landscape`改成`bubuzou`即可
- 安装依赖包
  hexo里每个不同的主题所依赖的包都不尽相同。安装的默认主题已经包含了一些依赖包，但是对于`bubuzou`这个主题来说是不够的，所以还需要安装以下几个:
  ```
    npm install --save hexo-renderer-jade hexo-generator-feed hexo-generator-sitemap hexo-browsersync hexo-generator-archive
    npm install --save hexo-deployer-git hexo-generator-json-content hexo-generator-search
  ```

## 主题说明文档

- [中文文档](https://github.com/Bulandent/hexo-theme-bubuzou/blob/master/doc/doc-zh.md)

