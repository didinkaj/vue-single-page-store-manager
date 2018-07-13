<script>
    import {mapGetters,mapMutations} from 'vuex'
    import ElCol from "element-ui/packages/col/src/col";
    export default {
        components: {ElCol},
        name:'usercart_route',
        data(){
            return{
                itemsInCart:[]
            }
        },
        computed:{
            ...mapGetters({
                cartItems:'cartItems'
            })
        },
        methods:{
            getCartItems(){
                this.itemsInCart = this.cartItems
            },
            removeItem(item){
                console.log('item removed'+ item)
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
        created(){
            this.getCartItems();
        },
        watch(){
            this.itemsInCart = this.cartItems
        }
    }

</script>
<template>
    <div>
            <el-row>
                <p>My Cart</p>
                <el-col :span="22" v-for="product in itemsInCart" :key="product.id" :offset="product > 0 ? 1 : 1" class="product">
                    <el-card :body-style="{ padding: '0px' }" >
                        <!--:src="product.img"-->
                        <el-col :span="6">
                        <img class="img-product-dets"  src="../../assets/laptop.jpg">
                        </el-col>
                        <el-col :span="18">
                        <div class="product-desc" style="padding: 14px;">
                            <div class="product-name-incart" >{{product.name}} : <span class="product-price">$ {{product.price}}</span></div>
                            <div class="bottom clearfix">
                                <time class="product-info">
                                    {{product.description}}
                                </time>

                            </div>
                        </div>
                        </el-col>
                        <el-button type="danger pull-right" icon="el-icon-sold-out" @click="removeItem(product)" > Remove</el-button>


                    </el-card>

                </el-col>
                <router-link :to="{name:'productslist_route'}"><el-button type="default pull-right">Back</el-button></router-link>

            </el-row>
    </div>

</template>
<style>
    .img-product-dets{
        width: 150px;
        margin: 10px;
    }
.pull-right{
    margin-right: 55px;
}

</style>