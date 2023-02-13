new Vue({
    el: '#app',
    data() {
      return {
        users: [],
      }
    },
    mounted() {
        fetch('https://randomuser.me/api/?results=5')
          .then(response => response.json())
          .then(data => (this.users = data.results));
      },
  });