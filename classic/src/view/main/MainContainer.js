Ext.define('SpringRestExample.view.main.MainContainer', {
    extend: 'Ext.Container',
    alias:'maincontainer',
    xtype:'main-container',
    id:'main-container',
    layout:'absolute',
    
    
    listeners:{
        beforerender:function() {

            console.log("main container");
            loggedIn = localStorage.getItem("LoggedIn");
        if(loggedIn){
            console.log('main')
            var mainPage = Ext.create({xtype:'app-main'});
            this.add(mainPage);
        }else{
            console.log('login')
            var mainPage = Ext.create({xtype:'login'});
            this.add(mainPage);
        }
        }
    }
});