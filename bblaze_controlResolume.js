

	var cssCode = "  #SelectedInterfacePage { background-size: 100%; background: url(http://www.djexq.com/img/diffuse.png)} ";
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	styleElement.appendChild(document.createTextNode(cssCode));
	document.getElementsByTagName("head")[0].appendChild(styleElement);

Control.data = {
    infoText: "bblaze control 1.4 template for resolume",
};
	
Control.interface = {
    name: "Resolume",
    orientation: "landscape",
    pages: [
[
// fragment efx

{
     "name": "tabButton",
     "type": "Button",
     "x": .03,
     "y": .01,
     "width": .09,
     "height": .05,
     "color": "#333",
     "min": 0,
     "max": 1,
     "label" : "Fragment",
	 "address": "/composition/video/effect1/bypassed"
	 },

	 
{
"type" : "Slider",
"x" : .02,
"y" : .06,
"width" : .05,
"height" : .35,
"startingValue" : 0,
"min" : 0,
"max" : 1,
"isInverted" : false,
"isVertical" : true,
"protocol" : "OSC",
"address" : "/composition/link1/values",
"label" :"Frags"
},
{
"type" : "Slider",
"x" : .08,
"y" : .06,
"width" : .05,
"height" : .35,
"startingValue" : 0,
"min" : 0,
"max" : 1,
"isInverted" : false,
"isVertical" : true,
"protocol" : "OSC",
"address" : "/composition/link4/values",
"label" :"Size"
},


{
"type" : "Slider",
"x" : .02,
"y" : .425,
"width" : .05,
"height" : .35,
"startingValue" : 0,
"min" : 0,
"max" : 1,
"isInverted" : false,
"isVertical" : true,
"protocol" : "OSC",
"address" : "/composition/link2/values",
"label" :"Distance"
},
{
"type" : "Slider",
"x" : .08,
"y" : .425,
"width" : .05,
"height" : .35,
"startingValue" : 0,
"min" : 0,
"max" : 1,
"isInverted" : false,
"isVertical" : true,
"protocol" : "OSC",
"address" : "/composition/link3/values",
"label" :"Rotation"
},


{
"type" : "Slider",
"x" : .15,
"y" : .42,
"width" : .1,	
"height" : .35,
"startingValue" : 0,
"min" : 0,
"max" : 1,
"isInverted" : false,
"isVertical" : true,
"protocol" : "OSC",
"address" : "/composition/link7/values",
"label" :"Wave Mode"
},
{
"type" : "Slider",
"x" : .15,
"y" : .07,
"width" : .1,
"height" : .35,
"startingValue" : 0,
"min" : 0,
"max" : 1,
"isInverted" : false,
"isVertical" : true,
"protocol" : "OSC",
"address" : "/composition/link8/values",
"label" :"Wave"
},



	

	{
     "name": "tabButton",
     "type": "Button",
     "x": .155,
     "y": .02,
     "width": .09,
     "height": .05,
     "color": "#333",
     "min": 0,
     "max": 1,
     "label" : "Wave Warp",
	 "address": "/composition/video/effect2/bypassed"
 	},


	{
     "name": "tabButton",
     "type": "Button",
     "x": .28,
     "y": .01,
     "width": .09,
     "height": .05,
     "color": "#333",
     "min": 0,
     "max": 1,
     "label" : "Mirror",
	 "address": "/composition/video/effect3/bypassed"
	 },


{
"type" : "Slider",
"x" : .275,
"y" : .07,
"width" : .1,
"height" : .35,
"startingValue" : 0,
"min" : 0,
"max" : 1,
"isInverted" : false,
"isVertical" : true,
"protocol" : "OSC",
"address" : "/composition/link5/values",
"label" :"Mirror"
},



{
"type" : "Slider",
"x" : .275,
"y" : .42,
"width" : .1,
"height" : .35,
"startingValue" : 0,
"min" : 0,
"max" : 1,
"isInverted" : false,
"isVertical" : true,
"protocol" : "OSC",
"address" : "/composition/link6/values",
"label" :"Mirror X"
},

{
"type" : "Slider",
"x" : .5,
"y" : .01,
"width" : .075,
"height" : .4,
"startingValue" : 0,
"min" : 0,
"max" : 1,
"isInverted" : false,
"isVertical" : true,
"protocol" : "OSC",
"address" : "/composition/video/effect4/param1/values",
"label" :"Brightness"
},



{
"type" : "Slider",
"x" : .6,
"y" : .01,
"width" : .075,
"height" : .4,
"startingValue" : 0,
"min" : 0,
"max" : 1,
"isInverted" : false,
"isVertical" : true,
"protocol" : "OSC",
"address" : "/composition/video/effect4/param2/values",
"label" :"Contrast"
},


		
{
"type" : "Slider",
"x" : .7,
"y" : .01,
"width" : .075,
"height" : .4,
"startingValue" : 0,
"min" : 0,
"max" : 1,
"isInverted" : false,
"isVertical" : true,
"protocol" : "OSC",
"address" : "/playbackcontroller/bpm",
"label" :"Tempo"
},

{
"type" : "Slider",
"x" : .5,
"y" : .5,
"width" : .075,
"height" : .4,
"startingValue" : 0,
"min" : 0,
"max" : 1,
"isInverted" : false,
"isVertical" : true,
"protocol" : "OSC",
"address" : "/composition/video/rotatex/values",
"label" :"Rotate X"
},
{
"type" : "Slider",
"x" : .6,
"y" : .5,
"width" : .075,
"height" : .4,
"startingValue" : 0,
"min" : 0,
"max" : 1,
"isInverted" : false,
"isVertical" : true,
"protocol" : "OSC",
"address" : "/composition/video/rotatey/values",
"label" :"Rotate Y"
},
{
"type" : "Slider",
"x" : .7,
"y" : .5,
"width" : .075,
"height" : .4,
"startingValue" : 0,
"min" : 0,
"max" : 1,
"isInverted" : false,
"isVertical" : true,
"protocol" : "OSC",
"address" : "/composition/video/rotatez/values",
"label" :"Rotate Z"
},

	 

{
"type" : "Slider",
"x" : .79,
"y" : .01,
"width" : .075,
"height" : .4,
"startingValue" : 0,
"min" : 0,
"max" : 1,
"isInverted" : false,
"isVertical" : true,
"protocol" : "OSC",
"address" : "/activelayer/transitiontime",
"label" :"Transition Time"
},
{
"type" : "Slider",
"x" : .88,
"y" : .01,
"width" : .075,
"height" : .4,
"startingValue" : 0,
"min" : 0,
"max" : 36,
"isInverted" : false,
"isVertical" : true,
"protocol" : "OSC",
"address" : "/activelayer/video/transitionmixeroption",
"label" :"Transition"
},



	{
     "name": "tabButton",
     "type": "Button",
     "x": .85,
     "y": .55,
     "width": .09,
     "height": .05,
     "color": "#333",
     "min": 3,
     "max": 3,
     "label" : "hold",
	 "address": "/activelayer/autopilot/action"
	 },


	{
     "name": "tabButton",
     "type": "Button",
     "x": .85,
     "y": .65,
     "width": .09,
     "height": .05,
     "color": "#333",
     "min": 0,
     "max": 0,
     "label" : "forward",
	 "address": "/activelayer/autopilot/action"
 	},

		{
     "name": "tabButton",
     "type": "Button",
     "x": .85,
     "y": .75,
     "width": .09,
     "height": .05,
     "color": "#333",
     "min": 2,
     "max": 2,
     "label" : "random",
	 "address": "/activelayer/autopilot/action"
 	},
	{
     "name": "tabButton",
     "type": "Button",
     "x": .85,
     "y": .85,
     "width": .09,
     "height": .05,
     "color": "#333",
     "min": 1,
     "max": 1,
     "label" : "back",
	 "address": "/activelayer/autopilot/action"
	 },


],


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
    	 "name" : "refreshButton",
    	 "type" : "Button", "mode" : "contact",
    	 "x" : .1,	"y" : .85,
    	 "width" : .09,	"height" : .05,
    	 "ontouchstart" : "Control.interfaceManager.refreshInterface()",
    	 "label":"Refresh"
    	 },
    	 
    ],
};
