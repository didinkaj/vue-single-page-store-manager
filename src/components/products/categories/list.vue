<script>
    import {mapState, mapGetters, mapMutations} from 'vuex'


    export default {
        name: 'productscategory_route',
        data() {
            return {
                product: [],
                route_id: this.$route.params.id,
            }
        },
        computed: {
            ...mapGetters({
                products: 'products'
            })
        },
        methods: {
            filterProducts() {
                let id = this.$route.params.id;
                let product = this.products.filter(product => product.category_id==id);
                this.product = product;
            },
            deleteProduct(product) {
                console.log(product)
                this.$store.commit('DELETE_PRODUCT', product)
                this.deleteSuccess();
                return this.$router.push('/')
            },
            deleteSuccess() {
                this.$notify({
                    title: 'Success',
                    message: 'Product deleted successfully',
                    type: 'success'
                });
            },
            editProduct() {
                return this.$router.push('/products/edit')
            },
            addToCart(product){
                const date = new Date()
                let newProduct = {
                    id: product.id,
                    user_id:1,
                    name: product.name,
                    description: product.description,
                    date: date,
                    price: product.price,
                    category_id: product.category,
                    img: product.img
                }
                console.log('item added'+newProduct)
                this.$store.commit('ADD_CART_PRODUCT', newProduct)
                this.saveSuccess();

            },
            saveSuccess() {
                this.$notify({
                    title: 'Success',
                    message: 'Product added successfully',
                    type: 'success'
                });
            }
        },
        mounted() {
            this.filterProducts();
            console.log('hhhh')
        },
    watch: {
        '$route' (to, from) {
          this.filterProducts();
        }
    }
    }
</script>
<template>
    <div>
        <el-row>
            <el-col :span="7" v-for="product in product" :key="product.id" :offset="product > 0 ? 1 : 1" class="product">
                <el-card :body-style="{ padding: '0px' }">
                    <!--:src="product.img"-->
                    <router-link :to="{name:'productsdetail_route', params:{id:product.id}}">
                        <img class="img-product"  src="../../../assets/laptop.jpg">
                        <div class="product-desc" style="padding: 14px;">
                            <div class="product-name" >{{product.name}} : <span class="product-price">$ {{product.price}}</span></div>
                            <div class="bottom clearfix">
                                <time class="product-info">
                                    {{product.description}}
                                </time>

                            </div>
                        </div>
                    </router-link>
                    <el-button type="primary pull-right" @click="addToCart(product)" icon="el-icon-sold-out"> Order</el-button>
                </el-card>

            </el-col>
        </el-row>

    </div>

</template>
<style>
    .product-info {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .img-product {
        width: 120px;
        display: block;
        margin: 0px auto;
        padding: 15px 0px 0px 0px;
    }

    .product {
        margin: 10px;

    }
    .product-name{
        text-align: center;
        color: #000000;
    }

    .pull-right {
        float: right;
        margin: 5px;
    }
    .product-price{
        color: #931621;
        background-color: #eef1f6;
    }
    .product-desc{
        height: 75px;
    }

</style>