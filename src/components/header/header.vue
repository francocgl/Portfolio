<template>
    <div>
        <header class="nav-header">
            
                <h2>Logo</h2>
               
                
                
                <ul class="idioma">
        
                    <li class="active">ES</li>
        
                    <li>EN</li>
        
                </ul>
        
        
                <div class="menu-bars">
                    <span class="bar-1 bars" @click="openMenu = true"></span>
                
                </div>
            
        </header>

        <div class="fixedMenu" v-if="openMenu == true">
        
            <header class="nav-header">
                
                    <h2>Logo</h2>
                
            
                    <div class="menu-times" @click="openMenu = false">
                        <span class="times" ></span>
                    
                    </div>

                
            </header>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6">
                        <div class="nav-wrapper">

                            <ul class="nav-list" >
                                
                                <li class="nav-item nav-item-1 ">
                                    <a href="#about-section"
                                        
                                    >

                                        <span data-text="Acerca">Acerca</span>

                                    </a>
                                </li>
                    
                                <li class="nav-item nav-item-2">
                                    <a  href="#services-section"
                                        
                                    >

                                        <span data-text="Servicios"> Servicios</span>

                                    </a>
                                </li>
                    
                                <li class="nav-item nav-item-3">
                                    <a   href="#portfolio-section"
                                        
                                    >
                                        <span data-text="Portfolio">Portfolio</span>
                                    
                                    </a>
                                </li>

                                <li class="nav-item nav-item-4">
                                    <a href="#contact-section"
                                        
                                    >

                                        <span data-text="Contacto">Contacto</span>
                                    </a>
                                </li>
                    
                            </ul>
                        </div>
                    </div> 

                    <div class="col-md-6 info-contacto">
                        <div>
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

                            <ul class="info-container">
                            
                                <li>REDES</li>
                            
                                <li>
                                    <font-awesome-icon 
                                        class=" redes-icon"
                                        :icon="['fab', 'behance']"
                                    
                                    />

                                    <font-awesome-icon 
                                        class=" redes-icon"
                                        :icon="['fab', 'linkedin']"
                                    
                                    />

                                    <font-awesome-icon
                                        class=" redes-icon"
                                        :icon="['fab', 'instagram']" 
                                    
                                    />

                                </li>
                            
                            </ul>

                        </div>
                    </div>     
                </div>
            </div>

        </div>
              
    </div>
</template>

<script>

    import { library } from '@fortawesome/fontawesome-svg-core';
   
    import { faInstagram, faLinkedin, faBehance } from '@fortawesome/free-brands-svg-icons';
    
    library.add(faInstagram, faLinkedin, faBehance);

export default {
    data() {
        return{

            openMenu: false
        }
    }
    
}
</script>

<style lang="scss" scoped>
 .nav-header{
        
        display: grid;
        
        grid-template-columns: 1fr 8fr  1fr;
        
        align-items: center;
        
        grid-gap: 20px;
        
        width: 100%;
        
        z-index: 20;
        
        position: fixed;

        padding: 20px;
        
        background: #fff;
    }
    .logo-name{
        font-weight: 600;

        font-size: 1.2em;
    }
    .idioma{
        
        justify-self: end;
        
        display: flex;
        
        align-items: center;
        
        margin: 0;
    }
    .idioma li{
        
        padding: 0 10px;
        
        font-weight: 500;
        
        font-size: 1em;
    }

    .idioma .active{
        font-weight: 600;
    }
    .menu-bars{
        
        width: 30px;
        
        height: 20px;
        
        display: flex;
        
        justify-content: space-between;
        
        flex-direction: column;
        
        justify-self: center;
        
        position: relative;

        transition: 600ms all ease-in-out;

        cursor: pointer;

        grid-column: 3;

    }
    .bars{
        
        width: 30px;
        
        height: 3px;
        
        background: var(--darkblue-color);
        
        display: block;
    }

    .bars::after, .bars::before{
        
        content: '';
        
        position: absolute;
        
        width: 30px;
        
        height: 3px;
        
        background: var(--darkblue-color);
        
        transition: all 1s ease-in-out;

    }

    .bars::before{
        transform: translateX( 20px);
    }

    .bars::after{
        transform: translatey( 15px);
    }

    .menu-bars:hover .bars::before{
       
         transform: translateY( 10px);
    }
     .menu-bars:hover .bars::after{

        transform: translateY( 20px);
    }

    .fixedMenu{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: url('./assets/logo-bg.png') no-repeat 50% 50% var(--blue-color);
        background-size: 80%; 
        z-index: 200;
        color: white;
    }

    .fixedMenu header{
        background: transparent;
        position: relative;

    }
    .redes-icon{
        padding-right: 10px;
        font-size: 1.3em;
    }

     .nav-wrapper{
        position: relative;
        display: flex;
        height: 90vh;
        width: 100%;
        align-items: center;
    }
    .nav-wrapper ul{
        z-index: 4;
        padding: 20px;
       
    }
    .nav-wrapper li a{
        font-size: 10vh;
        color: var(--grey-color);
        font-weight: 600;
      
    }

    .nav-wrapper .nav-item span{
        position: relative;
        display: block;
    }
     .nav-wrapper .nav-item span:before{
         width: 0;
         color: #fff;
         overflow:hidden;
         position: absolute;
         content: attr(data-text);
         transition: all 600ms cubic-bezier(0.84, 0, 0.08, 0.99);
     }
    
    .nav-wrapper .nav-item:hover span:before{
        width: 100%;
        transition:  all 600ms ease-in;
    }

    .info-contacto{
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .info-container{
        padding: 10px 20px;
        text-align: right;
    }
    .info-container li:nth-child(1){
        font-weight: 600;
    }

     .info-container li:nth-child(2){
        color: var(--grey-color);
    }

    .menu-times{
        
        width: 30px;
        
        height: 20px;
        
        display: flex;
        
        justify-content: center;

        flex-direction: column;
        
        justify-self: center;
        
        position: relative;

        transition: 600ms all ease-in-out;

        cursor: pointer;

        grid-column: 3;

    }

    .times::before, .times::after{
        
        content: '';
        
        position: absolute;
        
        width: 30px;
        
        height: 3px;
        
        background: #fff;
        
        transition: all 1s ease-in-out;

    }

   .times::before{
       
       transform: rotate( -45deg);
   }

   .times::after{
       transform: rotate( 45deg);
       
   }

   .menu-times:hover .times::after, .menu-times:hover .times::before{
       transform: rotate( 0deg);

   } 


    @media(max-width: 768px){
        .idioma{
            display:none;
        }
    }
</style>