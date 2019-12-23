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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// stage 舞台 只有一个   相当于全局 document 对象
// egret.displayObjectContainer  是显示类  继承于 diplayObject 类  是文档类
// eui 相当于 elementui 一样是一套 ui 框架 可以在这基础上做  有利于适配
// 创建app类  继承于  eui
// 此类是程序的入口
var App = (function (_super) {
    __extends(App, _super);
    // 构造函数入口
    function App() {
        return _super.call(this) || this;
    }
    // 实现此方法  此方法是eui。UILayer 的入口
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
        // 注册资源加载器  不知道为啥要用这种方式  
        // 按照个人理解 应该是注册之后就将此类实现 并引入到整个环境  不然直接 new 此类应该也是可性的(结果证明不可行)
        //  看源码 这个地方就是 吧 new 生成 的实例  赋值给对应的key值   应该是为了实现唯一性  然后调用的时候全局可以用
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        // 注册加载器之后， 应该加载静态资源或者 做一一些 初始化的工作 并且开始渲染主程序
        this.runGame().catch(function (e) { });
    };
    App.prototype.init = function () {
        // 添加对象
        var object = new Body.Body();
        this.addChild(object);
        var ob = new Body.Bod();
        var btn = new eui.Button();
        btn.label = '按钮';
        this.addChild(btn);
    };
    // 入口
    App.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // 资源加载
                    return [4 /*yield*/, this.loadResource()
                        // const result = await RES.getResAsync("description_json")
                        //  开始构建主体
                    ];
                    case 1:
                        // 资源加载
                        _a.sent();
                        // const result = await RES.getResAsync("description_json")
                        //  开始构建主体
                        this.init();
                        return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        loadingView = new LoadingUI();
                        // 显示
                        this.stage.addChild(loadingView);
                        // 开始加载资源
                        // / 加载默认图片
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        // 开始加载资源
                        // / 加载默认图片
                        _a.sent();
                        // 加载主题皮肤
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        // 加载主题皮肤
                        _a.sent();
                        // 加载某个资源组  资源组 是一堆 key value 的映射  通过key 可以娶到对应的 资源
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 3:
                        // 加载某个资源组  资源组 是一堆 key value 的映射  通过key 可以娶到对应的 资源
                        _a.sent();
                        // 加载完以后  移除 进度条
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    return App;
}(eui.UILayer));
__reflect(App.prototype, "App");
