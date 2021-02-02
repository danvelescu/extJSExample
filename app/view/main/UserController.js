Ext.define('SpringRestExample.view.main.UserControler',{
    extend:'Ext.app.ViewController',
    alias:'controller.user',
    init:function()
    {
        this.control({
            '#addUserButton':{
                click:'OnAddUserClick'
            }
        })
    },
    OnAddUserClick:function(){
        pop = Ext.create('SpringRestExample.view.main.AddUserFormPopUp');
        pop.show();
    },

    onExportClick(){
        var exportApiUrl = "http://localhost:8080/users/export";

        var body = Ext.getBody();
    
        
        var form = body.createChild({
        tag:'form',
        cls:'x-hidden',
        id:'hiddenform-form',
        action: exportApiUrl,
        target:'iframe'
        });

       
        form.dom.submit();
        if(Ext.Element.cache.hasOwnProperty(form.dom.id)){
            Ext.Element.cache[form.dom.id].destroy();
        }
    }
});