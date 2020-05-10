<template>
    <div>
        <section  id="contact-section">
                    
            <div class="contact-form">
                <div class="section-title">
                     <h2>Trabajemos juntos</h2>
                    <h1>Contacto</h1>
                </div>
                <form action="" class="row" if="formContact">
                    
                    <div class="form-group col-md-6">
                    
                        <input type="text" name="nombre" placeholder="Nombre y Apellido" class="form-control " autocomplete="off">
                    
                    </div>
                    
                    <div class="form-group col-md-6">
                    
                        <input type="text" name="email" placeholder="Email" class="form-control " autocomplete="off">
                    
                    </div>
                    
                        <div class="form-group col-12">
                    
                        <input type="text" name="asunto" placeholder="Asunto" class="form-control " autocomplete="off">
                    
                    </div>
                    
                    <div class="form-group col-12">
                    
                        <textarea name="desc" id="" cols="30" rows="10" class="form-control form-area "></textarea>
                    
                    </div>
                      <div class="form-group col-12">
                    
                          <input type="submit" class="btn btn-submit" id="" value="enviar">

                    </div>

                </form>
            </div>
            <div class="section-title contact-info">
               
                <span class="section-number">04</span>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloremque dignissimos alias porro eveniet impedit fugit 
                    reiciendis deserunt unde quas veniam autem. Corporis fuga, inventore iure consequatur et expedita a</p>
                
                <ul class="info-container">
                
                    <li>LOCACI&Oacute;N</li>
                
                    <li>Buenos Aires - Argentina</li>
                
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

            

                
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    #contact-section{
        display: grid;
        grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr 1fr;
    }
    .contact-form{
         grid-column: 2 / span 3;
         padding: 20px;

         align-self: center;
    }
 
    .contact-info{
        grid-column: 5 / span 2;
        justify-self: center;
        align-self: center;
        padding: 0 30px;
    }
    #formContact{
        padding-top: 20px;
    }
    .info-container{
        margin: 30px 0;
    }
    .info-container li:nth-child(1){
        text-transform: uppercase;
        color: var(--darkblue-color);
        font-weight: 600;
        padding-bottom: 10px;
        font-size: 1em;
    }
    .info-container li:nth-child(2){
        color: var(--grey-color);
    }
    .form-control{
        background: transparent;
        color: var(--darkblue-color);
        border: solid 1.2px;
        border-top: none;
        border-left: none;
        border-right: none;
        border-radius: 0px;
        padding: 10px 2px;
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
        border: 1px solid var(--darkblue-color);
        margin-top: 20px;
    }
    .btn-submit{
        background: var(--darkblue-color);
        color: #fff;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 0.9em;
        border-radius: 0;
    }

    @media (max-width: 758px) {
        .contact-form, .contact-info{
            grid-column: 2 / span 5;
        }
   /*      #contact-section{
            grid-template-rows: 2 1fr;
        }
        .contact-info{
            grid-row: 1;
        }
        .contact-form{
            grid-row: 2;

        } */
    }
</style>