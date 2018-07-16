<script>
    import {mapGetters, mapMutations} from 'vuex'
    import ElCol from "element-ui/packages/col/src/col";
    import ElCard from "../../../node_modules/element-ui/packages/card/src/main.vue";

    export default {
        components: {
            ElCard,
            ElCol},
        name: 'usercart_route',
        data() {
            return {
                itemsInCart: [],
                totalAmount:'mmm'
            }
        },
        computed: {
            ...mapGetters({
                cartItems: 'cartItems'
            }),
            totalAmountInCart:function () {

                let arrayItemsInCart = this.itemsInCart

                let total = arrayItemsInCart.reduce(function(prev, cur) {
                    return prev + cur.price;
                }, 0);

                return total;
            }

        },
        methods: {
            getCartItems() {
                this.itemsInCart = this.cartItems
            },
            removeItem(item) {
                console.log('item removed' + item)
                this.$store.commit('DELETE_CART_PRODUCT', item)
                this.deleteSuccess();
            },
            deleteSuccess() {
                this.$notify({
                    title: 'Success',
                    message: 'Product Removed from cart successfully',
                    type: 'success'
                });
            },

        },
        created() {
            this.getCartItems();
        },
        watch: {
            itemsInCarts:function (val) {
                this.itemsInCart = this.cartItems
            },

        },
        filters:{
            priceWithComma (x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        }
    }

</script>
<template>
    <div>
        <el-row>
            <el-row>
                <el-col :span="12">
                    <p> My Cart Items</p>
                </el-col>
                <el-col :span="10">
                    <el-card> Total Amount: <span class="total-price">Ksh {{totalAmountInCart * 100 | priceWithComma}}</span></el-card>
                </el-col>
            </el-row>
            <el-col :span="22" v-for="product in itemsInCart" :key="product.id" :offset="product > 0 ? 1 : 1"
                    class="product">
                <el-card :body-style="{ padding: '0px' }">
                    <!--:src="product.img"-->
                    <el-col :span="6">
                        <img class="img-product-dets" src="../../assets/laptop.jpg">
                    </el-col>
                    <el-col :span="18">
                        <div class="product-desc" style="padding: 14px;">
                            <div class="product-name-incart">{{product.name}} : <span
                                    class="product-price">$ {{product.price}}</span></div>
                            <div class="bottom clearfix">
                                <time class="product-info">
                                    {{product.description}}
                                </time>

                            </div>
                        </div>
                    </el-col>
                    <el-button type="danger pull-right" icon="el-icon-sold-out" @click="removeItem(product)"> Remove
                    </el-button>


                </el-card>

            </el-col>
            <router-link :to="{name:'productslist_route'}">
                <el-button type="default pull-right pull-right-margin">Continue Shopping</el-button>

                <el-button type="success pull-right pull-right-margin">Check Out</el-button>
            </router-link>

        </el-row>
    </div>

</template>
<style>
    .img-product-dets {
        width: 150px;
        margin: 10px;
    }

    .pull-right-margin {
       margin-right: 70px;
    }
    .total-price{
        color: green;
        margin-left: 20px;
        font-weight: 800;
        font-size: 18px;
    }

</style>