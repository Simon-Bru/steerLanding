<template>
  <div id="map">

    <span id="localization" class="flex">
        <span class="dot"></span>
        <span class="circle"></span>
    </span>

    <activity :allData="$t('activity')"></activity>
  </div>
</template>

<script>
import TweenMax from 'gsap';
import Activity from './Activity';

export default {
    name: 'Map',
    mounted: function() {
        const localization = document.querySelector('#localization .circle');
        TweenMax.to(localization, 1, 
        { width: '10vh', height: '10vh', 
        repeat: -1, 
        yoyo: true }).play();

    },
    components: {
        Activity
    }
}
</script>

<style lang="scss">
@import "../assets/style/_colors.scss";

#map {
    background: url('../assets/images/map.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: 40%;  
    width: 100%;
    height: 100%;


    #localization {
        position: absolute;
        top: 60%;
        left: 60%;
        width:  2vh;
        height: 2vh;
        justify-content: center;
        align-items: center;

        .circle {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 100%;
            border: 1px solid $lightblue;
        }

        .dot {
            background-color: $lightblue;
            border: 1px solid #fff;
            width: 100%;
            height: 100%;
            border-radius: 100%;
            box-shadow: 0 1px 6px 1px $lightblue;

        }
    }

}
</style>
