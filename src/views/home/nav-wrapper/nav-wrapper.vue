<template>
    <div>
        <Header :passingRouter="true" />
        
        <section class="home-section">
            <Redes />
           
             <div class="project-preview-wrapper" >
                
                <nav class="nav-wrapper">
                    
                    <ul class="nav-list" >
                        
                        <li 
                            :class="{
                                'nav-item nav-item-1': true,
                                'active-modal': (modal == 1) ? true : false
                            }"
                        >
                            <a  
                               
                                @click="openWrapper(1)"
                                v-on:mouseenter="mouseenter(1)"
                            >

                                <span data-text="Acerca">Acerca</span>

                            </a>
                        </li>
            
                        <li  
                            :class="{
                                'nav-item nav-item-2': true,
                                'active-modal': (modal == 2) ? true : false
                            }"
                        >
                            <a   @click="openWrapper(2)"
                                v-on:mouseenter="mouseenter(2)"
                            >

                                <span data-text="Servicios"> Servicios</span>

                            </a>
                        </li>
            
                        <li 
                             :class="{
                                'nav-item nav-item-3': true,
                                'active-modal': (modal == 3) ? true : false
                            }"
                        >
                            <a  @click="openWrapper(3)"
                                v-on:mouseenter="mouseenter(3)"
                            >
                                <span data-text="Portfolio">Portfolio</span>
                            
                            </a>
                        </li>

                        <li 
                             :class="{
                                'nav-item nav-item-4': true,
                                'active-modal': (modal == 4) ? true : false
                            }"
                        >
                            <a  @click="openWrapper(4)"
                                v-on:mouseenter="mouseenter(4)"
                            >

                                <span data-text="Contacto">Contacto</span>
                            </a>
                        </li>
            
                    </ul>
                </nav>

                <main class="wrapper-container">
                    
                    <transition name="slide">
                    
                        <div class="wrapper" v-if="wrapper == true">
                            <div class="closing-animation ">
                                
                                <div class="section-number ">
                                
                                    0{{this.modal}}
                                
                                </div>

                                <div class="menu-times " @click="closeWrapper()">
                                    
                                    <span class="times" ></span>
                                
                                </div>
                            </div>
                            <div class="wrapper-content">

                                <About v-if="modal == 1"/>
                                
                                <Services v-if="modal == 2"/>
                        
                                <Portfolio v-if="modal == 3"/>

                                <Contact v-if="modal == 4"/>
                        
                            </div>
                        </div>
                    
                    </transition>

                </main>

                <div class="project-preview " v-bind:style="{backgroundImage:'url(assets/nav-item-1.jpg)'}">
                   
                   <!--  <span class="number-page">01</span> -->
               
                </div>

            </div>

        </section>
    </div>
</template>

<script>
import $ from 'jquery';

import {  TimelineLite, Expo } from 'gsap';


import { Redes, Header } from '@/components';
import  About  from '@/views/home/about';
import  Portfolio  from '@/views/home/portfolio';
import  Services  from '@/views/home/services';
import  Contact  from '@/views/home/contact';

export default {
  
    components:{
        Redes,
        Header,
        About,
        Contact,
        Services,
        Portfolio,
    },
    data(){
        return{
            wrapper : false,
            modal : ''
        }
    },
    mounted(){
         var t2 = new TimelineLite();
            t2.to( $('.project-preview'), 0.1, {
                width: '500px',
                overflow: 'visible'
            });
            t2.from( $('.nav-item'), 1, {
                opacity: 0,
                stagger: 0.2,
                y: 50,
                 ease: Expo.easeOut,
            });
            
    },
    methods: {
        mouseenter:  function(id){
            $('.nav-item').removeClass('active');
            $('.nav-item-'+id).addClass('active');
            
            $('.project-preview').addClass('.project-preview-'+id);
            $('.number-page').html('0'+id)
           
           var t1 = new TimelineLite();
           
           t1.set($(".project-preview"), {backgroundImage:'url(assets/nav-item-'+ id +'.png)'});

            t1.from( $('.project-preview '), 0.7, {
                width: 0,
                ease: Expo.easeInOut
            }).to( $('.project-preview'), 1, {
                width: '700px',
                overflow: 'visible',
                ease: Expo.easeInOut
            });

        },
        openWrapper: function(value){
            if(this.wrapper == false){
                
                this.wrapper= true;
            }else
            {   
                this.wrapper= false;
                if(this.modal != value){
                    setTimeout(() => {
                        
                        this.wrapper= true;
                    }, 1000);
                }
            }
                    
            return  this.modal = value;

        },
        closeWrapper(){
            var t1 = new TimelineLite();
            t1.to( $('.closing-animation'), 0.4, {
                y: -50,
                stagger: 0,
                opacity: 0
               
            })
            t1.to( $('.wrapper-content'), 0.6, {
                x: 50,
                opacity: 0
               
            })
            
            setTimeout(() => {
                
                this.modal = 0
                return this.wrapper = false
            }, 800);
        },
        passModal(value){
               this.openWrapper(value);
        }
  }
}


