import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['listItemCompleted'],
//use this to toggle strike through on item done property
  listItemCompleted: Ember.computed.alias('item.done'),
  // listItemCompleted: false,
  actions: {
    toggleDone () {
//this line sends the action BACK UP to item,
console.log("you are inside toggleDone in ideas-list/item");
      this.sendAction('toggleDone', this.get('item'));
    },
    delete () {
      console.log("DELETE ME!");
      this.sendAction('delete', this.get('item'));
    }
  },
});
