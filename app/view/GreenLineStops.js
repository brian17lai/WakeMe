Ext.define('WakeMe.view.GreenLineStops', {
	extend: 'Ext.Panel',
	xtype: 'greenlinestops',
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
			style: 'background:green',
			items: [
			{
				xtype: 'button',
				text: 'Back',
				data: 'stopsPanel',
				style: 'background:green',
				height: '50%'
			}
			]
		},
		{
			xtype: 'button',
			data: 20,
			text: '35th-Bronzeville-IIT'
		},
		{
			xtype: 'button',
			data: 22,
			text: '43rd'
		},
		{
			xtype: 'button',
			data: 23,
			text: '47th'
		},
		{
			xtype: 'button',
			data: 24,
			text: '51st'
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
			data: 29,
			text: 'Ashland/63rd'
		},
		{
			xtype: 'button',
			data: 3,
			text: 'Austin'
		},
		{
			xtype: 'button',
			data: 10,
			text: 'California'
		},
		{
			xtype: 'button',
			data: 4,
			text: 'Central'
		},
		{
			xtype: 'button',
			data: 6,
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
			text: 'Conservatory-Central Park Drive'
		},
		{
			xtype: 'button',
			data: 27,
			text: "Cottage Grove"
		},
		{
			xtype: 'button',
			data: 25,
			text: 'Garfield'
		},
		{
			xtype: 'button',
			data: 28,
			text: 'Halsted'
		},
		{
			xtype: 'button',
			data: 100,
			text: 'Harlem/Lake'
		},
		{
			xtype: 'button',
			data: 21,
			text: 'Indiana'
		},
		{
			xtype: 'button',
			data: 9,
			text: 'Kedzie'
		},
		{
			xtype: 'button',
			data: 26,
			text: 'King Drive'
		},
		{
			xtype: 'button',
			data: 5,
			text: 'Laramie'
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
			data: 1,
			text: "Oak Park"
		},
		{
			xtype: 'button',
			data: 7,
			text: 'Pulaski'
		},
		{
			xtype: 'button',
			data: 16,
			text: 'Randolph/Wabash'
		},
		{
			xtype: 'button',
			data: 2,
			text: 'Ridgeland'
		},
		{
			xtype: 'button',
			data: 19,
			text: 'Roosevelt'
		},
		{
			xtype: 'button',
			data: 15,
			text: 'State/Lake'
		}]
	}
});
