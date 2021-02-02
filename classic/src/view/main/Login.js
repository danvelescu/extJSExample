Ext.define('SpringRestExample.view.main.Login', {
    extend: 'Ext.tab.Panel',
    xtype: 'login',
    alias:'loginform',
   
   // viewModel: 'main',
    controller: 'login',
    bodyPadding: 10,
    title: 'Login Window',
    closable: false,
    store: {
        type: 'curentUser'
    },
    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'username',
            id:'username',
            emptyText: 'username',
            fieldLabel: 'Username',
            allowBlank: false
        },
        {   xtype: 'textfield',
            name: 'password',
            id:'password',
            fieldLabel: 'Password',
            inputType: 'password',
            emptyText: 'password',
            allowBlank: false
        }
    ],
        buttons: [{
            text: 'Login',
            formBind: true,
            listeners: {
                    click: 'onLoginClick'
                }
            
        },{
            text:'New User?', 
            listeners:{
                click:function() {
                    var main = Ext.create({xtype:'form-register'});
                    this.up('main-container').add(main);
                    this.up('main-container').down('login').close();
                }
            }
        }]
    },
   
});