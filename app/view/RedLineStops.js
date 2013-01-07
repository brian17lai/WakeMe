Ext.define('WakeMe.view.RedLineStops', {
	extend: 'Ext.Panel',
	xtype: 'redlinestops',
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
			style: 'background:red',
			items: [
			{
				xtype: 'button',
				text: 'Back',
				data: 'stopsPanel',
				style: 'background:red',
				height: '50%'
			}
			]
		},
		{
			xtype: 'button',
			data: 26,
			text: '47th'
		},
		{
			xtype: 'button',
			data: 28,
			text: '63rd'
		},
		{
			xtype: 'button',
			data: 29,
			text: '69th'
		},
		{
			xtype: 'button',
			data: 30,
			text: '79th'
		},
		{
			xtype: 'button',
			data: 31,
			text: '87th'
		},
		{
			xtype: 'button',
			data: 32,
			text: '95th/Dan Ryan'
		},
		{
			xtype: 'button',
			data: 12,
			text: 'Addison'
		},
		{
			xtype: 'button',
			data: 8,
			text: 'Argyle'
		},
		{
			xtype: 'button',
			data: 13,
			text: 'Belmont'
		},
		{
			xtype: 'button',
			data: 7,
			text: 'Berwyn'
		},
		{
			xtype: 'button',
			data: 6,
			text: 'Bryn Mawr'
		},
		{
			xtype: 'button',
			data: 24,
			text: 'Cermak-Chinatown'
		},
		{
			xtype: 'button',
			data: 17,
			text: 'Chicago'
		},
		{
			xtype: 'button',
			data: 16,
			text: 'Clark/Division'
		},
		{
			xtype: 'button',
			data: 14,
			text: 'Fullerton'
		},
		{
			xtype: 'button',
			data: 27,
			text: 'Garfield'
		},
		{
			xtype: 'button',
			data: 18,
			text: 'Grand'
		},
		{
			xtype: 'button',
			data: 4,
			text: 'Granville'
		},
		{
			xtype: 'button',
			data: 22,
			text: 'Harrison'
		},
		{
			xtype: 'button',
			data: 100,
			text: 'Howard'
		},
		{
			xtype: 'button',
			data: 21,
			text: 'Jackson'
		},
		{
			xtype: 'button',
			data: 1,
			text: 'Jarvis'
		},
		{
			xtype: 'button',
			data: 19,
			text: 'Lake'
		},
		{
			xtype: 'button',
			data: 9,
			text: 'Lawrence'
		},
		{
			xtype: 'button',
			data: 3,
			text: 'Loyola'
		},
		{
			xtype: 'button',
			data: 20,
			text: 'Monroe'
		},
		{
			xtype: 'button',
			data: 2,
			text: 'Morse'
		},
		{
			xtype: 'button',
			data: 15,
			text: 'North/Clybourn'
		},
		{
			xtype: 'button',
			data: 23,
			text: 'Roosevelt'
		},
		{
			xtype: 'button',
			data: 11,
			text: 'Sheridan'
		},
		{
			xtype: 'button',
			data: 25,
			text: 'Sox-35th'
		},
		{
			xtype: 'button',
			data: 5,
			text: 'Thorndale'
		},
		{
			xtype: 'button',
			data: 10,
			text: 'Wilson'
		}]
	}
});
