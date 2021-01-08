<template>
    <div>
        <section  id="services-section-home">
            
                    <div class="services-item-1 section-title">
                        <h2 class="animate-header">Diseñador Gráfico / Web</h2>
                        <h1 class="animate-header">Cómo te puedo ayudar?</h1>
                        <p class="animate-header">Me desempeño como desarrollador web y sumándole el diseño gráfico te puedo ayudar a hacer crecer tu marca y fomentar la comunicación a nivel digital. </p>
                        <div class="animate-header">

                            <router-link to="/servicios" class="button "> Ver Servicios
                                <font-awesome-icon 
                                    class=" redes-icon ml-1"
                                    :icon="['fas', 'arrow-right']"
                            
                                />
                            </router-link>
                        </div>
                    </div>
        
        </section>
    </div>
</template>

<script>

    import $ from 'jquery';

    import {  TimelineLite } from 'gsap';
    
    import { library } from '@fortawesome/fontawesome-svg-core';
   
    import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
    
    library.add(faArrowRight);

export default {
    mounted(){
        const t1 = new TimelineLite();
            t1.from( $('.animate-header'),1, {
                opacity: 0,
                stagger: 0.2,
                y: -50})

            t1.from( $('.animate-li'),0.6, {
                opacity: 0,
                stagger: 0.2,
                x: 100})
    }
    }
</script>

<style lang="scss" scoped>
  
    #services-section-home{
        display: grid;
        grid-template-columns: 1fr 2fr 2fr 2fr 2fr 1fr;
       grid-column: 2 / span 3;
    }

    .section-content{
        grid-row: 2;
        grid-column: 2 / span 4;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

    }
    .section-title h1{
        color:#fff;
    }
   
    .list-container{
        display: flex;
        justify-content: space-between;
        grid-column: 2 / span 2;
        grid-row: 3;
    }
   
    .services-list h4{
        text-transform: uppercase;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        letter-spacing: 2px;
        margin-bottom: 20px;
        font-size: 16px;
        color: var(--grey-color);

    }
    .services-list li{
       padding: 10px 0;
        color: #fff;
       font-size: 14px;
    }
     .services-item-1{
        grid-column: 2 / span 4; 
        justify-self: start;
        align-self: center;
    }

    .services-item-1 h1{
        margin-bottom: 20px;
    }
     p{
        color: #fff;
        line-height: 40px;
        font-size: 16px;
     }

    @media (max-width: 768px){
        .services-item-1, .services-item-2{
            grid-column: 1 / span 4;
        }

        .list-container{
            grid-column: 1 / span 3;
        }

        .list-container h4{
            font-size: 14px;
        }

         .list-container li{
            font-size: 12px;
        }
    }
</style>