<template>
    <div>
        <Header :passingRouter="true" />
         
        <main>
            <section>

                <article class="headline">
                    <div class="section-title">
                        <h2>{{ getItem.category }}</h2>
                        <h1>{{ getItem.title }}</h1>
                    </div>
                        
                        <div class="project-info">
                            <ul>
                                <li class="animate-list">IMPLEMENTACI&Oacute;N</li>
                                <li class="animate-list">{{ getItem.implementacion }}</li>
                            </ul>
                            
                            <ul>
                                <li class="animate-list" >FECHA</li>
                                <li class="animate-list" >{{ getItem.fecha }}</li>
                            </ul>
                            
                            <ul>
                                <li class="animate-list" >WEBSITE</li>
                                <li class="animate-list" >
                                    <a v-bind:href=" getItem.site " target="_blank">{{ getItem.site }}</a>
                                </li>
                            </ul>
                        </div>
                    <p class="animate-list">{{ getItem.description }}</p>

                </article>
              
                <div  v-for="(img, index) in getItem.images" :key="index" class="portfolio-grid">
                
                    <div>
                        <img v-bind:src="'/assets/portfolio/' + img.name" class="portfolio-img" />
                                 
                    </div>
                                        
                </div>
                
                <div class="next-work">
                    <h3>Siguiente Proyecto</h3>
                </div>

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
        }
    },
    mounted(){
             this.$store.dispatch('getPost', this.fund);

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
    },
    methods:{
      
    }
}
</script>

<style lang="scss" scoped>

    .wrapper-container{
        grid-column: 3 / span 4;

        position: relative;

        padding-left: 20px;
        height: 100%;

        width: 100%;

        background: var(--darkblue-color); 

    }

    .wrapper-container .wrapper{
        position: relative;

        width: 100%;

        z-index: 40;

        top: 0;

        left: 0;

        bottom: 0;

        right: 0;
        
    }
    main{
        padding-top: 40px;
        display: grid;
        grid-template-columns: 1fr 2fr 2fr 2fr 2fr 1fr ;
    }
    main section{

        grid-column: 2 / span 4;
    }


    .headline{
        margin-bottom: 40px;
        display:grid;
        grid-template-columns: 1fr 1fr; 
        
        align-items: baseline;
    }

    .section-title{
        grid-column: span 2
    }

    .headline p {
        font-size: 1.2em;
        padding: 10px 0;
        color: var(--darkblue-color);
        line-height: 40px;
    }

    .project-info ul{
        margin: 30px 0;
    }

    .project-info ul li:nth-child(1){
        font-weight: 600;
        padding-bottom: 10px;
          color: var(--grey-color);
        letter-spacing: 2px;
        font-size: 0.9em;

     }
      .project-info ul li:nth-child(2),  .project-info ul li:nth-child(2) a{
        color: var(--darkblue-color);
        font-weight: 600;
     }

    .portfolio-grid{
         grid-column: 2 / span 4;
    }

    .portfolio-grid .portfolio-img{
        width: 100%;
        margin: 10px 0;
    }

    .next-work{
        text-align: right;
        padding: 30px 0;
    }

    .next-work h3{
        font-size: 22px;
        color: var(--darkblue-color);
        cursor: pointer;

    }
    
</style>