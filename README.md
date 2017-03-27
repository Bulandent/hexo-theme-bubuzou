![hexo-theme-bubuzou](https://raw.githubusercontent.com/Bulandent/hexo-theme-bubuzou/master/source/images/readme.png)

## 文档

- [中文文档](https://github.com/pinggod/hexo-theme-apollo/blob/master/doc%2Fdoc-zh.md)
- [Document](https://github.com/pinggod/hexo-theme-apollo/blob/master/doc%2Fdoc-en.md)

## 安装

[![asciicast](https://asciinema.org/a/emrvroa9054hz6k8ise0uxh2u.png)](https://asciinema.org/a/emrvroa9054hz6k8ise0uxh2u)

``` bash
hexo init Blog 
cd Blog 
npm install
npm install --save hexo-renderer-jade hexo-generator-feed hexo-generator-sitemap hexo-browsersync hexo-generator-archive
git clone https://github.com/pinggod/hexo-theme-apollo.git themes/apollo
```

## 启用

修改 `_config.yml` 的 `theme` 配置项为 `apollo`:

```yaml
theme: apollo

# 在归档页面显示所有文章
# 需要上面安装的 hexo-generator-archive 插件支持
archive_generator:
    per_page: 0
    yearly: false
    monthly: false
    daily: false
```

## 更新

``` bash
cd themes/apollo 
git pull
```

## License

MIT
