Ext.application({
    name: 'WakeMe',

    requires: [
        'Ext.MessageBox'
    ],

    views: ['Main','RedLineDirectionPanel','BlueLineDirectionPanel','BrownLineDirectionPanel','GreenLineDirectionPanel','OrangeLineDirectionPanel','PurpleLineDirectionPanel','PinkLineDirectionPanel','RedLineStops',
    'BlueLineStops','BrownLineStops','GreenLineStops','OrangeLineStops','PurpleLineStops','PinkLineStops'
    ],
    controllers: ['TrainDirection','DisableAlarm','SetAlarmRedLine','SetAlarmBlueLine','SetAlarmBrownLine','SetAlarmGreenLine','SetAlarmOrangeLine','SetAlarmPurpleLine','SetAlarmPinkLine'],
    requires: ['Ext.device.Communicator', 'Ext.device.notification.PhoneGap', 'Ext.device.notification.Sencha', 'Ext.device.notification.Simulator','Ext.device.Notification'],

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        if (typeof(Number.prototype.toRad) === "undefined") {
		  Number.prototype.toRad = function() {
		    return this * Math.PI / 180;
		  }
		}
    	//Global Variables:
    	this.redLineDirection;
    	this.blueLineDirection;
    	this.brownLineDirection;
    	this.greenLineDirection;
    	this.orangeLineDirection;
    	this.purpleLineDirection;
    	this.pinkLineDirection;
    	this.alarmStop;
    	this.alarmSet = false;
    	this.geocodedStop;
    	this.geo = Ext.create('Ext.util.Geolocation', {
		    autoUpdate: false,
		    frequency: 300000,
		    listeners: {
		        locationupdate: function(geo) {
		        	console.log(geo);
		        	console.log(WakeMe.app.geocodedStop);
		            if(WakeMe.app.distance(geo.getLatitude(),WakeMe.app.geocodedStop[0],geo.getLongitude(),WakeMe.app.geocodedStop[1]) < 3.218688) {
		            	if(WakeMe.app.distance(geo.getLatitude(),WakeMe.app.geocodedStop[0],geo.getLongitude(),WakeMe.app.geocodedStop[1]) < 0.06096) {
		            		WakeMe.app.showNotification();
		            		WakeMe.app.geo.setFrequency(300000);
		            		WakeMe.app.setAutoUpdate(false);
		            		WakeMe.app.alarmSet = false;
                            alert('distance is'+WakeMe.app.distance(geo.getLatitude(),WakeMe.app.geocodedStop[0],geo.getLongitude(),WakeMe.app.geocodedStop[1]));
		            		console.log('distance is '+WakeMe.app.distance(geo.getLatitude(),WakeMe.app.geocodedStop[0],geo.getLongitude(),WakeMe.app.geocodedStop[1]));
		            	}
		            	else if(WakeMe.app.distance(geo.getLatitude(),WakeMe.app.geocodedStop[0],geo.getLongitude(),WakeMe.app.geocodedStop[1]) < 2.57495) {
                            WakeMe.app.geo.setFrequency(30000);
                            alert('distance is'+WakeMe.app.distance(geo.getLatitude(),WakeMe.app.geocodedStop[0],geo.getLongitude(),WakeMe.app.geocodedStop[1]));
		            		console.log('distance is '+WakeMe.app.distance(geo.getLatitude(),WakeMe.app.geocodedStop[0],geo.getLongitude(),WakeMe.app.geocodedStop[1]));
		            	}
		            	else {
		            		WakeMe.app.geo.setFrequency(60000);
                            alert('distance is'+WakeMe.app.distance(geo.getLatitude(),WakeMe.app.geocodedStop[0],geo.getLongitude(),WakeMe.app.geocodedStop[1]));
		            		console.log('distance is '+WakeMe.app.distance(geo.getLatitude(),WakeMe.app.geocodedStop[0],geo.getLongitude(),WakeMe.app.geocodedStop[1]));
		            	}
		            }
		            console.log('distance is '+WakeMe.app.distance(geo.getLatitude(),WakeMe.app.geocodedStop[0],geo.getLongitude(),WakeMe.app.geocodedStop[1]));
		        },
		        locationerror: function(geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
		            if(bTimeout){
		                alert('Timeout occurred.');
		            } else {
		                alert('Error occurred.');
                        alert(message);
		            }
		        }
		    }
		});
    	
    	Ext.Viewport.add({
    	   	xtype: 'wakememain'
    	}); 
    	Ext.Viewport.add({
    		xtype: 'redlinedirectionpanel'
    	});
    	Ext.Viewport.add({
    		xtype: 'bluelinedirectionpanel'
    	});
    	Ext.Viewport.add({
    		xtype: 'brownlinedirectionpanel'
    	});
    	Ext.Viewport.add({
    		xtype: 'greenlinedirectionpanel'
    	});
    	Ext.Viewport.add({
    		xtype: 'orangelinedirectionpanel'
    	});
    	Ext.Viewport.add({
    		xtype: 'purplelinedirectionpanel'
    	});
    	Ext.Viewport.add({
    		xtype: 'pinklinedirectionpanel'
    	});
    	Ext.Viewport.add({
    		xtype: 'redlinestops'
    	});
    	Ext.Viewport.add({
    		xtype: 'bluelinestops'
    	});
    	Ext.Viewport.add({
    		xtype: 'brownlinestops'
    	});
    	Ext.Viewport.add({
    		xtype: 'greenlinestops'
    	});
    	Ext.Viewport.add({
    		xtype: 'orangelinestops'
    	});
    	Ext.Viewport.add({
    		xtype: 'purplelinestops'
    	});
    	Ext.Viewport.add({
    		xtype: 'pinklinestops'
    	});
    	console.log(Ext.ComponentQuery.query('button[style=background:red][text=Back] ')[0]);  	
    	console.log('launched');
    	
    	//Haversine formula function (for calculating distance between two points):
    	
    	this.distance = function(lat1,lat2,lon1,lon2) {
    		var R = 6371; // km
			var dLat = (lat2-lat1).toRad();
			var dLon = (lon2-lon1).toRad();
			var lat_1 = lat1.toRad();
			var lat_2 = lat2.toRad();
			
			var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat_1) * Math.cos(lat_2); 
			var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
			var d = R * c;
			return d;
    	};
		
		this.showNotification = function() {
			var vibrate = setInterval(function(){Ext.device.Notification.vibrate()},1500);
            // var newMessage = Ext.create('Ext.MessageBox', {
            //     title: 'Wake Up!',
            //     html: "<center style='color: white;font-size: 16px;'>" +WakeMe.app.alarmStop+ " is the next stop.</center>",
            //     buttons: {
            //         text: 'Ok'
            //     },
            //     control: {
            //         'button[text=Ok]': {
            //             tap: function() {
            //                 clearInterval(vibrate);
            //                 this.hide();
            //             }
            //         }
            //     }
            // });
            //newMessage.show();
            Ext.device.Notification.show({
				title: 'Wake Up!',
				message: ''+WakeMe.app.alarmStop+' is the next stop.',
				callback: function(button) {
                    alert('button pressed');
                    clearInterval(vibrate);
					if (button == "ok") {
						clearInterval(vibrate);
                        alert('button pressed');
                        clearInterval(vibrate);
						console.log('Verified');
					}
				}
			});
		}	
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
