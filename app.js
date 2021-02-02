/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'SpringRestExample.Application',

    name: 'SpringRestExample',

    requires: [
        // This will automatically load all classes in the SpringRestExample namespace
        // so that application classes do not need to require each other.
        'SpringRestExample.*'
    ],

    // The name of the initial view to create.
    mainView: 'SpringRestExample.view.main.MainContainer'
});
