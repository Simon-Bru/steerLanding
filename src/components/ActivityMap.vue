<template>
  <div id="map">
    <i class="material-icons">menu</i>

    <span id="localization" class="flex">
        <span class="dot"></span>
        <span class="circle"></span>
    </span>

    <i class="icons8-location-marker" :class="activityClass"></i>

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
            activityNb: 0,
            activityClass: "activity0"
        };
    },
    mounted: function() {        
        const localization = document.querySelector('#localization .circle');      
        // TweenMax.to(localization, 1, 
        // { width: '10vh', height: '10vh', 
        // repeat: -1, 
        // yoyo: true }).play();


        let tweenline = new TimelineLite({paused: true});

        tweenline.to(document.getElementById('3'), .5, 
                    { left: '100%', ease: Back.easeIn, delay: 3.5, onComplete: this.nextActivity })
                .to(document.getElementById('2'), .5, 
                    { right: '100%', ease: Back.easeIn, delay: 1, onComplete: this.nextActivity })
                .to(document.getElementById('1'), .5, 
                    { left: '100%', ease: Back.easeIn, delay: 1, onComplete: this.nextActivity })
                .to(document.getElementById('0'), .5, 
                    { left: '100%', ease: Back.easeIn, delay: 1, onComplete: this.nextActivity }).play();

    },
    methods: {
        nextActivity: () => {
            this.activityNb++;
            this.activityClass = 'activity'+this.activityNb;
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
    background-position-x: 40%;  
    width: 100%;
    height: 100%;

    > i {
        float: left;
        margin: 10px;
    }

    .icons8-location-marker {
        position: absolute;
        color: $pink;
    }
    .activity0 {
        left: 75%;
        top: 55%;
    }


    #localization {
        position: absolute;
        top: 46%;
        left: 65%;
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


    #activityContainer {
        position: absolute;
        bottom: 25%;
        width: 100%;

        .button {
            position: relative;
            text-align: center;
            border-radius: 5px;
            display: inline-block;
            color: #fff;
            width: 48%;
            background-color: $lightblue;
            font-size: 1.4vw;
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
