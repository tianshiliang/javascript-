### 说明文档 

## 一、创建项目流程：

<https://jspang.com/detailed?id=61#toc2117>

### 1、全局安装cli

npm install vue-cli -g    

### 2、创建项目

vue init webpack 项目名称

### 3、安装vant

cnpm install vant --save

引入vant：

第一种方法：

安装好vant后，可以使用以前常用的方法进行引入-这是一种全局引入的方式。 直接在src/main.js进行全局引入。

```javascript
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
Vue.use(vant)
```

第二种方法：

vant是支持babel-plugin-import引入的，它可以让我们按需引入组件模块，并且不用管理我们的样式，现在Vue项目组件库的主流引入方法。 **安装babel-plugin-import**

在.babelrc中配置plugins（插件）

```javascript
"plugins": [
    "transform-vue-jsx", 
    "transform-runtime",
    ["import",{"libraryName":"vant","style":true}]
  ]
```

## 二、启动：





