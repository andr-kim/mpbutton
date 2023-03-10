document.querySelectorAll('.tabs2-triggers__item').forEach((item) =>
	item.addEventListener('click', function (e) {
		e.preventDefault();
		const id = e.target.getAttribute('href').replace('#', '');


		document.querySelectorAll('.tabs2-triggers__item').forEach(
			(child) => child.classList.remove('tabs2-triggers__item--active')
		);
		document.querySelectorAll('.tabs2-content-wrap').forEach(
			(child) => child.classList.remove('tabs2-content-wrap--active')
		);

		item.classList.add('tabs2-triggers__item--active');
		document.getElementById(id).classList.add('tabs2-content-wrap--active')
	})
);

document.querySelector('.tabs2-triggers__item').click();
document.querySelector('[href="#tab-301"]').classList.add('tabs2-triggers__item--active');


