<!DOCTYPE html>
<%@ page isELIgnored ="false" %> 
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

 
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<html lang="en">
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'message.jsp' starting page</title>
    
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
    <link href="<%=basePath %>bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
    <!--[if lt IE 9]>
      <link rel="stylesheet" type="text/css" href="<%=basePath %>bootstrap/plugins/jquery-ui/jquery.ui.1.10.2.ie.css"/>
    <![endif]-->
    <link href="<%=basePath %>bootstrap/assets/css/main.css" rel="stylesheet" type="text/css" />
    <link href="<%=basePath %>bootstrap/assets/css/plugins.css" rel="stylesheet" type="text/css" />
    <link href="<%=basePath %>bootstrap/assets/css/responsive.css" rel="stylesheet" type="text/css"/>
    <link href="<%=basePath %>bootstrap/assets/css/icons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="<%=basePath %>bootstrap/assets/css/fontawesome/font-awesome.min.css">
    <!--[if IE 7]>
      <link rel="stylesheet" href="<%=basePath %>bootstrap/assets/css/fontawesome/font-awesome-ie7.min.css">
    <![endif]-->
    <!--[if IE 8]>
      <link href="<%=basePath %>bootstrap/assets/css/ie8.css" rel="stylesheet" type="text/css" />
    <![endif]-->
    <script type="text/javascript" src="<%=basePath %>bootstrap/assets/js/libs/jquery-1.10.2.min.js">
    </script>
    <script type="text/javascript" src="<%=basePath %>bootstrap/plugins/jquery-ui/jquery-ui-1.10.2.custom.min.js">
    </script>
    <script type="text/javascript" src="<%=basePath %>bootstrap/js/bootstrap.min.js">
    </script>
    <script type="text/javascript" src="<%=basePath %>bootstrap/assets/js/libs/lodash.compat.min.js">
    </script>
    <!--[if lt IE 9]>
      <script src="<%=basePath %>bootstrap/assets/js/libs/html5shiv.js">
      </script>
    <![endif]-->
    <script type="text/javascript" src="<%=basePath %>bootstrap/plugins/touchpunch/jquery.ui.touch-punch.min.js">
    </script>
    <script type="text/javascript" src="<%=basePath %>bootstrap/plugins/event.swipe/jquery.event.move.js">
    </script>
    <script type="text/javascript" src="<%=basePath %>bootstrap/plugins/event.swipe/jquery.event.swipe.js">
    </script>
    <script type="text/javascript" src="<%=basePath %>bootstrap/assets/js/libs/breakpoints.js">
    </script>
    <script type="text/javascript" src="<%=basePath %>bootstrap/plugins/respond/respond.min.js">
    </script>
    <script type="text/javascript" src="<%=basePath %>bootstrap/plugins/cookie/jquery.cookie.min.js">
    </script>
    <script type="text/javascript" src="<%=basePath %>bootstrap/plugins/slimscroll/jquery.slimscroll.min.js">
    </script>
    <script type="text/javascript" src="<%=basePath %>bootstrap/plugins/slimscroll/jquery.slimscroll.horizontal.min.js">
    </script>
    <script type="text/javascript" src="<%=basePath %>bootstrap/plugins/sparkline/jquery.sparkline.min.js">
    </script>
    <script type="text/javascript" src="<%=basePath %>bootstrap/plugins/daterangepicker/moment.min.js">
    </script>
    <script type="text/javascript" src="<%=basePath %>bootstrap/plugins/daterangepicker/daterangepicker.js">
    </script>
    <script type="text/javascript" src="<%=basePath %>bootstrap/plugins/blockui/jquery.blockUI.min.js">
    </script>
    <script type="text/javascript" src="<%=basePath %>bootstrap/plugins/uniform/jquery.uniform.min.js">
    </script>
    <script type="text/javascript" src="<%=basePath %>bootstrap/plugins/select2/select2.min.js">
    </script>
    <script type="text/javascript" src="<%=basePath %>bootstrap/plugins/datatables/jquery.dataTables.min.js" >
    </script>
    <script type="text/javascript" src="<%=basePath %>bootstrap/plugins/datatables/DT_bootstrap.js" >
    </script>
    <script type="text/javascript" src="<%=basePath %>bootstrap/plugins/datatables/responsive/datatables.responsive.js">
    </script>
	<script type="text/javascript" src="<%=basePath %>bootstrap/plugins/bootstrap-multiselect/bootstrap-multiselect.min.js">
    </script>
    <script type="text/javascript" src="<%=basePath %>bootstrap/assets/js/app.js">
    </script>
    <script type="text/javascript" src="<%=basePath %>bootstrap/assets/js/plugins.js"></script>
     <script type="text/javascript" src="<%=basePath %>bootstrap/plugins/validation/jquery.validate.min.js"></script>
    <script type="text/javascript" src="<%=basePath %>bootstrap/plugins/validation/additional-methods.min.js"></script>
    <script type="text/javascript" src="<%=basePath %>bootstrap/plugins/bootbox/bootbox.min.js" ></script>
   
    <script type="text/javascript" src="<%=basePath %>bootstrap/assets/js/plugins.form-components.js">
    </script>
   <script type="text/javascript" src="<%=basePath %>bootstrap/plugins/bootbox/bootbox.min.js" ></script>
      <script type="text/javascript" src="<%=basePath %>bootstrap/assets/js/table.js"></script>
   <script>
      $(document).ready(function() {
        App.init();
        Plugins.init();
        FormComponents.init()
      });
    </script>
    <script type="text/javascript" src="assets/js/custom.js">
    </script>
    <script type="text/javascript" src="assets/js/demo/ui_general.js">
    </script>
  </head>
  
  <body>
   <div class="modal-content" style=" margin-left:380px; margin-right:380px; margin-top:60px">
		 <div class="modal-header">
			
			<h4 class="modal-title">
			  提示信息
			</h4>
		  </div>
		  <div class="modal-body" style="font-size: 18px">
			站点新增成功
		  </div>
		
		</div>
</body>
</html>
