<template>
    <div>
        <Header :passingRouter="true" :passingPage="'acerca'" />
        <main class="main">
            <section>
                <div class="section-title ">
                    <h2 class="section-sub-title animate">Diseñador</h2>
                    <h1 class="animate">Acerca de mi</h1>
                </div>
            </section>
            <section  class="description-container">
                <div class="about-text">
                    <p ref="box" class="description animate">Me llamo Franco Martín Cagliolo, tengo <b>26 años</b> y vivo en La Lucila, Argentina. <br> Tengo más de <span class="bold">6 años de experiencia</span> en el desarrollo web y la implementacón UX/UI de sitios dinámicos. <br> Estoy cursando el último año de la carrera de Diseño Gráfico en la FADU y al mismo tiempo sigo trabajando en distintos proyectos para empresas tecnológicas.  </p>
                </div>
            </section>
            <section class="list-container">
                <div class="services-grid">
                    <div class="services-item">
                        <img src="assets/servicios/uxui.svg" alt="icono de ux/ui" class="service-icon">
                        <h2>Diseño UX/ UI</h2>
                        <p>Creación de experiencias de usuario para una clara y simple navegación en la web.</p>
                    </div>
                    <div class="services-item" >
                        <img src="assets/servicios/web.svg" alt="icono de web" class="service-icon">
                        <h2>Desarrollo Web</h2>
                        <p>Desarrollo tanto Back como Front End para crear webs dinámicas y adaptables a distintos dispositivos.</p>
                    </div>
                    <div class="services-item" >
                        <img src="assets/servicios/branding.svg" alt="icono de branding" class="service-icon">
                        <h2>Branding</h2>
                        <p>Desarrollo de marca e identidad para sobresalir en el mercado a través del diseño.</p>
                    </div>
                  </div>
            </section>  
            <section class="knowledge">
                <div class="knowledge-box" style="border-top:1px solid var(--gold-color)">
                    <h3>Lenguajes</h3>
                    <ul>
                        <li>PHP</li>
                        <li>HTML5 / CSS</li>
                        <li>Vue JS</li>
                        <li>AJAX</li>
                        <li>Javascript </li>
                        <li>JQuery</li>
                        <li>Bootstrap</li>
                        <li>MySql</li>
                        <li>Ajax</li>
                        <li>Git</li>
                        </ul> 
                </div>
                <div class="knowledge-box">
                    <h3>software</h3>
                    <ul>
                        <li>Figma</li>
                        <li>Illustrator</li>
                        <li>Photoshop</li>
                        <li>After Effects</li>
                        <li>Indesign</li>
                        <li>Adobe XD</li>
                    </ul> 
                </div>
                <div  class="knowledge-box">
                    <h3>Aprendiendo</h3>
                    <ul>
                        <li>Wordpress</li>
                        <li>GSAP</li>
                    </ul> 
                </div>
                <div  class="knowledge-box">
                    <h3>Carrera</h3>
                    <ul>
                        <li>Diseño Grafico</li>
                        <li>Diseño Web</li>
                    </ul> 
                </div>
            </section>
        </main>
        <Footer />
        <ProgressBar />
        <Redes />
    </div>
</template>

<script>
import {Footer, ProgressBar, Header, Redes} from '@/components'
import {  TimelineLite } from 'gsap';
import $ from 'jquery';

export default { 
     components:{
        Footer,
        ProgressBar,
        Header,
        Redes
    },   
    mounted(){
        var t1 = new TimelineLite();
        t1.from( $('.animate'),0.6, {
            opacity: 0,
            stagger: 0.3,
            y: -50
        });
        t1.from( $('.description-item-1'),0.6, {
            opacity: 0,
            x: 200
        });
        t1.from( $('.services-item'),0.6, {
            opacity: 0,
            stagger: 0.2,
            x: 100
        })
    }
}

</script>

<style lang="scss" scoped>
// Description
///////////////////////
.description-container{ 
    align-items: center;
    grid-column: 2 / span 4; 
    display: grid; 
    grid-template-columns: 1fr 1fr 2fr;
    margin-bottom: 2rem;
}
.description-container .about-text{
    grid-column: 1 / span 3;
}
.description-container .about-text p{ 
    font-size: 1.4em;
    line-height: 1.7em;
    color:var(--darkblue-color); 
    font-weight: 300;
}
.description-container .about-text p b{ 
    font-weight: 700; 
    color:var(--gold-color);
}

// List Container
///////////////////////
.list-container{
    display: grid;
    grid-column: 1 / span 6;
    grid-template-columns: 1fr 2fr 2fr 2fr 2fr 1fr;
    background: var(--darkblue-color);
    padding: 5rem 0;
}
.list-container .services-grid{
    display: flex;
    flex-direction: column;
    grid-column: 2 / span 4;
    grid-template-columns: repeat(3, 1fr);
    align-self: center;
    margin: 40px 0 ;
    grid-gap: 20px;
}
.list-container .services-grid .services-item{
    padding: 20px 15px;
    text-align: center;
}
.list-container .services-grid .services-item h2{
    color: #fff;
    font-weight: 600;
    font-size: 24px;
}
.list-container .services-grid .services-item p{
    color: var(--grey-color);
    font-size: 16px;
    line-height: 35px;
}
.list-container .services-grid .service-icon{
    height: 70px;
    margin: 20px 0 30px;
}

// Knowledge
///////////////////////
.knowledge { padding: 5rem 0; }
.knowledge .knowledge-box { 
    display: flex; 
    flex-wrap: wrap; 
    min-height: 30vh;
    padding: 3rem 0; 
    border-bottom: 1px solid var(--gold-color);
    width: 100%;  
    display:flex; 
    justify-content: space-between;
}
.knowledge .knowledge-box h3 {
    text-transform: uppercase; 
    color: var(--darkblue-color);
    font-weight: 700; 
    margin-bottom: 1.5rem; 
    font-size: 1.5em;
}
.knowledge .knowledge-box ul {
    display: flex; 
    justify-content: space-between; 
    flex-wrap: wrap;
}
.knowledge .knowledge-box ul li{ 
    width: 50%; 
    display: flex; 
    font-size: 1em; 
    line-height: 2.3em;
    color: var(--darkblue-color); 
    font-weight: 500;
}
@media only screen
and (min-width : 961px){  
    .description-container .about-text p {
        font-size: 3em; 
        line-height: 1.4em;
    }
    .description-container .about-text{ padding: 1rem 0 2rem 0; }
   
   .list-container .services-grid{ display: grid; }
// Knowledge
///////////////////////
    .knowledge .knowledge-box h3{ font-size: 2.5em; }
    .knowledge .knowledge-box h3, .knowledge .knowledge-box ul{ width: 50%;}
    .knowledge .knowledge-box ul li{ 
        line-height: 2em; 
        font-size: 1.2em; 
    }
}
@media only screen
and (min-width : 961px)
and (max-width : 1440px) {
}
@media only screen
and (min-width : 0)
and (max-width : 960px) {
}
</style>