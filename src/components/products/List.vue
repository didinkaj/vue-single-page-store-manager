<script>
    import {mapState, mapGetters} from 'vuex'
    import mixin from '../../mixins/myMixins'

    export default {
        mixins: [mixin],
        name: 'products_route',
        components: {},
        data() {
            return {
                currentDate: new Date(),
                orderbtn: true,
                removebtn: true,
            };
        },
        computed: {
            ...mapState({
                names: 'names'
            }),
            ...mapGetters({
                products: 'products',
                cartItems: 'cartItems',
                cartItemsNo: 'cartItemsNo'
            })
        },

        watch: {
            cartItems: {
                handler: function () {
                    this.added(this.productAdded);
                }
            }
        },
        methods: {
            addToCart: function (product) {
                const date = new Date()
                let id = this.cartItemsNo + 1
                let newProduct = {
                    id: id,
                    product_id: product.id,
                    user_id: 1,
                    name: product.name,
                    description: product.description,
                    date: date,
                    quantity: 1,
                    price: parseInt(product.price),
                    category_id: product.category,
                    img: product.img
                };
                this.$store.commit('SHOPING_ADD_NEW_PRODUCT_TO_CART', newProduct);
                this.success("Product added to cart successfully");
            },
            deleteSuccess() {
                this.$notify({
                    title: 'Success',
                    message: 'Product Removed from cart successfully',
                    type: 'success'
                });
            },
            removeItem: function (item) {
                this.$store.commit('SHOPING_REMOVE_PRODUCT_FROM_CART', item)
                this.deleteSuccess();
            },
            added(id) {
                let ids = this.cartItems.map(cartItem => cartItem.product_id);
                let index = ids.includes(id)

                if (index) {
                    return true;
                }
                return false;

            },
        },

        created() {

        }
    }
</script>
<template>
    <div>

        <el-row>
            <el-col :span="7" v-for="(product, index) in products" :key="product.id" :offset="product > 0 ? 1 : 1"
                    class="product">
                <el-card :body-style="{ padding: '0px' }">
                    <router-link :to="{name:'productsdetail_route', params:{id:product.id}}">
                        <img class="img-product" src="../../assets/laptop.jpg">
                        <div class="product-desc" style="padding: 14px;">
                            <div class="product-name">{{product.name}} : <span
                                    class="product-price"> {{product.price | toUssd}}</span></div>
                            <div class="bottom clearfix">
                                <time class="product-info">
                                    {{product.description | readMore(120, '...')}}
                                </time>
                            </div>
                        </div>
                    </router-link>
                    <el-button type="primary pull-right" icon="el-icon-sold-out" v-show="!added(product.id)"
                               @click="addToCart(product)"> Order
                    </el-button>
                    <el-button type="danger pull-right" icon="el-icon-sold-out" v-show="added(product.id)"
                               @click="removeItem(product)"> Remove
                    </el-button>
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

    .product-name {
        text-align: center;
        color: #000000;
    }

    .pull-right {
        float: right;
        margin: 5px;
    }

    .product-price {
        color: #931621;
        background-color: #eef1f6;
    }

    .product-desc {
        height: 75px;
    }
</style>

