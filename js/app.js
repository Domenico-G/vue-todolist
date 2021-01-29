var app = new Vue({
  el: "#app",
  data: {
    list: [],
    elementList: "",
  },
  methods: {
    addItemList: function () {
      this.list.push(this.elementList);
      this.elementList = "";
    },
    delItemList: function (index) {
      this.list = this.list.filter((el, i) =>  i !== index );
      
    },
  },
});
Vue.config.devtools = true;
