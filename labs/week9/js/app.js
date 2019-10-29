var app = new Vue({
  el: "#app",
  mounted: function() {
    axios.get("data/animal.json").then(response => {
      this.animal = response.data.animal;
      //fetch("data/animals.json").then(data => {
      //console.log(data);
    });
  },
  data: {
    animal: []
  },
  methods: {}
});
