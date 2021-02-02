Ext.define('SpringRestExample.view.main.RegistrationForm', {
    extend: 'Ext.form.Panel',
    xtype: 'form-register',

    frame: true,
    title: 'Registration',
    bodyPadding: 10,
    scrollable: true,
    width: 355,

    fieldDefaults: {
        labelAlign: "right",
        labelWidth: 115,
        msgTarget: 'side'
    },

    items: [{
        xtype: 'fieldset',
        title: 'Contact Information',

        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },

        items: [{
            fieldLabel: 'First Name',
            emptyText: 'First Name',
            name: 'first'
        }, {
            fieldLabel: 'Last Name',
            emptyText: 'Last Name',
            name: 'last'
        }, {
            fieldLabel: 'Email',
            name: 'email',
            vtype: 'email'
        },
        {
            fieldLabel: 'Password',
            name: 'password'
        }]
    }],

    buttons: [{
        text: 'Register',
        disabled: true,
        formBind: true
    }]
});