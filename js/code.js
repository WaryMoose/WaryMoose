$(document).ready(function() {
	// skills section where accordion comes into play
	// when the h3 tag of the box is clicked
	var box = $(".sideInfo h3");
		box.bind("click", function  (e) {
			$(".sideInfo").removeClass("activeBar");
			e.target.parentElement.className ="sideInfo activeBar";
		});


	// video element 
	// play when user clicks
	var homeVideo = document.getElementById('homeVid');
	homeVideo.addEventListener("click", function() {
		if (homeVideo.paused) {
			homeVideo.play();
		} else {
			homeVideo.pause();
		};
	}, false);

	// hide right mouse options
	homeVideo.addEventListener("contextmenu", function (e) {
		e.preventDefault();
	});

	// works section
	// show the projects images with response to the user click

	var workBtns = $("#workBtns ul li");
	var prjBox = $(".workBx");
	workBtns.bind("click", function (e) {
		workBtns.removeClass("activeBtn");  
		e.target.className = "activeBtn"; //styling the active buttons

		$(".activeBtn").bind("click", function (e) {
			e.preventDefault();
		}); // prevent the clicking behaviour for active buttons

		if (e.target.innerText == "Type 1") {
			prjBox.fadeOut("1000");
			$(".Type1").fadeIn("slow"); // show the boxes only belonging to type 1
		} else if (e.target.innerText == "Type 2") {
			prjBox.fadeOut("1000");
			$(".Type2").fadeIn("slow");  // show the boxes only belonging to type 2
		} else {
			prjBox.fadeIn("1000");  // show all the boxes
		}
	});

	// Navigation section
	// Third party Smooth Animated Scrolling
	var topOffset = 43;
	$('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
	    $('html,body').animate({
	      scrollTop: target.offset().top-topOffset
	    }, 1000);
	    return false;
	  }
	} 
	}); 

	// whenever user scrolls
	window.onscroll = function  () {
		var navAll = $("#topNav li");
		var scrollPos = window.scrollY+topOffset;

		// make all the list items inactive
		navAll.removeClass("activeNav");

		// make the nav items active with respect to the appearance of the sections
		if (scrollPos >= $("#home").offset().top) {
			navAll.removeClass("activeNav");
			$("#navHome").addClass("activeNav");
		} // for home menu

		if (scrollPos >= $("#services").offset().top) {
			navAll.removeClass("activeNav");
			$("#navServices").addClass("activeNav");
		} // for services menu

		if (scrollPos >= $("#works").offset().top) {
			navAll.removeClass("activeNav");
			$("#navPortfolio").addClass("activeNav");
		} // for works menu

		if (scrollPos >= $("#team").offset().top-1) {
			navAll.removeClass("activeNav");
			$("#navAbout").addClass("activeNav");
		} // for about menu

		if (scrollPos >= $("#contact").offset().top-1) {
			navAll.removeClass("activeNav");
			$("#navContact").addClass("activeNav");
		} // for works menu
	};
	
	// Quote Section
	// Previewing quotes one by one automatically

	var qtAll = $("#quotHold article"); //array of all three quotes
	var dotAll = $("#dotHold li"); // array of all three dots
	var qtIndex = 0; //index to store number of the quot sequence
	
	function displayQuot () {
		qtAll.removeClass("activQt"); // make every single quot default
		dotAll.removeClass("activeDot"); //make every single dots default
		qtAll[qtIndex].className = "activQt";// make the specific quote active
		dotAll[qtIndex].className = "activeDot"; // make the specific dot active
	}
	function updateQuot () {
		// check the index of the quotes
		if (qtIndex==2) {
			qtIndex=0;
		} else {
			qtIndex++;
		};
		
		displayQuot();
	};

	setInterval(updateQuot, 5000);

	// change the quot with respect to dots clicked
	dotAll.bind("click", function(e) {
		var quotId = e.target.getAttribute('data-tgr');
		qtAll.removeClass("activQt");
		dotAll.removeClass("activeDot");
		document.getElementById(quotId).className = "activQt";
		e.target.className = "activeDot";
	});
 });