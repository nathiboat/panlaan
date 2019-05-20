<template>
  <div>
    <page-header :text="heading"/>
    <section class="section-feedback">

      <div class="container">
        <h2 class="heading-secondary mb-5 text-center">
          Recent feedback on our business
        </h2>
        <div class="row">
          <div class="col">
            <feedback :text="feedback.text" :name="feedback.name" v-for="(feedback, index) in feedbackList" :key="index"/>
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
        heading: 'Customer Feedback',
        feedbackList: [
          {
            text: 'Very very nice spa, a lovely team and just a fantastic service! The massage is super professional and the therapists understand exactly how to make a customer happy and relaxed. Thank you so much and see you soon again .',
            name: 'David'
          },
          {
            text:'I had a Traditional Thai Massage two weeks before my wedding to relieve some of my tension and stress. I have had two Thai massages before and my treatment at Varee was just like being back in Thailand! The staff are very professional and so strong - I felt so relaxed and revitalised afterwards. I would recommend this to anyone who feels particularly tense; a wonderful firm massage!',
            name: 'Amelia'
          },
          {
            text:'Truly wonderful massage. Was made to feel welcome and greeted by Penni. She was very friendly and felt welcome, she made sure I was comfortable throughout the whole process, has a strong technique which helped the muscles a lot. Felt refreshed after treatment. Varee is definately recommendable to anyone.',
            name: 'Daniel'
          },
          {
            text: 'A very lovely relaxing hour with a wonderful, friendly, happy Mary. Thank you so much for my first experience in a massage shop. I have had two massages before on the beach in Torremolinos. However, this was so much better and I feel totally relaxed and happy. Will be back again soon and on a regular basis in the future. Thanks Mary, very happy.',
            name: 'Daniel'
          },
          {
            text:'My partner bought me Thai Foot Massage voucher as a present, especially as I have been experiencing some issues with my left foot. The massage was performed with utmost professionalism, in a very friendly, clean & pleasant environment, & I left feeling totally relaxed. I highly recommend it & will be back for more!',
            name: 'Nick'
          },
          {
            text: 'My first visit; I wanted a real deep massage and based upon the reviews on the web site and trip advisor thought it was worth a visit. I can thoroughly recommend Varee. A genuinely good massage combined with very friendly service. Looking forward to my next vsit.',
            name: 'Mark'
          },
          {
            text: 'I have been coming to Varee for just over a year and both girls are fantastic. I suffer from tension in my neck and shoulders and a little tendonitis in my elbow. Regular massages help ease the aches and pains and I recommend it to anyone who wants a one off treat or regular maintenance.',
            name: 'Laura'
          }
        ]

      }
    }
  }
</script>
