const sass = require('@stencil/sass');

exports.config = {
  plugins: [
    sass({
      injectGlobalPaths: [
        // 'src/globals/variables.scss',
        // 'src/globals/mixins.scss'
      ]
    })
  ],
  namespace: 'mycomponent',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: false
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
