Ext.define('WakeMe.view.BlueLineDirectionPanel', {
	extend: 'Ext.Panel',
	xtype: 'bluelinedirectionpanel',
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
			style: 'background:#00a1de',
			items: [
			{
				xtype: 'button',
				text: 'Back',
				style: 'background:#00a1de',
				height: '50%'
			}]
		},
		{
			xtype: 'button',
			text: "To O'Hare"
		},
		{
			xtype: 'button',
			text: 'To Forest Park'
		}]
	}
});
