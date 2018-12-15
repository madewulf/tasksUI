const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/l/:id', (req, res) => {
    console.log('brol')
    const actualPage = '/list'
    const queryParams = { title: req.params.id } 
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    console.log('coucou')
    return handle(req, res)
  })

  server.listen(3001, (err) => {
    if (err) throw err
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})