Ext.define('WakeMe.controller.SetAlarmGreenLine', {
	extend: 'Ext.app.Controller',
	requires: ['Ext.MessageBox'],
	config: {
		refs: {
			'greenLineHarlemLake': 'greenlinestops > button[text=Harlem/Lake]',
			'greenLineOakPark': 'greenlinestops > button[text=Oak Park]',
			'greenLineRidgeland': 'greenlinestops > button[text=Ridgeland]',
			'greenLineAustin': 'greenlinestops > button[text=Austin]',
			'greenLineCentral': 'greenlinestops > button[text=Central]',
			'greenLineLaramie': 'greenlinestops > button[text=Laramie]',
			'greenLineCicero': 'greenlinestops > button[text=Cicero]',
			'greenLinePulaski': 'greenlinestops > button[text=Pulaski]',
			'greenLineConservatoryCentralParkDrive': 'greenlinestops > button[text=Conservatory-Central Park Drive]',
			'greenLineKedzie': 'greenlinestops > button[text=Kedzie]',
			'greenLineCalifornia': 'greenlinestops > button[text=California]',
			'greenLineAshland': 'greenlinestops > button[text=Ashland]',
			'greenLineMorgan': 'greenlinestops > button[text=Morgan]',
			'greenLineClinton': 'greenlinestops > button[text=Clinton]',
			'greenLineClarkLake': 'greenlinestops > button[text=Clark/Lake]',
			'greenLineStateLake': 'greenlinestops > button[text=StateLake]',
			'greenLineRandolphWabash': 'greenlinestops > button[text=Randolph/Wabash]',
			'greenLineMadisonWabash': 'greenlinestops > button[text=Madison/Wabash]',
			'greenLineAdamsWabash': 'greenlinestops > button[text=Adams/Wabash]',
			'greenLineRoosevelt': 'greenlinestops > button[text=Roosevelt]',
			'greenLine35thBronzevilleIIT': 'greenlinestops > button[text=35th-Bronzeville-IIT]',
			'greenLineIndiana': 'greenlinestops > button[text=Indiana]',
			'greenLine43rd': 'greenlinestops > button[text=43rd]',
			'greenLine47th': 'greenlinestops > button[text=47th]',
			'greenLine51st': 'greenlinestops > button[text=51st]',
			'greenLineGarfield': 'greenlinestops > button[text=Garfield]',
			'greenLineKingDrive': 'greenlinestops > button[text=King Drive]',
			'greenLineCottageGrove': 'greenlinestops > button[text=Cottage Grove]',
			'greenLineHalsted': 'greenlinestops > button[text=Halsted]',
			'greenLineAshland63rd': 'greenlinestops > button[text=Ashland/63rd]'
		},
		control: {
			'greenLineHarlemLake': {
				tap: 'chooseGreenLineStop'
			},
			'greenLineOakPark': {
				tap: 'chooseGreenLineStop'
			},
			'greenLineRidgeland': {
				tap: 'chooseGreenLineStop'
			},
			'greenLineAustin': {
				tap: 'chooseGreenLineStop'
			},
			'greenLineCentral': {
				tap: 'chooseGreenLineStop'
			},
			'greenLineLaramie': {
				tap: 'chooseGreenLineStop'
			},
			'greenLineCicero': {
				tap: 'chooseGreenLineStop'
			},
			'greenLinePulaski': {
				tap: 'chooseGreenLineStop'
			},
			'greenLineConservatoryCentralParkDrive': {
				tap: 'chooseGreenLineStop'
			},
			'greenLineKedzie': {
				tap: 'chooseGreenLineStop'
			},
			'greenLineCalifornia': {
				tap: 'chooseGreenLineStop'
			},
			'greenLineAshland': {
				tap: 'chooseGreenLineStop'
			},
			'greenLineMorgan': {
				tap: 'chooseGreenLineStop'
			},
			'greenLineClinton': {
				tap: 'chooseGreenLineStop'
			},
			'greenLineClarkLake': {
				tap: 'chooseGreenLineStop'
			},
			'greenLineStateLake': {
				tap: 'chooseGreenLineStop'
			},
			'greenLineRandolphWabash': {
				tap: 'chooseGreenLineStop'
			},
			'greenLineMadisonWabas': {
				tap: 'chooseGreenLineStop'
			},
			'greenLineAdamsWabash': {
				tap: 'chooseGreenLineStop'
			},
			'greenLineRoosevelt': {
				tap: 'chooseGreenLineStop'
			},
			'greenLine35thBronzevilleIIT': {
				tap: 'chooseGreenLineStop'
			},
			'greenLineIndiana': {
				tap: 'chooseGreenLineStop'
			},
			'greenLine43rd': {
				tap: 'chooseGreenLineStop'
			},
			'greenLine47th': {
				tap: 'chooseGreenLineStop'
			},
			'greenLine51st': {
				tap: 'chooseGreenLineStop'
			},
			'greenLineGarfield': {
				tap: 'chooseGreenLineStop'
			},
			'greenLineKingDrive': {
				tap: 'chooseGreenLineStop'
			},
			'greenLineCottageGrove': {
				tap: 'chooseGreenLineStop'
			},
			'greenLineHalsted': {
				tap: 'chooseGreenLineStop'
			},
			'greenLineAshland63rd': {
				tap: 'chooseGreenLineStop'
			}
		}
	},
	chooseGreenLineStop: function(b,e) {
		var index;
		if(b.getData() == 100) {
			index = 0;
		}
		else {
			index = b.getData();
		}
		var greenLineStops = new Array();
		greenLineStops = [
			'Harlem/Lake',
			'Oak Park',
			'Ridgeland',
			'Austin',
			'Central',
			'Laramie',
			'Cicero',
			'Pulaski',
			'Conservatory-Central Park Drive',
			'Kedzie',
			'California',
			'Ashland',
			'Morgan',
			'Clinton',
			'Clark/Lake',
			'State/Lake',
			'Randolph/Wabash',
			'Madison/Wabash',
			'Adams/Wabash',
			'Roosevelt',
			'35th-Bronzeville-IIT',
			'Indiana',
			'43rd',
			'47th',
			'51st',
			'Garfield',
			'King Drive',
			'Cottage Grove',
			'Halsted',
			'Ashland/63rd'
			];
		var greenLineCoords = new Array();
		greenLineCoords = [
			[null],
			[41.886831, -87.794358],
			[41.887631, -87.784658],
			[41.886323, -87.774784],
			[41.887940, -87.765071],
			[41.887051, -87.753823],
			[41.886598, -87.745724],
			[41.885450, -87.726062],
			[41.884992, -87.717178],
			[41.884419, -87.706693],
			[41.854487, -87.695521],
			[41.885340, -87.667043],
			[41.885579, -87.651465],
			[41.885704, -87.641048],
			[41.885756, -87.631142],
			[41.885954, -87.627967],
			[41.885843, -87.628083],
			[41.884609, -87.626343],
			[41.882072, -87.626235],
			[41.879559, -87.626157],
			[41.867108, -87.626839],
			[41.831033, -87.625850],
			[41.821687, -87.621563],
			[41.816633, -87.619150],
			[41.809328, -87.619041],
			[41.802033, -87.618482],
			[41.794272, -87.618384],
			[41.780133, -87.615849],
			[41.780334, -87.606048],
			[41.779326, -87.644953],
			[41.778970, -87.664416]
			
		]
		if(index == 29 && WakeMe.app.greenLineDirection == 'ToHarlem') {
			Ext.Msg.alert('Oops!','There are no trains to Harlem stopping at Ashland/63rd on this line. Please choose a different stop or direction.');
		}
		else if(index == 27 && WakeMe.app.greenLineDirection == 'ToHarlem') {
			Ext.Msg.alert('Oops!','There are no trains to Harlem stopping at Cottage Grove on this line. Please choose a different stop or direction.');
		}
		else if(index == 29 && WakeMe.app.greenLineDirection == 'ToAshland63rd') {
			Ext.ComponentQuery.query('greenlinestops')[0].hide('slideOut');
			WakeMe.app.alarmStop = 'Halsted';
			WakeMe.app.alarmSet = true;
			WakeMe.app.geocodedStop = greenLineCoords[28];
			WakeMe.app.geo.setAutoUpdate(true);
			Ext.Msg.alert('Success!','Your alarm is set to go off at Halsted. Enjoy your nap! You can disable your alarm by tapping the "disable" button.',Ext.emptyFn);
		}
		else if(index == 28 && WakeMe.app.greenLineDirection == 'ToAshland63rd') {
			Ext.ComponentQuery.query('greenlinestops')[0].hide('slideOut');
			WakeMe.app.alarmStop = 'Garfield';
			WakeMe.app.alarmSet = true;
			WakeMe.app.geocodedStop = greenLineCoords[25];
			WakeMe.app.geo.setAutoUpdate(true);
			Ext.Msg.alert('Success!','Your alarm is set to go off at Garfield. Enjoy your nap! You can disable your alarm by tapping the "disable" button.',Ext.emptyFn);
		}
		else if(index == 29 && WakeMe.app.greenLineDirection == 'ToCottageGrove') {
			Ext.Msg.alert('Oops!','There are no trains to Cottage Grove stopping at Ashland/63rd on this line. Please choose a different stop or direction.');
		}
		else if(index == 28 && WakeMe.app.greenLineDirection == 'ToCottageGrove') {
			Ext.Msg.alert('Oops!','There are no trains to Cottage Grove stopping at Halsted on this line. Please choose a different stop or direction.');
		}
		else if(index == 27 && WakeMe.app.greenLineDirection == 'ToAshland63rd') {
			Ext.Msg.alert('Oops!','There are no trains to Ashland/63rd stopping at Cottage Grove on this line. Please choose a different stop or direction.');
		}
		else if(index == 26 && WakeMe.app.greenLineDirection == 'ToAshland63rd') {
			Ext.Msg.alert('Oops!','There are no trains to Ashland/63rd stopping at King Drive on this line. Please choose a different stop or direction.');
		}
		else if(index == 25 && WakeMe.app.greenLineDirection == 'ToHarlem') {
			Ext.Msg.alert("Let's be real",'There is not enough time for you to take a nap between here and Garfield.');
		}
		else if(WakeMe.app.greenLineDirection == 'ToHarlem') {
			Ext.ComponentQuery.query('greenlinestops')[0].hide('slideOut');
			WakeMe.app.alarmStop = greenLineStops[index+1];
			WakeMe.app.alarmSet = true;
			WakeMe.app.geocodedStop = greenLineCoords[index+1];
			WakeMe.app.geo.setAutoUpdate(true);
			Ext.Msg.alert('Success!','Your alarm is set to go off at '+greenLineStops[index+1]+'. Enjoy your nap! You can disable your alarm by tapping the "disable" button.',Ext.emptyFn);
		}
		else {
			Ext.ComponentQuery.query('greenlinestops')[0].hide('slideOut');
			WakeMe.app.alarmStop = greenLineStops[index-1];
			WakeMe.app.alarmSet = true;
			WakeMe.app.geocodedStop = greenLineCoords[index-1];
			WakeMe.app.geo.setAutoUpdate(true);
			Ext.Msg.alert('Success!','Your alarm is set to go off at '+greenLineStops[index-1]+'. Enjoy your nap! You can disable your alarm by tapping the "disable" button.',Ext.emptyFn);
		}
	}
});
