<template>
  <nav class="top-nav d-flex justify-content-between">
    <div class="top-nav__logo ml-3 d-flex align-items-center">
      <a href="#">
        <img src="/img/open-track.png" alt="" class="top-nav__logo-image"/>
      </a>
    </div>
    <div class="top-nav__text d-flex align-items-center text-center">
      {{ title }}
    </div>
    <div v-on:click="toggleSideNav" class="top-nav__menu-toggle mr-3 d-flex align-items-center">
      <i class="fas fa-bars fa-lg"></i>
    </div>
  </nav>
</template>

<script>
  export default {
    props: ['title'],
    methods: {
      toggleSideNav: function () {
        $('.side-nav').toggleClass('side-nav--open');
        $('.top-nav__menu-toggle').toggleClass('top-nav__menu-toggle--toggled');
      }
    }
  }
</script>
