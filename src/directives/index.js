// 管理所有自定义指令

export const imageerror = {
  inserted(dom, options) {
    dom.src = dom.src || options.value
    // onerror有地址但是图片加载出错
    dom.onerror = function () {
      dom.src = options.value
    }
  },
  componentUpdated(dom, options) {
    dom.src = dom.src || options.value
  }
}
