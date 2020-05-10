<template>
    <div>
        <!-- <div class="overlay">
            <div class="overlay-content">
                    <h3>Logo</h3>
                    <p>Cargando</p>
            </div>
        </div> -->
      <section class="home-section">
            <Redes />
           
             <div class="project-preview-wrapper" >
                
                <nav class="nav-wrapper">
                    
                    <ul class="nav-list" >
                        
                        <li class="nav-item nav-item-1 active">
                            <a href="#about-section"
                                v-on:mouseenter="mouseenter(1)"
                            >

                                <span data-text="Acerca">Acerca</span>

                            </a>
                        </li>
            
                        <li class="nav-item nav-item-2">
                            <a  href="#services-section"
                                v-on:mouseenter="mouseenter(2)"
                            >

                                <span data-text="Servicios"> Servicios</span>

                            </a>
                        </li>
            
                        <li class="nav-item nav-item-3">
                            <a   href="#portfolio-section"
                                v-on:mouseenter="mouseenter(3)"
                            >
                                <span data-text="Portfolio">Portfolio</span>
                            
                            </a>
                        </li>

                        <li class="nav-item nav-item-4">
                            <a href="#contact-section"
                                v-on:mouseenter="mouseenter(4)"
                            >

                                <span data-text="Contacto">Contacto</span>
                            </a>
                        </li>
            
                    </ul>
                </nav>

                <div class="project-preview ">
                   
                    <span class="number-page">01</span>
               
                </div>

            </div>

        </section>
    </div>
</template>

<script>
import $ from 'jquery';

import { TweenMax, TimelineLite, Expo, Power2 } from 'gsap';


import { Redes } from '@/components';

export default {
    components:{
        Redes,
    },
    mounted(){
            TweenMax.from('.overlay',0.2, {
                
                esase: Power2.easeInOut
            })

            TweenMax.to('.overlay', 1, {
                delay: 2.6,
                top: '-110%',
                esase: Expo.easeInOut
            });
            
    },
    methods: {
        mouseenter:  function(id){
            $('.nav-item').removeClass('active');
            $('.nav-item-'+id).addClass('active');
            
            $('.project-preview').addClass('.project-preview-'+id);
            $('.number-page').html('0'+id)
           
           var t1 = new TimelineLite();
           
           t1.set($(".project-preview"), {backgroundImage:'url(assets/nav-item-'+ id +'.jpg)'});

            t1.from( $('.project-preview '), 0.7, {
                width: 0,
                ease: Expo.easeInOut
            }).to( $('.project-preview'), 1, {
                width: '500px',
                overflow: 'visible',
                ease: Expo.easeInOut
            });

        }
  }
}


</script>

<style  lang="scss" scoped>
    .active a{
          color: #112a40b0;
          
    }
    .home-section{ 
        background: url('./assets/logo-bg.png') no-repeat 180% 50%;
        background-size: 80%; 
    }
    .overlay{
        background: var(--darkblue-color);
        position: absolute;
        width: 100%;
        z-index: 2;
        height: 100vh;
        overflow-y: hidden;
    }
    .overlay-content{
        position: absolute;
        top: 50%;
        color: white;
        left: 50%;
        transform: translate(-50%, -50%);
    }
   
    .preloader{
        width: 100%;
        height: 100vh;
        background: var(--darkblue-color);
        overflow: hidden;
        position: fixed;
        transition: 3s all ease-in-out;
        animation: brezier 5s forwards;
    }
    .preloader-content{
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--white-color);
    }
    .nav-wrapper{
        position: relative;
        height: 90vh;
        width: 100%;
    }
    .nav-wrapper ul{
        z-index: 4;
        position: absolute;
        top: 50%;
        left: 25%;
        margin:0;
        transform: translate(-50%, -50%);
        
    }
    .nav-wrapper li a{
        font-size: 5vh;
        color: white;
        font-weight: 600;
        -webkit-text-stroke-width: 0.5px;
        -webkit-text-stroke-color: #112a40b0;
    }

    .nav-wrapper .nav-item span{
        position: relative;
        display: block;
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
        display: flex;
        justify-content: center;
    }
    .project-preview{
        position: absolute;
        top: 50%;
        left: 70%;
        width: 0;
        height: 400px;
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
            content: '/////';

            z-index: 1;

            text-transform: uppercase;

            color: var(--grey-color);

            font-weight: 700;

            position: absolute;

            right: -20px;

            top: 10px;

            font-size: 3em;;
        }

        @media(max-width: 768px){
            .project-preview{
                display:none;
            }
             .nav-wrapper ul{

                 left: 50%;
             }
            .nav-wrapper li a{
                font-size: 7vh;
            }
        }

    
    
</style>