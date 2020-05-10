<template>
  <div>
        <Header />
        <main>
            <NavWrapper />
            <ProgressBar />
            <About />
            <Services />
            <Portfolio />
            <Contact />
        </main>
        <Footer />
  </div>
</template>

<script>
    
    import {Footer, ProgressBar, Header} from '@/components'

    import NavWrapper from './nav-wrapper'

    import Portfolio from './portfolio'
    
    import Contact from './contact'
    
    import Services from './services'
   
   import About from './about'

export default {
    components:{
        Footer,
        Header,
        NavWrapper,
        ProgressBar,
        About,
        Services,
        Contact,
        Portfolio
    }
}
</script>

<style lang="scss" scoped>
    
</style>>

