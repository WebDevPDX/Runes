var pastDescription = "";
var presentDescription = "";
var futureDescription = "";

var imageGeneration = function () {
	
	//past
	$('#resultRow1').append('<div class="title row1">Past:</div>');

	var pastRoll = Math.round(Math.random()*(theRunes.length-1));
	var past = theRunes[pastRoll].image;

	$('#resultRow1').append('<div class="image row1"><img class="rune" src="img/RuneImg/' + past + '"></div>');

	var pastName = theRunes[pastRoll].name;

	$('#resultRow1').append('<div class="name row1">' + pastName + '</div>');

	pastDescription = ('<section id="pastInfo" class= "left">' + theRunes[pastRoll].descriptions + '</section>');

	$('#wrapper').append(pastDescription);

	//present
	$('#resultRow2').append('<div class="title row2">Present:</div>');

	var presentRoll = Math.round(Math.random()*(theRunes.length-1));
	var present = theRunes[presentRoll].image;

	$('#resultRow2').append('<div class="image row2"><img class="rune" src="img/RuneImg/' + present + '"></div>');

	var presentName = theRunes[presentRoll].name;

	$('#resultRow2').append('<div class="name row2">' + presentName + '</div>');

	presentDescription = ('<section id="presentInfo" class= "left">' + theRunes[presentRoll].descriptions + '</section>');

	$('#wrapper').append(presentDescription);

	//future
	$('#resultRow3').append('<div class="title row3">Future:</div>');

	var futureRoll = Math.round(Math.random()*(theRunes.length-1));
	var future = theRunes[futureRoll].image;

	$('#resultRow3').append('<div class="image row3"><img class="rune" src="img/RuneImg/' + future + '"></div>');

	var futureName = theRunes[futureRoll].name;

	$('#resultRow3').append('<div class="name row3">' + futureName + '</div>');

	futureDescription = ('<section id="futureInfo" class= "left">' + theRunes[futureRoll].descriptions + '</section>');

	$('#wrapper').append(futureDescription);
}

var hideResult = function(){
	if (!$('.left').hasClass('active')) {
		$('.left').css({'display': 'none'});
	}
}

$("#throwButton").click(function(){
	$('#resultRow1').empty();
	$('#pastInfo').remove();
	$('#resultRow2').empty();
	$('#presentInfo').remove();
	$('#resultRow3').empty();
	$('#futureInfo').remove();
	$('#instructions').addClass('active');
	imageGeneration();
	hideResult();
	$('#result').slideDown(1000);
});

$('#resultRow1').click(function(){
	$('.active').slideUp(1000, function(){
		$('.active').removeClass('active');
		$('#pastInfo').addClass('active').slideDown(1000);
	});
});

$('#resultRow2').click(function(){
	$('.active').slideUp(1000, function(){
		$('.active').removeClass('active');
		$('#presentInfo').addClass('active').slideDown(1000);
	});
});

$('#resultRow3').click(function(){
	$('.active').slideUp(1000, function(){
		$('.active').removeClass('active');
		$('#futureInfo').addClass('active').slideDown(1000);
	});
});