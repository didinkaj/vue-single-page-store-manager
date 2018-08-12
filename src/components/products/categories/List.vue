<script>
    import {mapState, mapGetters, mapMutations} from 'vuex'
    import ElRow from "element-ui/packages/row/src/row";
    import ElCol from "element-ui/packages/col/src/col";


    export default {
        components: {
            ElCol,
            ElRow},
        name: 'productscategory_route',
        data() {
            return {
                productsFiltered: [],
                route_id: this.$route.params.id,
            }
        },
        computed: {
            ...mapGetters({
                products: 'products',
                cartItems: 'cartItems',
                cartItemsNo:'cartItemsNo'
            })
        },
        methods: {
            filterProducts() {
                let id = this.$route.params.id;
                let product = this.products.filter(product => product.category_id==id);
                this.productsFiltered = product;
            },
            deleteProduct(product) {
                console.log(product)
                this.$store.commit('SHOPING_REMOVE_PRODUCT_FROM_CART', product)
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
                let id = this.cartItemsNo + 1
                let newProduct = {
                    id:id,
                    product_id: product.id,
                    user_id:1,
                    name: product.name,
                    description: product.description,
                    date: date,
                    quantity:1,
                    price: parseInt(product.price),
                    category_id: product.category,
                    img: product.img
                }
                console.log('item added'+newProduct)
                this.$store.commit('SHOPING_ADD_NEW_PRODUCT_TO_CART', newProduct)
                this.saveSuccess();

            },
            saveSuccess() {
                this.$notify({
                    title: 'Success',
                    message: 'Product added successfully',
                    type: 'success'
                });
            },
            added(id) {
                let ids=  this.cartItems.map(cartItem=>cartItem.product_id);

                let index = ids.includes(id)

                if(index) {
                    return true;
                }
                return false;

            },
            removeItem: function(item) {
                this.$store.commit('SHOPING_REMOVE_PRODUCT_FROM_CART', item)
                this.deleteSuccess();

            },
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
        <el-row v-if="productsFiltered.length">
            <el-col :span="7" v-for="product in productsFiltered" :key="product.id" :offset="product > 0 ? 1 : 1" class="product">
                <el-card :body-style="{ padding: '0px' }">
                    <!--:src="product.img"-->
                    <router-link :to="{name:'productsdetail_route', params:{id:product.id}}">
                        <img class="img-product"  src="../../../assets/laptop.jpg">
                        <div class="product-desc" style="padding: 14px;">
                            <div class="product-name" >{{product.name}} : <span class="product-price"> {{product.price | toUssd}}</span></div>
                            <div class="bottom clearfix">
                                <time class="product-info">
                                    {{product.description | readMore(120,'...')}}
                                </time>

                            </div>
                        </div>
                    </router-link>
                    <el-button type="primary pull-right" v-show="!added(product.id)" @click="addToCart(product)" icon="el-icon-sold-out"> Order</el-button>
                    <el-button type="danger pull-right" v-show="added(product.id)" @click="removeItem(product)" icon="el-icon-sold-out"> Remove</el-button>

                </el-card>

            </el-col>
        </el-row>
        <el-row v-else>
                <el-col>
                    <p>Products in this category will be added soon</p>
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