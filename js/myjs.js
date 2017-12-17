/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/* eslint-disable no-console */
/*global $, console*/


$(function () {

	console.log('ready!');

	$("nav").hide();
	$("#cerca-mobile-field").hide();
	$("calednar").hide();


	$("#mobile-nav-button").click(function () {
		$("nav").show();
	});

	$("#mobile-nav-close").click(function () {
		$("nav").hide();
	});

	$("#cerca-mobile-button").click(function () {
		$("#cerca-mobile-field").toggle();
	});

	$("#calendar-button").click(function () {
		$("#calendar").show();
	});
	
	$("#calendar-close").click(function () {
		$("#calendar").hide();
	});
});
