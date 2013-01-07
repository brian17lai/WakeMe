Ext.define('WakeMe.controller.TrainDirection', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			'redLineButton': 'button[text=Red Line]',
			'blueLineButton': 'button[text=Blue Line]',
			'brownLineButton': 'button[text=Brown Line]',
			'greenLineButton': 'button[text=Green Line]',
			'orangeLineButton': 'button[text=Orange Line]',
			'purpleLineButton': 'button[text=Purple Line]',
			'pinkLineButton': 'button[text=Pink Line]',
			'redLineDirectionPanel': 'redlinedirectionpanel',
			'blueLineDirectionPanel': 'bluelinedirectionpanel',
			'brownLineDirectionPanel': 'brownlinedirectionpanel',
			'greenLineDirectionPanel': 'greenlinedirectionpanel',
			'orangeLineDirectionPanel': 'orangelinedirectionpanel',
			'purpleLineDirectionPanel': 'purplelinedirectionpanel',
			'pinkLineDirectionPanel': 'pinklinedirectionpanel',
			'backButtonRedLine': 'button[text=Back][style=background:red]',
			'backButtonBlueLine': 'button[text=Back][style=background:#00a1de]',
			'backButtonBrownLine': 'button[text=Back][style=background:#62361b]',
			'backButtonGreenLine': 'button[text=Back][style=background:green]',
			'backButtonOrangeLine': 'button[text=Back][style=background:#f9461c]',
			'backButtonPurpleLine': 'button[text=Back][style=background:#522398]',
			'backButtonPinkLine': 'button[text=Back][style=background:#e27ea6]',
			'to95thDanRyan': 'button[text=To 95th/Dan Ryan]',
			'toHowardRedLine': 'redlinedirectionpanel > button[text=To Howard]',
			'toOHare': "button[text=To O'Hare]",
			'toForestPark': 'button[text=To Forest Park]',
			'toKimball': 'button[text=To Kimball]',
			'toLoopBrownLine': 'brownlinedirectionpanel > button[text=To Loop]',
			'toHarlem': 'button[text=To Harlem]',
			'toCottageGrove': 'button[text=To Cottage Grove]',
			'toAshland/63rd': 'button[text=To Ashland/63rd]',
			'toMidway': 'button[text=To Midway]',
			'toLoopOrangeLine': 'orangelinedirectionpanel > button[text=To Loop]',
			'toHowardPurpleLine': 'purplelinedirectionpanel > button[text=To Howard]',
			'toLinden': 'button[text=To Linden]',
			'toLoopPurpleLine': 'purplelinedirectionpanel > button[text=To Loop]',
			'to54th/Cermak': 'button[text=To 54th/Cermak]',
			'toLoopPinkLine': 'pinklinedirectionpanel > button[text=To Loop]',			
			'redLineStopsPanel': 'redlinestops',
			'blueLineStopsPanel': 'bluelinestops',
			'brownLineStopsPanel': 'brownlinestops',
			'greenLineStopsPanel': 'greenlinestops',
			'orangeLineStopsPanel': 'orangelinestops',
			'purpleLineStopsPanel': 'purplelinestops',
			'pinkLineStopsPanel': 'pinklinestops',
			'backButtonMainRed': 'button[text=Back][data=stopsPanel][style=background:red]',
			'backButtonMainBlue': 'button[text=Back][data=stopsPanel][style=background:#00a1de]',
			'backButtonMainBrown': 'button[text=Back][data=stopsPanel][style=background:#62361b]',
			'backButtonMainGreen': 'button[text=Back][data=stopsPanel][style=background:green]',
			'backButtonMainOrange': 'button[text=Back][data=stopsPanel][style=background:#f9461c]',
			'backButtonMainPurple': 'button[text=Back][data=stopsPanel][style=background:#522398]',
			'backButtonMainPink': 'button[text=Back][data=stopsPanel][style=background:#e27ea6]',
		},
		control: {
			'redLineButton': {
				tap: 'showRedLineDirectionPanel'
			},
			'blueLineButton': {
				tap: 'showBlueLineDirectionPanel'
			},
			'brownLineButton': {
				tap: 'showBrownLineDirectionPanel'
			},
			'greenLineButton': {
				tap: 'showGreenLineDirectionPanel'
			},
			'orangeLineButton': {
				tap: 'showOrangeLineDirectionPanel'
			},
			'purpleLineButton': {
				tap: 'showPurpleLineDirectionPanel'
			},
			'pinkLineButton': {
				tap: 'showPinkLineDirectionPanel'
			},
			'backButtonRedLine': {
				tap: 'hideRedLineDirectionPanel'
			},
			'backButtonBlueLine': {
				tap: 'hideBlueLineDirectionPanel'
			},
			'backButtonBrownLine': {
				tap: 'hideBrownLineDirectionPanel'
			},
			'backButtonGreenLine': {
				tap: 'hideGreenLineDirectionPanel'
			},
			'backButtonOrangeLine': {
				tap: 'hideOrangeLineDirectionPanel'
			},
			'backButtonPurpleLine': {
				tap: 'hidePurpleLineDirectionPanel'
			},
			'backButtonPinkLine': {
				tap: 'hidePinkLineDirectionPanel'
			},
			'to95thDanRyan': {
				tap: 'showRedLineStopsPanelSouthbound'
			},
			'toHowardRedLine': {
				tap: 'showRedLineStopsPanelNorthbound'
			},
			'toOHare': {
				tap: 'showBlueLineStopsPanelToOhare'
			},
			'toForestPark': {
				tap: 'showBlueLineStopsPanelToForestPark'
			},
			'toKimball': {
				tap: 'showBrownLineStopsPanelToKimball'
			},
			'toLoopBrownLine': {
				tap: 'showBrownLineStopsPanelToLoop'
			},
			'toHarlem': {
				tap: 'showGreenLineStopsPanelToHarlem'
			},
			'toCottageGrove': {
				tap: 'showGreenLineStopsPanelToCottageGrove'
			},
			'toAshland/63rd': {
				tap: 'showGreenLineStopsPanelToAshland63rd'
			},
			'toMidway': {
				tap: 'showOrangeLineStopsPanelToMidway'
			},
			'toLoopOrangeLine': {
				tap: 'showOrangeLineStopsPanelToLoop'
			},
			'toHowardPurpleLine': {
				tap: 'showPurpleLineStopsPanelToHoward'
			},
			'toLinden': {
				tap: 'showPurpleLineStopsPanelToLinden'
			},
			'toLoopPurpleLine': {
				tap: 'showPurpleLineStopsPanelToLoop'
			},
			'to54th/Cermak': {
				tap: 'showPinkLineStopsPanelTo54thCermak'
			},
			'toLoopPinkLine': {
				tap: 'showPinkLineStopsPanelToLoop'
			},
			'backButtonMainRed': {
				tap: 'hideRedLineStopsPanel'
			},
			'backButtonMainBlue': {
				tap: 'hideBlueLineStopsPanel'
			},
			'backButtonMainBrown': {
				tap: 'hideBrownLineStopsPanel'
			},
			'backButtonMainGreen': {
				tap: 'hideGreenLineStopsPanel'
			},
			'backButtonMainOrange': {
				tap: 'hideOrangeLineStopsPanel'
			},
			'backButtonMainPurple': {
				tap: 'hidePurpleLineStopsPanel'
			},
			'backButtonMainPink': {
				tap: 'hidePinkLineStopsPanel'
			}
		}
	},
	showRedLineDirectionPanel: function() {
		this.getRedLineDirectionPanel().show('slide');
	},
	showBlueLineDirectionPanel: function() {
		this.getBlueLineDirectionPanel().show('slide');
	},
	showBrownLineDirectionPanel: function() {
		this.getBrownLineDirectionPanel().show('slide');
	},
	showGreenLineDirectionPanel: function() {
		this.getGreenLineDirectionPanel().show('slide');
	},
	showOrangeLineDirectionPanel: function() {
		this.getOrangeLineDirectionPanel().show('slide');
	},
	showPurpleLineDirectionPanel: function() {
		this.getPurpleLineDirectionPanel().show('slide');
	},
	showPinkLineDirectionPanel: function() {
		this.getPinkLineDirectionPanel().show('slide');
	},
	hideRedLineDirectionPanel: function() {
		this.getRedLineDirectionPanel().hide('slideOut');
	},
	hideBlueLineDirectionPanel: function() {
		this.getBlueLineDirectionPanel().hide('slideOut');
	},
	hideBrownLineDirectionPanel: function() {
		this.getBrownLineDirectionPanel().hide('slideOut');
	},
	hideGreenLineDirectionPanel: function() {
		this.getGreenLineDirectionPanel().hide('slideOut');
	},
	hideOrangeLineDirectionPanel: function() {
		this.getOrangeLineDirectionPanel().hide('slideOut');
	},
	hidePurpleLineDirectionPanel: function() {
		this.getPurpleLineDirectionPanel().hide('slideOut');
	},
	hidePinkLineDirectionPanel: function() {
		this.getPinkLineDirectionPanel().hide('slideOut');
	},
	showRedLineStopsPanelSouthbound: function() {
		WakeMe.app.redLineDirection = 'Southbound';
		this.getRedLineDirectionPanel().hide();
		this.getRedLineStopsPanel().show('slide');
	},
	showRedLineStopsPanelNorthbound: function() {
		WakeMe.app.redLineDirection = 'Northbound';
		this.getRedLineDirectionPanel().hide();
		this.getRedLineStopsPanel().show('slide');
	},
	showBlueLineStopsPanelToOhare: function() {
		WakeMe.app.blueLineDirection = 'ToOHare';
		this.getBlueLineDirectionPanel().hide();
		this.getBlueLineStopsPanel().show('slide');
	},
	showBlueLineStopsPanelToForestPark: function() {
		WakeMe.app.blueLineDirection = 'ToForestPark';
		this.getBlueLineDirectionPanel().hide();
		this.getBlueLineStopsPanel().show('slide');
	},
	showBrownLineStopsPanelToKimball: function() {
		WakeMe.app.brownLineDirection = 'ToKimball';
		this.getBrownLineDirectionPanel().hide();
		this.getBrownLineStopsPanel().show('slide');
	},
	showBrownLineStopsPanelToLoop: function() {
		WakeMe.app.brownLineDirection = 'ToLoop';
		this.getBrownLineDirectionPanel().hide();
		this.getBrownLineStopsPanel().show('slide');
	},
	showGreenLineStopsPanelToHarlem: function() {
		WakeMe.app.greenLineDirection = 'ToHarlem';
		this.getGreenLineDirectionPanel().hide();
		this.getGreenLineStopsPanel().show('slide');
	},
	showGreenLineStopsPanelToCottageGrove: function() {
		WakeMe.app.greenLineDirection = 'ToCottageGrove';
		this.getGreenLineDirectionPanel().hide();
		this.getGreenLineStopsPanel().show('slide');
	},
	showGreenLineStopsPanelToAshland63rd: function() {
		WakeMe.app.greenLineDirection = 'ToAshland63rd';
		this.getGreenLineDirectionPanel().hide();
		this.getGreenLineStopsPanel().show('slide');
	},
	showOrangeLineStopsPanelToMidway: function() {
		WakeMe.app.orangeLineDirection = 'ToMidway';
		this.getOrangeLineDirectionPanel().hide();
		this.getOrangeLineStopsPanel().show('slide');
	},
	showOrangeLineStopsPanelToLoop: function() {
		WakeMe.app.orangeLineDirection = 'ToLoop';
		this.getOrangeLineDirectionPanel().hide();
		this.getOrangeLineStopsPanel().show('slide');
	},
	showPurpleLineStopsPanelToHoward: function() {
		WakeMe.app.purpleLineDirection = 'ToHoward';
		this.getPurpleLineDirectionPanel().hide();
		this.getPurpleLineStopsPanel().show('slide');
	},
	showPurpleLineStopsPanelToLinden: function() {
		WakeMe.app.purpleLineDirection = 'ToLinden';
		this.getPurpleLineDirectionPanel().hide();
		this.getPurpleLineStopsPanel().show('slide');
	},
	showPurpleLineStopsPanelToLoop: function() {
		WakeMe.app.purpleLineDirection = 'ToLoop';
		this.getPurpleLineDirectionPanel().hide();
		this.getPurpleLineStopsPanel().show('slide');
	},
	showPinkLineStopsPanelTo54thCermak: function() {
		WakeMe.app.pinkLineDirection = 'To54Cermak';
		this.getPinkLineDirectionPanel().hide();
		this.getPinkLineStopsPanel().show('slide');
	},
	showPinkLineStopsPanelToLoop: function() {
		WakeMe.app.pinkLineDirection = 'ToLoop';
		this.getPinkLineDirectionPanel().hide();
		this.getPinkLineStopsPanel().show('slide');
	},
	hideRedLineStopsPanel: function() {
		this.getRedLineStopsPanel().hide('slideOut');
	},	
	hideBlueLineStopsPanel: function() {
		this.getBlueLineStopsPanel().hide('slideOut');
	},
	hideBrownLineStopsPanel: function() {
		this.getBrownLineStopsPanel().hide('slideOut');
	},
	hideGreenLineStopsPanel: function() {
		this.getGreenLineStopsPanel().hide('slideOut');
	},
	hideOrangeLineStopsPanel: function() {
		this.getOrangeLineStopsPanel().hide('slideOut');
	},
	hidePurpleLineStopsPanel: function() {
		this.getPurpleLineStopsPanel().hide('slideOut');
	},
	hidePinkLineStopsPanel: function() {
		this.getPinkLineStopsPanel().hide('slideOut');
	}
});
