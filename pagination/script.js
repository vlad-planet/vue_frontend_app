new Vue({
  el: "#app",
  data () {
		return {
			posts : [''],
			page: 1,
			perPage: 9,
			pages: [],		
		}
	},
	methods:{
		getPosts () {	
      let data = [];
      for(let i = 0; i < 200; i++){
        this.posts.push({first: 'John',
               last:'Doe', 
               suffix:'#' + i});
      }  
		},
		setPages () {
			let numberOfPages = Math.ceil(this.posts.length / this.perPage);
			for (let index = 1; index <= numberOfPages; index++) {
				this.pages.push(index);
			}
		},
		paginate (posts) {
			let page = this.page;
			let perPage = this.perPage;
			let from = (page * perPage) - perPage;
			let to = (page * perPage);
			return  posts.slice(from, to);
		}
	},
	computed: {
		displayedPosts () {
			return this.paginate(this.posts);
		}
	},
	watch: {
		posts () {
			this.setPages();
		}
	},
	created(){
		this.getPosts();
	},
	filters: {
		trimWords(value){
			return value.split(" ").splice(0,20).join(" ") + '...';
		}
	}
})