
jQuery(document).ready(function( $ ) {


	// Init ScrollMagic Controller
	var scrollMagicController = new ScrollMagic({container: "#scrollWrapper"});



/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX *//* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

	// HAD TO MOVE THESE LINES TO THE TOP FOR PROPER FUNCTIONING!

	//Slide up Block and Chain

	var tween = TweenMax.fromTo('#join', 1.0,	{top:22},{top:-200});
	var sceneJoin = new ScrollScene({	triggerElement:'#six',duration:750,offset:2400,reverse: true})
	.setTween(tween).addTo(scrollMagicController);
	//sceneJoin.addIndicators({zindex: 100000, colorEnd: "#000000", suffix:"Join"});


	var tween = TweenMax.fromTo('#blockWord', 1.0,	{top:4},{top:-200});
	var sceneBlock = new ScrollScene({	triggerElement:'#six',duration:675,offset:2400,reverse: true})
	.setTween(tween).addTo(scrollMagicController);
	//sceneBlock.addIndicators({zindex: 100000, colorEnd: "#000000", suffix:"Block"});


/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

	// Slide out devices and hide
  	var tween = TweenMax.fromTo('#devices', 1.0,
		{left:0},{ left:-300,top:400 }
	);
	var sceneSlideOutDevices = new ScrollScene({
		triggerElement: '#six',
		duration:750,
		offset:2400,
		reverse: true
	})
	//.setClassToggle("#devices", "show").addTo(scrollMagicController)
	.setTween(tween).addTo(scrollMagicController);
	//sceneSlideOutDevices.addIndicators({zindex: 100000, colorEnd: "#000000", suffix:"Slide Devices"});

	// var sceneHideDevices = new ScrollScene({
	// 	triggerElement: '#six',
	//
	// 	offset:3000,
	// 	reverse: true
	// })
	// .setClassToggle("#devices", "hide").addTo(scrollMagicController)
	// .setTween(tween).addTo(scrollMagicController);
	// //sceneHideDevices.addIndicators({zindex: 100000, colorEnd: "#000000", suffix:"Slide Devices"});
	//



/*  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
		// PIN "We Restore Your Revenue

		var scenePinRestore = new ScrollScene({
			triggerElement: '#four',
			//offset: 0,
			//duration: $(window).height() - 100, // pin element for the window height - 1

			duration: 2400,
			triggerHook: 0, // don't trigger until #four hits the top of the viewport
			reverse: true // allows the effect to trigger when scrolled in the reverse direction
		})


		.setPin("#four") // the element we want to pin
		.addTo(scrollMagicController);
		//scenePinRestore.addIndicators({zindex: 100000, colorEnd: "#000000", suffix:"PIN Restore"});




	/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */


		// Squeeze restore

		var sceneSqueeze = new ScrollScene({
			triggerElement: '#four',
			offset:1200,
			reverse: true
		})
		.setClassToggle("#four p", "squeeze-restore")

		.addTo(scrollMagicController);


	/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

		// Slide decent alternative left
	  	var tween = TweenMax.fromTo('#decent-alternative', 1.0,
			{left:0	},	{ 	left: -400, opacity:0	});

		var sceneSDA = new ScrollScene({
			triggerElement: '#four',
			duration: 400, /* How many pixels to scroll / animate */
			offset: 1000
		})
		.setTween(tween)
		.setClassToggle("#decent-alternative", "fadeOut")
		.addTo(scrollMagicController);


	/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */


		// Slide up Restore
	  	var tween = TweenMax.fromTo('#baby', 1.0,
			{top:60},
			{top:-513}
		);

		var sceneSlideRestore = new ScrollScene({
			triggerElement: '#four',
			duration: 700, /* How many pixels to scroll / animate */
			offset: 1100
		})
		.setTween(tween)
		.addTo(scrollMagicController);



/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

			// Leader Pic
		  	var tween = TweenMax.fromTo('#leftPic', 1.0,
				{
		    		left: -112, opacity: '0'
		  	},
				{
		    	 	left: 0, opacity: '1'
				}
			);

			// Create the Scene and trigger when visible
			var sceneSlideLeader = new ScrollScene({
				triggerElement: '#four',
				duration: 240, /* How many pixels to scroll / animate */
				offset: 50
			})
			.setTween(tween)
			.addTo(scrollMagicController);

		/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */


			// Decent logo
		  	var tween = TweenMax.fromTo('#rightLogo', 1.0,
				{
		    		left: 0, opacity: '0'
		  	},
				{
		    	 	left: 0, opacity: '1'
				}
			);

			var scene26 = new ScrollScene({
				triggerElement: '#four',
				duration: 1000, /* How many pixels to scroll / animate */
				offset: 50
			})
			.setClassToggle("#rightLogo", "fixFadeIn").addTo(scrollMagicController)
			.setTween(tween)
			.addTo(scrollMagicController);

	/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

		// Fade person
		var sceneremovePerson = new ScrollScene({	triggerElement:'#six',offset:2300})
		.setClassToggle("#person", "fixFadeOut").addTo(scrollMagicController)
		.setTween(tween).addTo(scrollMagicController);
		//sceneremovePerson.addIndicators({zindex: 100000, colorEnd: "#000000", suffix:"Slide out person"});



	/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX *//* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */


		// Decent logo
	  	var tween = TweenMax.fromTo('#left', 1.0,
			{
	    		left: -112, opacity: '0'
	  	},
			{
	    	 	left: 0, opacity: '1'
			}
		);

		// Create the Scene and trigger when visible
		var sceneSlideLogo = new ScrollScene({
			triggerElement: '#two',
			duration: 240, /* How many pixels to scroll / animate */
			offset: 160
		})
		.setTween(tween)
		.addTo(scrollMagicController);

	/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */


		// Forbes logo
	  	var tween = TweenMax.fromTo('#right', 1.0,
			{
	    		left: 78, opacity: '0'
	  	},
			{
	    	 	left: 0, opacity: '1'
			}
		);

		var scene2 = new ScrollScene({
			triggerElement: '#two',
			duration: 240, /* How many pixels to scroll / animate */
			offset: 160
		})
		.setTween(tween)
		.addTo(scrollMagicController);


	/* PIN PIN PIN PIN PIN PIN XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

		//// PIN section two
		var scenePinTwo = new ScrollScene({
			triggerElement: '#two',
			duration: $(window).height() - 50, // pin element for the window height - 1
			duration: 400,
			triggerHook: 0, // don't trigger until #two hits the top of the viewport
			reverse: true // allows the effect to trigger when scrolled in the reverse direction
		})


		.setPin("#two") // the element we want to pin
		.addTo(scrollMagicController);


	/* XXXXXXXXXXXXXXXXXXXXNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */


		// Fade Logos
		var sceneFadeIdentity = new ScrollScene({
			triggerElement: '#two',
			offset:650
		})
		.setClassToggle("#identity", "fadeOut") // add class toggle

		.addTo(scrollMagicController);
		//sceneFadeIdentity.addIndicators({zindex: 100000, colorEnd: "#000000", suffix:"Fade identity"});


	/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */


		// Show Entertainment's Future

		var sceneEntertainment = new ScrollScene({
			triggerElement: '#two',
			offset:500,
			duration:400
		})
		.setClassToggle("#entertainment", "fadeIn") // add class toggle

		.addTo(scrollMagicController);

	/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */


		// Unmask Network

		var sceneUnmaskNetworkL = new ScrollScene({
			triggerElement: '#two',
			offset:1100,
			reverse: true
		})
		.setClassToggle("#leftMask", "moveLeft") // add class toggle
		.addTo(scrollMagicController);


		var sceneUnmaskNetworkR = new ScrollScene({
			triggerElement: '#two',
			offset:1100,
			reverse: true
		})

		.setClassToggle("#rightMask", "moveRight") // add class toggle
		.addTo(scrollMagicController);


	 /* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */


	   // White Mask
	   	var tween = TweenMax.fromTo('#mask1', 1.0,
	 		{
	 		opacity: '0',
	   	},
	 		{
	 		opacity: '1',
	 	);
	 	var sceneMask = new ScrollScene({
	 		triggerElement: '#twoB',
	 		offset:600,
			reverse: true

	 		//duration: 500
	 	})
	 	.setTween(tween)
	 	.addTo(scrollMagicController)


	/* PIN PIN PIN PIN PIN PIN XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */


	var scenePinEntertainment = new ScrollScene({
			triggerElement: '#twoB',
			offset: 0,
			//duration: $(window).height() - 100, // pin element for the window height - 1

			duration: 600,
			triggerHook: 0, // don't trigger until #three hits the top of the viewport
			reverse: true // allows the effect to trigger when scrolled in the reverse direction
		})
		.setPin("#entertainment") // the element we want to pin
		.addTo(scrollMagicController);



	/* PIN PIN PIN PIN PIN PIN XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

		// PIN the 'INCREDIBLE SHRINKING FILMMAKER"
		var scenePinFilmmmaker = new ScrollScene({
			triggerElement: '#three',
			offset: 0,

			duration: 3900,
			triggerHook: 0, // don't trigger until #three hits the top of the viewport
			reverse: true // allows the effect to trigger when scrolled in the reverse direction
		})


		.setPin("#three") // the element we want to pin
		.addTo(scrollMagicController);



	/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */



// Fade the circle slides

	// 1
	var sceneFadeInSlide1 = new ScrollScene({	triggerElement: '#three',offset:200})
	.setClassToggle("#slide-1", "fixFadeIn")
	.addTo(scrollMagicController);
	//sceneFadeInSlide1.addIndicators({zindex: 100000, colorStart:"ffffff",colorEnd: "#ffffff", suffix:"Fade In Slide 1"});

	var sceneFadeInSlide2 = new ScrollScene({	triggerElement: '#three',offset:700})
	.setClassToggle("#slide-1", "fixFadeOut")
	.addTo(scrollMagicController);

	// 2
	var sceneFadeInSlide2 = new ScrollScene({	triggerElement: '#three',offset:800})
	.setClassToggle("#slide-2", "fixFadeIn")
	.addTo(scrollMagicController);


	var sceneFadeInSlide2 = new ScrollScene({	triggerElement: '#three',offset:1300})
	.setClassToggle("#slide-2", "fixFadeOut")
	.addTo(scrollMagicController);

	// 3
	var sceneFadeInSlide3 = new ScrollScene({	triggerElement: '#three',offset:1400})
	.setClassToggle("#slide-3", "fixFadeIn")
	.addTo(scrollMagicController);

	var sceneFadeInSlide3 = new ScrollScene({	triggerElement: '#three',offset:1900})
	.setClassToggle("#slide-3", "fixFadeOut")
	.addTo(scrollMagicController);



	// 4 SVOD
	var sceneFadeInlide4 = new ScrollScene({	triggerElement: '#three',offset:2000})
	.setClassToggle("#slide-4", "fixFadeIn")
	.addTo(scrollMagicController);
	//sceneFadeInlide4.addIndicators({zindex: 100000, colorEnd:  "#000000", suffix:"Fade in SVOD"});

	var sceneFadeInSlide4 = new ScrollScene({	triggerElement: '#three',offset:2500})
	.setClassToggle("#wrap-one", "fixFadeOut")
	.addTo(scrollMagicController);



	var sceneFadeInSlide4 = new ScrollScene({	triggerElement: '#three',offset:2600})
	.setClassToggle("#wrap-two", "fixFadeIn")
	.addTo(scrollMagicController);

	var sceneFadeInSlide4 = new ScrollScene({	triggerElement: '#three',offset:3100})
	.setClassToggle("#wrap-two", "fixFadeOut")
	.addTo(scrollMagicController);



	var sceneFadeInSlide4 = new ScrollScene({	triggerElement: '#three',offset:3200})
	.setClassToggle("#wrap-three", "fixFadeIn")
	.addTo(scrollMagicController);

	var sceneFadeInSlide4 = new ScrollScene({	triggerElement: '#three',offset:3700})
	.setClassToggle("#wrap-three", "fixFadeOut")
	.addTo(scrollMagicController);



	var sceneFadeInSlide4 = new ScrollScene({	triggerElement: '#three',offset:3800})
	.setClassToggle("#wrap-four", "fixFadeIn")
	.addTo(scrollMagicController);


/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

	// Squeeze SVOD on exit

	var scene23 = new ScrollScene({
		triggerElement: '#three',
		offset:3900,
		reverse: true
	})
	.setClassToggle("#svod-group p", "squeeze")

	.addTo(scrollMagicController);


/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

	// PIN Join the Blockchain
	var scene7W = new ScrollScene({
		triggerElement: '#six',
		//offset: 0,
		//duration: $(window).height() - 100, // pin element for the window height - 1
		duration: 7700,
		triggerHook: 0, // don't trigger until #three hits the top of the viewport
		reverse: true // allows the effect to trigger when scrolled in the reverse direction
	})

		.setPin("#six") // the element we want to pin
	.addTo(scrollMagicController);



/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */


//Hide small pics before they are needed


	var sceneP1 = new ScrollScene({	triggerElement: '#six',  reverse: true	})
	.setClassToggle("#p1", "hide").addTo(scrollMagicController)
	.setTween(tween).addTo(scrollMagicController);

	var sceneP2 = new ScrollScene({	triggerElement: '#six',  reverse: true	})
	.setClassToggle("#p2", "hide").addTo(scrollMagicController)
	.setTween(tween).addTo(scrollMagicController);

	var sceneP3 = new ScrollScene({	triggerElement: '#six',  reverse: true	})
	.setClassToggle("#p3", "hide").addTo(scrollMagicController)
	.setTween(tween).addTo(scrollMagicController);

	var sceneP4 = new ScrollScene({	triggerElement: '#six',  reverse: true	})
	.setClassToggle("#p4", "hide").addTo(scrollMagicController)
	.setTween(tween).addTo(scrollMagicController);



	// Slide decent-blockchain
  	var tween = TweenMax.fromTo('#decent-blockchain', 1.0,
		{top: 30, left:0 },{top:-420 }
	);
	var scene7B = new ScrollScene({
		triggerElement: '#six',
		offset:300,

		reverse: true
	})
	.setClassToggle("#decent-blockchain", "show").addTo(scrollMagicController)
	.setTween(tween).addTo(scrollMagicController);

		// Fade previous

		var scene24 = new ScrollScene({
			triggerElement: '#six',
			offset:800,
			reverse: true
		})
		.setClassToggle("#decent-blockchain", "fadeOut").addTo(scrollMagicController);

			// Remove previous

			var scene24 = new ScrollScene({triggerElement: '#six',
				offset:900,reverse: true })
			.setClassToggle("#decent-blockchain", "hide").addTo(scrollMagicController);


/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

	// Slide transactions
  	var tween = TweenMax.fromTo('#transactions', 1.0,
		{left: 400 },{left:0 }
	);
	var scene7B = new ScrollScene({
		triggerElement: '#six',
		offset:900,
		duration:240,
		reverse: true
	})
	.setClassToggle("#transactions", "show").addTo(scrollMagicController)
	.setTween(tween).addTo(scrollMagicController);

/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

	// Slide in devices
  	var tween = TweenMax.fromTo('#devices', 1.0,
		{top:0,left: -400 },{left:0 }
	);
	var scene7B = new ScrollScene({
		triggerElement: '#six',
		duration:240,
		offset:900,
		reverse: true
	})
	.setClassToggle("#devices", "show").addTo(scrollMagicController)
	.setTween(tween).addTo(scrollMagicController);

/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

	// Slide in person
  	var tween = TweenMax.fromTo('#person', 1.0,
		{left: 460 },{left:211 }
	);
	var scene7B = new ScrollScene({
		triggerElement: '#six',
		duration:240,
		offset:900,
		reverse: true
	})
	.setClassToggle("#person", "show").addTo(scrollMagicController)
	.setTween(tween).addTo(scrollMagicController);

/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

	// Fade in connections

	var sceneConnections = new ScrollScene({
		triggerElement: '#six',
		duration:500,
		offset:900,
		reverse: true
	})
	.setClassToggle("#connections", "fadeIn").addTo(scrollMagicController)
	.setTween(tween).addTo(scrollMagicController);

/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

	//Show dollars
	var scene7B = new ScrollScene({
		triggerElement: '#six',
		offset:800,
		reverse: true
	})
	.setClassToggle("#dollars", "fadeIn").addTo(scrollMagicController)
	.setTween(tween).addTo(scrollMagicController);



		// Fade transactions
		var scene24 = new ScrollScene({
			triggerElement: '#six',
			offset:1500,
			reverse: true
		})
		.setClassToggle("#transactions", "fadeOut").addTo(scrollMagicController);

			// Remove previous

			var scene24 = new ScrollScene({triggerElement: '#six',
				offset:1600,reverse: true })
			.setClassToggle("#transactions", "hide").addTo(scrollMagicController);


/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */


	// Slide lightning
  	var tween = TweenMax.fromTo('#lightning', 1.0,
		{left: 400 },{left:0 });
	var sceneLightning = new ScrollScene({triggerElement: '#six',offset:1600,	reverse: true	})
	.setClassToggle("#lightning", "show").addTo(scrollMagicController)
	.setTween(tween).addTo(scrollMagicController);
	//sceneLightning.addIndicators({zindex: 100000, colorEnd: "#000000", suffix:"Slide lightning"});

		// Fade previous
		var sceneTransactionFade = new ScrollScene({
			triggerElement: '#six',
			offset:1600,
			reverse: true
		})
		.setClassToggle("#transactions", "fadeOut").addTo(scrollMagicController);
		//sceneTransactionFade.addIndicators({zindex: 100000, colorEnd: "#000000", suffix:"Transactions fade"});

			// Remove previous
			var scene24 = new ScrollScene({triggerElement: '#six',
				offset:1650,reverse: true })
			.setClassToggle("#transactions", "hide").addTo(scrollMagicController);


/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */


	// Remove connections
	var scene7C = new ScrollScene({	triggerElement: '#six', offset:1850, reverse: true	})
	.setClassToggle("#connections", "fadeOut").addTo(scrollMagicController)
	.setTween(tween).addTo(scrollMagicController);


	/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */


	//Hide small pics before they are needed


		var sceneP1 = new ScrollScene({	triggerElement: '#six', offset:1850, reverse: true	})
		.setClassToggle("#p1", "hardShow").addTo(scrollMagicController)
		.setTween(tween).addTo(scrollMagicController);

		var sceneP2 = new ScrollScene({	triggerElement: '#six',  offset:1850,reverse: true	})
		.setClassToggle("#p2", "hardShow").addTo(scrollMagicController)
		.setTween(tween).addTo(scrollMagicController);

		var sceneP3 = new ScrollScene({	triggerElement: '#six',  offset:1850,reverse: true	})
		.setClassToggle("#p3", "hardShow").addTo(scrollMagicController)
		.setTween(tween).addTo(scrollMagicController);

		var sceneP4 = new ScrollScene({	triggerElement: '#six',  offset:1850,reverse: true	})
		.setClassToggle("#p4", "hardShow").addTo(scrollMagicController)
		.setTween(tween).addTo(scrollMagicController);



	//Slide Pic 1
  	var tween = TweenMax.fromTo('#p1', 1.0,
		{ },{left:130, top:228 }
	);
	var scenePic1 = new ScrollScene({	triggerElement: '#six', offset:2000,	duration:150,	reverse: true	})
	.setTween(tween).addTo(scrollMagicController);
	//scenePic1.addIndicators({zindex: 100000, colorEnd: "#000000", suffix:"Slide pic 1"});

	// Slide Pic 2
  	var tween = TweenMax.fromTo('#p2', 1.0,
		{ },{left:130, top:228 }
	);
	var scene7B = new ScrollScene({	triggerElement: '#six', offset:2000,	duration:130,	reverse: true	})
	.setTween(tween).addTo(scrollMagicController);

	// Slide Pic 3
  	var tween = TweenMax.fromTo('#p3', 1.0,
		{ },{left:130, top:228 }
	);
	var scene7B = new ScrollScene({	triggerElement: '#six', offset:2000,	duration:90,	reverse: true	})
	.setTween(tween).addTo(scrollMagicController);


	// Slide Pic 4
  	var tween = TweenMax.fromTo('#p4', 1.0,
		{ },{left:130, top:228 }
	);
	var sceneP4 = new ScrollScene({	triggerElement: '#six', offset:2000,	duration:2000, reverse: true	})
	.setTween(tween).addTo(scrollMagicController);


/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

	// Show Melies
	var sceneMelies = new ScrollScene({	triggerElement: '#six', offset:2000,	duration:500, reverse: true	})
	.setClassToggle("#melies", "fadeIn").addTo(scrollMagicController)
	.setTween(tween).addTo(scrollMagicController);

	/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

	// Hide all the small pics
	var sceneMelies = new ScrollScene({	triggerElement: '#six', offset:2050, reverse: true	})
	.setClassToggle("#p1", "hardHide").addTo(scrollMagicController)
	.setTween(tween).addTo(scrollMagicController);

	var sceneMelies = new ScrollScene({	triggerElement: '#six', offset:2050, reverse: true	})
	.setClassToggle("#p2", "hardHide").addTo(scrollMagicController)
	.setTween(tween).addTo(scrollMagicController);

	var sceneMelies = new ScrollScene({	triggerElement: '#six', offset:2050, reverse: true	})
	.setClassToggle("#p3", "hardHide").addTo(scrollMagicController)
	.setTween(tween).addTo(scrollMagicController);

	var sceneMelies = new ScrollScene({	triggerElement: '#six', offset:2050, reverse: true	})
	.setClassToggle("#p4", "hardHide").addTo(scrollMagicController)
	.setTween(tween).addTo(scrollMagicController);


/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

	// Kill dollar
	var sceneDollar = new ScrollScene({	triggerElement:'#six',	offset:2400,reverse: true})
	.setClassToggle("#dollars", "hide").addTo(scrollMagicController)
	.setTween(tween).addTo(scrollMagicController);
	//sceneDollar.addIndicators({zindex: 100000, colorEnd: "#000000", suffix:"Kill Dollar"});




/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

	// SHow/ Slide in middle and cut out

	var sceneMiddleShow = new ScrollScene({	triggerElement:'#six',offset:2000,reverse: true})
	.setClassToggle("#middle", "show").addTo(scrollMagicController)
	.setTween(tween).addTo(scrollMagicController);


  	var tween = TweenMax.fromTo('#middle', 1.0,	{top:4,left:-350},{left:-1 });
	var sceneMiddle = new ScrollScene({	triggerElement:'#six',duration:750,offset:2400,reverse: true})
	.setTween(tween).addTo(scrollMagicController);



  	var tween = TweenMax.fromTo('#cutOut', 1.0,	{top:22,left:400},{left:3 });
	var sceneMiddle = new ScrollScene({	triggerElement:'#six',duration:675,offset:2400,reverse: true})
	.setTween(tween).addTo(scrollMagicController);



/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

	// Slide up triplet pic
  	var tween = TweenMax.fromTo('#triplet', 1.0,	{},{top:214 });
	var sceneTriplet = new ScrollScene({	triggerElement:'#six',duration:500,	offset:2400,reverse: true})
	.setTween(tween).addTo(scrollMagicController);


/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

	// Slide decide
  	var tween = TweenMax.fromTo('#decide', 1.0,
		{left: 400 },{left:0 });
	var scenedecide = new ScrollScene({triggerElement: '#six',duration:500, offset:2400,	reverse: true	})
	.setClassToggle("#decide", "show").addTo(scrollMagicController)
	.setTween(tween).addTo(scrollMagicController);

		// Fade previous
		var scene24 = new ScrollScene({
			triggerElement: '#six',
			offset:2300,
			reverse: true
		})
		.setClassToggle("#lightning", "fadeOut").addTo(scrollMagicController);

			// Remove previous
			var scene24 = new ScrollScene({triggerElement: '#six',
				offset:2350,reverse: true })
			.setClassToggle("#lightning", "hide").addTo(scrollMagicController);



/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */


	// Slide up Middle and Cut Out the Block Chain

  	var tween = TweenMax.fromTo('#middle', 1.0,	{top:4},{top:-200 }	);
		var sceneSlideUpMiddle = new ScrollScene({	triggerElement:'#six', duration:675,	offset:3600,reverse: true})
		.setTween(tween).addTo(scrollMagicController);

	 	var tween = TweenMax.fromTo('#cutOut', 1.0,	{top:22},{top:-200 }	);
		var scene7F = new ScrollScene({	triggerElement:'#six',duration:750,	offset:3600})
		.setTween(tween).addTo(scrollMagicController);


/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */


		// Fade decide
		var sceneTransactionFade = new ScrollScene({
			triggerElement: '#six',
			offset:3600,
			reverse: true
		})
		.setClassToggle("#decide", "fadeOut").addTo(scrollMagicController);



/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */


		// Fade triplet
		var sceneTransactionFade = new ScrollScene({
			triggerElement: '#six',
			offset:3600,
			reverse: true
		})
		.setClassToggle("#triplet", "fadeOut").addTo(scrollMagicController);



/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

	// Slide in Energize your fan base

	var tween = TweenMax.fromTo('#fan', 1.0,	{top:4,top:4,left:-350},{left:-1 });
	var sceneMiddle = new ScrollScene({	triggerElement:'#six',duration:675,offset:3600,reverse: true})
	.setTween(tween).addTo(scrollMagicController);


	var tween = TweenMax.fromTo('#energize', 1.0,	{top:22,left:400},{top:22,left:3 });
	var sceneMiddle = new ScrollScene({	triggerElement:'#six',duration:750,offset:3600,reverse: true})
	.setTween(tween).addTo(scrollMagicController);


/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

	// Slide up fans

	var tween = TweenMax.fromTo('#fans', 1.0,	{},{top:40 });
	var sceneMiddle = new ScrollScene({	triggerElement:'#six',duration:700,offset:3600,reverse: true})
	.setTween(tween).addTo(scrollMagicController);


	// Slide up crowd

	var tween = TweenMax.fromTo('#crowd', 1.0,	{},{top:200});
	var sceneMiddle = new ScrollScene({	triggerElement:'#six',duration:750,offset:3600,reverse: true})
	.setTween(tween).addTo(scrollMagicController);


	// Slide in reward
  	var tween = TweenMax.fromTo('#reward', 1.0,
		{left: 400 },{left:0 });
	var scenedecide = new ScrollScene({triggerElement: '#six',duration:500, offset:3600,	reverse: true	})
	.setClassToggle("#decide", "show").addTo(scrollMagicController)
	.setTween(tween).addTo(scrollMagicController);



// /* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

		// Fade fans
		var sceneTransactionFade = new ScrollScene({
			triggerElement: '#six',
			offset:5200,
			reverse: true
		})
		.setClassToggle("#fans", "fadeOut").addTo(scrollMagicController);



/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */



		// Fade crowd
		var sceneCrowdFade = new ScrollScene({
			triggerElement: '#six',
			offset:5200,
			reverse: true
		})
		.setClassToggle("#crowd", "fadeOut").addTo(scrollMagicController);


		// Fade reward
		var sceneRewardFade = new ScrollScene({
			triggerElement: '#six',
			offset:5200,
			reverse: true
		})
		.setClassToggle("#reward", "fadeOut").addTo(scrollMagicController);


//Slide up energize and fan

			var tween = TweenMax.fromTo('#energize', 1.0,	{top:22},{top:-200 }	);
		var sceneSlideUpMiddle = new ScrollScene({	triggerElement:'#six', duration:750,offset:5200,reverse: true})
		.setTween(tween).addTo(scrollMagicController);

			var tween = TweenMax.fromTo('#fan', 1.0,	{top:4},{top:-200 }	);
		var scene7F = new ScrollScene({	triggerElement:'#six',duration:675,	offset:5200})
		.setTween(tween).addTo(scrollMagicController);



/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

	// Slide in Create VOD



	var tween = TweenMax.fromTo('#vodService', 1.0,	{top:3,left:-350},{left:109 });
	var sceneMiddle = new ScrollScene({	triggerElement:'#six',duration:750,offset:5200,reverse: true})
	.setTween(tween).addTo(scrollMagicController);


	var tween = TweenMax.fromTo('#create', 1.0,	{top:28,left:400},{left:3 });
	var sceneMiddle = new ScrollScene({	triggerElement:'#six',duration:750,offset:5200,reverse: true})
	.setTween(tween).addTo(scrollMagicController);

/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

	// Slide up vod

	var tween = TweenMax.fromTo('#vod', 1.0,	{},{top:40 });
	var sceneMiddle = new ScrollScene({	triggerElement:'#six',duration:700,offset:5600,reverse: true})
	.setTween(tween).addTo(scrollMagicController);


	// Slide up computer

	var tween = TweenMax.fromTo('#computer', 1.0,	{},{top:178});
	var sceneMiddle = new ScrollScene({	triggerElement:'#six',duration:750,offset:5600,reverse: true})
	.setTween(tween).addTo(scrollMagicController);


	// Slide in custom
		var tween = TweenMax.fromTo('#custom', 1.0,
		{left: 400 },{left:0 });
	var scenedecide = new ScrollScene({triggerElement: '#six',duration:500, offset:5600,reverse: true	})
	.setTween(tween).addTo(scrollMagicController);



	/* PIN PIN PIN PIN PIN PIN XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */


	var tween = TweenMax.fromTo('#to', 1.0,	{top:-22,left:-350},{left:112 });
	var sceneMiddle = new ScrollScene({	triggerElement:'#seven',duration:750,offset:50,reverse: true})
	.setTween(tween).addTo(scrollMagicController);
	//scene7X.addIndicators({zindex: 100000, colorEnd: "#000000", suffix:"Join"});




	var tween = TweenMax.fromTo('#people', 1.0,	{top:12,left:475},{left:22 });
	var sceneBillions = new ScrollScene({	triggerElement:'#seven',duration:750,offset:50,reverse: true})
	.setTween(tween).addTo(scrollMagicController);
	//sceneBillions.addIndicators({zindex: 100000, colorEnd: "#000000", suffix:"Billions"});



});
