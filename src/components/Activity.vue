<template>
  <div id="activity">
      <div class="button flex" id="no"><span v-html="$t('no')"></span><i class="icons8-no"></i></div>
      <div class="button flex" id="yes"><span v-html="$t('yes')"></span><i class="icons8-love"></i></div>
      <div class='activityDesc'>
          <span class="distance">{{ data.distance }}</span>
          <h4>{{ data.name }}</h4>
          <span class="time">{{ data.time }}</span>
          <span class="location">{{ data.location }}</span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Activity',
    props: {
        'data': Object
    },
    mounted: function() {
    }
}
</script>

<style lang="scss">
@import "../assets/style/_colors.scss";

#activity {
    position: absolute;
    bottom: -5px;
    width: 100%;

    .button {
        position: relative;
        text-align: center;
        border-radius: 30px;
        display: inline-block;
        color: #fff;
        width: 48%;
        background-color: $lightblue;
        font-size: 3vh;
        padding: 5px 0px 5px 0px;
        opacity: 0.9;
        white-space: nowrap;

        i {
            float: right;
            margin-right: 5px;
        }
    }

    .activityDesc {
        position: relative;
        margin-top: 1px;
        padding-bottom: 10px;
        text-align: left;
        background-color: #fff;
        border-radius: 5px;
        border: solid 1px $black;

        > * {
            display: block;
        }

        h4 {
            font-size: 2.5vh;
            margin-bottom: 5px;
            margin-top: 5px;
        }

        span {
            font-size: 2vh;   
            margin-left: 20%;
        }
        .time {
        }

        .distance {
            float: left;
            padding: 3px;
            background-color: #ecf0f1;
            border-radius: 2px;
            margin: 0;
            margin: 5px;
        }
    }
}
</style>
