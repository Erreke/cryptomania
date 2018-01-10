<template>
    <default-layout>
        <div class="row">
            <div class="col-sm-12 col-lg-12">
                <progressbar :steps="thirdLevelSteps" :steps-count="thirdLevelStepsCount" :done-step="loggedUser.thirdLevelStep" level-ordinal-number="Третий"></progressbar>
                <level-steps :steps="thirdLevelSteps" :steps-count="thirdLevelStepsCount" :done-step="loggedUser.thirdLevelStep"></level-steps>
            </div>
        </div>
    </default-layout>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'

    import DefaultLayout from '@/layouts/default'
    import Progressbar from '@/components/Progressbar'
    import LevelSteps from '@/components/LevelSteps'

    export default {
        name: 'LevelThreePage',
        metaInfo: {
            title: 'Третий уровень'
        },
        components: {
            DefaultLayout,
            Progressbar,
            LevelSteps
        },
        computed: mapGetters([
            'loggedUser',
            'thirdLevelSteps',
            'thirdLevelStepsCount'
        ]),
        methods: {
            ...mapMutations([
                'SET_CURRENT_LEVEL'
            ])
        },
        mounted: function () {
            this.$nextTick(this.SET_CURRENT_LEVEL('third'));
        },
    }
</script>
