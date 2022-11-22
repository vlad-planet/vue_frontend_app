new Vue({
  el: '#app',
  data() {
    return {
      nowDate: new Date().toISOString().slice(0, 10),
      date: new Date(),
      picker: new Date().toISOString().substr(0, 10),
      landscape: false,
      reactive: false };

  },
  computed: {
    getEndDate() {
      var endDate = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 10);
      return endDate.toISOString().slice(0, 10);
    } } });