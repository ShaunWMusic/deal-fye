import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),
  session: Ember.inject.service(),
  actions: {
    checkForm(formValues) {
      const secretStuff = {
        identification: formValues.email,
        password: formValues.password
      };
      const authenticator = 'authenticator:jwt';

      this.get('session').authenticate(authenticator, secretStuff).then(() => this.get('currentUser').loadCurrentUser()).then(() => {
        if (this.get('currentUser.user')) {
          this.transitionToRoute('user');
        } else {
          this.transitionToRoute('Sign-up');
        }
      });
    }
  }
});
