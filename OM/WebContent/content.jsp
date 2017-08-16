<!DOCTYPE html>
<%@ page isELIgnored ="false" %> 
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<html lang="en">  
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0"
    />
    <title>权限管理</title>
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"
    />
    <!--[if lt IE 9]>
      <link rel="stylesheet" type="text/css" href="bootstrap/plugins/jquery-ui/jquery.ui.1.10.2.ie.css"
      />
    <![endif]-->
    <link href="bootstrap/assets/css/main.css" rel="stylesheet" type="text/css" />
    <link href="bootstrap/assets/css/plugins.css" rel="stylesheet" type="text/css" />
    <link href="bootstrap/assets/css/responsive.css" rel="stylesheet" type="text/css"
    />
    <link href="bootstrap/assets/css/icons.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="bootstrap/assets/css/fontawesome/font-awesome.min.css">
    <link href="bootstrap/assets/css/font-awesome.min.css?v=4.4.0" rel="stylesheet">
    <link href="bootstrap/assets/css/animate.min.css" rel="stylesheet">

    <!--[if IE 7]>
      <link rel="stylesheet" href="bootstrap/assets/css/fontawesome/font-awesome-ie7.min.css">
    <![endif]-->
    <!--[if IE 8]>
      <link href="bootstrap/assets/css/ie8.css" rel="stylesheet" type="text/css" />
    <![endif]-->


	<script type="text/javascript" src="bootstrap/assets/js/jquery.min.js?v=2.1.4">
	</script>
    <script type="text/javascript" src="bootstrap/plugins/jquery-ui/jquery-ui-1.10.2.custom.min.js">
    </script>
    <script type="text/javascript" src="bootstrap/js/bootstrap.min.js">
    </script>
    <script type="text/javascript" src="bootstrap/assets/js/libs/lodash.compat.min.js">
    </script>
    <!--[if lt IE 9]>
      <script src="assets/js/libs/html5shiv.js">
      </script>
    <![endif]-->
    <script type="text/javascript" src="bootstrap/plugins/touchpunch/jquery.ui.touch-punch.min.js">
    </script>
    <script type="text/javascript" src="bootstrap/plugins/event.swipe/jquery.event.move.js">
    </script>
    <script type="text/javascript" src="bootstrap/plugins/event.swipe/jquery.event.swipe.js">
    </script>
    <script type="text/javascript" src="bootstrap/assets/js/libs/breakpoints.js">
    </script>
    <script type="text/javascript" src="bootstrap/plugins/respond/respond.min.js">
    </script>
    <script type="text/javascript" src="bootstrap/plugins/cookie/jquery.cookie.min.js">
    </script>
    <script type="text/javascript" src="bootstrap/plugins/slimscroll/jquery.slimscroll.min.js">
    </script>
    <script type="text/javascript" src="bootstrap/plugins/slimscroll/jquery.slimscroll.horizontal.min.js">
    </script>
    <!--[if lt IE 9]>
      <script type="text/javascript" src="bootstrap/plugins/flot/excanvas.min.js">
      </script>
    <![endif]-->
    <script type="text/javascript" src="bootstrap/plugins/sparkline/jquery.sparkline.min.js">
    </script>
    <script type="text/javascript" src="bootstrap/plugins/flot/jquery.flot.min.js">
    </script>
    <script type="text/javascript" src="bootstrap/plugins/flot/jquery.flot.tooltip.min.js">
    </script>
    <script type="text/javascript" src="bootstrap/plugins/flot/jquery.flot.resize.min.js">
    </script>
    <script type="text/javascript" src="bootstrap/plugins/flot/jquery.flot.time.min.js">
    </script>
    <script type="text/javascript" src="bootstrap/plugins/flot/jquery.flot.growraf.min.js">
    </script>
    <script type="text/javascript" src="bootstrap/plugins/easy-pie-chart/jquery.easy-pie-chart.min.js">
    </script>
    <script type="text/javascript" src="bootstrap/plugins/daterangepicker/moment.min.js">
    </script>
    <script type="text/javascript" src="bootstrap/plugins/daterangepicker/daterangepicker.js">
    </script>
    <script type="text/javascript" src="bootstrap/plugins/blockui/jquery.blockUI.min.js">
    </script>
    <script type="text/javascript" src="bootstrap/plugins/fullcalendar/fullcalendar.min.js">
    </script>
    <script type="text/javascript" src="bootstrap/plugins/noty/jquery.noty.js">
    </script>
    <script type="text/javascript" src="bootstrap/plugins/noty/layouts/top.js">
    </script>
    <script type="text/javascript" src="bootstrap/plugins/noty/themes/default.js">
    </script>
    <script type="text/javascript" src="bootstrap/plugins/uniform/jquery.uniform.min.js">
    </script>
    <script type="text/javascript" src="bootstrap/plugins/select2/select2.min.js">
    </script>
    <script type="text/javascript" src="bootstrap/assets/js/app.js">
    </script>
	
    <script type="text/javascript" src="bootstrap/plugins/layer/layer.min.js"></script>
    <script type="text/javascript" src="bootstrap/assets/js/contabs.min.js"></script>
    <script type="text/javascript" src="bootstrap/assets/js/plugins.js">
    </script>
    <script type="text/javascript" src="bootstrap/assets/js/plugins.form-components.js">
    </script>
    <script>
      $(document).ready(function() {
        App.init();
        Plugins.init();
        FormComponents.init();
      });
    </script>
    <script type="text/javascript" src="bootstrap/assets/js/custom.js">
    </script>


  </head>
  
  <body  style="overflow:hidden">
   <div id="container">
    <div id="sidebar" style="width: 160px;" >	
      <div id="sidebar-content">             
		<ul id="nav" class="sub-menu" style="display: block;">
            <li>
                <a  class="J_menuItem" href="jsp/user/user_list.jsp" style="padding: 10px 10px 10px 25px;">
                    <i class="icon-user">
                    </i>
                   &nbsp;用户管理
                </a>
            </li>
            <li>
                <a href="javascript:void(0);" style="padding: 10px 10px 10px 27px;">
                    <i class="icon-male">
                    </i>
                    &nbsp;角色管理
                 </a>
          	</li>
            <li>
                 <a href="javascript:void(0);" style="padding: 10px 10px 10px 25px;">
                    <i class="icon-sitemap">
                    </i>
                    功能管理
                 </a>
            </li>
            <li>
                 <a href="jsp/funres/system_list.jsp" style="padding: 10px 10px 10px 25px;">
                    <i class="icon-cogs">
                    </i>
                     权限配置
                 </a>
            </li>
          </ul>  
       </div>    
       		<div id="divider"  >
        </div>       
    </div>
     <div id="page-wrapper" style="height:100%;margin-left:160px">
			  <div class="row J_mainContent" id = "content-main" style="height:100%;">
					<iframe class="J_iframe" name="iframe0"  src="jsp/user/user_list.jsp" width="100%" height="100%"  frameborder="0"  data-id="jsp/user/user_list.jsp" seamless></iframe> 
			  </div>  
	  </div>
	</div>  
  </body>
</html>
