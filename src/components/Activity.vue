<template>
  <div class="activity">
      <div class='activityDesc'>
          <i class="icons8-more-info"></i>
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

.activity {
    position: absolute;
    width: 100%;

    .activityDesc {
        max-height: 150px;
        height: 100% !important;
        min-height: 90px;

        z-index: 1;

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

        .icons8-more-info {
            float: right;
            color: $lightblue;
            margin-top: 6px;
            margin-right: 5px;
        }

        h4 {
            font-size: 1.2vw;
            margin-bottom: 5px;
            margin-top: 5px;
        }

        span {
            font-size: 1vw;   
            margin-left: 20%;
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
