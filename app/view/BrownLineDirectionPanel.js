Ext.define('WakeMe.view.BrownLineDirectionPanel', {
	extend: 'Ext.Panel',
	xtype: 'brownlinedirectionpanel',
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
			style: 'background:#62361b',
			items: [
			{
				xtype: 'button',
				text: 'Back',
				style: 'background:#62361b',
				height: '50%'
			}]
		},
		{
			xtype: 'button',
			text: "To Kimball"
		},
		{
			xtype: 'button',
			text: 'To Loop'
		}]
	}
});