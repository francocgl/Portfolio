<template>
    <div>
        <Header :passingRouter="true" :passingPage="'portfolio'" />
        <Redes />
        <main class="main">
           <section>
                <div class="section-title">
                    <h2 class="animate-header">Trabajos y Proyectos</h2>
                    <h1 class="animate-header">Portfolio </h1>
                </div>
           </section>
            <section class="portfolio-grid ">
                <div 
                    class="portfolio"
                    v-bind:style="{
                             gridTemplateRows: 'repeat('+ posts.length*2 +', minmax(100px, 1fr))'
                        }"
                >
                    <div 
                        v-for="(post, index) in posts" :key="post.id"
                        :class="{
                            'item': true,
                            'tall': (index / 2 == 0 )? false : true,
                            'medium': (index / 2 == 0 || index == 0 )? true : false
                        }"
                    >
                        <router-link  active-class="active" :to=" { name: 'ver-portfolio', params: { id:post.id} }" >
                                <div class="img" v-bind:style="{backgroundImage:'url(' + url + post.attributes.img.data.attributes.url +')'}">
                                <div class="overlay-img">
                                    <div class="img-title">
                                        <h2>{{post.attributes.title}}</h2>
                                        <h3>{{post.attributes.category}}</h3>

                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </section>  
        </main>
        <Footer />
    </div>
</template>

<script>
import { Footer, Header, Redes } from '@/components';
import $ from 'jquery';
import {  TimelineLite } from 'gsap';
import { API_URL } from '../../config'

export default {
    components:{
        Footer,
        Header,
        Redes
    },
     data(){
         return{
             url : API_URL
         }
    },
    computed: {
        posts(){ return this.$store.state.posts}
    },
    mounted(){
        this.$store.dispatch('getPosts'); 

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
   
.portfolio-grid{
    grid-column: 2 / span 4;
    grid-row: 2;
    margin-top: 3rem;
}
.portfolio-grid .portfolio{
    display: grid;
    grid-template-columns: repeat(6, minmax(100px, 1fr));
    grid-template-rows: repeat(12, minmax(100px, 1fr));
    grid-gap: 20px;
    width: 100%;
}
.portfolio-grid .portfolio .medium{
    grid-column: span 3;
    grid-row: span 4;
}

.portfolio-grid .portfolio .tall{
    grid-row: span 3;
    grid-column: span 3;
}

.portfolio-grid .portfolio .item{
    background: var(--blue-color);
    width: 100%;

}
.portfolio-grid .portfolio .item .img{
    width: 100%;
    height: 100%;
    background-size: cover;
    transition: all 600ms ease-in-out;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.overlay-img{
    background: var(--darkblue-color);
    position: absolute;
    top: 0;
    left:0;
    right:0;
    bottom: 0;
    opacity: 0;
    transition: all 1s ease-in-out;

}

.img:hover .overlay-img{
    opacity:1;
    
}
.img-title{
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 10px;
    width:100%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
}

.img-title h2{
    font-weight: 600;
    font-size: 24px;

}
.img-title h3{
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 2px;
}
@media (max-width: 768px){
    .portfolio{
        grid-template-columns: repeat(6, 1fr );
        grid-template-rows: repeat(12, 1fr );
    }
    .medium, .tall{
        grid-column: span 6;
        grid-row: span 10;
    }

}

</style>