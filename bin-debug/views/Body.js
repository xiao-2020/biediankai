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
            _this.once(egret.Event.ADDED_TO_STAGE, _this.init, _this, false);
            return _this;
        }
        Body.prototype.init = function () {
            // let loader: egret.ImageLoader = <egret.ImageLoader>e.target
            // let bitmapData: egret.BitmapData = loader.data
            // let texture = new egret.Texture()
            // texture.bitmapData = bitmapData
            // let bitmap: egret.Bitmap = new egret.Bitmap(texture)
            var exml = "<e:Group alpha=\"0.5\" width=\"100%\" height=\"100%\" xmlns:e=\"http://ns.egret.com/eui\">\n\t\t\t\t\t\t\t<e:Image source=\"resource/assets/2.jpeg\" width=\"100%\" height=\"100%\" fillMode=\"repeat\" horizontalCenter=\"0\" verticalCenter=\"0\" />\n\t\t\t\t\t</e:Group>";
            // 初始化背景 直接解析 exml  然后实例化即可  实例化之后就是一个Group 对象
            var clazz = EXML.parse(exml);
            this.group = new clazz();
            this.group.width = this.width;
            this.group.height = this.height;
            this.addChild(this.group);
            this.createChildren();
        };
        Body.prototype.createChildren = function () {
            this.createHeader();
            this.createBody();
            this.createFooter();
        };
        Body.prototype.createHeader = function () {
            var label = "\n\t\t\t\t<e:Label text=\"aaaa\" tint=\"0x000000\" textColor=\"0xFFFFFF\" top=\"20\" width=\"100%\" height=\"80\" xmlns:e=\"http://ns.egret.com/eui\"/>\n\t\t\t";
            var labelClass = EXML.parse(label);
            var obj = new labelClass();
            obj.tint = 0x000000;
            obj.textAlign = 'center';
            obj.verticalAlign = 'center';
            this.group.addChild(obj);
        };
        Body.prototype.createBody = function () { };
        Body.prototype.createFooter = function () { };
        return Body;
    }(egret.DisplayObjectContainer));
    Body_1.Body = Body;
    __reflect(Body.prototype, "Body.Body");
})(Body || (Body = {}));
