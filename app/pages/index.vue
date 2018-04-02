<template>
  <div>
    <section class="hero is-fullheight hero--feature top">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Suzanne & Daniel Are Getting Married
          </h1>
        </div>
      </div>
      <div class="hero-foot">
        <div class="container has-text-centered">
          <button class="button is-dark is-large is-rounded btn-scroll" v-scroll-to="'#intro'">
            Scroll
          </button><br />&nbsp;
        </div>
      </div>
    </section>
    <section class="hero is-fullheight has-text-centered hero--content" id="intro">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p>
            We’ve been together now for a year or two<br />
            Our wedding is coming up and we’ve invited you!
          </p>
        </div>
      </div>
    </section>

    <section class="hero is-fullheight hero--feature place-to-stay">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Your Place To Stay
          </h1>
        </div>
      </div>
    </section>
    <section class="hero is-fullheight has-text-centered hero--content">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p>
            By sending us the hotel where you’ll be resting your head<br />
            It will help us arrange cabs to get you to your bed
          </p>
          <!--<div class="field">-->
            <!--<label class="label">-->
              <!--By sending us the hotel where you’ll be resting your head<br />-->
              <!--It will help us arrange cabs to get you to your bed-->
            <!--</label>-->
            <!--<div class="control">-->
              <!--<input class="input is-radiusless is-large" type="text" placeholder="Please enter where you are staying">-->
            <!--</div>-->
          <!--</div>-->
        </div>
      </div>
    </section>

    <section class="hero is-fullheight hero--feature gifts">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Because We Love You Too...
          </h1>
        </div>
      </div>
    </section>
    <section class="hero is-fullheight has-text-centered hero--content">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p>
            If you were thinking of a gift to help us on our way<br />
            A gift of cash towards our home would really make our day
          </p>
          <p>
            Just don’t feel you have to<br />
            We would not be aggrieved
          </p>
          <p>
            We really want your company<br />
            To help to make the day<br />
            To eat, drink, be merry and dance the night away
          </p>
        </div>
      </div>
    </section>


    <section class="hero is-fullheight hero--feature cast">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Alice In Wonderland
          </h1>
        </div>
      </div>
    </section>
    <section class="hero is-fullheight has-text-centered hero--content">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p>
            The theme for our day<br />
            May take you by surprise<br />
            It's Alice In Wonderland<br />
            For all you gals and guys
          </p>
          <p>
            You may have already guessed<br />
            It is not fancy dress<br />
            But you can add a hint to our theme<br />
            If you'd like to show some finesse
          </p>
        </div>
      </div>
    </section>

    <section class="hero is-fullheight hero--feature music">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Musicians, Let's Play
          </h1>
        </div>
      </div>
    </section>
    <section class="hero is-fullheight has-text-centered hero--content">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p>
            The reception will be full of fun and games<br />
            For those who are more musically inclined<br />
            We’ll have a stage setup, not just for the best<br />
            If you’d be willing to play a song or two<br />
            It’ll bring the night alive with wonder and joy<br />
            So pull up a stool, pickup a mic<br />
            Give us your pick and we’ll see what we can do
          </p>
        </div>
      </div>
    </section>


    <section class="hero is-fullheight hero--feature rsvp">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            RSVP
          </h1>
        </div>
      </div>
    </section>
    <section class="hero is-fullheight has-text-centered hero--content">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p>
            We thank you in advance and hope we’ll be seeing you<br />
            Because you're part of our wish that we want to come true.
          </p>
          <p>
            <button class="button is-success is-outlined is-large">
              RSVP Now
            </button>
          </p>
        </div>
      </div>
    </section>

  </div>
</template>

<script>

</script>

<style lang="sass">
  @import assets/css/_vars.sass
  .btn-scroll.is-rounded
    padding-left: 55px
    padding-right: 55px
    &::after,
    &::before
      border: 3px solid $white
      border-right: 0
      border-top: 0
      content: " "
      display: block
      height: 0.5em
      pointer-events: none
      position: absolute
      -webkit-transform: rotate(-45deg)
      transform: rotate(-45deg)
      -webkit-transform-origin: center
      transform-origin: center
      width: 0.5em
      margin-top: -0.375em
      top: 50%
    &::before
      left: 1.125em
    &::after
      right: 1.125em

  .hero--feature
    background: 50% 100% no-repeat #000
    background-size: cover
    background-attachment: fixed
    text-shadow: 1px 1px 4px $black, -1px -1px 4px $grey
    .title,
    .subtitle
      color: $white
    &.top
      background-image: url('~/assets/images/wedding-hero-2.png')
    &.place-to-stay
      background-image: url('~/assets/images/alice-sleeps.png')
      background-position: 0 50%
      background-size: auto 100%
    &.gifts
      background-image: url('~/assets/images/alice.png')
      background-position: 100% 50%
      background-size: auto 100%
    &.music
      background-image: url('~/assets/images/white-rabbit-trumpet.png')
      background-position: 0 50%
      background-size: auto 100%
    &.cast
      background-image: url('~/assets/images/aiw-cast.jpg')
      background-position: 50% 0
    &.rsvp
      background-image: url('~/assets/images/dan-suz.png')
      background-position: 0 0
      background-size: auto 100%
    h1
      font-size: 2rem
  .hero--content
    // background: url('~/assets/images/paper.jpg') 50% 50% no-repeat
    // background-size: cover
    color: $white
    // text-shadow: 2px 2px 8px #000
    background: $grey-darker
    p + p
      margin-top: 1rem
    p,
    .label
      font-size: 1.4rem
      color: inherit
    .input
      background: transparent
      color: inherit
      border: 0
      box-shadow: inset 0 0 8px 1px #fff
      text-align: center
      font-family: inherit
      +placeholder
        color: rgba($white, .3)
</style>
