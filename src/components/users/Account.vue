<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'useraccount_route',
        data() {
            return {}
        },
        computed: {
            ...mapGetters({
                users: 'users',
                loggedinUser: 'loggedinUser'
            }),
        }
    }

</script>
<template>
    <div>
        <el-col :span="22">
            <el-card class="add-product-form">
                <p>My account  Details</p>
                <p> Email : {{loggedinUser.email}}</p>
            </el-card>
        </el-col>
    </div>

</template>
<style>

</style>