<template>
    <default-layout>
        <div class="row">
            <div class="col-sm-12 col-lg-12">
                <progressbar :steps="secondLevelSteps" :steps-count="secondLevelStepsCount" :done-step="loggedUser.secondLevelStep" level-ordinal-number="Второй"></progressbar>
                <level-steps :steps="secondLevelSteps" :steps-count="secondLevelStepsCount" :done-step="loggedUser.secondLevelStep"></level-steps>
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
        name: 'LevelTwoPage',
        metaInfo: {
            title: 'Второй уровень'
        },
        components: {
            DefaultLayout,
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
