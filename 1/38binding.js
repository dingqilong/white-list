
    $(function () {

      function ViewModel () {
        this.firstName = tko.behavior('Reactive');
        this.lastName = tko.behavior('Extensions');
        this.fullName = tko.computed({
          params: {
            firstName: this.firstName,
            lastName: this.lastName
          },
          read: function (params) {
            return params.firstName + ' ' + params.lastName;
          }
        });
      }

      var vm = new ViewModel();

      tko.applyBindings(vm, $('#textRow'));
    });
    