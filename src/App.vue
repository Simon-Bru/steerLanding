<template>
  <div id="app">
    <video autoplay muted loop id="Parisvideo">
      <source src="/src/assets/images/Paris.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
    
    <div class="dark-bg">
      <transition name="slide"
        v-on:enter="enter"
        v-on:leave="leave">
        <router-view></router-view>
      </transition>
     </div>
  </div>
</template>
<script>
  import debounce   from 'debounce';
  import TweenLite  from 'gsap';
  import { routes } from './router';
  let step = 0;
  let fwdTransition = true;

  export default {
    name: 'app',
    mounted: function() {
      setTimeout(() => {
        this._self.$el.nextElementSibling.classList.value += ' loaded';
      }, 1000);
      window.addEventListener('wheel', debounce(this.handleScroll, 800, true));
    },
    methods: {
      /**
       * Route relative functions
       **/
      handleScroll (event) {
        fwdTransition = event.deltaY > 0;
        event.deltaY < 0 ? this.goBack() : this.goForward();
      },
      goForward () {
        if(step < routes.length) {
          this.$router.push(routes[step].path);
          step++;
        }
      },
      goBack () {
        if(window.history.length > 1 && step > 1) {
          this.$router.go(-1);
          step--;
        }
      },
      /**
       * Route animation functions
       */
      enter ( el, done ) {
        if(fwdTransition) {
          TweenLite.from(el, 1, 
          { opacity: 0, top: '100%', 
            ease:Expo.easeOut, 
            onComplete:done } ).play();
        } else {
          TweenLite.from(el, 1, 
          { opacity: 0, top: '-100%', 
            ease:Expo.easeOut,
            onComplete:done } ).play();
        }
      },
      leave ( el, done ) {
        if(fwdTransition) {
          TweenLite.to(el, 1, 
          { opacity: 0, top: '-100%', 
            ease:Power1.easeOut, 
            onComplete:done } ).play();
        } else {
          TweenLite.to(el, 1, 
          { opacity: 0, top: '100%', 
            ease:Power1.easeOut, 
            onComplete:done } ).play();

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
  // TODO Add video background
  background: url('./assets/images/paris-bg.jpg');
  background-position: center;
  background-size: cover;
  max-height: 100vh;

  > div.dark-bg {
    position: relative;
    height: 100%;
  }
}

.full-screen {

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}  

.screen.choices {
  background: url('./assets/images/JO.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: #fff;
}
#Parisvideo {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%; 
    min-height: 100%;
    // -webkit-filter: blur(2px);
    // -moz-filter: blur(2px);
    // -o-filter: blur(2px);
    // -ms-filter: blur(2px);
    // filter: blur(2px);
}
</style>
