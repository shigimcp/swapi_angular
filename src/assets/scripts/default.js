'use strict';


//<!--/* ========================= INITIALIZE PAGE ========================= */-->

document.addEventListener('DOMContentLoaded', function() {
	console.log('PING! DOMContentLoaded triggered!');

	getChars();

}, false);



//<!--/* ========================= FUNCTIONs: getChars() ========================= */-->

var charArray = [];

function getChars() {

	console.log('');
	console.log('PING! FUNCTION: getChars() triggered!');


	$.ajax({ 
		url: 'scripts/characters.json', 
		dataType: 'json', 
		data: charArray, 
		async: false, 

		complete: function(data){ 

			console.log("getChars - complete:function(data)");

			var charData = jQuery.parseJSON(data['responseText']);
//			console.log('charData = ' + charData);

			$.each(charData.characters, function (index, value) {
//				console.log("index = " + index + "     value = " + value + "     value.name = " + value.name + "     value.url = " + value.url);

				charArray.push(value);
			});

//			console.log('charArray = ' + charArray);
		}
	});


//	console.log('charArray = ' + charArray + '     charArray.length = ' + charArray.length);

	for (var c = 0; c < charArray.length; c++) {

//		console.log('c = ' + c + '     charArray[c] = ' + charArray[c] + '     charArray[c].name = ' + charArray[c].name + '     charArray[c].url = ' + charArray[c].url);
		var thisThumbID;
		var thisThumb;

		switch(charArray[c].name) {
			case 'Luke Skywalker':
				thisThumbID = 'charThumbID' + c;

				thisThumb = document.createElement('img');
				thisThumb.classList.add('charThumb');
				thisThumb.id = thisThumbID;
				thisThumb.src = 'images/characters/luke.jpg';
				thisThumb.setAttribute('onclick', 'getThisChar(\'' + charArray[c].url + '\'); return false;');

				document.getElementById('charContainerID').appendChild(thisThumb);

				console.log("Hi! My name is " + charArray[c].name + '. My thumb ID is ' + thisThumbID + '.');
			break;

			case 'Darth Vader':
				thisThumbID = 'charThumbID' + c;

				thisThumb = document.createElement('img');
				thisThumb.classList.add('charThumb');
				thisThumb.id = thisThumbID;
				thisThumb.src = 'images/characters/vader.jpg';
				thisThumb.setAttribute('onclick', 'getThisChar(\'' + charArray[c].url + '\'); return false;');

				document.getElementById('charContainerID').appendChild(thisThumb);

				console.log("Hi! My name is " + charArray[c].name + '. My thumb ID is ' + thisThumbID + '.');
			break;

			case 'Obi-wan Kenobi':
				thisThumbID = 'charThumbID' + c;

				thisThumb = document.createElement('img');
				thisThumb.classList.add('charThumb');
				thisThumb.id = thisThumbID;
				thisThumb.src = 'images/characters/obiwan.jpg';
				thisThumb.setAttribute('onclick', 'getThisChar(\'' + charArray[c].url + '\'); return false;');

				document.getElementById('charContainerID').appendChild(thisThumb);

				console.log("Hi! My name is " + charArray[c].name + '. My thumb ID is ' + thisThumbID + '.');
			break;

			case 'R2-D2':
				thisThumbID = 'charThumbID' + c;

				thisThumb = document.createElement('img');
				thisThumb.classList.add('charThumb');
				thisThumb.id = thisThumbID;
				thisThumb.src = 'images/characters/r2d2.jpg';
				thisThumb.setAttribute('onclick', 'getThisChar(\'' + charArray[c].url + '\'); return false;');

				document.getElementById('charContainerID').appendChild(thisThumb);

				console.log("Hi! My name is " + charArray[c].name + '. My thumb ID is ' + thisThumbID + '.');
			break;

			default:
				console.log("OMG! WHO AM I?!?!?! AND I HAVE NO ID!!!");
		}
	}

//	getThisChar(charArray[c]);
}



//<!--/* ========================= FUNCTIONs: getThisChar(charURL) ========================= */-->

var filmURLArray =[];

