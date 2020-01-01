

namespace Body {
	export class Body extends egret.DisplayObjectContainer {
		private group: eui.Group;
		public constructor() {
			super()
			this.once(egret.Event.ADDED_TO_STAGE, this.init, this, false)
		}
		init() {
			// let loader: egret.ImageLoader = <egret.ImageLoader>e.target
			// let bitmapData: egret.BitmapData = loader.data
			// let texture = new egret.Texture()
			// texture.bitmapData = bitmapData
			// let bitmap: egret.Bitmap = new egret.Bitmap(texture)
			var exml =
				`<e:Group alpha="0.5" width="100%" height="100%" xmlns:e="http://ns.egret.com/eui">
							<e:Image source="resource/assets/2.jpeg" width="100%" height="100%" fillMode="repeat" horizontalCenter="0" verticalCenter="0" />
					</e:Group>`;
			// 初始化背景 直接解析 exml  然后实例化即可  实例化之后就是一个Group 对象
			var clazz = EXML.parse(exml);
			this.group = new clazz();
			this.group.width = this.width
			this.group.height = this.height
			this.addChild(this.group);
			this.createChildren()
		}
		private createChildren(): void {
			this.createHeader()
			this.createBody()
			this.createFooter()
		}

		createHeader() {
			let label = `
				<e:Label text="aaaa" tint="0x000000" textColor="0xFFFFFF" top="20" width="100%" height="80" xmlns:e="http://ns.egret.com/eui"/>
			`
			let labelClass = EXML.parse(label)

			let obj: eui.Label = new labelClass()
			obj.tint = 0x000000
			obj.textAlign = 'center'
			obj.verticalAlign = 'center'
			this.group.addChild(obj)
		}
		createBody() { }
		createFooter() { }
	}
}
