<template>
  <div id="Contact" class="wrapper">
      
      <section>
        <ui-frame step="0"></ui-frame>
      </section>
      <section class="descContainer">


<div class="content">
  <div class="content__container">
    <p class="content__container__text">
      Let's discover
    </p>
    
    <ul class="content__container__list">
      <li class="content__container__list__item">Paris</li>
      <li class="content__container__list__item">France</li>
      <li class="content__container__list__item">Myself</li>
      <li class="content__container__list__item">others</li>
    </ul>
  </div>
</div>


        
  <div class="container">
  
  <div class="demo-flex-spacer"></div>

  <div class="webflow-style-input">
    <input class="" type="email" placeholder="What's your email?"></input>
    <button type="submit"><i class="icon ion-android-arrow-forward"></i></button>
  </div>
<br/>
  <div class="demo-flex-spacer"></div>
  <h1 class="demo">Webflow-style input</h1>
  <a class="demo" href="https://webflow.com/cms" title="Webflow CMS">https://webflow.com/cms</a>

</div>

    <section class="followLeft">

        
        


     </section>      
      </section>
  

  </div>
</template>

<script>
export default {
    name: 'Contact'
}
</script>

<style lang="scss">

/* ====================================================
Recreating the email field from https://webflow.com/cms. Just an experiment - not as cross-browser friendly as the original.
Changed:
- animated gradient bar to :after element
- flexbox for layout
==================================================== */

// reset
html { box-sizing: border-box; font-size: 10px; }
*, *:before, *:after { box-sizing: inherit; }
body, ul, li  { margin: 0; padding: 0; }
li { list-style: none; }
p, h1, h2, h3, h4, h5, h6 { margin-top: 0; }
a { text-decoration: none; }
input { border-style: none; background: transparent; outline: none; }
button { padding: 0; background: none; border: none; outline: none; }

// some basic page styles
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  background-image: radial-gradient(circle at 0% 0%, #373b52, #252736 51%, #1d1e26);
}

// for demo
h1.demo {
  text-align: center;
  font-size: 2.4rem;
  font-weight: normal;
  margin-bottom: 1rem;
  color: #f5f6ff;
}
a.demo {
  text-align: center;
  font-size: 1.6rem;
  font-weight: normal;
  color: rgba(202, 205, 239, 0.8);
  margin-bottom: 3rem;
}
.demo-flex-spacer {
  flex-grow: 1;
}
.container {
  display: flex;
  flex-direction: column;
  //justify-content: center;
  height: 100vh;
  max-width: 1600px;
  padding: 0 15px;
  margin: 0 auto;
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
}

.webflow-style-input input {
  flex-grow: 1;
  color: $input-text-active;
  font-size: 1.8rem;
  line-height: 2.4rem;
  vertical-align: middle;
  &::-webkit-input-placeholder {
    color: $input-text-inactive;
  }
}

.webflow-style-input button {
  color:  $input-text-inactive;
  font-size: 2.4rem;
  line-height: 2.4rem;
  vertical-align: middle;
  transition: color .25s;
  &:hover {
    color: $input-text-active;
  }
}

 body {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #34495e;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 160px;
  overflow:hidden;
  
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
      
      color: #16a085;
      font-size: 42px;
      line-height: 40px;
      
      -webkit-animation-name: opacity;
      -webkit-animation-duration: 2s;
      -webkit-animation-iteration-count: infinite;
      animation-name: opacity;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }

    &__text {
      display: inline;
      float: left;
      margin: 0;
    }

    &__list {
      margin-top: 0;
      padding-left: 110px;
      text-align: left;
      list-style: none;
      
      -webkit-animation-name: change;
      -webkit-animation-duration: 10s;
      -webkit-animation-iteration-count: infinite;
      animation-name: change;
      animation-duration: 10s;
      animation-iteration-count: infinite;

      &__item {
        line-height:40px;
        margin:0;
      }
    }
  }
}

@-webkit-keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@-webkit-keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}

@-o-keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@-o-keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}

@-moz-keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@-moz-keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}

@keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}



</style>

