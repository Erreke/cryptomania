<template>
  <cabinet-layout>
    <div class="row">
      <div class="col-sm-12 col-lg-12">
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
    </div>
  </cabinet-layout>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

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
    computed: mapGetters([
      'loggedUser',
      'firstLevelSteps',
      'firstLevelStepsCount'
    ]),
    methods: {
      ...mapMutations([
        'CLOSE_SIGN_IN_DIALOG',
        'SET_CURRENT_LEVEL'
      ])
    },
    mounted: function () {
      //this.$nextTick(this.SET_CURRENT_LEVEL('first'));
      //this.$nextTick(this.CLOSE_SIGN_IN_DIALOG);
    },
  }
</script>
