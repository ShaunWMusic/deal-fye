import Ember from 'ember';
export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),
  session: Ember.inject.service(),
  actions: {
//     saveForm(formValues) {
//       fetch('http://localhost:3333/api/users', {
//         method: 'POST',
//         data: JSON.stringify(formValues)
//       }).then((res) => res.json());
//     },
//   },
// });


    saveForm(formValues) {
      console.log(formValues);

      const user = this.store.createRecord('user', formValues);

      user.save().then(() => {
        const secretStuff = {
          identification: formValues.username,
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
