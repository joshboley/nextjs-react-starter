const express = require('express')
const next = require('next')
const LRUCache = require('lru-cache')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1hour
})

app.prepare()
.then(() => {
  const server = express()

  server.get('/', (req, res) => {
    renderAndCache(req, res, '/')
  })

  server.get('/about', (req, res) => {
    renderAndCache(req, res, '/about')
  })

  server.get('/blog/:id', (req, res) => {
    const queryParams = { id: req.params.id }
    renderAndCache(req, res, '/blog', queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey (req) {
  return `${req.url}`
}

function renderAndCache (req, res, pagePath, queryParams) {
  const key = getCacheKey(req)

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    try {
      res.send(ssrCache.get(key))
      console.log(`CACHE HIT: ${key}`)
      return
    } catch (err) {
      console.log(`An error occured sending the cached page...removing page from cache.  Error: ${err}`)
      ssrCache.del(key);
    }
  }

  // If not let's render the page into HTML
  app.renderToHTML(req, res, pagePath, queryParams)
    .then((html) => {
      // Let's cache this page
      console.log(`CACHE MISS: ${key}`)
      ssrCache.set(key, html)

      res.send(html)
    })
    .catch((err) => {
      app.renderError(err, req, res, pagePath, queryParams)
    })
}



// const { createServer } = require('http')
// const { parse } = require('url')
// const next = require('next')
// const routeHelper = require('./routes')

// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()


// app.prepare()
// .then(() => {
//   createServer((req, res) => {
//     const { pathname } = parse(req.url)
//     let { root, params } = routeHelper.matchRoute(pathname, routeHelper.routes)
    
//     if (params) {
//       app.render(req, res, root, params);
//       return;
//     }

//     handle(req, res);
//   })
//   .listen(3000, (err) => {
//     if (err) throw err
//     console.log('> Ready on http://localhost:3000')
//   })
// });