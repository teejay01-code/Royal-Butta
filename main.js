const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});





const form2 = document.getElementById("booking-form-2");

form2.addEventListener("submit", function (e) {
  e.preventDefault();

  const fullname = document.getElementById("fullname").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const eventType = document.getElementById("eventType").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;
  const location = document.getElementById("location").value;
  const services = document.getElementById("services").value;
  const notes = document.getElementById("notes").value;

  const businessNumber = "2347079500832"; // Update with your WhatsApp number

  const message = `Hello ROYAL BUTTA!%0A
  I’d like to book your party/event services.%0A
  Full Name: ${fullname}%0A
  Phone: ${phone}%0A
  Email: ${email}%0A
  Event Type: ${eventType}%0A
  Event Start Date: ${startDate}%0A
  Event End Date: ${endDate}%0A
  Event Location: ${location}%0A
  Services Needed: ${services}%0A
  Additional Notes: ${notes || "None"}%0A`;

  Swal.fire({
    title: "<strong>Success!</strong>",
    html: "Your booking has been submitted successfully.",
    icon: "success",
    confirmButtonText: "OK",
  });

  window.location.href = `https://wa.me/${businessNumber}?text=${message}`;
});




const banner = document.querySelector(".banner__wrapper");

const bannerContent = Array.from(banner.children);

bannerContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  banner.appendChild(duplicateNode);
});




const questions = document.querySelectorAll(".faq-question");

questions.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;

    // Toggle visibility
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      // Hide all other answers
      document
        .querySelectorAll(".faq-answer")
        .forEach((a) => (a.style.display = "none"));
      answer.style.display = "block";
    }
  });
});