function getThisChar(charURL) {

	console.log('');
	console.log('PING! FUNCTION: getThisChar(charURL) triggered!     charURL = ' + charURL);


//<!--/* ------------------------- clear info for new character ------------------------- */-->

	filmURLArray =[];
	$(".infoContainer .filmContainer").remove();


//<!--/* ------------------------- get new character and films ------------------------- */-->

	$.ajax({
		url: charURL,
		dataType: 'json',
		data: filmURLArray, 
		async: false, 
//		context: document.body,

		complete:function(data) {

			console.log("getThisChar - complete:function(data)");

			if(data['status'] == 200){

				var thisCharData = jQuery.parseJSON(data['responseText']);
//				console.log("thisCharData = " + thisCharData);
//				console.log("thisCharData.name = " + thisCharData.name);

				$('#charNameID').text(thisCharData.name);


				$.each(thisCharData.films, function (index, value) {
//					console.log("index = " + index + "     value = " + value);

					filmURLArray.push(value);
				});

				console.log('filmURLArray = ' + filmURLArray);
			}

			else if (data['status'] == 404) {

//				jQuery('#interactive_output').text(data['status'] + ' ' + data['statusText']);

				var thisCharDataERR = jQuery.parseJSON(data['responseText']);
				console.log("thisCharDataERR = " + thisCharDataERR.detail);

//				jQuery('#charNameID').text('OOPS! *No* idea who I am...');
//				jQuery('#filmDateID').text('');
//				jQuery('#filmTitleID').text('');
//				jQuery('#filmInfoID').text('These are not the droids you are looking for. \r\n ...and just so we\'re clear on the subject, I AM NOT A DROID.');

//				addInfo(0, 'These are not the droids you are looking for.', 'All day. Every day.', '...and just so we\'re clear on the subject, I AM NOT A DROID.');
//				addInfo(0, 'These are not the droids you are looking for.', '(Why do I keep saying that?)', '...and just so we\'re clear on the subject, I AM NOT A DROID.');

				jQuery('#charNameID').text(thisCharDataERR.detail);
				addInfo(0, 'These are not the droids you are looking for.', '(Why do I keep saying that?)', '...and just so we\'re clear on the subject, I AM NOT A DROID.');
			}
		}

	});


//	console.log('filmURLArray = ' + filmURLArray + '     filmURLArray.length = ' + filmURLArray.length);
//
//	for (var f = 0; f < filmURLArray.length; f++) {
//
//		console.log('f = ' + f + '     filmURLArray[f] = ' + filmURLArray[f]);
//	}

	getAllFilms();
}



//<!--/* ========================= FUNCTIONs: getAllFilms() ========================= */-->

function getAllFilms() {

	console.log('');
	console.log('PING! FUNCTION: getAllFilms() triggered!');

////	console.log('charArray = ' + charArray + '     charArray.length = ' + charArray.length);
//	console.log('filmURLArray = ' + filmURLArray + '     filmURLArray.length = ' + filmURLArray.length);


	for (var f = 0; f < filmURLArray.length; f++) {

//		console.log('');
//		console.log('f = ' + f + '     filmURLArray[f] = ' + filmURLArray[f]);

		$.ajax({
			url: filmURLArray[f],
			dataType: 'json',
//			data: filmURLArray, 
			async: false, 
	//		context: document.body,

			complete:function(data) {

				console.log("getAllFilms - complete:function(data)");

				if(data['status'] == 200){

					var thisFilmData = jQuery.parseJSON(data['responseText']);
//					console.log("thisFilmData = " + thisFilmData);
					console.log("thisFilmData.title = " + thisFilmData.title);
					console.log("thisFilmData.release_date = " + thisFilmData.release_date);
//					console.log("thisFilmData.opening_crawl = " + thisFilmData.opening_crawl);

					addInfo(f, thisFilmData.title, thisFilmData.release_date, thisFilmData.opening_crawl);

//					var thisWeekday = thisFilmData.release_date.getDay();
//					var thisMonth = thisFilmData.release_date.getMonth();
//					var thisDay = thisFilmData.release_date.getDate();
//					var thisYear = thisFilmData.release_date.getFullYear();
//
//					console.log('Date = ' + thisWeekday + ', ' + thisMonth + ' ' + thisDay + ' ' + thisYear);
				}

//				else if (data['status'] == 404) {
//
//	//				jQuery('#interactive_output').text(data['status'] + ' ' + data['statusText']);
//
//					var thisFilmDataERR = jQuery.parseJSON(data['responseText']);
//	//				console.log("thisFilmDataERR = " + thisFilmDataERR);
//
//					jQuery('#charNameID').text('OOPS!');
//					jQuery('#filmDateID').text('');
//					jQuery('#filmTitleID').text('');
//					jQuery('#filmInfo').text('These are not the droids you are looking for. \r\n ...and just so we\'re clear on the subject, I AM NOT A DROID.');
//				}
			}

		});
	}

}



