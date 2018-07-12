<script>
    export default {
        name: 'productscategoriesadd_route',
        data() {
            return {
                addCategoryForm:{
                    categorytName:'',
                    icon:''
                }
            }
        },
        method:{
            onSubmit(){
                console.log('done');
            }
        }
    }
</script>
<template>
    <div>
        <el-col :span="22">
            <el-card class="add-category-form" >
                <p class="form-title">Add Product Category  </p>
                <el-form ref="form" :model="addCategoryForm" label-width="120px" required="required">
                    <el-form-item label="Category Name">
                        <el-input v-model="addCategoryForm.categorytName"></el-input>
                    </el-form-item>
                    <el-row>
                        <el-col>
                            <el-form-item label="Icon">
                                <el-input v-model="addCategoryForm.icon"></el-input>
                            </el-form-item>
                        </el-col>

                    </el-row>

                    <el-form-item>
                        <el-button type="primary" @click="onSubmit()" class="create-category ">Create</el-button>
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