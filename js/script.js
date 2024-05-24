    // gallery
    document.addEventListener("DOMContentLoaded", function() {
        const carousel = document.querySelector('.carousel');
        const images = document.querySelectorAll('.carousel img');
        const totalImages = images.length;
        const prevButton = document.getElementById('left');
        const nextButton = document.getElementById('right');
    
        let currentIndex = 0;
    
        // Function to scroll to the specified index
        function scrollToIndex(index) {
            const scrollAmount = index * (carousel.offsetWidth / 3); // Assuming 3 images are visible at a time
            carousel.scroll({
                left: scrollAmount,
                behavior: 'smooth'
            });
            currentIndex = index;
        }
    
        // Event listener for previous button
        prevButton.addEventListener('click', function() {
            if (currentIndex > 0) {
                scrollToIndex(currentIndex - 1);
            } else {
                scrollToIndex(totalImages - 3); // Assuming 3 images are visible at a time
            }
        });
    
        // Event listener for next button
        nextButton.addEventListener('click', function() {
            if (currentIndex < totalImages - 3) { // Assuming 3 images are visible at a time
                scrollToIndex(currentIndex + 1);
            } else {
                scrollToIndex(0);
            }
        });
    });    
    // about me
    function scrollToAbout() {
    var aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
    // services
    function scrollToServices() {
        var servicesSection = document.getElementById("services");
        servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
    window.addEventListener("DOMContentLoaded", function() {
        console.log("DOMContentLoaded event fired");
        var urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('scrollTo') && urlParams.get('scrollTo') === 'services') {
            console.log("Scrolling to services section");
            var servicesSection = document.getElementById("services");
            console.log("Services section:", servicesSection);
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
    // We are creating a variable that's linked to the class tab-links
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    
    function opentab(tabname){ 
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }