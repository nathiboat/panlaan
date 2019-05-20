<template>
  <div>
    <navigation/>
    <header>

    </header>
    <nuxt/>

    <footer>
      <FooterNav/>
    </footer>
  </div>
</template>

<script>
  import FooterNav from './partials/FooterNavigation'
  import Navigation from './partials/Navigation'

  export default {
    components: { FooterNav, Navigation },
    data ()  {
      return {
        parent: {
          title: null,
          route: null
        }
      }
    }
  }
</script>
