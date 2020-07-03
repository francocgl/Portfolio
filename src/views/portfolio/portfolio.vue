<template>
    <div>
        
        <Header :passingRouter="true" />
        
        <Redes />

        <main id="portfolio-section">
           
            <div class="portfolio-grid ">
                <div class="portfolio">
                    <div class="section-title   ">
            
                        <h2 class="animate-header">Trabajos y Proyectos</h2>
                        <h1 class="animate-header">Portfolio </h1>
                    </div>

                    <div 
                        v-for="(post, index) in posts" :key="index"
                        :class="{
                            'item': true,
                            'tall': (index / 2 == 0 )? false : true,
                            'medium': (index / 2 == 0 || index == 0 )? true : false
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
                    <div class="item medium"></div>
                    <div class="item tall"></div>
                
                    <div class="item medium"></div>
                    <div class="item tall"></div>
                    <div class="item medium"></div>

                    <div class="item medium"></div>
                    <div class="item tall"></div>
                    <div class="item medium"></div>

                    <div class="item medium"></div>
                    <div class="item tall"></div>
                    <div class="item medium"></div>

                </div>
            </div>  

        </main>
   
        <Footer />
    </div>
</template>

<script>
    
    import { Footer, Header, Redes } from '@/components';

    import $ from 'jquery';

    import {  TimelineLite } from 'gsap';

export default {
    components:{
        Footer,
        Header,
        Redes
    },
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
        grid-column: 1 /span 6;
    }
    .section-title h1{

        color: var(-darkblue-color);
    }
   
    .section-title p{
        color: var(-darkblue-color);
        margin-top: 20px;
    }
   
     .portfolio-grid{
        grid-column: 2 / span 4;
        grid-row: 2;
     }

    .portfolio{
        display: grid;
        margin: 100px 0;
        grid-template-columns: repeat(6, minmax(100px, 1fr));
        grid-template-rows: repeat(12, minmax(100px, 1fr));
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
    .img:hover {
        filter: grayscale(1);
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
        .section-title{
            grid-column: 1 / span 6;
         
        }

        .portfolio{
            grid-template-columns: repeat(6, 1fr );
            grid-template-rows: repeat(12, 1fr );
        }

        .medium, .tall{
            grid-column: span 6;
            grid-row: span 2;
        }
     
     }

</style>