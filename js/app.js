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
      const newList = this.list.filter((el, i) => {
        return i !== index;
      });
      console.log(newList);
      this.list = newList;
    },
  },
});
Vue.config.devtools = true;
