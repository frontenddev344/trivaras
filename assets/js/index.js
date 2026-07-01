function openNav() {
  document.getElementById("mySidenavs").classList.add("open");
}

function closeNav() {
  document.getElementById("mySidenavs").classList.remove("open");
}



//  header sticky js start  
const header = document.querySelector("header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 40) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});
//  header sticky js end

$('.responsive').slick({
  dots: false,
  infinite: true,
  speed: 300,
  arrow: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("newsletterForm");

    if (!form) return;

    const name = document.getElementById("newsletterName");
    const email = document.getElementById("newsletterEmail");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    [name, email].forEach(input => {
        input.addEventListener("input", function () {
            this.classList.remove("input-error");
            this.nextElementSibling.innerText = "";
        });
    });

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        let isValid = true;

        function showError(input, message) {
            input.classList.add("input-error");
            input.nextElementSibling.innerText = message;
            isValid = false;
        }

        // Clear previous errors
        [name, email].forEach(input => {
            input.classList.remove("input-error");
            input.nextElementSibling.innerText = "";
        });

        if (name.value.trim() === "") {
            showError(name, "Name is required.");
        }

        if (email.value.trim() === "") {
            showError(email, "Email is required.");
        } else if (!emailPattern.test(email.value.trim())) {
            showError(email, "Enter a valid email.");
        }

        if (isValid) {
            // Here you can call your API later
            form.reset();
        }

    });

});


const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if (faq !== item) {
                faq.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});