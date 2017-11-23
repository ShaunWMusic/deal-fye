
import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  queryParams: {
    deal: {
      refreshModel: true
    }
  },
  model({ formValues}) {
    return this.store.query('deal', {
      formValues
    });
  }
});
