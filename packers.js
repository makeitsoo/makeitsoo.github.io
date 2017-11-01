// When the factButton is clicked...
$("#factButton").on("click", function() {
	// generate random number between 0 and 4 (the number of facts in the packerFacts)
	var number = Math.floor((Math.random() * packerFacts.length));
	// display the fact from the packerFacts that is in the random position just generated
	$("#factText").text(booFacts[number])
})

// This array holds all of our packerFacts
var packerFacts = ["The Green Bay Packers are the third-oldest NFL franchise, established in 1919.", "The Packers are the only non-profit, professional major league team in the United States, and are owned by the community.", "The team was founded by Earl 'Curly' Lambeau and George Whitney Calhoun.", "The team is so popular with fans that season tickets have been sold out since 1960.", "The current wait time for season tickets is 40 years. The waiting list is approximately 83,881 names long.","The Green Bay Packers won the Super Bowl in 1966 (I), 1967 (II), 1996 (XXXI), and 2010 (XLV).","Prior to the 1970 AFL and NFL merger the Green Bay Packers won the NFL Championships 11 times, including the years 1929, 1930, 1931, 1936, 1939, 1944, 1961, 1962, 1965, 1966, and 1967." ]

// textPink button 
$("#textPink").on("click", function() {
	// change funText to pink.
	$("#funText").css("color", "pink")
})

// textOrange button 
$("#textOrange").on("click", function() {
	// change funText to orange.	
	$("#funText").css("color", "orange")
})

// textGreen button
$("#textGreen").on("click", function() {
	// change funText to green.
	$("#funText").css("color", "green")
})


// boxGrow button 
$("#boxGrow").on("click", function() {
	// increase the size of the box.
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

// boxShrink button
$("#boxShrink").on("click", function() {
	// decrease the size of the box.
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})