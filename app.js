/**
 * Created by Administrator on 2017/1/6.
 */
var Vue = require('vue');
var app = require('./components/app.vue');

var app = new Vue({
    el:'#pk-app',
    components:{
        app:app
    }
});