// components/issue/index.js
const MONTHs = [
  '一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月',
  '十二月'
]

Component({
  /**
   * Component properties
   */
  properties: {
    issueNumber: {
      type: Number,
      observer(newVal) {
        if (newVal < 10) {
          this.setData({
            index: `0${newVal}`
          })
        }
      }
    },
    date: {
      type: String,
      observer(newVal) {
        let publishAt = new Date(newVal)
        console.log(MONTHs[publishAt.getMonth()], publishAt.getFullYear())
        this.setData({
          month: MONTHs[publishAt.getMonth()],
          year: publishAt.getFullYear()
        })
      }
    }
  },

  /**
   * Component initial data
   */
  data: {
    month: String,
    year: Number,
    index: String
  },

  /**
   * Component methods
   */
  methods: {

  }
})
