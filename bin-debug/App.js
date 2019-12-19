// stage 舞台 只有一个   相当于全局 document 对象
// egret.displayObjectContainer  是显示类  继承于 diplayObject 类  是文档类
// eui 相当于 elementui 一样是一套 ui 框架 可以在这基础上做  有利于适配
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
// 创建app类  继承于  eui
var App = (function (_super) {
    __extends(App, _super);
    // 构造函数入口
    function App() {
        return _super.call(this) || this;
    }
    App.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        // 全局绑定 生命周期
        egret.lifecycle.onPause = function () {
            console.log('app 进入后台');
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            console.log('app 进入	前台');
            egret.ticker.resume();
        };
        // 初始化场景
        this.init();
    };
    App.prototype.init = function () {
        // 添加对象
        var object = new Body();
        this.addChild(object);
    };
    return App;
}(eui.UILayer));
__reflect(App.prototype, "App");
