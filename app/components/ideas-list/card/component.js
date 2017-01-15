import Ember from 'ember';

export default Ember.Component.extend({
  isEmpty: Ember.computed('list', function(){
    let items = this.get('list').hasMany('items');
    console.log('items is ', items);
    return items.ids().length === 0;
  }),
  actions: {
    editList(){
      console.log("you're inside the editList in the ideas-list/card component");
      console.log("the list you are cliking edit on is", this.get('list'));
      this.sendAction('editList', this.get('list'));
    },
    deleteList(){
      console.log("you're inside the deleteList in the ideas-list/card component");
      console.log("the list you are cliking delete on is", this.get('list'));
      this.sendAction('deleteList', this.get('list'));
    },
  },
});
