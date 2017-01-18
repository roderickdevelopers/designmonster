import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').createRecord('list', {});
  },
  actions: {
    willTransition () {
      let store = this.get('store');
      store.peekAll('list').forEach(function (list) {
        if (list.get('isNew') && list.get('hasDirtyAttributes')) {
          list.rollbackAttributes();
        }
      });
      return true;
    },
    createList (list) {
console.log("list is", list);
      list.save();
      this.transitionTo('lists');
    },
    cancelCreateList (list) {
        list.rollbackAttributes();
        this.transitionTo('lists');
    },
  },
});
