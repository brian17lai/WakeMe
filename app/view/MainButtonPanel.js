Ext.define('WakeMe.view.MainButtonPanel', {
	extend: 'Ext.Panel',
	xtype: 'mainbuttonpanel',
	requires: [
		'Ext.TitleBar'
	],
	config: {
		layout: 'vbox',
		scrollable: {direction: 'vertical'},
		align: 'stretch',
		flex: 1,
		style: 'background:black',
		items: [
		{
			xtype: 'titlebar',
			title: "Choose Your CTA Line:"
		},
		{
			xtype: 'button',
			style: 'background:red',
			itemId: 'redlinebutton',
			text: 'Red Line',
			flex: 1
		},
		{
			xtype: 'button',
			style: 'background:#00a1de',
			text: 'Blue Line',
			flex: 1
		},
		{
			xtype: 'button',
			style: 'background:#62361b',
			text: 'Brown Line',
			flex: 1
		},
		{
			xtype: 'button',
			style: 'background:green',
			text: 'Green Line',
			flex: 1
		},
		{
			xtype: 'button',
			style: 'background:#f9461c',
			text: 'Orange Line',
			flex: 1
		},
		{
			xtype: 'button',
			style: 'background:#522398',
			text: 'Purple Line',
			flex: 1
		},
		{
			xtype: 'button',
			style: 'background:#e27ea6',
			text: 'Pink Line',
			flex: 1
		}]
	}
})
