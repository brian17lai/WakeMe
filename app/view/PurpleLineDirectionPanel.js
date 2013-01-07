Ext.define('WakeMe.view.PurpleLineDirectionPanel', {
	extend: 'Ext.Panel',
	xtype: 'purplelinedirectionpanel',
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
			style: 'background:#522398',
			items: [
			{
				xtype: 'button',
				text: 'Back',
				style: 'background:#522398',
				height: '50%'
			}]
		},
		{
			xtype: 'button',
			text: "To Howard"
		},
		{
			xtype: 'button',
			text: 'To Linden'
		},
		{
			xtype: 'button',
			text: 'To Loop'
		}]
	}
});