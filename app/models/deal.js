import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  keyword: DS.attr('string'),
  maxprice: DS.attr('string'),
  user: DS.belongsTo('deal'),
});
