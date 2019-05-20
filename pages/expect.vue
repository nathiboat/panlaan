<template>
  <div>
    <page-header :text="heading"/>
    <section class="section-expect">
      <div class="container">
        <div class="row mb-5">
          <div class="col">
            <img src="/img/expect/expect.jpg" alt="Wall of flowers" class="img-fluid rounded">
          </div>
        </div>
        <div class="row">
            <div class="col-md-6">
              <p>A Thai massage lasts between 30 and 60 minutes, although longer
                times are available. The practitioner will use pressure to relax and
                heal the entire body. This pressure can range from very gentle, to very
                deep, firm pressure, as far as the client wishes to take it. Many people
                say Thai massage is like doing yoga without any work. Sometimes the client
                may fall into a very relaxing sleep during the massage, and wake refreshed
                and with new energy</p>

              <p>The massage may be done with the palm of the hand, the thumb, the elbow, or
                the feet, depending on the depth of pressure required. The practitioner moves
                in a highly skilled way, using their body weight rather than mere strength, enabling
                them to apply whatever pressure the client needs.</p>

              <p>The massage is to the energy point on the body,
                thus releasing the trapped energy in your body, so
                that it may flow wherever it needs to heal you. The
                practitioner also applies stretching movements to relax,
                energise and open up your body. These movements are not exercises;
                you remain passive while the stretches are done for you. Muscle compression,
                joint mobilisation, and acupressure are also used during treatment. </p>


            </div>
            <div class="col-md-6">
              <p>This is a highly enjoyable experience, which is very different from the
                hard work of stretching in an exercise class. The stretches will increase
                your flexibility and your body's tension. The bones and joints are never
                directly worked on as they are vulnerable and considered sacred in Thai
                massage.</p>


              <h4>Thai massage has the following benefits:</h4>
              <ul class="list-group">
                <li class="list-group-item"> relaxes</li>
                <li class="list-group-item"> reduces stress</li>
                <li class="list-group-item"> improves circulation</li>
                <li class="list-group-item"> increases energy</li>
                <li class="list-group-item"> increases flexibility</li>
                <li class="list-group-item"> improves range of motion</li>
                <li class="list-group-item"> centres the mind and body.</li>
              </ul>
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
        heading: 'What to Expect'
      }
    }
  }
</script>
