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
  
  
  
	  
  
  
});
  
  

  
  
 
 
