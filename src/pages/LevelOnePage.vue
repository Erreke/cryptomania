<template>
    <default-layout>
        <div class="row">
            <div class="col-sm-12 col-lg-12">
                <progressbar :steps="firstLevelSteps" :steps-count="firstLevelStepsCount" :done-step="loggedUser.firstLevelStep" level-ordinal-number="Первый"></progressbar>
                <level-steps :steps="firstLevelSteps" :steps-count="firstLevelStepsCount" :done-step="loggedUser.firstLevelStep"></level-steps>
            </div>
        </div>
    </default-layout>
</template>

<script>
    import {mapGetters, mapActions, mapMutations} from 'vuex'

    import DefaultLayout from '::/layouts/default'
    import Progressbar from '::/components/Progressbar'
    import LevelSteps from '::/components/LevelSteps'

    export default {
        name: 'LevelOnePage',
        metaInfo: {
            title: 'Первый уровень'
        },
        components: {
            DefaultLayout,
            Progressbar,
            LevelSteps
        },
        computed: mapGetters([
            'loggedUser',
            'firstLevelSteps',
            'firstLevelStepsCount'
        ]),
        methods: {
            ...mapActions([
                'CHECK_AUTH'
            ]),
            ...mapMutations([
                'CLOSE_LOGIN_DIALOG',
                'SET_CURRENT_LEVEL'
            ])
        },
        mounted: function () {
            //this.$nextTick(this.SET_CURRENT_LEVEL('first'));
            //this.$nextTick(this.CLOSE_LOGIN_DIALOG);
        },
    }
</script>
