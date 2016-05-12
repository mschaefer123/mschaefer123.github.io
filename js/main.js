// 16.05.13 | General Assembly FEWD | Final Project | Pinterest e-comm checkout prototype | Matt Schaefer 

// ============================================
// JS Feature List
// ============================================

// ============================================
// Page Load
// ============================================

// Hide input labels
$('label').addClass('hiddenLabel');
// Hide Submit button

// ============================================
// Input Functions
// ============================================

// On click show and highlight label:
$('input').on('focus', function () {
	// Show label
	$(this).prev().removeClass('hiddenLabel');
	// // Hide placeholder text

	// // addClass .highlightLabel in CC
	$(this).prev().addClass('highlightLabel');

	// // AddClass .highlightInput in CSS
	$(this).addClass('highlightInput');
		// if no text in input then 
			// hide label
			// show placeholder text

// if click other field or tab then
	// hideClass .highlight in CSS
});

// When the user blur on input
$('input').on('blur', function () {
	// addClass
	$(this).prev().addClass('hiddenLabel');
	// Hide placeholder text

	// removeClass .highlightLabel in CC
	$(this).prev().removeClass('highlightLabel');

	// removeClass .highlightInput in CSS
	$(this).removeClass('highlightInput');
});

// hide the placeholder when click and show when off
$(function(){
    $('input').data('holder',$('input').attr('placeholder'));
    $('input').focusin(function(){
        $(this).attr('placeholder','');
    });
    $('input').focusout(function(){
        $(this).attr('placeholder',$(this).data('holder'));
    });
})

// ============================================
// Shipping Form
// ============================================

// on "Save Shipping" button click: 
	$('#shippingButton').on('focus', function () {
		// Change button text to "Edit Shipping" 
		$('#shippingButton').html('Edit Shipping');
		// SlideUp shipping fieldset:
		$('.shipping').addClass('collapseFieldset');
		// Hide input box styling
		// Hide privacy policy text
		$('.shipping .policy').hide()
		// addClass to Slide up button
		$('#shippingButton').addClass('transformButton')
		// Add checkmark icon to top right of feildset
		// Add first and last name, Address 1, City, State, Zip user input text to Review Form
});

//blur version of the above click function
	$('#shippingButton').on('blur', function () {
		// Change button text to "Save Shipping" 
		$('#shippingButton').html('Save Shipping');
		// SlideDown shipping fieldset:
		$('.shipping').removeClass('collapseFieldset');
});

// ============================================
// Payment Form
// ============================================

// Hide class .billingInputs and display .shippingInputs class (user input from shipping inputs) when user ticks .shippingCheckbox

// on "Save Payment" button click: 
	$('#paymentButton').on('focus', function () {
		// Change button text to "Edit Payment" 
		$('#paymentButton').html('Edit Payment');
		// SlideUp payment fieldset:
		$('.payment').addClass('collapseFieldset');
		// Hide input box styling
		// Hide privacy policy text
		$('.payment .policy').hide()
		// addClass to Slide up button
		$('#paymentButton').addClass('transformButton');
		// Add checkmark icon to top right of feildset
});

//blur version of the above click function
	$('#paymentButton').on('blur', function () {
		// Change button text to "Save Shipping" 
		$('#paymentButton').html('Save Shipping');
		// SlideDown shipping fieldset:
		$('.payment').removeClass('collapseFieldset');
});

// ============================================
// Review Form
// ============================================

// If shipping and Payment form inputs are completed then display Submit button 

// Convert .quantity user input to a number
	// Multiply by 200
	// Display in sub total column

// Convert estimated tax ($5.00) into a number
// Convert shipping selection options into numbers
	// Display user selection in Shipping column

// Add .quantity, estimated tax, and shipping and display total # in Total column

// Store user inputs (First name, Last name, Address 1, City, State, Zip) from shipping form into var and display text results in review form

// Contra is hard...
var kkeys = [];
var konami = "38,38,40,40,37,39,37,39,66,65";

$(document).keydown(function(e) {
  kkeys.push( e.keyCode );
  if ( kkeys.toString().indexOf( konami ) >= 0 ){
    $(document).unbind('keydown',arguments.callee);

// Do contra stuff...
$('#quantity').attr('placeholder', '30');
$('#firstName').attr('placeholder', 'Mad');
$('#lastName').attr('placeholder', 'Dog');
$('#firstNameCard').attr('placeholder', 'Mad');
$('#lastNameCard').attr('placeholder', 'Dog');

  }
});

//turn 30 into a number
