<template>
    <div>
        <Header :passingRouter="true" :passingPage="'contacto'" />

        <Redes />
       
    
        <main  class="main">
            
                
            <section class="section-title">
                <h2 class="animate-input animate-header">Trabajemos juntos</h2>
                <h1 class="animate-input animate-header">Contacto</h1>
            </section>

            <section class="contact-form">

                    <div class="contact-info">
                        <div class="contact-details">

                            <ul class="info-container-contacto">
                            
                                <li class="animate-li">LOCACI&Oacute;N</li>
                            
                                <li class="animate-li">Debenedetti 532<br> Lucila, Buenos Aires, Argentina</li>
                            
                            </ul>
                            
                            <ul class="info-container-contacto">
                            
                                <li class="animate-li">TEL&Eacute;FONO</li>
                            
                                <li class="animate-li">+54 11 3005 7335</li>
                            
                            </ul>
                            
                            <ul class="info-container-contacto">
                            
                                <li class="animate-li">EMAIL</li>
                            
                                <li class="animate-li">franco@martin.com.ar</li>
                            
                            </ul>
                        </div>

                        <div class="animate-li link-container">
                            <a href="mailto:cagliolo@gmail.com" class="link-mail ">Hablemos Por Acá <i class="icon-arrow-big"></i></a>
                        </div>
                
                    </div>

                    <!-- <div class="img-box animate-li">
                        <img src="@/assets/mapa-bue.svg" alt="logo de marca" id="logo"> 
                    </div> -->
            </section>
        </main>
        <section class="map-section animate-li">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.2286613717206!2d-58.48919168469119!3d-34.49708685937106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb10d4160b43f%3A0x933318baab397e27!2sDebenedetti%20532%2C%20B1637BCH%20La%20Lucila%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1614620275755!5m2!1ses!2sar"
             width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </section>

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

    mounted(){
        const t1 = new TimelineLite();
            t1.from( $('.animate-header'),1, {
                opacity: 0,
                stagger: 0.2,
                y: -50})

            t1.from( $('.animate-li'),0.6, {
                opacity: 0,
                stagger: 0.2,
                y: -50})
            
             t1.from( $('.services-item'),0.8, {
                opacity: 0,
                stagger: 0.2,
                x: 100})
      }
}
</script>

<style lang="scss" scoped>


 
    .contact-form { display: flex; justify-content: space-between; grid-column: 2 / span 4; }
    .contact-form .img-box {width: 400px;}
    .section-title h1{
        color: var(--darkblue-color);
    }


    #formContact{
        padding-top: 20px;
    }

    .contact-info { display: flex; justify-content: space-between; flex-direction: column; width: 100% ;}

    .contact-details { display: flex; justify-content: space-between; flex-wrap: wrap;}
    .info-container{
        margin: 30px 0;
    }
    .info-container li:nth-child(1){
        text-transform: uppercase;
        font-weight: 600;
        padding-bottom: 10px;
        font-size: 0.9em;
        letter-spacing: 2px;
        color: var(--grey-color);
    }
    .info-container li:nth-child(2){
        color: var(--darkblue-color);
        font-size: 1.5em;
    }
   
    .info-container-contacto{
        margin: 30px 0;
    }
    .info-container-contacto li:nth-child(1){
        text-transform: uppercase;
        font-weight: 600;
        font-size: 0.9em;
        letter-spacing: 2px;
        color: var(--grey-color);
    }
    .info-container-contacto li:nth-child(2){
        color: var(--darkblue-color);
        font-size: 1.5em;
    }

    .link-container{ margin: 4rem  0;}
    .link-mail{
        color: var(--darkblue-color);
        font-size: 3em;
        font-weight: 400;
        border-bottom: 1px solid ;
        transition: all .6s ease-in-out;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .link-mail:hover{ color: var(--gold-color);}
    .map-section { background: var(--darkblue-color); }
    @media (max-width: 758px) {

        .contact-form,  .contact-info{ flex-direction: column;}
        .contact-info{
            padding: 0;
            display: flex;
            justify-content: space-between;
            justify-self: inherit;
            flex-wrap: wrap;
            
         }

        .link-mail{ font-size: 1.5em;   display: block;}
         .info-container-contacto{ margin: 15px 0;}
      
         .info-container-contacto li:nth-child(2){
             font-size: 1.2em;
         }
         .contact-form .img-box { width: 100%;}
  
    }
 
</style>