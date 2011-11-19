$(document).ready(function() {
	 
	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.invertedshiftdown2 li  ').click(function() {

		//REMOVE THE ON CLASS FROM ALL BUTTONS
		$('.invertedshiftdown2 li ').removeClass('current');
		  

   

			
			//ADD THE ON CLASS TO THE BUTTON
			$(this).addClass('current');
			  

		 
		  
	 });
	  
	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.invertedshiftdown2 li a').mouseover(function() {
		$(this).addClass('overtab');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('overtab');										
	});
	
	/*** END REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	


});
