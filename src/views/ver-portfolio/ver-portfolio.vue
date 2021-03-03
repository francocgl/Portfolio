<template>
    <div>
        <Header :passingRouter="true" :passingPage="'portfolio'" />
    
        <section class="headline" :style="{ backgroundImage: 'url(/assets/portfolio/' +  getItem.img_principal + ')' }">
            <div class="section-title">
                
                <router-link to="/portfolio">  <i class="icon-arrow-left-big"></i>Volver a Proyectos</router-link>
            </div>
        </section>
                        
        <main class="main">
                <article class="project-info">
                    <div>
                        <ul class="project-ul">
                            <li>Proyecto</li>
                            <li class="animate-list">{{ getItem.category }}</li>
                        </ul>
                        <ul class="project-ul" v-if="getItem.web > ''">
                            <li> Web</li>
                            <li class="animate-list"><a :href="getItem.web" target="_blank" >{{ getItem.web }}</a></li>
                        </ul>
                    </div>
                        <div class="desscription">
                            <h1  class="animate-list">{{ getItem.title }}</h1>
                            <p class="animate-list">{{ getItem.description }} </p>
                        </div>
                </article>

                <section class="project-details">
                    
                    <ul class="project-ul">
                        <li class="animate-list">ROL</li>
                        <li><p class="animate-list fecha">{{ getItem.implementacion }}</p></li>
                    </ul>
                    
                    <ul class="project-ul">
                        <li class="animate-list">Fecha</li>
                        <li class="animate-list" >
                            <a v-bind:href=" getItem.site " target="_blank">{{ getItem.site }}</a>
                        </li>
                        <li><p class="animate-list fecha">{{ getItem.fecha }}</p></li>
                    
                    </ul>
                        <ul class="project-ul">
                        <li class="animate-list">Herramientas</li>
                        <li><p class="animate-list fecha">{{ getItem.herramientas }}</p></li>
                    </ul>
                </section>
              
                <section  v-for="(img, index) in getItem.images" :key="index" class="portfolio-grid">
                
                    <div class="img-box">
                        <img v-bind:src="'/assets/portfolio/' + img.name" class="portfolio-img" />
                                 
                    </div>
                        
                     <article v-if="index == 1 && getItem.description2 > '' " class="section-text">
                        <div  >
                            <p >{{ getItem.description2 }}</p>

                        </div>
                    </article>
                </section>

                <section v-if="getItem.video > ''">
                    <video controls width="100%">

                        <source v-bind:src="'/assets/portfolio/' + getItem.video"
                                type="video/mp4">
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                </section>

                <section class="next-work" >
                        <router-link  active-class="active" :to=" { name: 'portfolio' }">
                                <h3 class="next"><i class="icon-arrow-left-big"></i>Ver todos los trabajos</h3>
                        </router-link>
                </section>

          
            <Redes />
            <ProgressBar />
        </main>
        <Footer />
    </div>
</template>

<script>
import {Footer, ProgressBar, Header, Redes} from '@/components'

import $ from 'jquery';

import {  TimelineLite } from 'gsap';

export default {
    components:{
        Footer,
        ProgressBar,
        Header,
        Redes
    },
    props: {
        id: {
            required: true,
            type: Number
        }
    },
    data(){
        return {
            fund: this.id,
            wrapper : false,
            modal : ''
        }
    },
    computed:{
        getItem(){
            return this.$store.getters.getTodoById(this.id) 
          /*  return this.$store.dispatch('getPost', this.fund); */
        },
          siguienteExists(){
            if(this.$store.getters.getTodoById(this.id+1) != undefined){
                return true
            }
            return false
        },
        anteriorExists(){
            if(this.$store.getters.getTodoById(this.id-1) != undefined){
                return true
            }
            return false
        }
    },
    mounted(){
            var t2 = new TimelineLite();
             t2.from( $('.animate-list'), 1, {
                opacity: 0,
                y:-50,
                stagger: 0.2
            });
            t2.from( $('.portfolio-img'), 1, {
                opacity: 0,
                y:-50,
                stagger: 0.2
            });
    }
  
}
</script>

