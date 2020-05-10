<template>
    <div>
        <footer>
            <div class="footer-content">
                    <div class="redes">
                       
                        <ul >
                            <li><a href="">Instragram </a></li>
                            <li><a href="">Behance </a></li>
                            <li><a href="">Linkedin </a></li>
                        </ul>

                    </div>
                    
                    <div class="copy">
                        <span>@copyright 2020 | Franco Martin </span>
                    </div>

                    <div class="top">
                        <a href="">Ir Arriba</a>
                    </div>
            </div>
        </footer>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
  footer{
      padding: 20px 0;
      display: grid;
      grid-template-columns: 1fr 2fr 2fr 2fr 2fr 1fr;
  }
  footer .redes ul{
      display: flex;
      justify-content: space-between;
      margin: 0;
  }
   footer .redes a{
       font-size: 0.9em;
       color: var(--grey-color);
   }
   footer .footer-content{
      border-top: 1.5px solid var(--grey-color);
       grid-column: 2 / span 4;
       padding: 30px 10px;
       display: grid;
       grid-template-columns: repeat(4, 1fr);
       grid-gap: 10px;
       align-items: center;
       color: var(--grey-color)

   }
   footer .top{
       grid-column: 4;
       justify-self: end;
       
   }
   footer .copy{
       grid-column: 2 / span 2;
       justify-self: center;;
       font-size: 0.9em;
   }

   footer .top a{
        color: var(--blue-color);
        font-size: 1.5em;
   }
</style>