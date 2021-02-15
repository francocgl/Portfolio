<template>
    <div>
         <Header :passingRouter="true"/>
        <main>

            <section  id="services-section">
            
                <div class="section-content">
                    <div class="services-item-1 section-title">
                        <h2 class="animate-header">que cosas hago</h2>
                        <h1 class="animate-header">Servicios</h1>
                        <p class="animate-header">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sint magnam dolore eum, porro iste non sunt similique nobis nostrum? Neque animi excepturi incidunt voluptatibus dolore, illo cumque dicta minus. </p>
                       
                       <div class="animate-header">
                         <router-link to="/portfolio" class="button "> Ver mis trabajos
                            <font-awesome-icon 
                                class=" redes-icon ml-1"
                                :icon="['fas', 'arrow-right']"
                        
                            />
                        </router-link>
                        </div>
                    </div>

                
               
                </div>

                <div class="list-container">
                         <div class="services-grid">
                        <div class="services-item">
                            <img src="assets/servicios/uxui.svg" alt="" class="service-icon">
                            <h2>Diseño UX/ UI</h2>
                            <p>Creación de experiencias de usuario para una clara y simple navegación en la web</p>
                        </div>
                        <div class="services-item" >
                            <img src="assets/servicios/web.svg" alt="" class="service-icon">
                            <h2>Desarrollo Web</h2>
                            <p>Desarrollo tanto Back como Front End para crear webs dinámicas y adaptables a distintos dispositivos</p>
                        </div>
                        <div class="services-item" >
                            <img src="assets/servicios/branding.svg" alt="" class="service-icon">
                            <h2>Branding</h2>
                            <p>Desarrollo de marca e identidad para sobresalir en el mercado a través del diseño</p>
                        </div>
                  </div>
                </div>   
            
            </section>
         
        </main>

        <Footer />
        
        <Redes />
        
        <ProgressBar />

    </div>
</template>

<script>

    import { Footer, Header, Redes, ProgressBar } from '@/components';
    
    import $ from 'jquery';

    import {  TimelineLite } from 'gsap';

    import { library } from '@fortawesome/fontawesome-svg-core';
   
    import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
    
    library.add(faArrowRight);

export default {
    components:{
        Footer,
        ProgressBar,
        Redes,
        Header
    },
    mounted(){
        const t1 = new TimelineLite();
            t1.from( $('.animate-header'),1, {
                opacity: 0,
                stagger: 0.2,
                y: -50})

            t1.from( $('.animate-li'),0.6, {
                opacity: 0,
                stagger: 0.2,
                y: 100})
            
             t1.from( $('.services-item'),0.8, {
                opacity: 0,
                stagger: 0.2,
                x: 100})
    }
    }
</script>

<style lang="scss" scoped>
    .service-icon{
        height: 70px;
        margin: 20px 0 30px;
    }
    #services-section{
        
        display: grid;
        grid-template-columns: 1fr 2fr 2fr 2fr 2fr 1fr;
        grid-template-rows: auto 2fr;
        grid-column: 2 / span 3;
    }
    .list-container{
        display: flex;
        justify-content: space-between;
        grid-column: 1 / span 6;
         display: grid;
        grid-template-columns: 1fr 2fr 2fr 2fr 2fr 1fr;
        background: var(--darkblue-color);
        margin: 6rem 0;
        padding: 5rem 0;
    }
    .services-grid{
        display: grid;
        grid-column: 2 / span 4;
        grid-template-columns: repeat(3, 1fr);
        align-self: center;
        margin: 40px 0 ;
        grid-gap: 20px;
    }
     .services-item{
         padding: 20px 15px;
        text-align: center;

     }
     .services-item h2{
         color: #fff;
         font-weight: 600;
         font-size: 24px;
     }
    .services-item p{
        color: var(--grey-color);
        font-size: 16px;
        line-height: 35px;

     }
    .section-content{
        margin-top: 100px;
        grid-column: 2 / span 4;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

    }
    .section-title h1{
        color:var(--darkblue-color);
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
        color: var(--darkblue-color);
       font-size: 14px;
    }
     .services-item-1{
         grid-row: 1;
        grid-column: 1 / span 3; 
  
    }

    .services-item-1 h1{
        margin-bottom: 20px;
    }
     p{
        color: var(--darkblue-color);
        line-height: 40px;
        font-size: 16px;
     }


    @media (max-width: 768px){
        .services-item-1, .services-item-2{
            grid-column: 1 / span 4;
        }

        .list-container{
            padding: 0;
            grid-column: 1 / span 6;
        }

        .list-container h4{
            font-size: 14px;
        }

         .list-container li{
            font-size: 12px;
        }

        .services-grid{
            grid-template-columns: 1fr;
        }
    }
</style>