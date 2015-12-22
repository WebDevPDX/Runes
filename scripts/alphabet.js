var findInObject = 0;

var alphabetCreation = function() {
	
	//loop through the array and create a div that contains the image (.alphabetImage)
	for (i=0; i<theRunes.length; i++) {
		var alphabet = ('<div class="alphabetImage">');
		alphabet += ('<img class="alphabetRune" src="img/RuneImg/' + theRunes[i].image + '">')
		alphabet += ('</div>')

		//append the div to the Alphabet <section> 
		$('#theAlphabet').append(alphabet);
	}
}

//let the alphabet section populate when document is ready
var alphabetAnimation = function () {

	//delay everything by 2 sec until html is fully loaded
	setTimeout(function(){

		//when ready
		$(document).ready(function(){

			//for every image do
			$('.alphabetImage').each(function(i){

				//give it time between images (80ms)
				setTimeout(function(){

					//add class .is-showing (CSS contains the transition)
					$('.alphabetImage').eq(i).addClass('is-showing');
				}, 150 * (i + 1));
			});
		})
	}, 2000);
}

var runeDescription = function () {

	//on mouse click display the information on the left
	$('.alphabetRune').click(function() {

		//find the rune image that is clicked and recreate the value used in the object array

		var imgString = $(this).get(0).outerHTML;
		imgString = imgString.substr(43, 48);
		imgString = imgString.substring(0, 9);

		//find the value in the object array

		for (findInObject = 0; findInObject < theRunes.length; findInObject++) {
			if (theRunes[findInObject].image === imgString) {
				break;
			}
		}

		//create the section content

		descriptionText = ('<section id="fullInfo" class= "left">' + theRunes[findInObject].descriptions + theRunes[findInObject].tooltip + '</section>' );
		
		//append the section to the page

		$('#wrapper').append(descriptionText);

		$('.active').slideUp(1000, function(){
			$('.active').removeClass('active').remove();
			$('#fullInfo').addClass('active').slideDown(1000);
		});
	});
}

alphabetCreation();
runeDescription();