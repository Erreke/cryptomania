<template>
    <div class="page-title">
        <h3>{{ $route.meta.title }}</h3>
        <div class="page-breadcrumb">
            <ol class="breadcrumb">
                <li v-for="item in crumbsChain">
                    <router-link :to="{ name: item.name }">{{ item.title }}</router-link>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                routes: this.$router.options.routes,
                current: this.$route.matched
            }
        },
        computed: {
            crumbsChain() {
                const chains = this.$route.matched.map(item => ({
                    name: item.name,
                    title: item.meta.title
                }));

                return [
                    {
                        name: 'EducationFirstLevelPage',
                        title: 'Главная'
                    },
                    ...chains
                ]
            }
        }
    }
</script>
