import Ember from 'ember';

export default Ember.Controller.extend({
  // session: Ember.inject.service(),
  actions: {
    saveForm(formValues) {
      console.log(formValues);
      const user = this.store.createRecord('user', formValues);
      console.log(user);

      user.save().then(() => {
        const secretStuff = {
          identification: formValues.email,
          password: formValues.password,
        };
        const authenticator = 'authenticator:jwt';

        this.get('session').authenticate(authenticator, secretStuff)
          .then(() => {
            this.transitionToRoute('user');
          });
      })
      .catch(() => {
        alert('Error Creating User');
      });
    },
  }
});
