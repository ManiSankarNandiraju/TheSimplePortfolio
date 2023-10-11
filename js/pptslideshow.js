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
		
	var currentSlideInsta= 1;
    var totalSlidesInsta= document.getElementsByClassName("mySlidesInsta").length;

    function plusSlidesInsta(n) {
        showSlideInsta(currentSlideInsta+= n);
    }

    function showSlideInsta(n) {
        if (n > totalSlidesInsta) { currentSlideInsta= 1; }
        if (n < 1) { currentSlideInsta= totalSlidesInsta; }

        var slides = document.getElementsByClassName("mySlidesInsta");
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[currentSlideInsta- 1].style.display = "block";
        document.querySelector(".current-slide-Insta").textContent = currentSlideInsta;
    }
	var currentSlideCollege = 1;
    var totalSlidesCollege = document.getElementsByClassName("mySlidesCollege").length;

    function plusSlidesCollege(n) {
        showSlideCollege(currentSlideCollege += n);
    }

    function showSlideCollege(n) {
        if (n > totalSlidesCollege) { currentSlideCollege = 1; }
        if (n < 1) { currentSlideCollege = totalSlidesCollege; }

        var slides = document.getElementsByClassName("mySlidesCollege");
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[currentSlideCollege - 1].style.display = "block";
        document.querySelector(".current-slide-college").textContent = currentSlideCollege;
    }

    var currentSlideArt = 1;
    var totalSlidesArt = document.getElementsByClassName("mySlidesArt").length;

    function plusSlidesArt(n) {
        showSlideArt(currentSlideArt += n);
    }

    function showSlideArt(n) {
        if (n > totalSlidesArt) { currentSlideArt = 1; }
        if (n < 1) { currentSlideArt = totalSlidesArt; }

        var slides = document.getElementsByClassName("mySlidesArt");
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[currentSlideArt - 1].style.display = "block";
        document.querySelector(".current-slide-art").textContent = currentSlideArt;
    }

    // Start the slideshows when the page loads
    window.onload = function() {
        showSlideAccident(currentSlideAccident);
        showSlideGesture(currentSlideGesture);
        showSlideArm(currentSlideArm);
        showSlideGM(currentSlideGM);
        showSlideInsta(currentSlideInsta);
        showSlideCollege(currentSlideCollege);
        showSlideArt(currentSlideArt); // Corrected function name here
    };