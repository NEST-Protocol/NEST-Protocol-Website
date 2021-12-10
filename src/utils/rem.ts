function setRem() {
  const baseFontSize = 75
  const designWidth = 375
  let fontSize = (document.documentElement.clientWidth / designWidth) * baseFontSize
  if (fontSize > 223) fontSize = 223
  document.documentElement.style.fontSize = fontSize + 'px'
}

setRem()

window.onresize = function () {
  setRem()
}

export default setRem
