// стили
// css транзишены
// id -> class
// 
//
//
//
//
//

var lessonParams = [1, 3, 2, 9, 9, 9, 3, 3, 9, 27, 6, 27, 15, 27],
	firstController = [],
	secondController = [],
	finalController = [],
	trig2 = true,
	trig1 = true,
	starter = false;

$(document).ready(function() {
	for (var q = 0; q < 4; ) {
		d = '#ch_num'+ q + '';
		$(d).text(lessonParams[q++]);
	}

	$('#b_3').hide();
	$('#eq1').hide();
	$('#b_4').hide();
	$('#eq2').hide();

	$('.input').focusout(function() {
		var n = $(this).attr('r');
		number = parseInt(n) + 4;
		console.log('number ', number);
		var value = $(this).val();
		var value2 = lessonParams[number];
		if (value != value2 && (value != '')) {
			$(this).css('background-color', '#e74c3c');
			$('#a_i_pop'+n).css('opacity', '1');
		}
		if (value == value2) {
			$(this).css('background-color', '#2ecc71').css('color', '#fff');
			$('#a_i_pop'+n).css('opacity', '0');
			$(this).attr('disabled', true);
			firstController.push(number);
			console.log('length1 ', firstController.length);
		}

		if( firstController.length == 4 && trig1) {
			$('.main-move').animate({'left': '-=230px'}, 1000, function() {
				$('.input').css('background-color', '#fff').css('color', '#000');
				$('#b_3').show('slow', function() {
					console.log('showed 3');
					$('#b_input').focus();
				});
				$('#eq1').show('slow');
				trig1 = false;
			});
		}

	});	
	$('.ch_solo').focusout(function() {
		var n = $(this).attr('r');
		number = parseInt(n,10) + 4;
		console.log('number ', number);
		var value = $(this).val();
		var value2 = lessonParams[number];
		if (value != value2 && (value != '')) {
			$(this).css('background-color', '#e74c3c');
			$('#a_i_pop'+n).css('opacity', '1');
		}
		if (value == value2) {
			$(this).css('background-color', '#2ecc71').css('color', '#fff');
			$('#a_i_pop'+n).css('opacity', '0');
			$(this).attr('disabled', true);
			secondController.push(number);
			console.log('length2 ', secondController.length);
		}

		if( secondController.length == 4 && trig2) {
			$('.main-move').animate({'left': '-=200px'}, 1000, function() {
				$('.ch_solo').css('background-color', '#fff').css('color', '#000');
				$('#b_4').show('slow', function() {
					$('#c_input').focus(); 
				});
				$('#eq2').show('slow');
				trig2 = false;
			});
		}
	});	

	$('.ch_fin').focusout(function() {
		var n = $(this).attr('r');
		number = parseInt(n,10) + 4;
		console.log('number ', number);
		var value = $(this).val();
		var value2 = lessonParams[number];
		if (value != value2 && (value != '')) {
			$(this).css('background-color', '#e74c3c');
			$('#a_i_pop'+n).css('opacity', '1');
		}
		if (value == value2) {
			$(this).css('background-color', '#2ecc71').css('color', '#fff');
			$('#a_i_pop'+n).css('opacity', '0');
			$(this).attr('disabled', true);
			finalController.push(number);
			console.log('length2 ', finalController.length);
		}

		if( finalController.length == 2) {
			$('.main-move').fadeTo(600, 0, function() {
				$('.all').fadeTo(100,0, function() {
					$('.all').html('Молодец').addClass('finalText').fadeTo(1000,1);
					starter = true;
					setTimeout(function() {
						location.reload();
					}, 1000);
				});
			});
		}

	});	
	// $('.all').click(function() {
	// 	if ( starter ) {
	// 		location.reload();
	// 	}
	// });
});












