


class Body extends egret.DisplayObjectContainer {
	public constructor() {
		super()
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, false)
	}

	init() {
		let exmlText = `<?xml version="1.0" encoding="utf-8" ?> 
			<e:Skin class="skins.ButtonSkin" states="up,down,disabled" minHeight="50" minWidth="100" xmlns:e="http://ns.egret.com/eui"> 
					<e:Image width="100%" height="100%" scale9Grid="1,3,8,8" alpha.disabled="0.5"
									source="button_up_png"
									source.down="button_down_png"/> 
					<e:Label id="labelDisplay" top="8" bottom="8" left="8" right="8"
									size="20" fontFamily="Tahoma 'Microsoft Yahei'"
									verticalAlign="middle" textAlign="center" text="按钮" textColor="0x000000"/> 
					<e:Image id="iconDisplay" horizontalCenter="0" verticalCenter="0"/> 
			</e:Skin>`
			let shape: egret.Shape = new egret.Shape()
			console.log(this)
	}
}
