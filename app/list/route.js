import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
//this will return the data from 'store' - you're saying findRecord which is a method that calls ALL things
    return this.get('store').findRecord('list', params.list_id);
  },
  actions: {
    toggleItemDone (item) {
      item.toggleProperty('done');
      item.save();
    },
    deleteItem (item) {
      item.destroyRecord ();
    },
    createItem (newItem) {
    let item = this.get('store').createRecord('item', newItem);
    item.save();
    },
  },
});
