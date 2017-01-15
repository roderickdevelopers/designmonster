import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('list', params.list_id);
  },
  actions: {
    save (list) {
    console.log('you got to the list/edit route Your list is ', list);
    list.save();
    },
    cancel(list) {
      list.rollbackAttributes();
      this.transitionTo('lists');
    },
  },
});
