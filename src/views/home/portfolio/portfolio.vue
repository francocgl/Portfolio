<template>
    <section class="home">
        <div class="description-container">
            <div class="section-title  medium  ">
                <h2 class="animate-header">Diseño</h2>
                <h1 class="animate-header">Trabajos y Proyectos </h1>
                <p class="animate-header">Entrá a ver todos mis trabajos freelance, proyectos y diseños personales.</p>
                <div class="animate-header">
                    <router-link to="/portfolio" class="button-home  button-portfolio"> Ver todos
                    <i class="icon-arrow-small-short"></i>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import $ from 'jquery';
import {  TimelineLite } from 'gsap';

export default {
    mounted(){
        const t1 = new TimelineLite();

        t1.from( $('.animate-header'),0.6, {
            opacity: 0,
            stagger: 0.2,
            y: -50})

        t1.from( $('.item'),1, {
            opacity: 0,
            stagger: 0.2,
            y: -50})
    }
}
</script>

<style lang="scss" scoped>
   
</style>