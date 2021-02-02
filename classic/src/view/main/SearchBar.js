Ext.define('SpringRestExample.view.main.SearchBar', {
    extend:'Ext.form.Panel',
    xtype:'searchbar',
    store:'userstore',
    items: [{
        xtype: 'fieldset',
         title: 'Search',
         items: [{
             xtype: 'searchfield',
             label: 'Query',
             name: 'query'
         }]
    }],
    listeners:[{
        beforerender:function() {
          
            alert('hello')
        }
    }],
    height: 350
});