<template>
    <div>
        <header class="nav-header" id="navHeader" >
            <div  class="logo-container">

                <router-link :to=" { path: '/' }" class="logo">
                    <img src="@/assets/logo.svg" alt="logo de marca" id="logo">    
                    <h2 class="logo-name">Franco Martin</h2>  
              
                </router-link>
            </div>
                
                <ul 
                  :class="{
                            'idioma' : true,
                            'white-text' : (passingRouter == false) ? true : false
                        }" >
        
                   <!--  <li class="active">ES</li>
        
                    <li>EN</li> -->
                    <li><span class="round"></span> Disponible para proyectos</li>
        
                </ul>
        
                <div 
                    :class="{
                            'menu-bars' : true,
                            'animateHeader' : true,
                            'white' : (passingRouter == false) ? true : false
                        }" 
                     @click="openingMenu()" >
                    <span class="bar-1 bars"></span>
                
                </div>
            
        </header>

        <div>
            <transition name="slide">

                <mobileHeader v-if="openMenu == true" @close="closeMenu" :router="passingRouter" />
        
            </transition>
        </div>
              
    </div>
</template>

<script>
    import $ from 'jquery';

    import {  TimelineLite } from 'gsap';

    import  mobileHeader  from '@/components/header/components'
   
    

export default {
    components:{
        mobileHeader,
       
    },
    props:{
        passingRouter: Boolean
    },
    data() {
        return{
            openMenu: false,
            lastScrollTop : null
        }
    },
    mounted(){
        this.lastScrollTop = 0;
        $(window).scroll( function (){
        this.scroll = $(this).scrollTop();

        if (this.scroll > 0) {
            $("#navHeader").css('transform', 'translateY(-100px)');
                } else {
                    $("#navHeader").css('transform', 'translateY(0px)');
                }
            this.lastScrollTop = $(this).scrollTop();

        })

        var t1 = new TimelineLite();

        t1.from( $('#navHeader'),0.6, {
                opacity: 0,
                y: -50
        });

        t1.from( $('.redes'),0.6, {
                opacity: 0,
                x: 50
        });
    },
    methods:{
        closeMenu (value) {
            if(value!=0){
                
                this.$emit('passingModal', value)
            }
            this.openMenu = false;
        },
        openingMenu(){
            this.openMenu = true

        }
    }
    
}


</script>

<style lang="scss" scoped >

    .logo-container{
        padding: 0px 30px;
        grid-column: 1 / span 2 ;
    }

    .logo{
        display: flex;
        align-items: center;

    }
    #logo{
        width: 35px;
        margin-right: 10px;
        
    }
    .white-text li{
        color:#fff !important;
    }
  
    .nav-header{
        
        display: grid;
        
        grid-template-columns: 1fr 2fr 2fr 2fr 2fr 1fr;
        
        align-items: center;
        
        grid-gap: 20px;
        
        width: 100%;
        
        z-index: 20;
        
        position: fixed;

        padding: 20px;
        
        z-index: 200;

        transition: all 600ms ease-in-out;
    }
    .logo-name{
        font-weight: 600;

        font-size: 0.9em;

        margin: 0;

        color: var(--darkblue-color);
    }
    .idioma{
        
        justify-self: end;
        
        display: flex;
        
        align-items: center;
        
        margin: 0;

       

        font-size: 0.9em;

        grid-column: 4 / span 2;
    }
    .idioma li{
        
        padding: 0 10px;
        
        font-weight: 500;
        
        font-size: 1em;

        color: var(--darkblue-color);
    }

    .idioma .active{
        font-weight: 600;
    }

    .idioma .round{
        
        display: inline-block;
        
        border-radius: 50%;
        
        height: 10px;
        
        width: 10px;
        
        background: var(--gold-color);
        
        margin: 0 5px;
    }
    .menu-bars{
        
        width: 30px;
        
        height: 27px;
        
        display: flex;
        
        justify-content: space-between;
        
        flex-direction: column;
        
        justify-self: center;
        
        position: relative;

        transition: 600ms all ease-in-out;

        cursor: pointer;

        grid-column: 6;

        z-index: 200;

    }
    .white .bars, .white .bars::after, .white .bars::before{
        background: #fff;
    }
   .bars{
        
        width: 30px;
        
        height: 3px;
        
        background: var(--darkblue-color);
        
        display: block;
    }

    .bars::after, .bars::before{
        
        content: '';
        
        position: absolute;
        
        width: 30px;
        
        height: 3px;
        
        background: var(--darkblue-color);
        
        transition: all 1s ease-in-out;

    }

    .bars::before{
        transform: translateY( 10px);
        
        width: 18px;
    }

    .bars::after{
        transform: translatey( 20px);
        width: 8px;
    }

    .menu-bars:hover .bars::before, .menu-bars:hover .bars::after{
       
         width: 30px
    }

    
    .slide-enter-active {
        animation: slide-in .9s forwards;
      }
    .slide-leave-active {
      animation: slide-in .9s reverse;
    }
    @keyframes slide-in {
        0% {
            transform: translateX(1000px);
          }
    
        100% {
            transform: translateX(0px);
          }
    }

    @media(max-width: 768px){
        .idioma, .logo-name{
            display:none;
        }
        .logo-container{
            padding: 0;
        }
    
    }
</style>