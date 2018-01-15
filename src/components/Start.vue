<template>
  <div id="start" class="wrapper">
      <section>
        <ui-frame step="0"></ui-frame>
      </section>
      <section class="descContainer">
        <h1 v-html="$t('message1.title')"></h1>
        <p v-html="$t('message1.desc')"></p>
        <h1 v-html="$t('message1.title2')"></h1>
        <p v-html="$t('message1.desc2')"></p>
      </section>
  </div>
</template>

<script>
import UiFrame from './UiFrame';

export default {
    name: 'Start',
    components: {
        UiFrame
    },
}
</script>

<style lang="scss">
#start {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-auto-rows: 100%;
    padding-bottom: 20px;
    height:100%;
}
</style>
