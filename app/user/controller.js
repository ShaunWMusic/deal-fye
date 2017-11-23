import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),
  session: Ember.inject.service(),

  actions: {
    AddtoWatchlist(formValues) {
      const deal = this.store.createRecord('deal', formValues);
      deal.set('deal', this.model);
      deal.save().then(() => {
        this.store.query('deal', {
            formValues
        });
          // this.transitionToRoute('user');
      })
    },

    Delete(params) {
      const deal = this.store.queryRecord('deal', params.deal_id);
      if (confirm('Are you for real?')) {
        deal.deleteRecord();
        deal.get('isDeleted');
        deal.save();
        // this.transitionToRoute('user');
        }
      }
    }
});
