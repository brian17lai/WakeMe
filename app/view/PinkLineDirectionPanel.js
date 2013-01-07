Ext.define('WakeMe.view.PinkLineDirectionPanel', {
	extend: 'Ext.Panel',
	xtype: 'pinklinedirectionpanel',
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
			style: 'background:#e27ea6',
			items: [
			{
				xtype: 'button',
				text: 'Back',
				style: 'background:#e27ea6',
				height: '50%'
			}]
		},
		{
			xtype: 'button',
			text: "To 54th/Cermak"
		},
		{
			xtype: 'button',
			text: 'To Loop'
		}]
	}
});