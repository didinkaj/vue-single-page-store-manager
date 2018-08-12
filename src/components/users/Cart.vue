<script>
    import {mapGetters, mapMutations} from 'vuex'
    import ElCol from "element-ui/packages/col/src/col";
    import ElCard from "../../../node_modules/element-ui/packages/card/src/main.vue";

    export default {
        components: {
            ElCard,
            ElCol
        },
        name: 'usercart_route',
        data() {
            return {
                itemsInCart: [],
                totalAmount: 'mmm',
                itemquantity: '',
                num1: 1
            }
        },
        computed: {
            ...mapGetters({
                cartItems: 'cartItems',
                cartItemsNo: 'cartItemsNo'
            }),
            totalAmountInCart: function () {

                let arrayItemsInCart = this.itemsInCart

                let total = arrayItemsInCart.reduce(function (prev, cur) {
                    return prev + (cur.price * cur.quantity);
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
            handleChange: function(product,value) {

                let quantity = value;

                const date = new Date()
                let newProduct = {
                    id: product.id,
                    product_id: product.product_id,
                    user_id: 1,
                    name: product.name,
                    description: product.description,
                    date: date,
                    quantity: 1,
                    price: parseInt(product.price),
                    category_id: product.category,
                    img: product.img
                }
                let playload = {'newProduct':newProduct,'quantity':quantity}

                this.$store.commit('ADD_CART_PRODUCT', playload)
                this.saveSuccess();

            },
            saveSuccess() {
                this.$notify({
                    title: 'Success',
                    message: 'quantity change successfully',
                    type: 'success'
                });
            },
            checkOut() {
                this.$router.push({name: 'userCheckout_route'})
            },
            isDisable() {
                if (this.cartItemsNo <= 0) {
                    return true
                }
                return false
            }

        },
        created() {
            this.getCartItems();
        },
        watch: {
            itemsInCarts: function (val) {
                this.itemsInCart = this.cartItems
            },

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
                <el-col :span="10" class="price-div">
                    <el-card> Total Amount: <span
                            class="total-price">Ksh {{totalAmountInCart * 100 | priceWithComma}}</span></el-card>
                </el-col>
            </el-row>
            <el-col :span="22" v-for="product in itemsInCart" :key="product.id" :offset="product > 0 ? 1 : 1"
                    class="product">
                <el-card :body-style="{ padding: '0px' }">
                    <!--:src="product.img"-->
                    <el-col :span="6">
                        <router-link :to="{name:'productsdetail_route', params:{id:product.product_id}}">
                        <img class="img-product-dets" src="../../assets/laptop.jpg">
                        </router-link>
                    </el-col>
                    <el-col :span="18">
                        <div class="product-desc" style="padding: 14px;">
                            <div class="product-name-incart">
                                <span class="product-price">{{product.quantity}}
                                </span>&nbsp;{{product.name}} @ <span class="product-price"> {{product.price | toUssd}}</span>
                            </div>
                            <div class="bottom clearfix">
                                <time class="product-info">
                                    {{product.description | readMore(120, '...') }}
                                </time>

                            </div>
                        </div>
                    </el-col>
                    <el-input-number :value="parseInt(product.quantity)" @change="handleChange(product,$event)" :min="1"
                                     :max="10"></el-input-number>
                     <el-button type="danger pull-right" icon="el-icon-sold-out" @click="removeItem(product)"> Remove
                    </el-button>
                </el-card>

            </el-col>
        </el-row>

        <el-row>
            <el-col :span="12">
                &nbsp;
            </el-col>
            <el-col :span="5" class="price-div">
                <router-link :to="{name:'productslist_route'}">
                    <el-button type="default pull-right ">Continue Shopping</el-button>
                </router-link>
            </el-col>
            <el-col :span="5">

                <el-button :disabled="isDisable()" @click.prevent="checkOut"
                           type="success pull-right pull-right-margin-checkout">Check Out
                </el-button>

            </el-col>
        </el-row>


    </div>

</template>
<style>
    .img-product-dets {
        width: 150px;
        margin: 10px;
    }

    .pull-right-margin {
        margin-right: 80px;
    }

    .total-price {
        color: green;
        margin-left: 20px;
        font-weight: 800;
        font-size: 18px;

    }

    .price-div {
        margin-left: 10px;
    }

</style>