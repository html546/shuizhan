(function($){
	$.fn.extend({
		'jishuqi':function(options){
			$(this).find('button:first').click(function(event) {
				var value = $(this).next('input').val();
				if(value>0){
					value--;
					$(this).next('input').val(value);
				}else{
					return;
				}
			});
			$(this).find('button:last').click(function(event) {
				var value = $(this).prev('input').val();
				value++
				$(this).prev('input').val(value);
			});
		}
	})
})(window.jQuery)