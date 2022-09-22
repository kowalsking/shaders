const canvas = document.querySelector('canvas')
const sandbox = new GlslCanvas(canvas)

sandbox.load('void main() { gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); }')

