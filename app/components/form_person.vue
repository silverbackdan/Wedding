<template>
  <div class="guest">
    <a v-if="count > 0" class="button is-dark trash-button is-pulled-right" @click="remove">
      <font-awesome-icon icon="trash-alt" />
    </a>
    <div class="field">
      <label class="label">Name:</label>
      <div class="control">
        <input class="input is-rounded" type="text" placeholder="Your Name" v-model="guest.name">
      </div>
    </div>
    <div class="field">
      <label class="label">Food:</label>
      <div class="field-body">
        <div class="field is-narrow">
          <div class="control">
            <label class="radio">
              <input type="radio" name="food" value="Hog Roast" v-model="guest.food">
              Hog Roast
            </label>
            <label class="radio">
              <input type="radio" name="food" value="Vegetarian Burgers" v-model="guest.food">
              Vegetarian Burgers
            </label>
            <label class="radio">
              <input type="radio" name="food" value="Vegan" v-model="guest.food">
              Vegan
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="field">
      <label class="label">Allergies / Special Requirements:</label>
      <div class="control">
        <input class="input is-rounded" type="text" placeholder="E.g. nut allergy" v-model="guest.allergies">
      </div>
    </div>
    <div class="field">
      <label class="label">Musician? Would you be up for playing a song or two?</label>
      <div class="field-body">
        <div class="field is-narrow">
          <div class="control">
            <label class="radio">
              <input type="radio" name="music" value="Yes" v-model="guest.music">
              Yes
            </label>
            <label class="radio">
              <input type="radio" name="music" value="No" v-model="guest.music">
              No
            </label>
          </div>
          <p class="help" v-if="guest.music === 'Yes'">Great! Daniel will be in touch with you to arrange this</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      count: {
        type: Number,
        required: true
      },
      guest: {
        type: Object,
        required: true
      }
    },
    methods: {
      remove () {
        if (confirm('Are you sure?')) {
          this.$emit('remove')
        }
      }
    }
  }
</script>

<style lang="sass">
  @import assets/css/_vars.sass

  .guest
    padding-bottom: 1.5rem
    border-bottom: 1px solid rgba($white, .3)
    + .guest
      margin-top: 1.5rem
</style>
