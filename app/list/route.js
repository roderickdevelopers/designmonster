import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
//this will return the data from 'store' - you're saying findRecord which is a method that calls ALL things
    return this.get('store').findRecord('list', params.list_id);
  },
  actions: {
    toggleItemDone (item) {
      console.log('you are in the toggleItemDone and item is ', item);
      item.toggleProperty('done');
      console.log('inside list route after toggle and item is ', item);
      item.save();
    },
    deleteItem (item) {
      item.destroyRecord ();
    },
    createItem (newItem) {
    console.log("inside the route creat item, newItem is " , newItem);
    let item = this.get('store').createRecord('item', newItem);
    console.log("inside the route creat item, newItem is " , item);
    item.save();
    },
  },
});
