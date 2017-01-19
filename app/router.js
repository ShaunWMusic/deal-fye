import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('homepage');
  this.route('about');
  this.route('Sign-up');
  this.route('login');
  this.route('pricing');
});

export default Router;
