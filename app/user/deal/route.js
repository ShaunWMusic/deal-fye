import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    deal: {
      refreshModel: true
    }
  },
  model({ params}) {
    return this.store.queryRecord('deal', params.deal_id, {
      formValues
    });
  }
});
