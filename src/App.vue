<script>
    import Homepage from '@/components/Index'

    export default {
        name: 'App',
        components: {
            'home-page': Homepage
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
        <home-page></home-page>
    </div>
</template>

<style>

</style>
