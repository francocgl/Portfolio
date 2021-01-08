<template>
    <div>
        <section  id="about-section">
           
            <div class="description-container">
                    <div class="description-item-2">
                        <div class="section-title ">
                            <h2 class="section-sub-title animate">Franco Martin Cagliolo</h2>
                            <h1 class="animate">Acerca de mi</h1>

                            <p ref="box" class="description animate">Me desempeño como desarrrolador web y estoy terminando la carrera de diseñador gráfico en la     Universidad de Buenos   Aires.  </p>
                            <div class="animate">

                                <router-link to="/acerca" class="button "> Ver más
                                    <font-awesome-icon 
                                        class=" redes-icon ml-1"
                                        :icon="['fas', 'arrow-right']"
                                
                                    />
                                </router-link>

                            </div>
                        </div>
                    </div>
                  <!--   <div class="description-item-1">
                        <img src="assets/about.jpg" alt="">
                    </div> -->
            </div>

        </section>
    </div>
</template>

<script>

    import {  TimelineLite } from 'gsap';

    import $ from 'jquery';
    
    import { library } from '@fortawesome/fontawesome-svg-core';
   
    import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
    
    library.add(faArrowRight);



export default {    
    mounted(){
        
         var t1 = new TimelineLite();

        t1.from( $('.animate'),0.6, {
            opacity: 0,
            stagger: 0.3,
            y: -50
        });

       
        t1.from( $('.description-item-1'),0.6, {
            opacity: 0,
            x: 200
        });

    }
    
}

</script>

<style lang="scss" scoped>

    #about-section{
        display: grid;
        grid-template-columns: 1fr 2fr 2fr 2fr 2fr 1fr;
        grid-template-rows: auto 1fr ;
    }
   
    .section-title{
        grid-column: 1 / span 2 ;
        justify-self: center;
        margin: 0;
    }
    .section-title h1{
        color: #fff;
    }

    .description-container{
       grid-row-start: 2;
       align-items: center;
       grid-column: 2 / span 4;
       display: grid;
       grid-template-columns: 1fr 1fr 2fr;
    }

  
    .description {
        line-height: 40px;
        padding-right: 20px;
        margin-top: 20px;
        color:#fff;
       
    }
    .description-item-2{
        grid-column: 1 / span 3;
    }
    .description-item-1{
        height: 500px;
        overflow: hidden;
        padding-left: 20px;
    }

     .description-item-1 img{
         width: 100%;
     }
 

    @media (max-width: 768px){
        .description-container{
            grid-column: 2 / span 4;
            margin-top: 30px;
        }
        .about{
            grid-template-rows: 2 1fr;
        }
        .section-title{
            grid-row: 2;
            grid-column: 1 / span 4;
            margin-top: 0;
        }
        .description-item-2{
            grid-column: 2 / span 4;
        }
        .description-item-1{
            padding: 0;
        }
        .description-item-2, .description-item-1{
             grid-column: 1 / span 4;
        }
    }
</style>