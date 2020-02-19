const { GuessPlugin } = require('guess-webpack');
const { parseRoutes } = require('guess-parser');
// const analytics = require('platzi-music-e80267b3d135.json');

module.exports = {
  plugins: [
    new GuessPlugin({
      GA: '210123163',
      runtime: {
        delegate: false
      },
      routeProvider() {
        return parseRoutes('.');
      }
    })
  ]
};
