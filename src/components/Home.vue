<template>
  <div id="home" class="wrapper">
      <section>
        <ui-frame step="0">
            <h2>haha</h2>
        </ui-frame>
      </section>
      <section class="descContainer">
        <h1 v-html="$t('message1.title')"></h1>
        <p v-html="$t('message1.desc')"></p>
      </section>
  </div>
</template>

<script>
import UiFrame from './UiFrame';

export default {
    name: 'Home',
    components: {
        UiFrame
    },
}
</script>

<style lang="scss">
#home {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-auto-rows: 100%;
    padding-bottom: 20px;
    height:100%;
}
</style>
