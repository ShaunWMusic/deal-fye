import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  keyword: DS.attr('string'),
  maxprice: DS.attr('string'),
  user: DS.belongsTo('user'),
});
