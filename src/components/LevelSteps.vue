<template>
    <div class="level__steps">
        <div v-for="step in steps" :class="{
            'level__step': true,
            'level__step_done_yes': doneStep >= step.number,
            'level__step_saving_yes': isUserStepSavingProcess
        }" :key="step.number" :id="'level-step-' + step.number">

            <level-step-header :step="step" :steps-count="stepsCount"></level-step-header>

            <div v-if="step.number > doneStep + 1" class="level__step-locked"></div>
            <div v-if="step.type === 'video'" :id="'player-' + step.video_id"></div>

            <div v-if="step.type === 'wallets' && step.number <= doneStep + 1">
                <level-step-wallets></level-step-wallets>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import LevelStepHeader from '@/components/LevelStepHeader'
    import LevelStepWallets from '@/components/LevelStepWallets'

    export default {
        name: 'level-steps',
        props: [
            'steps',
            'stepsCount',
            'doneStep'
        ],
        components: {
            LevelStepHeader,
            LevelStepWallets
        },
        computed: mapGetters([
            'loggedUser',
            'isUserStepSavingProcess',
        ]),
    }
</script>
