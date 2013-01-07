Ext.define('WakeMe.controller.SetAlarmBlueLine', {
	extend: 'Ext.app.Controller',
	requires: ['Ext.MessageBox'],
	config: {
		refs: {
			'blueLineStops': 'bluelinestops',
			'blueLineOHare': "bluelinestops > button[text=O'Hare]",
			'blueLineRosemont': 'bluelinestops > button[text=Rosemont]',
			'blueLineCumberland': 'bluelinestops > button[text=Cumberland]',
			'blueLineHarlemOHareBranch': "bluelinestops > button[text=Harlem(O'Hare Branch)]",
			'blueLineJeffersonPark': 'bluelinestops > button[text=Jefferson Park]',
			'blueLineMontrose': 'bluelinestops > button[text=Montrose]',
			'blueLineIrvingPark': 'bluelinestops > button[text=Irving Park]',
			'blueLineAddison': 'bluelinestops > button[text=Addison]',
			'blueLineBelmont': 'bluelinestops > button[text=Belmont]',
			'blueLineLoganSquare': 'bluelinestops > button[text=Logan Square]',
			'blueLineCalifornia': 'bluelinestops > button[text=California]',
			'blueLineWesternOHareBranch': "bluelinestops > button[text=Western(O'Hare Branch)]",
			'blueLineDamen': 'bluelinestops > button[text=Damen]',
			'blueLineDivision': 'bluelinestops > button[text=Division]',
			'blueLineChicago': 'bluelinestops > button[text=Chicago]',
			'blueLineGrand': 'bluelinestops > button[text=Grand]',
			'blueLineClarkLake': 'bluelinestops > button[text=Clark/Lake]',
			'blueLineWashington': 'bluelinestops > button[text=Washington]',
			'blueLineMonroe': 'bluelinestops > button[text=Monroe]',
			'blueLineJackson': 'bluelinestops > button[text=Jackson]',
			'blueLineLaSalle': 'bluelinestops > button[text=LaSalle]',
			'blueLineClinton': 'bluelinestops > button[text=Clinton]',
			'blueLineUICHalsted': 'bluelinestops > button[text=UIC-Halsted]',
			'blueLineRacine': 'bluelinestops > button[text=Racine]',
			'blueLineIllinoisMedicalDistrict': 'bluelinestops > button[text=Illinois Medical District]',
			'blueLineWesternForestParkBranch': 'bluelinestops > button[text=Western(Forest Park Branch)]',
			'blueLineKedzieHoman': 'bluelinestops > button[text=Kedzie-Homan]',
			'blueLinePulaski': 'bluelinestops > button[text=Pulaski]',
			'blueLineCicero': 'bluelinestops > button[text=Cicero]',
			'blueLineAustin': 'bluelinestops > button[text=Austin]',
			'blueLineOakPark': 'bluelinestops > button[text=Oak Park]',
			'blueLineHarlemForestParkBranch': 'bluelinestops > button[text=Harlem(Forest Park Branch)]',
			'blueLineForestPark': 'bluelinestops > button[text=Forest Park]'
		},
		control: {
			'blueLineOHare': {
				tap: 'chooseBlueLineStop'
			},
			'blueLineRosemont': {
				tap: 'chooseBlueLineStop'
			},
			'blueLineCumberland': {
				tap: 'chooseBlueLineStop'
			},
			'blueLineHarlemOHareBranch': {
				tap: 'chooseBlueLineStop'
			},
			'blueLineJeffersonPark': {
				tap: 'chooseBlueLineStop'
			},
			'blueLineMontrose': {
				tap: 'chooseBlueLineStop'
			},
			'blueLineIrvingPark': {
				tap: 'chooseBlueLineStop'
			},
			'blueLineAddison': {
				tap: 'chooseBlueLineStop'
			},
			'blueLineBelmont': {
				tap: 'chooseBlueLineStop'
			},
			'blueLineLoganSquare': {
				tap: 'chooseBlueLineStop'
			},
			'blueLineCalifornia': {
				tap: 'chooseBlueLineStop'
			},
			'blueLineWesternOHareBranch': {
				tap: 'chooseBlueLineStop'
			},
			'blueLineDamen': {
				tap: 'chooseBlueLineStop'
			},
			'blueLineDivision': {
				tap: 'chooseBlueLineStop'
			},
			'blueLineChicago': {
				tap: 'chooseBlueLineStop'
			},
			'blueLineGrand': {
				tap: 'chooseBlueLineStop'
			},
			'blueLineClarkLake': {
				tap: 'chooseBlueLineStop'
			},
			'blueLineWashington': {
				tap: 'chooseBlueLineStop'
			},
			'blueLineMonroe': {
				tap: 'chooseBlueLineStop'
			},
			'blueLineJackson': {
				tap: 'chooseBlueLineStop'
			},
			'blueLineLaSalle': {
				tap: 'chooseBlueLineStop'
			},
			'blueLineClinton': {
				tap: 'chooseBlueLineStop'
			},
			'blueLineUICHalsted': {
				tap: 'chooseBlueLineStop'
			},
			'blueLineRacineIllinoisMedicalDistrict': {
				tap: 'chooseBlueLineStop'
			},
			'blueLineWesternForestParkBranch': {
				tap: 'chooseBlueLineStop'
			},
			'blueLineKedzieHoman': {
				tap: 'chooseBlueLineStop'
			},
			'blueLinePulaski': {
				tap: 'chooseBlueLineStop'
			},
			'blueLineCicero': {
				tap: 'chooseBlueLineStop'
			},
			'blueLineAustin': {
				tap: 'chooseBlueLineStop'
			},
			'blueLineOakPark': {
				tap: 'chooseBlueLineStop'
			},
			'blueLineHarlemForestParkBranch': {
				tap: 'chooseBlueLineStop'
			},
			'blueLineForestPark': {
				tap: 'chooseBlueLineStop'
			},
		},
	},
	chooseBlueLineStop: function(b,e) {
		var index;
		if(b.getData() == 100) {
			index = 0;
		}
		else {
			index = b.getData();
		}
		var blueLineStops = new Array();
		blueLineStops = [
			"O'Hare",
			'Rosemont',
			'Cumberland',
			"Harlem(O'Hare Branch)",
			'Jefferson Park',
			'Montrose',
			'Irving Park',
			'Addison',
			'Belmont',
			'Logan Square',
			'California',
			"Western(O'Hare Branch)",
			'Damen',
			'Division',
			'Chicago',
			'Grand',
			'Clark/Lake',
			'Washington',
			'Monroe',
			'Jackson',
			'LaSalle',
			'Clinton',
			'UIC-Halsted',
			'Racine',
			'Illinois Medical District',
			'Western(Forest Park Branch)',
			'Kedzie-Homan',
			'Pulaski',
			'Cicero',
			'Austin',
			'Oak Park',
			'Harlem(Forest Park Branch)',
			'Forest Park'
			];
		var blueLineCoords = new Array();
		blueLineCoords = [
			[null],
			[41.984703, -87.860838],
			[41.984330, -87.836662],
			[41.982144, -87.806982],
			[41.970341, -87.762917],
			[41.960519, -87.743098],
			[41.953532, -87.730190],
			[41.946331, -87.718432],
			[41.939231, -87.711780],
			[41.929196, -87.707705],
			[41.922432, -87.697455],
			[41.915832, -87.687555],
			[41.910365, -87.677554],
			[41.903432, -87.666654],
			[41.896332, -87.655553],
			[41.891289, -87.647832],
			[41.885756, -87.631142],
			[41.882038, -87.629496],
			[41.880432, -87.629406],
			[41.878832, -87.629352],
			[41.875690, -87.632635],
			[41.876182, -87.641052],
			[41.876232, -87.647052],
			[41.876132, -87.656953],
			[41.876053, -87.676477],
			[41.875948, -87.686323],
			[41.874519, -87.705892],
			[41.874132, -87.725255],
			[41.871842, -87.744904],
			[41.866966, -87.774071],
			[41.871317, -87.793957],
			[41.873584, -87.804527],
			[null]
		
		]
		if(blueLineStops[index] == "O'Hare" && WakeMe.app.blueLineDirection == 'ToForestPark') {
			Ext.Msg.alert('Oops!',"There are no southbound trains to O'Hare on this line. Please choose a different stop or direction.");
		}
		else if(blueLineStops[index] == 'Forest Park' && WakeMe.app.blueLineDirection == 'ToOHare') {
			Ext.Msg.alert('Oops!','There are no northbound trains to Forest Park on this line. Please choose a different stop or direction.');
		}
		else if(WakeMe.app.blueLineDirection == 'ToForestPark') {
			this.getBlueLineStops().hide('slideOut');
			WakeMe.app.alarmStop = blueLineStops[index-1];
			WakeMe.app.alarmSet = true;
			WakeMe.app.geocodedStop = blueLineCoords[index-1];
			WakeMe.app.geo.setAutoUpdate(true);
			Ext.Msg.alert('Success!','Your alarm is set to go off at '+blueLineStops[index-1]+'. Enjoy your nap! You can disable your alarm by tapping the "disable" button.',Ext.emptyFn);
		}
		else {
			this.getBlueLineStops().hide('slideOut');
			WakeMe.app.alarmStop = blueLineStops[index+1];
			WakeMe.app.alarmSet = true;
			WakeMe.app.geocodedStop = blueLineCoords[index+1];
			WakeMe.app.geo.setAutoUpdate(true);
			Ext.Msg.alert('Success!','Your alarm is set to go off at '+blueLineStops[index+1]+'. Enjoy your nap! You can disable your alarm by tapping the "disable" button.',Ext.emptyFn);
		}
	}
});		
			











