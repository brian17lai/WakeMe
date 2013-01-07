Ext.define('WakeMe.controller.SetAlarmRedLine', {
	extend: 'Ext.app.Controller',
	requires: ['Ext.MessageBox'],
	config: {
		refs: {
			'redLineStops': 'redlinestops',
			'redLineHoward': 'redlinestops > button[text=Howard]',
			'redLineJarvis': 'redlinestops > button[text=Jarvis]',
			'redLineMorse': 'redlinestops > button[text=Morse]',
			'redLineLoyola': 'redlinestops > button[text=Loyola]',
			'redLineGranville': 'redlinestops > button[text=Granville]',
			'redLineThorndale': 'redlinestops > button[text=Thorndale]',
			'redLineBrynMawr': 'redlinestops > button[text=Bryn Mawr]',
			'redLineBerwyn': 'redlinestops > button[text=Berwyn]',
			'redLineArgyle': 'redlinestops > button[text=Argyle]',
			'redLineLawrence': 'redlinestops > button[text=Lawrence]',
			'redLineWilson': 'redlinestops > button[text=Wilson]',
			'redLineSheridan': 'redlinestops > button[text=Sheridan]',
			'redLineAddison': 'redlinestops > button[text=Addison]',
			'redLineBelmont': 'redlinestops > button[text=Belmont]',
			'redLineFullerton': 'redlinestops > button[text=Fullerton]',
			'redLineNorthClybourn': 'redlinestops > button[text=North/Clybourn]',
			'redLineClarkDivision': 'redlinestops > button[text=Clark/Division]',
			'redLineChicago': 'redlinestops > button[text=Chicago]',
			'redLineGrand': 'redlinestops > button[text=Grand]',
			'redLineLake': 'redlinestops > button[text=Lake]',
			'redLineMonroe': 'redlinestops > button[text=Monroe]',
			'redLineJackson': 'redlinestops > button[text=Jackson]',
			'redLineHarrison': 'redlinestops > button[text=Harrison]',
			'redLineRoosevelt': 'redlinestops > button[text=Roosevelt]',
			'redLineCermakChinatown': 'redlinestops > button[text=Cermak-Chinatown]',
			'redLineSox35th': 'redlinestops > button[text=Sox-35th]',
			'redLine47th': 'redlinestops > button[text=47th]',
			'redLineGarfield': 'redlinestops > button[text=Garfield]',
			'redLine63rd': 'redlinestops > button[text=63rd]',
			'redLine69th': 'redlinestops > button[text=69th]',
			'redLine79th': 'redlinestops > button[text=79th]',
			'redLine87th': 'redlinestops > button[text=87th]',
			'redLine95th': 'redlinestops > button[text=95th/Dan Ryan]',
		},
		control: {
			'redLineHoward': {
				tap: 'chooseRedLineStop'
			},
			'redLineJarvis': {
				tap: 'chooseRedLineStop'
			},
			'redLineMorse': {
				tap: 'chooseRedLineStop'
			},
			'redLineLoyola': {
				tap: 'chooseRedLineStop'
			},
			'redLineGranville': {
				tap: 'chooseRedLineStop'
			},
			'redLineThorndale': {
				tap: 'chooseRedLineStop'
			},
			'redLineBrynMawr': {
				tap: 'chooseRedLineStop'
			},
			'redLineBerwyn': {
				tap: 'chooseRedLineStop'
			},
			'redLineArgyle': {
				tap: 'chooseRedLineStop'
			},
			'redLineLawrence': {
				tap: 'chooseRedLineStop'
			},
			'redLineWilson': {
				tap: 'chooseRedLineStop'
			},
			'redLineSheridan': {
				tap: 'chooseRedLineStop'
			},
			'redLineAddison': {
				tap: 'chooseRedLineStop'
			},
			'redLineBelmont': {
				tap: 'chooseRedLineStop'
			},
			'redLineFullerton': {
				tap: 'chooseRedLineStop'
			},
			'redLineNorthClybourn': {
				tap: 'chooseRedLineStop'
			},
			'redLineClarkDivision': {
				tap: 'chooseRedLineStop'
			},
			'redLineChicago': {
				tap: 'chooseRedLineStop'
			},
			'redLineGrand': {
				tap: 'chooseRedLineStop'
			},
			'redLineLake': {
				tap: 'chooseRedLineStop'
			},
			'redLineMonroe': {
				tap: 'chooseRedLineStop'
			},
			'redLineJackson': {
				tap: 'chooseRedLineStop'
			},
			'redLineHarrison': {
				tap: 'chooseRedLineStop'
			},
			'redLineRoosevelt': {
				tap: 'chooseRedLineStop'
			},
			'redLineCermakChinatown': {
				tap: 'chooseRedLineStop'
			},
			'redLineSox35th': {
				tap: 'chooseRedLineStop'
			},
			'redLine47th': {
				tap: 'chooseRedLineStop'
			},
			'redLineGarfield': {
				tap: 'chooseRedLineStop'
			},
			'redLine63rd': {
				tap: 'chooseRedLineStop'
			},
			'redLine69th': {
				tap: 'chooseRedLineStop'
			},
			'redLine79th': {
				tap: 'chooseRedLineStop'
			},
			'redLine87th': {
				tap: 'chooseRedLineStop'
			},
			'redLine95th': {
				tap: 'chooseRedLineStop'
			}
		}
	},
	chooseRedLineStop: function(b,e) {
		var index;
		if(b.getData() == 100) {
			index = 0;
		}
		else {
			index = b.getData();
		}
		var redLineStops = new Array();
		redLineStops = [
			'Howard',
			'Jarvis',
			'Morse',
			'Loyola',
			'Granville',
			'Thorndale',
			'Bryn Mawr',
			'Berwyn',
			'Argyle',
			'Lawrence',
			'Wilson',
			'Sheridan',
			'Addison',
			'Belmont',
			'Fullerton',
			'North/Clybourn',
			'Clark/Division',
			'Chicago',
			'Grand',
			'Lake',
			'Monroe',
			'Jackson',
			'Harrison',
			'Roosevelt',
			'Cermak-Chinatown',
			'Sox-35th',
			'47th',
			'Garfield',
			'63rd',
			'69th',
			'79th',
			'87th',
			'95th/Dan Ryan'
		];
		var redLineCoords = new Array();
		redLineCoords = [
			[42.019279, -87.672495],
			[42.016044, -87.669400],
			[42.007939, -87.665448],
			[42.000578, -87.661102],
			[41.994782, -87.659464],
			[41.990331, -87.659456],
			[41.983931, -87.659256],
			[41.978331, -87.658956],
			[41.973531, -87.658855],
			[41.969232, -87.658755],
			[41.966573, -87.658320],
			[41.954116, -87.654737],
			[41.947432, -87.653855],
			[41.940032, -87.653413],
			[41.925432, -87.653340],
			[41.911032, -87.649653],
			[41.903932, -87.631553],
			[41.896632, -87.628304],
			[41.891582, -87.628235],
			[41.883991, -87.628001],
			[41.881723, -87.627905],
			[41.878839, -87.627792],
			[41.874522, -87.627629],
			[41.867108, -87.626839],
			[41.852570, -87.630894],
			[41.830930, -87.630599],
			[41.809133, -87.631702],
			[41.794518, -87.632268],
			[41.779833, -87.630849],
			[41.769133, -87.625849],
			[41.750834, -87.625748],
			[41.736334, -87.625448],
			[41.720933, -87.68205]
			
		]
		if(redLineStops[index] == 'Howard' && WakeMe.app.redLineDirection == 'Southbound') {
			Ext.Msg.alert('Oops!','There are no southbound trains to Howard on this line. Please choose a different stop or direction.');
		}
		else if(redLineStops[index] == '95th/Dan Ryan' && WakeMe.app.redLineDirection == 'Northbound') {
			Ext.Msg.alert('Oops!','There are no northbound trains to 95th/Dan Ryan on this line. Please choose a different stop or direction.');
		}
		else if(WakeMe.app.redLineDirection == 'Southbound') {
			this.getRedLineStops().hide('slideOut');
			WakeMe.app.alarmStop = redLineStops[index-1];
			WakeMe.app.alarmSet = true;
			WakeMe.app.geocodedStop = redLineCoords[index-1];
			WakeMe.app.geo.setAutoUpdate(true);
			Ext.Msg.alert('Success!','Your alarm is set to go off at '+redLineStops[index-1]+'. Enjoy your nap! You can disable your alarm by tapping the "disable" button.',Ext.emptyFn);
		}
		else {
			this.getRedLineStops().hide('slideOut');
			WakeMe.app.alarmStop = redLineStops[index+1];
			WakeMe.app.alarmSet = true;
			WakeMe.app.geocodedStop = redLineCoords[index+1];
			WakeMe.app.geo.setAutoUpdate(true);
			Ext.Msg.alert('Success!','Your alarm is set to go off at '+redLineStops[index+1]+'. Enjoy your nap! You can disable your alarm by tapping the "disable" button.',Ext.emptyFn);
		}
	}
});
