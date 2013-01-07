Ext.define('WakeMe.controller.SetAlarmPinkLine', {
	extend: 'Ext.app.Controller',
	requires: ['Ext.MessageBox'],
	config: {
		refs: {
			'pinkLine54Cermak': 'pinklinestops > button[text=54/Cermak]',
			'pinkLineCicero': 'pinklinestops > button[text=Cicero]',
			'pinkLineKostner': 'pinklinestops > button[text=Kostner]',
			'pinkLinePulaski': 'pinklinestops > button[text=Pulaski]',
			'pinkLineCentralPark': 'pinklinestops > button[text=Central Park]',
			'pinkLineKedzie': 'pinklinestops > button[text=Kedzie]',
			'pinkLineCalifornia': 'pinklinestops > button[text=California]',
			'pinkLineWestern': 'pinklinestops > button[text=Western]',
			'pinkLineDamen': 'pinklinestops > button[text=Damen]',
			'pinkLine18th': 'pinklinestops > button[text=18th]',
			'pinkLinePolk': 'pinklinestops > button[text=Polk]',
			'pinkLineAshland': 'pinklinestops > button[text=Ashland]',
			'pinkLineMorgan': 'pinklinestops > button[text=Morgan]',
			'pinkLineClinton': 'pinklinestops > button[text=Clinton]',
			'pinkLineClarkLake': 'pinklinestops > button[text=Clark/Lake]',
			'pinkLineStateLake': 'pinklinestops > button[text=State/Lake]',
			'pinkLineRandolphWabash': 'pinklinestops > button[text=Randolph/Wabash]',
			'pinkLineMadisonWabash': 'pinklinestops > button[text=Madison/Wabash]',
			'pinkLineAdamsWabash': 'pinklinestops > button[text=Adams/Wabash]',
			'pinkLineHaroldWashingtonLibraryStateVanBuren': 'pinklinestops > button[text=Harold Washington Library-State/Van Buren]',
			'pinkLineLaSalleVanBuren': 'pinklinestops > button[text=LaSalle/Van Buren]',
			'pinkLineQuincy': 'pinklinestops > button[text=Quincy]',
			'pinkLineWashingtonWells': 'pinklinestops > button[text=Washington/Wells]'
		},
		control: {
			'pinkLine54Cermak': {
				tap: 'choosepinkLineStop'
			},
			'pinkLineCicero': {
				tap: 'choosepinkLineStop'
			},
			'pinkLineKostner': {
				tap: 'choosepinkLineStop'
			},
			'pinkLinePulaski': {
				tap: 'choosepinkLineStop'
			},
			'pinkLineCentralPark': {
				tap: 'choosepinkLineStop'
			},
			'pinkLineKedzie': {
				tap: 'choosepinkLineStop'
			},
			'pinkLineCalifornia': {
				tap: 'choosepinkLineStop'
			},
			'pinkLineWestern': {
				tap: 'choosepinkLineStop'
			},
			'pinkLineDamen': {
				tap: 'choosepinkLineStop'
			},
			'pinkLine18th': {
				tap: 'choosepinkLineStop'
			},
			'pinkLinePolk': {
				tap: 'choosepinkLineStop'
			},
			'pinkLineAshland': {
				tap: 'choosepinkLineStop'
			},
			'pinkLineMorgan': {
				tap: 'choosepinkLineStop'
			},
			'pinkLineClinton': {
				tap: 'choosepinkLineStop'
			},
			'pinkLineClarkLake': {
				tap: 'choosepinkLineStop'
			},
			'pinkLineStateLake': {
				tap: 'choosepinkLineStop'
			},
			'pinkLineRandolphWabash': {
				tap: 'choosepinkLineStop'
			},
			'pinkLineMadisonWabash': {
				tap: 'choosepinkLineStop'
			},
			'pinkLineAdamsWabash': {
				tap: 'choosepinkLineStop'
			},
			'pinkLineHaroldWashingtonLibraryStateVanBuren': {
				tap: 'choosepinkLineStop'
			},
			'pinkLineLaSalleVanBuren': {
				tap: 'choosepinkLineStop'
			},
			'pinkLineQuincy': {
				tap: 'choosepinkLineStop'
			},
			'pinkLineWashingtonWells': {
				tap: 'choosepinkLineStop'
			}		
		}
	},
	choosepinkLineStop: function(b,e) {
		var index;
		if(b.getData() == 100) {
			index = 0;
		}
		else {
			index = b.getData();
		}
		var pinkLineStops = new Array();
		pinkLineStops = [
			'54/Cermak',
			'Cicero',
			'Kostner',
			'Pulaski',
			'Central Park',
			'Kedzie',
			'California',
			'Western',
			'Damen',
			'18th',
			'Polk',
			'Ashland',
			'Morgan',
			'Clinton',
			'Clark/Lake',
			'State/Lake',
			'Randolph/Wabash',
			'Madison/Wabash',
			'Adams/Wabash',
			'Harold Washington Library-State/Van Buren',
			'LaSalle/Van Buren',
			'Quincy',
			'Washington/Wells'
		];
		var pinkLineCoords = new Array();
		pinkLineCoords = [
			[41.851832, -87.758756],
			[41.853132, -87.745355],
			[41.854240, -87.732097],
			[41.854075, -87.724655],
			[41.853804, -87.715055],
			[41.853927, -87.705353],
			[41.854399, -87.695521],
			[41.854132, -87.685653],
			[41.854728, -87.675853],
			[41.857632, -87.669153],
			[41.871532, -87.669482],
			[41.885340, -87.667043],
			[41.885579, -87.651465],
			[41.885704, -87.641048],
			[41.885756, -87.631142],
			[41.885843, -87.628083],
			[41.884609, -87.626343],
			[41.882072, -87.626235],
			[41.879559, -87.626157],
			[41.877028, -87.628514],
			[41.876985, -87.631477],
			[41.879104, -87.633771],
			[41.883297, -87.633863]
		
		]
		if(index == 0 && WakeMe.app.pinkLineDirection == 'ToLoop') {
			Ext.Msg.alert('Oops!','There are no trains to the Loop stopping at 54/Cermak on this line. Please choose a different stop or direction.');
		}
		else if(index < 13 && WakeMe.app.pinkLineDirection == 'To54Cermak') {
			Ext.ComponentQuery.query('pinklinestops')[0].hide('slideOut');
			WakeMe.app.alarmStop = pinkLineStops[index+1];
			WakeMe.app.alarmSet = true;
			WakeMe.app.geocodedStop = pinkLineCoords[index+1];
			WakeMe.app.geo.setAutoUpdate(true);
			Ext.Msg.alert('Success!','Your alarm is set to go off at '+pinkLineStops[index+1]+'. Enjoy your nap! You can disable your alarm by tapping the "disable" button.',Ext.emptyFn);
		}
		else if(index == 14 && WakeMe.app.pinkLineDirection == 'To54Cermak') {
			Ext.Msg.alert('Oops!','There are no trains to 54/Cermak stopping at Clark/Lake on this line. Please choose a different stop or direction.');
		}
		else if(index == 13 && WakeMe.app.pinkLineDirection == 'To54Cermak') {
			Ext.ComponentQuery.query('pinklinestops')[0].hide('slideOut');
			WakeMe.app.alarmStop = 'Washington/Wells';
			WakeMe.app.alarmSet = true;
			WakeMe.app.geocodedStop = pinkLineCoords[22];
			WakeMe.app.geo.setAutoUpdate(true);
			Ext.Msg.alert('Success!','Your alarm is set to go off at Washington/Wells. Enjoy your nap! You can disable your alarm by tapping the "disable" button.',Ext.emptyFn);
		}
		else if(index > 13 && WakeMe.app.pinkLineDirection == 'To54Cermak') {
			Ext.ComponentQuery.query('pinklinestops')[0].hide('slideOut');
			WakeMe.app.alarmStop = pinkLineStops[index-1];
			WakeMe.app.alarmSet = true;
			WakeMe.app.geocodedStop = pinkLineCoords[index-1];
			WakeMe.app.geo.setAutoUpdate(true);
			Ext.Msg.alert('Success!','Your alarm is set to go off at '+pinkLineStops[index-1]+'. Enjoy your nap! You can disable your alarm by tapping the "disable" button.',Ext.emptyFn);
		}
		else {
			Ext.ComponentQuery.query('pinklinestops')[0].hide('slideOut');
			WakeMe.app.alarmStop = pinkLineStops[index-1];
			WakeMe.app.alarmSet = true;
			WakeMe.app.geocodedStop = pinkLineCoords[index-1];
			WakeMe.app.geo.setAutoUpdate(true);
			Ext.Msg.alert('Success!','Your alarm is set to go off at '+pinkLineStops[index-1]+'. Enjoy your nap! You can disable your alarm by tapping the "disable" button.',Ext.emptyFn);
		}
	}
});
