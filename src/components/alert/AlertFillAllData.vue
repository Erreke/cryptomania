<template>
    <div class="alert alert-danger" role="alert" v-if="show">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true" @click="show = false">&times;</button>
        <p><strong>Для полноценного участия в проекте, <router-link :to="{ name: 'ProfileEditPage'}">заполни все обязательные поля в профиле</router-link>.</strong></p>
    </div>
</template>

<script>
  export default {
    name: 'alert-fill-all-data',
    data () {
      return {
        show: true
      }
    }
  }
</script>
