<template>
  <nuxt />
</template>

<script>
  export default {
    head () {
      return {
        title: 'Suzanne & Daniel\'s Wedding Invitation',
        meta: [
          { hid: 'theme', name: 'theme-color', content: '#4770fb' }
        ],
        htmlAttrs: { lang: 'en' }
      }
    }
  }
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css?family=Alice')
  @import assets/css/_vars.sass

  a
    transition: color .25s, border .25s, background-color .25s

  .appear-active
    transition: opacity .4s ease
  .page-enter-active, .page-leave-active
    transition: all .2s ease
  .appear, .page-enter, .page-leave-active
    opacity: 0

  =selection
    color: $white
    background: $primary

  ::selection
    +selection

  ::-moz-selection
    +selection

  body,
  html
    height: 100%
    font-family: 'Alice', serif
    background-color: #000

  .layout
    // padding-top: 3.75rem
    display: flex
    min-height: 100vh
    flex-direction: column

  .site-content
    flex: 1 0 auto

  .footer
    margin-top: 3rem
</style>
