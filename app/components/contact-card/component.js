import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createContact () {
      this.sendAction('createContact', this.get('contact'));
    },
  },
});
