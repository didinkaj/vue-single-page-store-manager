<script>
    import {mapState, mapGetters,mapMutations} from 'vuex'
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";

    export default {
        components: {ElButton},
        name: 'productsdetail_route',
        data() {
            return {
                product: []
            }
        },
        computed: {
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
                id: id,
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
           filterProducts(){
                let id = this.$route.params.id;
                let product = this.products.filter(product => product.id == id);
                this.product = product;
                console.log(product)
            },
            deleteProduct(product){
                console.log(product)
                this.$store.commit('DELETE_PRODUCT', product)
//                this.$store.commit('DELETE_CART_PRODUCT', product)
                this.deleteSuccess();
                return this.$router.push( '/')
            },
        deleteSuccess() {
            this.$notify({
                title: 'Success',
                message: 'Product deleted successfully',
                type: 'success'
            });
        },
            saveSuccess() {
                this.$notify({
                    title: 'Success',
                    message: 'Added to cart successfully',
                    type: 'success'
                });
            },
            editProduct(product_id){
             console.log(product_id);
                return this.$router.push({ name: 'productsedit_route', params: { id: product_id }})
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
                        <img class="img-product-dets-1"  src="../../assets/laptop.jpg">


                    <el-dropdown class="pull-right">
                        <el-button type="default danger more-options">
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item><a href="#" class="link-product"  @click = "deleteProduct(product)">
                                <i class="el-icon-delete red-icon"></i>  Delete
                            </a></el-dropdown-item>
                            <el-dropdown-item><a href="#"  @click = "editProduct(product.id)" class="link-product" >
                                <i class="el-icon-edit"></i> Edit
                            </a></el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>

                        <div class="product-desc" style="padding: 14px;">
                            <div class="product-name" >{{product.name}} : <span class="product-price">$ {{product.price}}</span>
                            </div>
                            <div class="bottom clearfix">
                                <time class="product-info">
                                    {{product.description}}
                                </time>
                                <p>Stock: <span class="product-price">{{product.quantity}} </span>Remaining</p>
                            </div>
                        </div>
                    <el-button type="primary pull-right" icon="el-icon-sold-out" @click="addToCart(product)"> Order</el-button>
                    <router-link :to="{name:'productslist_route'}"><el-button type="default pull-right">Back</el-button></router-link>

                </el-card>

            </el-col>
        </el-row>
    </div>

</template>
<style>
    .img-product-dets-1{
        margin-top: 15px;
        margin-left: 15px;
    }
    .link-product{
        color: #1b1e21;

    }
    .red-icon{
        color:red;
    }
    .more-options{
        color:blue;
        background: #eef1f6;
    }

</style>