<template>
  <div>
    <page-header :text="heading"/>
    <section class="section-about text-center">

      <div class="container py-5">
        <div class="col">
          <h3>About our service</h3>
          <p>We are an established business to Bournemouth, founded in 2011. We welcome a stream of regular clients, who we are delighted to see time and again. We would love to welcome new clients to our business -<strong>come and give us a try!!</strong> </p>
          <p>Our staff are trained in oil massage, aromatherapy and foot massage techniques both from the certificated school at Wat Po Temple, Bangkok, augmented by traditional techniques from the central mountainous regions of Thailand.</p>
        </div>
      </div>
    </section>

    <section class="section-services">

      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-4">
            <service-box :service="service1" />
          </div>
          <div class="col-12 col-lg-4">
            <service-box :service="service2"/>
          </div>
          <div class="col-12 col-lg-4">
            <service-box :service="service3"/>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-lg-4">
            <service-box :service="service4"/>
          </div>
          <div class="col-12 col-lg-4">
            <service-box :service="service5"/>
          </div>
          <div class="col-12 col-lg-4">
            <service-box :service="service6"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-4 offset-lg-4">
            <service-box :service="service7"/>
          </div>
        </div>
      </div>
    </section>

    <section class="section-detail py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6">
            <p>Our masseuses have previously worked in Bournemouth, as well as Italy, Finland and Thailand. We welcome gentlemen, ladies and couples to sample our range of full body massages, foot massage, or head and shoulder massage.</p>
            <img src="/img/candleOrange.png" class="img-fluid rounded text-center mb-3 w-100">
            <p>Thai massage is a deeply healing and relaxing experience. It is highly recommended for sports injuries, stress relief, and general health. Our clients come from all walks of life; they include professional sportsmen and women, martial artists, dancers, executives, and women recovering from pregnancy.</p>
          </div>
          <div class="col-12 col-lg-6">
            <img src="/img/flowerandgreen.png" class="img-thumbnail float-left img-fluid mr-4">
            <p>Traditional Thai massage can relieve many common ailments, including: backache, stress, sciatica, migraine, tension and sports injuries. It can also aid recovery after pregnancy, help relaxation, complement meditation, and increase vitality. Pressure is used to relax and heat the entire body. Pressure ranges from gentle, to very firm, and is applied to the energy points of the body, releasing trapped energy. The practitioner also applies stretching movements to relax, energise, and open up your body, increasing flexibility and releasing tension.</p>

            <p>Foot or head and shoulder massages usually take 30 minutes whilst the full body massage can be 30 or 60 minutes duration. Appointments are recommended, but we also welcome clients who decide on walk in on a whim.</p>
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
        heading: 'Our Services',
        service1: {
          name: 'Relaxing Full Body Oil Massage',
          offer: [
            { period: '90 Mins', price: '£60'},
            { period: '60 Mins', price: '£40'},
            { period: '30 Mins', price: '£30'}
          ],
        },
        service2: {
          name: 'Deep Tissue Massage with Hot Oils',
          offer: [
            { period: '90 Mins', price: '£75'},
            { period: '60 Mins', price: '£50'},
            { period: '30 Mins', price: '£35'}
          ],
        },
        service3: {
          name: 'Head & Shoulder Massage',
          offer: [
            { period: '90 Mins', price: '£75'},
            { period: '60 Mins', price: '£50'},
            { period: '30 Mins', price: '£35'}
          ],
        },
        service4: {
          name: 'Traditional Thai Full Body Massage',
          offer: [
            { period: '90 Mins', price: '£90'},
            { period: '60 Mins', price: '£60'},
            { period: '30 Mins', price: '£40'}
          ],
        },
        service5: {
          name: 'Thai Foot Massage',
          offer: [
            { period: '90 Mins', price: '£90'},
            { period: '60 Mins', price: '£60'},
            { period: '30 Mins', price: '£40'}
          ],
        },
        service6: {
          name: 'Thai Herbal Compress Massage',
          offer: [
            { period: '90 Mins', price: '£90'},
            { period: '60 Mins', price: '£60'},
            { period: '30 Mins', price: '£40'}
          ],
        },
        service7: {
          name: 'Hot Stone Massage',
          offer: [
            { period: '90 Mins', price: '£90'},
            { period: '60 Mins', price: '£60'},
            { period: '30 Mins', price: '£40'}
          ],
        }
      }
    }
  }
</script>
