<template>
  <cabinet-layout>
    <div class="row">
      <div class="col-sm-12 col-lg-12">
        <h1>Временная страница</h1>
      </div>
    </div>
  </cabinet-layout>
</template>

<script>
  import CabinetLayout from '@/layouts/cabinet'

  export default {
    name: 'TEMP_PAGE',
    metaInfo: {
      title: 'Временная страница'
    },
    components: {
      CabinetLayout,
    },
  }
</script>
