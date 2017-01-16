import Ember from 'ember';

export default Ember.Component.extend({
  isEmpty: Ember.computed('list', function(){
    let items = this.get('list').hasMany('items');
    return items.ids().length === 0;
  }),
  actions: {
    editList(){
      this.sendAction('editList', this.get('list'));
    },
    deleteList(){
      this.sendAction('deleteList', this.get('list'));
    },
  },
});
