// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store/store'
import mixin from './mixins/myMixins'
import firebase from 'firebase'
import './firebaseconfig'

Vue.config.productionTip = false
Vue.use(ElementUI, { locale });
let app;
firebase.auth().onAuthStateChanged(function(user) {
    if (!app) {
        /* eslint-disable no-new */
        app = new Vue({
            el: '#app',
            router,
            store,
            mixins:[mixin],
            template: '<App/>',
            components: { App }
        });
    }
});


