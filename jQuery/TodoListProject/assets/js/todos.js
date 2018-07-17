$(document).ready(function() {

	// Check off Specific Todos By Clicking
	// $('li').click(function() { // only add listeners for existing elements
	// $('li').on("click", function() { // will add listeners for all potential future elements
	$('ul').on('click', 'li', function() { // will add listeners for all potential future elements
		$(this).toggleClass('completed');
	});

	// Click on X to delete Todo
	// $('span').click(function(event) {
	$('ul').on('click','span',function(event) {
		// $(this).parent().remove();
		//$(this).parent().fadeOut(1000).remove(); // removes before fadeOut finishes
		$(this).parent().fadeOut(500, function() { // refers to the element that was clicked on
			$(this).remove(); // refers to the li not to the span cause we are fading Out the parent
		});

		// stop this element from bubbling up to other elements 
		event.stopPropagation();
	});


	$("input[type='text']").keypress(function(event) {
		if (event.which === 13) { // 13 corresponds to the ENTER key
			// grabbing new todo text from user input
			var todoText = $(this).val();
			$(this).val(""); // clear the input
			// create a new li and add to ul
			$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>"); 

		}
	});

	$('.fa-plus').click(function() {
		$("input[type='text']").fadeToggle();
	});
});