//<!--/* ========================= FUNCTIONs: addInfo(filmIndex, thisTitle, thisDate, thisCrawl) ========================= */-->

//function addInfo(filmIndex, filmURL) {
function addInfo(filmIndex, thisTitle, thisDate, thisCrawl) {

	console.log('');
	console.log('PING! FUNCTION: addInfo(thisIndex) triggered!     filmIndex = ' + filmIndex + '     thisTitle = ' + thisTitle + '     thisDate = ' + thisDate);
//	console.log('thisCrawl = ' + thisCrawl);


	var thisFilmContainerID = 'filmContainerID' + filmIndex;
//	console.log('thisFilmContainerID = ' + thisFilmContainerID);


	var filmContainer = document.createElement('div');
	filmContainer.classList.add('filmContainer');
	filmContainer.id = thisFilmContainerID;


	var filmTitle = document.createElement('div');
	filmTitle.classList.add('filmTitle');
	filmTitle.id = 'filmTitleID';

	var filmTitleText = document.createTextNode(thisTitle);
	filmTitle.appendChild(filmTitleText);


	var filmDate = document.createElement('div');
	filmDate.classList.add('filmDate');
	filmDate.id = 'filmDateID';

	var filmDateText = document.createTextNode(thisDate);
	filmDate.appendChild(filmDateText);


	var filmInfo = document.createElement('div');
	filmInfo.classList.add('filmInfo');
	filmInfo.id = 'filmInfoID';

	var filmInfoText = document.createTextNode(thisCrawl);
	filmInfo.appendChild(filmInfoText);


	filmContainer.appendChild(filmTitle);
	filmContainer.appendChild(filmDate);
	filmContainer.appendChild(filmInfo);

	document.getElementById('infoContainerID').appendChild(filmContainer);
}








//<!--/* ========================= FUNCTIONs: getFilm(filmIndex, filmURL) ========================= */-->

