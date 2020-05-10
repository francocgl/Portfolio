<template>
    <div>
        <section  id="about-section">
            <div class=" about">
                <div class="section-title">
                    <h2 class="section-sub-title">Franco Martin Cagliolo</h2>
                    <h1 >Acerca</h1>

                </div>
                <div class="number-position">
                    <span class="section-number ">01</span>

                </div>
            </div>

            <div class="description-container">

                <div class="description-item-2">
                    
                    <p class="description">Me desempeño como desarrrolador web y estoy terminando la carrera de diseñador gráfico en la     Universidad de Buenos   Aires. <br>
                        Estudié en la escuela Da Vinci la carrera de web y con el correr de los años fui trabajando como freelance y luego para otras empresas en donde fui adquiriendo diversos  </p>
                </div>
                <div class="description-item-1">

                </div>
            </div>

        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    #about-section{
        display: grid;
        grid-template-columns: 1fr 2fr 2fr 2fr 2fr 1fr;
        grid-template-rows: auto ;
    }
    .about{
        margin-top: 20px;
        grid-column: 2 / span 4;
        align-items: end;
        display: grid;
        grid-template-columns: 1fr 1fr;
        
    }
    .section-title{
        grid-column: 1 / span 2 ;
    }

    .description-container{
       grid-row-start: 2;
      
       grid-column: 2 / span 5;
       display: grid;
       grid-template-columns: 1fr 1fr 2fr;
    }

  
    .description {
        color: var(--grey-color);
        font-size: 1em;
        line-height: 40px;
       
    }
    .description-item-2{
        grid-column: 1 / span 2;
    }
    .description-item-1{
        background: var(--grey-color);

    }
    .number-position{
        grid-column: 3/ span 2
    }

    @media (max-width: 768px){
        .about{
            grid-template-rows: 2 1fr;
        }
        .section-title{
            grid-row: 2;
            grid-column: 1 / span 4;
            margin-top: 0;
        }
        .description-item-2{
            grid-column: 2 / span 4;
        }
        .number-position, .description-item-2, .description-item-1{
             grid-column: 1 / span 4;
        }
    }
</style>