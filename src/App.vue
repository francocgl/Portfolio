<template>
  <div id="app">
    <transition  name="fade" mode="out-in" >
        <router-view />
    </transition>  

  </div>
</template>
    
<script>

export default {
  name: 'app'
}
</script>

<style>
  @import './styles/main.scss';

  #app{
    overflow: hidden;
  }

  .fade-enter-active {
    transition: all .600ms cubic-bezier(1.0, 0.5, 0.8, 1.0);
    animation: fade-in 1s ;
  }
  .fade-leave-active {
    /* transition: all 1.4s cubic-bezier(1.0, 0.5, 0.8, 1.0); */
    animation: fade-in 1s reverse;
  }
 
    
    @keyframes fade-in {
        0% {
            opacity: 0;
            
        }
    
        100% {
            opacity: 1;
        }
    }

    @keyframes fade-out {
        0% {
            transform: translateX(1000px);
            
        }
    
        100% {
            transform: translateX(0px);
            opacity: 1;
        }
    }
  


  .overlay{
    height: 100%;
    width: 0;
    position: absolute;
    background:var(--darkblue-color)
  }

  
</style>
