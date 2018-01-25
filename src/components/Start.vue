<template>
  <div id="start" class="wrapper">
      <section class="frame-container">
        <ui-frame step="0"></ui-frame>
      </section>
      <section class="descContainer">
        <h1 id='contrast' v-html="$t('message1.title')"></h1>
        <h1 v-html="$t('message1.title2')"></h1>
        <p v-html="$t('message1.desc2')"></p>
        <h1 v-html="$t('message1.title3')"></h1>
        <p v-html="$t('message1.desc3')"></p>
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
    text-align: right;
}

@media screen and (max-width: 850px) {
    #start {
        grid-template-columns: 300px 1fr;

        .frame-container {
            padding-left: 20%;
        }
    }
}

@media screen and (max-width: 950px) {
    #start {
        .descContainer {
            margin-right: 5%;
            // width: 70%;
        }
        p {
            max-width: none;
        }
    }
}
</style>
