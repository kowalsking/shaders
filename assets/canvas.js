const canvas = document.querySelector('div.canvas-holder canvas')
const sandbox = new GlslCanvas(canvas)

const calcSize = function() {
  let ww = window.innerWidth
  let wh = window.innerHeight
  let dpi = window.devicePixelRatio

  let s = Math.max(ww, wh)

  canvas.width = s * dpi
  canvas.height = s * dpi
  canvas.style.width = s + 'px'
  canvas.style.height = s + 'px'
}

calcSize()

sandbox.load(frag)
sandbox.setUniform('image', '../assets/trails.jpg')
