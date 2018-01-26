<template>
  <div id="app">
    <video autoplay muted loop id="Parisvideo">
      <source ref='videoRef' :src="video_bg" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
    
    <template
      v-if="isMobile">
      <div class="full-fixed dark-bg"></div>
      <start></start>
      <plan></plan>
      <contact></contact>  
    </template>

    <div class="dark-bg" 
      v-else>
      <transition name="slide"
        v-on:enter="enter"
        v-on:leave="leave">
        <router-view></router-view>
      </transition>

      
     </div>
  </div>
</template>
<script>
  import debounce     from 'debounce';
  import TweenLite    from 'gsap';
  import MobileDetect from 'mobile-detect';
  import { routes }   from './router';

  import Start        from './components/Start';
  import Plan         from './components/Plan';
  import Contact      from './components/Contact';
  
  let step = 0;
  let fwdTransition = true;

  export default {
    name: 'app',
    data: () => {
      return {
        video_bg : require('./assets/images/Paris.mp4'),
        isMobile: false
      };
    },
    components: {
      Start,
      Plan,
      Contact
    },
    mounted: function() {
      setTimeout(() => {
        this._self.$el.previousElementSibling.classList.value += ' loaded';
      }, 1000);

      const md = new MobileDetect(window.navigator.userAgent);
      if(md.mobile()) {
        this.isMobile = true;
        this._self.$el.previousElementSibling.classList.value += ' mobile';
      }
      else {
        window.addEventListener('wheel', debounce(this.handleScroll, 200, true));
        window.addEventListener('keyup', debounce((ev) => {
          if(ev.keyCode == 38) {
            fwdTransition = false;          
            this.goBack();
          }
          if(ev.keyCode == 40) {
            fwdTransition = true;
            this.goForward();
          }
        }, 200, true));
      }
    },
    methods: {
      /**
       * Route relative functions
       **/
      handleScroll (event) {
        event.deltaY < 0 ? this.goBack() : this.goForward();
      },
      goForward () {
        if(step < routes.length) {
          fwdTransition = true;
          this.$router.push(routes[step].path);
          step++;
        }
      },
      goBack () {
        fwdTransition = false;
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
    background: url('./assets/images/paris-bg.jpg');
    
    // -webkit-filter: blur(2px);
    // -moz-filter: blur(2px);
    // -o-filter: blur(2px);
    // -ms-filter: blur(2px);
    // filter: blur(2px);
}
</style>
