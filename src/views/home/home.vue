<template>
  <div>
        <Header />
        <ProgressBar />
        <About />
        <Portfolio />
        <Footer />
  </div>
</template>

<script>
    
    import {Footer, ProgressBar} from '@/components'

    import Header from './header'

    import Portfolio from './portfolio'
   
   import About from './about'

export default {
    components:{
        Footer,
        Header,
        ProgressBar,
        About,
        Portfolio
    }
}
</script>

<style lang="scss" scoped>
    
</style>>

