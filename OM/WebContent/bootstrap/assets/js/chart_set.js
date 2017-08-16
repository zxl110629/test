
function init_chart(name,title,y_title,datelist,serieslist,interval)//////曲线图的初始化设置///////
{
	var chart;
    chart = new Highcharts.Chart({
        chart: {
		 	renderTo: name,
        	type: 'area',
            zoomType: 'x',
            marginRight: 5,//右边间距  
            marginBottom: 36,//底部间距/空隙
            marginLeft: 60,//左边间距  
            marginTop: 32//顶部间距/空隙
        },
        title: {
        	//text: ''
            text: title
        },
        subtitle: {
           // text: document.ontouchstart === undefined ?'绘图区域单击拖动可以放大' : ''
        },
        
        xAxis: {
        tickInterval: interval,
         labels:{
                x:45//调节x偏移
                //y:-35,//调节y偏移
                //rotation:25//调节倾斜角度偏移
             },
            categories:datelist
        },
        yAxis: {
            title: {
                text: y_title
            },
              min: 0
        },
        exporting :{
		enabled:false		
		}, 
        credits: {
                    enabled: false
                },
        legend: {
             align: 'right', //水平方向位置
	            verticalAlign: 'top', //垂直方向位置

        },
        colors: [
				  {
					  linearGradient: {x1: 0,y1: 0,x2: 0,y2: 1,x3:Highcharts.getOptions().colors[0]},
					  stops: [[0, Highcharts.getOptions().colors[0]]]
				  }, 
				  {
					  linearGradient: {x1: 0,y1: 0,x2: 0,y2: 1,x3:Highcharts.getOptions().colors[8]},
					  stops: [[0, Highcharts.getOptions().colors[8]]]
				  }, 
				  {
					  linearGradient: {x1: 0,y1: 0,x2: 0,y2: 1,x3:Highcharts.getOptions().colors[1]},
					  stops: [[0, Highcharts.getOptions().colors[1]]]
				  }, 
				  {
					  linearGradient: {x1: 0,y1: 0,x2: 0,y2: 1,x3:Highcharts.getOptions().colors[2]},
					  stops: [[0, Highcharts.getOptions().colors[2]]]
				  }, 
				  {
					  linearGradient: {x1: 0,y1: 0,x2: 0,y2: 1,x3:Highcharts.getOptions().colors[3]},
					  stops: [[0, Highcharts.getOptions().colors[3]]]
				  }, 
				  {
					  linearGradient: {x1: 0,y1: 0,x2: 0,y2: 1,x3:Highcharts.getOptions().colors[4]},
					  stops: [[0, Highcharts.getOptions().colors[4]]]
				  }, 
				  {
					  linearGradient: {x1: 0,y1: 0,x2: 0,y2: 1,x3:Highcharts.getOptions().colors[5]},
					  stops: [[0, Highcharts.getOptions().colors[5]]]
				  }, 

		],
		 tooltip: { pointFormat: '<span style="color:{series.color.linearGradient.x3};">{series.name}</span>: <b>{point.y}</b><br/>', shared: true },
        plotOptions:{
			 series:{
			 connectNulls: true,
			 events:{
		            legendItemClick: function(e) 
		            {
		                var index = this.index;
		                var series = this.chart.series;
		                if (!series[index].visible) 
		                {
		                    for (var i = 0; i < series.length; i++) 
		                    {
		                    	if(series[index].name=="PM2.5"||series[index].name=="PM10")
		                    	{
		                    		if(series[i].name=="PM2.5"||series[i].name=="PM10")
		                    		{
		                    			if(series[index].name==series[i].name)
		                    				series[index].show();
		                    			else
		                    				continue;
		                    		}
		                    	}
		                        var s = series[i];
		                        i === index ? s.show() : s.hide();
		                    }
		                }
		                else
		                {
		                	for (var i = 0; i < series.length; i++) 
		                    {
		                		if (series[i].visible) 
				                {
		                			if(i!=index)
		                				series[index].hide();
				                }
		                    }
		                }

		                return false;
		            }
		        }
			 },
            area: {
				 fillOpacity: 0.1,
                marker: {
        			enabled: false, 
        			symbol: 'circle',
                    radius: 2
                },
                //shadow:true,
                lineWidth: 2,
                states: {
                    hover: {
                        lineWidth:2,
                        enabled: true
                    }
                },
                threshold: null
            }
        },

        series: serieslist
    });
}

function init_chart_colunmn3d(name,title,y_title,serieslist)//////曲线图的初始化设置///////
{
	var chart;
    chart = new Highcharts.Chart({
        chart: {
		 	renderTo: name,
		 	 type: 'column',
		 	 	marginRight: 35,//右边间距  
	            marginBottom: 45,//底部间距/空隙
	            marginLeft: 55,//左边间距  
	            marginTop: 32,//顶部间距/空隙
	             options3d: {
	                enabled: true,
	                alpha: 15,
	                beta: 15,
	                depth: 50,
	                viewDistance: 25
	        }
        },
        title: {
           text: title
        },
        subtitle: {
           // text: document.ontouchstart === undefined ?'绘图区域单击拖动可以放大' : ''
        },
        
        xAxis: {
            categories:['优','良','轻度污染','中度污染','重度污染']
        },
        yAxis: {
            title: {
                text: y_title
            },
              min: 0
        },
        exporting :{
		enabled:false		
		}, 
        credits: {
                    enabled: false
                },
        legend: {
                	enabled: false

        },
        tooltip: { pointFormat: '记录数：{point.y}<br/>', shared: true },
        plotOptions: {
        	 column: {
            depth: 25
        	}
        },

        series: serieslist
    });
}
function init_chart_pie3d(name,title,serieslist)//////曲线图的初始化设置///////
{
	var chart;
    chart = new Highcharts.Chart({
    	 chart: {
    	renderTo: name,
	        type: 'pie',
	        marginRight: 5,//右边间距  
            marginBottom: 35,//底部间距/空隙
            marginLeft: 60,//左边间距  
            marginTop: 32,//顶部间距/空隙
	        options3d: {
	            enabled: true,
	            alpha: 45
	        }
	    },
        title: {
           text: title
        },
        subtitle: {
           // text: document.ontouchstart === undefined ?'绘图区域单击拖动可以放大' : ''
        },
        exporting :{
		enabled:false		
		}, 
        credits: {
                    enabled: false
                },
        legend: {
                	enabled: false

        },
        tooltip: {
            formatter: function() {
               return '<b>'+ this.point.name +'</b>: '+ Highcharts.numberFormat(this.percentage, 1) +'% ('+
                            Highcharts.numberFormat(this.y, 0, ',') +' 个)';
            }
         },
       // tooltip: { pointFormat: '记录数：{point.y}<br/>', shared: true },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                innerSize: 100,
                colors:['#6BBF47','#CDCD00','#ED7621','#EB1D25','#9C1B54'],
                depth: 35,
                dataLabels: {
                    enabled: true,
                    formatter: function() {
        	 return '<b>'+ this.point.name +'</b>: '+ Highcharts.numberFormat(this.percentage, 1) +'% ('+
             Highcharts.numberFormat(this.y, 0, ',') +' 个)';
         		}
                }
            }
        },

        series: serieslist
    });
}
function getJsonLength(jsonData){

	var jsonLength = 0;

	for(var item in jsonData){

	jsonLength++;

	}

	return jsonLength;

	}