function getFilm(filmIndex, filmURL) {

//	console.log('');
	console.log('PING! FUNCTION: getFilm(filmIndex, filmURL) triggered!     filmIndex = ' + filmIndex + '     filmURL = ' + filmURL);



//	var thisFilmContainerID = 'filmContainerID' + filmIndex;
//	console.log('thisFilmContainerID = ' + thisFilmContainerID);
//
//
//
//	var filmContainer = document.createElement('div');
//	filmContainer.classList.add('filmContainer');
//	filmContainer.id = thisFilmContainerID;
//
//	var filmTitle = document.createElement('div');
//	filmTitle.classList.add('filmTitle');
//
//	var filmDate = document.createElement('div');
//	filmDate.classList.add('filmDate');
//
//	var filmInfo = document.createElement('div');
//	filmInfo.classList.add('filmInfo');
//	//filmInfo.id = 'name';
//
//	//var introText = document.createTextNode('Hello');
//	//var nameText = document.createTextNode('World!');
//
//	filmContainer.appendChild(filmTitle);
//	filmContainer.appendChild(filmDate);
//	filmContainer.appendChild(filmInfo);
//
//	document.getElementById('infoContainerID').appendChild(filmContainer);




//	$('#bodyContainer').appendChild('infoContainer');

//	addInfo(filmIndex, filmURL);

	$.ajax({
		dataType: 'json',
		url: filmURL,
//		context: document.body,
//		context: this,

		complete:function(data) {

			console.log("getFilm - complete:function(data)");
//			console.log('PING! FUNCTION: getFilm(filmIndex, filmURL) triggered!     filmIndex = ' + filmIndex + '     filmURL = ' + filmURL);
//			console.log('thisFilmContainerID = ' + thisFilmContainerID);

//			if(data['status'] == 200){

//				addInfo(filmIndex);

				var d = jQuery.parseJSON(data['responseText']);
//				console.log("d = " + JSON.stringify(d, null, '\t'));
				console.log("d = " + d.title);



////				addInfo(filmIndex, filmURL);

//				var filmTemplate = document.getElementsByTagName("template")[0];
//				var movieClone = filmTemplate.content.cloneNode(true);
//
//				document.getElementById('infoContainerID').appendChild(movieClone);
////				$('#infoContainerID').appendChild(movieClone);
//
//				var thisFilmContainer = $('.filmContainer')[filmIndex];
//				console.log('thisFilmContainer = ' + thisFilmContainer);



//				var filmContainer = document.createElement('div');
//				filmContainer.classList.add('filmContainer');
//				filmContainer.id = thisFilmContainerID;
//
//				var filmTitle = document.createElement('div');
//				filmTitle.classList.add('filmTitle');
//
//				var filmDate = document.createElement('div');
//				filmDate.classList.add('filmDate');
//
//				var filmInfo = document.createElement('div');
//				filmInfo.classList.add('filmInfo');
//				//filmInfo.id = 'name';
//
//				//var introText = document.createTextNode('Hello');
//				//var nameText = document.createTextNode('World!');
//
//				filmContainer.appendChild(filmTitle);
//				filmContainer.appendChild(filmDate);
//				filmContainer.appendChild(filmInfo);
//
//				document.getElementById('infoContainerID').appendChild(filmContainer);



////				var thisthisFilmContainer = document.getElementById('thisFilmContainerID');
////				console.log('thisthisFilmContainer = ' + thisthisFilmContainer);
//
//				$('#'+thisFilmContainerID).$('#filmTitleID').text(d.title);
//				$('#'+thisFilmContainerID).$('#filmDateID').text('(' + d.release_date + ')');
//				$('#'+thisFilmContainerID).$('#filmInfo').text(d.opening_crawl);



//				$('#filmTitleID').text(d.title);
//				$('#filmDateID').text('(' + d.release_date + ')');
//				$('#filmInfo').text(d.opening_crawl);
//			}

//			else if (data['status'] == 404) {
//
////				jQuery('#interactive_output').text(data['status'] + ' ' + data['statusText']);
//
//				var d = jQuery.parseJSON(data['responseText']);
//				console.log("d = " + d);
//
////				jQuery('#infoContainerID').text(JSON.stringify(d, null, '\t'));
//				jQuery('#infoContainerID').text('These are not the droids you are looking for. \r\n ...and just so we\'re clear on the subject, I AM NOT A DROID.');
////				jQuery('#infoContainerID').innerHTML('These are not the droids you are looking for. \r\n ...and just so we\'re clear on the subject, I AM NOT A DROID.');
//			}

		}

	});

}











//<!--/* ========================= FUNCTION: sniffDevice ========================= */-->

//function sniffDevice() {
//
//	console.log('PING! sniffDevice triggered!');
//
//	var device = {
//		is_android: function() {
//			return navigator.userAgent.match(/Android/i);
//		},
//		is_blackberry: function() {
//			return navigator.userAgent.match(/BlackBerry/i);
//		},
//		is_iphone: function() {
//			return navigator.userAgent.match(/iPhone/i);
//		},
//		is_ipad: function() {
//			return navigator.userAgent.match(/iPad/i);
//		},
//		is_ipod: function() {
//			return navigator.userAgent.match(/iPod/i);
//		},
//		is_ios: function() {
//			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//		},
//		is_windows_phone: function() {
//			return navigator.userAgent.match(/IEMobile/i);
//		},
//		is_mobile: function() {
//			return (device.is_android() || device.is_blackberry() || device.is_ios() || device.is_windows_phone() );
//		}
//	};
//
//	if (device.is_mobile()) {
//		// The User Is Using A Mobile Phone
//		document.location = 'http://www.shigimcp.com/mobile';
//	}
//}



