Ext.define('SpringRestExample.view.main.AddUserFormPopUp',{
    extend:"Ext.window.Window",
    width:400,
    alias:'user-form-popup',
    controller:'user-form',
    items: [
        {
            xtype:'form',
            bodyPadding:10,
            defaults:{
                labelWidth:90,
                margin:'0 0 10 0',
                anchor:'90%'
            },
            items:[
                {
                xtype: 'textfield',
                name: 'name',
                fieldLabel: 'Name',
                allowBlank: false  // requires a non-empty value
            }, {
                xtype: 'textfield',
                name: 'surname',
                fieldLabel: 'Surname',
                allowBlank: false
            },
            {
                xtype: 'textfield',
                name: 'email',
                fieldLabel: 'Emial',
                allowBlank: false
            },
            {
                xtype: 'button',
                text: 'Create',
                name: 'createuser',
                itemId:'createUser',
                handler: 'onCreateClick'
            }
            ]
        }
        ]

});