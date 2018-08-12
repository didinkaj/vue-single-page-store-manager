<script>
    import firebase from 'firebase'

    export default {
        name: 'userregister_route',
        data() {
            return {
                registerForm: {
                    fname: '',
                    sname: '',
                    email: '',
                    password: ''
                }

            }
        },
        methods: {
            onSubmit() {
                this.$Progress.start()
                firebase.auth().createUserWithEmailAndPassword(this.registerForm.email, this.registerForm.password)
                    .then((user) => {
                        console.log(user);
                        firebase.auth().signInWithEmailAndPassword(this.registerForm.email, this.registerForm.password)
                            .then((resp) => {
                                console.log(JSON.stringify(resp.user.email));
                                this.$store.commit('SETLOGGEDIN_USER', resp.user.email)
                                this.saveSuccess(resp.user.email);
                                this.$Progress.end()
                                this.$router.push('/');

                            }).catch(error => {
                            this.saveError(error.message);
                        })
                    }).catch(error => {
                    this.saveError(error.message);
                })
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
        },
        created(){
            this.$Progress.start(40)
        }
    }

</script>
<template>
    <div>
        <el-col :span="22">
            <el-card class="add-product-form">
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