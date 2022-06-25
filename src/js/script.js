window.addEventListener('DOMContentLoaded', () => {
	
const slider = tns({
	container: '.carusel__inner',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	controls: false,
	navPosition: 'bottom'
});

document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
});


const tab = document.querySelectorAll('.catalog__tab'),
			catalogContent = document.querySelectorAll('.catalog__content'),
			catalogItemLink = document.querySelectorAll('.catalog-item__link'),
			catalogItemPrev = document.querySelectorAll('.catalog-item__prev');
			

tab.forEach(item => {
		item.addEventListener('click', e => {
			tab.forEach(tabs => tabs.classList.remove('catalog__tab_active'));
			catalogContent.forEach(tabs => tabs.classList.remove('catalog__content_active'));

			e.currentTarget.classList.add('catalog__tab_active');
			for (let i = 0; i < catalogContent.length; i++) {
				if ( (i+1) == e.currentTarget.getAttribute('data-tab') ) {
					catalogContent[i].classList.add('catalog__content_active');
				}
			}			
		});
});

catalogItemPrev.forEach(item => {
item.addEventListener('click', e => {
	e.preventDefault();
	e.currentTarget.parentNode.classList.remove('catalog-item__list_active');
	e.currentTarget.parentNode.previousSibling.previousSibling.classList.add('catalog-item__content_active');


});
});

catalogItemLink.forEach(item => {
	item.addEventListener('click', e => {
		e.preventDefault();
		e.currentTarget.parentNode.nextSibling.nextSibling.classList.add('catalog-item__list_active');
		e.currentTarget.parentNode.classList.remove('catalog-item__content_active');

	
	});
	});

});