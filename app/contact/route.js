import Ember from 'ember';

export default Ember.Route.extend({
model () {
    return this.get('store').createRecord('contact', {});
  },
  actions: {
    createContact (contact) {
      contact.save();
    },
  },
});
