<template>
    <div>
        <div :class="'alert alert-' + item.level" v-for="item in flash">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <span>{{ item.message }}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'flash',
    data () {
      return {
        flash: []
      }
    }
  }
</script>