</script>

<style  lang="scss" scoped>
    .active-modal span{
        color:var(--darkblue-color) !important;

    }
    .active a{
        color: #112a40b0 ;
          
    }
    .home-section{ 
        
      /*   background: url('./assets/logo-bg.png') no-repeat 50% 50%;
        
        background-size: 80%; 
         */
        padding: 0;
    }
     
    .wrapper-container{
        grid-column: 3 / span 4;

        position: relative;

        padding-left: 20px;


        overflow: hidden;
    }

    .wrapper-container .wrapper{
        position: absolute;

        width: 100%;

        z-index: 40;

        top: 0;

        left: 0;

        bottom: 0;

        right: 0;

        background: var(--darkblue-color);
    }
   
    .nav-wrapper{
        
        position: relative;
        
        width: 100%;
        
        grid-column: 1 / span 2;

        align-self: center;
        
        display: flex;
        
        justify-content: center;
        
    }
    .nav-list{
        
        z-index: 4;
        
        margin:0; 
        
    }
    .nav-wrapper li a{
        
        font-size: 5vh;
        
        color: var(--grey-color);
        
        font-weight: 600;
        
       /*  -webkit-text-stroke-width: 0.5px;
        
        -webkit-text-stroke-color: #112a40b0; */
    }

    .nav-wrapper .nav-item span{
        
        position: relative;
        
        display: block;

        cursor: pointer;
    }

     .nav-wrapper .nav-item span:before{
        
        width: 0;
        
        color: var(--darkblue-color);
        
        overflow:hidden;
        
        position: absolute;
        
        content: attr(data-text);
        
        transition: all 600ms cubic-bezier(0.84, 0, 0.08, 0.99);

     }
    
    .nav-wrapper .active span:before{
        width: 100%;
        
        transition:  all 600ms ease-in;
    }

    .project-preview-wrapper{
        
        width: 100%;
        
        height: 100vh;
        
        position: relative;
        
        display: grid;

        grid-template-columns: 1fr 2fr 2fr 2fr 2fr 1fr;
    }

    .project-preview{
        
        position: absolute;
        
        top: 50%;
        
        left: 65%;
        
        width: 500px;
        
        height:700px;
        
        transform: translate(-50%, -50%);
        
        background-size: cover;
        
        background-position: 50% 50%;
        
        overflow: hidden;
    }
    .project-preview span{
        
        font-size: 6rem;
       
        font-weight: 600;
        
        position: absolute;

        right: 15%;

        top: -20%;

        z-index: 2;
    }
    
    .project-preview::before {
        content: '';

        z-index: 1;

        text-transform: uppercase;

        color: var(--grey-color);

        font-weight: 700;

        position: absolute;

        right: 20px;

        top: 10px;

        font-size: 3em;;
    }

     .menu-times{
        
        width: 30px;
        
        height: 20px;
        
        display: flex;
        
        justify-content: center;

        flex-direction: column;
        
        justify-self: center;
        
       /*  position: absolute; */

        right: 25px;
        
        top: 25px;

        z-index: 2000;

        transition: 600ms all ease-in-out;

        cursor: pointer;

      
    }

    .times::before, .times::after{
        
        content: '';
        
        position: absolute;
        
        width: 30px;
        
        height: 3px;
        
        background: white;
        
        transition: all 1s ease-in-out;

    }

   .times::before{
       
       transform: rotate( -45deg);
   }

   .times::after{
       transform: rotate( 45deg);
       
   }

   .menu-times:hover .times::after, .menu-times:hover .times::before{
       transform: rotate( 0deg);

   } 

   .closing-animation{
       
       width: 100%;
       
       display: flex;
       
       justify-content: space-between;
       
       align-items: center;
       
       padding: 0 20px ;

       position: absolute;
   }

    .slide-enter-active {
        animation: slide-in .8s ;
    }

    .slide-leave-active {
        animation: slide-in .8s reverse;
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
        .project-preview{
            display:none;
        }
        .nav-wrapper {

            grid-column: 1 / span 6;
        }
        .nav-wrapper li a{
            font-size: 7vh;
        }
        .wrapper-container{
            
            grid-column: 1 / span 6;
            
            position: absolute;
            
            padding-left: 20px;
            
            left: 0;
            
            overflow: hidden;
            
            right: 0;
            
            top: 0;
            
            bottom: 0;
        }

        .closing-animation{
            position: relative;
        }
    }

    
    
</style>