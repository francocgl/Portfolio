<template>
    <div>
        <section  id="contact-section">
            <div class="contact-content-a">
                <div class="section-title">
                    <h2 class="animate-input">Contacto</h2>
                    <h1 class="animate-input">Trabajemos juntos</h1>
                    <p  class="animate-input"> ¿Necesitas ayuda con algún proyecto o deseas iniciar uno nuevo? </p> 
                    <div class=" animate-input">
                        <a  href="mailto:cagliolo@gmail.com" class="button-home animate-header">Escribime
                            <i class="icon-arrow-small-short"></i>
                        </a>
                    </div>
                </div>
             </div>
        </section>
    </div>
</template>

<script>

    import {  TimelineLite } from 'gsap';

    import { library } from '@fortawesome/fontawesome-svg-core';
   
    import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
    
    library.add(faArrowRight);


    import $ from 'jquery';

export default {
    data(){
        return{
            errors: [],
            name: '',
            email: '',
            asunto: '',
            mensaje: ''
        }
    },
    methods: {
        checkForm: function () {
            this.errors = [];

            if (!this.name) {
                this.errors.push("El nombre es obligatorio.");
                $('#name').addClass('invalid');

            }else{
                $('#name').removeClass('invalid');
            }

            if (!this.email) {
               
               this.errors.push('El correo electrónico es obligatorio.');
               
               $('#email').addClass('invalid');
            
            } else if (!this.validEmail(this.email)) {
                this.errors.push('El correo electrónico debe ser válido.');
                 $('#email').addClass('invalid');
            }else{

                $('#email').removeClass('invalid');
            }

            if (!this.asunto) {
                this.errors.push("El asunto es obligatorio.");
                 $('#asunto').addClass('invalid');
            }else{

                $('#asunto').removeClass('invalid');
            }

            if (!this.mensaje) {
                this.errors.push("El mensaje es obligatorio.");
                 $('#mensaje').addClass('invalid-text');
            }else{

                $('#mensaje').removeClass('invalid');
            }

            if (!this.errors.length) {
                /* this.$store.dispatch('SEND_MAIL'); 

               /*  axios.post('https://francomartin.com.ar/services/sendMail.php', {
                    nombre: this.name,
                    email: this.email,
                    asunto: this.asunto,
                    mensaje: this.mensaje
                }).then(function (response) {
                    this.console.log(response);
                })
                .catch(function (error) {
                    this.console.log(error);
                }); */

            }

        },

        validEmail: function (email) {

            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    },
    mounted(){
        
        const t1 = new TimelineLite();

        t1.from( $('.animate-input'),0.6, {
            opacity: 0,
            stagger: 0.2,
            y: -50})

        t1.from( $('.info-container'),0.6, {
            opacity: 0,
            stagger: 0.2,
            x: 50})
    }
}
</script>

<style lang="scss" scoped>

    #contact-section{
        display: grid;
        grid-template-columns: 1fr 2fr 2fr 2fr 2fr  1fr;
        grid-template-rows: 60px auto;
 
    }
   
    .section-title{
        grid-row: 2;
        grid-column: 2 / span 2;
        align-self: center;
        margin: 0;
    }
    .section-title h1, .section-title p{
        color: #fff;
    }
    

    .contact-content-a{
        /* margin-top: 40px; */
        grid-column: 2 / span 4;
        align-self: center;
    }
   
    .contact-form{
        display: grid;
        grid-template-columns: 2fr 1fr;
         grid-column: 4 / span 2;
         align-self: center;
    }
 
    .contact-info{
        grid-column: 2 / span 1;
        align-self: baseline;
        justify-self: center;
        padding: 0;
        display: flex;
    }
 
    .info-container{
        margin: 30px 0;
    }

    .info-container:nth-child(2){
        padding-left: 40px;
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
        color: #fff;
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
    .mail{
        color: #fff
    }
    @media (max-width: 758px) {
        .contact-form, .contact-info{
            grid-column: 2 / span 5;
            margin-top: 20px;
        }

        #formContact {
            padding-top: 20px;
            grid-column: 1 / span 3;
        } 
        
        .contact-info{
            grid-column: 1 / span 3;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: space-between;
            justify-self: inherit;
            flex-wrap: wrap !important;
            
         }
        .info-container{
            flex-wrap: wrap;

        }
       
         .info-container li:nth-child(1){
             font-size: 14px;
         }
         .info-container li:nth-child(2){
             font-size: 12px;
         }
  
    }
</style>