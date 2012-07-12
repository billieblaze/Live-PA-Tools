

	var cssCode = ".widget{   border-color: #0e191b !important;  background-color: #426466 !important;  opacity: 0.8}  .slider_fill{ background-color: #333b45  !important;  }  #SelectedInterfacePage { background-size: 100%; background: url(http://www.djexq.com/img/diffuse.png)} #selectedInterface {background-color: #102828; opacity: 0.7;} ";
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
// master faders
{
"type" : "Slider",
"x" : .02,
"y" : .01,
"width" : .1,
"height" : .4,
"startingValue" : 0,
"min" : 0,
"max" : 1,
"isInverted" : false,
"isVertical" : true,
"protocol" : "OSC",
"address" : "/composition/link1/values",
"label" :"Fragments"
},
{
"type" : "Slider",
"x" : .14,
"y" : .01,
"width" : .1,
"height" : .4,
"startingValue" : 0,
"min" : 0,
"max" : 1,
"isInverted" : false,
"isVertical" : true,
"protocol" : "OSC",
"address" : "/composition/link2/values",
"label" :"Frag Distance"
},
{
"type" : "Slider",
"x" : .26,
"y" : .01,
"width" : .1,	
"height" : .4,
"startingValue" : 0,
"min" : 0,
"max" : 1,
"isInverted" : false,
"isVertical" : true,
"protocol" : "OSC",
"address" : "/composition/link3/values",
"label" :"Frag Rotation"
},
{
"type" : "Slider",
"x" : .38,
"y" : .01,
"width" : .1,
"height" : .4,
"startingValue" : 0,
"min" : 0,
"max" : 1,
"isInverted" : false,
"isVertical" : true,
"protocol" : "OSC",
"address" : "/composition/link4/values",
"label" :"Frag Size"
},

{
"type" : "Slider",
"x" : .02,
"y" : .42,
"width" : .1,
"height" : .4,
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
"x" : .14,
"y" : .42,
"width" : .1,
"height" : .4,
"startingValue" : 0,
"min" : 0,
"max" : 1,
"isInverted" : false,
"isVertical" : true,
"protocol" : "OSC",
"address" : "/composition/link6/values",
"label" :"RGB"
},
{
"type" : "Slider",
"x" : .26,
"y" : .42,
"width" : .1,	
"height" : .4,
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
"x" : .38,
"y" : .42,
"width" : .1,
"height" : .4,
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
     "x": .5,
     "y": .15,
     "width": .09,
     "height": .05,
     "color": "#333",
     "min": 0,
     "max": 1,
     "label" : "Fragment",
	 "address": "/composition/video/effect1/bypassed"
	 },


	{
     "name": "tabButton",
     "type": "Button",
     "x": .5,
     "y": .25,
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
     "x": .5,
     "y": .35,
     "width": .09,
     "height": .05,
     "color": "#333",
     "min": 0,
     "max": 1,
     "label" : "Shift RGB",
	 "address": "/composition/video/effect3/bypassed"
 	},
	{
     "name": "tabButton",
     "type": "Button",
     "x": .5,
     "y": .45,
     "width": .09,
     "height": .05,
     "color": "#333",
     "min": 0,
     "max": 1,
     "label" : "Mirror",
	 "address": "/composition/video/effect4/bypassed"
	 },


{
"type" : "Slider",
"x" : .7,
"y" : .01,
"width" : .075,
"height" : .4,
"startingValue" : 0,
"min" : 0,
"max" : 36,
"isInverted" : false,
"isVertical" : true,
"protocol" : "OSC",
"address" : "/activelayer/video/mixeroption4",
"label" :"Blend Mode"
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
"type" : "Slider",
"x" : .7,
"y" : .5,
"width" : .1,
"height" : .4,
"startingValue" : 0,
"min" : 0,
"max" : 1,
"isInverted" : false,
"isVertical" : true,
"protocol" : "OSC",
"address" : "/composition/video/scale/values",
"label" :"Scale"
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
