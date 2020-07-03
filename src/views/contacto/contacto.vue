<template>
    <div>
        <Header :passingRouter="true"/>

        <Redes />

        <section  id="contact-section">
            <div class="contact-content">

              
                <div class="section-title">
                    <h2 class="animate-input">Trabajemos juntos</h2>
                    <h1 class="animate-input">Mensajes</h1>
                 </div>
                <div class="contact-form">
                <form 
                    action="sendMail.php"
                    @submit="checkForm"
                    class="row"
                    id="formContact"
                    method="POST"
                >
                     <p v-if="errors.length">
                        <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
                        <ul>
                        <li >{{ error[0] }}</li>
                        </ul>
                    </p>
                    <div class="form-group col-md-6">
                    
                        <input type="text" name="name" id="name" v-model="name" placeholder="Nombre y Apellido" class="form-control animate-input " autocomplete="off">
                    
                    </div>
                    
                    <div class="form-group col-md-6">
                    
                        <input type="text" name="email" id="email" v-model="email" placeholder="Email" class="form-control animate-input " autocomplete="off">
                    
                    </div>
                    
                        <div class="form-group col-12">
                    
                        <input type="text" name="asunto" id="asunto" v-model="asunto"  placeholder="Asunto" class="form-control animate-input " autocomplete="off">
                    
                    </div>
                    
                    <div class="form-group col-12">
                    
                        <textarea name="mensaje" id="mensaje" v-model="mensaje" cols="10" rows="7" class="form-control animate-input form-area " placeholder="Escribime..."></textarea>
                    
                    </div>
                      <div class="form-group col-12 justify-content-end d-flex">
                    
                          <input type="submit" class="btn btn-submit animate-input" id="" value="enviar">

                    </div>

                </form>

                      <div class="contact-info">
                
                    <ul class="info-container">
                    
                        <li>LOCACI&Oacute;N</li>
                    
                        <li>Buenos Aires, Argentina <br> La Lucila</li>
                    
                    </ul>
                    
                    <ul class="info-container">
                    
                        <li>TEL&Eacute;FONO</li>
                    
                        <li>+54 11 3005 7335</li>
                    
                    </ul>
                    
                    <ul class="info-container">
                    
                        <li>EMAIL</li>
                    
                        <li>franco@martin.com.ar</li>
                    
                    </ul>
                
                </div>
            </div>
          
           
             </div>
        </section>

        <Footer />
    </div>
</template>

<script>
  
    import { Footer, Header, Redes } from '@/components';

    import {  TimelineLite } from 'gsap';

    import $ from 'jquery';

export default {
    components:{
        Footer,
        Header,
        Redes
    },
    data(){
        return{
            errors: [],
            name: null,
            email: null,
            asunto: null,
            mensaje: null
        }
    },
    methods: {
        checkForm: function (e) {
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
                 $('#mensaje').addClass('invalid');
            }else{

                $('#mensaje').removeClass('invalid');
            }

            if (!this.errors.length) {
                return true;
            }

            e.preventDefault();
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
    .invalid{
        border: 1.2px solid red !important;
        transition: all 1s ease;
    }
    #contact-section{
        display: grid;
        grid-template-columns: 1fr 2fr 2fr 2fr 2fr  1fr;
        grid-template-rows: auto  1fr;
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

    .contact-content{
        grid-row: 2;
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
        padding-left: 20px;
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
        background: white;
        
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
            
         }
         .info-container li:nth-child(1){
             font-size: 14px;
         }
         .info-container li:nth-child(2){
             font-size: 12px;
         }
  
    }
</style>