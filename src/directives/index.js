// 管理所有自定义指令

export const imagerror = {
  inserted(dom, options) {
    // onerror有地址但是图片加载出错
    dom.onerror = function () {
      dom.src = options.value
    }
  }
}
