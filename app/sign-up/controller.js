import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    saveForm(formValues) {
      //create new user
      const user = this.store.createRecord('user', formValues);
      console.log(formValues);

      user.save().then(() => {
        const secretStuff = {
          identification: formValues.email,
          password: formValues.password,
        };
        const authenticator = 'authenticator:jwt';
        //login user
        this.get('session').authenticate(authenticator, secretStuff);
          alert('Thanks for signing up!');
            this.transitionToRoute('user');
      })
      .catch(() => {
        alert('Error Creating User');
        this.transitionToRoute('index');
      });
    },
  }
});
