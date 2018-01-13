<template>
  <div id="app">
    <div class="dark-bg full-screen">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import debounce from 'debounce'
  import { routes } from './router'
  let step = 0

  export default {
    name: 'app',
    mounted: function() {
      setTimeout(() => {
        this._self.$el.nextElementSibling.classList.value += ' loaded';
      }, 1000);
      window.addEventListener('wheel', debounce(this.handleScroll, 800, true));    
    },
    methods: {
      handleScroll (event) {
        event.deltaY < 0 ? this.goBack() : this.goForward()
      },
      goForward () {
        if(step < routes.length) {
          this.$router.push(routes[step].path);
          step++
        }
      },
      goBack () {
        if(window.history.length > 1) {
          this.$router.go(-1)
          step--
        }
      }
    },
    destroyed () {
      window.removeEventListener('wheel', this.handleScroll);
    }
  }
</script>

<style lang="scss">
#app {
  @extend .full-screen;
  background: url('./assets/images/paris-bg.jpg');
  background-position: center;
  background-size: cover;
}
.full-screen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
