<script>
    import {mapState,mapGetters} from 'vuex'
    export default {
        name: 'products_route',
        components: {
        },
        data() {
            return {
                currentDate: new Date()
            };
        },
        computed:{
            ...mapState({
                names: 'names'
            }),
            ...mapGetters({
                products:'products',
                cartItemsNo:'cartItemsNo'
            })
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
        }
    }
</script>
<template>
    <div >

        <el-row >
            <el-col :span="7" v-for="product in products" :key="product.id" :offset="product > 0 ? 1 : 1" class="product">
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
                    <el-button type="primary pull-right" icon="el-icon-sold-out" @click="addToCart(product)"> Order</el-button>
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

