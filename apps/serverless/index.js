const port = 9000
const http = require('node:http')
const httpProxy = require('http-proxy')

const ops = {
  target: 'https://api.openai.com',
  changeOrigin: true,
}

const proxy = httpProxy.createProxyServer(ops)

proxy.on('error', (err, req, originalRes) => {
  console.error(err)
  if (originalRes) {
    originalRes.end()
  }
})

proxy.on('proxyReq', proxyReq => {
  console.log(proxyReq.getHeaders())
})

proxy.on('proxyRes', (proxyRes, req, res) => {
  res.on('close', () => {
    if (!res.writableEnded) {
      console.log('destroying proxyRes in proxyRes close event')
      proxyRes.destroy()
    }
  })
})

const server = http.createServer((req, res) => proxy.web(req, res, {}))

server.listen(port)
