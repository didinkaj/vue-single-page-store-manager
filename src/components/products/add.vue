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
                productNo:'',
                addProductForm: {
                    productName: '',
                    price: '',
                    category: '',
                    quantity:'',
                    image:'',
                    productDesc: ''
                }
            }
        },
        computed: {
            ...mapGetters({
                productCount: 'productCount',
                category:'category'
            })
        },
        methods: {
            onSubmit() {
                const date = new Date()
                const Id = this.productNo+1
                let newProduct = {
                    id: Id,
                    name: this.addProductForm.productName,
                    description: this.addProductForm.productDesc,
                    date: date,
                    quantity:this.addProductForm.quantity,
                    price: this.addProductForm.price,
                    category_id: this.addProductForm.category,
                    img: this.url

                }
                console.log(newProduct)
                if(this.addProductForm.productName && this.addProductForm.price && this.addProductForm.category){
                    this.$store.commit('ADD_PRODUCT', newProduct)
                    this.saveSuccess();
                    return this.$router.push( '/')
                }else{
                    this.saveError();
                }


            },
            getProductNO(){
                this.productNo = this.productCount

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
            },
            submitUpload() {
                this.$refs.upload.submit();
            }
        },
        created(){
            this.getProductNO();
        },
        watch:{
        }
    }
</script>
<template>
    <div>
        <el-col :span="22">
        <el-card class="add-product-form" >
            <p class="form-title">Add Product Form </p>
            <el-form ref="form" :model="addProductForm" label-width="120px" required="required">
                <el-form-item label="Product Name">
                    <el-input v-model="addProductForm.productName"></el-input>
                </el-form-item>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="Price">
                            <el-input type="number" v-model="addProductForm.price"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="Category">
                            <el-select v-model="addProductForm.category" placeholder="please select Category">
                                <el-option v-for="name in category" :key="name.id" :label="name.name" :value="name.id"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="12" :offset="6">
                        <el-form-item label="Quantity">
                            <el-input type="number" v-model="addProductForm.quantity"></el-input>
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
