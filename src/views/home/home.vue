<template>
  <div>
     
        <NavWrapper />


  </div>
</template>

<script>
    
    import NavWrapper from './nav-wrapper'

    import $ from 'jquery';

    import {  TimelineLite } from 'gsap';

export default {
    components:{
        NavWrapper,
    
    },
    created(){
        var t1 = new TimelineLite();

        t1.from( $('#services-section'),1.5, {
            opacity: 0,
                x: 50
        });
    }
}
</script>

<style lang="scss" scoped>
    
</style>>

