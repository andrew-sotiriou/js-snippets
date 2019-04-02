import '../scss/index.scss';

//Accordion
document.addEventListener('click', function (event) {
	//Do nothing if not clicking a section-header
	if (!event.target.classList.contains('section-header')) return;

	var block = event.target.nextSibling.nextSibling.classList;
	if (block.contains('active')){
		block.remove('active');
    	return;
	}
	else {
		var openAccordions = document.querySelectorAll('.section-container.active');
		openAccordions.forEach(openAccordions => { openAccordions.classList.remove('active'); });
		block.add('active');
	}
});