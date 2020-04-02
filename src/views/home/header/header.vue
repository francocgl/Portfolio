<template>
    <div>
        <div class="preloader">
            <div class="preloader-content">
                    <h3>Logo</h3>
                    <p>Cargando</p>
            </div>
        </div>
      <section>
            <header>
                <h2>Logo</h2>
                <div class="d-flex">
                    <ul class="d-flex">
                        <li @click = espaniol>ES</li>
                        <li @click = ingles>EN</li>
                    </ul>
                    <h2>Menu</h2>
                </div>
            </header>
            <div class="container">
                <nav>
                    <ul class="nav-wrapper">
                        <li><a href="#portfolio-section">Portfolio</a></li>
                        <li><a href="#about-section">Acerca de</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>

            </div>
        </section>
    </div>
</template>

<script>
import $ from 'jquery';

export default {

}
$('.preloader').delay('500').css('top', '300')

</script>

<style  lang="scss" scoped>
    header{
        display: flex;
        justify-content: space-between;
    }
    .preloader{
        width: 100%;
        height: 100vh;
        background: var(--darkblue-color);
        overflow: hidden;
        position: fixed;
        transition: 3s all ease-in-out;
        animation: brezier 5s forwards;
    }
    .preloader-content{
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--white-color);
    }
    .nav-wrapper{
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        
    }
    .nav-wrapper li a{
        font-size: 5rem;
        color: var(--darkblue-color);
        font-weight: 600;
    }
    @keyframes brezier{
        0%{
              opacity: 1;
        }
        100%{
            opacity: 0;

             transform: translateY(-3000px);
        }
    }
    
</style>