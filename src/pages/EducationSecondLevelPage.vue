<template>
  <cabinet-layout>
    <div class="row">
      <div class="col-sm-12 col-lg-12">
        <progressbar
          v-if="loggedUser"
          :steps="secondLevelSteps"
          :steps-count="secondLevelStepsCount"
          :done-step="loggedUser.secondLevelStep"
          level-ordinal-number="Второй"
        />

        <level-steps
          v-if="loggedUser"
          :steps="secondLevelSteps"
          :steps-count="secondLevelStepsCount"
          :done-step="loggedUser.secondLevelStep"
        />
      </div>
    </div>
  </cabinet-layout>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'

  import CabinetLayout from '@/layouts/cabinet'
  import Progressbar from '@/components/Progressbar'
  import LevelSteps from '@/components/LevelSteps'

  export default {
    name: 'EducationSecondLevelPage',
    metaInfo: {
      title: 'Второй уровень'
    },
    components: {
      CabinetLayout,
      Progressbar,
      LevelSteps
    },
    computed: mapGetters([
      'loggedUser',
      'secondLevelSteps',
      'secondLevelStepsCount'
    ]),
    methods: {
      ...mapMutations([
        'SET_CURRENT_LEVEL'
      ])
    },
    mounted: function () {
      this.$nextTick(this.SET_CURRENT_LEVEL('second'));
    },
  }
</script>
