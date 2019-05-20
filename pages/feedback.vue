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
          },
          {
            text: 'Very relaxing massage, very professional. Worth a visit.',
            name: 'Neil'
          },
          {
            text: 'Visited Varee for the first time and for sure I\'ll be back. A great, relaxing 60 minutes with a pleasant Thai girl providing a wonderful oil massage. I can recommend this place to anyone. They provided a soft drink afterwards and there was no pressure at all on time. Thanks!',
            name: 'George'
          },
          {
            text: 'Wow! Great massage, lovely relaxing hour with a masseuse who was both pleasant and skilled. As soon as I arrived I was made to feel important but when I left I felt like a king - a very relaxed king! Thanks girls!!!!',
            name: 'Johnny'
          },
          {
            text: 'If you want a great massage this is the place for you, left feeling rejunevated and relaxed, beautiful, pleasant, and friendly staff, and a shower available, after a massage or before, give it a try and you will go back. I highly recommend it.',
            name: 'Peter'
          },
          {
            text: 'I enjoyed a very relaxing and rejuvenating massage. The staff are expert, pleasant and friendly. I left feeling happy and relaxed. Highly recommended.',
            name: 'Robert'
          },
          {
            text: 'I visited Varee on Saturday for full body massage. I was greeted by a beautiful girl, I had a wonderful massage followed by a very relaxing head massage, highly recommended. I left feeling rejunevated. I highly recommend Varee to anybody needing a very profecional service.',
            name: 'Chris'
          },
          {
            text: 'After being diagnosed with a debilitating illness, i started taking regular massage and found that the results meant less trips to the hospital for physio. This coupled with the fact it is also a great way to spend a relaxing hour, means i will continue to visit on a regular basis. Very professional and friendly staff in a pleasant environment with soft dreamy music caps the experience. Thank you so much',
            name: 'Rob'
          },
          {
            text: 'When I visited Varee for the first time, I was treated to a wonderful massage in relaxed, pleasant surroundings by a friendly but professional girl. A beautiful, unhurried, full-body massage followed by a nice foot massage completed the treatment in just over 1 hour and I left the smiling staff content that I had been well looked after - my body feeling much looser & flexible than when I arrived. My wallet felt a little lighted but this visit was well worth the very reasonable massage charge. :))',
            name: 'John'
          },

        ]

      }
    }
  }
</script>
