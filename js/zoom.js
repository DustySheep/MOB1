			var myZoomer = new Zoomer({
				selector: '#zoomerElement',
				width: 960,
				height: 540,
				stepsPerLevel: 20,
				step: 0,
				opacityTransitionDuration: 200,
				images: [{
						src: './images/staticmap__4.png',
						level: 0,
					}, {
						src: './images/staticmap___6.png',
						level: 2,
					}, {
						src: './images/staticmap__8.png',
						level: 4,
					}]
			});
			myZoomer.on('ready', function(){

				document.querySelector('#controls').style.display = 'block';

				var setZoomControl = document.querySelector('#setZoomControl');
				setZoomControl.addEventListener('input', function(ev, or){
					myZoomer.setZoom({step: setZoomControl.value});
				});

				var animateZoomControl = document.querySelector('#animateZoomControl');
				animateZoomControl.addEventListener('click', function(ev, or){
					var spl = 20;
					myZoomer.animateZoom({
						fromStep: spl * 0,
						toStep: spl * 4,
					}).then(function(){
						setTimeout(function() {
							var spl = 15;
							myZoomer.animateZoom({
								stepsPerLevel: spl,
								fromStep: spl * 4,
								toStep: spl * 0,
							});
						}, 500);
					});
				});

			});