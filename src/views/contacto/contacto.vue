<template>
    <div>
        <Header :passingRouter="true" :passingPage="'contacto'" />
        <Redes />
        <main  class="main">
            <section>
                <div class="section-title">
                    <h2 class="animate-input animate-header">Trabajemos juntos</h2>
                    <h1 class="animate-input animate-header darkblue-title">Contacto</h1>
                </div>
            </section>
            <section class="contact-form">
                <div class="contact-info">
                    <div class="contact-details">
                        <ul>
                            <li class="animate-li">LOCACI&Oacute;N</li>
                            <li class="animate-li">Debenedetti 532<br> Lucila, Buenos Aires, Argentina</li>
                        </ul>
                        <ul>
                            <li class="animate-li">TEL&Eacute;FONO</li>
                            <li class="animate-li">+54 11 3005 7335</li>
                        </ul>
                        <ul>
                            <li class="animate-li">EMAIL</li>
                            <li class="animate-li">franco@martin.com.ar</li>
                        </ul>
                    </div>
                    <div class="animate-li link-container">
                        <a href="mailto:cagliolo@gmail.com" class="link-mail ">Hablemos Por Acá <i class="icon-arrow-big"></i></a>
                    </div>
                </div>
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
// Contact Info 
////////////////////////
.contact-form { 
    display: flex; 
    justify-content: space-between; 
    grid-column: 2 / span 4; 
}
.contact-form .contact-info{
    padding: 0;
    display: flex;
    justify-content: space-between;
    justify-self: inherit;
    flex-wrap: wrap;
}
.contact-form  .contact-info .contact-details { 
    display: flex; 
    justify-content: space-between;
    flex-wrap: wrap;
}
.contact-form .contact-info ul{ margin: 1.5rem 0;}
.contact-form .contact-info ul li:nth-child(1){
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.9em;
    letter-spacing: 2px;
    color: var(--grey-color);
}
.contact-form .contact-info ul li:nth-child(2){
    color: var(--darkblue-color);
    font-size: 1.2em;
}

// Link //
//////////////////
.link-container { margin: 2rem 0 4rem;}
.link-container .link-mail{
    color: var(--darkblue-color);
    font-size: 1.5em;
    font-weight: 400;
    border-bottom: 1px solid ;
    transition: all .6s ease-in-out;
    display: block;
}
@media (min-width: 759px){
//  Contac info
//////////////////
    .contact-form  .contact-info { 
        display: flex; 
        justify-content: space-between; 
        flex-direction: column; 
        width: 100%;
    }
    .contact-form .contact-info ul{ margin: 3rem 0;}
    .contact-form .contact-info ul li:nth-child(1){  margin-bottom: .5rem }
    .contact-form .contact-info ul li:nth-child(2){  font-size: 1.4em; }

// Link //
//////////////////
    .link-container{ margin: 4rem  0;}
    .link-container .link-mail{ 
        font-size: 3em;  
        display: flex; 
        justify-content: space-between;
        align-items: center;
    }

    @media(hover: hover){
        .link-mail:hover{ color: var(--gold-color);}
    }
}
@media (max-width: 758px) {
    .contact-form,  .contact-info{ flex-direction: column;}
}
 
</style>