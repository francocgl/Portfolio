<template>
    <div>
        <Header :passingRouter="false" />
        
        <section class="home-section">
           
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
                                    v-on:mouseenter="openWrapper(1)"
                                >
                                 <router-link  to="/acerca" > <span data-text="Acerca">Acerca</span> </router-link>
                            </a>
                        </li>
            
                        <li  
                            :class="{
                                'nav-item nav-item-2': true,
                                'active-modal': (modal == 2) ? true : false
                            }"
                        >
                            <a   

                                href="servicios"
                                v-on:mouseenter="openWrapper(2)"
                            >

                                <router-link  to="/servicios" >  <span data-text="Servicios"> Servicios</span></router-link>

                            </a>
                        </li>
            
                        <li 
                             :class="{
                                'nav-item nav-item-3': true,
                                'active-modal': (modal == 3) ? true : false
                            }"
                        >
                            <a 
                                href="/portfolio"
                                v-on:mouseenter="openWrapper(3)"
                                :passingRouter="true"
                            >
                                 <router-link  to="/portfolio" > <span data-text="Portfolio">Portfolio</span></router-link>
                            
                            </a>
                        </li>

                        <li 
                             :class="{
                                'nav-item nav-item-4': true,
                                'active-modal': (modal == 4) ? true : false
                            }"
                        >
                            <a 
                                v-on:mouseenter="openWrapper(4)"
                            >
                                 <router-link  to="/contacto" > <span data-text="Contacto">Contacto</span></router-link>
                            </a>
                        </li>
            
                    </ul>

                 </nav>

                <main class="wrapper-container">
                    
                    <transition name="slide">
                    
                        <div class="wrapper" v-if="wrapper == true">
                          <!--   <div class="closing-animation ">
                                
                                <div class="section-number ">
                                
                                    0{{this.modal}}
                                
                                </div>

                                <div class="menu-times " @click="closeWrapper()">
                                    
                                    <span class="times" ></span>
                                
                                </div>
                            </div> -->
                            <div class="wrapper-content">

                                <About v-if="modal == 1"/>
                                
                                <Services v-if="modal == 2"/>
                        
                                <Portfolio v-if="modal == 3"/>

                                <Contact v-if="modal == 4"/>
                        
                            </div>
                        </div>
                    
                    </transition>

                </main>

             
            </div>


            <div class="redes">
                <ul>
                    <li>
                        <a ref="box" href="https://www.instagram.com/francocagliolo/?hl=es-la" target="_blank">
                            <!-- <font-awesome-icon class=" redes-icon" :icon="['fab', 'instagram']"  /> -->
                            Instagram
                        </a>
                    </li>

                    <li>
                        <a ref="box" href="https://www.linkedin.com/in/franco-cagliolo-5534b0139/" target="_blank">
                           <!--  <font-awesome-icon class=" redes-icon" :icon="['fab', 'linkedin']" /> -->
                            Linkedin
                        </a>
                    </li>

                    <li>
                        <a ref="box" href="https://www.behance.net/francocgl" target="_blank">
                            <!-- <font-awesome-icon class=" redes-icon" :icon="['fab', 'behance']" /> -->
                            Behance
                        </a>
                    </li>
                </ul>
            </div>

            <nav class="nav-wrapper-mobile animate-header">
                <span v-if="modal > 1" v-on:click="openWrapper(modal - 1)" >
                    <i class="icon-arrow-left-big back-btn"></i>
                 
                </span>
                <span v-if="modal < 4" v-on:click="openWrapper(modal + 1)">
                   <i class="icon-arrow-big back-btn"></i>
                </span>
            </nav>

        </section>
    </div>
</template>

<script>
import $ from 'jquery';

import {  TimelineLite, Expo } from 'gsap';


import {  Header } from '@/components';
import  About  from '@/views/home/about';
import  Portfolio  from '@/views/home/portfolio';
import  Services  from '@/views/home/services';
import  Contact  from '@/views/home/contact';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faBehance } from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram, faLinkedin, faBehance, faChevronRight);

