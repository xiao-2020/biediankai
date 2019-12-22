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
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.init, false);
            return _this;
        }
        Body.prototype.init = function () {
            var exmlText = "<?xml version=\"1.0\" encoding=\"utf-8\" ?> \n\t\t\t\t<e:Skin class=\"skins.ButtonSkin\" states=\"up,down,disabled\" minHeight=\"50\" minWidth=\"100\" xmlns:e=\"http://ns.egret.com/eui\"> \n\t\t\t\t\t\t<e:Image width=\"100%\" height=\"100%\" scale9Grid=\"1,3,8,8\" alpha.disabled=\"0.5\"\n\t\t\t\t\t\t\t\t\t\tsource=\"button_up_png\"\n\t\t\t\t\t\t\t\t\t\tsource.down=\"button_down_png\"/> \n\t\t\t\t\t\t<e:Label id=\"labelDisplay\" top=\"8\" bottom=\"8\" left=\"8\" right=\"8\"\n\t\t\t\t\t\t\t\t\t\tsize=\"20\" fontFamily=\"Tahoma 'Microsoft Yahei'\"\n\t\t\t\t\t\t\t\t\t\tverticalAlign=\"middle\" textAlign=\"center\" text=\"\u6309\u94AE\" textColor=\"0x000000\"/> \n\t\t\t\t\t\t<e:Image id=\"iconDisplay\" horizontalCenter=\"0\" verticalCenter=\"0\"/> \n\t\t\t\t</e:Skin>";
            var shape = new egret.Shape();
            console.log(this);
        };
        return Body;
    }(egret.DisplayObjectContainer));
    Body_1.Body = Body;
    __reflect(Body.prototype, "Body.Body");
})(Body || (Body = {}));
