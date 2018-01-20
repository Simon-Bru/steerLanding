<template>
  <section id="contact" class="wrapper flex flex-center">
    <div class="content">
      <div class="content__container flex">
        <p class="content__container__text" v-html="$t('discover')"></p>
        
        <ul class="content__container__list" id='demoList'>
          <li class="content__container__list__item" v-for="item in items" :key="item" v-html="item"></li>
        </ul>
      </div>
    </div>

    <div class="webflow-style-input">
      <input class="" type="email" placeholder="What's your email?"/>
      <button type="submit">
        <i class="icon ion-android-arrow-forward"></i>
      </button>
    </div>
  </section>
</template>

<script>
import { TweenlineMax, Sine } from 'gsap'; 

export default {
    name: 'Contact',
    data: function() {
      let itemsArray = [];
      this.$i18n.t('demoList').forEach(item => {
          itemsArray.push(item);
      });

      return { 
        items: itemsArray
      };
    },
    mounted: function() {
      const list = document.getElementById('demoList');
      console.log(list);

      let tl = new TimelineMax({ paused: false, repeat: -1, repeatDelay: 1 });

      tl.to(list, 1, { top: '+=-40px', ease: Sine.easeInOut, delay: 1 })
        .to(list, 1, { top: '+=-40px', ease: Sine.easeInOut, delay: 1 })
        .to(list, 1, { top: '+=-40px', ease: Sine.easeInOut, delay: 1 })
        .to(list, 1, { top: '+=-40px', ease: Sine.easeInOut, delay: 1 }).play();
    }
}
</script>

<style lang="scss">
@import "../assets/style/_colors.scss";

#contact {
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 110px 20px 50px;

  input { 
    border-style: none; 
    background: transparent;
    outline: none; 
    font-size: 1vw;
  }
  button { 
    padding: 0; 
    background: none; 
    border: none; 
    outline: none; 
  }

  // colors
  $input-background: rgba(57, 63, 84, 0.8);
  $input-text-inactive: #7881A1;
  $input-text-active: #BFD2FF;

  // gradient animation
  @keyframes gradient { 
    0%{background-position:0 0}
    100%{background-position:100% 0}
  }

  .webflow-style-input {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    border-radius: 2px;
    padding: 1.4rem 2rem 1.6rem;
    background: $input-background;

    &:after {
      content: "";
      position: absolute;
      left: 0px;
      right: 0px;
      bottom: 0px;
      z-index: 999;
      height: 2px;
      border-bottom-left-radius: 2px;
      border-bottom-right-radius: 2px;
      background-position: 0% 0%;
      background: linear-gradient(to right, #B294FF, #57E6E6, #FEFFB8, #57E6E6, #B294FF, #57E6E6);
      background-size: 500% auto;
      animation: gradient 3s linear infinite;
    }
    
    input {
      width: 100%;
      color: $input-text-active;
      font-size: 1.5rem;
      // line-height: 2.4rem;
      &::-webkit-input-placeholder {
        color: $input-text-inactive;
      }
    }

    button {
      color:  $input-text-inactive;
      font-size: 2.4rem;
      line-height: 2.4rem;
      vertical-align: middle;
      transition: color .25s;
      &:hover {
        color: $input-text-active;
      }
    }
  }


  /**
  * List styles
  */
  .content {
    position: relative;
    width: 350px;
    overflow:hidden;
    margin-bottom: 100px;
    
    font-family: 'Lato', sans-serif;
    font-size: 35px;
    line-height: 40px;
    color: #ecf0f1;
    
    &__container {
      font-weight: 600;
      overflow: hidden;
      height: 40px;
      padding: 0 40px;

      &:before {
        content: '[';
        left: 0;
      }

      &:after {
        content: ']';
        position: absolute;
        right: 0;
      }

      &:after, &:before {
        position: absolute;
        top: 0;
        
        color: $blue;
        font-size: 42px;
        line-height: 40px;
      }

      &__text {
        display: inline;
        // float: right;
        margin: 0;
        font-size: 22px;
      }

      &__list {
        margin-top: 0;
        text-align: right;
        list-style: none;
        padding: 0;
        position: absolute;
        right: 30px;
        top: 0;
        
        &__item {
          line-height:40px;
          margin:0;
        }
      }
    }
  }
}
</style>

