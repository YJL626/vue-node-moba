# vue-node-moba

仿王者荣耀官网
基本数据为真实数据,从官网爬取而来,可以通过 数据管理端 对数据进行 crud

## web web 端



对爬取来的数据进行展示,

[ X ] 主页

[ X ] 文章列表页  #/article/list //已完成   近期800条公告

[ X ] 文章详情页 #/article/info?id={{articleid}} 已完成   近期800条公告

[ X ] 英雄详情页  #/heroes/{{heroid}} 已完成  全部英雄详情,全部装备,铭文,

[ X ] 视频播放页面 // 视频链接是动态的,很快就会时效,所以点击到源视频站点

[ X ]主页nav部分 跳转到对应的网站

[ ]   攻略中心  跳转到  //pvp.qq.com/m/m201706/index.shtml



#### vue3 + typescript + volar + script setup +  + tailwind





## crawler 爬虫

### 功能

爬取全部英雄详情,全部装备,铭文,以及近期800条公告

### 技术栈

使用puppeteer模拟用户用户真实请求与操作.获取真实dom树

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

