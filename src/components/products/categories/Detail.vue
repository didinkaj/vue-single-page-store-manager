<script>
    import {mapState, mapGetters,mapMutations} from 'vuex'
    import ElCol from "element-ui/packages/col/src/col";

    export default {
        components: {
            ElCol

        },
        name: 'productscategoriesdetails_route',
        data() {
            return {
                categories: []
            }
        },
        computed: {
        ...mapGetters({
            category:'category'
        })
        },
        methods:{
            filterProducts(){
                let id = this.$route.params.id;
                let product = this.products.filter(product => product.id == id);
                this.product = product;
                console.log(product)
            },
            deleteProduct(product){
                console.log(product)
                this.$store.commit('DELETE_PRODUCT', product)
                this.deleteSuccess();
                return this.$router.push( '/')
            },
        deleteSuccess() {
            this.$notify({
                title: 'Success',
                message: 'Product deleted successfully',
                type: 'success'
            });
        },
            editCategory(){
                return this.$router.push( '/products/edit')
            }
        },
        mounted(){

        }
    }
</script>
<template>
    <div>
        <el-row>
            <el-col :span="7" v-for="item in category" :key="item.id" :offset="category > 0 ? 1 : 1" class="product">
                <el-card :body-style="{ padding: '0px' }">
                    <el-dropdown class="pull-right">
                        <el-button type="default danger more-options">
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item><a href="#" class="link-product"  @click = "deleteCategory(item)">
                                <i class="el-icon-delete red-icon"></i>  Delete
                            </a></el-dropdown-item>
                            <el-dropdown-item><a href="#"  @click = "editCategory()" class="link-product" >
                                <i class="el-icon-edit"></i> Edit
                            </a></el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>

                        <div class="product-desc" style="padding: 14px;">
                            <i :class="item.icon"></i>
                            <div class="bottom clearfix">
                                <time class="product-info">
                                    {{item.name}}
                                </time>

                            </div>
                        </div>


                </el-card>

            </el-col>
            <el-col :span="22">
                <router-link :to="{name:'productslist_route'}"><el-button type="default pull-right">Back</el-button></router-link>
            </el-col>

        </el-row>
    </div>

</template>
<style>
    .img-product-dets-1{
        margin-top: 15px;
        margin-left: 15px;
    }
    .link-product{
        color: #1b1e21;

    }
    .red-icon{
        color:red;
    }
    .more-options{
        color:blue;
        background: #eef1f6;
    }

</style>