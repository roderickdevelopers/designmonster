import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').createRecord('list', {});
  },
  actions: {
    createList (list) {
      console.log("inside list/new route createList");
      list.save();
    },
    cancelCreateList (list) {
      console.log("inside lists/new cancel");
        list.rollbackAttributes();
        this.transitionTo('lists');
    },
  },
});
