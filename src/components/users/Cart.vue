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
                totalAmount:'mmm',
                itemquantity : ''
            }
        },
        computed: {
            ...mapGetters({
                cartItems: 'cartItems'
            }),
            totalAmountInCart:function () {

                let arrayItemsInCart = this.itemsInCart

                let total = arrayItemsInCart.reduce(function(prev, cur) {
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
            handleChange(product,value){
                console.log(value)
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

                this.$store.commit('ADD_CART_PRODUCT', newProduct)
                this.saveSuccess();

            },
            saveSuccess() {
                this.$notify({
                    title: 'Success',
                    message: 'quantity increased successfully',
                    type: 'success'
                });
            },
            checkOut(){

                console.log('item removed' + this.itemsInCart)
                this.$store.commit('EMPTY_CART')
                this.$router.push({name:'userCheckout_route'})
                //this.deleteSuccess();

            }

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
                <el-col :span="10" class="price-div">
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
                            <div class="product-name-incart"><span class="product-price">{{product.quantity}}</span>&nbsp;{{product.name}} : <span
                                    class="product-price">$ {{product.price}}   </span></div>
                            <div class="bottom clearfix">
                                <time class="product-info">
                                    {{product.description}}
                                </time>

                            </div>
                        </div>
                    </el-col>
                    <el-input-number  :value="parseInt(product.quantity)"  @change="handleChange(product)" :min="1" :max="10"></el-input-number>
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
                        <el-button type="default pull-right " >Continue Shopping</el-button>
                    </router-link>
                </el-col>
                <el-col :span="5">

                        <el-button @click.prevent="checkOut" type="success pull-right pull-right-margin-checkout">Check Out</el-button>

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
    .total-price{
        color: green;
        margin-left: 20px;
        font-weight: 800;
        font-size: 18px;

    }
    .price-div{
        margin-left: 10px;
    }

</style>