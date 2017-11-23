import Ember from 'ember';
export default Ember.Route.extend({
  currentUser: Ember.inject.service(),
  session: Ember.inject.service(),

  beforeModel() {
    this.get('session').invalidate().then.transitionToRoute('login');
  },
});
