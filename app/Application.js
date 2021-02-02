/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('SpringRestExample.Application', {
    extend: 'Ext.app.Application',
    name: 'SpringRestExample',

    stores: [
        'SpringRestExample.store.CurentUserStore'        
    ],
    views: [
        'SpringRestExample.view.main.Login'
    ],

    launch: function() {
       
    }
});
