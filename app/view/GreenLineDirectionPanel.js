Ext.define('WakeMe.view.GreenLineDirectionPanel', {
	extend: 'Ext.Panel',
	xtype: 'greenlinedirectionpanel',
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
			style: 'background:green',
			items: [
			{
				xtype: 'button',
				text: 'Back',
				style: 'background:green',
				height: '50%'
			}]
		},
		{
			xtype: 'button',
			text: "To Harlem"
		},
		{
			xtype: 'button',
			text: 'To Cottage Grove'
		},
		{
			xtype: 'button',
			text: 'To Ashland/63rd'
		}]
	}
});