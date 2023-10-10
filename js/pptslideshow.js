var currentSlideAccident = 1;
    var totalSlidesAccident = document.getElementsByClassName("mySlides").length;

    function plusSlidesAccidentDetection(n) {
        showSlideAccident(currentSlideAccident += n);
    }

    function showSlideAccident(n) {
        if (n > totalSlidesAccident) { currentSlideAccident = 1; }
        if (n < 1) { currentSlideAccident = totalSlidesAccident; }

        var slides = document.getElementsByClassName("mySlides");
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[currentSlideAccident - 1].style.display = "block";
        document.querySelector(".current-slide-accident").textContent = currentSlideAccident;
    }

    var currentSlideGesture = 1;
    var totalSlidesGesture = document.getElementsByClassName("mySlidesGesture").length;

    function plusSlidesGestureControl(n) {
        showSlideGesture(currentSlideGesture += n);
    }

    function showSlideGesture(n) {
        if (n > totalSlidesGesture) { currentSlideGesture = 1; }
        if (n < 1) { currentSlideGesture = totalSlidesGesture; }

        var slides = document.getElementsByClassName("mySlidesGesture");
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[currentSlideGesture - 1].style.display = "block";
        document.querySelector(".current-slide-gesture").textContent = currentSlideGesture;
    }
	
	var currentSlideArm = 1;
    var totalSlidesArm = document.getElementsByClassName("mySlidesArm").length;

    function plusSlidesArm(n) {
        showSlideArm(currentSlideArm += n);
    }

    function showSlideArm(n) {
        if (n > totalSlidesArm) { currentSlideArm = 1; }
        if (n < 1) { currentSlideArm = totalSlidesArm; }

        var slides = document.getElementsByClassName("mySlidesArm");
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[currentSlideArm - 1].style.display = "block";
        document.querySelector(".current-slide-arm").textContent = currentSlideArm;
    }

	var currentSlideGM = 1;
    var totalSlidesGM = document.getElementsByClassName("mySlidesGM").length;

    function plusSlidesGM(n) {
        showSlideGM(currentSlideGM += n);
    }

    function showSlideGM(n) {
        if (n > totalSlidesGM) { currentSlideGM = 1; }
        if (n < 1) { currentSlideGM = totalSlidesGM; }

        var slides = document.getElementsByClassName("mySlidesGM");
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[currentSlideGM - 1].style.display = "block";
        document.querySelector(".current-slide-gm").textContent = currentSlideGM;
    }

    // Start the slideshows when the page loads
    window.onload = function() {
        showSlideAccident(currentSlideAccident);
        showSlideGesture(currentSlideGesture);
		showSlideArm(currentSlideArm);
		showSlideGM(currentSlideGM);
    };