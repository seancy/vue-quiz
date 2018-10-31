<template>
    <main>
        <Navigation/>

        <section>
            this is home.<br>

            the company name is:
            {{companyName}}<br>

            the location is:
            {{location}}<br>

            <button @click="showDialog">button1</button>



        </section>

    </main>
</template>

<script>
    import Navigation from './navigation.vue'

    export default {
        name: 'home',
        data: function () {
            return {
                companyName: '31ten'
            }
        },
        computed:{
            location:function () {
                return 'Shanghai, China (Jing\'an temple area)';
            }
        },
        methods:{
            showDialog:function () {
                alert('the dialog')
            }
        },
        components: { Navigation }
    }
</script>

<style scoped>

</style>