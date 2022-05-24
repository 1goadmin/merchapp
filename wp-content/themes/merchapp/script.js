
//! Nav Scroll Effect
$(document).ready(function () {
	// Function to change the nav-bar on scroll
	$(window).scroll(function () {
	  $(window).scrollTop() >= 50
		? ($("header").addClass("scrolled"), $(".menu").addClass("scrolled2"),$(".menunav").addClass("scrolled2"))
		: ($("header").removeClass("scrolled"),

		  $(".menunav").removeClass("scrolled2"),
		  $(".menu").removeClass("scrolled2"));

	});
  });


  //! Nav Scroll Effect
  
  //! Prevent Anchor Redirects
  $(document).ready(function () {
	$("#togmenu").click(function (event) {
	  event.preventDefault();
	});
  });
  //! Prevent Redirects
  
  $(function () {
	$(window).bind("resize", function () {
	  console.log($(this).width());
	  if ($(this).width() < 991) {
		$(".menu").addClass("container-fluid");
	  } else if ($(this).width() > 991) {
		$(".menu").removeClass("container-fluid");
	  } else {
		$(".menu").removeClass("container-fluid");
	  }
	});
  });
  
  //!Toggle mobile menu -------------------------------------------------------------------------------------------------------------------------->
  //!I suggest to leave this function for it might break the whole navigation menu
  const toggle = document.querySelector(".toggle");
  const menu = document.querySelector(".menu");
  const navcolor = document.querySelector(".nav-container");
  const logo = document.querySelector(".invlogo");
  let initialSrc = "http://localhost/merchapp/wp-content/themes/merchapp/img/malogoinv.svg";
  let scrollSrc = "http://localhost/merchapp/wp-content/themes/merchapp/img/mobilogo.svg";
  
  function toggleMenu() {
	if (
	  menu.classList.contains("active") &&
	  navcolor.classList.contains("bgswitch")
	) {
	  menu.classList.remove("active");
	  navcolor.classList.remove("bgswitch");
	  // Todo adds the menu (burger)
	  toggle.querySelector("a").innerHTML = "<i class='fa fa-bars'></i>";
	  document.on;
	  // $(".invlogo").attr("src", initialSrc)
	} else {
	  menu.classList.add("active");
	  navcolor.classList.add("bgswitch");
	  //todo adds the close(x) icon
	  toggle.querySelector("a").innerHTML = "<i class='fa fa-times'></i>";
	  $(".invlogo").attr("src", scrollSrc);
	}
  }

  toggle.addEventListener("click", toggleMenu, false);
 
  //!Toggle Mobile Menu -------------------------------------------------------------------------------------------------------------------------->

  //!MouseScroll Effect -------------------------------------------------------------------------------------------------------------------------->
  $(document).ready(function () {
	// Function to change the nav-bar on scroll
	$(window).scroll(function () {
	  let initialSrc = "http://localhost/merchapp/wp-content/themes/merchapp/img/malogoinv.svg";
	  let scrollSrc = "http://localhost/merchapp/wp-content/themes/merchapp/img/mobilogo.svg";
	  $(window).scrollTop() >= 100
		? $(".invlogo").attr("src", scrollSrc)
		: ($(".invlogo").attr("src", initialSrc),
		  $(".nav-container").removeClass("bgswitch"),
		  $(".menu").removeClass("active"));
	});
	$(window).scrollTop() <= 100
	? $(".invlogo").attr("src", scrollSrc)
	: ($(".invlogo").attr("src", initialSrc),
	  $(".nav-container").addClass("bgswitch"),
	  $(".menu").addClass("active"));
	});


  //!MouseScroll Effect -------------------------------------------------------------------------------------------------------------------------->

