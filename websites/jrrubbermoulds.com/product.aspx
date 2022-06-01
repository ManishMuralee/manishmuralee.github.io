<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>JRRUBBERMOULDS </title>

<link rel="stylesheet" href="css/style_menu.css" type="text/css" media="all" charset="utf-8" />
<link rel="stylesheet" href="css/MenuMatic.css" type="text/css" media="screen" charset="utf-8" />
  <script type="text/javascript" src="js/crawler.js"></script>
<script type="text/javascript" src="js/jquery.min.js"></script>




                  <script type="text/javascript">
marqueeInit({
	uniqueid: 'mycrawler2',
	style: {
		'padding': '0px',
		'width': '958px',
		'height': '100px'
	},
	inc: 2, //speed - pixel increment for each iteration of this marquee's movement
	mouse: 'cursor driven', //mouseover behavior ('pause' 'cursor driven' or false)
	moveatleast: 2,
	neutral: 220,
	savedirection: true,
	random: true
});
                </script>
                  <link href="css/style.css" rel="stylesheet" type="text/css" />
                  <style type="text/css">
<!--
.style1 {color: #ffa53a}
.style2 {color: #c7551b}
-->
                  </style>
</head>

<body>
<div id="navbar"></div>

<div id="Wrapper">
<!--<div id="flash"><marquee direction="left" scrolldelay="2" scrollamount="2"><b>This is a demo text it will be updated soon..  </b></marquee></div>-->
<a href="contact.aspx">
<div id="quick" align="center"><b>enquiry</b></div>
</a>
<div id="header"><div id="logo"><img src="images/logo.jpg" width="312" height="77" /></div>
  <div id="help" style="margin-left:39px; margin-top:6px;"><i><span class="style2">Helpline</span>:</i></div>
  <div id="emailbox">
   <div id="phone" style="text-transform:none; padding-top:7px; margin-left:10px;" align="left"><font color="#000000">Email :</font> 
	<a href="#" class="style1">jrrubber@gmail.com</a>
	<!--<b>
  	<a href="onlinechat.asp">Chat online</a></b> -->
 </div>
<div id="contactno" style="text-transform:none; line-height:20px; padding-top:4px; width:150px;" align="left"><font color="#000000">Phone:</font><span class="style2"> 0487- 2200708<br />
<font color="#000000">Mobile: </font>9387227459
  </span></div>
  
</div>

<div id="facebook"><img src="images/facebook_logo.png" border="0" usemap="#Map" />
<map name="Map" id="Map"><area shape="rect" coords="-3,-2,79,30" href="https://www.facebook.com/"  target="_blank"/></map></div>

  <div id="menuboxcontainer" style="margin-top:10px;">
<ul id="nav">
 
		<li><a href="default.aspx">HOME</a>			</li>
        
         <li><a href="profile.aspx">PROfile</a>       </li>
		
	  <li><a href="#" style="background-color:#af3c00;">PRODUCT</a>       </li>
		
	  <li><a href="gallery.aspx">GALLERY</a>		  	</li>
			
	  <li><a href="contact.aspx">CONTACT</a> </li>
	  </li>	
  </ul>
  </div>
    
                         
  </div>

  
  <div id="banner">
  
 <div id="Banner" style="">
<div id="BannerIn" style="height:380px;">
<div id="EmilyPictureBackground" style="height:380px;"><img src="images/banner2.jpg"  name="EmilyPicture" border="0" align="middle" id="EmilyPicture" />
</div>
                    <script type="text/javascript">
                        // Browser Slide-Show script. With image cross fade effect for those browsers
                        // that support it.
                        // Script copyright (C) 2004-2008 www.cryer.co.uk.
                        // Script is free to use provided this copyright header is included.
                        var FadeDurationMS = 1000;
                        function SetOpacity(object, opacityPct) {
                            // IE.
                            object.style.filter = 'alpha(opacity=' + opacityPct + ')';
                            // Old mozilla and firefox
                            object.style.MozOpacity = opacityPct / 100;
                            // Everything else.
                            object.style.opacity = opacityPct / 100;
                        }
                        function ChangeOpacity(id, msDuration, msStart, fromO, toO) {
                            var element = document.getElementById(id);
                            var msNow = (new Date()).getTime();
                            var opacity = fromO + (toO - fromO) * (msNow - msStart) / msDuration;
                            if (opacity >= 100) {
                                SetOpacity(element, 100);
                                element.timer = undefined;
                            }
                            else if (opacity <= 0) {
                                SetOpacity(element, 0);
                                element.timer = undefined;
                            }
                            else {
                                SetOpacity(element, opacity);
                                element.timer = window.setTimeout("ChangeOpacity('" + id + "'," + msDuration + "," + msStart + "," + fromO + "," + toO + ")", 10);
                            }
                        }
                        function FadeInImage(foregroundID, newImage, backgroundID) {
                            var foreground = document.getElementById(foregroundID);
                            if (foreground.timer) window.clearTimeout(foreground.timer);

                            if (backgroundID) {
                                var background = document.getElementById(backgroundID);
                                if (background) {
                                    if (background.src) {
                                        foreground.src = background.src;
                                        SetOpacity(foreground, 100);
                                    }
                                    background.src = newImage;
                                    background.style.backgroundImage = 'url(' + newImage + ')';
                                    background.style.backgroundRepeat = 'no-repeat';
                                    var startMS = (new Date()).getTime();
                                    foreground.timer = window.setTimeout("ChangeOpacity('" + foregroundID + "'," + FadeDurationMS + "," + startMS + ",100,0)", 100);
                                }
                            } else {
                                foreground.src = newImage;
                            }
                        }
                        var slideCache = new Array();
                        function RunSlideShow(pictureID, backgroundID, imageFiles, displaySecs) {
                            var imageSeparator = imageFiles.indexOf(";");
                            var nextImage = imageFiles.substring(0, imageSeparator);
                            FadeInImage(pictureID, nextImage, backgroundID);
                            var futureImages = imageFiles.substring(imageSeparator + 1, imageFiles.length)
		+ ';' + nextImage;
                            setTimeout("RunSlideShow('" + pictureID + "','" + backgroundID + "','" + futureImages + "'," + displaySecs + ")",
		displaySecs * 1000);
                            // Cache the next image to improve performance.
                            imageSeparator = futureImages.indexOf(";");
                            nextImage = futureImages.substring(0, imageSeparator);
                            if (slideCache[nextImage] == null) {
                                slideCache[nextImage] = new Image;
                                slideCache[nextImage].src = nextImage;
                            }
                        }
  </script>
                    <script type="text/javascript">
                        RunSlideShow("EmilyPicture", "EmilyPictureBackground", "images/banner2.jpg;images/banner1.jpg;images/banner3.jpg;"
	+ "images/banner2.jpg", 4);
  </script>
  
   </div>                                
                                   
    </div></div>
  <div class="cleaner">
  </div>
  <!--<div id="CategoryBar">
<div style="width:960px; margin-left:4px;" class="marquee" id="mycrawler2"> 
  
 <img src="images/scrollnew-copy.jpg" width="977"/>  </div>
  </div>-->
  <div id="gallery">
   <div id="InnerMainIn">
  <h1>product</h1>
  <div id="AboutL" align="justify" style="height:auto; width:auto; padding-bottom:30px;">
  <p>We use highly Alkali and acid resistant rubber compound. This gives maximum productivity from each mould 
      and providing special ultra smooth surface inside the mould gives extra finishing to the tiles and blocks and demoulding become very easy. Retension of dimensions even after prolonged use. Sufficient flexibility, elasticity and softness ensure transfer of vibration of the machine to the cement mixture. This ensures maximum strength to the tiles and blocks. Easy Demoulding, No discoloration and staining to the tiles. Non stick property of the inside portion of the mould reduces cleaning cost considerably.</p>
  
  
  
  
  
  <div id="BottomContent" style="height:260px; margin-top:30px; width:780px; margin-left:70px; background-color:#f8f9f4;">
  
  
  <div class="Box" style="border:none;width:198px; height:auto;padding:0;">
 <img src="images/product/pro1.jpg" style="width:196px; height:240px;"/>
    </div>
    
    
   
    <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px; padding:0;">
   <img src="images/product/pro2.jpg" style="width:196px; height:240px;"/>
    </div>
   
    
    
     <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px;padding:0;">
   <img src="images/product/pro3.jpg"  style="width:196px; height:240px;"/>
    </div>
    
  </div>
  
  
  
  
   <div class="cleaner"></div>
  
   
   
   
  
  <div id="BottomContent" style="height:260px; margin-top:30px; width:780px; margin-left:70px; background-color:#f8f9f4;">
  
  
  <div class="Box" style="border:none;width:198px; height:auto;padding:0;">
 <img src="images/product/pro4.jpg" style="width:196px; height:240px;"/>
    </div>
    
    
   
    <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px; padding:0;">
   <img src="images/product/pro5.jpg" style="width:196px; height:240px;"/>
    </div>
   
    
    
     <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px;padding:0;">
   <img src="images/product/pro6.jpg"  style="width:196px; height:240px;"/>
    </div>
    
  </div>
  
  
  
  
   <div class="cleaner"></div>
  
   
 
  <div id="BottomContent" style="height:260px; margin-top:30px; width:780px; margin-left:70px; background-color:#f8f9f4;">
  
  
  <div class="Box" style="border:none;width:198px; height:auto;padding:0;">
 <img src="images/product/pro7.jpg" style="width:196px; height:240px;"/>
    </div>
    
    
   
    <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px; padding:0;">
   <img src="images/product/pro8.jpg" style="width:196px; height:240px;"/>
    </div>
   
    
    
     <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px;padding:0;">
   <img src="images/product/pro9.jpg"  style="width:196px; height:240px;"/>
    </div>
    
  </div>
  
  
    <div class="cleaner"></div>
  
  
  <div id="BottomContent" style="height:260px; margin-top:30px; width:780px; margin-left:70px; background-color:#f8f9f4;">
  
  
  <div class="Box" style="border:none;width:198px; height:auto;padding:0;">
 <img src="images/product/pro10.jpg" style="width:196px; height:240px;"/>
    </div>
    
    
   
    <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px; padding:0;">
   <img src="images/product/pro11.jpg" style="width:196px; height:240px;"/>
    </div>
   
    
    
     <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px;padding:0;">
   <img src="images/product/pro12.jpg"  style="width:196px; height:240px;"/>
    </div>
    
  </div>
  
  
  
      <div class="cleaner"></div>
  
  
  <div id="BottomContent" style="height:260px; margin-top:30px; width:780px; margin-left:70px; background-color:#f8f9f4;">
  
  
  <div class="Box" style="border:none;width:198px; height:auto;padding:0;">
 <img src="images/product/pro13.jpg" style="width:196px; height:240px;"/>
    </div>
    
    
   
    <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px; padding:0;">
   <img src="images/product/pro14.jpg" style="width:196px; height:240px;"/>
    </div>
   
    
    
     <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px;padding:0;">
   <img src="images/product/pro15.jpg"  style="width:196px; height:240px;"/>
    </div>
    
  </div>
  
  
  
  
      <div class="cleaner"></div>
  
  
  <div id="BottomContent" style="height:260px; margin-top:30px; width:780px; margin-left:70px; background-color:#f8f9f4;">
  
  
  <div class="Box" style="border:none;width:198px; height:auto;padding:0;">
 <img src="images/product/pro16.jpg" style="width:196px; height:240px;"/>
    </div>
    
    
   
    <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px; padding:0;">
   <img src="images/product/pro17.jpg" style="width:196px; height:240px;"/>
    </div>
   
    
    
     <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px;padding:0;">
   <img src="images/product/pro18.jpg"  style="width:196px; height:240px;"/>
    </div>
    
  </div>
  
  
  
  
      <div class="cleaner"></div>
  
  
  <div id="BottomContent" style="height:260px; margin-top:30px; width:780px; margin-left:70px; background-color:#f8f9f4;">
  
  
  <div class="Box" style="border:none;width:198px; height:auto;padding:0;">
 <img src="images/product/pro19.jpg" style="width:196px; height:240px;"/>
    </div>
    
    
   
    <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px; padding:0;">
   <img src="images/product/pro20.jpg" style="width:196px; height:240px;"/>
    </div>
   
    
    
     <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px;padding:0;">
   <img src="images/product/pro21.jpg"  style="width:196px; height:240px;"/>
    </div>
    
  </div>
  
  
  
      <div class="cleaner"></div>
  
  
  <div id="BottomContent" style="height:260px; margin-top:30px; width:780px; margin-left:70px; background-color:#f8f9f4;">
  
  
  <div class="Box" style="border:none;width:198px; height:auto;padding:0;">
 <img src="images/product/pro22.jpg" style="width:196px; height:240px;"/>
    </div>
    
    
   
    <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px; padding:0;">
   <img src="images/product/pro23.jpg" style="width:196px; height:240px;"/>
    </div>
   
    
    
     <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px;padding:0;">
   <img src="images/product/pro24.jpg"  style="width:196px; height:240px;"/>
    </div>
    
  </div>
  
  
      <div class="cleaner"></div>
  
  
  <div id="BottomContent" style="height:260px; margin-top:30px; width:780px; margin-left:70px; background-color:#f8f9f4;">
  
  
  <div class="Box" style="border:none;width:198px; height:auto;padding:0;">
 <img src="images/product/pro25.jpg" style="width:196px; height:240px;"/>
    </div>
    
    
   
    <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px; padding:0;">
   <img src="images/product/pro26.jpg" style="width:196px; height:240px;"/>
    </div>
   
    
    
     <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px;padding:0;">
   <img src="images/product/pro27.jpg"  style="width:196px; height:240px;"/>
    </div>
    
  </div>
  
  
  
  
      <div class="cleaner"></div>
  
  
  <div id="BottomContent" style="height:260px; margin-top:30px; width:780px; margin-left:70px; background-color:#f8f9f4;">
  
  
  <div class="Box" style="border:none;width:198px; height:auto;padding:0;">
 <img src="images/product/pro28.jpg" style="width:196px; height:240px;"/>
    </div>
    
    
   
    <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px; padding:0;">
   <img src="images/product/pro29.jpg" style="width:196px; height:240px;"/>
    </div>
   
    
    
     <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px;padding:0;">
   <img src="images/product/pro30.jpg"  style="width:196px; height:240px;"/>
    </div>
    
  </div>
  
  
  
       <div class="cleaner"></div>
  
  
  <div id="BottomContent" style="height:260px; margin-top:30px; width:780px; margin-left:70px; background-color:#f8f9f4;">
  
  
  <div class="Box" style="border:none;width:198px; height:auto;padding:0;">
 <img src="images/product/pro31.jpg" style="width:196px; height:240px;"/>
    </div>
    
    
   
    <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px; padding:0;">
   <img src="images/product/pro32.jpg" style="width:196px; height:240px;"/>
    </div>
   
    
    
     <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px;padding:0;">
   <img src="images/product/pro33.jpg"  style="width:196px; height:240px;"/>
    </div>
    
  </div>
  
  
  
  
       <div class="cleaner"></div>
  
  
  <div id="BottomContent" style="height:260px; margin-top:30px; width:780px; margin-left:70px; background-color:#f8f9f4;">
  
  
  <div class="Box" style="border:none;width:198px; height:auto;padding:0;">
 <img src="images/product/pro34.jpg" style="width:196px; height:240px;"/>
    </div>
    
    
   
    <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px; padding:0;">
   <img src="images/product/pro35.jpg" style="width:196px; height:240px;"/>
    </div>
   
    
    
     <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px;padding:0;">
   <img src="images/product/pro36.jpg"  style="width:196px; height:240px;"/>
    </div>
    
  </div>
  
  
  
       <div class="cleaner"></div>
  
  
  <div id="BottomContent" style="height:260px; margin-top:30px; width:780px; margin-left:70px; background-color:#f8f9f4;">
  
  
  <div class="Box" style="border:none;width:198px; height:auto;padding:0;">
 <img src="images/product/pro37.jpg" style="width:196px; height:240px;"/>
    </div>
    
    
   
    <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px; padding:0;">
   <img src="images/product/pro38.jpg" style="width:196px; height:240px;"/>
    </div>
   
    
    
     <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px;padding:0;">
   <img src="images/product/pro39.jpg"  style="width:196px; height:240px;"/>
    </div>
    
  </div>
  
  
  
       <div class="cleaner"></div>
  
  
  <div id="BottomContent" style="height:260px; margin-top:30px; width:780px; margin-left:70px; background-color:#f8f9f4;">
  
  
  <div class="Box" style="border:none;width:198px; height:auto;padding:0;">
 <img src="images/product/pro41.jpg" style="width:196px; height:240px;"/>
    </div>
    
    
   
    <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px; padding:0;">
   <img src="images/product/pro42.jpg" style="width:196px; height:240px;"/>
    </div>
   
    
    
     <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px;padding:0;">
   <img src="images/product/pro43.jpg"  style="width:196px; height:240px;"/>
    </div>
    
  </div>
  
  
  
  
       <div class="cleaner"></div>
  
  
  <div id="BottomContent" style="height:260px; margin-top:30px; width:780px; margin-left:70px; background-color:#f8f9f4;">
  
  
  <div class="Box" style="border:none;width:198px; height:auto;padding:0;">
 <img src="images/product/pro44.jpg" style="width:196px; height:240px;"/>
    </div>
    
    
   
    <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px; padding:0;">
   <img src="images/product/pro45.jpg" style="width:196px; height:240px;"/>
    </div>
   
    
    
     <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px;padding:0;">
   <img src="images/product/pro46.jpg"  style="width:196px; height:240px;"/>
    </div>
    
  </div>
  
  
  
       <div class="cleaner"></div>
  
  
  <div id="BottomContent" style="height:260px; margin-top:30px; width:780px; margin-left:70px; background-color:#f8f9f4;">
  
  
  <div class="Box" style="border:none;width:198px; height:auto;padding:0;">
 <img src="images/product/pro47.jpg" style="width:196px; height:240px;"/>
    </div>
    
    
   
    <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px; padding:0;">
   <img src="images/product/pro48.jpg" style="width:196px; height:240px;"/>
    </div>
   
    
    
     <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px;padding:0;">
   <img src="images/product/pro49.jpg"  style="width:196px; height:240px;"/>
    </div>
    
  </div>
  
  
  
  
       <div class="cleaner"></div>
  
  
  <div id="BottomContent" style="height:260px; margin-top:30px; width:780px; margin-left:70px; background-color:#f8f9f4;">
  
  
  <div class="Box" style="border:none;width:198px; height:auto;padding:0;">
 <img src="images/product/pro50.jpg" style="width:196px; height:240px;"/>
    </div>
    
    
   
    <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px; padding:0;">
   <img src="images/product/pro51.jpg" style="width:196px; height:240px;"/>
    </div>
   
    
    
     <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px;padding:0;">
   <img src="images/product/pro52.jpg"  style="width:196px; height:240px;"/>
    </div>
    
  </div>
  
  
  
  
       <div class="cleaner"></div>
  
  
  <div id="BottomContent" style="height:260px; margin-top:30px; width:780px; margin-left:70px; background-color:#f8f9f4;">
  
  
  <div class="Box" style="border:none;width:198px; height:auto;padding:0;">
 <img src="images/product/pro53.jpg" style="width:196px; height:240px;"/>
    </div>
    
    
   
    <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px; padding:0;">
   <img src="images/product/pro54.jpg" style="width:196px; height:240px;"/>
    </div>
   
    
    
     <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px;padding:0;">
   <img src="images/product/pro55.jpg"  style="width:196px; height:240px;"/>
    </div>
    
  </div>
  
  
  
  
  
       <div class="cleaner"></div>
  
  
  <div id="BottomContent" style="height:260px; margin-top:30px; width:780px; margin-left:70px; background-color:#f8f9f4;">
  
  
  <div class="Box" style="border:none;width:198px; height:auto;padding:0;">
 <img src="images/product/pro56.jpg" style="width:196px; height:240px;"/>
    </div>
    
    
   
    <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px; padding:0;">
   <img src="images/product/pro57.jpg" style="width:196px; height:240px;"/>
    </div>
   
    
    
     <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px;padding:0;">
   <img src="images/product/pro58.jpg"  style="width:196px; height:240px;"/>
    </div>
    
  </div>
  
  
  
       <div class="cleaner"></div>
  
  
  <div id="BottomContent" style="height:260px; margin-top:30px; width:780px; margin-left:70px; background-color:#f8f9f4;">
  
  
  <div class="Box" style="border:none;width:198px; height:auto;padding:0;">
 <img src="images/product/pro59.jpg" style="width:196px; height:240px;"/>
    </div>
    
    
   
    <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px; padding:0;">
   <img src="images/product/pro60.jpg" style="width:196px; height:240px;"/>
    </div>
   
    
    
     <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px;padding:0;">
   <img src="images/product/pro61.jpg"  style="width:196px; height:240px;"/>
    </div>
    
  </div>
  
  
  
  
  
       <div class="cleaner"></div>
  
  
  <div id="BottomContent" style="height:260px; margin-top:30px; width:780px; margin-left:70px; background-color:#f8f9f4;">
  
  
  <div class="Box" style="border:none;width:198px; height:auto;padding:0;">
 <img src="images/product/pro62.jpg" style="width:196px; height:240px;"/>
    </div>
    
    
   
    <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px; padding:0;">
   <img src="images/product/pro63.jpg" style="width:196px; height:240px;"/>
    </div>
   
    
    
     <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px;padding:0;">
   <img src="images/product/pro64.jpg"  style="width:196px; height:240px;"/>
    </div>
    
  </div>
  
  
  
       <div class="cleaner"></div>
  
  
  <div id="BottomContent" style="height:260px; margin-top:30px; width:780px; margin-left:70px; background-color:#f8f9f4;">
  
  
  <div class="Box" style="border:none;width:198px; height:auto;padding:0;">
 <img src="images/product/pro65.jpg" style="width:196px; height:240px;"/>
    </div>
    
    
   
    <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px; padding:0;">
   <img src="images/product/pro66.jpg" style="width:196px; height:240px;"/>
    </div>
   
    
    
     <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px;padding:0;">
   <img src="images/product/pro67.jpg"  style="width:196px; height:240px;"/>
    </div>
    
  </div>
  
  
  
  
       <div class="cleaner"></div>
  
  
  <div id="BottomContent" style="height:260px; margin-top:30px; width:780px; margin-left:70px; background-color:#f8f9f4;">
  
  
  <div class="Box" style="border:none;width:198px; height:auto;padding:0;">
 <img src="images/product/pro68.jpg" style="width:196px; height:240px;"/>
    </div>
    
    
   
    <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px; padding:0;">
   <img src="images/product/pro69.jpg" style="width:196px; height:240px;"/>
    </div>
   
    
    
     <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px;padding:0;">
   <img src="images/product/pro70.jpg"  style="width:196px; height:240px;"/>
    </div>
    
  </div>
  
  
  
  
       <div class="cleaner"></div>
  
  
  <div id="BottomContent" style="height:260px; margin-top:30px; width:780px; margin-left:70px; background-color:#f8f9f4;">
  
  
  <div class="Box" style="border:none;width:198px; height:auto;padding:0;">
 <img src="images/product/pro71.jpg" style="width:196px; height:240px;"/>
    </div>
    
    
   
    <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px; padding:0;">
   <img src="images/product/pro72.jpg" style="width:196px; height:240px;"/>
    </div>
   
    
    
     <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px;padding:0;">
   <img src="images/product/pro73.jpg"  style="width:196px; height:240px;"/>
    </div>
    
  </div>
  
  
  
       <div class="cleaner"></div>
  
  
  <div id="BottomContent" style="height:260px; margin-top:30px; width:780px; margin-left:70px; background-color:#f8f9f4;">
  
  
  <div class="Box" style="border:none;width:198px; height:auto;padding:0;">
 <img src="images/product/pro74.jpg" style="width:196px; height:240px;"/>
    </div>
    
    
   
    <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px; padding:0;">
   <img src="images/product/pro75.jpg" style="width:196px; height:240px;"/>
    </div>
   
    
    
     <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px;padding:0;">
   <img src="images/product/pro76.jpg"  style="width:196px; height:240px;"/>
    </div>
    
  </div>
  
  
  
  
       <div class="cleaner"></div>
  
  
  <div id="BottomContent" style="height:260px; margin-top:30px; width:780px; margin-left:70px; background-color:#f8f9f4;">
  
  
  <div class="Box" style="border:none;width:198px; height:auto;padding:0;">
 <img src="images/product/pro77.jpg" style="width:196px; height:240px;"/>
    </div>
    
    
   
    <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px; padding:0;">
   <img src="images/product/pro78.jpg" style="width:196px; height:240px;"/>
    </div>
   
    
    
     <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px;padding:0;">
   <img src="images/product/pro79.jpg"  style="width:196px; height:240px;"/>
    </div>
    
  </div>
  
  
  
  
       <div class="cleaner"></div>
  
  
  <div id="BottomContent" style="height:260px; margin-top:30px; width:780px; margin-left:70px; background-color:#f8f9f4;">
  
  
  <div class="Box" style="border:none;width:198px; height:auto;padding:0;">
 <img src="images/product/pro80.jpg" style="width:196px; height:240px;"/>
    </div>
    
    
   
    <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px; padding:0;">
   <img src="images/product/pro81.jpg" style="width:196px; height:240px;"/>
    </div>
   
    
    
     <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px;padding:0;">
   <img src="images/product/pro82.jpg"  style="width:196px; height:240px;"/>
    </div>
    
  </div>
  
  
  
  
  
       <div class="cleaner"></div>
  
  
  <div id="BottomContent" style="height:260px; margin-top:30px; width:780px; margin-left:70px; background-color:#f8f9f4;">
  
  
  <div class="Box" style="border:none;width:198px; height:auto;padding:0;">
 <img src="images/product/pro83.jpg" style="width:196px; height:240px;"/>
    </div>
    
    
   
    <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px; padding:0;">
   <img src="images/product/pro84.jpg" style="width:196px; height:240px;"/>
    </div>
   
    
    
     <div class="Box" style="border:none;width:198px; height:auto; margin-left:62px;padding:0;">
   <img src="images/product/pro85.jpg"  style="width:196px; height:240px;"/>
    </div>
    
  </div>
  
  
  
  
   <div id="BottomContent" style="height:260px; margin-top:30px; width:780px; margin-left:70px; background-color:#f8f9f4;">
  
  
  <div class="Box" style="border:none;width:198px; height:auto;padding:0;">
 <img src="images/product/pro86.jpg" style="width:196px; height:240px;"/>
    </div>
  </div>
  
  
  </div>
  
  </div>
   <div class="cleaner"></div>
  </div>
 <div class="cleaner"></div>
</div>

<div id="Footer">
<div id="FooterInner">
  <div id="FooterInnerLeft">
  <div id="FooterMenu">
  <ul>
        <li><a href="default.aspx">Home</a>			</li>
        
         <li><a href="profile.aspx">PROfile</a>       </li>
		
	     <li><a href="#">Product</a>       </li>
		
	  <li><a href="gallery.aspx">gallery</a>		  	</li>
			
	 <li><a href="contact.aspx">contact</a>		  	</li>
			
		<!--<li><a href="onlinechat.asp">Chat online</a></li>-->
        </ul>
  </div>
  <div class="cleaner"></div>
  </div>
<div id="FooterInnerRight">
Developed by imac creations<br />
Ph : 09847039339
  </div>
</div>
</div>

</body>
</html>
