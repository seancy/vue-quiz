<template>
    <main>

        <Navigation/>
        this is contact.
        the page key is:{{pageKey}}

    </main>
</template>

<script>
    import Navigation from './navigation.vue'
    export default {
        name: 'home',
        props:[
            'pageKey'
        ],
        components: { Navigation },
    }
</script>

<style scoped>

</style>