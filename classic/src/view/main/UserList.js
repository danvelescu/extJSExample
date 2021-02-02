Ext.define('SpringRestExample.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'userslist',
    alias:'userslist',
    autoload: true,
    requires: [
        'SpringRestExample.store.UserStore'
    ],

    title: 'Users',

    store: {
        sorters:['name'],
        type: 'userstore'
    },
    plugins: {
        gridfilters: true
    },
    tbar: [{
        xtype: 'textfield',
        width: 110,
        labelWidth: 30,
        label: 'Name',
        bind: {
            value: '{value}'
        },
        listeners: {
            change: function(field, value){
                    var store =Ext.getStore('user-store');
                    console.log()
                    store.clearFilter();
                    store.filterBy(function(r1) 
                    {
                        return r1.data.name.match(value);
                    });
        }
    }
    
    }],
    columns: [
        { text: 'ID',  dataIndex: 'id' },
        { text: 'Name',  dataIndex: 'name' ,filter: 'string'},
        { text: 'Surname', dataIndex: 'surname', flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Password', dataIndex: 'password', flex: 1 }
    ]
    ,
    listeners:{
        itemdblclick:function(gridpanel,record,item,e){
            var  pop = Ext.create('SpringRestExample.view.main.UpdateUserFormPopUp');
            var form =pop.down('form');
            form.loadRecord(record);
            pop.show();
        }
    }
    
});
