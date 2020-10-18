/* Navbar */
const navbar = document.querySelector('.js-custom-navbar');
const menuIcon = document.querySelector('.js-menu-icon');
const menuIconClose = document.querySelector('.js-menu-icon span');


menuIcon.addEventListener('click', e => {
  e.preventDefault();
  navbar.classList.toggle("open");
  menuIconClose.classList.toggle("fa-times");
});

/* Staff */
const horizontalAccordions = $(".accordion.width");

horizontalAccordions.each((index, element) => {
	const accordion = $(element);
  const collapse = accordion.find(".collapse");
  const bodies = collapse.find("> *");
  accordion.height(accordion.height());  
  bodies.width(bodies.eq(0).width());
  collapse.not(".show").each((index, element) => {
  	$(element).parent().find("[data-toggle='collapse']").addClass("collapsed");
  });
});