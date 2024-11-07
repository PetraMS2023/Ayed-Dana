document.addEventListener('DOMContentLoaded', function () {
	var menuIcon = document.querySelector('.menu-icon');
	var closeIcon = document.querySelector('.close-icon');
	var menuItems = document.querySelector('.menu-items');
	menuIcon.addEventListener('click', function () {
		menuItems.style.display = 'block';
		menuIcon.style.display = 'none';
		closeIcon.style.display = 'block';
	});
	closeIcon.addEventListener('click', function () {
		menuItems.style.display = 'none';
		menuIcon.style.display = 'block';
		closeIcon.style.display = 'none';
	});
});




let drop = document.querySelectorAll('.drop');

drop.forEach((e)=>{
  e.addEventListener('click',()=>{
    e.classList.toggle('active');
  })
})





function checkScroll() {
	var elementsToShow = document.querySelectorAll('.animate:not(.active)');
	Array.prototype.forEach.call(elementsToShow, function(element) {
	  if (isElementInViewport(element)) {
		element.classList.add('active');
	  }
	});
}

function isElementInViewport(el) {
	var rect = el.getBoundingClientRect();
	return (
	  rect.top >= 0 &&
	  rect.left >= 0 &&
	  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
	  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}
  
window.addEventListener('scroll', checkScroll);

let navBar = document.querySelector(".nav-bar");
window.addEventListener('scroll',()=>{
	if(window.scrollY >= 100){
		navBar.classList.add('fix');
	}else{
		navBar.classList.remove('fix');
	}
})