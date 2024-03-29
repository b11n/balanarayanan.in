$(document).ready(function () {

		//transitions
		//for more transition, goto http://gsgd.co.uk/sandbox/jquery/easing/
		var style = 'easeOutElastic';

		//Retrieve the selected item position and width
		var default_left = Math.round($('#topnav li.selected').offset().left - $('#topnav').offset().left);
		var default_width = $('#topnav li.selected').width();

		//Set the floating bar position and width
		$('#box').css({left: -20});
		$('#box .head').css({width: 0});

		//if mouseover the menu item
		$('#topnav li').hover(function () {

			//Get the position and width of the menu item
			left = Math.round($(this).offset().left - $('#topnav').offset().left);
			width = $(this).width(); 
		$('#debug').html(left);
			//Set the floating bar position, width and transition
			$('#box').stop(false, true).animate({left: left},{duration:1000, easing: style});	
			$('#box .head').stop(false, true).animate({width:width},{duration:1000, easing: style});	

		//if user click on the menu
		}).click(function () {

			//reset the selected item
			$('#topnav li').removeClass('selected');	

			//select the current item
			$(this).addClass('selected');

		});

		//If the mouse leave the menu, reset the floating bar to the selected item
		$('#topnav').mouseleave(function () {

			//Retrieve the selected item position and width
			default_left = Math.round($('#topnav li.selected').offset().left - $('#topnav').offset().left);
			default_width = $('#topnav li.selected').width();

			//Set the floating bar position, width and transition
			$('#box').stop(false, true).animate({left: default_left},{duration:1500, easing: style});	
			$('#box .head').stop(false, true).animate({width:default_width},{duration:1500, easing: style});		

		});

	});
	$(function(){
    $('#topnav li a').onclick(function(){
        var toShow = '#' + $(this).attr('rel');
        $('#subnav').show();
        $(toShow).show();
    })
});