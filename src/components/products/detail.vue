<script>
    import {mapState, mapGetters} from 'vuex'

    export default {
        name: 'productsdetail_route',
        data() {
            return {
                product: []
            }
        },
        computed: {
        ...mapGetters({
            products:'products'
        })
        },
        methods:{
            filterProducts(){
                let id = this.$route.params.id;
                let product = this.products.filter(product => product.id == id);
                this.product = product;
                console.log(product)
            }
        },
        mounted(){
            this.filterProducts();
        }
    }
</script>
<template>
    <div>
        <el-row>
            <el-col :span="22" v-for="product in product" :key="product.id" :offset="product > 0 ? 1 : 1" class="product">
                <el-card :body-style="{ padding: '0px' }">
                    <!--:src="product.img"-->
                    <router-link :to="{name:'productsdetail_route', params:{id:product.id}}">
                        <img class="img-product"  src="../../assets/laptop.jpg">
                        <div class="product-desc" style="padding: 14px;">
                            <div class="product-name" >{{product.name}} : <span class="product-price">$ {{product.price}}</span></div>
                            <div class="bottom clearfix">
                                <time class="product-info">
                                    {{product.description}}
                                </time>

                            </div>
                        </div>
                    </router-link>
                    <el-button type="primary pull-right" icon="el-icon-sold-out"> Order</el-button>
                </el-card>

            </el-col>
        </el-row>
    </div>

</template>
<style>

</style>