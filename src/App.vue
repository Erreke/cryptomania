<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',

    metaInfo: {
      title: 'Криптомания',
      titleTemplate: '%s :: Cryptomania.me'
    },
  }
</script>
