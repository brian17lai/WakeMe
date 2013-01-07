Ext.define('WakeMe.view.BrownLineStops', {
	extend: 'Ext.Panel',
	xtype: 'brownlinestops',
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
			style: 'background:#62361b',
			items: [
			{
				xtype: 'button',
				text: 'Back',
				data: 'stopsPanel',
				style: 'background:#62361b',
				height: '50%'
			}
			]
		},
		{
			xtype: 'button',
			data: 23,
			text: 'Adams/Wabash'
		},
		{
			xtype: 'button',
			data: 8,
			text: 'Addison'
		},
		{
			xtype: 'button',
			data: 15,
			text: 'Armitage'
		},
		{
			xtype: 'button',
			data: 11,
			text: 'Belmont'
		},
		{
			xtype: 'button',
			data: 17,
			text: 'Chicago'
		},
		{
			xtype: 'button',
			data: 27,
			text: 'Clark/Lake'
		},
		{
			xtype: 'button',
			data: 5,
			text: 'Damen'
		},
		{
			xtype: 'button',
			data: 13,
			text: 'Diversey'
		},
		{
			xtype: 'button',
			data: 2,
			text: 'Francisco'
		},
		{
			xtype: 'button',
			data: 14,
			text: 'Fullerton'
		},
		{
			xtype: 'button',
			data: 22,
			text: 'Harold Washington Library'
		},
		{
			xtype: 'button',
			data: 7,
			text: 'Irving Park'
		},
		{
			xtype: 'button',
			data: 1,
			text: 'Kedzie'
		},
		{
			xtype: 'button',
			data: 100,
			text: 'Kimball'
		},
		{
			xtype: 'button',
			data: 21,
			text: "LaSalle/Van Buren"
		},
		{
			xtype: 'button',
			data: 24,
			text: 'Madison/Wabash'
		},
		{
			xtype: 'button',
			data: 18,
			text: 'Merchandise Mart'
		},
		{
			xtype: 'button',
			data: 6,
			text: 'Montrose'
		},
		{
			xtype: 'button',
			data: 9,
			text: 'Paulina'
		},
		{
			xtype: 'button',
			data: 20,
			text: 'Quincy'
		},
		{
			xtype: 'button',
			data: 25,
			text: 'Randolph/Wabash'
		},
		{
			xtype: 'button',
			data: 3,
			text: 'Rockwell'
		},
		{
			xtype: 'button',
			data: 16,
			text: 'Sedgwick'
		},
		{
			xtype: 'button',
			data: 10,
			text: 'Southport'
		},
		{
			xtype: 'button',
			data: 26,
			text: "State/Lake"
		},
		{
			xtype: 'button',
			data: 19,
			text: 'Washington/Wells'
		},
		{
			xtype: 'button',
			data: 12,
			text: 'Wellington'
		},
		{
			xtype: 'button',
			data: 4,
			text: 'Western'
		}]
	}
});
