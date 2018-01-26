<template>
  <div id="plan" class="wrapper">
    <section class="descContainer">
        <h1 v-html="$t('message2.title')"></h1>
        <p v-html="$t('message2.desc')"></p>        
        <h1 v-html="$t('message2.title2')"></h1>
        <p v-html="$t('message2.desc2')"></p>
    </section>
    <section class="frame-container">
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

    .descContainer {
        margin-left: 20%;
    }

    ui-frame {
        text-align: left;
    }
}



@media screen and (max-width: 850px) {
    #plan {
        grid-template-columns: 1fr 250px;

    }

}
</style>
