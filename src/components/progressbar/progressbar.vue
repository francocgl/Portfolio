<template>
  <div>
      <div class="progressbar"></div>
      <div class="progressbar-2"></div>
  </div>
</template>

<script>

import $ from 'jquery'

export default {

}
$(window).scroll( function (){
    this.scroll = $(window).scrollTop();
    this.dh = $(document).height();
    this.wh = $(window).height();
    this.scrollPercent = (this.scroll / (this.dh - this.wh)) * 200;
     this.scrollTotal = (this.dh / (this.dh - this.wh)) * 100; 
    $('.progressbar').css('height', ''+ this.scrollPercent + '');
    $('.progressbar-2').css('height', '200px');
    
})
</script>

<style>
    .progressbar, .progressbar-2{
        position: fixed;
        top: 50%;
        left:20px;
        background: var(--grey-color);
        width: 1.5px;
        z-index: 1;
        transform: translate(-50%,-50%);
    }
    .progressbar{
        background: chocolate;
        z-index: 2;
    }
</style>