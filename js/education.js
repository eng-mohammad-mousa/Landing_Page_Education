$(document).ready(function () {


	$(window).on("scroll load resize", function () {

		if ($(window).scrollTop() > 25) {
			$("nav").css({ opacity: "1", transform: "translateY(0%)" });
			$("#up-arrow").css({ opacity: "1", transform: "translateX(0%)" });
		} else {
			$("nav").css({ opacity: "0", transform: "translateY(-100%)" });
			$("#up-arrow").css({ opacity: "0", transform: "translateX(200%)" });
		}

		if ($(window).width() < 768) {
			$(".nav-link").on("click", function () {
				$("#nav-container").collapse("hide")
			});
			$(window).on("scroll", function () {
				$("#nav-container").collapse("hide")
			})
		}
	});



	var t = document.querySelectorAll(".needs-validation");

	Array.prototype.slice.call(t).forEach(function (o) {
		o.addEventListener("submit", function (a) {
			o.checkValidity() || (a.preventDefault(), a.stopPropagation()), o.classList.add("was-validated")
		}, !1)
	});

	$("textarea , .form-control").on({
		focus: function () {
			$(this).prev().css({
				transform: "translateY(0%)",
				color: "#00bb94"
			});
			$(this).css({
				"background-color": "rgba(1, 1, 1, 0.75)",
				borderColor: "#00bb94",
				boxShadow: "0px 0px 1px 0rem rgba(255,242,0,.9)"
			})
		},
		blur: function () {
			if ($(this).val().length == 0) {
				$(this).prev().css({
					transform: "translateY(155%)",
					color: "white"
				});

				$(this).css({
					"background-color": "rgba(1, 1, 1, 0.45)",
					borderColor: "white",
					boxShadow: "initial"
				})
			} else {
				$(this).prev().css({
					transform: "translateY(0%)",
					color: "#00bb94"
				});
				$(this).css({
					"background-color": "rgba(1, 1, 1, 0.75)",
					borderColor: "#00bb94",
					boxShadow: "0px 0px 1px 0rem rgba(255,242,0,.9)"
				})
			}

		}
	});

	AOS.init({
		disable: !1,
		startEvent: "DOMContentLoaded",
		initClassName: "aos-init",
		animatedClassName: "aos-animate",
		useClassNames: !1,
		disableMutationObserver: !1,
		debounceDelay: 50,
		throttleDelay: 99,
		offset: 110,
		delay: 0,
		duration: 800,
		easing: "ease",
		once: !1,
		mirror: !1,
		anchorPlacement: "top-bottom"
	});

	$("#up-arrow").click(function (e) {
		e.preventDefault();
		$("body , html").animate({ scrollTop: 0 }, 0);
	});

	var year = new Date().getFullYear();
	$("#year").text(year);

	$('body').css('overflow-y', 'visible');
	$("#cover").fadeOut();
	$("#body").css("opacity", "1")
});