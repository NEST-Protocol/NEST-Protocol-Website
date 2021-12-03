function setRem() {
  const baseFontSize = 50
  const designWidth = 375
  let fontSize = (document.documentElement.clientWidth / designWidth) * baseFontSize
  // if (fontSize > 96) fontSize = 96
  document.documentElement.style.fontSize = fontSize + 'px'
}

setRem()

window.onresize = function () {
  setRem()
}

export default setRem
