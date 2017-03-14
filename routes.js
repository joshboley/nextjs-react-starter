// const pathMatch = require('path-match')
// const route = pathMatch()

// module.exports.routes = [
//   { root: '/', match: route('/') },
//   { root: '/about', match: route('/about') },
//   { root: '/blog', match: route('/blog/:id') },
// ];

// module.exports.matchRoute = function matchRoute (pathname, [first, ...rest]) {
//   var firstMatch = first && first.match && first.match(pathname);
//   return (firstMatch && { params: firstMatch, root: first.root, match: first.match }) || 
//          (rest && rest.length && matchRoute(pathname, rest) ||
//          false);
// }