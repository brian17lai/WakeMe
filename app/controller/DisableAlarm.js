Ext.define('WakeMe.controller.DisableAlarm', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			'disableButton': 'button[text=Disable]'
		},
		control: {
			'disableButton': {
				tap: 'disableAlarm'
			}
		}
	},
	disableAlarm: function() {
		if(WakeMe.app.alarmSet == true) {
			Ext.Msg.alert('Disabled','Your alarm at '+WakeMe.app.alarmStop+' has been disabled.');
			WakeMe.app.alarmSet = false;
			WakeMe.app.geo.setAutoUpdate(false);
			WakeMe.app.geo.setFrequency(300000);
		}
		else {
			Ext.Msg.alert('No Alarm','There is no alarm that has been set.');
		}	
	}
})
