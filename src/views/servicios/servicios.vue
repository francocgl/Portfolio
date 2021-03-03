<template>
    <div>
        <Header :passingRouter="true" :passingPage="'servicios'" />
        <main class="main">

            <section>
                <div class="section-content">
                    <div class="services-item-1 section-title">
                        <h2 class="animate-header">que cosas hago</h2>
                        <h1 class="animate-header">Servicios</h1>
                         
                        <p class="animate-header">Estos son algunas de los servicios que brindo, a lo largo de los años fui desarrollando distintas capacidades que pude poner en práctica en mis trabajos para terceros como también en mi carrera como diseñador gráfico. </p>
                       
                       <div class="animate-header">
                         <router-link to="/portfolio" class="button-home "> Ver mis trabajos
                               <i class="icon-arrow-small-short"></i>
                        </router-link>
                        </div>
                    </div>
                </div>
            </section>

<<<<<<< HEAD
            <section class="list-container">
                <div class="services-grid">
                    <div class="services-item">
                        <img src="assets/servicios/uxui.svg" alt="" class="service-icon">
                        <h2>Diseño UX/ UI</h2>
                        <p>Creación de experiencias de usuario para una clara y simple navegación en la web.</p>
                    </div>
                    <div class="services-item" >
                        <img src="assets/servicios/web.svg" alt="" class="service-icon">
                        <h2>Desarrollo Web</h2>
                        <p>Desarrollo tanto Back como Front End para crear webs dinámicas y adaptables a distintos dispositivos.</p>
                    </div>
                    <div class="services-item" >
                        <img src="assets/servicios/branding.svg" alt="" class="service-icon">
                        <h2>Branding</h2>
                        <p>Desarrollo de marca e identidad para sobresalir en el mercado a través del diseño.</p>
                    </div>
                  </div>
            </section>  

            <section class="section-text">
                <p>"La interfaz del usuario es como un chiste: si tienes que explicarla no es tan buena."
                    <small>Martin LeBlanc.</small>
                </p>
=======
                
               
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
            
>>>>>>> 0e3802d489a8218f8ca6628fc54a6d7eb7d9ad8d
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

    .button-home{ width: 250px;}
  
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
        grid-column: 2 / span 4;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

    }
    .section-title h1{
        color:var(--darkblue-color);
    }
<<<<<<< HEAD

=======
   

   
>>>>>>> 0e3802d489a8218f8ca6628fc54a6d7eb7d9ad8d
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

<<<<<<< HEAD
    .section-text { height: 50vh; display: flex; align-items: center; justify-content: center; padding: 2rem}
    .section-text p{ font-weight: 600; font-size: 1.4em; text-align:  center;   color: var(--darkblue-color);}
    .section-text small{display: block;   color: var(--grey-color); widows: 100%; text-align: center; margin-top: 1.5rem}
=======
>>>>>>> 0e3802d489a8218f8ca6628fc54a6d7eb7d9ad8d

    @media (max-width: 768px){
        .services-item-1, .services-item-2{
            grid-column: 1 / span 4;
        }

        .list-container{
            padding: 0;
            grid-column: 1 / span 6;
<<<<<<< HEAD
            margin: 2rem 0;
=======
>>>>>>> 0e3802d489a8218f8ca6628fc54a6d7eb7d9ad8d
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