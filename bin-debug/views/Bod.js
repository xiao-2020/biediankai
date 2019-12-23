var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Body;
(function (Body) {
    var Bod = (function () {
        function Bod() {
            console.log('Bod');
        }
        return Bod;
    }());
    Body.Bod = Bod;
    __reflect(Bod.prototype, "Body.Bod");
})(Body || (Body = {}));
