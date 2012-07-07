// todo: add audio in channels on electribe
// todo: rework electribe buttons to select values rather then just 0/127
// todo: button types

	var cssCode = ".widget{   border-color: #0e191b !important;  background-color: #426466 !important;  opacity: 0.8}  .slider_fill{ background-color: #333b45  !important;  }  #SelectedInterfacePage { background-size: 100%; background: url(http://192.168.1.76/live/1341600876_genevagraffiti_364059.jpeg)} #selectedInterface {background-color: #102828; opacity: 0.7;} ";
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	styleElement.appendChild(document.createTextNode(cssCode));
	document.getElementsByTagName("head")[0].appendChild(styleElement);

Control.data = {
    infoText: "bblaze control 1.4 template for integrating control, max4live, arduino and midi hardware",
};
	
Control.interface = {
    name: "Billie Blaze",
    orientation: "landscape",
    pages: [
[
{
"name": "masterLevel",
"type" : "Slider",
"x" : .01,
"y" : .01,
"width" : .01,
"height" : .8,
"startingValue" : 0,
"min" : 0,
"max" : 127,
"isInverted" : false,
"isVertical" : true,
"protocol" : "OSC",
"address": "/masterLevel",

},
// master faders
{
"name" : "Master",
"type" : "Slider",
"x" : .02,
"y" : .01,
"width" : .175,
"height" : .8,
"startingValue" : 0,
"min" : 0,
"max" : 1,
"isInverted" : false,
"isVertical" : true,
"protocol" : "OSC",
"address" : "/master",
"label" :"Master"

},
//Ch Sliders
{
"name" : "chVol",
"type" : "Slider",
"address": "/mixer/level/1",
"x" : .225,
"y" : .0,
"width" : .08,
"height" : .5,
"min" : 0,
"max" : 1,
"isInverted" : false,
"isVertical" : true,
"label" : "Drum Dry"
},

{
	"name" : "chVol",
	"type" : "Button",
	"address": "/mixer/mute/1",
	"x" : .225,
	"y" : .5,
	"width" : .08,
	"height" : .1,
	"min" : 0,
	"max" : 127,
	"label" : "Mute"
	},
	{
		"name" : "chVol",
		"type" : "Button",
		"address": "/mixer/select/1",
		"x" : .225,
		"y" : .6,
		"width" : .08,
		"height" : .1,

		"label" : "Select"
		},
{
		
	"name" : "chVol",
	"type" : "Slider",
	"address": "/mixer/level/2",
	"x" : .325,
	"y" : .0,
	"width" : .08,
	"height" : .5,
	"min" : 0,
	"max" : 1,
	"isInverted" : false,
	"isVertical" : true,
	"label" : "Drum Wet"
	},
	{
		"name" : "chVol",
		"type" : "Button",
		"address": "/mixer/mute/2",
		"x" : .325,
		"y" : .5,
		"width" : .08,
		"height" : .1,
		"min" : 0,
		"max" : 127,
		"label" : "Mute"
		},
		{
			"name" : "chVol",
			"type" : "Button",
			"address": "/mixer/select/2",
			"x" : .325,
			"y" : .6,
			"width" : .08,
			"height" : .1,
			"min" : 0,
			"max" : 127,

			"label" : "Select"
			},
	{
		"name" : "chVol",
		"type" : "Slider",
		"address": "/mixer/level/3",
		"x" : .425,
		"y" : .0,
		"width" : .08,
		"height" : .5,
		"min" : 0,
		"max" : 1,
		"isInverted" : false,
		"isVertical" : true,
		"label" : "ESX Main"
		},

		{
			"name" : "chVol",
			"type" : "Button",
			"address": "/mixer/mute/3",
			"x" : .425,
			"y" : .5,
			"width" : .08,
			"height" : .1,
			"min" : 0,
			"max" : 127,
			"label" : "Mute"
			},
			{
				"name" : "chVol",
				"type" : "Button",
				"address": "/mixer/select/3",
				"x" : .425,
				"y" : .6,
				"width" : .08,
				"height" : .1,
				"min" : 0,
				"max" : 127,
				"label" : "Select"
				},
				
],


// page 2


[
//Ch Sliders
{
"name" : "chVol",
"type" : "Slider",
"address": "/et/level/1",
"x" : .0,
"y" : .0,
"width" : .08,
"height" : .3,
"min" : 0,
"max" : 127,
"isInverted" : false,
"isVertical" : true,
"label" : "Kick Vol"
},

	{
		"name" : "chVol",
		"type" : "Slider",
		"address": "/et/level/2",
		"x" : .08,
		"y" : .0,
		"width" : .08,
		"height" : .3,
		"min" : 0,
		"max" : 127,
		"isInverted" : false,
		"isVertical" : true,
		"label" : "Snare Vol"
		},
		{
			"name" : "chVol",
			"type" : "Slider",
			"address": "/et/level/3",
			"x" : .16,
			"y" : .0,
			"width" : .08,
			"height" : .3,
			"min" : 0,
			"max" : 127,
			"isInverted" : false,
			"isVertical" : true,
			"label" : "Clap Vol"
			},
			{
				"name" : "chVol",
				"type" : "Slider",
				"address": "/et/level/4",
				"x" : .24,
				"y" : .0,
				"width" : .08,
				"height" : .3,
				"min" : 0,
				"max" : 127,
				"isInverted" : false,
				"isVertical" : true,
				"label" : "Perc Vol"
				},
				{
					"name" : "chVol",
					"type" : "Slider",
					"address": "/et/level/5",
					"x" : .32,
					"y" : .0,
					"width" : .08,
					"height" : .3,
					"min" : 0,
					"max" : 127,
					"isInverted" : false,
					"isVertical" : true,
					"label" : "Perc Vol"
					},
					{
						"name" : "chVol",
						"type" : "Slider",
						"address": "/et/level/6",
						"x" : .4,
						"y" : .0,
						"width" : .08,
						"height" : .3,
						"min" : 0,
						"max" : 127,
						"isInverted" : false,
						"isVertical" : true,
						"label" : "Hit Vol"
					},
						{
							"name" : "chVol",
							"type" : "Slider",
							"address": "/et/level/7",
							"x" : .48,
							"y" : .0,
							"width" : .08,
							"height" : .3,
							"min" : 0,
							"max" : 127,
							"isInverted" : false,
							"isVertical" : true,
							"label" : "Efx Vol"
							},
							{
								"name" : "chVol",
								"type" : "Slider",
								"address": "/et/level/8",
								"x" : .56,
								"y" : .0,
								"width" : .08,
								"height" : .3,
								"min" : 0,
								"max" : 127,
								"isInverted" : false,
								"isVertical" : true,
								"label" : "CHH Vol"
								},{
									"name" : "chVol",
									"type" : "Slider",
									"address": "/et/level/9",
									"x" : .64,
									"y" : .0,
									"width" : .08,
									"height" : .3,
									"min" : 0,
									"max" : 127,
									"isInverted" : false,
									"isVertical" : true,
									"label" : "OHH Vol"
									},

									
									
									{
										"name" : "chVol",
										"type" : "Slider",
										"address": "/et/cutoff/1",
										"x" : .0,
										"y" : .325,
										"width" : .08,
										"height" : .35,
										"min" : 0,
										"max" : 127,
										"isInverted" : false,
										"isVertical" : true,
										"label" : "Kick Cutoff"
										},

											{
												"name" : "chVol",
												"type" : "Slider",
												"address": "/et/cutoff/2",
												"x" : .08,
												"y" : .325,
												"width" : .08,
												"height" : .35,
												"min" : 0,
												"max" : 127,
												"isInverted" : false,
												"isVertical" : true,
												"label" : "Snare Cutoff"
												},
												{
													"name" : "chVol",
													"type" : "Slider",
													"address": "/et/cutoff/3",
													"x" : .16,
													"y" : .325,
													"width" : .08,
													"height" : .35,
													"min" : 0,
													"max" : 127,
													"isInverted" : false,
													"isVertical" : true,
													"label" : "Clap Cutoff"
													},
													{
														"name" : "chVol",
														"type" : "Slider",
														"address": "/et/cutoff/4",
														"x" : .24,
														"y" : .325,
														"width" : .08,
														"height" : .35,
														"min" : 0,
														"max" : 127,
														"isInverted" : false,
														"isVertical" : true,
														"label" : "Perc Cutoff"
														},
														{
															"name" : "chVol",
															"type" : "Slider",
															"address": "/et/cutoff/5",
															"x" : .32,
															"y" : .325,
															"width" : .08,
															"height" : .35,
															"min" : 0,
															"max" : 127,
															"isInverted" : false,
															"isVertical" : true,
															"label" : "Perc Cutoff"
															},
															{
																"name" : "chVol",
																"type" : "Slider",
																"address": "/et/cutoff/6",
																"x" : .4,
																"y" : .325,
																"width" : .08,
																"height" : .35,
																"min" : 0,
																"max" : 127,
																"isInverted" : false,
																"isVertical" : true,
																"label" : "Hit Cutoff"
																},
																{
																	"name" : "chVol",
																	"type" : "Slider",
																	"address": "/et/cutoff/7",
																	"x" : .48,
																	"y" : .325,
																	"width" : .08,
																	"height" : .35,
																	"min" : 0,
																	"max" : 127,
																	"isInverted" : false,
																	"isVertical" : true,
																	"label" : "EFX Cutoff"
																	},
																	{
																		"name" : "chVol",
																		"type" : "Slider",
																		"address": "/et/cutoff/8",
																		"x" : .56,
																		"y" : .325,
																		"width" : .08,
																		"height" : .35,
																		"min" : 0,
																		"max" : 127,
																		"isInverted" : false,
																		"isVertical" : true,
																		"label" : "CHH Cutoff"
																		},{
																			"name" : "chVol",
																			"type" : "Slider",
																			"address": "/et/cutoff/9",
																			"x" : .64,
																			"y" : .325,
																			"width" : .08,
																			"height" : .35,
																			"min" : 0,
																			"max" : 127,
																			"isInverted" : false,
																			"isVertical" : true,
																			"label" : "OHH Cutoff"
																			},

																			
																			
									
										{
										"name" : "et1cut",
										"type" : "Button",
										"x" : .0,
										"y" : .725,
										"width" : .08,"height" : .1,
										"address": "/et/fxsend/1",
										"min": 0,
										"max": 127,
										"label": "Kick FX Send"
										},
										{
											"name" : "et1cut",
											"type" : "Button",
											"x" : .08,
											"y" : .725,
											"width" : .08,"height" : .1,
											"address": "/et/fxsend/2",
											"min": 0,
											"max": 127,
											"label": "Snare FX Send"
											},
											{
												"name" : "et1cut",
												"type" : "Button",
												"x" : .16,
												"y" : .725,
												"width" : .08,"height" : .1,
												"address": "/et/fxsend/3",
												"min": 0,
												"max": 127,
												"label": "Clap FX Send"
												},
												{
													"name" : "et1cut",
													"type" : "Button",
													"x" : .24,
													"y" : .725,
													"width" : .08,"height" : .1,
													"address": "/et/fxsend/4",
													"min": 0,
													"max": 127,
													"label": "Perc FX Send"
													},
													{
														"name" : "et1cut",
														"type" : "Button",
														"x" : .32,
														"y" : .725,
														"width" : .08,"height" : .1,
														"address": "/et/fxsend/5",
														"min": 0,
														"max": 127,
														"label": "Perc FX Send"
														},
														{
															"name" : "et1cut",
															"type" : "Button",
															"x" : .4,
															"y" : .725,
															"width" : .08,"height" : .1,
															"address": "/et/fxsend/6",
															"min": 0,
															"max": 127,
															"label": "Hit FX Send"
															},
															{
																"name" : "et1cut",
																"type" : "Button",
																"x" : .48,
																"y" : .725,
																"width" : .08,"height" : .1,
																"address": "/et/fxsend/7",
																"min": 0,
																"max": 127,
																"label": "EFX FX Send"
																},
																{
																	"name" : "et1cut",
																	"type" : "Button",
																	"x" : .56,
																	"y" : .725,
																	"width" : .08,"height" : .1,
																	"address": "/et/fxsend/8",
																	"min": 0,
																	"max": 127,
																	"label": "CHH FX Send"
																	},{
																		"name" : "et1cut",
																		"type" : "Button",
																		"x" : .64,
																		"y" : .725,
																		"width" : .08,"height" : .1,
																		"address": "/et/fxsend/9",
																		"min": 0,
																		"max": 127,
																		"label": "OHH FX Send"
																		},
																	
										
										{
		"name" : "et1cut",
		"type" : "Slider",
		"x" : .8,
		"y" : .0,
		"width" : .1,
		"height" : .3,
		"address": "/et/fx1/edit1",
		"min": 0,
		"max": 127,
		"label" : "EFX1 Edit1"
		},
		
		{
			"name" : "et1cut",
			"type" : "Slider",
			"x" : .9,
			"y" : .0,
			"width" : .1,
			"height" : .3,
			"address": "/et/fx1/edit2",
			"min": 0,
			"max": 127,
			"label" : "EFX1 Edit2"
		},
			
			
			
				
				{
					"name" : "et1cut",
					"type" : "Slider",
					"x" : .8,
					"y" : .31,
					"width" : .1,"height" : .3,
					"address": "/et/fx2/edit1",
					"min": 0,
					"max": 127,
					"label" : "EFX2 Edit1"
					},
					
					{
						"name" : "et1cut",
						"type" : "Slider",
						"x" : .9,
						"y" : .31,
						"width" : .1,"height" : .3,
						"address": "/et/fx2/edit2",
						"min": 0,
						"max": 127,
						"label" : "EFX2 Edit2"
					},
						

						
							
							{
								"name" : "et1cut",
								"type" : "Slider",
								"x" : .8,
								"y" : .62,
								"width" : .1,"height" : .3,
								"address": "/et/fx3/edit1",
								"min": 0,
								"max": 127,
								"label" : "EFX3 Edit1"
								},
								
								{
									"name" : "et1cut",
									"type" : "Slider",
									"x" : .9,
									"y" : .62,
									"width" : .1,"height" : .3,
									"address": "/et/fx3/edit2",
									"min": 0,
									"max": 127,
									"label" : "EFX3 Edit2"
									},



	
],

//Page 5 - virus
[
 

	
// Virus Ch 1
{
"name" : "vi1vol",
"address": "/virus/vol/1",
"type" : "Slider",
"x" : .0,
"y" : 0,"min": 0,
"max": 127,
"width" : .08,
"height" : 0.825,
"label": "Bass Vol"
},

{
	"name" : "vi1pit",
	"address": "/virus/cutoff/1",
	"type" : "Slider",
	"x" : .1,
	"y" : 0,"min": 0,
	"max": 127,
	"width" : .075,
	"height" : 0.25,
	"label": "Bass Cutoff"
},
	{
		"name" : "vi1pit",
		"address": "/virus/reso/1",
		"type" : "Slider",
		"x" : .1,
		"y" : .275,"min": 0,
		"max": 127,
		"width" : .075,
		"height" : 0.25,
		"label": "Bass Reso"
		},
		{
			"name" : "vi1pit",
			"address": "/virus/release/1",
			"type" : "Slider",
			"x" : .1,
			"y" : .575,"min": 0,
			"max": 127,
			"width" : .075,
			"height" : 0.25,
			"label": "Bass Release"
			},
			// Virus Ch 2
			{
			"name" : "vi2vol",
			"address": "/virus/vol/2",
			"type" : "Slider",
			"x" : .2,
			"y" : 0,"min": 0,
			"max": 127,
			"width" : .08,
			"height" : 0.825,
			"label": "Synth1 Vol"
			},

			{
				"name" : "vi1pit",
				"address": "/virus/cutoff/2",
				"type" : "Slider",
				"x" : .3,
				"y" : 0,
				"width" : .075,
				"height" : 0.25,"min": 0,
				"max": 127,
				"label": "Synth1 Cutoff"
			},
				{
					"name" : "vi1pit",
					"address": "/virus/reso/2",
					"type" : "Slider",
					"x" : .3,
					"y" : .275,
					"width" : .075,
					"height" : 0.25,"min": 0,
					"max": 127,
					"label": "Synth1 Reso"
					},
					{
						"name" : "vi1pit",
						"address": "/virus/release/2",
						"type" : "Slider",
						"x" : .3,
						"y" : .575,
						"width" : .075,
						"height" : 0.25,
						"label": "Synth1 Release"
						},
						
						// Virus Ch 3
						{
						"name" : "vi2vol",
						"address": "/virus/vol/3",
						"type" : "Slider",
						"x" : .4,
						"y" : 0,
						"width" : .08,
						"height" : 0.825,"min": 0,
						"max": 127,
						"label": "Synth2 Vol"
						},

						{
							"name" : "vi1pit",
							"address": "/virus/cutoff/3",
							"type" : "Slider",
							"x" : .5,
							"y" : 0,
							"width" : .075,
							"height" : 0.25,"min": 0,
							"max": 127,
							"label": "Synth2 Cutoff"
						},
							{
								"name" : "vi1pit",
								"address": "/virus/reso/3",
								"type" : "Slider",
								"x" : .5,
								"y" : .275,
								"width" : .075,
								"height" : 0.25,"min": 0,
								"max": 127,
								"label": "Synth2 Reso"
								},
								{
									"name" : "vi1pit",
									"address": "/virus/release/3",
									"type" : "Slider",
									"x" : .5,
									"y" : .575,
									"width" : .075,
									"height" : 0.25,"min": 0,
									"max": 127,
									"label": "Synth2 Release"
									},
									
									// Virus Ch 4
									{
									"name" : "vi2vol",
									"address": "/virus/vol/4",
									"type" : "Slider",
									"x" : .6,
									"y" : 0,
									"width" : .08,
									"height" : 0.825,"min": 0,
									"max": 127,
									"label": "Synth3 Vol"
									},

									{
										"name" : "vi1pit",
										"address": "/virus/cutoff/4",
										"type" : "Slider",
										"x" : .7,
										"y" : 0,
										"width" : .075,
										"height" : 0.25,"min": 0,
										"max": 127,
										"label": "Synth3 Cutoff"
									},
										{
											"name" : "vi1pit",
											"address": "/virus/reso/4",
											"type" : "Slider",
											"x" : .7,
											"y" : .275,
											"width" : .075,
											"height" : 0.25,"min": 0,
											"max": 127,
											"label": "Synt3 Reso"
											},
											{
												"name" : "vi1pit",
												"address": "/virus/release/4",
												"type" : "Slider",
												"x" : .7,
												"y" : .575,
												"width" : .075,
												"height" : 0.25,"min": 0,
												"max": 127,
												"label": "Synth3 Release"
												},
												

{
	"name" : "vi2vol",
	"address": "/virus/vol/5",
	"type" : "Slider",
	"x" : .8,
	"y" : 0,
	"width" : .08,
	"height" : 0.825,"min": 0,
	"max": 127,
	"label": "Atmos Vol"
	},

	{
		"name" : "vi1pit",
		"address": "/virus/cutoff/5",
		"type" : "Slider",
		"x" : .9,
		"y" : 0,
		"width" : .075,
		"height" : 0.25,"min": 0,
		"max": 127,
		"label": "Atmos Cutoff"
	},
		{
			"name" : "vi1pit",
			"address": "/virus/reso/5",
			"type" : "Slider",
			"x" : .9,
			"y" : .275,
			"width" : .075,
			"height" : 0.25,"min": 0,
			"max": 127,
			"label": "Atmos Reso"
			},
			{
				"name" : "vi1pit",
				"address": "/virus/release/5",
				"type" : "Slider",
				"x" : .9,
				"y" : .575,
				"width" : .075,
				"height" : 0.25,"min": 0,
				"max": 127,
				"label": "Atmos Release"
				},
				],
				
				[
				 ]

    ],

    constants: [
	{
     "name": "tabButton",
     "type": "Button",
     "x": .0,
     "y": .85,
     "width": .09,
     "height": .05,
     "color": "#333",
     "min": 0,
     "max": 1,
     "ontouchstart": "Control.toggleToolbar()",
     "label" : "menu",
 	},
     
     {
     "name": "page0Button",
     "type": "Button",
     "x": .2,
     "y": .85,
     "width": .09,
     "height": .05,
     "color": "#666666",
     "mode": "contact",
     "startingValue": 1,
     "ontouchstart": "Control.changePage(0);",
     "label" : "Master",
     }, {
     "name": "page1Button",
     "type": "Button",
     "x": .3,
     "y": .85,
     "width": .09,
     "height": .05,
     "color": "#ff0",
     "mode": "contact",
     "ontouchstart": "Control.changePage(1);",
     "label": "Electribe",
     },

         {
             "name": "page3Button",
             "type": "Button",
             "x": .4,
             "y": .85,
             "width": .09,
             "height": .05,
             "color": "#ff0",
             "mode": "contact",
             "ontouchstart": "Control.changePage(2);",
             "label": "Virus",
             },
             {
                 "name": "page4Button",
                 "type": "Button",
                 "x": .5,
                 "y": .85,
                 "width": .09,
                 "height": .05,
                 "color": "#ff0",
                 "mode": "contact",
                 "ontouchstart": "Control.changePage(3);",
                 "label": "Effects",
                 },    
                 
     {
    	 "name" : "refreshButton",
    	 "type" : "Button", "mode" : "contact",
    	 "x" : .1,	"y" : .85,
    	 "width" : .09,	"height" : .05,
    	 "ontouchstart" : "Control.interfaceManager.refreshInterface()",
    	 "label":"Refresh"
    	 },
    	 
    ],
};
