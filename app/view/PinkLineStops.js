Ext.define('WakeMe.view.PinkLineStops', {
	extend: 'Ext.Panel',
	xtype: 'pinklinestops',
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
			style: 'background:#e27ea6',
			items: [
			{
				xtype: 'button',
				text: 'Back',
				data: 'stopsPanel',
				style: 'background:#e27ea6',
				height: '50%'
			}
			]
		},
		{
			xtype: 'button',
			data: 9,
			text: '18th'
		},
		{
			xtype: 'button',
			data: 100,
			text: '54th/Cermak'
		},
		{
			xtype: 'button',
			data: 18,
			text: 'Adams/Wabash'
		},
		{
			xtype: 'button',
			data: 11,
			text: 'Ashland'
		},
		{
			xtype: 'button',
			data: 6,
			text: 'California'
		},
		{
			xtype: 'button',
			data: 4,
			text: 'Central Park'
		},
		{
			xtype: 'button',
			data: 1,
			text: 'Cicero'
		},
		{
			xtype: 'button',
			data: 14,
			text: 'Clark/Lake'
		},
		{
			xtype: 'button',
			data: 13,
			text: 'Clinton'
		},
		{
			xtype: 'button',
			data: 8,
			text: 'Damen'
		},
		{
			xtype: 'button',
			data: 19,
			text: 'Harold Washington Library'
		},
		{
			xtype: 'button',
			data: 5,
			text: 'Kedzie'
		},
		{
			xtype: 'button',
			data: 2,
			text: 'Kostner'
		},
		{
			xtype: 'button',
			data: 20,
			text: 'LaSalle/Van Buren'
		},
		{
			xtype: 'button',
			data: 17,
			text: 'Madison/Wabash'
		},
		{
			xtype: 'button',
			data: 12,
			text: 'Morgan'
		},
		{
			xtype: 'button',
			data: 10,
			text: 'Polk'
		},
		{
			xtype: 'button',
			data: 3,
			text: 'Pulaski'
		},
		{
			xtype: 'button',
			data: 21,
			text: 'Quincy'
		},
		{
			xtype: 'button',
			data: 16,
			text: 'Randolph/Wabash'
		},
		{
			xtype: 'button',
			data: 15,
			text: 'State/Lake'
		},
		{
			xtype: 'button',
			data: 22,
			text: 'Washington/Wells'
		},
		{
			xtype: 'button',
			data: 7,
			text: 'Western'
		}]
	}
});
