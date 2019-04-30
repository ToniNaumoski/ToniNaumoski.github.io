$(document).ready(function() {
	
	  /*social media animation */

	var social= $('#header > #flag > #social-media-header > li > a');
	$(social).animate({opacity:.8 },0);

$(social).hover(function(){
	
	$(this).stop()
	
	.animate({opacity:1},400)
	
	},function () {
    $(this).stop()
	.animate({opacity:.8},400)
	
  })
  /*social media animation end*/
  
  
  
 
  
  
  
 
  
  
  
  
  
  
  
 
 
 /*box script*/ 
 
 
 
 
 
 		//To switch directions up/down and left/right just place a "-" in front of the top/left attribute
				//Vertical Sliding
				$('.boxgrid.slidedown').hover(function(){
					$(".cover", this).stop().animate({top:'-260px'},{queue:false,duration:300});
				}, function() {
					$(".cover", this).stop().animate({top:'0px'},{queue:false,duration:300});
				});
				//Horizontal Sliding
				$('.boxgrid.slideright').hover(function(){
					$(".cover", this).stop().animate({left:'325px'},{queue:false,duration:300});
				}, function() {
					$(".cover", this).stop().animate({left:'0px'},{queue:false,duration:300});
				});
				//Diagnal Sliding
				$('.boxgrid.thecombo').hover(function(){
					$(".cover", this).stop().animate({top:'260px', left:'325px'},{queue:false,duration:300});
				}, function() {
					$(".cover", this).stop().animate({top:'0px', left:'0px'},{queue:false,duration:300});
				});
				//Partial Sliding (Only show some of background)
				$('.boxgrid.peek').hover(function(){
					$(".cover", this).stop().animate({top:'-260px'},{queue:false,duration:160});
				}, function() {
					$(".cover", this).stop().animate({top:'0px'},{queue:false,duration:160});
				});
				//Full Caption Sliding (Hidden to Visible)
				$('.boxgrid.captionfull').hover(function(){
					$(".cover", this).stop().animate({top:'-260px'},{queue:false,duration:300});
				}, function() {
					$(".cover", this).stop().animate({top:'260px'},{queue:false,duration:300});
				});
				//Caption Sliding (Partially Hidden to Visible)
				$('.boxgrid.caption').hover(function(){
					$(".cover", this).stop().animate({top:'-250px'},{queue:false,duration:300});
				
				}, function() {
					$(".cover", this).stop().animate({top:'0px'},{queue:false,duration:300});
				});
 
 
 
 
 
  
  /*End of box script*/
  
  
  
  
  
	
	/* Bootstraping variable */
	menu				= $('.menu li');
	submenuWrapper	= $('#submenu-wrapper'); 
	submenu			= submenuWrapper.children('ul');
	firstSubmenu 	= submenu.eq(0);
	
	/* When menu on mouse over and out */
	menu.hover(
		function() {
			
			moveTo = $(this).index() * 11;
			showsubmenu(submenuWrapper);
			firstSubmenu.stop().animate({'marginTop' : '-'+moveTo+'em' });
		},
		
		function() { hidesubmenu(submenuWrapper); });
	
	/* When sub menu wrapper on mouse over and out */
	submenuWrapper.hover(
		function() { showsubmenu($(this)); },
		function() { hidesubmenu($(this));
	});
	
	/* Add focus on selected li */
	submenu
		.children('li')
		.hover(	function() { $(this).siblings().stop().animate({'opacity':'0.5'}); }, 
					function() { $(this).siblings().stop().animate({'opacity':'1'}); });
	
	/* Add focus on selected parent li */
	submenu
		.hover(	function() { menu.eq($(this).index()).addClass('selected')  },
					function() { menu.eq($(this).index()).removeClass('selected') });
	
	/* Function to show sub menu */
	function showsubmenu(item) {
		if(!item.hasClass('show'))
			item.addClass('show').stop().animate({'marginTop' : '0'});
	}
	
	/* Function to hide sub menu */
	function hidesubmenu(item) {
		item.removeClass('show').stop().animate({'marginTop' : '-300px'});
	}
	
});