//<!--/* ========================= FUNCTION: buildGrid() - NG, axxGrid() ========================= */-->

//function buildGrid() {
//
//	console.log('PING! buildGrid triggered!');
////	console.log('thisContainerID = ' + thisContainerID);
//
////	TweenMax.set([bgContainerID], {x:-100});
//
//	var gridBG = document.getElementById('bgContainerID');
////	var gridFG = document.getElementById('fgContainerBGID');
//
//	var rowClass = 'row';
//	var colClass = 'col';
//
//	for (var r = 0; r < 3; r++) {
//
//		var thisRowID = 'row' + r.toString();
//
//		var thisRowBG = document.createElement('div');
//		thisRowBG.className = rowClass;
//		thisRowBG.id = thisRowID;
//
//		gridBG.appendChild(thisRowBG);
//
////		var thisRowFG = document.createElement('image');
////		thisRowFG.className = rowClass;
////		thisRowFG.id = thisRowID;
////		thisRowFG.width = 200;
////		thisRowFG.height = 200;
////
////		gridFG.appendChild(thisRowFG);
//////		gridFG.append('<image class="row" id="rowID" xlink:href="images/global/grad.png" x="-100" y="0" height="200" width="200"/>');
//
//		var thisRowBGDiv = document.getElementById(thisRowID);
//		TweenMax.set([thisRowBGDiv], {x:-100});
//
//		for (var c = 0; c < 11; c++) {
//
//			var thisColID = thisRowID + 'col' + c.toString();
//
//			var thisColBG = document.createElement('div');
//			thisColBG.className = colClass;
//			thisColBG.id = thisColID;
//
//			thisRowBGDiv.appendChild(thisColBG);
//		}
//	}
//
//	axxGrid();
//}



//var axxGridTL = new TimelineLite({delay:2.5, repeat:3, repeatDelay:2});
//var axxGridTL = new TimelineMax({delay:0});
//var axxGridTL = new TimelineLite({delay:0.25});
//var axxGridTL = new TimelineMax({delay:2});
//var axxGridTL = new TimelineMax({delay:10});
//var axxGridTL = new TimelineMax({delay:30});
var axxGridTL = new TimelineMax({paused:true});

