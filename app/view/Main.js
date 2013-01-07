Ext.define('WakeMe.view.Main', {
	extend: 'Ext.Container',
	xtype: 'wakememain',
	requires: [
		'WakeMe.view.TitleBar',
		'WakeMe.view.MainButtonPanel',
	],
	config: {
		layout: {type: "vbox",align: 'stretch', pack:'center'},
		autoShow: true,
		items: [
		{
			xtype: 'wakemetitlebar'
		},
		{
			xtype: 'mainbuttonpanel'
		}]
	}
})
