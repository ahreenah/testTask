presentList = $.get('presentList.json');
quittingList = $.get('quittingList.json');
var app = new Vue({
    el:"#main",
    data:{
        hello:"hi",
        type:0,
        infoShown:false,
        list:[],
        shownPatient:null,
        presentNum:0,
        quittingNum:0,
    },
    methods:{
        show:function(i){
            app.infoShown=true;
            app.shownPatient=i;
        },
        greet:function(){
            if (this.type==1)
                console.log('greet');
        },
        setTypePresent:function(){
            app.infoShown=false;
            app._data.type=0;
            app._data.list=JSON.parse(presentList.responseText);
            app._data.presentNum = app._data.list.length;
        },
        setTypeQuitting:function(){
            app.infoShown=false;
            app._data.type=1;
            app._data.list=JSON.parse(quittingList.responseText);
            app._data.quittingNum = app._data.list.length;
        }
    }
});


