import Ember from 'ember';

export default Ember.Component.extend({
  newItem: {
    content: null,
    done: false,
  },
  classNames: ['idea'],
  classNameBindings: ['listDetailHidden'],
  listDetailHidden: false,
  actions: {
    toggleListDetail () {
      return this.toggleProperty('listDetailHidden');
    },
    toggleItemDone (item) {
    this.sendAction('toggleItemDone', item);
    },
    deleteItem (item) {
      this.sendAction('deleteItem', item);
    },
    createItem () {
      let data = this.get('newItem');
//in the line below we are associating the list with the list that was passed to it(and because Ember - we get the id with that data)
      data.list = this.get('list');
      this.sendAction('createItem', data);
    },
  },
});
