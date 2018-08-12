<script>
    import ElRow from "element-ui/packages/row/src/row";
    import ElCol from "element-ui/packages/col/src/col";

    import firebase from 'firebase'

    export default {
        components: {
            ElCol,
            ElRow
        },
        name: 'userlogin_route',
        data() {
            return {
                loginForm: {
                    email: '',
                    password: ''
                }

            }
        },
        methods: {
            onSubmit() {

                firebase.auth().signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password)
                    .then((resp) => {
                        console.log(JSON.stringify(resp.user.email));
                        this.$store.commit('SETLOGGEDIN_USER',resp.user.email)
                        this.saveSuccess(resp.user.email);
                        this.$router.push('/');

                    }).catch(error => {
                    //console.log(error.message);
                    this.saveError(error.message);
                })
                //console.log('submitted')
            },
            saveSuccess(user) {
                this.$notify({
                    title: 'Success',
                    message: 'Welcome ' + user,
                    type: 'success'
                });
            },
            saveError(message) {
                this.$notify.error({
                    title: 'Error',
                    message: message
                });
            }
        }
    }

</script>
<template>
    <div>
        <el-col :span="22">
            <el-card class="add-product-form">
                <p class="form-title">Login Form </p>
                <el-form ref="form" :model="loginForm" label-width="120px" required="required">
                    <el-form-item label="Email">
                        <el-input type="email" v-model="loginForm.email"></el-input>
                    </el-form-item>
                    <el-form-item label="password">
                        <el-input type="password" v-model="loginForm.password"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="onSubmit" class="login-button pull-right">Sign In</el-button>
                        <router-link :to="{name:'productslist_route'}">
                            <el-button>Cancel</el-button>
                        </router-link>
                    </el-form-item>
                </el-form>
                <el-row>
                    <el-col :span="10" :offset="10">
                        <router-link :to="{name:'userregister_route'}" id="register"><p>Creare an account Here</p>
                        </router-link>
                    </el-col>
                </el-row>
            </el-card>

        </el-col>
    </div>

</template>
<style>
    .form-title {
        text-align: center;
        margin-bottom: 30px;
    }

    #register {
        color: blue;
    }

</style>