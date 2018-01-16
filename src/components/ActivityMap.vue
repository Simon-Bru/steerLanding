<template>
  <div id="map">

    <span id="localization" class="flex">
        <span class="dot"></span>
        <span class="circle"></span>
    </span>
  </div>
</template>

<script>
import TweenMax from 'gsap';

export default {
    name: 'Map',
    mounted: function() {
        const localization = document.querySelector('#localization .circle');
        TweenMax.to(localization, 1, 
        { width: '50px', height: '50px', 
        repeat: -1, 
        yoyo: true }).play();
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
        width: 10px;
        height: 10px;
        justify-content: center;
        align-items: center;

        .circle {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 100%;
            border: 1px solid $blue;
        }

        .dot {
            background-color: $blue;
            width: 100%;
            height: 100%;
            border-radius: 100%;
        }
    }

}
</style>
