<script>
    import {mapGetters} from 'vuex'
    import ElCol from "element-ui/packages/col/src/col";
    export default {
        components: {ElCol},
        name:'usercart_route',
        data(){
            return{

            }
        },
        computed:{
            ...mapGetters({
                cartItems:'cartItems'
            })
        }
    }

</script>
<template>
    <div>
            <el-row>
                <p>My Cart</p>
                <el-col :span="22" v-for="product in cartItems" :key="product.id" :offset="product > 0 ? 1 : 1" class="product">
                    <el-card :body-style="{ padding: '0px' }">
                        <!--:src="product.img"-->
                        <el-col :span="6">
                        <img class="img-product-dets"  src="../../assets/laptop.jpg">
                        </el-col>
                        <el-col :span="18">
                        <div class="product-desc" style="padding: 14px;">
                            <div class="product-name" >{{product.name}} : <span class="product-price">$ {{product.price}}</span></div>
                            <div class="bottom clearfix">
                                <time class="product-info">
                                    {{product.description}}
                                </time>

                            </div>
                        </div>
                        </el-col>
                        <el-button type="danger pull-right" icon="el-icon-sold-out"> Remove</el-button>
                        <router-link :to="{name:'productslist_route'}"><el-button type="default pull-right">Back</el-button></router-link>

                    </el-card>

                </el-col>
            </el-row>
    </div>

</template>
<style>
    .img-product-dets{
        width: 150px;
        margin: 10px;
    }

</style>