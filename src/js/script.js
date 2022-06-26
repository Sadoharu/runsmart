window.addEventListener('DOMContentLoaded', () => {
//slider
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

//tabs
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
				if ((i + 1) == e.currentTarget.getAttribute('data-tab')) {
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
//modal
	const buttonConsultation = document.querySelectorAll('[data-modal="consultation"]'),
		modalConsultation = document.querySelector('#consultation'),
		modalClose = document.querySelectorAll('.modal__close'),
		buttonOrder = document.querySelectorAll('.button_mini'),
		modalOrder = document.querySelector('#order'),
		orderName = document.querySelector('[data-modal="orderName"]'),
		overlay = document.querySelector('.overlay'),
		modalOverlay = document.querySelector('.overlay form'),
		modalThanks = document.querySelector('#thanks');
	  

	buttonConsultation.forEach(item => {
		item.addEventListener('click', e => {
			// modalConsultation.style.display = 'block';
			// modalConsultation.parentNode.style.display = 'block';
			modalConsultation.style.visibility = 'visible';
			modalConsultation.style.opacity = '100%';
			modalConsultation.parentNode.style.visibility = 'visible';
			modalConsultation.parentNode.style.opacity = '100%';
			document.body.style.overflow = 'hidden';
		});
	});
	let ti;
    function modalTimerId() { 
		ti = setTimeout(() => {
		closeModal();
	}, 4000);}
	
	
	
	function closeModal() {
		// modalConsultation.style.display = 'none';
		// modalConsultation.parentNode.style.display = 'none';
		// modalOrder.style.display = 'none';
		// modalThanks.style.display = 'none';
		modalConsultation.style.visibility = 'hidden';
		modalConsultation.style.opacity = '0';
		modalConsultation.parentNode.style.visibility = 'hidden';
		modalConsultation.parentNode.style.opacity = '0';
		modalOrder.style.visibility = 'hidden';
		modalOrder.style.opacity = '0';
		modalThanks.style.visibility = 'hidden';
		modalThanks.style.opacity = '0';
		document.body.style.overflow = '';
		orderName.textContent = 'Консультация';
		clearTimeout(ti);

	}


	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && overlay.style.visibility == 'visible') {
		closeModal();
		}
	});

	overlay.addEventListener('click', e => {
		if (e.target == overlay || e.target.getAttribute('data-close') == "") {
			closeModal();
		}
	});


	buttonOrder.forEach(item => {
		item.addEventListener('click', e => {
			modalOrder.style.visibility = 'visible';
			modalOrder.style.opacity = '100%';
			modalOrder.parentNode.style.visibility = 'visible';
			modalOrder.parentNode.style.opacity = '100%';
			// modalOrder.style.display = 'block';
			// modalOrder.parentNode.style.display = 'block';
			orderName.textContent = e.currentTarget.parentNode.parentNode.querySelector('.catalog-item .catalog-item__subtitle').textContent;
			document.body.style.overflow = 'hidden';
		});

	});


	const forms = document.querySelectorAll('form');

	forms.forEach(item => {
		item.addEventListener('submit', e => {
			e.preventDefault();
			closeModal();
			const formData = new FormData(item);
			const nameItem = Object.fromEntries(formData.entries());
			nameItem.item = orderName.textContent;
			const json = JSON.stringify(nameItem);
			// modalThanks.style.display = 'block';
			// modalThanks.parentNode.style.display = 'block';
			modalThanks.style.visibility = 'visible';
			modalThanks.style.opacity = '100%';
			modalThanks.parentNode.style.visibility = 'visible';
			modalThanks.parentNode.style.opacity = '100%';
			modalTimerId();
			fetch('mailer/smart.php', {
				method: 'POST',
				headers: {
					//Опечатки зло
					'Content-type': 'application/json'
				},
				body: json
			}).then(() => {
			}).catch(()=> console.log('oh,no'))
			.finally(()=>{
				item.reset();
				orderName.textContent = 'Консультация';
			});
		} );
	});

	
//up
const buttonUp = document.querySelector('.pageup');
addEventListener('scroll', (e)=>{

	if (window.pageYOffset > 1200) {
		buttonUp.style.visibility = 'visible';
		buttonUp.style.opacity = '100%';
	} else if (window.pageYOffset < 1200) {
		buttonUp.style.visibility = 'hidden';
		buttonUp.style.opacity = '0';
	}
});





});