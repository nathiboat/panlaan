<template>
  <div>
    <page-header :text="heading"/>

    <section class="section-contact">
      <div class="container">
        <div class="row">
          <div class="col">
            <h4><span class="fas fa-map-marker"></span> Our location</h4>
            <div class="maps">
              <iframe src="" width="100%" height="450" frameborder="0" style="border:0"></iframe>
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
