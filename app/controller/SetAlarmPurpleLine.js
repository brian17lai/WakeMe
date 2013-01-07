Ext.define('WakeMe.controller.SetAlarmPurpleLine', {
	extend: 'Ext.app.Controller',
	requires: ['Ext.MessageBox'],
	config: {
		refs: {
			'purpleLineLinden': 'purplelinestops > button[text=Linden]',
			'purpleLineCentral': 'purplelinestops > button[text=Central]',
			'purpleLineNoyes': 'purplelinestops > button[text=Noyes]',
			'purpleLineFoster': 'purplelinestops > button[text=Foster]',
			'purpleLineDavis': 'purplelinestops > button[text=Davis]',
			'purpleLineDempster': 'purplelinestops > button[text=Dempster]',
			'purpleLineMain': 'purplelinestops > button[text=Main]',
			'purpleLineSouthBlvd': 'purplelinestops > button[text=South Boulevard]',
			'purpleLineHoward': 'purplelinestops > button[text=Howard]',
			'purpleLineBelmont': 'purplelinestops > button[text=Belmont]',
			'purpleLineWellington': 'purplelinestops > button[text=Wellington]',
			'purpleLineDiversey': 'purplelinestops > button[text=Diversey]',
			'purpleLineFullerton': 'purplelinestops > button[text=Fullerton]',
			'purpleLineArmitage': 'purplelinestops > button[text=Armitage]',
			'purpleLineSedgwick': 'purplelinestops > button[text=Sedgwick]',
			'purpleLineChicago': 'purplelinestops > button[text=Chicago]',
			'purpleLineMerchandiseMart': 'purplelinestops > button[text=Merchandise Mart]',
			'purpleLineClarkLake': 'purplelinestops > button[text=Clark/Lake]',
			'purpleLineStateLake': 'purplelinestops > button[text=State/Lake]',
			'purpleLineRandolphWabash': 'purplelinestops > button[text=Randolph/Wabash]',
			'purpleLineMadisonWabash': 'purplelinestops > button[text=Madison/Wabash]',
			'purpleLineAdamsWabash': 'purplelinestops > button[text=Adams/Wabash]',
			'purpleLineHaroldWashingtonLibrary': 'purplelinestops > button[text=Harold Washington Library]',
			'purpleLineLaSalleVanBuren': 'purplelinestops > button[text=LaSalle/Van Buren]',
			'purpleLineQuincy': 'purplelinestops > button[text=Quincy]',
			'purpleLineWashingtonWells': 'purplelinestops > button[text=Washington/Wells]',
		},
		control: {
			'purpleLineLinden': {
				tap: 'choosePurpleLineStop'
			},
			'purpleLineCentral': {
				tap: 'choosePurpleLineStop'
			},
			'purpleLineNoyes': {
				tap: 'choosePurpleLineStop'
			},
			'purpleLineFoster': {
				tap: 'choosePurpleLineStop'
			},
			'purpleLineDavis': {
				tap: 'choosePurpleLineStop'
			},
			'purpleLineDempster': {
				tap: 'choosePurpleLineStop'
			},
			'purpleLineMain': {
				tap: 'choosePurpleLineStop'
			},
			'purpleLineSouthBlvd': {
				tap: 'choosePurpleLineStop'
			},
			'purpleLineHoward': {
				tap: 'choosePurpleLineStop'
			},
			'purpleLineBelmont': {
				tap: 'choosePurpleLineStop'
			},
			'purpleLineWellington': {
				tap: 'choosePurpleLineStop'
			},
			'purpleLineDiversey': {
				tap: 'choosePurpleLineStop'
			},
			'purpleLineFullerton': {
				tap: 'choosePurpleLineStop'
			},
			'purpleLineArmitage': {
				tap: 'choosePurpleLineStop'
			},
			'purpleLineSedgwick': {
				tap: 'choosePurpleLineStop'
			},
			'purpleLineChicago': {
				tap: 'choosePurpleLineStop'
			},
			'purpleLineMerchandiseMart': {
				tap: 'choosePurpleLineStop'
			},
			'purpleLineClarkLake': {
				tap: 'choosePurpleLineStop'
			},
			'purpleLineStateLake': {
				tap: 'choosePurpleLineStop'
			},
			'purpleLineRandolphWabash': {
				tap: 'choosePurpleLineStop'
			},
			'purpleLineMadisonWabash': {
				tap: 'choosePurpleLineStop'
			},
			'purpleLineAdamsWabash': {
				tap: 'choosePurpleLineStop'
			},
			'purpleLineHaroldWashingtonLibrary': {
				tap: 'choosePurpleLineStop'
			},
			'purpleLineLaSalleVanBuren': {
				tap: 'choosePurpleLineStop'
			},
			'purpleLineQuincy': {
				tap: 'choosePurpleLineStop'
			},
			'purpleLineWashingtonWells': {
				tap: 'choosePurpleLineStop'
			}
		}
	},
	choosePurpleLineStop: function(b,e) {
		var index;
		if(b.getData() == 100) {
			index = 0;
		}
		else {
			index = b.getData();
		}
		var purpleLineStops = new Array();
		purpleLineStops = [
			'Linden',
			'Central',
			'Noyes',
			'Foster',
			'Davis',
			'Dempster',
			'Main',
			'South Boulevard',
			'Howard',
			'Belmont',
			'Wellington',
			'Diversey',
			'Fullerton',
			'Armitage',
			'Sedgwick',
			'Chicago',
			'Merchandise Mart',
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
		var purpleLineCoords = new Array();
		purpleLineCoords = [
			[42.073720, -87.691920],
			[42.064233, -87.685762],
			[42.058529, -87.683758],
			[42.053929, -87.683958],
			[42.047301, -87.683770],
			[42.041457, -87.682440],
			[42.033011, -87.679413],
			[42.027730, -87.679358],
			[42.019279, -87.672495],
			[41.940032, -87.653413],
			[41.936332, -87.653300],
			[41.932632, -87.653254],
			[41.925432, -87.653340],
			[41.918132, -87.652501],
			[41.910432, -87.638653],
			[41.896560, -87.635890],
			[41.888640, -87.633989], 
			[41.885954, -87.627967],
			[41.885843, -87.628083],
			[41.884609, -87.626343],
			[41.882072, -87.626235],
			[41.879559, -87.626157],
			[41.877028, -87.628514],
			[41.876985, -87.631477],
			[41.879104, -87.633771],
			[41.883297, -87.633863]
		]
		if(index == 0 && WakeMe.app.purpleLineDirection == 'ToLoop') {
			Ext.Msg.alert('Oops!','There are no trains to the Loop stopping at Linden on this line. Please choose a different stop or direction.');
		}
		else if(index > 8 && WakeMe.app.purpleLineDirection == 'ToHoward') {
			Ext.Msg.alert('Oops!','There are no trains to Howard stopping at '+purpleLineStops[index]+' on this line. Please choose a different stop or direction.');
		}
		else if(index < 16 && WakeMe.app.purpleLineDirection == 'ToLinden') {
			Ext.ComponentQuery.query('purplelinestops')[0].hide('slideOut');
			WakeMe.app.alarmStop = purpleLineStops[index+1];
			WakeMe.app.alarmSet = true;
			WakeMe.app.geocodedStop = purpleLineCoords[index+1];
			WakeMe.app.geo.setAutoUpdate(true);
			Ext.Msg.alert('Success!','Your alarm is set to go off at '+purpleLineStops[index+1]+'. Enjoy your nap! You can disable your alarm by tapping the "disable" button.',Ext.emptyFn);
		}
		else if(index == 17 && WakeMe.app.purpleLineDirection == 'ToLinden') {
			Ext.Msg.alert('Oops!','There are no trains to Linden stopping at Clark/Lake on this line. Please choose a different stop or direction.');
		}
		else if(index == 16 && WakeMe.app.purpleLineDirection == 'ToLinden') {
			Ext.ComponentQuery.query('purplelinestops')[0].hide('slideOut');
			WakeMe.app.alarmStop = 'Washington/Wells';
			WakeMe.app.alarmSet = true;
			WakeMe.app.geocodedStop = purpleLineCoords[25];
			WakeMe.app.geo.setAutoUpdate(true);
			Ext.Msg.alert('Success!','Your alarm is set to go off at Washington/Wells. Enjoy your nap! You can disable your alarm by tapping the "disable" button.',Ext.emptyFn);
		}
		else if(index > 17 && WakeMe.app.purpleLineDirection == 'ToLinden') {
			Ext.ComponentQuery.query('purplelinestops')[0].hide('slideOut');
			WakeMe.app.alarmStop = purpleLineStops[index-1];
			WakeMe.app.alarmSet = true;
			WakeMe.app.geocodedStop = purpleLineCoords[index-1];
			WakeMe.app.geo.setAutoUpdate(true);
			Ext.Msg.alert('Success!','Your alarm is set to go off at '+purpleLineStops[index-1]+'. Enjoy your nap! You can disable your alarm by tapping the "disable" button.',Ext.emptyFn);
		}
		else {
			Ext.ComponentQuery.query('purplelinestops')[0].hide('slideOut');
			WakeMe.app.alarmStop = purpleLineStops[index-1];
			WakeMe.app.alarmSet = true;
			WakeMe.app.geocodedStop = purpleLineCoords[index-1];
			WakeMe.app.geo.setAutoUpdate(true);
			Ext.Msg.alert('Success!','Your alarm is set to go off at '+purpleLineStops[index-1]+'. Enjoy your nap! You can disable your alarm by tapping the "disable" button.',Ext.emptyFn);
		}
	}
});
