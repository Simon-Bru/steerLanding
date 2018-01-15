<template>
  <div id="plan">
    <section class="descContainer">
        <h1 v-html="$t('message2.title')"></h1>
        <p v-html="$t('message2.desc')"></p>
    </section>
    <section>
        <ui-frame step="1"></ui-frame>
    </section>
  </div>
</template>

<script>
import UiFrame from './UiFrame';

export default {
    name: 'Plan',
    components: {
        UiFrame
    }
}
</script>

<style lang="scss">
#plan {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-auto-rows: 100%;
    padding-bottom: 20px;
    height:100%;

    ui-frame {
        text-align: left;
    }
}
</style>
