<script>
    import Products from '@/components/products/Products-List'
    export default {
        name: 'App',
        components: {
            'home-page': Products
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
