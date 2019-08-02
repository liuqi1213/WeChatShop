// pages/category/childCpns/w-m/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
	categoryList:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
	currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
	itemClick(e){
		console.log(e.currentTarget.dataset.index);
		const currentIndex = e.currentTarget.dataset.index;
		this.setData({
			currentIndex
		})
			this.triggerEvent('menuclick',{currentIndex})
		
	}
  }
})
