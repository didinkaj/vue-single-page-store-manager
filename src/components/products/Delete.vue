<script>
    export default {
        name: 'delete_product_route',
        props: [
            'dialogVisible'
        ],
        data() {
            return {
                product: {},

            };
        }, computed: {},
        methods: {},
        mounted() {
        },
        created(){
            this.$Progress.start(40)
        }
    }

</script>

<template>
    <div>
        <el-dialog
                title="Delete Product"
                :visible.sync="dialogVisible"
                width="30%">
            <slot name="content"></slot>
            <br/>
            <br/>
            <div class="dialog-footer">

                <slot name="footer">

                </slot>
            </div>
            <br/>
        </el-dialog>
    </div>

</template>

<style>
    .dialog-footer {
        float: right;
    }
</style>