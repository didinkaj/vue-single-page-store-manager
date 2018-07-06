<script>
    import Layout from '@/components/index'
    export default {
        name:'products',
        components:{
           'page-layout': Layout
        },
        data() {
            return {
                currentDate: new Date()
            };
        }
    }
</script>
<template>
    <page-layout >
        <el-row slot="content">
            <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 1 : 0">
                <el-card :body-style="{ padding: '0px' }">
                    <img class="img-product" src="../assets/laptop.jpg">
                    <div style="padding: 14px;">
                        <span>Laptops: $ 300</span>
                        <div class="bottom clearfix">
                            <time class="time">HP EliteBook Folio 1020 G1 - 12.5" - Core m5 6th gen - 8 GB RAM - 256 GB SSD -silver-free dos-free laptop bag</time>

                        </div>
                    </div>

                <el-button type="primary pull-right">Order</el-button>
                </el-card>
            </el-col>
        </el-row>
    </page-layout>
</template>

<style>
    .time {
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
        width:120px;
        display: block;
        margin: 0px auto;
        padding: 15px 0px 0px 0px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
    .pull-right{
        float: right;
    }
</style>

