const vm = new Vue({
  el: "#app",
  data: {
    users: [],
  },
  computed: {
    csvData() {
      return this.users.map(item => ({
        ...item,
        address: 'адрес', //item.address.city,
        company: 'компания'//item.company.name
      }));
    }
  },
  methods: {
    csvExport(arrData) {
      let csvContent = "data:text/csv;charset=utf-8,";
      csvContent += [
        Object.keys(arrData[0]).join(";"),
        ...arrData.map(item => Object.values(item).join(";"))
      ]
        .join("\n")
        .replace(/(^\[)|(\]$)/gm, "");

      const data = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", data);
      link.setAttribute("download", "export.csv");
      link.click();
    }
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(json => (this.users = json));
  }
});