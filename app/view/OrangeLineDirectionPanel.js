Ext.define('WakeMe.view.OrangeLineDirectionPanel', {
	extend: 'Ext.Panel',
	xtype: 'orangelinedirectionpanel',
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
			style: 'background:#f9461c',
			items: [
			{
				xtype: 'button',
				text: 'Back',
				style: 'background:#f9461c',
				height: '50%'
			}]
		},
		{
			xtype: 'button',
			text: "To Midway"
		},
		{
			xtype: 'button',
			text: 'To Loop'
		}]
	}
});