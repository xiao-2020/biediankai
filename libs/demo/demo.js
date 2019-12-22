var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var DemoA = (function () {
    function DemoA() {
        console.log('DemoA');
        var demoB = new DemoB();
        demoB.sayName('hello');
    }
    return DemoA;
}());
__reflect(DemoA.prototype, "DemoA");
var DemoB = (function () {
    function DemoB() {
        console.log('DemoB');
    }
    DemoB.prototype.sayName = function (a) {
        console.log(a);
    };
    return DemoB;
}());
__reflect(DemoB.prototype, "DemoB");
