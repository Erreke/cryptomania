<template>
  <light-layout>
    <h1>404</h1>
    <p>Страница не найдена</p>
  </light-layout>
</template>

<script>
  import LightLayout from '@/layouts/light'

  export default {
    name: 'NotFoundPage',
    metaInfo: {
      title: 'Страница не найдена'
    },
    components: {
      LightLayout,
    }
  }
</script>