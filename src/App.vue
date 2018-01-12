<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  mounted: function() {
    setTimeout(() => {
      this._self.$el.nextElementSibling.classList.value += ' loaded';
    }, 1000);
  }
}
</script>

<style lang="scss">

</style>
