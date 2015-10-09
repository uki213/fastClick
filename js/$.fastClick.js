/*global jQuery, event, document  */
(function ($) {
	'use strict';
	$(document).ready(function () {
		var moveStatus;
		$('body').on('touchstart', '*', function (e) {
			moveStatus = '';
		});
		$('body').on('touchmove', '*', function (e) {
			moveStatus = event.changedTouches[0];
		});
		$('body').on('touchend', '*', function (e) {
			if (moveStatus === '') {
				$(e.target).trigger('click').one('click', function () {
					return false;
				});
				return false;
			}
		});
	});
}(jQuery));
