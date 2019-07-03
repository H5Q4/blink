// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Boolean
    },
    count: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeImg: 'images/like.png',
    dislikeImg: 'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(event) {
      let count = this.properties.count
      let like = this.properties.like

      count = like ? --count : ++count

      this.setData({
        count,
        like: !like
      })

      this.triggerEvent('like', { like: !like })
    }
  }
})
