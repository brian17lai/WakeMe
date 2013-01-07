Ext.define('WakeMe.view.OrangeLineStops', {
	extend: 'Ext.Panel',
	xtype: 'orangelinestops',
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
			style: 'background:#f9461c',
			items: [
			{
				xtype: 'button',
				text: 'Back',
				data: 'stopsPanel',
				style: 'background:#f9461c',
				height: '50%'
			}
			]
		},
		{
			xtype: 'button',
			data: 4,
			text: '35th/Archer'
		},
		{
			xtype: 'button',
			data: 16,
			text: 'Adams/Wabash'
		},
		{
			xtype: 'button',
			data: 5,
			text: 'Ashland'
		},
		{
			xtype: 'button',
			data: 12,
			text: 'Clark/Lake'
		},
		{
			xtype: 'button',
			data: 6,
			text: 'Halsted'
		},
		{
			xtype: 'button',
			data: 8,
			text: 'Harold Washington Library'
		},
		{
			xtype: 'button',
			data: 2,
			text: 'Kedzie'
		},
		{
			xtype: 'button',
			data: 9,
			text: 'LaSalle/Van Buren'
		},
		{
			xtype: 'button',
			data: 15,
			text: 'Madison/Wabash'
		},
		{
			xtype: 'button',
			data: 100,
			text: 'Midway'
		},
		{
			xtype: 'button',
			data: 1,
			text: 'Pulaski'
		},
		{
			xtype: 'button',
			data: 10,
			text: 'Quincy'
		},
		{
			xtype: 'button',
			data: 14,
			text: 'Randolph/Wabash'
		},
		{
			xtype: 'button',
			data: 7,
			text: 'Roosevelt'
		},
		{
			xtype: 'button',
			data: 13,
			text: "State/Lake"
		},
		{
			xtype: 'button',
			data: 11,
			text: 'Washington/Wells'
		},
		{
			xtype: 'button',
			data: 3,
			text: 'Western'
		}]
	}
});
