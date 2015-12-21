var $overlay = $('<div id="overlay"></div>');
var $pseudo = $('<div id="pseudo"></div>');
var $closeOverlay = $('<div id="closeOverlay">Close</div>');
var $descriptionBox = $('<div id="descriptionBox"></div>');

var theImages = new Array()

theImages[0] = '01.jpg'
theImages[1] = '02.jpg'
theImages[2] = '03.jpg'
theImages[3] = '04.jpg'
theImages[4] = '05.jpg'
theImages[5] = '06.jpg'
theImages[6] = '07.jpg'
theImages[7] = '08.jpg'
theImages[8] = '09.jpg'
theImages[9] = '10.jpg'
theImages[10] = '11.jpg'
theImages[11] = '12.jpg'
theImages[12] = '13.jpg'
theImages[13] = '14.jpg'
theImages[14] = '15.jpg'
theImages[15] = '16.jpg'
theImages[16] = '17.jpg'
theImages[17] = '18.jpg'
theImages[18] = '19.jpg'
theImages[19] = '20.jpg'
theImages[20] = '21.jpg'
theImages[21] = '22.jpg'
theImages[22] = '23.jpg'
theImages[23] = '24.jpg'
theImages[24] = '25.jpg'
theImages[25] = '02 Inv.jpg'
theImages[26] = '03 Inv.jpg'
theImages[27] = '06 Inv.jpg'
theImages[28] = '07 Inv.jpg'
theImages[29] = '13 Inv.jpg'
theImages[30] = '14 Inv.jpg'
theImages[31] = '15 Inv.jpg'
theImages[32] = '16 Inv.jpg'
theImages[33] = '17 Inv.jpg'
theImages[34] = '18 Inv.jpg'
theImages[35] = '19 Inv.jpg'
theImages[36] = '21 Inv.jpg'
theImages[37] = '22 Inv.jpg'
theImages[38] = '23 Inv.jpg'
theImages[39] = '24 Inv.jpg'

var caption = new Array()

caption[0] = 'Past'
caption[1] = 'Present'
caption[2] = 'Future'

var imageGeneration = function() {
	var whichImage = theImages[Math.round(Math.random()*(theImages.length-1))];
	var $image = $('<td><img class="rune" src="img/RuneImg/' + whichImage + '"></td>');
	$overlay.append($image);	
}

var runeGeneration = function() {
	$overlay.empty();
	$("section").append($overlay);
	//$overlay.append($pseudo);
	for (i = 0; i < 3; i++) {
		imageGeneration();
		$overlay.append('<td>' + caption[i] + '</td>');
	}
	$("section").append($closeOverlay);
	$closeOverlay.click(function(){
	  	$overlay.hide();
	  	$descriptionBox.hide();
	});
	$('img.rune').click(function(){
		$("section").append($descriptionBox);
		
	});
}

// assigning click on the throwButton
$("#throwButton").click(function(){
	runeGeneration();
	$overlay.fadeIn('slow');
});

/*
    $.get('/descriptions/ansur.txt', function(data) {
      $(descriptionBox).html(data);
    }, 'text');
 });
*/

//	$descriptionBox.load(descriptions/ansur.txt);
//	$closeOverlay.append(descriptionBox);



$closeOverlay.click(function(){
  $overlay.hide();
});

