// stage 舞台 只有一个   相当于全局 document 对象
// egret.displayObjectContainer  是显示类  继承于 diplayObject 类  是文档类
// eui 相当于 elementui 一样是一套 ui 框架 可以在这基础上做  有利于适配


// 创建app类  继承于  eui

class App extends eui.UILayer {
    // 构造函数入口
    public constructor() {
        super();
        console.log('gone1')
    }

}