Ext.define('SpringRestExample.model.UserModel',{
    extend:'Ext.data.Model',
    alias:'UserModel',
    fields:[
            {name:'id',type:'float'},
            {name:'name',type:'string'},
            {name:'surname',type:'string'},
            {name:'email',type:'string'},
            {name:'password',type:'string'}
    ],

    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/users',
        reader: {
            type: 'json',
            rootProperty: 'users',
        },
        listeners : {
            exception : function(proxy, response, operation) {
                console.log('Exxxxception')
                if (operation) {
                    console.log(response.responseJson)
                    alert(response.responseJson);
                } else {
                    // May be a proxy error...
                }
            }
        }
    }, 
    autoLoad: true
});