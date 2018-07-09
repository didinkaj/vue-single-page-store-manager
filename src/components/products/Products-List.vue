<script>
    import Layout from '@/components/index'
    import {mapState,mapGetters} from 'vuex'
    export default {
        name: 'products',
        components: {
            'page-layout': Layout
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
                products:'products'
            })
        }
    }
</script>
<template>
    <page-layout>
        <el-row slot="content">
            <el-col :span="7" v-for="product in products" :key="product.id" :offset="product > 0 ? 1 : 1" class="product">
                <el-card :body-style="{ padding: '0px' }">
                    <img class="img-product" :src="product.img">
                    <div class="product-desc" style="padding: 14px;">
                        <span >{{product.name}} : <span class="product-price">$ {{product.price}}</span></span>
                        <div class="bottom clearfix">
                            <time class="product-info">
                               {{product.description}}
                            </time>

                        </div>
                    </div>
                    <el-button type="primary pull-right" icon="el-icon-sold-out"> Order</el-button>
                </el-card>

            </el-col>
        </el-row>
    </page-layout>
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
        margin-bottom: 10px;
    }

    .pull-right {
        float: right;
        margin: 5px;
    }
    .product-price{
        color: #931621;
        background-color: #eef1f6;
    }
</style>

