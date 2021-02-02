
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
//Mobile Nav Screen
$('a[href*="#"]').on("click", function (e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1500);
    e.preventDefault(); //this is the important line.
});
$(document).on('scroll', function (e) {
    console.log('scrolling')
    if ($(this).scrollTop() + 100 < $('#About').offset().top) {
        $('.nav-item').removeClass('active rounded')

        $('.nav-item:eq(0)').addClass('active rounded')
    }

    if ($(this).scrollTop() + 100 >= $('#About').offset().top) {
        $('.nav-item').removeClass('active rounded')

        $('.nav-item:eq(1)').addClass('active rounded')
    }

    if ($(this).scrollTop() + 100 >= $('#Education').offset().top) {
        $('.nav-item').removeClass('active rounded')

        $('.nav-item:eq(2)').addClass('active rounded')
    }
    if ($(this).scrollTop() + 100 >= $('#Skill').offset().top) {
        $('.nav-item').removeClass('active rounded')

        $('.nav-item:eq(3)').addClass('active rounded')
    }

});
// touchstart
$('.nav-item').on('click', function (e) {
    $('.nav-item').removeClass('active rounded')
    $(this).addClass('active rounded')
})

$('.nav-item').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

// <!-- <script> --> -->
(function ($) {

    console.log("hel")

    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);

    });

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navigation").removeClass("sticky");
        } else {
            $(".navigation").addClass("sticky");
        }
    });

}(jQuery)
);






// ES6 Class
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        // this.txtElement.innerHTML = "";
        this.count = 0;
        this.isDeleting = false;
        console.log("hello")
    }

    type() {
        this.count = this.count + 1;
        if (this.count > 22) {
            // return;
            this.txtElement.innerHTML = ``
            this.txt = ""
            this.words = ""


            return;
        } else {
            // Current index of word
            const current = this.wordIndex % this.words.length;
            // Get full text of current word
            const fullTxt = this.words[current];

            // Check if deleting
            if (this.isDeleting) {
                // Remove char
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                // Add char
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            // Insert txt into element
            this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;


            // Initial Type Speed
            let typeSpeed = 300;

            if (this.isDeleting) {
                typeSpeed /= 2;
            }

            else {

            }

            // If word is complete
            if (!this.isDeleting && this.txt === fullTxt) {
                // Make pause at end
                typeSpeed = this.wait;
                // Set delete to true
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                // Move to next word
                this.wordIndex++;
                // Pause before start typing
                typeSpeed = 500;
            }

            setTimeout(() => this.type(), typeSpeed);
        }
    }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {

    console.log("hello")
    const txtElement = document.querySelector('.txt-type');
    // console.log(txtElement.getAttribute('data-words'))
    const words = JSON.parse(txtElement.getAttribute('data-words'));

    console.log(words)
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
    const tx = document.querySelector('animated');
    txtElement.removeChild(tx)
}
