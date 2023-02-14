new Vue({
    el: '#app',
    data() {
      return {
        users: [],
        arrayUser: [],
        arrayLogin: [],
        username: '',
        password: '',
        selectedGender: '',
        loggedIn: false
      }
    },
    mounted() {
      let users = JSON.parse(localStorage.getItem('users'));
      if (!users) {
        fetch('https://randomuser.me/api/?results=5')
          .then(response => response.json())
          .then(data => {
            this.users = data.results;
            localStorage.setItem('users', JSON.stringify(this.users));
          });
      } else {
        this.users = users;
      }
    },
    methods: {
      login() {
        for (let i = 0; i < this.users.length; i++) {
          let user = this.users[i];
          if (user.login.username === this.username && user.login.password === this.password) {
            this.loggedIn = true;
            break;
          }
        }
        // console.log(this.username)
      },
      sesionDatos() {
        if (sessionStorage.getItem("users") !== null) {
          this.arrayLogin = JSON.parse(sessionStorage.getItem("users"));
        } else {
          this.arrayLogin = [];
        }
      },
    },
    computed: {
      filteredUsers() {
        if (this.selectedGender === '') {
          return this.users;
        } else {
          return this.users.filter(user => user.gender === this.selectedGender);
        }
      }
    }
  });