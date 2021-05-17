import EmberRouter from '@ember/routing/router';
import config from 'emberjs-inelement-vs-wormhole-demo/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('example-links');
  this.route('api-differences');
  this.route('append');
  this.route('render-state');
});
