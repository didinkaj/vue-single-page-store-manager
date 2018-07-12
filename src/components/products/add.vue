<script>
    import ElRow from "element-ui/packages/row/src/row";
    import ElCol from "element-ui/packages/col/src/col";
    import router from 'vue-router';
    import {mapState, mapMutations, mapGetters} from 'vuex'

    export default {
        components: {
            ElCol,
            ElRow
        },
        name: 'productsadd_route',
        data() {
            return {
                url: '/static/img/laptop.737283c.jpg',
                productCount:'',
                addProductForm: {
                    productName: '',
                    price: '',
                    category: '',
                    productDesc: ''
                }
            }
        },
        computed: {
            ...mapGetters({
                blogNo: 'blogNo'
            })
        },
        methods: {
            onSubmit() {
                const date = new Date()
                const userId = 7
                let newProduct = {
                    id: 7,
                    name: this.addProductForm.productName,
                    description: this.addProductForm.productDesc,
                    date: date,
                    price: this.addProductForm.price,
                    category: this.addProductForm.category,
                    img: this.url
                }
                console.log(newProduct)
                if(!this.addProductForm.productName){
                    this.$store.commit('ADD_PRODUCT', newProduct)
                    this.saveSuccess();
                    return this.$router.push( '/')
                }else{
                    this.saveError();
                }


            },
            getProductNO(){
                this.productCount = this.blogNo

            },
            saveSuccess() {
                this.$notify({
                    title: 'Success',
                    message: 'Product added successfully',
                    type: 'success'
                });
            },
            saveError() {
                this.$notify.error({
                    title: 'Error',
                    message: 'Error ensure all the fields are filled'
                });
            }
        },
        created(){
            this.getProductNO();
        }
    }
</script>
<template>
    <div>
        <el-col :span="22">
        <el-card class="add-product-form" >
            <p class="form-title">Add Product Form {{blogNo}}</p>
            <el-form ref="form" :model="addProductForm" label-width="120px" required="required">
                <el-form-item label="Product Name">
                    <el-input v-model="addProductForm.productName"></el-input>
                </el-form-item>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="Price">
                            <el-input v-model="addProductForm.price"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="Category">
                            <el-select v-model="addProductForm.category" placeholder="please select Category">
                                <el-option label="Computers" value="Computers"></el-option>
                                <el-option label="Laptops" value="Printers"></el-option>
                                <el-option label="Computers" value="Laptops"></el-option>
                                <el-option label="Laptops" value="Phones"></el-option>
                                <el-option label="Computers" value="Accessorie"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>


                <el-form-item label="Description">
                    <el-input type="textarea" :rows="8" v-model="addProductForm.productDesc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit" class="create-product">Create</el-button>
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
    .add-product-form {
        padding: 15px;
    }

    .create-product {
        float: right;
    }

    .form-title {
        text-align: center;
        margin-bottom: 30px;
    }

</style>
