<template>
    <div>

        <router-link to="/">home</router-link>
        <router-link to="/contact">contact</router-link>

    </div>
</template>

<script>
    export default {
        name: 'navigation'
    }
</script>

<style lang="scss" scoped>
    div{
        font-family:Roboto, sans-serif;

        a{
            font-size: 16px;
            color: #243d93;
            text-decoration: none;

            &.router-link-exact-active{
                color:red;
            }
        }
    }



</style>