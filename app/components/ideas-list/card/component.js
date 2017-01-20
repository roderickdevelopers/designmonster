import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editList(){
      this.sendAction('editList', this.get('list'));
    },
    deleteList(){
      this.sendAction('deleteList', this.get('list'));
    },
  },
});
