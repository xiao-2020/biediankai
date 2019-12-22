// stage 舞台 只有一个   相当于全局 document 对象
// egret.displayObjectContainer  是显示类  继承于 diplayObject 类  是文档类
// eui 相当于 elementui 一样是一套 ui 框架 可以在这基础上做  有利于适配
// 创建app类  继承于  eui
class App extends eui.UILayer {
	// 构造函数入口
	public constructor() {
		super();
	}
	protected createChildren(): void {
		super.createChildren()

		// 全局绑定 生命周期
		egret.lifecycle.onPause = () => {
			console.log('app 进入后台')
			egret.ticker.pause()
		}
		egret.lifecycle.onResume = () => {
			console.log('app 进入	前台')
			egret.ticker.resume()
		}
		// 初始化场景
		this.init()
	}
	private init() {
		// 添加对象
		let object: egret.DisplayObject = new Body.Body()
		this.addChild(object)

		var buttonSkin =
			`<e:Skin class="skins.ButtonSkin" states="up,down,disabled" minHeight="50" minWidth="100" xmlns:e="http://ns.egret.com/eui">
                <e:Label id="labelDisplay" top="8" bottom="8" left="8" right="8"
                         textColor="0xFFFFFF" verticalAlign="middle" textAlign="center"/>
                <e:Image id="iconDisplay" horizontalCenter="0" verticalCenter="0"/>
            </e:Skin>`;

		var button = new eui.Button();
		button.skinName = buttonSkin;
		button.label = "Button";
		button.addEventListener(egret.TouchEvent.TOUCH_TAP, e => {
			console.log('click')
			let demoB: DemoB = new DemoB()
			demoB.sayName('click me!!!!!')
		}, this);
		button.x = 50;
		button.y = 50;

		this.addChild(button);
	}
}