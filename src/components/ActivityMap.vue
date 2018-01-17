<template>
  <div id="map">
    <i class="material-icons">menu</i>

    <span id="localization" class="flex">
        <span class="dot"></span>
        <span class="circle"></span>
    </span>

    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 80 135" 
        preserveAspectRatio="none">

        <polyline id="path1"
        points="24, 66 30, 68 29, 80" 
        stroke="black" 
        fill="none"
        style="stroke-width: 1.3px"></polyline>

        <polyline id="path2"
        points="29, 80 30, 65 33, 59 46, 55 50, 47 56, 52 60, 55 63, 56" 
        stroke="black" 
        fill="none"
        style="stroke-width: 1.3px"></polyline>

        <polyline id="path3"
        points="57, 53 61, 44 50, 39 43, 41"
        stroke="black" 
        fill="none"
        style="stroke-width: 1.3px"></polyline>

        <!-- Points -->
        <circle cx="29" cy="80" r="1.5" fill="red"/>
        <circle cx="63" cy="56" r="1.5" fill="red"/>
        <circle cx="43" cy="41" r="1.5" fill="red"/>
    </svg>

    <i  class="icons8-location-marker" 
        id="marker"></i>

    <div id='activityContainer'>
        <div class="button flex" id="no"><span v-html="$t('no')"></span><i class="icons8-no"></i></div>
        <div class="button flex" id="yes"><span v-html="$t('yes')"></span><i class="icons8-love"></i></div>

        <activity   v-for="(activity, index) in activities" 
                    :key="activity.name" 
                    :data="activity"
                    :id="index"></activity>
    </div>
  </div>
</template>

<script>
import { TweenMax, Back, TimelineLite } from 'gsap';
import Vue      from 'vue';
import Activity from './Activity';

export default {
    name: 'Map',
    data: function() {
        let array = [];
        this.$i18n.t('activities').forEach(activity => {
            array.push({
                name:       activity.name,
                location:   activity.location,
                time:       activity.time,
                distance:   activity.distance
            });
        });
        return {
            activities: array,
            activityNb: 0
        };
    },
    mounted: function() {        
        const localization = document.querySelector('#localization .circle');      
        TweenMax.to(localization, 1, 
        { width: '10vh', height: '10vh', 
        repeat: -1, 
        yoyo: true }).play();


        let tweenline = new TimelineLite({paused: true});

        tweenline.to(document.getElementById('4'), .5, 
                    { left: '100%', ease: Back.easeIn, delay: 3.5, onComplete: this.nextActivity })
                .to(document.getElementById('3'), .5, 
                    { right: '100%', ease: Back.easeIn, delay: 2, onComplete: this.nextActivity })
                .to(document.getElementById('2'), .5, 
                    { left: '100%', ease: Back.easeIn, delay: 2, onComplete: this.nextActivity })
                .to(document.getElementById('1'), .5, 
                    { left: '100%', ease: Back.easeIn, delay: 2, onComplete: this.nextActivity }).play();

    },
    methods: {
        nextActivity: function() {
            this.activityNb++;
            const marker = document.getElementById('marker');
            switch(this.activityNb) {
                case 1: 
                    marker.style.top = '60%';
                    marker.style.left = '85%';
                break;
                case 2: 
                    marker.style.top = '32%';
                    marker.style.left = '70%';
                break;
                case 3: 
                    marker.style.top = '20%';
                    marker.style.left = '40%';
                break;
                case 4: 
                    marker.style.top = '21%';
                    marker.style.left = '76%';
                break;
                
            }
        }
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
    background-position-x: 56%;
    background-position-y: 20%;
    width: 100%;
    height: 100%;

    > i {
        float: left;
        margin: 10px;
    }

    #marker {
        position: absolute;
        color: $pink;
        font-size: 4vh;
        top: 52%;
        left: 34%;
    }


    #localization {
        position: absolute;
        top: 48%;
        left: 28%;
        width:  2vh;
        height: 2vh;
        justify-content: center;
        align-items: center;
        z-index: 100;

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

    svg {
        position: absolute;
        top: 0; left: 0;
        width: 100%;
        height: 100%;
    }


    #activityContainer {
        position: absolute;
        bottom: 15%;
        width: 100%;

        .button {
            position: relative;
            text-align: center;
            border-radius: 5px;
            display: inline-block;
            color: #fff;
            width: 48%;
            background-color: $lightblue;
            font-size: 3.5vh;
            padding: 5px 0px 5px 0px;
            opacity: 0.9;
            white-space: nowrap;

            i {
                float: right;
                margin-right: 5px;
            }
        }
    }

}
</style>
