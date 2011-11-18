
<!DOCTYPE html>  
  
<html lang="en">  
<head>  
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">  
    <title>Home | Conjura</title>
<?php echo $scripts;?>	
<script type="text/javascript" src="theme/js/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="theme/js/laavlamp.js"></script>

    <link rel="stylesheet" href="theme/css/laav.css">
    <link rel="stylesheet" href="theme/css/body.css">
	
	<?php // echo $css;
/*Place all css files under the css folder.. we will remove the old css files*/
?>

</head>
<body>
<div id = "fb-root"></div>
 <div id="topnav">

    <ul>
        <li class="selected"><a href="#">Home</a></li>
        <li><a href="#">Events</a>
	     <span>
            <a href="#">Civil</a> |
            <a href="#">Mechanical </a> |
            <a href="#">Computer</a>
        </span>
	</li>
	
        <li><a href="#">Proshows</a>
	<!--Subnav Starts Here-->
        <span>
            <a href="#">Subnav Link</a> |
            <a href="#">Subnav Link</a> |
            <a href="#">Subnav Link</a>
        </span>
        <!--Subnav Ends Here-->
	</li>
        <li><a href="#">Schedule</a></li>            
    </ul>
 
    <div id="box"><div class="head"></div></div>
<div id = "user"></div>
 
</div>


<div id="mainbox">
    <div id="logo"></div>
    <div id="slider"></div>
    <div id="news"></div>
    <div id="featured"></div>



</div>

<div id="footer">
    <div id="footer960">
	
	    <div id="footercontents"></div>
	    <div id="footerbox"></div>
	
    </div>
</div>

</body>  
</html>  

