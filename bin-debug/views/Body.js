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
var Body;
(function (Body_1) {
    var Body = (function (_super) {
        __extends(Body, _super);
        function Body() {
            var _this = _super.call(this) || this;
            _this.init();
            return _this;
        }
        Body.prototype.init = function () {
            var _this = this;
            var btn = new eui.Button();
            btn.width = 300;
            btn.height = 400;
            btn.label = 'ANII';
            this.addChild(btn);
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                console.log(_this);
            }, btn, false);
        };
        return Body;
    }(egret.DisplayObjectContainer));
    Body_1.Body = Body;
    __reflect(Body.prototype, "Body.Body");
})(Body || (Body = {}));
