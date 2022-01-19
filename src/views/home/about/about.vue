<template>
    <section class="home">
        <div class="description-container">
            <div class="section-title ">
                <h2 class="section-sub-title animate">Franco Martin Cagliolo</h2>
                <h1 class="animate">Acerca de mi</h1>
                <p ref="box" class="animate">Me desempeño como desarrrolador web y estoy terminando la carrera de diseñador gráfico en la Universidad de Buenos Aires.  </p>
                <div class="animate">
                    <router-link to="/acerca" class="button-home">
                            Ver más <i class="icon-arrow-small-short"></i>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {  TimelineLite } from 'gsap';
import $ from 'jquery';
// Icons
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
    }
}

</script>

<style lang="scss" scoped>

@media screen
and(max-width: 768px){
    // .description-container{
    //     grid-column: 2 / span 4;
    //     margin-top: 30px;
    // }
    // .section-title{
    //     grid-row: 2;
    //     grid-column: 1 / span 4;
    //     margin-top: 0;
    // }
}
</style>