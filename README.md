# HonorofKings-vue-NodeJS-MongoDB
## 一 入门
1. 项目介绍
2. 工具安装和环境搭建
3. 初始化项目
## 二 管理后台
### 1. 基于Element UI的后台管理基础界面搭建(安装插件Element vue add element/ vue add router)
1. 在admin的views里新建一个Main.vue,将Element UI里的后台框架放进去，要自己加一个<template></template>标签
2. 修改router里的index.js文件
3. 创建分类(多层级)
### 2. 修改分类
1. 在分类列表中加按钮或链接
2. 修改的方法也写在新建的方法中，用同一个地址，但是不同的接口，在此方法中加一个if语句来判断到底属于修改还是新建
3. 在server route/admin.index 文件中添加接口
### 3. 删除分类
1. 在Category list中新建按钮delete
2. 在IU element 里找确认对话框元素当作确认删除，前端
3. 写 delete 接口
### 4. 子分类
1. 
### CRUD 接口（保证接口的通用性和扩展）

### 管理员账号管理（bcrypt）
### 登陆页面
### 登录接口（jwt，jsonwebtoken）
### 服务端登录校验
### 客户端路由限制（beforeEach,meta)

## 移动端网络
1. "工具样式"概念和SASS（SCSS）重点是嵌套
2. 样式重置
3. 网站色彩和字体定义（colors，text）
4. 通用flex布局样式定义（flex）
5. 常用边距定义（margin，padding）
6. 首页顶部轮播图片（vue swiper）
7. 使用字体图标（iconfont）
8. 使用精灵图片（sprite）
9. 卡片组件（card）
10. 列表卡片组件（list-card，nav，swiper）
11. 首页新闻资讯
12. 首页英雄列表
13. 新闻详情页
14. 英雄详情页


