<template>
    <div>
        <footer>
             <!-- <div class="footer-top ">
                 <p>diseñador radicado en Buenos Aires, Argentina <br>
                 CP: 1636 La Lucila - Vicente López</p>
             </div> -->
            
            
            <div class="footer-mid">

                <div class="footer-item "> 
                    <h6>Redes</h6>
                    <ul >
                        <li><a href="https://www.instagram.com/francocagliolo/?hl=es-la" target="_blank">Instragram </a></li>
                        <li><a href="https://www.behance.net/francocgl" target="_blank">Behance </a></li>
                        <li><a href="https://www.linkedin.com/in/franco-cagliolo-5534b0139/" target="_blank">Linkedin </a></li>
                    </ul>

                </div>
                <div class="footer-item "> 
                    <h6>SItio</h6>
                    <ul>
                        <li><router-link  to="/" > Home </router-link> </li>
                        <li><router-link  to="/acerca" > Acerca</router-link></li>
                        <li><router-link  to="/servicios" > Servicios</router-link></li>
                        <li><router-link  to="/portfolio" > Portfolio </router-link></li>
                        <li><router-link  to="/contacto" > Contacto  </router-link></li>
                    </ul>
                </div>

            </div>

            <div class="contacto">
                <a href="mailto:cagliolo@gmail.com">Contactame</a>
            </div>

            <div class=" copy">
                <div >
                    <img src="@/assets/logo-gray.svg" alt="logo de marca"> 
                </div>
                
                <span>Franco Martin | @copyright 2020 </span>
            
            </div>

            <div class=" toTop">
                <h4 @click="scrollToTop()">
                    IR ARRIBA<font-awesome-icon 
                                class=" redes-icon ml-2"
                                :icon="['fas', 'chevron-up']"
                        
                            />
                    </h4>
            </div>
           
        </footer>

    </div>
</template>

<script>

    import { library } from '@fortawesome/fontawesome-svg-core';
   
    import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
    
    library.add(faChevronUp);

    export default {
        methods:{
            scrollToTop(){
                window.scrollTo({top: 0, behavior: 'smooth'});
            }
        }
    }

</script>

<style lang="scss" scoped>
    footer{
        display: grid;
        grid-template-columns: 1fr 2fr 2fr 2fr 2fr 1fr;
        background: var(--darkblue-color);
        align-items: center;
        padding: 4rem 0;
    }

    .footer-top{
        grid-column: 2 / span 4;
        color:  var( --white-color);
        text-transform: uppercase;
        margin-bottom: 5rem;
        font-weight: 600;
    }
    .footer-top p { font-size: 0.9em;}

    .footer-mid{
        grid-column: 2 / span 4;
        display: flex;
    }

    .footer-item{
        margin: 40px 80px 40px 0;
        width: 300px;
             
    }
    .footer-item ul{ 
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 0;
    }

    .footer-item ul li{ width: 50% }

    .footer-mid li a{ font-size: 0.9em; color: var( --grey-color); transition: all .6s ease-in-out;}
    .footer-item h6{
        color: var( --white-color);
        text-transform: uppercase;
        font-weight: 1em !important;
        font-weight: 600;
        display: inline-block;
        margin-bottom: 1rem;
        
    }

   .toTop{
       grid-column: 5 / span 1;
       display: flex;
       justify-content: flex-end;
   }

    .toTop h4{
        color:  var( --white-color);
        transition: all .3s ease-in-out;
        font-size: 1em;
        cursor: pointer;
        font-weight: 600;
       border-bottom: 1px solid;
   }
    footer .contacto{ grid-column: 2/ span 4; margin: 2rem 0 4rem }
    footer .contacto a{ font-weight: 300; font-size: 6em; color : #fff; border-bottom: 1px solid;    transition: all .3s ease-in-out; }
    footer .toTop h4:hover, footer .contacto a:hover, .footer-mid li a:hover{ color: var(--gold-color);}
   footer .copy{
        grid-column: 2/ span 2;
        color: var( --grey-color);
        font-size: 0.9em;
        display: flex;
        align-items: center;
   }
    footer .copy div{
        width: 20px;
        margin-right: 7px;
    }

    @media (max-width: 768px){
        .footer-mid{ flex-wrap: wrap;}
        .footer-item{  grid-column: 2 / span 4; padding: 10px 0; margin: 0; width: 100%; }
        footer .contacto a{ font-size: 2.5em;}
        footer .copy{ grid-column: 2/ span 4; }

         .footer-mid li a{ font-size: 1em; margin: .5rem 0; display: block;}
        .toTop { display: none}
        
    }
</style>