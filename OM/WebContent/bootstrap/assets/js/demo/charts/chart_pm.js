"use strict";$(document).ready(function(){var a=[[1,55],[2,45],[3,73],[4,89],[5,32],[6,93],[7,104],[8,32],[9,40],[10,96],[11,163],[12,208],[13,305],[14,201],[15,109],[16,156],[17,90],[18,56],[19,68],[20,41],[21,35],[22,33],[23,105],[24,67]];var d=$.plot("#chart_pm",[{data:a,labels:{step:1},label:"PM2.5",color:App.getLayoutColorCode("blue")}],$.extend(true,{},Plugins.getFlotDefaults(),{series:{lines:{fill:true,lineWidth:1.5},points:{show:true,radius:2.5,lineWidth:1.1},shadowSize:5,grow:{active:true,growings:[{stepMode:"maximum"}]}},grid:{hoverable:true,clickable:true},yaxis:{min:0,max:400},xaxis:{ticks: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],tickDecimals:0},tooltip:true,tooltipOpts:{content:"%s: %y"}}))});