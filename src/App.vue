<script>
    import Index from '@/components/index'
    export default {
        name: 'App',
        components: {
            'home-page': Index
        },
        data() {
            return {
                data: 'hellow'
            }
        }

    }
</script>

<template>
    <div id="app">

        <home-page :msghome="data"></home-page>
    </div>
</template>

<style>

</style>
