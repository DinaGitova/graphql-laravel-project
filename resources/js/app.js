require('./bootstrap');
Vue.component('emps', require('./components/Home').default);

Vue.component('employee', require('./components/UpdateEmployee').default);

Vue.component('addEmployee', require('./components/AddEmployee').default);


import Vue from 'vue'
import ApolloClient from "apollo-boost"
import VueApollo from "vue-apollo"
import VueRouter from 'vue-router'
import routes from './routes';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

const apolloProvider = new VueApollo({
    defaultClient: new ApolloClient({
        uri: "/graphql"
    }),
    defaultOptions:{
        $query:{
            fetchPolicy:'no-cache',
        },
    }
});

Vue.use(VueApollo);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
const app = new Vue({
    el: '#app',
    apolloProvider,
    router: new VueRouter(routes)
});
