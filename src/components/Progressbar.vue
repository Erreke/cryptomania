<template>
    <div class="panel panel-white">
        <div class="panel-heading">
            <h3 class="panel-title">{{ levelOrdinalNumber }} уровень: {{ stepsCount }} шагов</h3>
        </div>
        <div class="panel-body">
            <ul class="level__progressbar">
                <li v-for="item in steps" :class="{
                    'level__progressbar-item': true,
                    'level__progressbar-item_done_yes': doneStep >= item.number,
                    'level__progressbar-item_opened_yes': doneStep + 1 === item.number
                }">
                    <icon-daw v-if="item.number === 1 || item.number === stepsCount"></icon-daw>
                    <icon-star v-else-if="item.points >= 100"></icon-star>
                    <icon-dot v-else></icon-dot>
                    <p v-if="item.number === 1" class="level__progressbar-item-text">Старт</p>
                    <p v-if="item.number === stepsCount" class="level__progressbar-item-text">Финиш</p>
                </li>
            </ul>
        </div>
        <hr class="level__heading-separator">
        <div class="panel-heading level__panel-heading">
            <h3 v-if="doneStep >= stepsCount" class="panel-title level__panel-title">
                Поздравляем! Ты прошел {{ levelOrdinalNumber | lower }} уровень, для тебя открыт следующий уровень!</h3>
            <ul class="level__legend">
                <li class="level__legend-item level__legend-item_type_prev">
                    <p>Пройденный раздел</p>
                </li>
                <li class="level__legend-item level__legend-item_type_current">
                    <p>Текущий открытый раздел</p>
                </li>
                <li class="level__legend-item level__legend-item_type_next">
                    <p>Закрытый раздел</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import IconDaw from '@/components/icons/IconDaw'
    import IconDot from '@/components/icons/IconDot'
    import IconStar from '@/components/icons/IconStar'

    import {mapGetters} from 'vuex'

    export default {
        name: 'progressbar',
        props: [
            'steps',
            'stepsCount',
            'doneStep',
            'levelOrdinalNumber'
        ],
        components: {
            IconDaw,
            IconDot,
            IconStar
        },
    }
</script>
