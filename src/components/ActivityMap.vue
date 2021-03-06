<template>
  <div id="map">
    <i class="icons8-menu"></i>

    <span id="localization" class="flex">
        <span class="dot"></span>
        <span class="circle"></span>
    </span>

    <svg 
        xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"
        viewBox="0 0 80 135" 
        preserveAspectRatio="none">

        <polyline id="path1" class="path"
            points="24, 66 30, 68 29, 80" 
            v-if="activityNb > 0"></polyline>

        <polyline id="path2" class="path"
            points="29, 80 30, 65 33, 59 46, 55 50, 47 56, 52 60, 55 63, 56"
            v-if="activityNb > 2"></polyline>

        <polyline id="path3" class="path"
            points="57, 53 61, 44 50, 39 43, 41"
            v-if="activityNb > 3"></polyline>

        <!-- Points -->
        <circle cx="29" cy="80" r="1.5" v-if="activityNb > 0" class="place"/>
        <circle cx="63" cy="56" r="1.5" v-if="activityNb > 2" class="place"/>
        <circle cx="43" cy="41" r="1.5" v-if="activityNb > 3" class="place"/>
    </svg>

    <i  class="icons8-location-marker marker" 
        :id="markerId"></i>

    <div id='activityContainer'>
        <div class="button flex" id="no">
            <i class="icons8-no"></i>
            <span v-html="$t('no')"></span>
        </div>
        <div class="button flex" id="yes">
            <i class="icons8-love"></i>
            <span v-html="$t('yes')"></span>
        </div>

        <activity   v-for="(activity, index) in activities" 
                    :key="activity.name" 
                    :data="activity"
                    :id="index+uniqueId"></activity>
    </div>
  </div>
</template>

<script>
import { TweenlineMax, Back } from 'gsap';
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
        const unique = Math.floor(Math.random() * 100);

        return {
            activities: array,
            activityNb: 0,
            uniqueId: unique,
            markerId: "marker"+unique
        };
    },
    mounted: function() {       
        
        this.markerId = "marker"+Math.floor(Math.random() * 10);
        const localization = document.querySelector('#localization .circle');

        let tweenline1 = new TimelineMax({ paused: true, repeat: -1 });

        tweenline1.to(localization, 1.5, 
        { width: '10vh', height: '10vh',
        ease: Power1.easeOut })
        .to(localization, .5,
        { opacity: '0.2' }).play();


        let tweenline = new TimelineMax({paused: true, repeat: -1, repeatDelay: 3.5 });

        let MainAnimation = tweenline.to(document.getElementById(4+this.uniqueId), .5, 
            { left: '100%', ease: Back.easeIn, delay: 2, onComplete: this.nextActivity })
        .to(document.getElementById(3+this.uniqueId), .5, 
            { right: '100%', ease: Back.easeIn, delay: 1.5, onComplete: this.nextActivity })
        .to(document.getElementById(2+this.uniqueId), .5, 
            { left: '100%', ease: Back.easeIn, delay: 1.5, onComplete: this.nextActivity })
        .to(document.getElementById(1+this.uniqueId), .5, 
            { left: '100%', ease: Back.easeIn, delay: 1.5, onComplete: this.nextActivity }).play();

    },
    methods: {
        nextActivity: function() {
            this.activityNb++;

            const marker = document.getElementById(this.markerId);
            if(marker !== null){
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
                        marker.style.top = '21%';
                        marker.style.left = '43%';
                    break;
                    case 4: 
                        marker.style.top = '21%';
                        marker.style.left = '76%';
                        setTimeout(() => {
                            this.activityNb = 0;
                            marker.style.top = '52%';
                            marker.style.left = '34%';
                        }, 3500);
                    break;
                }
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

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

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

    .marker {
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
        opacity: 1;

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

            .path {
                stroke: $black;
                fill: none;
                stroke-width: 1.3px;
                stroke-dasharray: 100;
                stroke-dashoffset: 100;
                animation: dash 2s linear forwards;

            }

            .place { fill: $pink; }

    }


    #activityContainer {
        position: absolute;
        bottom: 20%;
        width: 100%;

        .button {
            position: relative;
            text-align: center;
            border-radius: 5px;
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
    }

}
</style>
