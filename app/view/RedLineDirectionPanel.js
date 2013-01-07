Ext.define('WakeMe.view.RedLineDirectionPanel', {
	extend: 'Ext.Panel',
	xtype: 'redlinedirectionpanel',
	requires: [
		'Ext.TitleBar'
	],
	config: {
		layout: 'vbox',
		modal: true,
		centered: true,
		hidden: true,
		width: 250,
		items: [
		{
			xtype: 'titlebar',
			title: 'Direction?',
			style: 'background:red',
			items: [
			{
				xtype: 'button',
				text: 'Back',
				itemId: 'redlinedirectionbutton',
				style: 'background:red',
				height: '50%'
			}]
		},
		{
			xtype: 'button',
			text: 'To 95th/Dan Ryan'
		},
		{
			xtype: 'button',
			text: 'To Howard'
		}]
	}
});
