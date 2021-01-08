<template>
    <div>
        <footer>
            
            <div class="footer-item copy">
                <div >
                    <img src="@/assets/logo-gray.svg" alt="logo de marca"> 
                </div>
                
                <span> | @copyright 2020 </span>
            
            </div>
           
            <div class="footer-item redes"> 
                
                <ul >
                    <li><a href="">Instragram </a></li>
                    <li><a href="">Behance </a></li>
                    <li><a href="">Linkedin </a></li>
                </ul>

            </div>
            

            <div class="footer-item toTop">
                <h4 @click="scrollToTop()">
                    Top<font-awesome-icon 
                                class=" redes-icon ml-1"
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

    }

    .footer-item{
            padding: 40px 0;
    }
    .redes{
            grid-column: 3 / span 2;
            justify-self: center;
        
    }
    .redes ul{
        display: flex;
        justify-content: space-between;
        margin: 0;
    }

  .redes a{
       font-size: 0.9em;
       color: var(--grey-color);
       padding: 20px
   }

   .toTop{
       grid-column: 5 / span 2;
       /* background: white; */
        justify-self: center;
       display: flex;
   }

    .toTop h4{
        color: #fff;
        font-size: 1.4em;
        cursor: pointer;
        font-weight: 600;
   }

   footer .copy{
        grid-column: 1/ span 2;
        color: var(--grey-color);
        font-size: 0.9em;
        display: flex;
        justify-self: center;
        align-items: center;
   }
    footer .copy div{
        width: 20px;
        margin-right: 7px;
    }

    @media (max-width: 768px){
        
        .footer-item{
            grid-column: 2 / span 4;
            padding: 10px 0;
            justify-self: center ;
         }

        footer .copy{
            grid-column: 2/ span 4;
            justify-self: center ;
            padding-top: 20px;
        }
        
    }
</style>