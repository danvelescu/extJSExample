Ext.define('SpringRestExample.model.CurentUser',{
    extend:'Ext.data.Model',
    alias:'CurentUserModel',
    fields:[
            {name:'id',type:'float'},
            {name:'name',type:'string'},
            {name:'surname',type:'string'},
            {name:'email',type:'string'},
    ]
});