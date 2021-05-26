# vue-node-mobavue

仿王者荣耀官网
基本数据为真实数据,从官网爬取而来,可以通过 数据管理端 对数据进行 crud

#### 开发目的

 熟悉 vue3 setup api,以及puppeteer的简单使用

仅供交流学习



## crawler 爬虫

### 功能

爬取全部的英雄信息,以及部分公告信息.

每一个英雄详情页面就是一个document

装备和铭文,以及英雄的类型是保存的id指向对应的collection

其余的详情均存储于herodetail内

### 项目运行

已完成

npm run run  获取数据

预计

[  ] npm run refresh 清空数据库,重新爬取数据

### 技术栈

使用puppeteer模拟用户用户真实请求,与操作.获取真实dom树

使用cheerio对dom数据进行抓取

## web web 端

仿王者荣耀官网进行开发

英雄数据均为爬过来的真实数据,

英雄介绍视频是在站内展示,

### 项目运行

npm run serve

### 技术栈

vue3 + typescript + script setup



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

