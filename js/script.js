// this function does this.

var doCoolStuff = function () {
	var currentClassName = document.getElementById('cool').className;
    // changing class name
	if (currentClassName == 'cool') {
		document.getElementById('cool').className = 'cool red';
	} else {
		document.getElementById('cool').className = 'cool';
	}
}

var nameOfAPlant = function (name) {
	alert('The Indigenous name is: '+name);
}

var car = {
	    	make:'Hyundai',
	    	type:'Accent',
	    	color: 'black',
	    	isTurnedOn: true,
	    	numberofWheels: 4,
	    	seats: [
	    	'seat 1', 
			'seat 2', 
			'seat 3', 
			'seat 4'
		],
		turnOn: function () {
			this.isTurnedOn = false;
		},
		fly: function () {
			alert('fly');
		},
		switchCar: function (isOn) {
			console.log('turn car '+isOn)
			if (isOn == true) {
				this.isTurnedOn = false;
			} else {this.isTurnedOn = true;}

		}
	};

	console.log('Please water the plants!')