function axxGrid() {

	console.log('PING! axxGrid triggered!');

	var grid_animations = [
		{col: 8, row: 1, delay: 0}, 
		{col: 7, row: 0, delay: 0.5}, 
		{col: 6, row: 2, delay: 1}, 
		{col: 5, row: 1, delay: 1.5}, 
		{col: 3, row: 0, delay: 2}, 
		{col: 2, row: 2, delay: 2.5}, 
		{col: 0, row: 1, delay: 3}

//		[9, 1, 0], 
//		[7, 0, 0.5], 
//		[6, 2, 1], 
//		[5, 1, 1.5], 
//		[3, 0, 2], 
//		[2, 2, 2.5], 
//		[0, 1, 3]
	];

	console.log('grid_animations.length = ' + grid_animations.length);
	console.log('');

	for (var ga = 0; ga < grid_animations.length; ga++) {

		console.log('grid_animations[' + ga + '].col = ' + grid_animations[ga].col + '     grid_animations[' + ga + '].row = ' + grid_animations[ga].row + '     grid_animations[' + ga + '].delay = ' + grid_animations[ga].delay);
//		console.log('grid_animations[' + ga + '].row = ' + grid_animations[ga].row);
//		console.log('grid_animations[' + ga + '].delay = ' + grid_animations[ga].delay);


//<!--/* ------------------------- RECTANGLES ------------------------- */-->

		var thisRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
		var thisRectID = 'clipRect' + ga.toString();
		var thisRectX = (grid_animations[ga].col * 200) + 100;
		var thisRectY = (grid_animations[ga].row * 200);

		thisRect.setAttributeNS(null, 'class', 'clipRect');
		thisRect.setAttributeNS(null, 'id', thisRectID);
		thisRect.setAttributeNS(null, 'x', thisRectX);
		thisRect.setAttributeNS(null, 'y', thisRectY);
		thisRect.setAttributeNS(null, 'width', '200');
		thisRect.setAttributeNS(null, 'height', '200');
		thisRect.setAttributeNS(null, 'fill', '#'+Math.round(0xffffff * Math.random()).toString(16));
//		thisRect.setAttributeNS(null, 'fill', 'none');

		document.getElementById('logoGridID').appendChild(thisRect);


////<!--/* ------------------------- LOGOS ------------------------- */-->
//
//		var thisLogo = document.createElementNS('http://www.w3.org/1999/svg', 'image');
////		var thisLogo = document.createElementNS('http://www.w3.org/1999/svg', 'use');
//		var thisLogoX = thisRectX;
//		var thisLogoY = thisRectY;
//		var thisLogoID = 'clipLogo' + ga.toString();
//
//		thisLogo.setAttributeNS(null, 'class', 'clipLogo');
//		thisLogo.setAttributeNS(null, 'id', thisLogoID);
//		thisLogo.setAttributeNS('http://www.w3.org/1999/xlink','xlink:href', 'images/global/logo_axx_g.svg');
////		thisLogo.setAttributeNS('http://www.w3.org/1999/xlink','xlink:href', 'images/global/logo_axx_g.svg#logo_axx_extID');
//		thisLogo.setAttributeNS(null, 'x', thisLogoX);
//		thisLogo.setAttributeNS(null, 'y', thisLogoY);
//		thisLogo.setAttributeNS(null, 'width', '600');
//		thisLogo.setAttributeNS(null, 'height', '357.338');
////		thisLogo.setAttributeNS(null, 'visibility', 'visible');
//
//		document.getElementById('logoGridID').appendChild(thisLogo);
////		document.getElementById('axx_gridID').appendChild(thisLogo);



//		var thisLogo = document.createElementNS('http://www.w3.org/1999/svg', 'image');
//		var thisLogo = document.createElementNS('http://www.w3.org/1999/svg', 'use');
		var thisLogoID = 'clipLogoID' + ga.toString();
		var thisLogoX = thisRectX + 100;
		var thisLogoY = thisRectY - 30;

		console.log('thisLogoID = ' + thisLogoID + '     thisLogoX = ' + thisLogoX + '     thisLogoY = ' + thisLogoY);

//		$('#thisLogoID').x = thisLogoX;
//		document.getElementById(thisLogoID).setAttributeNS('null', 'x', thisLogoX);
		TweenMax.set([thisLogoID], {x:thisRectX});


//		thisLogo.setAttributeNS(null, 'class', 'clipLogo');
//		thisLogo.setAttributeNS(null, 'id', thisLogoID);
//		thisLogo.setAttributeNS('http://www.w3.org/1999/xlink','xlink:href', 'images/global/logo_axx_g.svg');
////		thisLogo.setAttributeNS('http://www.w3.org/1999/xlink','xlink:href', 'images/global/logo_axx_g.svg#logo_axx_extID');
//		thisLogo.setAttributeNS(null, 'x', thisLogoX);
//		thisLogo.setAttributeNS(null, 'y', thisLogoY);
//		thisLogo.setAttributeNS(null, 'width', '600');
//		thisLogo.setAttributeNS(null, 'height', '357.338');
////		thisLogo.setAttributeNS(null, 'visibility', 'visible');
//
//		document.getElementById('logoGridID').appendChild(thisLogo);
////		document.getElementById('axx_gridID').appendChild(thisLogo);
	}


////	TweenMax.set([logo_axx_gID], {x:0, y:0});
//////	TweenMax.set([axx_clipPathID], {x:-400, y:95});
////	TweenMax.set([fgBG_polygonID], {x:-200, y:0});
//
////	TweenMax.set([logo_axx_gID], {x:2000, y:0});
//////	TweenMax.set([axx_clipPathID], {x:1600, y:95});
////	TweenMax.set([fgBG_polygonID], {x:1800, y:0});
//
////	TweenMax.set([logo_axx_gID], {x:-1800, y:0});
//////	TweenMax.set([axx_clipPathID], {x:-2200, y:95});
////	TweenMax.set([fgBG_polygonID], {x:-2000, y:0});
//
//	TweenMax.fromTo([logo_axx_gID], 3, {x:2000, y:0}, {x:-1800, y:0});
////	TweenMax.fromTo([axx_clipPathID], 3, {x:1600, y:95}, {x:-2200, y:95});
//	TweenMax.fromTo([fgBG_polygonID], 3, {x:1800, y:0}, {x:-2000, y:0});


	axxGridTL

	//==================== SPLASH 01 ====================

		.call(consoleLog, ["FRAME 01 BEGIN!!!"], "frame01")

		.fromTo([logo_axx_gID], 3, {x:2000, y:0}, {x:-1800, y:0}, "frame01")
		.fromTo([fgBG_polygonID], 3, {x:1800, y:0}, {x:-2000, y:0}, "frame01")

		.call(consoleLog, ["FRAME 01 END!!!"], "frame01 +=0.5")


//	//==================== SPLASH 02 ====================
//
//		.call(consoleLog, ["FRAME 02 BEGIN!!!"], "frame02")
//
//		.to([logo], 0.5, {x:-273, ease:Power3.easeOut}, "frame02 +=0.75")
//		.to([shigeru_logo_kanji], 0.5, {x:-522.75, ease:Power3.easeOut}, "frame02 +=0.75")
//
//		.fromTo(greeting, 0.5, {x:-60, opacity:0}, {x:0, opacity:1, ease:Power3.easeOut}, "frame02 +=0.75")
//
//		.call(consoleLog, ["FRAME 02 END!!!"], "frame02 +=0.75")
	;

	//axx00TL.duration(1.5);
	//axx00TL.duration(15);
	
	console.log("axxGridTL timing = " + axxGridTL.duration() + " secs");

	axxGridTL.play();
}



