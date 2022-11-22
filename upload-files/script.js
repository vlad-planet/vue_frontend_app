var component = {
  data: function(){
    return {
      name: 'Gapal',
      profilePic: null,
      uploaded: false,
      uploadUrl: 'https://www.mocky.io/v2/5d4fb20b3000005c111099e3',
      uploadHeaders: {},
    }
  },
  methods: {
    removePic: function(){
      var profilePic = this.profilePic;
      this.$refs.profilePicRef.deleteUpload(this.uploadUrl, this.uploadHeaders, [profilePic]);
      this.profilePic = null;
      this.uploaded = false;
    },
    upload: function(){
      var self = this;
      this.$refs.profilePicRef.upload(this.uploadUrl, this.uploadHeaders, [this.profilePic]).then(function(){
        self.uploaded = true;
        setTimeout(function(){
          // self.profilePic.progress(0);          
        }, 500);
      });
    },
    onSelect: function(fileRecords){
      console.log('onSelect', fileRecords);
      this.uploaded = false;
    }
  }
}

component.template = '#vue-file-agent-demo';

Vue.component('vue-file-agent-demo', component);

new Vue({
  el: '#app'
});