(function ($j) {

  switch_style = {

    onReady: function () {      
      this.switch_style_click();
    },
    
    switch_style_click: function(){
    	$(".img_pop_corn").click(function(){
    		var id = $(this).attr("id");
    		
    		$("#switch_style").attr("href", id + ".css");    		
    	});
    },
  };

  $j().ready(function () {
	  switch_style.onReady();
  });

})(jQuery);	

