Ext.define('SpringRestExample.store.UserStore', {
    extend: 'Ext.data.Store',
    storeId: 'user-store',
    alias: 'store.userstore',

    model: 'SpringRestExample.model.UserModel',

    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/users',
        reader: {
            type: 'json',
            rootProperty: 'users'
        }
    },
    autoLoad: true,
    autoSync:true
});