export default {
  
    components:{
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
        this.openWrapper(1);

         var t2 = new TimelineLite();
             t2.from( $('.project-preview'), 0.5, {
                width: '0',
                ease: Expo.easeInOut
    
            }).to( $('.project-preview'), 0.5, {
                width: '700px',
                backgroundImage:'url(assets/nav-item-1.png)',
                overflow: 'visible',
                ease: Expo.easeInOut
                
            });
            t2.from( $('.nav-item'), 1, {
                opacity: 0,
                stagger: 0.2,
                y: -50,
                ease: Expo.easeOut,
            });
            
    },
    methods: {
            asd(){
                 $('.nav-item').addClass('fill');
            },

        openWrapper: function(value){

            $('.nav-item').removeClass('active');
            $('.nav-item-'+value).addClass('active');


            var t1 = new TimelineLite();
           
           t1.set($(".wrapper-container"), {background:'url(assets/nav-item-'+ value +'.jpeg) repeat center 50% '});

            t1.from( $('.project-preview '), 1, {
                opacity: 0,
                ease: Expo.easeInOut
            }).to( $('.project-preview'), 1, {
                opacity: 1,
                ease: Expo.easeInOut
            });

           /*  var t2 = new TimelineLite();
             t2.from( $('.nav-item '), 1, {
                width: 0,
            }).to( $('.nav-item'), 1, {
                width: 100
            }); */

            
            if(this.wrapper == false){
                
                this.wrapper= true;
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

  
    .home-section{ 
        
        background: url('./assets/rombos-bg.png') no-repeat -10% -10%;
        
        background-size: 40%; 
        background-attachment: cover; 
        
        padding: 0;
    }
     
    .wrapper-container{
        grid-column: 3 / span 4;

        position: relative;

        padding-left: 20px;


        overflow: hidden;
    }
    .wrapper-content{ width: 100%;}
    .wrapper-container .wrapper{

        background: rgba(34, 38, 42, 0.60);
        
        position: absolute;

        width: 100%;

        z-index: 40;

        top: 0;

        left: 0;

        bottom: 0;

        right: 0;

       background-attachment: cover;

       display: flex;
       
       align-items: center;
    }
   
    .nav-wrapper{
        
        position: relative;
        
        width: 100%;
        
        grid-column: 1 / span 2;

        align-self: center;
        
        display: flex;

        padding: 0 50px;
        
    }
    .nav-list{
        
        z-index: 4;
        
        margin:0; 
        
    }
    .nav-wrapper li a{
        
        font-size: 5vh;
        
        color: #fff;

         -webkit-text-stroke: 0.5px var(--darkblue-color);
        
        font-weight: 700;
        
    }

    .nav-wrapper .nav-item span{
        
        position: relative;
        
        display: block;

        cursor: pointer;
    }

    .active a{
        color: #112a40b0 ;
          
    }

     .nav-wrapper .nav-item span:before{
        
        width: 0;
        
        color: var(--darkblue-color);
        
        overflow:hidden;
        
        position: absolute;
        
        content: attr(data-text);
        
        transition: all 600ms cubic-bezier(0.84, 0, 0.08, 0.99);

     }
  

  /* 
    .active-modal{
         color: var(--darkblue-color);
    } */
    
    .active-modal a span:before{
        width: 100% !important;
        
        transition:  all 600ms ease-in !important;
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
        
        grid-column: 6;

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
       
        display: grid;
        
        grid-template-columns: 1fr 2fr 2fr 2fr 2fr 1fr;
       
       align-items: center;
       

       position: absolute;
   }

   .redes{
       display: grid;
        
        grid-template-columns: 1fr 2fr 2fr 2fr 2fr 1fr;
        
        align-items: center;
        
        grid-gap: 20px;
        
        width: 100%;
        
        z-index: 20;
        
        padding: 20px;
    
        position: absolute;
        
        top: 90%;
        
        transform: translate(0, -50%);

        z-index: 2;
    
    }
    .redes ul{
        display: flex;
        margin: 0;
        padding-left: 20px;
    }
    
    .redes li{
        font-weight: 400;
        font-size: 0.9em;
        padding: 0 10px;
        
    }
    .redes li a{

        display: flex;
            
        align-items: center;

        color: var(--darkblue-color);

        mix-blend-mode: difference;

        transition: all 600ms ease-in-out;
    }

     .redes li a:hover{
          color: var(--gold-color);
     }

     .redes li a svg{
         font-size: 1.2em;
     }

     .nav-wrapper-mobile{
         display: none;
     }
   

    .slide-enter-active {
        animation: slide-in .8s ;
    }

    .slide-leave-active {
        animation: slide-in .8s reverse;
    }
    
    @keyframes slide-in {
        0% {
            /* transform: translateX(1000px); */
            opacity: 0
            
        }
    
        100% {
            /* transform: translateX(0px); */
            opacity: 1
        }
    }

    @media(max-width: 768px){
    .nav-wrapper-mobile{
         display: flex;
         position: absolute;
         left:50%;
         transform: translate(-50%, -50%);
         bottom: 1rem;
         z-index: 100;
         
     }
       .nav-wrapper-mobile  span{
       
        display: block;
        margin: 0 1.5rem;  
          color: #fff;
          font-size: 2rem;
     }
    .nav-wrapper-mobile .back-btn{
        transform: rotate(180deg);
    }
           
        .nav-wrapper li a{
            font-size: 6vh;
            color: var(--darkblue-color);
            border: 0px;
        }
        .nav-wrapper, .redes{
            display: none;
        }
        .wrapper-container{
            grid-column: 1 / span 6;
        }

     
    }

    
    
</style>