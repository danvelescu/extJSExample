Ext.define('SpringRestExample.view.main.LoginController', {
    extend: 'Ext.app.ViewController',
    alias:'controller.login',
    config:{stores: ['store.curentUser'],},

    requires: [
         'SpringRestExample.store.CurentUserStore'
    ],
    onLoginClick(sender,record){
            thisForm = this.getView();
            // console.log(sender.)
            
           // form = sender.up().down('form');
    
            console.log(this.getView().down('#username').up().getValues());

            value_username = this.getView().down('#username').up().getValues().username;
            value_pass = this.getView().down('#username').up().getValues().password;
            Ext.Ajax.request({
                url: 'http://localhost:8080/user/'+value_username,

                success: function(response, opts) {
                    var user = Ext.decode(response.responseText);
                    if(user.password === value_pass){
                    localStorage.setItem("curentUserID", user.id);
                    login();
                    }else{
                        Ext.Msg.alert('401', 'Bad credentials',Ext.emptyFn);
                    }
                },
                failure: function(response, opts) {
                    Ext.Msg.alert('Error', 'User not exist',Ext.emptyFn);
                    console.log('server-side failure with status code ' + response.status);
                }
            });
            function login() {
                localStorage.setItem("LoggedIn", true);
                var mainPage = Ext.create({xtype:'app-main'});
                thisForm.up('main-container').add(mainPage);
                thisForm.up('main-container').down('login').close();
            }
    }
});