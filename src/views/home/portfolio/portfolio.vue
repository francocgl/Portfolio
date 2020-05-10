<template>
    <div>
        <section id="portfolio-section">
           
            <div class=" portfolio-title">
                <div class="section-title">
                    
                    <h2>Diseños y trabajos</h2>
                    <h1>Portfolio</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sint magnam dolore eum, porro iste non sunt similique nobis nostrum? Neque animi excepturi incidunt voluptatibus dolore, illo cumque dicta minus.</p>
                </div>
                <div class="number-position">
                        <span class="section-number ">03</span>
                    </div>
            </div>

                <div class="container-fluid">
                        
                    <div class="portfolio-grid row">
                        
                        <div class="col-md-4 grid-columns">
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                        </div>
                        
                        <div class="col-md-4 grid-columns">
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                        </div>
                        
                        <div class="col-md-4 grid-columns">
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                        </div>

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
    .portfolio-title{
        display: grid;
        grid-template-columns: 1fr 2fr 2fr 2fr 2fr 1fr;
        
    }

    .section-title p{
        color: var(--darkblue-color);
    }
     .section-title{
        grid-column: 2 / span 3;
         
     }
     .portfolio-grid{
         padding: 10px
     }

    
     .grid-columns .item{
         background: var(--darkblue-color);
         width: 100%;
         height: 200px;
        padding: 20px;
        
     }

     @media (max-width: 768px){
        .section-title{
            grid-column: 2 / span 4;
         
        }
     }

</style>