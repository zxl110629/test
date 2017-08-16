
function table_init(ajaxurl,aoColumns,aoColumnDefs,stateflag,plotLineslist)//////tabel获取后台数据的初始化设置///////
{
	  $.ajaxSetup ({
	         cache: false //关闭AJAX缓存
	     });
     	 $("#tablelist").dataTable({
     	 	"oLanguage" : { // 汉化
						"sProcessing" : "正在加载数据...",
						"sLengthMenu" : "_MENU_条  ",
						"sZeroRecords" : "没有您要搜索的内容",
						"sInfo" : " 共 _TOTAL_条",
						"sInfoEmpty" : "记录数为0",
						"sInfoFiltered" : "(总共 _MAX_  条)",
						"sInfoPostFix" : "",
						"sSearch" : "搜索",
						"sUrl" : "",
						"oPaginate" : {
						"sFirst" : "第一页",
						"sPrevious" : " 上一页 ",
						"sNext" : " 下一页 ",
						"sLast" : " 最后一页 "
						}
			},
     	 	"bPaginate" : true,// 分页按钮  
            "bFilter" : true,// 搜索栏  
            "bLengthChange" : true,// 每行显示记录数  
     	 	"bProcessing": true, // 是否显示取数据时的那个等待提示        
     	 	"iDisplayLength" : 10,// 每页显示行数  
     	 	"iDisplayStart" : 0,// 从第几行开始显示数据
            "bSort" : false,// 排序  
            "bStateSave" : stateflag,
            "bInfo" : true,// Showing 1 to 10 of 23 entries 总记录数没也显示多少等信息         
     	 	"bServerSide": true,//这个用来指明是通过服务端来取数据                
     	 	"sAjaxSource": ajaxurl,   //这个是请求的地址   
     	 	"sScrollY": "100%", 
            "fnInitComplete": function() {  
                this.fnAdjustColumnSizing(true);  
             },   
            "sDom": 'rt<"row" <"dataTables_footer clearfix" <"col-md-foot-l"l><"col-md-foot-i"i><"col-md-foot-p"p>>>',
            "fnServerParams" :setaoData,   
            "aoColumns" :aoColumns, 
            "aoColumnDefs":aoColumnDefs,    
             //"fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
			      // 所有的a都加粗  改变行里某个单元格的显示样式
			 //     if ( aData[4] == "A" )
			 //     {
			 //       $('td:eq(4)', nRow).html( '<b>A</b>' );
			 //     }      
			 //     },  
     	 	"fnServerData": retrieveData // 获取数据的处理函数
     	 });
     	 
     	 function retrieveData(sSource,aoData,fnCallback) {   
        		$.ajax({                
        			url : sSource,//这个就是请求地址对应sAjaxSource                
        			data : {"aoData":JSON.stringify(aoData)},//这个是把datatable的一些基本数据传给后台,比如起始位置,每页显示的行数               
        			type : 'get',                
        			dataType : 'json',                
        			async : false,                
        			success : function(result) { 
        				var rddata =  eval("(" + result.tablelist + ")");
        				fnCallback(rddata);//把返回的数据传给这个方法就可以了,datatable会自动绑定数据的  
        				
        				var datelist =eval("(" + result.datelist + ")");
        				var serieslist =eval("(" + result.series+ ")");
        				var datalength=getJsonLength(datelist);
        				//var title = document.getElementById("title").innerHTML+'实时曲线图';
        				if(_refresh_chart)
        					init_chart('mychart','','监测值',datelist,serieslist,plotLineslist,parseInt(datalength/5));
        				_refresh_chart =false;//曲线出来后将曲线刷新参数改成不刷新，只有点击查询后再刷新曲线
        				document.getElementsByName("thead")[1].innerHTML = document.getElementsByName("thead")[0].innerHTML; 
        				},
        				error : function() {}            
        				});
        			}

}

function toSearch(url,aoData)
{
 	$("#tablelist").dataTable().fnSettings()._iDisplayStart=0;
 	$("#tablelist").dataTable().fnClearTable();    			
}


