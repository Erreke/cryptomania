<template>
  <cabinet-layout>
    <div class="row">
      <div class="col-sm-12 col-lg-12" v-if="firstLevelStepsCount">
        <progressbar
          v-if="loggedUser"
          :steps="firstLevelSteps"
          :steps-count="firstLevelStepsCount"
          :done-step="loggedUser.firstLevelStep"
          level-ordinal-number="Первый"
        />

        <level-steps
          v-if="loggedUser"
          :steps="firstLevelSteps"
          :steps-count="firstLevelStepsCount"
          :done-step="loggedUser.firstLevelStep"
        />
      </div>

      <img src="/src/assets/i/icons/loading-app.svg" alt="" v-else>

    </div>
  </cabinet-layout>
</template>

<script>
  import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'

  import CabinetLayout from '@/layouts/cabinet'
  import Progressbar from '@/components/Progressbar'
  import LevelSteps from '@/components/LevelSteps'

  export default {
    name: 'EducationFirstLevelPage',

    metaInfo: {
      title: 'Первый уровень'
    },

    components: {
      CabinetLayout,
      Progressbar,
      LevelSteps
    },

    computed: {
      ...mapGetters('user', [
        'loggedUser',
      ]),
      ...mapState('education', [
        'firstLevelSteps',
      ]),
      ...mapGetters('education', [
        'firstLevelStepsCount'
      ]),
    },

    methods: {
      ...mapMutations([
        'SET_CURRENT_LEVEL'
      ]),
      ...mapActions('education', {
        initFirstLevelSteps: 'INIT_FIRST_LEVEL_STEPS',
      }),
    },

    created() {
      this.initFirstLevelSteps();
    },

    mounted: function () {
      //this.$nextTick(this.SET_CURRENT_LEVEL('first'));
      //this.$nextTick(this.CLOSE_SIGN_IN_DIALOG);
    },
  }
</script>
