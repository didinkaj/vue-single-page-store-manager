<script>
    import {mapState, mapMutations, mapGetters} from 'vuex'

    export default {
        name: 'productscategoriesadd_route',
        data() {
            return {
                addCategoryForm: {
                    categoryName: '',
                    icon: ''
                }
            }
        },
        methods: {
            onSubmitCategory() {
                const categoryId = 6;
                let newCategory = {
                    id: categoryId,
                    name: this.addCategoryForm.categoryName,
                    icon: this.addCategoryForm.icon,
                }
                if (this.addCategoryForm.categoryName && this.addCategoryForm.icon) {
                    this.$store.commit('ADD_CATEGORY', newCategory)
                    this.saveSuccess();
                    return this.$router.push('/')
                } else {
                    this.saveError();

                }
            },
            saveSuccess() {
                this.$notify({
                    title: 'Success',
                    message: 'Category added successfully',
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
            this.$Progress.start(40)
        }
    }
</script>
<template>
    <div>
        <el-col :span="22">
            <el-card class="add-category-form">
                <p class="form-title">Add Product Category  </p>
                <el-form ref="form" :model="addCategoryForm" label-width="120px">
                    <el-form-item label="Category Name">
                        <el-input v-model="addCategoryForm.categoryName" required="required"></el-input>
                    </el-form-item>
                    <el-row>
                        <el-col>
                            <el-form-item label="Icon">
                                <el-input v-model="addCategoryForm.icon" required="required"></el-input>
                            </el-form-item>
                        </el-col>

                    </el-row>

                    <el-form-item>
                        <el-button type="primary" v-on:click="onSubmitCategory()" class="create-category ">Create
                        </el-button>
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
    .create-category {
        float: right;
    }

    .form-title {
        text-align: center;
        margin-bottom: 30px;
    }

</style>