import Ember from 'ember';


export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
model () {
    return this.get('store').createRecord('contact', {});
  },
  actions: {
    createContact (contact) {
      contact.save()
      .then(() => {
                this.transitionTo('contact/success');
              })
      .catch(() => {
        this.get('flashMessages').danger('Form Fields Need To Be Filled Out!');
              });
    },
  },
});
