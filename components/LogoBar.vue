<template>
  <div class="logo-bar">
    <div v-for="item in logos" :key="item.name" class="logo-bar__logo-container">
      <img :src="item.path" :alt="item.name" class="logo-bar__logo" :class="'logo-bar__logo-' + item.class">

    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        logos: [
          {name: 'visa', path: '/img/payment/visa.png', class: 'visa'},
          {name: 'vpay', path: '/img/payment/vpay.png', class: 'vpay'},
          {name: 'master card', path: '/img/payment/mastercard.png', class: 'master'},
          {name: 'maestro', path: '/img/payment/maestro.png', class: 'maestro'},
          {name: 'amex', path: '/img/payment/amex.png', class: 'amex'},
          {name: 'apple pay', path: '/img/payment/apay.png', class: 'apay'},
          {name: 'google pay', path: '/img/payment/gpay.png', class: 'gpay'},
          {name: 'contactless', path: '/img/payment/contactless.png', class: 'contactless'},
          {name: 'dinner club', path: '/img/payment/dc.png', class: 'dc'},
          {name: 'discover', path: '/img/payment/discover.png', class: 'discover'},
          {name: 'union pay', path: '/img/payment/unionPay.png', class: 'union-pay'},
        ]
      }
    }
  }
</script>
