<template>
    <div>
        <section id="portfolio-section">
           
            <div class="portfolio-grid ">
                <div class="portfolio">
                    <div class="section-title  medium tall ">
            
                        <h2 class="animate-header">Trabajos y Proyectos</h2>
                        <h1 class="animate-header">Portfolio </h1>
                        <!-- <p class="animate-header">Desliza para ver todos los trabajos.</p> -->
                         
                    </div>

                    <div 
                        v-for="(post, index) in posts" :key="index"
                        :class="{
                            'item': true,
                            'tall': true,
                           
                        }"
                    >
                        
                            <router-link  active-class="active" :to=" { name: 'ver-portfolio', params: { id:post.id} }" >
                            <!-- <router-link :to=" { path: '/portfolio/' + post.id }" > -->
                                    <!-- <img v-bind:src="'/assets/portfolio/' + post.img_principal" class="portfolio-img" /> -->

                                    <div class="img" v-bind:style="{backgroundImage:'url(assets/portfolio/'+ post.img_principal +')'}">
                                    <div class="overlay-img">
                                        <div class="img-title">
                                            <h2>{{post.title}}</h2>
                                            <h3>{{post.category}}</h3>

                                        </div>
                                    </div>

                                </div>
                            </router-link>
                           

                                               
                    </div>
                
                    <div class="item  tall"></div>
                    <div class="item  tall"></div>
                    <div class="item  tall"></div>
                    <router-link to="/portfolio" class="button animate-header button-portfolio"> Ver todos
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

export default {
    computed: {
        posts(){
            return this.$store.state.posts
        }
    },
    mounted(){
        this.$store.dispatch('loadPosts');

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
    #portfolio-section{
        display: grid;
        grid-template-columns: 1fr 2fr 2fr 2fr 2fr 1fr;
        align-items: center;
        grid-template-rows: auto 1fr;
                
    }
    .section-title{
        margin:0;
    }
    .section-title h1{

        color: white;
    }
   
    .section-title p{
        color: white;
        margin-top: 20px;
    }
     .section-title{
        grid-column: 2 / span 3;
         
     }
     .portfolio-grid{
        grid-column: 2 / span 4;
        grid-row: 2;
        align-self: center;
        justify-self: center;
}

    .portfolio{
        display: grid;
        grid-template-columns: repeat(6, minmax(50px, 1fr));
        grid-template-rows: repeat(6, minmax(50px, 1fr));
        grid-gap: 20px;
        width: 100%;
    }
    .medium{
        grid-column: span 2;
        grid-row: span 2;
    }
    .tall{
        grid-row: span 3;
        grid-column: span 2;
    }
    
    .ver-trabajos{
        text-align: right;
        margin: 20px 0;
    }
     .item{
         background: var(--blue-color);
         width: 100%;
        
     }
     .item .img{
         width: 100%;
         height: 100%;
         background-size: cover;
         transition: all 600ms ease-in-out;
         cursor: pointer;
         position: relative;
         overflow: hidden;
     }
     .overlay-img{
         background: #112a40c2;
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

     .button-portfolio{
         grid-column: 1  / span 2;
         justify-self: start;
     }


   

     @media (max-width: 768px){
        .section-title{
            grid-column: 1 / span 6;
         
        }

        .portfolio{
            grid-template-columns: repeat(6, 1fr );
            grid-template-rows: repeat(12, 1fr );
        }

        .medium{
            grid-column: span 6;
            grid-row: span 3;
        }
        .tall{
            grid-row: span 3;
            grid-column: span 3;

        }
     }

</style>