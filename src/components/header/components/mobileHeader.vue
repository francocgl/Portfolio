<template style="overflow:hidden">
    <div class="fixedMenu" >
        <header class="nav-header animateNav">
            <router-link to="/" @click="onClose(0)" class="logo-container" >
                <img src="@/assets/logo-white.svg" alt="logo de marca" id="logo"> 
            </router-link>
            <div class="menu-times" @click="onClose(0)">
                <span class="times" ></span>
            </div>
        </header>
        <div class="content-menu">
            <div class="nav-wrapper nav-wrapper-mobile">
                <ul class="nav-list"  v-if="!router">
                    <li class="nav-item nav-item-1 nav-item-animate">
                        <a   @click="onClose(1)">
                             <router-link  to="/acerca"   > <span data-text="Acerca">Acerca</span></router-link>
                        </a>
                    </li>
                    <li class="nav-item nav-item-3 nav-item-animate">
                        <a    @click="onClose(3)">
                            <router-link   to="/portfolio"><span data-text="Portfolio">Portfolio</span></router-link>
                        </a>
                    </li>
                    <li class="nav-item nav-item-4 nav-item-animate">
                        <a   @click="onClose(4)">
                            <router-link   to="/contacto"><span data-text="Contacto">Contacto</span></router-link >
                        </a>
                    </li>
                </ul>
               <!-- ROUTER -->
                <ul class="nav-list" v-if="router">
                    <li class="nav-item nav-item-animate nav-item-1 ">
                        <router-link  to="/acerca"   > <span data-text="Acerca" :class=" {'active' : (page == 'acerca') ? true : false} ">Acerca</span></router-link>
                    </li>
                    <li class="nav-item nav-item-animate nav-item-3">
                        <router-link   to="/portfolio"><span data-text="Portfolio" :class=" {'active' : (page == 'portfolio') ? true : false}">Portfolio</span></router-link>
                    </li>
                    <li class="nav-item nav-item-animate nav-item-4">
                        <router-link   to="/contacto"><span data-text="Contacto" :class=" {'active' : (page == 'contacto') ? true : false} ">Contacto</span></router-link >
                    </li>
                </ul>
                    <ul class="redes nav-item-animate">
                        <li>
                            <a ref="box" href="https://www.instagram.com/francocagliolo/?hl=es-la" target="_blank">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a ref="box" href="https://www.linkedin.com/in/franco-cagliolo-5534b0139/" target="_blank">
                                Linkedin
                            </a>
                        </li>

                        <li>
                            <a ref="box" href="https://www.behance.net/francocgl" target="_blank">
                                Behance
                            </a>
                        </li>
                    </ul>
            </div>
            <div class=" info-contacto">
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
                        <li>cagliolo@gmail.com</li>
                    </ul>
                    <ul class="info-container">
                        <li>REDES</li>
                        <li>
                            <a href="https://www.behance.net/francocgl">
                                <font-awesome-icon 
                                    class=" redes-icon"
                                    :icon="['fab', 'behance']"
                                />
                            </a>
                            
                            <a href="https://www.linkedin.com/feed/">
                                <font-awesome-icon 
                                    class=" redes-icon"
                                    :icon="['fab', 'linkedin']"
                                />
                            </a>

                            <a href="https://www.instagram.com/francocagliolo/?hl=es-la">
                                <font-awesome-icon
                                    class=" redes-icon"
                                    :icon="['fab', 'instagram']" 
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>     
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import {  TimelineLite } from 'gsap';
// Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faLinkedin, faBehance } from '@fortawesome/free-brands-svg-icons';
library.add(faInstagram, faLinkedin, faBehance);

export default {
    props:{
        passingMenu : Boolean,
        router: Boolean,
        page: String
    },
    mounted(){
        var t1 = new TimelineLite();
        var t2 = new TimelineLite();
         t1.from( $('.info-container'),1.2, {
            opacity: 0,
            stagger: 0.2,
            x: 50
        });

        
        t2.from( $('.nav-item-animate'),1.5, {
            opacity: 0,
            stagger: 0.2,
            x: -50
        });
               
    },
    methods:{
        onClose(val){
            return new Promise(() => {
               
                const t1 = new TimelineLite();
                const t2 = new TimelineLite();
                const t3 = new TimelineLite();

                 t3.to( $('.animateNav'),0.3, {
                    opacity: 0,
                        y:- 50
                });

                t1.to( $('.info-container'),0.6, {
                    opacity: 0,
                     stagger: 0.2,
                    x: 100})

                t2.to( $('.nav-item-animate'),0.6, {
                    opacity: 0,
                     stagger: 0.2,
                    x: -100});
                
                setTimeout(() => {
                        
                        this.$emit('close', val)
                        
                }, 1200);
                    
                               
            }) 
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
    transition: all 600ms ease-in-out;
}
.fixedMenu{
    position: fixed;
    overflow: hidden;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url('../assets/logo-bg.png') no-repeat 50% 50% var(--blue-color);
    background-size: 80%; 
    z-index: 200;
    color: white;
}

.fixedMenu header{
    background: transparent;
    position: relative;
}
.content-menu{
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 2fr 2fr 1fr;
}
.redes-icon{
    padding-right: 10px;
    font-size: 1.8em;
    cursor: pointer;
    transition: all 600ms ease-in-out;
}

.redes-icon:hover{
    color: #fff;
}
.nav-wrapper{
    position: relative;
    display: flex;
    height: 90vh;
    width: 100%;
    align-items: center;
    grid-column: 2 / span 2;
}
.nav-wrapper ul{
    z-index: 4;
}
.nav-wrapper li a{
    font-size: 60px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
}
.nav-wrapper .nav-item span{
    position: relative;
    display: block;
}
.nav-wrapper .nav-item span.active{
    color: var(--gold-color);
}
.nav-wrapper .nav-item span:before{
    width: 0;
    color: var(--gold-color);
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
    grid-column: 4 /span 2;
    align-self: center; 
}

.info-container{
    padding: 10px 20px;
    text-align: right;
}
.info-container li:nth-child(1){
    font-weight: 600;
    font-size: 17px;
    color: #fff;
}
.info-container li:nth-child(2) a, .info-container li:nth-child(2){
    color: var(--grey-color);
    font-size: 1.2em;
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
.logo-container{
    justify-self: center;
}

#logo{
    width: 35px;
}
.nav-wrapper-mobile .redes {
    display: none
}

@media screen 
and(max-width: 768px){
    .nav-wrapper-mobile .redes  {
        display: flex; 
        width: 100%; 
        position: absolute; 
        bottom: 10%; 
        justify-content: space-around;
    }
    .nav-wrapper-mobile .redes  li a{ 
        font-size: 1em; 
        font-weight: 400; 
        color: var(--grey-color);
    }
    .info-contacto{
        display: none;
    }
    .content-menu{
        height: 100%;
    }
    .fixedMenu header{
        position: absolute;
    }
    .nav-wrapper{
        align-self: center ;
        height: 100%;
        grid-column: 2 / span 4;
        justify-content: center;
    }
    .nav-wrapper li a{
        font-size: 46px;
        color: white;
        justify-content: center;
    }
}
</style>