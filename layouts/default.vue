<template>
  <div>
    <navigation/>
    <transition name="fade">
      <nuxt/>
    </transition>

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

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .8s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
