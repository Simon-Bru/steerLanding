<template>
  <section id="contact" class="wrapper flex flex-center">
    <div class="content">
      <div class="content__container flex">
        <p class="content__container__text" v-html="$t('discover')"></p>
        
        <ul class="content__container__list" id='demoList'>
          <li class="content__container__list__item" v-for="(item, index) in items" :key="index" v-html="item"></li>
        </ul>
      </div>
    </div>
    <div style='text-align:center;width:auto;margin-top: 20px; margin-bottom: 20px;'>
      <h1 v-html="$t('follow.texte1')"></h1>
      <h3 v-html="$t('follow.texte2')"></h3>
    </div>
    <div class="webflow-style-input">
      <input type="email" :placeholder="$t('email')" v-model="email" />
      <button type="submit" v-on:click='submit(email)' :disabled="submitted">
        <i id="buttonIcon" 
        :class="{ 
          'icons8-caret-arrowhead-facing-down': !submitted && !loading,
          'icons8-circled-notch': submitted && loading,
          'icons8-check-mark-symbol': submitted && !loading
        }"></i>
      </button>
    </div>
    <small id="errorMsg" v-html="$t('error')" v-if="error"></small>
  </section>
</template>

<script>
import { TweenlineMax, Sine } from 'gsap'; 
import Vue from 'vue';

export default {
    name: 'Contact',
    data: function() {
      let itemsArray = [];
      this.$i18n.t('demoList').forEach(item => {
          itemsArray.push(item);
      });

      return { 
        items: itemsArray,
        email: '',
        submitted: false,
        loading: false,
        error: false
      };
    },
    mounted: function() {
      const list = document.getElementById('demoList');

      let tl = new TimelineMax({ paused: false, repeat: -1, repeatDelay: 1 });

      tl.to(list, 1, { top: '+=-40px', ease: Sine.easeInOut, delay: 1 })
        .to(list, 1, { top: '+=-40px', ease: Sine.easeInOut, delay: 1 })
        .to(list, 1, { top: '+=-40px', ease: Sine.easeInOut, delay: 1 }).play();
    },
    methods: {
      submit: function(email) {
        this.loading = true;
        this.submitted = true;
        this.error = false;

        // TODO validate mail
        if(email !== null && email) {
          this.$http.post('subscribe', { email: email },
          { headers: { 'X-CSRF-Token': this.getCookie('XSRF-TOKEN'), 'Content-Type': 'application/json; charset=utf-8' } }).then((response) => {
            this.loading = false;
          }, (response) => {
            this.loading = false;
            this.submitted = false;
            this.error = true;
          });
        }
      },
      getCookie: function(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }
    }
}
</script>

<style lang="scss">
@import "../assets/style/_colors.scss";

#contact {
  color: #fff;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 110px 20px 50px;

  #errorMsg {
    color: #e74c3c;
  }

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
    justify-content: center;
    align-items: center;
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
      line-height: 2.4rem;
      &::-webkit-input-placeholder {
        color: $input-text-inactive;
      }
    }

    @keyframes spin { 
      100% { transform: rotate(360deg); }
    }


    button {
      color:  $input-text-inactive;
      font-size: 1.5rem;
      line-height: 1.5rem;
      vertical-align: middle;
      transition: color .25s;
      cursor: pointer;

      &:hover {
        color: $input-text-active;
      }
    }

    .icons8-circled-notch::before {
      cursor: not-allowed;      
      animation: spin 1.5s linear infinite;
    }

    .icons8-caret-arrowhead-facing-down::before {
      transform: rotate(-90deg);
    }

    .icons8-circled-notch {
      transform: rotate(0deg);      
    }
    

  }


  /**
  * List styles
  */
  .content {
    position: relative;
    width: 350px;
    min-height: 40px;
    overflow:hidden;
    margin-bottom: 5%;
    
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

