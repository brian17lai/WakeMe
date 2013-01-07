Ext.define('WakeMe.controller.SetAlarmBrownLine', {
	extend: 'Ext.app.Controller',
	requires: ['Ext.MessageBox'],
	config: {
		refs: {
			'brownLineKimball': 'brownlinestops > button[text=Kimball]',
			'brownLineKedzie': 'brownlinestops > button[text=Kedzie]',
			'brownLineFrancisco': 'brownlinestops > button[text=Francisco]',
			'brownLineRockwell': 'brownlinestops > button[text=Rockwell]',
			'brownLineWestern': 'brownlinestops > button[text=Western]',
			'brownLineDamen': 'brownlinestops > button[text=Damen]',
			'brownLineMontrose': 'brownlinestops > button[text=Montrose]',
			'brownLineIrvingPark': 'brownlinestops > button[text=Irving Park]',
			'brownLineAddison': 'brownlinestops > button[text=Addison]',
			'brownLinePaulina': 'brownlinestops > button[text=Paulina]',
			'brownLineSouthport': 'brownlinestops > button[text=Southport]',
			'brownLineBelmont': 'brownlinestops > button[text=Belmont]',
			'brownLineWellington': 'brownlinestops > button[text=Wellington]',
			'brownLineDiversey': 'brownlinestops > button[text=Diversey]',
			'brownLineFullerton': 'brownlinestops > button[text=Fullerton]',
			'brownLineArmitage': 'brownlinestops > button[text=Armitage]',
			'brownLineSedgwick': 'brownlinestops > button[text=Sedgwick]',
			'brownLineChicago': 'brownlinestops > button[text=Chicago]',
			'brownLineMerchandiseMart': 'brownlinestops > button[text=Merchandise Mart]',
			'brownLineWashingtonWells': 'brownlinestops > button[text=Washington/Wells]',
			'brownLineQuincy': 'brownlinestops > button[text=Quincy]',
			'brownLineLaSalleVanBuren': 'brownlinestops > button[text=LaSalle/Van Buren]',
			'brownLineHaroldWashingtonLibrary': 'brownlinestops > button[text=Harold Washington Library]',
			'brownLineAdamsWabash': 'brownlinestops > button[text=Adams/Wabash]',
			'brownLineMadisonWabash': 'brownlinestops > button[text=Madison/Wabash]',
			'brownLineRandolphWabash': 'brownlinestops > button[text=Randolph/Wabash]',
			'brownLineStateLake': 'brownlinestops > button[text=State/Lake]',
			'brownLineClarkLake': 'brownlinestops > button[text=Clark/Lake]',
			'brownLineStops:': 'brownlinestops',
		},
		control: {
			'brownLineKimball': {
				tap: 'chooseBrownLineStop'
			},
			'brownLineKedzie': {
				tap: 'chooseBrownLineStop'
			},
			'brownLineFrancisco': {
				tap: 'chooseBrownLineStop'
			},
			'brownLineRockwell': {
				tap: 'chooseBrownLineStop'
			},
			'brownLineWestern': {
				tap: 'chooseBrownLineStop'
			},
			'brownLineDamen': {
				tap: 'chooseBrownLineStop'
			},
			'brownLineMontrose': {
				tap: 'chooseBrownLineStop'
			},
			'brownLineIrvingPark': {
				tap: 'chooseBrownLineStop'
			},
			'brownLineAddison': {
				tap: 'chooseBrownLineStop'
			},
			'brownLinePaulina': {
				tap: 'chooseBrownLineStop'
			},
			'brownLineSouthport': {
				tap: 'chooseBrownLineStop'
			},
			'brownLineBelmont': {
				tap: 'chooseBrownLineStop'
			},
			'brownLineWellington': {
				tap: 'chooseBrownLineStop'
			},
			'brownLineDiversey': {
				tap: 'chooseBrownLineStop'
			},
			'brownLineFullerton': {
				tap: 'chooseBrownLineStop'
			},
			'brownLineArmitage': {
				tap: 'chooseBrownLineStop'
			},
			'brownLineSedgwick': {
				tap: 'chooseBrownLineStop'
			},
			'brownLineChicago': {
				tap: 'chooseBrownLineStop'
			},
			'brownLineMerchandiseMart': {
				tap: 'chooseBrownLineStop'
			},
			'brownLineWashingtonWells': {
				tap: 'chooseBrownLineStop'
			},
			'brownLineQuincy': {
				tap: 'chooseBrownLineStop'
			},
			'brownLineLaSalleVanBuren': {
				tap: 'chooseBrownLineStop'
			},
			'brownLineHaroldWashingtonLibrary': {
				tap: 'chooseBrownLineStop'
			},
			'brownLineAdamsWabash': {
				tap: 'chooseBrownLineStop'
			},
			'brownLineMadisonWabash': {
				tap: 'chooseBrownLineStop'
			},
			'brownLineRandolphWabash': {
				tap: 'chooseBrownLineStop'
			},
			'brownLineStateLake': {
				tap: 'chooseBrownLineStop'
			},
			'brownLineClarkLake': {
				tap: 'chooseBrownLineStop'
			}
		}
	},
	chooseBrownLineStop: function(b,e) {
		var index;
		if(b.getData() == 100) {
			index = 0;
		}
		else {
			index = b.getData();
		}
		var brownLineStops = new Array();
		brownLineStops = [
			"Kimball",
			'Kedzie',
			'Francisco',
			'Rockwell',
			'Western',
			'Damen',
			'Montrose',
			'Irving Park',
			'Addison',
			'Paulina',
			'Southport',
			'Belmont',
			'Wellington',
			'Diversey',
			'Fullerton',
			'Armitage',
			'Sedgwick',
			'Chicago',
			'Merchandise Mart',
			'Washington/Wells',
			'Quincy',
			'LaSalle/Van Buren',
			'Harold Washington Library-State/Van Buren',
			'Adams/Wabash',
			'Madison/Wabash',
			'Randolph/Wabash',
			'State/Lake',
			'Clark/Lake'
		];
		var brownLineCoords = new Array();
		brownLineCoords = [
			[41.967873, -87.713526],
			[41.965912, -87.708513],
			[41.965852, -87.701133],
			[41.966293, -87.693739],
			[41.966331, -87.688956],
			[41.966349, -87.679156],
			[41.961631, -87.675356],
			[41.954332, -87.674989],
			[41.946932, -87.674780],
			[41.943492, -87.671335],
			[41.943849, -87.664022],
			[41.940032, -87.653413],
			[41.936332, -87.653300],
			[41.932632, -87.653254],
			[41.925432, -87.653340],
			[41.918132, -87.652501],
			[41.910432, -87.638653],
			[41.896560, -87.635890],
			[41.888640, -87.633989],
			[41.883297, -87.633863],
			[41.879104, -87.633771],
			[41.876985, -87.631477],
			[41.877028, -87.628514],
			[41.879559, -87.626157],
			[41.882072, -87.626235],
			[41.884609, -87.626343],
			[41.885954, -87.627967],
			[41.885756, -87.631142]
			
		]
		if(index == 0 && WakeMe.app.brownLineDirection == 'ToLoop') {
			Ext.Msg.alert('Oops!','There are no trains to the Loop stopping at Kimball on this line. Please choose a different stop or direction.');
		}
		else if(index < 18 && WakeMe.app.brownLineDirection == 'ToKimball') {
			Ext.ComponentQuery.query('brownlinestops')[0].hide('slideOut');
			WakeMe.app.alarmStop = brownLineStops[index+1];
			WakeMe.app.alarmSet = true;
			WakeMe.app.geocodedStop = brownLineCoords[index+1];
			WakeMe.app.geo.setAutoUpdate(true);
			Ext.Msg.alert('Success!','Your alarm is set to go off at '+brownLineStops[index+1]+'. Enjoy your nap! You can disable your alarm by tapping the "disable" button.',Ext.emptyFn);
		}
		else if(index == 19 && WakeMe.app.brownLineDirection == 'ToKimball') {
			Ext.Msg.alert('Oops!','There are no trains to Kimball stopping at Washington/Wells on this line. Please choose a different stop or direction.');
		}
		else if(index == 18 && WakeMe.app.brownLineDirection == 'ToKimball') {
			Ext.ComponentQuery.query('brownlinestops')[0].hide('slideOut');
			WakeMe.app.alarmStop = 'Clark/Lake';
			WakeMe.app.alarmSet = true;
			WakeMe.app.geocodedStop = brownLineCoords[27];
			WakeMe.app.geo.setAutoUpdate(true);
			Ext.Msg.alert('Success!','Your alarm is set to go off at Clark/Lake. Enjoy your nap! You can disable your alarm by tapping the "disable" button.',Ext.emptyFn);
		}
		else if(index > 19 && WakeMe.app.brownLineDirection == 'ToKimball') {
			Ext.ComponentQuery.query('brownlinestops')[0].hide('slideOut');
			WakeMe.app.alarmStop = brownLineStops[index-1];
			WakeMe.app.alarmSet = true;
			WakeMe.app.geocodedStop = brownLineCoords[index-1];
			WakeMe.app.geo.setAutoUpdate(true);
			Ext.Msg.alert('Success!','Your alarm is set to go off at '+brownLineStops[index-1]+'. Enjoy your nap! You can disable your alarm by tapping the "disable" button.',Ext.emptyFn);
		}
		else {
			Ext.ComponentQuery.query('brownlinestops')[0].hide('slideOut');
			WakeMe.app.alarmStop = brownLineStops[index-1];
			WakeMe.app.alarmSet = true;
			WakeMe.app.geocodedStop = brownLineCoords[index-1];
			WakeMe.app.geo.setAutoUpdate(true);
			Ext.Msg.alert('Success!','Your alarm is set to go off at '+brownLineStops[index-1]+'. Enjoy your nap! You can disable your alarm by tapping the "disable" button.',Ext.emptyFn);
		}
	}
});
