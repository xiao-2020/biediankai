// stage 舞台 只有一个   相当于全局 document 对象
// egret.displayObjectContainer  是显示类  继承于 diplayObject 类  是文档类
// eui 相当于 elementui 一样是一套 ui 框架 可以在这基础上做  有利于适配
// 创建app类  继承于  eui
// 此类是程序的入口
class App extends eui.UILayer {
	// 构造函数入口
	public constructor() {
		super();
	}
	// 实现此方法  此方法是eui。UILayer 的入口
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
		// 注册资源加载器  不知道为啥要用这种方式  
		// 按照个人理解 应该是注册之后就将此类实现 并引入到整个环境  不然直接 new 此类应该也是可性的(结果证明不可行)
		//  看源码 这个地方就是 吧 new 生成 的实例  赋值给对应的key值   应该是为了实现唯一性  然后调用的时候全局可以用
		let assetAdapter = new AssetAdapter();
		egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
		egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
		// 注册加载器之后， 应该加载静态资源或者 做一一些 初始化的工作 并且开始渲染主程序
		this.runGame().catch(e => { })
	}
	private init() {
		// 添加对象
		let object: egret.DisplayObject = new Body.Body()
		object.width = this.width
		object.height = this.height
		this.addChild(object)
	}
	// 入口
	private async runGame() {
		// 资源加载
		await this.loadResource()
		// const result = await RES.getResAsync("description_json")
		//  开始构建主体
		this.init()
	}

	private async loadResource() {
		try {
			// 创建一个加载动画 的ui组件
			const loadingView = new LoadingUI();
			// 显示
			this.stage.addChild(loadingView);
			// 开始加载资源
			// / 加载默认图片
			await RES.loadConfig("resource/default.res.json", "resource/");
			// 加载主题皮肤
			await this.loadTheme();
			// 加载某个资源组  资源组 是一堆 key value 的映射  通过key 可以娶到对应的 资源
			await RES.loadGroup("preload", 0, loadingView);
			// 加载完以后  移除 进度条
			this.stage.removeChild(loadingView);
		}
		catch (e) {
			console.error(e);
		}
	}

	private loadTheme() {
		return new Promise((resolve, reject) => {
			// load skin theme configuration file, you can manually modify the file. And replace the default skin.
			//加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
			let theme = new eui.Theme("resource/default.thm.json", this.stage);
			theme.addEventListener(eui.UIEvent.COMPLETE, () => {
				resolve();
			}, this);

		})
	}
}