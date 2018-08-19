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
        name: 'productsedit_route',
        data() {
            return {
                url: '/static/img/laptop.737283c.jpg',
                productNo: '',
                addProductForm: {
                    name: '',
                    category_id: '',
                    date: '',
                    id: '',
                    img: '',
                    quantity: '',
                    price: ''
                }

            }
        },
        computed: {
            ...mapGetters({
                productCount: 'productCount',
                category: 'category'
            }),
            ...mapGetters({
                products: 'products'
            })
        },
        methods: {
            editProduct() {
                const date = new Date()
                let newProduct = {
                    id: this.addProductForm.id,
                    name: this.addProductForm.productName,
                    description: this.addProductForm.productDesc,
                    date: date,
                    quantity: this.addProductForm.quantity,
                    price: this.addProductForm.price,
                    category_id: this.addProductForm.category,
                    img: this.url

                }
                if (this.addProductForm.name && this.addProductForm.price && this.addProductForm.category) {
                    this.$store.commit('EDIT_PRODUCT', newProduct)
                    this.saveSuccess();
                    return this.$router.push('/')
                } else {
                    this.saveError();
                }


            },
            getProductNO() {
                this.productNo = this.productCount

            },
            saveSuccess() {
                this.$notify({
                    title: 'Success',
                    message: 'Product edited successfully',
                    type: 'success'
                });
            },
            saveError() {
                this.$notify.error({
                    title: 'Error',
                    message: 'Error ensure all the fields are filled'
                });
            },
            filterProducts() {
                let id = this.$route.params.id;
                let product = this.products.filter(product => product.id == id)[0];
                this.addProductForm = product;
            }

        },
        created() {
            this.getProductNO();
            this.filterProducts();
            this.$Progress.start(40)
        },
        mounted() {

        },
        watch: {}
    }
</script>
<template>
    <div>
        <el-col :span="22" class="product">
            <el-card class="add-product-form">
                <p class="form-title">Edit Product Form</p>
                <el-form ref="form" :model="addProductForm" label-width="120px" required="required">
                    <el-form-item label="Product Name">
                        <el-input v-model="addProductForm.name"></el-input>
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
                                    <el-option v-for="name in category"
                                               :key="name.id" :label="name.name"
                                               :selected = "name.id == addProductForm.category_id ? 'selected' : ''"
                                               :value="name.id"></el-option>
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
                        <el-input type="textarea" :rows="8" v-model="addProductForm.description"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="editProduct" class="create-product">Save Changes</el-button>
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
