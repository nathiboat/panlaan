<template>
  <div>
    <page-header :text="heading"/>
    <section class="section-gallery">
      <div class="container">
        <div class="row">
          <div class="card-columns mx-auto">
            <img-card :img="img.location" v-for="img in imgList" :key="img.location"/>

          </div>
        </div>
      </div>
    </section>
    <page-footer/>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        heading: 'Gallery',
        imgList: [
          {location: '/img/gallery/thumbs/1.jpg'},
          {location: '/img/gallery/thumbs/2.jpg'},
          {location: '/img/gallery/thumbs/3.jpg'},
          {location: '/img/gallery/thumbs/4.jpg'},
          {location: '/img/gallery/thumbs/5.jpg'},
          {location: '/img/gallery/thumbs/6.jpg'},
          {location: '/img/gallery/thumbs/7.jpg'},
          {location: '/img/gallery/thumbs/8.jpg'},
          {location: '/img/gallery/thumbs/9.jpg'},
          {location: '/img/gallery/thumbs/10.jpg'},
          {location: '/img/gallery/thumbs/11.jpg'},
          {location: '/img/gallery/thumbs/12.jpg'},
          {location: '/img/gallery/thumbs/13.jpg'},
          {location: '/img/gallery/thumbs/14.jpg'},
          {location: '/img/gallery/thumbs/15.jpg'},
          {location: '/img/gallery/thumbs/16.jpg'}
        ]
      }
    }
  }
</script>
