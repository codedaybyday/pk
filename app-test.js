/**
 * Created by Administrator on 2017/1/5.
 */
var Vue = require('vue');

//var Test  = require('./src/test.vue')
//import Vue from 'vue';
var app = new Vue({
    /*compoents: {
        test: Test
    },*/
    el:'#test',
    data:function () {
        return {
            message:'test'
        };
    }/*,
    render:function(createElement){
        return createElement('div','hello vue');
    }*/
});
