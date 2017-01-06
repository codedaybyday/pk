/**
 * Created by Administrator on 2017/1/6.
 */
var Vue = require('vue');
var $ = require('jquery');

var app = new Vue({
    el:'#pk-app',
    data:{
        'left': {
            'img': '',
            'rate': 0,
            'dish_num': 0,
            'id':0,
            'dish_name':''
        },
        'right':{
            'img':'',
            'rate':0,
            'dish_num':0,
            'id':0,
            'dish_name':''
        },
        'des':'',
        'index':0,
        'list':[]
    },
    methods:{
        toggle:function(){
            this.index = this.index==0?1:0;
            this.getInfo();
        },
        getInfo:function(){
            var that = this;
            $.ajax({
                'url':'/list.php',
                'async':false,
                'type':'POST',
                'data':'index='+that.index,
                'success':function(data){
                    var data = $.parseJSON(data);
                    that.list = data;
                }
            });
        }
    },
    beforeMount:function(){
        var that = this;
        console.log('beforeUpdate');
        $.ajax({
            'url':'/pk.php',
            'async':false,
            'type':'POST',
            'success':function(data){
                var data = $.parseJSON(data);
                console.log(data)
                that.left = data.left;
                that.right = data.right;
                that.des = data.des;
                that.index = data.index;
                that.getInfo();
            }
        });
        /*$.post('pk.php',function(data){
         var data = $.parseJSON(data);
         console.log(data)
         that.left = data.left;
         that.right = data.right;
         that.des = data.des;
         that.index = data.index;
         $.post('list.php',{index:that.index},function(data){
         var data = $.parseJSON(data);
         console.log(data);
         that.list = data;
         });
         });*/
    },
    mounted:function () {
        console.log(this.$refs.list.children);
        if(this.list.length){
            var children = this.$refs.list.children;
            console.log(children[0].offsetHeight);
            for(var i=0;i<children.length;i++){
                console.log(11);
                children[i].style.height = 15+'rem';
            }
        }
    },
    filters:{
        substr:function(s,from,to){
            return s.substr(from,to);
        }
    }
});