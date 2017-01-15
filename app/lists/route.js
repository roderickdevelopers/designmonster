import Ember from 'ember';

export default Ember.Route.extend({
  model () {
//this will return the data from 'store' - you're saying findAll which is a method that calls ALL things
    return this.get('store').findAll('list');
  },
  actions: {
    editList (list) {
      console.log("inside the lists route, list is", list);
      this.transitionTo('list/edit', list);
    },
    deleteList (list) {
      list.destroyRecord();
    },
  },
});
