<template>
    <div>
        <Header :passingRouter="true" />
        <main>
            <section  id="about-section">
            
                <div class="description-container">
                        <div class="description-item-2">
                            <div class="section-title ">
                                <h2 class="section-sub-title animate">Franco Martin Cagliolo</h2>
                                <h1 class="animate">Acerca de mi</h1>

                                <p ref="box" class="description animate">Me desempeño como desarrrolador web y estoy terminando la carrera de diseñador gráfico en la     Universidad de Buenos   Aires.  </p>
                            </div>
                        </div>
                        <div class="description-item-1">
                            <img src="assets/about.jpg" alt="">
                        </div>
                </div>

            </section>
        </main>
        
        <Footer />
        <ProgressBar />
        <Redes />
    </div>
</template>

<script>
import {Footer, ProgressBar, Header, Redes} from '@/components'

import {  TimelineLite } from 'gsap';

import $ from 'jquery';


export default { 
     components:{
        Footer,
        ProgressBar,
        Header,
        Redes
    },   
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
    }
   
    .section-title{
        grid-column: 1 / span 2 ;
    }
    .section-title h1{
        color: var(--darkblue-color);
    }

    .description-container{
       align-items: center;
       grid-column: 2 / span 4;
       display: grid;
       grid-template-columns: 1fr 1fr 2fr;
       margin-top: 100px;
    }

  
    .description {
        line-height: 40px;
        padding-right: 20px;
        margin-top: 20px;
        color:var(--darkblue-color);
       
    }
    .description-item-2{
        grid-column: 1 / span 4;
    }
    .description-item-1{
      /*   background: var(--grey-color); */
        height: 500px;
         grid-column: 3 / span 4;
        overflow: hidden;
       // padding-left: 20px;
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