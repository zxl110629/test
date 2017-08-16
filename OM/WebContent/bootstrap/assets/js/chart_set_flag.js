
function init_chart(name,title,y_title,datelist,serieslist,plotLineslist,interval)//////曲线图的初始化设置///////
{
	var chart;
    chart = new Highcharts.Chart({
        chart: {
		 	renderTo: name,
        	type: 'area',
            zoomType: 'x',
            marginRight: 5,//右边间距  
            marginBottom: 33,//底部间距/空隙
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
            plotLines:plotLineslist,
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
        plotOptions: {
			 series:{
			 connectNulls: true,
			 events: {
		            legendItemClick: function(e) {
		                var index = this.index;

		                var series = this.chart.series;

		                if (!series[index].visible) {

		                    for (var i = 0; i < series.length; i++) {

		                        var s = series[i];

		                        i === index ? s.show() : s.hide();
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

function getJsonLength(jsonData){

	var jsonLength = 0;

	for(var item in jsonData){

	jsonLength++;

	}

	return jsonLength;

	}