// Anonymous function
$(function(){

	// For displaying data in textarea 
	var $keyboardInput = $('#keyboard-input'),

	// Keeping the 'shift' and 'capslock' disabled initially
	shift = false,
	capslock = false; 

	// Listening to click events
	$('#keyboard li').click(function(){
		var $this = $(this),
		character = $this.html();

		// check for left-Shift or right-shift key pressed
		if ($this.hasClass('left-shift') || $this.hasClass('right-shift')) {

			// change 'letter' class to 'uppercase' class
			$('.letter').toggleClass('uppercase');
			$('.symbol span').toggle();
			
			// set shift to the opposite boolean value i.e if it's true set it to false, and vice versa, and capslock to false
			shift = (shift === true) ? false : true;
			capslock = false;

			// Not do anything else
			return false;
		}

		// Capslock
		if ($this.hasClass('capslock')) {

			// Notice: It's only applied to class 'letter' and not 'symbol'
			$('.letter').toggleClass('uppercase');
			capslock = true;
			return false;
		}

		// Delete
		if ($this.hasClass('delete')) {

			// Taking whatever is present in 'textarea'
			var html = $keyboardInput.html();
			
			// same as string.substr(start,length);
			/* Example: Word is 'Hello' 

				Then var html = 'Hello';
				html.substr(0,5-1); i.e html.substr(0,4) -> returns 'Hell'

			*/
			$keyboardInput.html(html.substr(0, html.length - 1));
			return false;
		}

		// Special characters
		if ($this.hasClass('symbol')) character = $('span:visible', $this).html();
		if ($this.hasClass('space')) character = ' ';
		if ($this.hasClass('tab')) character = "\t";
		if ($this.hasClass('return')) character = "\n";

		// Uppercase letter
		if ($this.hasClass('uppercase')) character = character.toUpperCase();

		// Remove shift once a key is clicked.
		if (shift === true) {
			$('.symbol span').toggle();
			if (capslock === false) $('.letter').toggleClass('uppercase');
			
			shift = false;
		}

		// Add the character to 'textarea'
		$keyboardInput.html($keyboardInput.html() + character);
	});
});