$('#introOne').click(function(){
	$('.active').slideUp(1000, function(){
		$(this).removeClass('active');
		$('#introduction').slideDown(1000).addClass('active');
	});
});

$('#runesOne').click(function(){
	$('.active').slideUp(1000, function(){
		$(this).removeClass('active');
		$('#historyOne').slideDown(1000).addClass('active');
	});
});

$('#runesTwo').click(function(){
	$('.active').slideUp(1000, function(){
		$(this).removeClass('active');
		$('#historyTwo').slideDown(1000).addClass('active');
	});
});

$('#runesThree').click(function(){
	$('.active').slideUp(1000, function(){
		$(this).removeClass('active');
		$('#historyThree').slideDown(1000).addClass('active');
	});
});

$('#runesFour').click(function(){
	$('.active').slideUp(1000, function(){
		$(this).removeClass('active');
		$('#historyFour').slideDown(1000).addClass('active');
	});
});

$('#runesFive').click(function(){
	$('.active').slideUp(1000, function(){
		$(this).removeClass('active');
		$('#historyFive').slideDown(1000).addClass('active');
	});
});