//<!--/* ========================= FUNCTION: axx00In ========================= */-->

//var axx00TL = new TimelineLite({delay:2.5, repeat:3, repeatDelay:2});
//var axx00TL = new TimelineMax({delay:0});
//var axx00TL = new TimelineLite({delay:0.25});
//var axx00TL = new TimelineMax({delay:2});
//var axx00TL = new TimelineMax({delay:10});
//var axx00TL = new TimelineMax({delay:30});
var axx00TL = new TimelineMax({paused:true});

function axx00In() {

	console.log('PING! axx00In triggered!');

	TweenMax.set([splashNav], {autoAlpha:0});

	TweenMax.set([logo], {y:90, width:700});
//	TweenMax.set([logoIcon], {y:90, width:700});

	TweenMax.set([splashNav], {visible: true});

	TweenMax.set([shigeru_logo_kanji], {x:-328.75, y:-145, scale:1.821705426356589});
//	TweenMax.set([header_mask_afro_w], {scaleY:0});
	TweenMax.set([header_mask_afro_w, shigeru_logo_glasses_w_mask], {scaleY:0});
//	TweenMax.set([header_mask_afro_k, header_mask_afro_w, shigeru_logo_glasses_k_mask, shigeru_logo_glasses_w_mask], {scaleY:0});
	TweenMax.set([header_mask_afro_k, shigeru_logo_glasses_k_mask], {scaleY:2.5});

	TweenMax.set(splashHed, {y:-15});


	axx00TL

	//==================== SPLASH 01 ====================

		.call(consoleLog, ["FRAME 01 BEGIN!!!"], "frame01")

		.fromTo(splashCTA, 0.5, {autoAlpha:1}, {autoAlpha:0, ease:Power3.easeOut}, "frame01 +=0")

		.fromTo(header, 1, {scaleX:0}, {scaleX:2, ease:Power3.easeOut}, "frame01 +=0")

//		.to([shigeru_logo_kanji], 1, {x:-911.5, y:-181.5, scale:0.214285714285714, ease:Power3.easeOut}, "frame01 +=0")
//		.fromTo(header_mask_kanji, 1, {scaleY:0}, {scaleY:6.25, ease:Power1.easeOut}, "frame01 +=0")

		.to([shigeru_logo_kanji], 1, {x:-910, y:-180, scale:0.214285714285714, ease:Power3.easeOut}, "frame01 +=0")
//		.fromTo(header_mask_kanji, 1, {scaleY:0}, {scaleY:6.125, ease:Power1.easeOut}, "frame01 +=0")
//		.fromTo(header_mask_kanji, 1, {scaleY:0}, {scaleY:0.41875, ease:Power1.easeOut}, "frame01 +=0")
		.fromTo(header_mask_kanji, 1, {scaleY:0}, {scaleY:1, ease:Power1.easeOut}, "frame01 +=0")

		.fromTo([shigeru_logo_afro], 1, {scale:0.95, opacity:0, transformOrigin:"50% 50%"}, {scale:1, opacity:1, transformOrigin:"50% 50%", ease:Power3.easeOut}, "frame01 +=0.5")
		.fromTo([shigeru_logo_glasses], 1, {scale:0.9, opacity:0, transformOrigin:"50% top"}, {scale:1, opacity:1, transformOrigin:"50% top", ease:Power3.easeOut}, "frame01 +=0.5")

//		.to(splashHed, 1, {y:-606.5, ease:Power3.easeOut}, "frame01 +=0")
//		.to(splashHed01, 1, {css:{fontSize:"30px", color:"#FFFFFF", margin:"0", left:"-363.5"}, ease:Power3.easeOut}, "frame01 +=0")
//		.to(splashHed02, 1, {css:{fontSize:"20px", color:"#FFFFFF", margin:"0", top:"-52", left:"-81"}, ease:Power3.easeOut}, "frame01 +=0")
////		.to(splashContact, 1, {css:{fontSize:"18px", color:"#FFFFFF", margin:"0", top:"-106", left:"325"}, ease:Power3.easeOut}, "frame01 +=0")
//		.to(splashContact, 1, {css:{fontSize:"18px", color:"#FFFFFF", margin:"0", top:"-93.75", left:"325"}, ease:Power3.easeOut}, "frame01 +=0")

		.to(splashHed, 1, {y:-606, ease:Power3.easeOut}, "frame01 +=0")
		.to(splashHed01, 1, {css:{fontSize:"30px", color:"#FFFFFF", margin:"0", left:"-335.625"}, ease:Power3.easeOut}, "frame01 +=0")
		.to(splashHed02, 1, {css:{fontSize:"20px", color:"#FFFFFF", margin:"0", top:"-52.75", left:"-54.5"}, ease:Power3.easeOut}, "frame01 +=0")
		.to(splashContact, 1, {css:{fontSize:"18px", color:"#FFFFFF", margin:"0", top:"-94.75", left:"407.5"}, ease:Power3.easeOut}, "frame01 +=0")

		.to(splashEmail, 1, {css:{color:"#FFFFFF"}, ease:Power3.easeOut}, "frame01 +=0")
		.fromTo([calligraphyCredit], 0.5, {y:-20, opacity:0}, {y:0, opacity:1, ease:Power3.easeOut}, "frame01 +=1")

		.call(consoleLog, ["FRAME 01 END!!!"], "frame01 +=0.5")


	//==================== SPLASH 02 ====================

		.call(consoleLog, ["FRAME 02 BEGIN!!!"], "frame02")

		.to([logo], 0.5, {x:-273, ease:Power3.easeOut}, "frame02 +=0.75")
		.to([shigeru_logo_kanji], 0.5, {x:-522.75, ease:Power3.easeOut}, "frame02 +=0.75")

		.fromTo(greeting, 0.5, {x:-60, opacity:0}, {x:0, opacity:1, ease:Power3.easeOut}, "frame02 +=0.75")

		.call(consoleLog, ["FRAME 02 END!!!"], "frame02 +=0.75")
	;

	//axx00TL.duration(1.5);
	//axx00TL.duration(15);
	
	console.log("timing = " + axx00TL.duration() + " secs");
}


function playAXX() {
	axx00TL.play();
}


