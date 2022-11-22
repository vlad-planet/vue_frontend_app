Vue.component('tabset', {
  template: '#tabset-template',
  data: function(){
    return {
      tabs: [],
      current: null
    }
  },
  methods: {
    change: function(tab) {
      this.current = tab;
      this.tabs.forEach(function(_t) {
        _t.active = _t === tab;
      });
    },
    registerTab: function(tab) {
      if (!this.current) {
        this.current = tab;
      }
      this.tabs.push(tab);
    }
  }
});
Vue.component('tab', {
  template: '#tab-template',
  data: function() {
    return {in: false};
  },
  computed: {
    active: function() {
      var isActive = this.$parent.current === this;
      var self = this;

      // or use this method:
      // setTimeout(function() {
      //   self.in = isActive;
      // }, 0);
      this.$nextTick(function() {
        // if is commented, no animation
        this.$els.panel.offsetWidth;  // force css reflow
        this.in = isActive;
      });
      return isActive;
    }
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  compiled: function() {
    this.$parent.registerTab(this);
  }
});
new Vue({
  el: '#tabs'
})