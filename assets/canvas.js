const canvas = document.createElement("canvas")
const sandbox = new GlslCanvas(canvas)

document.body.append(canvas)

sandbox.load(frag)