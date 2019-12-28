

namespace Body {
	export class Body extends egret.DisplayObjectContainer {
		public constructor() {
			super()

			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, false)
			this.init()
		}

		init() {
			var button = new eui.CheckBox();
			// button.skinName = "resource/skins/ButtonSkin.exml";

			// button.width = 100
			// button.height = 50
			// button.label = 'anniu'
			this.addChild(button);
		}
	}
}
