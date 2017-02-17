import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),
  session: Ember.inject.service(),

  actions: {
    AddtoWatchlist(formValues) {
      const deal = this.store.createRecord('deal', formValues);
      deal.save()
    }
  }
});
