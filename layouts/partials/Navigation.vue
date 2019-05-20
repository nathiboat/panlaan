<template>
  <div class="navigation">
    <input type="checkbox" class="navigation__checkbox" id="navi-toggle" v-model="checked">

    <label for="navi-toggle" class="navigation__button">
      <span class="navigation__icon"></span>
    </label>

    <div class="navigation__background">&nbsp;</div>

    <transition name="slideIn-right">
      <nav class="navigation__nav" v-if="checked">
        <ul class="navigation__list">
          <li v-for="link in links" :key="link.to" class="navigation__item" @click.prevent="setUnchecked">
            <nuxt-link :to="link.to" class="navigation__link" exact>{{ link.name }}</nuxt-link>
          </li>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        links: [
          {name: 'Home', to: '/'},
          {name: 'Services', to: '/services'},
          {name: 'What to expect', to: '/expect'},
          {name: 'Gallery', to: '/gallery'},
          {name: 'Client Feedback', to: '/feedback'},
          {name: 'Contact', to: '/contact'}
        ],
        checked: false
      }

    },
    methods: {
      setUnchecked () {
        this.checked = false
      }
    }
  }
</script>

<style>
  .slideIn-right-enter-active {
    transform: translate(0%, 0%);
    transition: all .8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    opacity: 1;

  }
  .slideIn-right-leave-active {
    transition: all .8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    opacity: 1;
  }

  .slideIn-right-enter, .slideIn-right-leave-to {
    transform: translate(-50%, 0%);
    opacity: 0;
  }
</style>
