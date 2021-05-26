# vue-node-mobavue

仿王者荣耀官网
基本数据为真实数据,从官网爬取而来,可以通过 数据管理端 对数据进行 crud

#### 开发目的

 熟悉 vue3 setup api,以及puppeteer的简单使用

仅供交流学习



## crawler 爬虫

### 功能

爬取全部95个英雄详情,以及近期部分公告

腾讯视频播放地址是动态分配的失效很快,爬取播放地址,点击跳转到王者荣耀官网进行播放,

英雄详情均存储于herodetail 集合内

装备和铭文,以及英雄的类型,保存指向对应的collection的id

其余信息直接存储在Document中

### 技术栈

使用puppeteer模拟用户用户真实请求与操作.获取真实dom树

使用cheerio对dom数据进行抓取

### 配置

app/config.ts 可以配置MongoDB地址,以及爬虫参数

### 项目运行

npm run run  获取数据

预计

[  ] npm run refresh 清空数据库,重新爬取数据



## web web 端

对爬取来的数据进行展示,

[ ] 主页

[ ]英雄详情页

[ ] 公告文章页面

[ ] 更多公告页面





### 技术栈

vue3 + typescript + volar + script setup

## admin 数据管理端

### 技术栈

vue3 + typescript +element-ui

### 项目运行

npm run serve

## server 后端

### 项目运行

npm run serve

### 技术栈

nodejs + koajs

