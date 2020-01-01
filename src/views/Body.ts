

namespace Body {
	export class Body extends egret.DisplayObjectContainer {
		public constructor() {
			super()
			this.init()
		}

		init() {
			let btn = new eui.Button()
			btn.width = 300
			btn.height = 400
			btn.label = 'ANII'
			this.addChild(btn)
			
			btn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
				console.log(this)
			}, btn, false)
		}	
	}
}