function toDelete(delurl,id)
{	
	swal({
		  title: "确定要删除该信息吗?",
		  text: "",
		  type: "warning",
		  showCancelButton: true,
		  confirmButtonColor: "#DD6B55",
		  confirmButtonText: "确定",
		  closeOnConfirm: false
		},
		function(isConfirm){
			if (isConfirm) 
			{     
				$.ajax({
					url:delurl,
					type:'get',
					dataType : 'json',
					data:{"id":id},
					async : false,
					tranditional:true,
					success: function(data)
					{
			  			if (data ==true)
			  			{
							//bootbox.alert('删除成功!');
							swal("删除成功!", "", "success");
			  				start = $("#tablelist").dataTable().fnSettings()._iDisplayStart;
			  				total = $("#tablelist").dataTable().fnSettings().fnRecordsDisplay();
			  				
			  				if((total-start)==1){
			  					if (start > 0) {
			  						$("#tablelist").dataTable().fnPageChange( 'previous', true );
			  					}
			  				}
			  				window.location.href=window.location.href;
			  			}
			  			else
			  			{
			  				swal("删除发生错误，请联系管理员!", "", "warning");
			  				//bootbox.alert('删除发生错误，请联系管理员!');
			  			}
					},
					error: function()
					{
						swal("服务器无响应，请联系管理员!", "", "warning");
						//bootbox.alert('服务器无响应，请联系管理员!');
					}
			  	});
			} 
		});
	/*
	bootbox.setDefaults({locale:"zh_CN"});
	bootbox.confirm('确定要删除该信息吗?', function(result)
	{
		if(result)
		{
			$.ajax({
				url:delurl,
				type:'get',
				dataType : 'json',
				data:{"id":id},
				async : false,
				tranditional:true,
				success: function(data)
				{
		  			if (data ==true)
		  			{
						bootbox.alert('删除成功!');
		  				start = $("#tablelist").dataTable().fnSettings()._iDisplayStart;
		  				total = $("#tablelist").dataTable().fnSettings().fnRecordsDisplay();
		  				
		  				if((total-start)==1){
		  					if (start > 0) {
		  						$("#tablelist").dataTable().fnPageChange( 'previous', true );
		  					}
		  				}
		  				window.location.href=window.location.href;
		  			}
		  			else
		  			{
		  				bootbox.alert('删除发生错误，请联系管理员!');
		  			}
				},
				error: function()
				{
					bootbox.alert('服务器无响应，请联系管理员!');
				}
		  	});
					
		}
	});*/
}

function updateEdit(editurl,dataobj)
{
	$.ajax({
	url:editurl,
	type:'POST',
	dataType:'json',
	contentType:"application/json",               
    data:JSON.stringify(dataobj), 
	
	tranditional:true,
	success:editSuccess
	});
}
function editSuccess(data)
{
	bootbox.setDefaults({locale:"zh_CN"});
	if(data.status=="success")
	{
		bootbox.confirm('编辑成功，是否留在当前页面?', function(result)
		{
			if(result)
			{
				window.location.href=window.location.href;
			}
			else
			{
				window.history.back();
			}
		});
	}
}


function yz_init(url)//////因子下拉列表获取后台数据的初始化设置///////
{	

	 $.ajax({                
			url :url+'jcyz/yzlist',             
			data : {},
			type : 'get',                
			dataType : 'json',                
			async : false,                
			success : function(items){ 
				jQuery.each(items, function(i,item){
					$("<option value='"+ item +"'>"+ item +"</option>").appendTo("#yz_op");
					});
			}                
				});
}

function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

function gettimeinterval(beginTime,endTime)
{
	     var beginTimes = beginTime.substring(0, 10).split('-');
		 var endTimes = endTime.substring(0, 10).split('-');

		beginTimes = beginTimes[1] + '-' + beginTimes[2] + '-' + beginTimes[0] + ' ' + beginTime.substring(10, 19);
		endTimes= endTimes[1] + '-' + endTimes[2] + '-' + endTimes[0] + ' ' + endTime.substring(10, 19);
		beginTimes =beginTimes.replace(/-/g, "/");
		endTimes = endTimes.replace(/-/g, "/");
	    var interval=(Date.parse(endTimes)-Date.parse(beginTimes))/3600/1000; 
	    return interval;
}