<script>
    import {mapState,mapGetters} from 'vuex'
    import mixin from '../../mixins/myMixins'

    export default {
        mixins:[mixin],
        name: 'products_route',
        components: {
        },
        data() {
            return {
                currentDate: new Date(),
                orderbtn:true,
                removebtn:true,
                productAdded: {}
            };
        },
        computed:{
            ...mapState({
                names: 'names'
            }),
            ...mapGetters({
                products:'products',
                cartItems: 'cartItems',
                cartItemsNo:'cartItemsNo'
            })
        },

        watch: {
            cartItems: {
                handler: function () {
                    console.log(this.cartItems, "cart items");
                    this.added(this.productAdded);
                }
            }
        },
        methods:{
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
                };

                console.log('item added'+newProduct);

                this.productAdded = newProduct;

                this.$store.commit('ADD_CART_PRODUCT', newProduct);
                this.success("Product added to cart successfully");
            },
            deleteSuccess() {
                this.$notify({
                    title: 'Success',
                    message: 'Product Removed from cart successfully',
                    type: 'success'
                });
            },
            removeItem(item) {
                console.log('item removed' + item)
                this.$store.commit('DELETE_CART_PRODUCT', item)
                this.deleteSuccess();

            },
            added(product) {
                let index = this.cartItems.find( (item) => {
                    return item.product_id == product.id;
                });

                if(index) {
                    return true;
                }
                return false;
            },
        }
    }
</script>
<template>
    <div >

        <el-row >
            <el-col :span="7" v-for="product in products" :key="product.id"   :offset="product > 0 ? 1 : 1" class="product">
                <el-card :body-style="{ padding: '0px' }">
                    <!--:src="product.img"-->
                    <router-link :to="{name:'productsdetail_route', params:{id:product.id}}">
                    <img class="img-product"  src="../../assets/laptop.jpg">
                    <div class="product-desc" style="padding: 14px;">
                        <div class="product-name" >{{product.name}} : <span class="product-price">$ {{product.price}}</span></div>
                        <div class="bottom clearfix">
                            <time class="product-info">
                               {{product.description}} - {{added(product)}} {{product.id}}
                            </time>
                        </div>
                    </div>
                    </router-link>


                    <el-button type="primary pull-right" icon="el-icon-sold-out" v-show="!added(product)" @click="addToCart(product)" > Order</el-button>
                    <el-button type="danger pull-right" icon="el-icon-sold-out" v-show="added(product)" @click="removeItem(product)" > Remove</el-button>
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

