new Vue({
  el: '#app',
  data:{
    id:'',
    name:'',
    email:'',
    dataTable:null,
  },
  methods:{
    
    addUser(){

      this.dataTable.row.add([
          this.id,
          '<a href="#">'+this.name+'</a>',
          this.email
        ]).draw(false)
        this.id='';
          this.name='';
          this.email='';
    }
  },
  mounted(){
    let users = [];

    this.dataTable = $('#user-table').DataTable({});
const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(item => {
          users.push(item);
      });
    
               users.forEach(user=>{
        this.dataTable.row.add([
          user.id,
          '<a href="#">'+user.name+'</a>',
          user.email
        ]).draw(false) 
        })
    })
  }
})