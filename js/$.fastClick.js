/*global jQuery, event, document  */
(function ($) {
	'use strict';
	$(document).ready(function () {
		var moveStatus,
			escapeOnclick;
		$('body').on('touchstart', '*', function (e) {
			moveStatus = '';
			$(e.target).off('click.fastClick');
		});
		$('body').on('touchmove', '*', function (e) {
			moveStatus = event.changedTouches[0];
		});
		$('body').on('touchend', '*', function (e) {
			if (moveStatus === '') {
				escapeOnclick = $(e.target).attr('onclick');
				$(e.target).trigger('click').one('click.fastClick', function () {
					$(e.target).removeAttr('onclick');
					return false;
				});
				$(e.target).attr('onclick', escapeOnclick);
				return false;
			}
		});
	});
}(jQuery));
