import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  rootURL: config.routerRootURL,
  location: config.locationType,
});

Router.map(function () {
  this.route('about');
  this.route('contact');
  this.route('contact/success', { path: 'contact/success' });
  this.route('lists');
  this.route('lists/new');
  this.route('list', { path: 'lists/:list_id' });
  this.route('list/edit', { path: 'lists/:list_id/edit' });
  this.route('resources');
  this.route('projects');
});

export default Router;
