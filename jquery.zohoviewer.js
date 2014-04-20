/*
 * jQuery.zohoViewer - Embed linked documents using ZOHO Viewer
 * Licensed under MIT license.
 * Date: 2011/01/20
 *
 * @author Jawish Hameed
 * @version 1.0
 */
(function($){
	$.fn.zohoViewer = function(options) {
	
		var settings = {
			width  : '600',
			height : '700'
		};
		
		if (options) { 
			$.extend(settings, options);
		}
		
		return this.each(function() {
			var file = $(this).attr('href');
			var ext = file.substring(file.lastIndexOf('.') + 1);

			if (/^(doc|docx|xls|xlsx|ppt|pptx|pps|odt|ods|odp|sxw|sxc|sxi|wpd|pdf|rtf|txt|html|csv|tsv)$/.test(ext)) {
				$(this).after(function () {
					var id = $(this).attr('id');
					var zvId = (typeof id !== 'undefined' && id !== false) ? id + '-zohoviewer' : '';
					return '<div id="' + zvId + '" class="zohoviewer"><iframe src="http://viewer.zoho.com/docs/urlview.do?embed=true&url=' + encodeURIComponent(file) + '" width="' + settings.width + '" height="' + settings.height + '" style="border: none;"></iframe></div>';
				})
			}
		});
	};
})( jQuery );