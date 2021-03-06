// noinspection JSAnnotator
import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '@/components/products/List'
import AddProducts from '@/components/products/Add'
import ProductsEdit from '@/components/products/Edit'
import ProductsDetail from '@/components/products/Detail'
import Category from '@/components/products/categories/Detail'
import ProductCategoriesAdd from '@/components/products/categories/Add'
import ProductCategory from '@/components/products/categories/List'
import UserAccount from '@/components/users/Account'
import UserProducts from '@/components/users/Products'
import UserCart from '@/components/users/Cart'
import UserLogin from '@/components/users/Login'
import UserRegister from '@/components/users/Register'
import CheckOut from '@/components/users/Checkout'
import DeleteProduct from '@/components/products/Delete'
import firebase from 'firebase'


Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'productslist_route',
            component: ProductList,
            children: [
                {
                    path: 'Rproducts/detail/:id',
                    name: 'productsdetail_nroute',
                    component: ProductsDetail
                },
                {
                    path: 'product/delete',
                    name: 'delete_product_route',
                    component: DeleteProduct,
                    meta: {
                        requiresAuth: true
                    }
                }
            ]
        },

        {
            path: '/products/add',
            name: 'productsadd_route',
            component: AddProducts,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/products/edit/:id',
            name: 'productsedit_route',
            component: ProductsEdit,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/products/detail/:id',
            name: 'productsdetail_route',
            component: ProductsDetail
        },
        {
            path: '/products/category/:id',
            name: 'productscategory_route',
            component: ProductCategory
        },
        {
            path: '/products/categories/add',
            name: 'productscategoriesadd_route',
            component: ProductCategoriesAdd,
            meta: {
                requiresAuth: true
            }
        }, {
            path: '/products/categories/details',
            name: 'productscategoriesdetails_route',
            component: Category
        },
        {
            path: '/user/account',
            name: 'useraccount_route',
            component: UserAccount
        },
        {
            path: '/user/products',
            name: 'userproducts_route',
            component: UserProducts
        },
        {
            path: '/user/cart',
            name: 'usercart_route',
            component: UserCart
        },
        {
            path: '/user/login',
            name: 'userlogin_route',
            component: UserLogin
        },
        {
            path: '/user/register',
            name: 'userregister_route',
            component: UserRegister
        },
        {
            path: '/user/checkout',
            name: 'userCheckout_route',
            component: CheckOut,
            meta: {
                requiresAuth: true,
            }
        }
    ],
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    let currentUser = firebase.auth().currentUser;
    if (to.matched.some(record => record.meta.requiresAuth)) {

        if (!currentUser) {
            next({
                path: '/user/login',
                query: {redirect: to.fullPath}
            })
        } else {
            next();
        }

    } else {

        next();
    }

})

export default router;
