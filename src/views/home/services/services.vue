<template>
    <div>
        <section  id="services-section">
                    <div class=" services-item-1">
                      
                            <span class="section-number">02</span>
                            <div class="services-list">
                                <h4>Diseño Web</h4>
                                <ul>
                                    <li>HTML / CSS /JS</li>
                                    <li>Full Stack Web</li>
                                    <li>Responsive Design</li>
                                    <li>Vue JS / AJAX</li>
                                </ul>
                            </div>
                            <div class="services-list">
                                <h4>Diseño Grafico</h4>
                                <ul>
                                    <li>UI / UX Design</li>
                                    <li>Branding</li>
                                    <li>Website Front End</li>
                                    <li>Logos</li>
                                </ul>
                            </div>
                    </div>

                        <div class="services-item-2 section-title">
                                  <h2>Diseñador Gráfico / Web</h2>
                            <h1>Servicios</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sint magnam dolore eum, porro iste non sunt similique nobis nostrum? Neque animi excepturi incidunt voluptatibus dolore, illo cumque dicta minus. </p>
                        </div>
    
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    #services-section{
        display: grid;
        grid-template-columns: 1fr 2fr 2fr 2fr 2fr 1fr;
        grid-column: 2 / span 3;
    }
   
     .services-list{
         margin-top: 30px;
     }
   
    .services-list h4{
        color: var(--blue-color);
        text-transform: uppercase;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        letter-spacing: 2px;
        margin-bottom: 20px;

    }
    .services-list li{
       color: var(--grey-color);
       padding: 10px 0;
    }
     .services-item-1{
        grid-column: 2 / span 2; 
        justify-self: start;
        align-self: center;
    }

    .services-item-2{
        grid-column: 4/ span 3;
        align-self: center;
    }

    .services-item-2 h1, p{
        color: #fff;
    }

    .services-item-2 h1{
        margin-bottom: 20px;
    }
     .services-item-2 p{
         font-size: 18px;
         line-height: 30px;
         margin: 0;
     }

    .section-title{
        padding: 40px 20px;
        background: var(--blue-color);
    }
    @media (max-width: 768px){
        .services-item-1, .services-item-2{
            grid-column: 2 / span 4;
        }
    }
</style>