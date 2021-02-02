/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('SpringRestExample.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    id: 'MainView',
    alias:"mainform",
    controller: 'user',
    viewModel: 'main',
    ui: 'navigation',
    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,
    height:1000,
    width:1000,
    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [ {
        
        title: 'Users',
        iconCls: 'fa-user',
        items: [
        {
            xtype: 'userslist', 
        },{
            xtype: 'button',
            text: 'Add User',
            name: 'adduser',
            itemId:'addUserButton'
        },

    {
        xtype: 'button',
        text: 'Delete User',
        name: 'deleteuser',
        itemId:'deleteUserButton',
        handler:function(){
                var form  = this.up().down("userslist");
                var selectedRows = form.getSelectionModel().getSelection();
                console.log(selectedRows);
                if(selectedRows.length==0){
                    alert("Choise user from list");
                }else{
                Ext.Msg.confirm('Confirm', 'Are you sure?',function(choise){
                    if(choise == 'yes'){
                        form.getStore().remove(selectedRows);
                    }
                });
            }
        }
    },
        // {
        //     xtype: 'fieldset',
        //     title: 'Search',
        //     items: [{
        //         xtype: 'searchfield',
        //         label: 'Query',
        //         name: 'query'
        //     }]
        // },
]
    },{
        title: 'User info',
        iconCls: 'fa-user',
        items:[{
            xtype: 'button',
        text: 'Log out',
        name: 'logout',
        handler:function() {
            localStorage.removeItem("LoggedIn");
            location.reload();
        },
        itemId:'logoutBtn'
        },{
           items:[
               {
                    xtype:'form',
                    items:[
                        {
                            xtype:'textfield',
                             text:'Id:',
                             id:'label_id'
                        },
                        {
                         xtype:'textfield',
                          text:'Name:',
                          id:'label_name'
                     },
                     {
                         xtype:'textfield',
                         text:'Surname:',
                         id:'label_surname'
                     },
                     {
                         xtype:'textfield',
                          text:'Email:',
                          id:'label_email'
                     }
                    ]
               }
           ],
           listeners:{
            beforerender:function(){
                var user;
                Ext.Ajax.request({
                    url: 'http://localhost:8080/users/'+localStorage.getItem("curentUserID"),
    
                    success: function(response, opts) {

                         user = Ext.decode(response.responseText);
                        
                         Ext.get('label_id').setHtml("<b> ID: "+user.id);
                         Ext.get('label_name').setHtml("<b> Name: "+user.name);
                         Ext.get('label_surname').setHtml("<b> Surname: "+user.surname);
                         Ext.get('label_email').setHtml("<b> Email: "+user.email);
                    },
                    failure: function(response, opts) {
                        Ext.Msg.alert('User not exist');
                        console.log('server-side failure with status code ' + response.status);
                    }
                });
                
            }
        }
        },
    ]

    },
    {
        title: 'Export Data',
        items:[
            {
                xtype:'button',
                text:'Export users',
                handler:'onExportClick'
            }
        ]
    }

]
});
