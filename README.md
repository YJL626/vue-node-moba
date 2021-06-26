# vue-node-moba

仿王者荣耀官网
基本数据为真实数据,从官网爬取而来,可以通过 数据管理端 对数据进行 crud

#### 开发目的

 熟悉 vue3 setup api,以及puppeteer的简单使用

仅供交流学习

## crawler 爬虫

### 功能

爬取全部95个英雄详情,全部装备,铭文,以及近期800条公告

### 技术栈

使用puppeteer模拟用户用户真实请求与操作.获取真实dom树

使用cheerio对dom数据进行抓取

### 配置

```javascript
./config.json 配置MongoDB地址,以及爬虫参数

dbSrc: string //mongdb 地址 
没有密码的直接输入src  eg:"mongodb://localhost/moba"
有密码,密码在此处配置 eg:'mongodb://mobaAdmin:123456@localhost/moba'

pageCount: number //同时开启的页面数量,默认值为5

isTest: string // 空值为正常模式,其余任意值均为测试模式 测试模式仅会爬取一小部分数据,用于测试可用性  默认值为""
```

### 项目运行

npm run get 获取数据

npm run drop-get 清空当前数据库之后,再获取数据

### 详情

schema 定义在 ./app/model/内

英雄详情均存储于herodetail 集合内,

herodetail 存储着heroId 通过id查询对应的英雄

装备和铭文,以及英雄的类型,保存指向对应的collection的id

news 存储着title,

newscontent 存储着对应的content 

腾讯视频播放地址是动态分配的失效很快,所以爬取的是播放地址,点击跳转到王者荣耀官网进行播放,



## web web 端

对爬取来的数据进行展示,

[X] 主页

[ X ] 文章列表页

[ X ] 文章详情页

[]英雄详情页







### 技术栈

vue3 + typescript + volar + script setup + tailwind

## admin 数据管理端

### 技术栈

vue3 + typescript +element-ui

### 项目运行

npm run serve

### 详情

对以下数据的展示和管理

[X]  category

[ ] banner 

[ ] hero

[ ]  equipment

[ ]  runes

## server 后端

### 项目运行

npm run serve

### 技术栈

nodejs + koajs

