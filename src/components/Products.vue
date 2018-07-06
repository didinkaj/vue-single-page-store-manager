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
            <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 1 : 0">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="../assets/laptop.jpg">
                    <div style="padding: 14px;">
                        <span>Laptops: $ 300</span>
                        <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            <el-button type="primary pull-right">Order</el-button>
                        </div>
                    </div>
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

    .image {
        width: 100%;
        display: block;
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

