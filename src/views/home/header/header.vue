<template>
    <div>
        <div class="overlay">
            <div class="overlay-content">
                    <h3>Logo</h3>
                    <p>Cargando</p>
            </div>
        </div>
      <section >
            <Redes />
           
            <header class="nav-header">
            
                <h2>Logo</h2>
            
                    <ul class="idioma">
            
                        <li class="active">ES</li>
            
                        <li>EN</li>
            
                    </ul>
            
            
                    <div class="menu-bars">
                        <span class="bar-1 bars"></span>
                   
                    </div>
            
            </header>
            
            <div class="container">
                <nav class="nav-wrapper">

                    <div class="project-preview-wrapper">
                        <div class="project-preview project-preview-1">
                            <span>01</span>
                        </div>
                        
                        <div class="project-preview project-preview-2">
                             <span>02</span>
                        </div>
                        
                        <div class="project-preview project-preview-3">
                            <span>03</span>
                        </div>
                        
                        <div class="project-preview project-preview-4">
                            <span>04</span>
                        </div>
                    </div>
            
                    <ul class="nav-list">
                       
                        <li class="nav-item nav-item-1">
                            <a href="#about-section"
                                v-on:mouseover="mouseover(1)"
                                v-on:mouseleave="mouseleave(1)" >

                                <span data-text="Acerca">Acerca</span>

                            </a>
                        </li>
            
                        <li class="nav-item nav-item-2">
                            <a  href="#"
                                v-on:mouseover="mouseover(2)"
                                v-on:mouseleave="mouseleave(2)">

                                <span data-text="Servicios"> Servicios</span>

                            </a>
                        </li>
            
                        <li class="nav-item nav-item-3">
                           <a   href="#portfolio-section"
                                v-on:mouseover="mouseover(3)"
                                v-on:mouseleave="mouseleave(3)">
                                <span data-text="Portfolio">Portfolio</span>
                            
                            </a>
                        </li>

                        <li class="nav-item nav-item-4">
                            <a href="#"
                                v-on:mouseover="mouseover(4)"
                            v-on:mouseleave="mouseleave(4)">

                                <span data-text="Contacto">Contacto</span>
                            </a>
                        </li>
            
                    </ul>
            
                </nav>
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
            TweenMax.set(".project-preview-2", {width: 0});

            TweenMax.from('.overlay', 1, {
                
                esase: Power2.easeInOut
            })

            TweenMax.to('.overlay', 1, {
                delay: 2.6,
                top: '-110%',
                esase: Expo.easeInOut
            });
    },
    methods: {
        mouseover: function(id){
             var t1 = new TimelineLite();
             t1 = new TimelineLite();
            t1.to( $('.project-preview-'+id), 1, {
                width: '600px',
                ease: Expo.easeInOut
            });
        },    
        mouseleave: function(id){
             var t1 = new TimelineLite();
             t1 = new TimelineLite();
            t1.to( $('.project-preview-'+id), 0.7, {
                width: 0,
                ease: Expo.easeInOut
            });
        }
  }
}
 

</script>

<style  lang="scss" scoped>
   
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
    header{
        display: grid;
        grid-template-columns: 9fr 1fr 1fr;
        align-items: center;
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
    .nav-wrapper ul{
        position: absolute;
        top: 50%;
        left: 30%;
        margin:0;
        transform: translate(-50%, -50%);
        
    }
    .nav-wrapper li a{
        font-size: 12vh;
        color: #112a40b0;
        font-weight: 600;
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
         transition: all 1s cubic-bezier(0.84, 0, 0.08, 0.99);
     }
    
    .nav-wrapper .nav-item span:hover:before{
        width: 100%;
    }

    .project-preview-wrapper{
        width: 100%;
        height: 100vh;
        position: fixed;
        display: flex;
        justify-content: center;
    }
    .project-preview{
        position: fixed;
        top: 20%;
        left: 50%;
        width: 0;
        height: 400px;
        background-size: cover;
        overflow: hidden;
    }
    .project-preview span{
        
        font-size: 6rem;
        font-weight: 600;
        
        position: absolute;

        right: 0;

        top: 0;

        z-index: 2;
    }
    .project-preview span:after{
        content: 'page';

        z-index: 1;

        text-transform: uppercase;

        color: var(--grey-color);

        font-weight: 700;

        position: absolute;

        left: 20px;

        top: 50px;
    }
    .project-preview-1{
        background: url('./assets/nav-item-1.jpg') no-repeat 50% 50%;
    }
    .project-preview-2{
        background: url('./assets/nav-item-2.jpg') no-repeat 50% 50%;
    }

    .project-preview-3{
        background: url('./assets/nav-item-3.jpg') no-repeat 50% 50%;
    }
    .project-preview-4{
        background: url('./assets/nav-item-4.jpg') no-repeat 50% 50%;
    }


    .idioma{
        justify-self: center;
        display: flex;
        align-items: center;
        margin: 0;
    }
    .idioma li{
        
        padding: 0 10px;
        
        font-weight: 500;
        
        font-size: 1.1em;
    }

    .idioma .active{
        font-weight: 600;
    }
    .menu-bars{
        
        width: 30px;
        
        height: 20px;
        
        display: flex;
        
        justify-content: space-between;
        
        flex-direction: column;
        
        justify-self: center;
        
        position: relative;

        transition: 600ms all ease-in-out;

        cursor: pointer;

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
        transform: translateX( 20px);
    }

    .bars::after{
        transform: translatey( 15px);
    }

    .menu-bars:hover .bars::before{
       
         transform: translateY( 10px);
    }
     .menu-bars:hover .bars::after{
        transform: translateY( 20px);
    }
    
</style>