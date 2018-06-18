<template>
  <cabinet-layout>
    <div class="row">
      <div class="col-sm-12 col-lg-12" v-if="secondLevelStepsCount">
        <progressbar
          v-if="loggedUser"
          :steps="knowledgeBase"
          :steps-count="secondLevelStepsCount"
          :done-step="loggedUser.secondLevelStep"
          level-ordinal-number="Второй"
        />

        <level-steps
          v-if="loggedUser"
          :steps="knowledgeBase"
          :steps-count="secondLevelStepsCount"
          :done-step="loggedUser.secondLevelStep"
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
    name: 'EducationKnowledgeBasePage',

    metaInfo: {
      title: 'База знаний'
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
        'knowledgeBase',
      ]),
      ...mapGetters('education', [
        'secondLevelStepsCount'
      ]),
    },

    methods: {
      ...mapMutations([
        'SET_CURRENT_LEVEL'
      ]),
      ...mapActions('education', {
        initSecondLevelSteps: 'INIT_SECOND_LEVEL_STEPS',
      }),
    },

    created() {
      this.initSecondLevelSteps();
    },

    mounted: function () {
      //this.$nextTick(this.SET_CURRENT_LEVEL('second'));
      //this.$nextTick(this.CLOSE_SIGN_IN_DIALOG);
    },
  }
</script>
