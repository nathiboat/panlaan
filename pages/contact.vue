<template>
  <div>
    <page-header :text="heading"/>

    <section class="section-contact">
      <div class="container">
        <div class="row">
          <div class="col">
            <h4><span class="fas fa-map-marker"></span> Our location</h4>
            <div class="maps">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d631.301090743831!2d-1.81742259999996!3d50.73469840000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48739f26fab25333%3A0xd13694f339902466!2s1118+Christchurch+Rd%2C+Bournemouth+BH7+6DT!5e0!3m2!1sen!2suk!4v1429106169211" width="100%" height="450" frameborder="0" style="border:0"></iframe>
            </div>
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
        heading: 'Contact Us'
      }
    }
  }
</script>
