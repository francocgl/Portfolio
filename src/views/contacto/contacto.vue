<template>
    <div>
        <Header :passingRouter="true"/>

        <Redes />
       

        <section  id="contact-section">
            
            <div class="contact-content-asdasdasda">
                
            <div class="section-title">
                <h2 class="animate-input">Trabajemos juntos</h2>
                <h1 class="animate-input">Contacto</h1>
            </div>
        <div class="contact-form">

            <div class="contact-info">
    
                <ul class="info-container-contacto">
                
                    <li>LOCACI&Oacute;N</li>
                
                    <li>Debenedetti <br> Lucila, Buenos Aires, Argentina</li>
                
                </ul>
                
                <ul class="info-container-contacto">
                
                    <li>TEL&Eacute;FONO</li>
                
                    <li>+54 11 3005 7335</li>
                
                </ul>
                
                <ul class="info-container-contacto">
                
                    <li>EMAIL</li>
                
                    <li>franco@martin.com.ar</li>
                
                </ul>
        
            </div>
            <div>
                  <img src="@/assets/mapa-bue.svg" alt="logo de marca" id="logo"> 
            </div>
    </div>
           
             </div>
        </section>

        <Footer />
    </div>
</template>

<script>
  
    import { Footer, Header, Redes } from '@/components';
    

/*     import {  TimelineLite } from 'gsap';

    import $ from 'jquery'; */

export default {
    components:{
        Footer,
        Header,
        Redes
    }
}
</script>

<style lang="scss" scoped>
 
    #contact-section{
        display: grid;
        grid-template-columns: 1fr 2fr 2fr 2fr 2fr  1fr;
        grid-template-rows: 100px  1fr;
    }

    .section-title{
        grid-row: 2;
        grid-column: 2 / span 2;
        align-self: center;
        margin: 0;
    }
    .section-title h1{
        color: var(--darkblue-color);
    }


    #formContact{
        padding-top: 20px;
    }
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
        font-size: 1em;
    }
    .form-control{
        background: transparent;
        color: var(--grey-color);
        border: solid 1.2px;
        border-top: none;
        border-left: none;
        border-right: none;
        border-radius: 0px;
        padding: 10px ;
    }
    .form-control::placeholder{
        color: var(--darkblue-color);
        font-size: 1em;
    }
    
    .form-control:focus{
        box-shadow: none;
        background-color: transparent;
    }

    .form-area{
        border: 1px solid var(--grey-color);
        margin-top: 20px;
    }


    .btn-submit:hover{
        background: var(--grey-color);
        color: white
        
    } 
    #contact-section{
        display: grid;
        grid-template-columns: 1fr 2fr 2fr 2fr 2fr  1fr;
        grid-template-rows: 100px  1fr;
    }

    .section-title{
        grid-row: 2;
        grid-column: 2 / span 2;
        align-self: center;
        margin-top: 20px;
    }


    .contact-content-asdasdasda{
        grid-row: 2;
        grid-column: 2 / span 4;
    }
   
    .contact-form{
        display: grid;
        grid-template-columns: 2fr 1fr;
         grid-column: 4 / span 2;
         align-self: center;
    }
 
    .contact-info{
        grid-column: 1 / span 1;
        align-self: baseline;
   
       
    }
    #formContact{
        padding-top: 20px;
    }
    .info-container-contacto{
        margin: 30px 0;
    }
    .info-container-contacto li:nth-child(1){
        text-transform: uppercase;
        font-weight: 600;
        padding-bottom: 10px;
        font-size: 0.9em;
        letter-spacing: 2px;
        color: var(--grey-color);
    }
    .info-container-contacto li:nth-child(2){
        color: var(--darkblue-color);
        font-size: 1em;
    }
    .form-control{
        background: transparent;
        color: var(--grey-color);
        border: solid 1.2px;
        border-top: none;
        border-left: none;
        border-right: none;
        border-radius: 0px;
        padding: 10px ;
    }
    .form-control::placeholder{
        color: var(--darkblue-color);
        font-size: 1em;
    }
    
    .form-control:focus{
        box-shadow: none;
        background-color: transparent;
    }

    .form-area{
        border: 1px solid var(--grey-color);
        margin-top: 20px;
    }
    .btn-submit{
        background: var(--blue-color);
        color: #fff;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 0.9em;
        border-radius: 0;
        transition: all 600ms ease-in-out;
    }

    .btn-submit:hover{
        background: var(--grey-color);
        color: white
        
    }
    @media (max-width: 758px) {

        #contact-section{
            grid-template-rows: 100px 1fr;
        }
        .contact-form, .contact-info{
            grid-column: 2 / span 5;
        }

        #formContact {
            padding-top: 20px;
            grid-column: 1 / span 3;
        } 
        
        .contact-info{
            grid-column: 1 / span 3;
            padding: 0;
            display: flex;
            justify-content: space-between;
            justify-self: inherit;
            flex-wrap: wrap;
            
         }
         .info-container-contacto li:nth-child(1){
             font-size: 14px;
         }
         .info-container-contacto li:nth-child(2){
             font-size: 12px;
         }
  
    }
    @media (max-width: 758px) {

        #contact-section{
            grid-template-rows: 100px 1fr;
        }
        .contact-form, .contact-info{
            grid-column: 2 / span 5;
        }

  
    }
</style>