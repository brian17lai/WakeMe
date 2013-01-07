Ext.define('WakeMe.view.ConfirmationPanel', {
	extend: 'Ext.Panel',
	xtype: 'confirmationpanel',
	requires: [
		'Ext.TitleBar'
	],
	config: {
		layout: { type: 'vbox', pack: 'center'},
		centered: true,
		width: '250px',
		style: 'background:#001919; border: 1px solid black;',
		hidden: true,
		items: [
		{
			xtype: 'titlebar',
			style: 'background:#001919',
			title: 'Confirmation'
		},
		{
			xtype: 'spacer',
			style: 'background:#001919',
			height: '200px',
		},
		{
			xtype: 'panel',
			style: 'background:#001919',
			layout: { type: 'hbox', pack: 'center'},
			items: [
			{
				xtype: 'button',
				text: 'Back To Stops',
				ui: 'action',
				//docked: 'left'
			},
			{
				xtype: 'button',
				text: 'Accept',
				ui: 'action'
				//align: 'right'
			}]
		}]
	}
})
