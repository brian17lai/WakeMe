Ext.define('WakeMe.controller.SetAlarmOrangeLine', {
	extend: 'Ext.app.Controller',
	requires: ['Ext.MessageBox'],
	config: {
		refs: {
			'orangeLineMidway': 'orangelinestops > button[text=Midway]',
			'orangeLinePulaski': 'orangelinestops > button[text=Pulaski]',
			'orangeLineKedzie': 'orangelinestops > button[text=Kedzie]',
			'orangeLineWestern': 'orangelinestops > button[text=Western]',
			'orangeLine35thArcher': 'orangelinestops > button[text=35th/Archer]',
			'orangeLineAshland': 'orangelinestops > button[text=Ashland]',
			'orangeLineHalsted': 'orangelinestops > button[text=Halsted]',
			'orangeLineRoosevelt': 'orangelinestops > button[text=Roosevelt]',
			'orangeLineHaroldWashingtonLibrary': 'orangelinestops > button[text=Harold Washington Library]',
			'orangeLineLaSalleVanBuren': 'orangelinestops > button[text=LaSalle/Van Buren]',
			'orangeLineQuincy': 'orangelinestops > button[text=Quincy]',
			'orangeLineWashingtonWells': 'orangelinestops > button[text=Washington/Wells]',
			'orangeLineClarkLake': 'orangelinestops > button[text=Clark/Lake]',
			'orangeLineStateLake': 'orangelinestops > button[text=State/Lake]',
			'orangeLineRandolphWabash': 'orangelinestops > button[text=Randolph/Wabash]',
			'orangeLineMadisonWabash': 'orangelinestops > button[text=Madison/Wabash]',
			'orangeLineAdamsWabash': 'orangelinestops > button[text=Adams/Wabash]'
			
		},
		control: {
			'orangeLineMidway': {
				tap: 'chooseOrangeLineStop'
			},
			'orangeLinePulaski': {
				tap: 'chooseOrangeLineStop'
			},
			'orangeLineKedzie': {
				tap: 'chooseOrangeLineStop'
			},
			'orangeLineWestern': {
				tap: 'chooseOrangeLineStop'
			},
			'orangeLine35thArcher': {
				tap: 'chooseOrangeLineStop'
			},
			'orangeLineAshland': {
				tap: 'chooseOrangeLineStop'
			},
			'orangeLineHalsted': {
				tap: 'chooseOrangeLineStop'
			},
			'orangeLineRoosevelt': {
				tap: 'chooseOrangeLineStop'
			},
			'orangeLineHaroldWashingtonLibrary': {
				tap: 'chooseOrangeLineStop'
			},
			'orangeLineLaSalleVanBuren': {
				tap: 'chooseOrangeLineStop'
			},
			'orangeLineQuincy': {
				tap: 'chooseOrangeLineStop'
			},
			'orangeLineWashingtonWells': {
				tap: 'chooseOrangeLineStop'
			},
			'orangeLineClarkLake': {
				tap: 'chooseOrangeLineStop'
			},
			'orangeLineStateLake': {
				tap: 'chooseOrangeLineStop'
			},
			'orangeLineRandolphWabash': {
				tap: 'chooseOrangeLineStop'
			},
			'orangeLineMadisonWabash': {
				tap: 'chooseOrangeLineStop'
			},
			'orangeLineAdamsWabash': {
				tap: 'chooseOrangeLineStop'
			}			
		}
	},
	chooseOrangeLineStop: function(b,e) {
		var index;
		if(b.getData() == 100) {
			index = 0;
		}
		else {
			index = b.getData();
		}
		var orangeLineStops = new Array();
		orangeLineStops = [
			'Midway',
			'Pulaski',
			'Kedzie',
			'Western',
			'35th/Archer',
			'Ashland',
			'Halsted',
			'Roosevelt',
			'Harold Washington Library-State/Van Buren',
			'LaSalle/Van Buren',
			'Quincy',
			'Washington/Wells',
			'Clark/Lake',
			'State/Lake',
			'Randolph/Wabash',
			'Madison/Wabash',
			'Adams/Wabash'
		];
		var orangeLineCoords = new Array();
		orangeLineCoords = [
			[41.785832, -87.738053],
			[41.800191, -87.723348],
			[41.804332, -87.704153],
			[41.804533, -87.684452],
			[41.829432, -87.680252],
			[41.839244, -87.665752],
			[41.847631, -87.645676],
			[41.867108, -87.626839],
			[41.877028, -87.628514],
			[41.876985, -87.631477],
			[41.879104, -87.633771],
			[41.883297, -87.633863],
			[41.885756, -87.631142],
			[41.885954, -87.627967],
			[41.884609, -87.626343],
			[41.882072, -87.626235],
			[41.879559, -87.626157]
			
		]
		if(index == 0 && WakeMe.app.orangeLineDirection == 'ToLoop') {
			Ext.Msg.alert('Oops!','There are no trains to the Loop stopping at Midway on this line. Please choose a different stop or direction.');
		}
		else if(index < 7 && WakeMe.app.orangeLineDirection == 'ToMidway') {
			Ext.ComponentQuery.query('orangelinestops')[0].hide('slideOut');
			WakeMe.app.alarmStop = orangeLineStops[index+1];
			WakeMe.app.alarmSet = true;
			WakeMe.app.geocodedStop = orangeLineCoords[index+1];
			WakeMe.app.geo.setAutoUpdate(true);
			Ext.Msg.alert('Success!','Your alarm is set to go off at '+orangeLineStops[index+1]+'. Enjoy your nap! You can disable your alarm by tapping the "disable" button.',Ext.emptyFn);
		}
		else if(index == 8 && WakeMe.app.orangeLineDirection == 'ToMidway') {
			Ext.Msg.alert('Oops!','There are no trains to Midway stopping at Harold Washington Library on this line. Please choose a different stop or direction.');
		}
		else if(index == 7 && WakeMe.app.orangeLineDirection == 'ToMidway') {
			Ext.ComponentQuery.query('orangelinestops')[0].hide('slideOut');
			WakeMe.app.alarmStop = 'Adams/Wabash';
			WakeMe.app.alarmSet = true;
			WakeMe.app.geocodedStop = orangeLineCoords[16];
			WakeMe.app.geo.setAutoUpdate(true);
			Ext.Msg.alert('Success!','Your alarm is set to go off at Adams/Wabash. Enjoy your nap! You can disable your alarm by tapping the "disable" button.',Ext.emptyFn);
		}
		else if(index > 8 && WakeMe.app.orangeLineDirection == 'ToMidway') {
			Ext.ComponentQuery.query('orangelinestops')[0].hide('slideOut');
			WakeMe.app.alarmStop = orangeLineStops[index-1];
			WakeMe.app.alarmSet = true;
			WakeMe.app.geocodedStop = orangeLineCoords[index-1];
			WakeMe.app.geo.setAutoUpdate(true);
			Ext.Msg.alert('Success!','Your alarm is set to go off at '+orangeLineStops[index-1]+'. Enjoy your nap! You can disable your alarm by tapping the "disable" button.',Ext.emptyFn);
		}
		else {
			Ext.ComponentQuery.query('orangelinestops')[0].hide('slideOut');
			WakeMe.app.alarmStop = orangeLineStops[index-1];
			WakeMe.app.alarmSet = true;
			WakeMe.app.geocodedStop = orangeLineCoords[index-1];
			WakeMe.app.geo.setAutoUpdate(true);
			Ext.Msg.alert('Success!','Your alarm is set to go off at '+orangeLineStops[index-1]+'. Enjoy your nap! You can disable your alarm by tapping the "disable" button.',Ext.emptyFn);
		}
	}
});
