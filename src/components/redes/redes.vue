<template>
    <div>
        <div class="redes">
            <ul>
                <li>
                    <a ref="box" href="" target="_blank">
                        <font-awesome-icon
                            class=" redes-icon"
                            :icon="['fab', 'instagram']" 
                        
                        />
                        <span class="icon-title">Instagram</span>
                    </a>
                </li>

                <li>
                    <a ref="box" href="" target="_blank">
                        <font-awesome-icon 
                            class=" redes-icon"
                            :icon="['fab', 'linkedin']"
                        
                        />
                        <span class="icon-title">Linkedin</span>
                    </a>
                </li>

                <li>
                    <a ref="box" href="" target="_blank">
                        <font-awesome-icon 
                            class=" redes-icon"
                            :icon="['fab', 'behance']"
                        
                        />
                        <span class="icon-title">Behance</span>
                   </a>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
   
    import { library } from '@fortawesome/fontawesome-svg-core';
   
    import { faInstagram, faLinkedin, faBehance } from '@fortawesome/free-brands-svg-icons';
    
    library.add(faInstagram, faLinkedin, faBehance);

    export default {
    
    }
</script>

<style lang="scss" scoped>
    
    .redes{
    
        position: fixed;
        
        top: 50%;
        
        right: 4%;
        
        transform: translate(0, -50%);

        z-index: 2;
    
    }
    
    .redes li{
    
        padding: 20px 0;
        
    }
    .redes li a{

        display: flex;
            
        align-items: center;

        color: var(--darkblue-color);

        mix-blend-mode: difference;
    }

    .redes li a:after{
        
        mix-blend-mode: difference;
    }

    .redes li a .icon-title{
       
        right: 13px;

        transition: 600ms all ease-in-out;
        
        position: absolute;

        opacity: 0;

        width: 0%;

        direction: rtl;

        overflow: hidden;

        text-align: right;
    }
     
    
    .redes li svg{
    
        font-size: 1.3em;
    
    }

     .redes li a:hover .icon-title{
        
        opacity: 1;
       
        width: 100%;

        overflow: visible;

       transform: translate( -25px, 0px);
        
    }

    @media (max-width: 768px){
        .redes{
            display: none;
         
        }
    }
    
 
</style>