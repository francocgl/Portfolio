<template>
    <section  class="home">
        <div class="description-container">
            <div class="section-title">
                <h2 class="animate-input">Contacto</h2>
                <h1 class="animate-input">Trabajemos juntos</h1>
                <p  class="animate-input"> ¿Necesitas ayuda con algún proyecto o deseas iniciar uno nuevo? </p> 
                <div class=" animate-input">
                    <a  href="mailto:cagliolo@gmail.com" class="button-home animate-header">Escribime
                        <i class="icon-arrow-small-short"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {  TimelineLite } from 'gsap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
library.add(faArrowRight);
import $ from 'jquery';

export default {
    mounted(){
        const t1 = new TimelineLite();
        t1.from( $('.animate-input'),0.6, {
            opacity: 0,
            stagger: 0.2,
            y: -50})

        t1.from( $('.info-container'),0.6, {
            opacity: 0,
            stagger: 0.2,
            x: 50})
    }
}
</script>

<style lang="scss" scoped>

</style>