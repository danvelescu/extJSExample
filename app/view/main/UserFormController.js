Ext.define('SpringRestExample.view.main.UserFormControler',{
    extend:'Ext.app.ViewController',
    alias: 'controller.user-form',


    onCreateClick: function(sender,record){
        win = sender.up('window');
        form = win.down('form');
        record1 = form.getForm().getRecord();

        console.log(form.getForm().getValues());

        var user = Ext.create("UserModel",{
            "name":form.getForm().getValues().name,
            "surname":form.getForm().getValues().surname,
            "email":form.getForm().getValues().email
        });
       user.save({
        success: function(response, opts) {
            Ext.getStore('user-store').load();
            }
        });
       win.close();
    },
    

    onUpdateClick:function(sender,record){
        win = sender.up('window');
        form = win.down('form');
        form.updateRecord();
        win.close();
    }
});