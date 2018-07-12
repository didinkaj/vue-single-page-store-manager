<script>
    import { mapGetters } from 'vuex';
    import ElCol from "element-ui/packages/col/src/col";
    export default {
        components: {ElCol},
        name: 'sidebar-left',
        data() {
            return {
                isCollapse: true,
                items:[],
            };
        },
        computed:{
            ...mapGetters({
                category:'category'
            })
        },
        methods: {
            getSibarItems(){
                console.log(this.category);
                this.items = this.category;
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        created(){
            this.getSibarItems();
        },
        filters: {
            numberToString: function (value) {
                if (!value) return ''
                value = value.toString()
                return value
            }
        }
    }
</script>

<template>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-row class="tac">
            <el-col :span="24">
                <h5 class="logo">Products Categories</h5>
                <el-menu
                          default-active="1"
                          class="el-menu-vertical-demo"
                          @open="handleOpen"
                          @close="handleClose">
                    <el-col v-for="item in items">
                    <router-link  :to="{name:'productscategory_route', params:{id:item.id}}">
                    <el-menu-item  :index="item.id | numberToString">
                        <i :class="item.icon"></i>
                        <span>{{item.name}}</span>
                    </el-menu-item>
                    </router-link>
                    </el-col>
                </el-menu>

            </el-col>

        </el-row>
    </el-aside>
</template>



<style>
    .logo {
        padding-left: 25px;
        color: #931621;
    }

    .el-aside {
        color: #333;
        background-color: #123456;
        line-height: 100%;
        position: fixed;
        z-index: 900;
    }
</style>