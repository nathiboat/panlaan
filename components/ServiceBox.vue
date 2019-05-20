<template>
  <div class="service-box card">
    <div class="service-box__heading text-center">
      <h3 class="service-box__heading-title">{{ service.name }}</h3>
      <div class="d-flex justify-content-center service-box__body">
          <h4 class="service-box__body-price" v-for="offer in service.offer" :key="offer.period">
            <span class="d-block">{{offer.price}}</span>
            <span>{{offer.period}}</span>
          </h4>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['service'],
  }
</script>
