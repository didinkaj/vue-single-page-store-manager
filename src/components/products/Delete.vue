<script>
    import {mapGetters} from 'vuex'
    export default {
        name:'delete_product_route',
        props:[
            'dialogVisible'
        ],
        data() {
            return {
                product: {},

            };
        },computed: {
            ...mapGetters({
                products:'products'
            })
        },
        methods: {
            filterProducts(){
                let id = this.$route.params.id;
                let product = this.products.filter(product => product.id == id);
                this.product = product;
                console.log(product)
            }

        },
    mounted(){


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
.dialog-footer{
    float: right;
}
</style>