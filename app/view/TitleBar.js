Ext.define('WakeMe.view.TitleBar', {
	extend: 'Ext.TitleBar',
	xtype: 'wakemetitlebar',
	requires: [
		'Ext.TitleBar',
		'Ext.Img'
	],
	config: {
		title: 'WakeMe',
		docked: 'top',
		layout: 'hbox',//{ type:'hbox', pack: 'end' },
		items: [
		{
			xtype: 'image',
            hidden: false,
			autoShow: true,
            height: '20%',
			style: "padding: 25px;",
			src:'images/SubwayTrainAdjusted.png'
		},
		{
			xtype: 'button',
			text: 'Disable',
			ui: 'decline',
			align: 'right'
		}]
	}
})
