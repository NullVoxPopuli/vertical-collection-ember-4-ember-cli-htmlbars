import EmberRouter from '@ember/routing/router';
import config from 'vertical-collection-ember-4-ember-cli-htmlbars/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
