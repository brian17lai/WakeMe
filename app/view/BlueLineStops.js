Ext.define('WakeMe.view.BlueLineStops', {
	extend: 'Ext.Panel',
	xtype: 'bluelinestops',
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
			style: 'background:#00a1de',
			items: [
			{
				xtype: 'button',
				text: 'Back',
				data: 'stopsPanel',
				style: 'background:#00a1de',
				height: '50%'
			}
			]
		},
		{
			xtype: 'button',
			data: 7,
			text: 'Addison'
		},
		{
			xtype: 'button',
			data: 29,
			text: 'Austin'
		},
		{
			xtype: 'button',
			data: 8,
			text: 'Belmont'
		},
		{
			xtype: 'button',
			data: 10,
			text: 'California'
		},
		{
			xtype: 'button',
			data: 14,
			text: 'Chicago'
		},
		{
			xtype: 'button',
			data: 28,
			text: 'Cicero'
		},
		{
			xtype: 'button',
			data: 16,
			text: 'Clark/Lake'
		},
		{
			xtype: 'button',
			data: 21,
			text: 'Clinton'
		},
		{
			xtype: 'button',
			data: 2,
			text: 'Cumberland'
		},
		{
			xtype: 'button',
			data: 12,
			text: 'Damen'
		},
		{
			xtype: 'button',
			data: 13,
			text: 'Division'
		},
		{
			xtype: 'button',
			data: 32,
			text: 'Forest Park'
		},
		{
			xtype: 'button',
			data: 15,
			text: 'Grand'
		},
		{
			xtype: 'button',
			data: 31,
			text: 'Harlem(Forest Park Branch)'
		},
		{
			xtype: 'button',
			data: 3,
			text: "Harlem(O'Hare Branch)"
		},
		{
			xtype: 'button',
			data: 24,
			text: 'Illinois Medical District'
		},
		{
			xtype: 'button',
			data: 6,
			text: 'Irving Park'
		},
		{
			xtype: 'button',
			data: 19,
			text: 'Jackson'
		},
		{
			xtype: 'button',
			data: 4,
			text: 'Jefferson Park'
		},
		{
			xtype: 'button',
			data: 26,
			text: 'Kedzie-Homan'
		},
		{
			xtype: 'button',
			data: 20,
			text: 'LaSalle'
		},
		{
			xtype: 'button',
			data: 9,
			text: 'Logan Square'
		},
		{
			xtype: 'button',
			data: 18,
			text: 'Monroe'
		},
		{
			xtype: 'button',
			data: 5,
			text: 'Montrose'
		},
		{
			xtype: 'button',
			data: 100,
			text: "O'Hare"
		},
		{
			xtype: 'button',
			data: 30,
			text: 'Oak Park'
		},
		{
			xtype: 'button',
			data: 27,
			text: 'Pulaski'
		},
		{
			xtype: 'button',
			data: 23,
			text: 'Racine'
		},
		{
			xtype: 'button',
			data: 1,
			text: 'Rosemont'
		},
		{
			xtype: 'button',
			data: 22,
			text: 'UIC-Halsted'
		},
		{
			xtype: 'button',
			data: 17,
			text: 'Washington'
		},
		{
			xtype: 'button',
			data: 25,
			text: 'Western(Forest Park Branch)'
		},
		{
			xtype: 'button',
			data: 11,
			text: "Western(O'Hare Branch)"
		}]
	}
});