<style lang="scss" scoped>

    .headline{ height: 70vh; position: relative; background-attachment: fixed; background-position: center; background-repeat: no-repeat; background-size: cover;  }

    .headline .section-title{
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translate(-50%, -5%);
        z-index: 2;
        display: grid;
        grid-template-columns: 1fr 2fr 2fr 2fr 2fr 1fr;
        width: 100%;
    }
  
    .headline .section-title a{  color: var(--darkblue-color);  transition: all .6s ease-in-out; font-weight: 600; grid-column: 2 / 2; background: var(--white-color); text-align: center; padding: .7rem 0; border-radius: 25px; }
    .headline .section-title a i{ font-weight: 600; margin-right: .5rem;}
    .headline .section-title a:hover{ background: var(--gold-color); }

    .headline:after{
        content: '';
        background: var(--grey-color);
        width: 100%;
        height: 100%; 
        position: absolute;
        opacity: 50%;
     }
   
    .project-info{ margin-bottom: 6rem; display: flex; justify-content: space-between; grid-column: 2 / span 4; display: grid; grid-template-columns: 1fr 2fr; flex-wrap: wrap; }
    .project-info .desscription { color: var(--darkblue-color); }
    .project-info .desscription p{ font-size: 1.5em; font-weight: 300; line-height: 2em;}
    .project-info .desscription h1{ font-size: 4.5em; font-weight: 500; margin-bottom: 2rem}
    .project-info .project-ul{ margin-top: 1rem; }
    
    .project-details{ display: flex; flex-wrap: wrap; justify-content: space-between; padding: 6rem 0; border-top: 1px solid var(--grey-color)}

    .project-ul li:nth-child(1){ font-weight: 600;  padding-bottom: 10px; font-size: 0.9em; color: var(--darkblue-color); font-size: 1em; text-transform: uppercase; }
    .project-info ul li:nth-child(2), .project-info ul li:nth-child(2) a{ color: var(--darkblue-color); font-size: 0.9em;  }
    .project-info ul li:nth-child(2) a { color: var(--blue-color); text-decoration: underline; font-size: 1em ; font-weight: 600;}
    .portfolio-grid{ grid-column: 2 / span 4; }
    .portfolio-grid .img-box{ margin: 1.5rem 0; }

    .next-work{ text-align: center; padding: 5rem 0; display: flex; flex-direction: column; }
    .next-work h3{ display: inline-block; font-size: 3em; color: var(--darkblue-color); cursor: pointer; margin: 2rem 0; transition: all .6s ease-in-out;}
    .next-work h3:hover{ color: var(--grey-color)}
    .next-work h3 i {  margin-right: 20px;}

    .section-text{ grid-column: 1 / span 6; display: grid; padding: 15rem 0;  }
    .section-text div{ padding: 0 6rem}
    .section-text div p{color: var(--darkblue-color);  font-size: 1.5em; font-weight: 400; margin: 0; }

     @media (max-width: 768px){
         main{ padding-top: 4rem;}
        .headline .section-title a { grid-column: 2 / span 4;}
       
       .project-info .project-ul{ display: none;}
        .project-info .desscription h1{ font-size: 2.5em;}
        .project-info .desscription p{ font-size: 1.2em;}
        .project-info { display: block ; margin-bottom: 2rem}
       
       .project-details{ padding: 3rem 0 0}
       
       .project-ul { width: 100%; margin-bottom: 2rem}
       
       .section-text { padding: 4rem 0; }
        .section-text p{  font-size: 1.2em; }
        .portfolio-grid{ grid-column: 1/span 6 }
        
        .section-text{ grid-template-columns: 1fr 2fr 2fr 2fr 2fr 1fr; display: grid;}
        .section-text div{ grid-column: 2 / span 4; padding: 0;}
        .next-work h3{ font-size: 1.2em; margin: 0}
     }
    
</style>