<script>
    export default {
        name:'userregister_route',
        data(){
            return{
                registerForm: {
                    fname: '',
                    sname:'',
                    email:'',
                    password: ''
                }

            }
        },
        methods:{
            onSubmit(){
                console.log('submitted')
            }
        }
    }

</script>
<template>
    <div>
        <el-col :span="22">
            <el-card class="add-product-form" >
                <p class="form-title">Registration Form </p>
                <el-form ref="form" :model="registerForm" label-width="120px" required="required">
                    <el-form-item label="First name">
                        <el-input v-model="registerForm.fname"></el-input>
                    </el-form-item>
                    <el-form-item label="Second name">
                        <el-input v-model="registerForm.sname"></el-input>
                    </el-form-item>
                    <el-form-item label="Email">
                        <el-input v-model="registerForm.email"></el-input>
                    </el-form-item>
                    <el-form-item label="password">
                        <el-input type="password" v-model="registerForm.password"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="onSubmit" class="login-button pull-right">Register</el-button>
                        <router-link :to="{name:'productslist_route'}">
                            <el-button>Cancel</el-button>
                        </router-link>
                    </el-form-item>
                </el-form>
            </el-card>
        </el-col>
    </div>

</template>
<style>
    .form-title {
        text-align: center;
        margin-bottom: 30px;
    }

</style>