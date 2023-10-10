var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var totalSlides = slides.length;
        
        if (n > totalSlides) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = totalSlides;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";

        // Update the image count
        var currentSlide = document.querySelector(".current-slide");
        var totalSlideCount = document.querySelector(".total-slides");
        currentSlide.textContent = slideIndex;
        totalSlideCount.textContent = totalSlides;
    }