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
$('input').on('click', function () {
	// Show label
	$('label').removeClass('hiddenLabel');
	// Hide placeholder text

	// addClass .highlightLabel in CC
	$('label').addClass('highlightLabel');

	// AddClass .highlightInput in CSS
	$('input').addClass('highlightInput');
		// if no text in input then 
			// hide label
			// show placeholder text

// if click other field or tab then
	// hideClass .highlight in CSS
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
	$('#shippingButton').on('click', function () {
	// How to toggle?
	// Change button text to "Edit Shipping" 
	$('#shippingButton').html('Edit Shipping');
	// SlideUp shipping fieldset:
		// Hide input box styling
		// Hide privacy policy text
		// Add checkmark icon to top right of feildset
		// Add first and last name, Address 1, City, State, Zip user input text to Review Form
});
// ============================================
// Payment Form
// ============================================

// Hide class .billingInputs and display .shippingInputs class (user input from shipping inputs) when user ticks .shippingCheckbox

// on "Save Payment" button click: 
	$('#paymentButton').on('click', function () {
	// How to toggle?
	// Change button text to "Edit Payment" 
	$('#paymentButton').html('Edit Payment');
	// SlideUp payment fieldset:
		// Hide input box styling
		// Hide privacy policy text
		// Add checkmark icon to top right of feildset
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

