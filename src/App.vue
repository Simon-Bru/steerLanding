<template>
  <div id="app">
    <home-component></home-component>
  </div>
</template>

<script>
import HomeComponent from './components/Home'

export default {
  name: 'app',
  mounted: function() {
    setTimeout(() => {
      this._self.$el.nextElementSibling.classList.value += 'loaded';
    }, 1000);
  },
  components: {
    HomeComponent
  }
}
</script>

<style lang="scss">

</style>
