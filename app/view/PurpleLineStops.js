Ext.define('WakeMe.view.PurpleLineStops', {
	extend: 'Ext.Panel',
	xtype: 'purplelinestops',
	requires: [
		'WakeMe.view.TitleBar',
		'Ext.TitleBar'
	],
	config: {
		layout: 'vbox',
		scrollable: {direction: 'vertical'},
		align: 'stretch',
		flex: 1,
		style: 'background:black',
		hidden: true,
		items: [
		{
			xtype: 'wakemetitlebar',
		},
		{
			xtype: 'titlebar',
			title: 'Choose Your Stop:',
			style: 'background:#522398',
			items: [
			{
				xtype: 'button',
				text: 'Back',
				data: 'stopsPanel',
				style: 'background:#522398',
				height: '50%'
			}
			]
		},
		{
			xtype: 'button',
			data: 21,
			text: 'Adams/Wabash'
		},
		{
			xtype: 'button',
			data: 13,
			text: 'Armitage'
		},
		{
			xtype: 'button',
			data: 9,
			text: 'Belmont'
		},
		{
			xtype: 'button',
			data: 1,
			text: 'Central'
		},
		{
			xtype: 'button',
			data: 15,
			text: 'Chicago'
		},
		{
			xtype: 'button',
			data: 17,
			text: 'Clark/Lake'
		},
		{
			xtype: 'button',
			data: 4,
			text: 'Davis'
		},
		{
			xtype: 'button',
			data: 5,
			text: 'Dempster'
		},
		{
			xtype: 'button',
			data: 11,
			text: 'Diversey'
		},
		{
			xtype: 'button',
			data: 3,
			text: 'Foster'
		},
		{
			xtype: 'button',
			data: 12,
			text: 'Fullerton'
		},
		{
			xtype: 'button',
			data: 22,
			text: 'Harold Washington Library'
		},
		{
			xtype: 'button',
			data: 8,
			text: 'Howard'
		},
		{
			xtype: 'button',
			data: 23,
			text: 'LaSalle/Van Buren'
		},
		{
			xtype: 'button',
			data: 100,
			text: 'Linden'
		},
		{
			xtype: 'button',
			data: 20,
			text: 'Madison/Wabash'
		},
		{
			xtype: 'button',
			data: 6,
			text: 'Main'
		},
		{
			xtype: 'button',
			data: 16,
			text: 'Merchandise Mart'
		},
		{
			xtype: 'button',
			data: 2,
			text: 'Noyes'
		},
		{
			xtype: 'button',
			data: 24,
			text: 'Quincy'
		},
		{
			xtype: 'button',
			data: 19,
			text: 'Randolph/Wabash'
		},
		{
			xtype: 'button',
			data: 14,
			text: 'Sedgwick'
		},
		{
			xtype: 'button',
			data: 7,
			text: 'South Boulevard'
		},
		{
			xtype: 'button',
			data: 18,
			text: 'State/Lake'
		},
		{
			xtype: 'button',
			data: 25,
			text: 'Washington/Wells'
		},
		{
			xtype: 'button',
			data: 10,
			text: 'Wellington'
		}]
	}
});
