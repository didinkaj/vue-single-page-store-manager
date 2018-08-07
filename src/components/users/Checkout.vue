<script>
    import ElRow from "element-ui/packages/row/src/row";
    import ElCol from "element-ui/packages/col/src/col";

    export default {
        components: {
            ElCol,
            ElRow
        },
        name: 'userCheckout_route',
        data() {
            return {}
        }
    }
</script>
<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-card class="checkout">
                    <el-steps :active="4" align-center>
                        <el-step title="Step 1" description="Shopping Cart"></el-step>
                        <el-step title="Step 2" description="Shipping Addres"></el-step>
                        <el-step title="Step 3" description="Order Confirmation"></el-step>
                        <el-step title="Step 4" description="Delivery"></el-step>
                    </el-steps>
                    <p>Thanks For Shopping the Products will be delivered to you</p>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<style>

</style>