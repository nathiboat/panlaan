<template>
  <div class="card img-card">
    <img class="card-img" :src="img" alt="Card image">
  </div>
</template>

<script>
  export default {
    props: ['img']
  }
</script>
