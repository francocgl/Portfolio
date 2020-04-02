<template>
  <div>
        <Header />
        <About />
        <Portfolio />
        <Footer />
  </div>
</template>

<script>
    
    import Footer from '@/components'

    import Header from './header'

    import Portfolio from './portfolio'
   
   import About from './about'

export default {
    components:{
        Footer,
        Header,
        About,
        Portfolio
    }
}
</script>

<style lang="scss" scoped>
    
</style>>

