<template>
    <div class="level__step-header">
        <div id="canvass"></div>
        <div class="level__step-number">
            <h3>
                <span v-if="step.number === stepsCount">Финиш</span>
                <span v-else>Шаг №{{ step.number }}</span>
            </h3>
        </div>
        <div class="level__step-desc">
            <h3 class="level__step-desc-header">{{ step.title }}</h3>
            <div class="level__step-desc-text" v-html="step.comment"></div>
        </div>
        <div class="level__step-score"></div>
        <a href="#"
           :class="{
                'level__step-material': true,
                'level__step-material_type_video': step.type === 'video',
                'level__step-material_type_video-opened': step.type === 'video' && isPlayerOpened && step.video_id === currentVideoID,
                'level__step-material_type_test': step.type === 'test',
                'level__step-material_type_wallets': step.type === 'wallets',
                'confirmations-loading': checkAllConfirmationsProcessInfo
            }"
           @click.prevent="handleToggleVideo(step.video_id, step.number)"
           v-scroll-to="{
               el: '#level-step-' + step.number,
               offset: -60
           }"
        >
            <p v-if="step.type === 'video'">
                <span class="level__step-material-action" v-if="isPlayerOpened && step.video_id === currentVideoID">Закрыть</span>
                <span class="level__step-material-action" v-else>Смотреть</span>
                <span class="level__step-material-description">{{ step.duration }}</span>
            </p>
            <p class="level__step-material-action" v-else>Обновить</p>
        </a>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'level-step-header',
        props: [
            'step',
            'stepsCount'
        ],
        computed: mapGetters([
            'checkAllConfirmationsProcessInfo',
            'currentVideoID',
            'isPlayerOpened'
        ]),
        methods: {
            handleToggleVideo(videoID, step) {
                if(videoID) {
                    if (this.currentVideoID === videoID) {
                        this.$store.dispatch('CLOSE_PLAYER')
                    } else {
                        this.$store.dispatch({
                            type: 'OPEN_PLAYER',
                            videoID,
                            step
                        })
                    }
                } else {
                    this.$store.dispatch({
                        type: 'CHECK_ALL_CONFIRMATIONS',
                        step
                    })
                }
            }
        }
    }
</script>
