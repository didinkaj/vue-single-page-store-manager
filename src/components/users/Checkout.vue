<script>
    import ElRow from "element-ui/packages/row/src/row";
    import ElCol from "element-ui/packages/col/src/col";
    import ElForm from "../../../node_modules/element-ui/packages/form/src/form.vue";
    import {mapGetters} from 'vuex'

    export default {
        components: {
            ElForm,
            ElCol,
            ElRow
        },
        name: 'userCheckout_route',
        data() {
            return {
                active: 1,
                isCheckout: false,
                inputAddress: ''
            }
        },
        computed: {
            ...mapGetters({
                cartItems: 'cartItems',
                address: 'address'
            }),
            totalAmountInCart: function () {

                let arrayItemsInCart = this.cartItems

                let total = arrayItemsInCart.reduce(function (prev, cur) {
                    return prev + (cur.price * cur.quantity);
                }, 0);

                return total;
            }

        },
        methods: {
            saveToStore() {
                this.$store.commit('ADD_ADDRESS', this.inputAddress)
            },
            next() {
                if (this.active++ > 2) this.active = 0;
            },
            back() {
                this.active = 1
            },
            checkout() {
                this.isCheckout = true
                this.$store.commit('EMPTY_CART')
                this.active = 4;
            },
            disableCheckout() {
                if (this.active == 3 || this.active == 2) {
                    return false
                } else {

                    return true
                }
            },
            continueShopping() {
                if (this.active == 4) {
                    return false
                } else {

                    return true
                }
            },
            nextStatus() {
                if (this.active == 4 || this.active == 2) {
                    return true
                }
                return false
            },
            getAddress() {
                if (this.inputAddress != "") {
                    this.address = this.inputAddress
                }
            }
        },
        watch: {},
        created() {
            this.getAddress();
        }
    }
</script>
<template>
    <div>
        <el-row>
            <el-col :span="22">
                <el-card class="checkout">
                    <el-steps :active="active" align-center finish-status="success" class="steps">
                        <el-step title="Step 1" description="Shopping"></el-step>
                        <el-step title="Step 2" description="Shipping Addres"></el-step>
                        <el-step title="Step 3" description="Order Confirmation and payments"></el-step>
                        <el-step title="Step 4" description="Delivery"></el-step>
                    </el-steps>
                    <el-row>
                        <div class="text">
                            <p v-show="isCheckout">
                                <i class="el-icon-success icon"></i><br/>
                                Thank you for shopping with us, your products will be delivered within 5 bussiness working days to {{address}}
                            </p>
                            <p v-show="!nextStatus()">
                                <el-form v-on:submit.prevent="saveToStore()">
                                    <el-form-item label="Delivery Address">
                                        <el-input type="text" v-model="inputAddress" :placeholder="address"
                                                  :value="address" v-on:keyup.enter="saveToStore()"></el-input>
                                    </el-form-item>
                                </el-form>
                            </p>
                            <p v-show="!disableCheckout()">
                                <el-col :span="24" class="price-div">
                                    <el-card>
                                        Total Amount: <span
                                            class="total-price">Ksh {{totalAmountInCart * 100 | priceWithComma}}</span>
                                        <router-link :to="{name:'usercart_route'}" class="cartlink">
                                            view cart
                                        </router-link>
                                        <el-row>
                                            <br/>
                                            <br/>
                                            Pay with Mpesa | Visa Card | Paypal
                                            <br/>
                                            <br/>
                                        </el-row>
                                    </el-card>
                                </el-col>
                                <br/>
                                <br/>
                            </p>
                        </div>
                    </el-row>
                    <br/>
                    <br/>
                    <el-row>
                        <el-col :span="8">
                            <el-button v-show="!disableCheckout()" :disabled="disableCheckout()" @click="back">Back
                            </el-button>

                        </el-col>
                        <el-col :span="16" v-show="continueShopping()">
                            <el-button type="success pull-right" v-show="!nextStatus()" @click="next">Next
                            </el-button>
                            <el-button type="success pull-right" v-show="!disableCheckout()"
                                       :disabled="disableCheckout()" icon="el-icon-sold-out"
                                       @click="checkout"> Confirm Order
                            </el-button>
                            <router-link :to="{name:'productslist_route'}" v-show="continueShopping()">
                                <el-button type="default pull-right ">Continue Shopping</el-button>
                            </router-link>
                        </el-col>
                        <el-col :span="16" v-show="!continueShopping()">
                            <router-link :to="{name:'productslist_route'}">
                                <el-button type="default pull-right ">Home</el-button>
                            </router-link>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<style>
    .cartlink {
        color: blue;
        float: right;
    }

    .steps {
        margin-top: 50px;
    }

    .text {
        padding: 60px;
    }

    .text p {
        text-align: center;
    }

    .icon {
        font-size: 48px;
        padding-bottom: 20px;
    }
</style>