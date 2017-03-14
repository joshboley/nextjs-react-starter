// Examples for editing the Webpack config

// module.exports = {
//   webpack: function(config) {
//     // const original = config.entry
//     // config.entry = function () {
//     //   return original()
//     //     .then((entry) => {
//     //       entry['vendor.js'] = ['babel-polyfill']
//     //       return entry
//     //     })
//     // }

//     config.plugins.push(["transform-runtime", {
//       "polyfill": false,
//       "regenerator": true
//     }]);

//     return config
//   }

// }