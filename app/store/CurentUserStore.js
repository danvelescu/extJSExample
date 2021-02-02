Ext.define('SpringRestExample.store.CurentUserStore', {
    extend: 'Ext.data.Store',
    alias:'store.curentUser',
    model: 'SpringRestExample.model.CurentUser',
   
    proxy:{
        type:'memory',
        reader:{
            type:'json',
            rootProperty:'items'
        }
    },
    fields:[
        {name:'id',type:'float'},
        {name:'name',type:'string'},
        {name:'surname',type:'string'},
        {name:'email',type:'string'},
        {name:'password',type:'string'}
    ]
});